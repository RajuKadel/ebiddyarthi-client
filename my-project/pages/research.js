import React from 'react'
import Head from 'next/head';
import { useEffect } from "react"
import { useRouter } from "next/router"

import { useSelector } from 'react-redux'
const research = () => {
  const router = useRouter()
  const { activeSidebar, token } = useSelector(state => state)
  useEffect(() => {
    if (!token) {
      router.push('/auth')
    }
  }, [])
  return (
    <div className={`transition-all ease-out duration-700 bg-slate-100 ${activeSidebar ? 'lg:ml-64' : ''
      }`}>
      <Head>
        <title>Research</title>
      </Head>
      <p>Helo cr7</p>
    </div>
  )
}

export default research