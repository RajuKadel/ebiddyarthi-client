import Head from 'next/head'
import { useJwt } from 'react-jwt'
import jwt from 'jsonwebtoken'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleToken } from '../src/app/Slice'
import axios from 'axios'
const Home = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { token, activeSidebar } = useSelector((state) => state)
  console.log(token, 'test')
  // useEffect(() => {
  //   if (!token) {
  //     router.push('/auth')
  //   }
  //   if (token) {
  //     console.log({ token })
  //     const decoded = jwt?.verify(token, 'JsonWebSecretIsAwesomeSecret')
  //     console.log({ decoded })
  //     if (decoded?.id) {
  //       dispatch(handleToken(token))
  //     } else {
  //       dispatch(handleToken(null))
  //     }
  //   }
  // }, [token])

  // console.log({ token })
  // console.log({ decoded })
  // const { decodedToken, isExpired } = useJwt(token)
  // if (!token) {
  //   router.push('/auth')
  // }
  // if (!decodedToken || isExpired) {
  //   dispatch(handleToken(null))
  //   // router.push('/login')
  // }
  // if (decodedToken && !isExpired) {
  //   dispatch(handleToken(token))
  // }

  // console.log({ decodedToken })
  // console.log({ isExpired })
  useEffect(() => {
    if (!token) {
      router.push('/auth')
    }
    async function fetchData() {
      console.log(token)
      const data = { token }
      const res = await axios.post('http://localhost:8080/checktoken', data)
      console.log(res)
      if (res?.data?.message === 'success') {
        dispatch(handleToken(res?.data?.token))
      } else {
        dispatch(handleToken(null))
        // router.push('/auth')
      }
    }
    if (token) {
      fetchData()
    }
  }, [token])
  // useEffect(() => {
  //   if (!token) {
  //     router.push('/auth')
  //   }
  //   function fetchData() {
  //     // const data = { token }
  //     // const res = await axios.post('http://localhost:8080/checktoken', data)
  //     // console.log(res)
  //     if (!isExpired) {
  //       dispatch(handleToken(token))
  //     } else {
  //       dispatch(handleToken(null))
  //       // router.push('/auth')
  //     }
  //   }

  //   if (token) {
  //     fetchData()
  //   }
  // }, [token])
  return (
    <>
      {token && (
        <div
          className={`overflow-hidden h-[92vh]  px-2 transition-all ease-out duration-700 mt-8 bg-white ${
            activeSidebar ? 'lg:ml-64' : ''
          }`}
        >
          <div className="md:flex justify-end space-x-20 gap-5 items-center">
            <Head>
              <title>Home</title>
            </Head>
            <div className="ml-2 pt-8 md:pt-0 md:max-w-[30vw] ">
              <div>
                <p className="text-green-500 text-5xl mb-2 ">Ebiddyarthi</p>
              </div>
              <p className="text-green-500 text-md md:text-xl">
                A place to explore and grab the best opportunities provided by
                the platform.We really mean it for your achievements.
              </p>
            </div>
            <div>
              <Image
                src="/vector.jpg"
                height={'500'}
                width={'500'}
                objectFit="contain"
              />
            </div>
          </div>
          <div>
            <div className="h-64 -ml-4 -mt-20 w-64 rounded-full bg-cyan-300"></div>
          </div>
        </div>
      )}
    </>
  )
}

export default Home
