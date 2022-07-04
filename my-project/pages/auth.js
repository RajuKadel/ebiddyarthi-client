import Signin from "../components/Signin/Signin";
import { useSelector } from 'react-redux'
const Auth = () => {
  const { token } = useSelector((state) => state)
  return (
    <>
      {!token && (
        <div >
          <Signin />
        </div>
      )}
    </>
  )
}

export default Auth;