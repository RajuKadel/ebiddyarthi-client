import Head from 'next/head'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Form } from '../'
import { changeLogInState, signUp, handleErrorToaster, handleRegisterToaster } from '../../src/app/Slice'
const Register = ({ methods }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false);
  // const { isOTPReceivedFromRegistration } = useSelector((state) => state)
  // useEffect(() => {
  //   if (isOTPReceivedFromRegistration) {
  //     router.push('/otpverify');
  //   }
  //   if (routeToAuth && !isOTPReceivedFromRegistration) {
  //     router.push('/');
  //   }
  // }, [isOTPReceivedFromRegistration])

  // useEffect(() => {
  //   console.log('top of Register.js');
  //   if (registerToaster) {
  //     toast.loading('Registering User', {
  //       position: 'top-right',
  //     })
  //   }
  //   if (!registerToaster && isOTPReceivedFromRegistration) {
  //     console.log('insidde toaster of Register.js');
  //     toast.dismiss()
  //   }
  // }, [registerToaster])
  const onSubmit = async (data) => {
    const { password, confirmPassword } = data;
    if (password !== confirmPassword) {
      alert('Password and confirm password does not match');
    }
    else {
      const id = toast.loading('Registering User', {
        position: 'top-right',
      })
      setIsLoading(true);
      const awaitRegister = await dispatch(signUp(data))
      console.log('awaitRegister', awaitRegister);
      if (awaitRegister?.payload?.data?.message == 'success') {
        toast.success('Registered successfully', { id: id })
        router.push('/otpverify')
      }
      else if (awaitRegister?.payload?.data?.message == 'User already exists') {
        toast.error('User already exists', { id: id })
        // router.push('/otpverify')
      }
      else {
        toast.error('Something went wrong!', { id: id })
      }
      // if (isOTPReceivedFromRegistration) {
      //   router.push('/otpverify')
      // }
      setIsLoading(false)

    }
  }
  return (
    <div className=" ml-4 w-[95vw] md:w-full over  h-full mt-3 pt-3 mb-1">
      <Head>
        <title>Login</title>
      </Head>
      <div className="-mt-12 w-full flex flex-col justify-center items-center">
        <div className="block w-[90vw] px-5 py-4 p-3 pb-4 mt-10 md:mt-5 rounded-lg shadow-xl md:w-full bg-white max-w-md">
          <form className='w-full px-3 pl-5 md:w-full md:px-0 md:pl-1' onSubmit={methods?.handleSubmit(onSubmit)} >
            <div className="grid md:grid-cols-12 md:gap-4 ">

              <div className='md:col-span-5'>
                <Form
                  label={'Full Name'}
                  placeHolder={'Full Name'}
                  type={'text'}
                  name={'fullName'}
                /></div>
              <div className='md:col-span-7'>
                <Form label={'Email'} placeHolder={'email'} type={'text'}
                  name={'email'} />
              </div>

            </div>
            <div className="form-group mb-1">
              <Form
                label={'Password'}
                placeHolder={'password'}
                type="password"
                name={'password'}
              />
              <Form
                label={'Confirm Password'}
                placeHolder={'confirm password'}
                type="password"
                name={'confirmPassword'}
              />
            </div>
            <div className="form-group mb-1">
              <Form
                label={'Date of Birth(B.S.)'}
                placeHolder={'YYYY-MM-DD'}
                type="text"
                name={'dateOfBirthInBS'}
              />

            </div>
            <div className="grid md:grid-cols-2 gap-2 md:gap-4">

              <Form label={'Date of Birth(A.D.)'} type={'text'}
                name={'dateOfBirthInAD'} placeHolder={'YYYY-MM-DD'} />
              <Form label={'Phone'} placeHolder={'mobile'} type={'text'}
                name={'phone'} />
            </div>
            <div className="grid md:grid-cols-2 gap-2 md:gap-4">

              <Form
                label={'College/University'}
                placeHolder={'Purwanchal Campus'}
                type={'text'}
                name={'institute'}
              />
              <Form
                label={'Faculty'}
                placeHolder={'i.e. Computer'}
                type={'text'}
                name={'faculty'}
              />
            </div>
            <Button className={`${isLoading ? 'invisible' : ''}`} text={'Register'} type='submit' />
            <div className='flex justify-end mt-4 lg:mt-1'>
              <p className='text-sm md:text-sm text-slate-500'>Already a user? <span onClick={() => dispatch(changeLogInState(true))} className='hover:underline hover:cursor-pointer text-blue-500 hover:text-blue-600 font-semibold underline px-1 p-1'>Sign in</span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
