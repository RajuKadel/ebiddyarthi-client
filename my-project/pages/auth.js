import Signin from "../components/Signin/Signin";
import { useSelector } from 'react-redux'
import Head from 'next/head';
const Auth = () => {
  const { token } = useSelector((state) => state)
  return (
    <>
      {!token && (
        <div >
          <Head>
            <title>Auth</title>
          </Head>
          <Signin />
        </div>
      )}
    </>
  )
}

export default Auth;