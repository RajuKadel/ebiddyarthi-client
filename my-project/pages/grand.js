import Head from "next/head"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { useRouter } from "next/router"
const grand = () => {
  const router = useRouter()
  const { token, activeSidebar } = useSelector((state) => state)
  useEffect(() => {
    if (!token) {
      router.push('/auth')
    }
  }, [])

  return (
    <div className={`transition-all ease-out duration-700 w-[80vw] h-[80vh]  ${activeSidebar ? 'lg:ml-64' : ''
      }`}>
      <Head>
        <title>Grand</title>
      </Head>
      <div className="w-full h-full flex justify-end items-center">
        <p className="text-xl text-slate-600 mr-[31vw]">
        Sorry,currently not available.

        </p>
      </div>
    </div>
  )
}

export default grand;