import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    handleResetPhase,
    logIn,
    handleErrorToaster,
    changeLogInState,
} from '../../src/app/Slice'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/router'
const Loginform = () => {
    const router = useRouter()
    // const {
    //     toaster: { invalidCredentialToaster, userNotVerifiedToaster },
    // } = useSelector((state) => state)
    const dispatch = useDispatch()
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    })
    console.log(loginData)

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }
    const handleLogin = async (e) => {
        e.preventDefault()
        console.log('loginData', loginData)
        if (loginData.email === '' || loginData.password === '') {
            toast.error('Please fill all the fields.', {
                position: 'top-right',
                autoClose: 4000,
                style: {
                    background: '#b50724',
                    color: '#ffffff'
                },
            })
        } else {
            const id = toast.loading('Logging in', {
                position: 'top-right',
            })
            dispatch(handleErrorToaster())
            const data = await dispatch(logIn(loginData))
            console.log('data', data)
            if (data?.payload?.data?.message == 'User is not verified.') {
                toast.error('Verify email through forgot password', { id: id })
            } else if (data?.payload?.data?.message == 'Invalid Credentials') {
                toast.error('Invalid Credentials', {
                    id: id,
                })
            }
            else if (data?.payload?.data?.message == "User doesn't exists.") {
                toast.error('Invalid credentials.', {
                    id: id,
                })
            }
            else if (data?.payload?.data?.message == "success") {
                toast.success('Success', {
                    id: id,
                })
                router.push('/');
            }
        }
    }
    // useEffect(() => {
    //     if (invalidCredentialToaster) {
    //         const id = toast.error('Invalid Credentials', {
    //             position: 'top-right',
    //             autoClose: 4000,
    //             style: {
    //                 background: '#148212',
    //                 color: '#ffffff'
    //             },
    //         })
    //     }
    // }
    //     , [invalidCredentialToaster])
    // useEffect(() => {
    //     if (userNotVerifiedToaster) {
    //         const id = toast.error('Verify email through forgot password.', {
    //             position: 'top-right',
    //             autoClose: 4000,
    //             style: {
    //                 background: '#148212',
    //                 color: '#ffffff'
    //             },
    //         })
    //         if (!userNotVerifiedToaster) {
    //             toast.dismiss()
    //         }

    //     }
    // }
    //     , [userNotVerifiedToaster])
    return (
        <form className="shadow-xl bg-slate-50 px-12  lg:px-20  pt-2 w-full  h-[80vh] lg:h-full lg:pb-14  mr-5">
            <div className="flex mt-20 md:mt-14 flex-row w-full items-end justify-center lg:justify-start "></div>
            <div className="mb-6">
                <input
                    name="email"
                    type="text"
                    className="form-control block w-full px-4 py-2 md:py-2  text-xl lg:text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                    onChange={handleChange}
                />
            </div>
            {/* <!-- Password input --> */}
            <div className="mb-6">
                <input
                    name="password"
                    type="password"
                    className="form-control block w-full px-4 py-2 md:py-2  text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                    onChange={handleChange}
                />
            </div>

            <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check"></div>
                <span
                    onClick={() => {
                        dispatch(handleResetPhase())
                        router.push('/forgotpassword')
                    }}
                    className="text-gray-800 hover:underline"
                >
                    Forgot password?
                </span>
            </div>
            <div className="text-center lg:text-left">
                <button
                    onClick={handleLogin}
                    type="button"
                    className="inline-block px-7 py-3 w-full bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                    Login
                </button>
                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Don't have an account?
                    <a
                        onClick={() => dispatch(changeLogInState(false))}
                        href="#!"
                        className="text-red-600 ml-1 hover:underline hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    >
                        Register
                    </a>
                </p>
            </div>
        </form>
    )
}

export default Loginform
