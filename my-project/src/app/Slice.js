import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";
const url = 'https://ebiddyarthi-server.herokuapp.com';
// const url='http://localhost:8080';
export const adminLogin = createAsyncThunk('adminLogin', async (data) => {
    const response = await axios.post(`${url}/admin/login`, data)
    return response;
}
); 

export const signUp = createAsyncThunk("sign_up", async (formData) => {
    const data = { ...formData, type: 'signupOTP' }
    const response = await axios.post(`${url}/signup`, data);
    return response;
});
export const logIn = createAsyncThunk("sign_in", async (formData) => {
    const response = await axios.post(`${url}/login`, formData);
    return response;
});
export const verifyOTP = createAsyncThunk("verify_OTP", async (formData) => {
    const response = await axios.post(`${url}/verify`, formData);
    return response;
});
export const forgotEmailSubmit = createAsyncThunk("forgot_email_submit", async (formData) => {
    const response = await axios.post(`${url}/checkuser`, formData);
    return response;
});
export const forgotPasswordSubmit = createAsyncThunk("reset_password", async (formData) => {
    const data = { ...formData }
    const response = await axios.post(`${url}/resetpassword`, data);
    return response;
});
const initialState = {
    activeSidebar: false,
    token: null,
    activeNav: '',
    screenSize: '',
    isLogIn: true,
    loginData: null,
    registrationData: null,
    resetPhase: false,
    isRoutingReady: false,
    isOTPReceivedFromRegistration: false,
    forgotEmail: '',
    forgotPassword: { isForgotPasswordEmail: null }
};
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        handleAdminLogin: (state, action) => {
            state.isAdmin = false
        },

        changeActiveStateOfSidebar: (state, action) => {
            state.activeSidebar = action.payload;
        },
        changeActiveStateOfNavbarDropdown: (state, action) => {
            const value = action.payload;
            const item = state.navbarDropdown[value] === false;
            if (item === true) {
                state.activeNav = value;
            }
            else {
                state.activeNav = ''
            }
            console.log({ item });
            state.navbarDropdown[value] = !state.navbarDropdown[value];
        },
        hideOtherNavDropdown: (state, action) => {
            const value = action.payload;
            console.log(value);
            state.navbarDropdown[value] = !state.navbarDropdown[value];
            state.activeNav = '';
        },
        handleScreenSize: (state, action) => {
            console.log(action.payload);
            state.screenSize = action.payload;
        },
        changeLogInState: (state, action) => {
            state.isLogIn = action.payload;
        },
        handleRegistrationData: (state, action) => {
            state.registrationData = action.payload;
        },
        handleLoginData: (state, action) => {
            state.loginData = action.payload;
        },
        handleSignOut: (state, action) => {
            state.registrationData = null;
            state.loginData = null;
            state.token = '';
        },
        handleSignOutt: (state, action) => {
            state.registrationData = null;
            state.loginData = null;
            state.token = '';
            console.log('admin panel');
        },
        handleSnackbarOpen: (state, action) => {
            state.isSnackbarOpen = action.payload;
        },

        handleToken: (state, action) => {
            state.token = action.payload;
        }
        ,
        handleResetPhase: (state, action) => {
            state.forgotEmail = false;
            state.forgotPassword.isPasswordSuccess = false;
            state.isRoutingReady = false;
            state.forgotPassword.isForgotPasswordOTP = false;
            state.forgotPassword.isNewResetPassword = false;
            state.resetPhase = true;
            state.forgotPassword.isForgotPasswordEmail = true;
        },
        facilitateHomeLogin: (state, action) => {
            state.forgotPassword.isForgotPasswordEmail = false;
            state.forgotPassword.isNewResetPassword = false;
            state.forgotPassword.isForgotPasswordOTP = false;
            state.resetPhase = false;
            state.isRoutingReady = true;
            state.forgotEmail = false;
        },
        handleRoutingReady: (state, action) => {
            state.isRoutingReady = false;
        },
        handleErrorToaster: (state, action) => {
            state.isPasswordSuccess = false;
        },
        handleCancelOTPVerify: (state, action) => {
            state.isOTPReceivedFromRegistration = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(adminLogin.fulfilled, (state, action) => {

        }
        ),
            builder.addCase(signUp.fulfilled, (state, action) => {
                if (action.payload?.data?.data) {
                    const { data: { email } } = action.payload?.data;
                    state.registrationData = { email };
                    state.isOTPReceivedFromRegistration = true;
                    state.isLogIn = true;
                }
            }),
            builder.addCase(logIn.fulfilled, (state, action) => {
                console.log(action.payload?.data);
                if (action.payload?.data?.message === "success") {
                    state.loginData = action.payload?.data;
                    const token = action.payload?.data?.token;
                    state.token = token;
                }
            }
            ),
            builder.addCase(verifyOTP.fulfilled, (state, action) => {
                if (action.payload?.data?.type === 'ordinaryOTP') {
                    if (action.payload?.data?.message === "success") {
                        state.registrationData = null;
                        state.routeToAuth = true;
                    }
                }
                else if (action.payload?.data?.type == "newOTP") {
                    if (action.payload?.data?.message === "success") {
                        state.forgotPassword.isForgotPasswordOTP = false;
                        state.forgotPassword.isNewResetPassword = true;
                    }
                }
            }),

            builder.addCase(forgotEmailSubmit.fulfilled, (state, action) => {
                if (action.payload?.data?.message === "success") {
                    state.forgotPassword.isForgotPasswordEmail = false;
                    state.forgotPassword.isForgotPasswordOTP = true;
                }
            }),
            builder.addCase(forgotPasswordSubmit.fulfilled, (state, action) => {
                if (action.payload?.data?.message === 'success') {
                    state.forgotPassword.isPasswordSuccess = true;
                    state.forgotPassword.isForgotPasswordEmail = false;
                    state.forgotPassword.isNewResetPassword = false;
                    state.forgotPassword.isForgotPasswordOTP = false;
                    state.resetPhase = false;
                    state.isRoutingReady = true;
                }
            }
            )
    }
});
export const { handleSignOutt, handleToken, handleAdminLogin, handleRouteToAuth, handleRegisterToaster, handleCancelOTPVerify, handleErrorToaster, makeToasterFalse, openOTPToasterOrdinary, openEmailToaster, openOTPToaster, openPasswordToaster, handleSnackbarOpen, handleRoutingReady, facilitateHomeLogin, handleResetPhase, changeActiveStateOfSidebar, handleSignOut, changeActiveStateOfNavbarDropdown, hideOtherNavDropdown, handleScreenSize, changeLogInState, handleLoginData, handleRegistrationData } = counterSlice.actions

export default counterSlice.reducer