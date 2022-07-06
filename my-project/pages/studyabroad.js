import React from 'react'
import Head from 'next/head'
import { useEffect } from "react"
import { useRouter } from "next/router"
import { useSelector } from 'react-redux'
import StudyAbroad from '../components/StudyAbroad/StudyAbroad'
const abroadStudy = () => {
    const router = useRouter()
    const { activeSidebar, token } = useSelector((state) => state)
    useEffect(() => {
        if (!token) {
            router.push('/auth')
        }
    }, [])
    return (
        <>
            <div
                className={`transition-all ease-out duration-700 pt-2 px-2 mt-11 bg-slate-100 ${activeSidebar ? 'lg:ml-64' : ''
                    }`}
            >
                <Head>
                    <title>Study Abroad</title>
                </Head>
                {/* <div className="w-full h-full flex justify-end items-center">
                <p className={`text-xl text-slate-600 ${activeSidebar?"md:mr-[31vw]":"md:mr-[23vw]"}`}>
        Sorry,currently not available.

        </p>
                </div> */}
                <StudyAbroad />
            </div>
        </>
    )
}

export default abroadStudy