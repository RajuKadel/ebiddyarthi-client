import { useRouter } from "next/router";
import { useEffect } from "react";
import Signin from "../components/Signin/Signin";
import { useSelector } from 'react-redux'
const Auth = () => {
  const router = useRouter();
  const { token, isOTPReceivedFromRegistration } = useSelector((state) => state)
  // useEffect(() => {
  //   if (isOTPReceivedFromRegistration) {
  //     console.log('hello otpverify');
  //     router.push('/otpverify');
  //   }
  // }, [isOTPReceivedFromRegistration])
  return (
    <>
      {!token && (
        <div>
          <Signin />
        </div>
      )}
    </>
  )
}

export default Auth;