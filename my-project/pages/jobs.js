import React from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { useEffect } from "react"
import { useRouter } from "next/router"

const jobs = () => {
  const router = useRouter()
  const { activeSidebar, token } = useSelector((state) => state)
  useEffect(() => {
    if (!token) {
      router.push('/auth')
    }
  }, [])

  return (
    <div className={`transition-all ease-out duration-700 bg-slate-100 ${activeSidebar ? 'lg:ml-64' : ''
      }`}>
      <Head>
        <title>Jobs</title>
      </Head>
    </div>
  )
}
export default jobs