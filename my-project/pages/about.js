import Head from "next/head"
import { useSelector } from "react-redux"
import { useRouter } from "next/router"
import { useEffect } from "react"
const about = () => {
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
        <title>About</title>
      </Head>
    </div>
  )
}

export default about