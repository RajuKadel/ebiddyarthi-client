import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";
const url = 'http://localhost:8080'
export const adminLogin = createAsyncThunk('adminLogin', async (data) => {
    const response = await axios.post(`${url}/admin/login`, data)
    return response
}
)

export const signUp = createAsyncThunk("sign_up", async (formData) => {
    console.log(formData);
    const data = { ...formData, type: 'signupOTP' }
    const response = await axios.post(`${url}/signup`, data);
    return response;
    // response.data(objects here in Nepal Time )
});
export const logIn = createAsyncThunk("sign_in", async (formData) => {
    console.log(formData);
    console.log('senttt');
    const response = await axios.post(`${url}/login`, formData);
    return response;

});
export const verifyOTP = createAsyncThunk("verify_OTP", async (formData) => {
    console.log(formData);
    const response = await axios.post(`${url}/verify`, formData);
    return response;
});
export const forgotEmailSubmit = createAsyncThunk("forgot_email_submit", async (formData) => {
    console.log(formData);
    const response = await axios.post(`${url}/checkuser`, formData);
    return response;
});

export const forgotPasswordSubmit = createAsyncThunk("reset_password", async (formData) => {
    console.log(formData);
    const data = { ...formData }
    console.log(data);
    const response = await axios.post(`${url}/resetpassword`, data);
    return response;
});
const initialState = {

    activeSidebar: false,
    token: null,
    activeNav: '',
    isUser: false,
    screenSize: '',
    isLogIn: true,
    loginData: null,
    registrationData: null,
    isValidEmailFromServer: false,
    isOTPVerified: false,
    validOTP: '',
    resetPhase: false,
    isRoutingReady: false,
    isOTPReceivedFromRegistration: false,
    isAdmin: false,
    forgotEmail: '',
    forgotPassword: {
        isForgotPasswordOTP: null,
        isForgotPasswordEmail: null,
        isNewResetPassword: null,
        isPasswordSuccess: true
    }
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        handleAdminLogin: (state, action) => {
            state.isAdmin = false
        },

        handleForgotEmail: (state, action) => {
            state.forgotEmail = action.payload;
        }
        ,
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
        changeValidEmailFromServer: (state, action) => {
            state.isValidEmailFromServer = action.payload;
        },
        changeOTPVerified: (state, action) => {
            state.isOTPVerified = action.payload;
        },

        changeValidOTP: (state, action) => {
            state.validOTP = action.payload;
        },
        handleSignOut: (state, action) => {
            state.isUser = false;
            state.registrationData = null;
            state.loginData = null;
            state.token = '';
        },
        handleSnackbarOpen: (state, action) => {
            state.isSnackbarOpen = action.payload;
        },
        // handleEmailToaster: (state, action) => {
        //     state.forgotPassword.isForgotPasswordEmail = action.payload;
        //     console.log(action?.payload?.data);
        // },
        openEmailToaster: (state, action) => {
            // state.toaster.emailToaster = action.payload;
        },
        openOTPToaster: (state, action) => {
            // state.toaster.OTPToaster = action.payload;
        },
        openPasswordToaster: (state, action) => {
            // state.toaster.passwordToaster = action.payload;
        },
        openOTPToasterOrdinary: (state, action) => {
            // state.OTPToasterOrdinary = action.payload;
        },
        handleToken: (state, action) => {
            console.log(action?.payload);


            state.token = action.payload;
        }
        ,
        handleResetPhase: (state, action) => {
            // state.toaster.invalidCredentialToaster = false;

            // state.toaster.emailToaster = false;
            // state.toaster.OTPToaster = false;
            // state.toaster.passwordToaster = false;
            state.forgotPassword.isPasswordSuccess = false;
            state.isRoutingReady = false;
            state.forgotPassword.isForgotPasswordOTP = false;
            state.forgotPassword.isNewResetPassword = false;
            state.resetPhase = true;
            state.forgotPassword.isForgotPasswordEmail = true;


        },
        facilitateHomeLogin: (state, action) => {

            // state.toaster.emailToaster = false;
            // state.toaster.OTPToaster = false;
            // state.toaster.passwordToaster = false;
            state.forgotPassword.isForgotPasswordEmail = false;
            state.forgotPassword.isNewResetPassword = false;
            state.forgotPassword.isForgotPasswordOTP = false;
            state.resetPhase = false;
            state.isRoutingReady = true;
        },
        handleRoutingReady: (state, action) => {
            state.isRoutingReady = false;
        },
        makeToasterFalse: (state, action) => {
            // state.toaster.invalidCredentialToaster = false;
        }, handleErrorToaster: (state, action) => {
            // state.toaster.invalidCredentialToaster = false;
            // state.toaster.serverErrorToaster = false;
            // state.toaster.invalidOTPToaster = false;
            // state.toaster.verifyOTPToaster = false;
            state.isPasswordSuccess = false;
            // state.toaster.userNotVerifiedToaster = false;
            // state.toaster.registerToaster = false;
            // state.toaster.routeToAuth = false;
        },
        handleCancelOTPVerify: (state, action) => {
            state.isOTPReceivedFromRegistration = false;
        },
        handleRegisterToaster: (state, action) => {
            // state.toaster.registerToaster = action.payload;
        },
        handleRouteToAuth: (state, action) => {
            // state.toaster.routeToAuth = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(adminLogin.fulfilled, (state, action) => {
            if (action.payload?.data?.message == "success") {
                state.isAdmin = true;
            }
        }
        ),
            // builder.addCase(getAllUsers.fulfilled, (state, action) => {
            builder.addCase(signUp.fulfilled, (state, action) => {
                if (action.payload?.data?.data) {
                    const { data: { email } } = action.payload?.data;
                    state.registrationData = { email };
                    state.toaster.registerToaster = false;
                    state.isOTPReceivedFromRegistration = true;
                    state.isLogIn = true;
                }
            }),
            builder.addCase(logIn.fulfilled, (state, action) => {
                if (action.payload?.data?.message === "success") {
                    state.loginData = action.payload?.data;
                    state.isUser = true;
                    console.log(action.payload?.data);
                    const token = action.payload?.data?.token;
                    state.token = token;
                }
                // else if (action.payload?.data?.message == "User is not verified.") {
                //     state.toaster.userNotVerifiedToaster = true;
                // }
                // else {
                //     state.toaster.invalidOTPToaster = false;
                //     state.toaster.invalidCredentialToaster = true;
                // }
            }
            ),
            builder.addCase(verifyOTP.fulfilled, (state, action) => {
                if (action.payload?.data?.type === 'ordinaryOTP') {
                    if (action.payload?.data?.message === "success") {
                        // state.toaster.registerToaster = false;
                        // state.OTPToasterOrdinary = false;
                        // state.toaster.verifyOTPToaster = true;
                        // state.isOTPReceivedFromRegistration = false;
                        state.registrationData = null;
                        state.routeToAuth = true;
                    }
                    // else {
                    //     state.toaster.invalidOTPToaster = true;
                    // }
                }
                else if (action.payload?.data?.type == "newOTP") {
                    if (action.payload?.data?.message === "success") {
                        state.forgotPassword.isForgotPasswordOTP = false;
                        // state.toaster.OTPToaster = false;
                        state.forgotPassword.isNewResetPassword = true;
                    }
                    // else {
                    //     state.toaster.emailToaster = false;
                    //     state.toaster.OTPToaster = false;
                    //     state.toaster.invalidOTPToaster = true;
                    // }
                }
                // else {
                //     state.toaster.emailToaster = false;
                //     state.toaster.OTPToaster = false;
                //     state.toaster.invalidOTPToaster = true;
                // }
            }),

            builder.addCase(forgotEmailSubmit.fulfilled, (state, action) => {
                if (action.payload?.data?.message === "success") {
                    // state.toaster.OTPToaster = false;
                    state.forgotPassword.isForgotPasswordEmail = false;
                    // state.toaster.emailToaster = false;
                    state.forgotPassword.isForgotPasswordOTP = true;
                }
                // else {
                //     state.toaster.OTPToaster = false;
                //     state.toaster.emailToaster = false;
                //     state.toaster.invalidCredentialToaster = true;
                // }
            }),
            builder.addCase(forgotPasswordSubmit.fulfilled, (state, action) => {
                if (action.payload?.data?.message === 'success') {
                    state.forgotPassword.isPasswordSuccess = true;
                    // state.toaster.emailToaster = false;
                    // state.toaster.OTPToaster = false;
                    // state.toaster.passwordToaster = false;
                    state.forgotPassword.isForgotPasswordEmail = false;
                    state.forgotPassword.isNewResetPassword = false;
                    state.forgotPassword.isForgotPasswordOTP = false;
                    state.resetPhase = false;
                    state.isRoutingReady = true;
                }
                // else {
                //     // state.toaster.passwordToaster = false;
                //     // state.toaster.invalidCredentialToaster = true;
                // }
            }
            )
    }
});


export const { handleToken, handleAdminLogin, handleRouteToAuth, handleRegisterToaster, handleForgotEmail, handleCancelOTPVerify, handleErrorToaster, makeToasterFalse, openOTPToasterOrdinary, openEmailToaster, openOTPToaster, openPasswordToaster, handleSnackbarOpen, handleRoutingReady, facilitateHomeLogin, handleResetPhase, changeActiveStateOfSidebar, handleSignOut, changeActiveStateOfNavbarDropdown, hideOtherNavDropdown, handleScreenSize, changeLogInState, handleLoginData, handleRegistrationData } = counterSlice.actions

export default counterSlice.reducer