import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
    handleResetPhase,
    logIn,
    handleErrorToaster,
    changeLogInState,
} from '../../src/app/Slice'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/router'
import { AiOutlineMail } from "react-icons/ai"
import { RiLockPasswordFill } from "react-icons/ri"
const Loginform = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false);
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    })
    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }
    const handleLogin = async (e) => {
        e.preventDefault()
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
            setIsLoading(true);
            const id = toast.loading('Logging in', {
                position: 'top-right',
            })
            dispatch(handleErrorToaster())
            const data = await dispatch(logIn(loginData))
            if (data?.payload?.data?.message == 'User is not verified.') {
                setIsLoading(false);
                toast.error('Verify email through forgot password', { id: id })
            } else if (data?.payload?.data?.message == 'Invalid Credentials') {
                setIsLoading(false);
                toast.error('Invalid Credentials', {
                    id: id,
                }, {
                    style: {
                        background: '#b50724',
                        color: '#ffffff'
                    },
                })
            }
            else if (data?.payload?.data?.message == "User doesn't exists.") {
                setIsLoading(false);
                toast.error('Invalid credentials.', {
                    id: id,
                }, {
                    style: {
                        background: '#b50724',
                        color: '#ffffff'
                    },
                })
            }
            else if (data?.payload?.data?.message == "success") {
                setIsLoading(false);
                toast.success('Success', {
                    id: id,
                }, {
                    style: {
                        background: '#287828',

                        color: '#248a24'
                    },
                })
                router.push('/');
            }
        }
    }

    return (
        <form className="shadow-xl bg-slate-50 px-6  lg:px-20  pt-1 sm:pt-2 w-full  h-[70vh] sm:[h-80vh] lg:h-full lg:pb-14  mr-5">
            <div className="flex mt-20 md:mt-14 flex-row w-full items-end justify-center lg:justify-start "></div>
            <div className="mb-6 flex items-center bg-white border border-gray-300 rounded px-1">


                <div className='bg-white  '>
                    <AiOutlineMail className='h-5 w-5 ml-2 text-slate-500' />
                </div>
                <input
                    name="email"
                    type="text"
                    className="form-control block w-full px-4 py-2 md:py-2  text-xl lg:text-xl font-normal text-gray-700 bg-white bg-clip-padding border-0 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput23"
                    placeholder="Email address"
                    onChange={handleChange}
                />
            </div>
            <div className="mb-6 flex items-center bg-white border border-gray-300 rounded px-1">
                <div className='bg-white  '>
                    <RiLockPasswordFill className='h-5 w-5 ml-2 text-slate-500' />
                </div>
                <input
                    name="password"
                    type="password"
                    className="form-control py-2 outline-none border-0 block w-full px-4 bg-white  md:py-2  text-xl font-normal text-gray-700  bg-clip-padding rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
                    className="text-gray-800 hover:underline hover:cursor-pointer"
                >
                    Forgot password?
                </span>
            </div>
            <div className="text-center lg:text-left">
                <button
                    onClick={handleLogin}
                    type="button"
                    className={`${isLoading ? 'invisible' : ''} inline-block px-7 py-3 w-full bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out`}
                >
                    Login
                </button>
                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Don't have an account?
                    <a
                        onClick={() => dispatch(changeLogInState(false))}
                        href="#!"
                        className="text-red-600 ml-1 hover:cursor-pointer hover:underline hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    >
                        Register
                    </a>
                </p>
            </div>
        </form>
    )
}

export default Loginform
