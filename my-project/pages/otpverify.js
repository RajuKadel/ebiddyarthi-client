import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { handleErrorToaster, verifyOTP } from '../src/app/Slice'
import { toast } from 'react-hot-toast'
import {
    handleCancelOTPVerify,
} from '../src/app/Slice'
import Head from "next/head"

const otpverify = () => {
    const [disabled, setDisabled] = useState(false)
    const router = useRouter()
    const [otp, setOtp] = useState('')
    const dispatch = useDispatch()
    const { isOTPReceivedFromRegistration, registrationData } = useSelector((state) => state)
    useEffect(() => {
        if (!isOTPReceivedFromRegistration) {
            router.push('/auth');
        }
    }, [])
    const handleChange = (e) => {
        setOtp(e.target.value)
    }
    const handleVerify = async (e) => {
        e.preventDefault()
        if (otp === '') {
            toast.error('Please verify OTP', {
                position: 'top-right',
                autoClose: 3000,
                style: {
                    background: '#b50724',
                    color: '#ffffff'
                },
            })
        } else {
            const data = { otp, email: registrationData?.email, type: 'ordinaryOTP' }
            dispatch(handleErrorToaster())
            const id = toast.loading('Validating OTP', {
                position: 'top-right',
            })
            const awaitOTP = await dispatch(verifyOTP(data))
            console.log('awaitOTP', awaitOTP)
            if (awaitOTP.payload?.data?.message === "success") {
                setDisabled(true)
                toast.success('OTP Verified Successfully', {
                    id: id

                })
                handleCancelOTPVerify()
                router.push('/auth')
            }
            else {
                toast.error('Invalid OTP', { id: id })
            }
        }
        setOtp('')
    }
    const handleBackToLogin = () => {
        handleCancelOTPVerify()
        router.push('/auth')
    }
    return (
        <>
            {
                isOTPReceivedFromRegistration && (
                    <div className='h-screen -mt-12 flex justify-center items-center bg-gradient-to-r from-purple-600'>
                        <Head>
                            <title>OTP Verify</title>
                        </Head>


                        <div className="w-full max-w-md min-w-xs">
                            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                <>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                                            An OTP is sent to your email.Please verify.
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="OTP" onChange={handleChange}
                                        />
                                    </div>
                                    <p className='text-sm text-slate-600 pb-1'>Note: Please check on your spam section of your email,if code is not received.</p>
                                    <div className="flex items-center justify-between">
                                        <button onClick={handleVerify} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${disabled ? 'invisible' : ''}`} type="button">
                                            Proceed
                                        </button>
                                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer" onClick={handleBackToLogin}
                                        >
                                            Back to Login
                                        </a>
                                    </div>
                                </>
                            </form>
                        </div>






                    </div>
                )
            }

        </>

    )
}
export default otpverify
 // useEffect(() => {
    //     if (routeToAuth) {
    //         router.push('/');
    //     }
    // }, [routeToAuth])

    // useEffect(() => {
    //     if (OTPToasterOrdinary) {
    //         const id = toast.loading('Validating OTP', {
    //             position: 'top-right',
    //         })
    //     }

    //     if (!OTPToasterOrdinary) {
    //         toast.dismiss()
    //     }
    // }, [OTPToasterOrdinary])
    // useEffect(() => {
    //     if (invalidOTPToaster) {
    //         const id = toast.error('Invalid OTP', {
    //             position: 'top-right',
    //             autoClose: 3000,
    //             style: {
    //                 background: '#b50724',
    //                 color: '#ffffff'
    //             },
    //         })
    //     }

    // }, [invalidOTPToaster])
    // useEffect(() => {
    //     if (verifyOTPToaster) {
    //         const id = toast.success('OTP Verified Successfully', {
    //             position: 'top-right',
    //             autoClose: 3000,
    //             style: {
    //                 background: '#148212',
    //                 color: '#ffffff'
    //             },
    //         })
    //     }

    // }, [verifyOTPToaster])
