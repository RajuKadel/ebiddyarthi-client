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
    <div className={`transition-all ease-out duration-700 bg-slate-100 ${activeSidebar ? 'lg:ml-64' : ''
      }`}>
      <Head>
        <title>Grand</title>
      </Head>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          praesentium, voluptates repellat vero similique unde molestiae
          facere nostrum exercitationem dolore recusandae earum odit,
          numquam asperiores quidem adipisci quae expedita ullam. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Magnam in
          error, iure rem vero, suscipit maxime excepturi adipisci quibusdam
          atque nobis placeat doloribus quasi neque libero quam, voluptatum
          praesentium, voluptates repellat vero similique unde molestiae
          facere nostrum exercitationem dolore recusandae earum odit,
          numquam asperiores quidem adipisci quae expedita ullam. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Magnam in
          error, iure rem vero, suscipit maxime excepturi adipisci quibusdam
          atque nobis placeat doloribus quasi neque libero quam, voluptatum
          praesentium, voluptates repellat vero similique unde molestiae
          facere nostrum exercitationem dolore recusandae earum odit,
          numquam asperiores quidem adipisci quae expedita ullam. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Magnam in
          error, iure rem vero, suscipit maxime excepturi adipisci quibusdam
          atque nobis placeat doloribus quasi neque libero quam, voluptatum
          sed possimus?
        </p>
      </div>
    </div>
  )
}

export default grand;