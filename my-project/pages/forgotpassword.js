import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'
import {
    forgotEmailSubmit,
    forgotPasswordSubmit,
    verifyOTP,
    facilitateHomeLogin,
    handleErrorToaster,
} from '../src/app/Slice'

const forgotpassword = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const {
        isRoutingReady,
        forgotPassword: { isForgotPasswordEmail }
    } = useSelector((state) => state)
    const [isLoading, setIsLoading] = React.useState(false)
    const [otp, setOtp] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [resetPassword, setResetPassword] = React.useState('')
    const [confirmResetPassword, setConfirmResetPassword] = React.useState('')
    const [forgotEmail, setForgotEmail] = React.useState(null);
    const [isForgotPasswordOTP, setIsForgotPasswordOTP] = React.useState(false);
    const [isNewResetPassword, setIsNewResetPassword] = React.useState(false);
    useEffect(() => {
        if (isRoutingReady) {
            dispatch(handleErrorToaster(false))
            router.push('/')
        }
    }
        , [isRoutingReady])

    const handleChange = (e) => {
        if (e.target.name === 'otp') {
            setOtp(e.target.value)
        }
        if (e.target.name === 'email') {
            setEmail(e.target.value)
        }
        if (e.target.name === 'password') {
            setResetPassword(e.target.value)
        }
        if (e.target.name === 'confirmPassword') {
            setConfirmResetPassword(e.target.value)
        }
    }
    const handleSubmitEmail = async (e) => {
        e.preventDefault();
        if (!email) {
            toast.error('Email is required', {
                position: 'top-right',
                autoClose: 3000,
                style: {
                    background: '#b50724',
                    color: '#ffffff'
                },
            })
        } else {
            const data = { email, type: 'forgotEmail' }
            setIsLoading(true);
            const id = toast.loading('Validating email', {
                position: 'top-right',
            })
            const dataEmailSubmit = await dispatch(forgotEmailSubmit(data))
            if (dataEmailSubmit?.payload?.data?.message === "success") {
                setForgotEmail(email);
                toast.success('OTP sent successfully', { id: id })
                setIsForgotPasswordOTP(true);
            }
            else {
                toast.error("Invalid Credentials", { id: id })
            }
            setIsLoading(false)
        }
    }
    const handleSubmitOTP = async (e) => {
        e.preventDefault()
        if (!otp) {
            toast.error('Please enter OTP', {
                position: 'top-right',
                autoClose: 3000,
                style: {
                    background: '#b50724',
                    color: '#ffffff'
                },
            })
        } else {
            const data = { otp, email: forgotEmail, type: 'newOTP' }
            setIsLoading(true)
            const id = toast.loading('Validating OTP', {
                position: 'top-right',
            })
            const awaitVerifyOTP = await dispatch(verifyOTP(data))
            if (awaitVerifyOTP?.payload?.data?.message === "success") {
                setIsForgotPasswordOTP(false);
                toast.success('OTP verified successfully', { id: id })
                setIsNewResetPassword(true);
            }
            else {
                toast.error("Invalid OTP", { id: id })
            }
            setIsLoading(false)
        }
    }
    const handleSubmitPassword = async (e) => {
        e.preventDefault()
        if (!resetPassword) {
            toast.error('Please enter password', {
                position: 'top-right',
                autoClose: 3000,
                style: {
                    background: '#b50724',
                    color: '#ffffff'
                },
            })
        } else if (!confirmResetPassword) {
            toast.error('Please enter confirm password', {
                position: 'top-right',
                autoClose: 3000,
                style: {
                    background: '#b50724',
                    color: '#ffffff'
                },
            })
        }
        else if (resetPassword?.length < 8 || confirmResetPassword?.length < 8 || resetPassword?.length > 12 || confirmResetPassword?.length > 12) {
            toast.error('Password must contain 8-12 characters', {
                position: 'top-right',
                autoClose: 3000,
                style: {
                    background: '#b50724',
                    color: '#ffffff'
                },
            })
        }
        else if (resetPassword !== confirmResetPassword) {
            toast.error('Passwords do not match', {
                position: 'top-right',
                autoClose: 3000,
                style: {
                    background: '#b50724',
                    color: '#ffffff'
                },
            })
        }
        else {
            const data = { resetPassword, confirmResetPassword, email: forgotEmail }
            setIsLoading(true)
            const id = toast.loading('Resetting password', {
                position: 'top-right',

            })

            const awaitForgot = await dispatch(forgotPasswordSubmit(data))
            if (awaitForgot?.payload?.data?.message === "success") {
                setIsForgotPasswordOTP(false);
                setIsNewResetPassword(false);
                toast.success('Password Changed Successfully', { id: id })
                router.push('/auth');
            }
            else {
                toast.error("Invalid credentials", { id: id })
            }
            setIsLoading(false)
        }

    }
    const handleBackPage = () => {
        dispatch(facilitateHomeLogin())
        router.push('/')
    }
    return (
        <>
            <div className="-mt-12 -pl-2 flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500">


                <div className="w-full max-w-md min-w-xs">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                        {isForgotPasswordEmail && (
                            <>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Your Registered Email:
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="username"
                                        type="text"
                                        placeholder="email"
                                        onChange={handleChange}
                                        value={email}
                                        name="email"
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <button
                                        onClick={handleSubmitEmail}
                                        className={`${isLoading == true ? 'invisible' : ''} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                                        type="button"

                                    // disabled={OTPToaster || emailToaster}
                                    >
                                        Proceed
                                    </button>
                                    <a
                                        className="inline-block align-baseline hover:cursor-pointer font-bold text-sm text-blue-500 hover:text-blue-800"
                                        onClick={handleBackPage}
                                    >
                                        {`${isRoutingReady ? 'Back to login' : 'Cancel Process'}`}
                                    </a>
                                </div>
                            </>
                        )}
                        {isForgotPasswordOTP && (
                            <>
                                <div className="mb-4">
                                    <label className=" block text-gray-700 text-sm font-bold mb-2">
                                        An OTP is sent to your email.Please verify.
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="username"
                                        type="text"
                                        placeholder="OTP code"
                                        onChange={handleChange}
                                        value={otp}
                                        name="otp"
                                        password='password123'
                                        otpEmail="otpEmail"
                                        mouseHover="mouseOnHover"
                                        isDraggable='true'
                                    />
                                </div>
                                <p className='text-sm text-slate-600 pb-1'>Note: Please check on spam section of your email,if code is not received.</p>

                                <div className="flex items-center justify-between">
                                    <button
                                        onClick={handleSubmitOTP}
                                        className={`${isLoading == true ? '' : ''} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                                        type="button"
                                    >
                                        Proceed
                                    </button>
                                    <a
                                        className="inline-block hover:cursor-pointer align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                                        onClick={handleBackPage}
                                    >
                                        Cancel Process
                                    </a>
                                </div>
                            </>
                        )}
                        {isNewResetPassword && (
                            <>
                                <div className="mb-4">
                                    <label className=" block text-gray-700 text-sm font-bold mb-2">
                                        Enter new password:
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="username"
                                        type={'password'}
                                        placeholder="Password"
                                        onChange={handleChange}
                                        name="password"
                                        value={resetPassword}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className=" block text-gray-700 text-sm font-bold mb-2">
                                        Confirm new password:
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="username"
                                        type="password"
                                        placeholder="Confirm password"
                                        onChange={handleChange}
                                        name="confirmPassword"
                                        value={confirmResetPassword}
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <button
                                        onClick={handleSubmitPassword}
                                        className={`${isLoading == true ? 'invisible' : ''} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                                        type="button"
                                    >
                                        Proceed
                                    </button>
                                    <a
                                        className="inline-block hover:cursor-pointer align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                                        onClick={handleBackPage}
                                    >
                                        Cancel Process
                                    </a>
                                </div>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </>
    )
}

export default forgotpassword
