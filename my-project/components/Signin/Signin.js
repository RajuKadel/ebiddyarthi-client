import React, { useEffect } from 'react'
import Image from 'next/image'
import Slider from "../carousel/Carousel"
import Loginform from '../Loginform/Loginform'
import { useSelector, useDispatch } from 'react-redux'
import { Register } from "../";
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useRouter } from 'next/router'
const schema = yup
    .object({
        fullName: yup.string().required("Required field").min(5, 'Minimum 5 characters').max(30, 'Maximum 30 characters'),
        email: yup.string().required().email("Invalid email"),
        password: yup.string().required().min(8).max(12),
        confirmPassword: yup.string().required('Required field'),
        dateOfBirthInBS: yup.string().required('Required field').min(10, 'Too short'),
        dateOfBirthInAD: yup.string().required('Required field').min(10, 'Too short'),
        phone: yup.string().required().min(10, 'Minimum 10 characters').max(14),
        institute: yup.string().required('Required field').min(3, 'Minimum 3 characters').max(30, 'Maximum 30 characters '),
        faculty: yup.string().required('Required field').min(5, 'Minimum 5 characters').max(30, 'Maximum 30 characters'),


    })
    .required()
const Signin = () => {
    const dispatch = useDispatch()
    const router = useRouter();
    const { isLogIn, isOTPReceivedFromRegistration } = useSelector(state => state)
    const methods = useForm({
        resolver: yupResolver(schema),
    })

    return (
        <div className="md:max-h-[96vh] h-96vh -mt-6   overflow-hidden">
            <div className="px-6 -pt-3 h-full text-gray-800 md:-mt-2 mt-2">
                <div
                    className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-1"
                >
                    <div
                        className=" hidden  lg:block grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-16 mt-9 md:mb-0"
                    >
                        <Slider />
                    </div>

                    <div className=" xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-2 md:mb-1 -pt-6 sm:mt-0 sm:pt-0 transition-all duration-200 ease-out delay-100">
                        <div className={` z-50 ${isLogIn ? 'pt-5 bg-slate-50' : ''} pt-8 sm:pt-1 flex items-center justify-center`}>
                            <Image src={"/logo.jpg"} className='mt-5 pt-4 ' height={`${isLogIn ? '50' : '40'}`} width={`${isLogIn ? '50' : '40'}`} />
                            <p className={`px-1 font-bold text-xl ${isLogIn ? 'text-slate-600 text-3xl' : 'text-cyan-500'} mr-6 mt-2`}>Ebidhyarthi</p>

                        </div>
                        {isLogIn && <Loginform />}
                        {!isLogIn &&
                            (
                                <FormProvider {...methods} >
                                    <Register methods={methods} />
                                </FormProvider>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin