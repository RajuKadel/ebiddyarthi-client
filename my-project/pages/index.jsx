import Head from 'next/head'
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
  useEffect(() => {
    if (!token) {
      router.push('/auth')
    }
    async function fetchData() {
      const data = { token }
      const url = 'http://localhost:8080'

      const res = await axios.post(
        url,
        // 'https://ebiddyarthi-server.herokuapp.com/checktoken',
        data
      )
      if (res?.data?.message === 'success') {
        dispatch(handleToken(res?.data?.token))
      } else {
        dispatch(handleToken(null))
      }
    }
    if (token) {
      fetchData()
    }
  }, [token])

  return (
    <>
      {token && (
        <div
          className={`overflow-hidden h-[92vh] bg-gradient-to-br   px-2 transition-all ease-out duration-700 mt-8 ${
            activeSidebar ? 'lg:ml-64' : ''
          }`}
        >
          <div className="md:flex justify-end space-x-20 md:space-x-2 gap-5 sm:gap-2 items-center ">
            <Head>
              <title>Home</title>
            </Head>
            <div className="ml-2 pt-12 md:pt-0 md:max-w-[30vw] ">
              <div>
                <p className="text-green-500 text-6xl mb-2 mt-4 sm:mt-0 animate-bounce  ">
                  <span className="text-red-400 transition-all duration-800 animate-pulse">
                    Eb
                  </span>
                  idd
                  <span className="text-yellow-400 transition-all duration-400 animate-ping">
                    Y
                  </span>
                  art
                  <span className="text-blue-500 transition-all duration-800 ease-out animate-pulse">
                    hi
                  </span>
                </p>
              </div>
              <p className="text-green-500 mt-5 text-md md:text-xl max-w-[80vw] sm:max-w-[70vw]">
                "A place to explore and grab the best opportunities provided by
                the platform.We really mean it for your achievements."
              </p>
            </div>
            <div className="md:hidden mt-20 md:mt-0">
              <Image
                src={'/vector.jpg'}
                height={'700'}
                width={'700'}
                objectFit={'contain'}
              />
            </div>
            <div className="hidden md:block mt-20 sm:mt-0">
              <Image
                src={'/vector.jpg'}
                height={'500'}
                width={'500'}
                objectFit={'contain'}
              />
            </div>
          </div>
          <div>
            <div className="hidden md:block h-64 -ml-4 -mt-20 w-64 rounded-full bg-cyan-300"></div>
          </div>
        </div>
      )}
    </>
  )
}

export default Home
