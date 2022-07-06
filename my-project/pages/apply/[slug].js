import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Imageform from '../../components/imageform/Imageform'
import Formsmall from '../../components/smallform/Smallform'
import { toast } from 'react-hot-toast'
import Progress from '../../components/Progress/Progress'
import Head from 'next/head'
const ScholarshipApply = () => {
  const [progress, setProgress] = useState(false)
  const initial = {
    citizenship: null,
    ppPhoto: null,
    seeMarksheet: null,
    bankAccountName: '',
    bankAccountNumber: '',
    bankName: '',
    instituteRollNo: '',
  }
  const [data, setData] = useState({
    citizenship: null,
    ppPhoto: null,
    seeMarksheet: null,
    bankAccountName: '',
    bankAccountNumber: '',
    bankName: '',
    instituteRollNo: '',
  })
  const router = useRouter()
  const { slug } = router.query
  const { loginData, activeSidebar, token } = useSelector((state) => state)
  useEffect(() => {
    if (!token) {
      router.push('/auth')
    }
  }, [])
  const handleSubmit = async (e) => {
    e.preventDefault()
    const {
      citizenship,
      instituteRollNo,
      ppPhoto,
      seeMarksheet,
      bankAccountName,
      bankAccountNumber,
      bankName,
    } = data
    if (
      !citizenship ||
      !ppPhoto ||
      !seeMarksheet ||
      !bankAccountName ||
      !bankAccountNumber ||
      !bankName ||
      !instituteRollNo
    ) {
      toast.error('Please fill all the fields.', {
        position: 'bottom-right',
        autoClose: 3000,
        style: {
          background: '#b50724',
          color: '#ffffff',
        },
      })
    } else if (bankAccountNumber?.length !== 16) {
      toast.error('Account number must be 16 digits ', {
        position: 'bottom-right',
        autoClose: '3000',
        style: {
          background: '#b50724',
          color: '#ffffff',
        },
      })
    } else if (
      citizenship?.size > 300000 ||
      ppPhoto?.size > 300000 ||
      seeMarksheet?.size > 300000
    ) {
      toast.error('File size must be less than 300kb', {
        position: 'bottom-right',
        autoClose: '3000',
        style: {
          background: '#b50724',
          color: '#ffffff',
        },
      })
    } else {
      const type = { scholarship: 'UGC' }
      const formData = new FormData()
      formData.append('citizenship', citizenship)
      formData.append('ppPhoto', ppPhoto)
      formData.append('seeMarksheet', seeMarksheet)
      formData.append('bankAccountName', bankAccountName)
      formData.append('bankAccountNumber', bankAccountNumber)
      formData.append('bankName', bankName)
      formData.append('instituteRollNo', instituteRollNo)
      formData.append('email', loginData?.result)
      formData.append('fullName', loginData?.fullName)
      formData.append('type', type)
      setProgress(true)
      const url = 'https://ebiddyarthi-server.herokuapp.com'
      const data = await fetch(`${url}/photos`, {
        method: 'post',
        body: formData,
      })
      setProgress(false)
      if (data?.status == 200) {
        toast.success('Form submitted successfully.', {
          position: 'bottom-right',
          autoClose: 3000,
          style: {
            background: '#287828',
            color: '#FFFFFF',
          },
        })
      } else {
        toast.error('Something went wrong.', {
          position: 'bottom-right',
          style: {
            background: '#b50724',
            color: '#ffffff',
          },
          autoClose: 3000,
        })
      }
      setData(initial)
    }
  }
  return (
    <div
      className={`  bg-slate-50  px-5 py-5 transition-all ease-out duration-700 mt-12  md:h-[92vh] ${activeSidebar ? 'md:ml-64 pl-5' : 'md:pl-36'
        }`}
    >
             <Head>
            <title>Apply</title>
          </Head>
      {slug == 'ugc' && (
        <div>
          <form className="py-8 mt-2 px-6  md:px-6  bg-white shadow-xl backdrop-blur-xl mx-1 lg:w-[78vw] grid grid-cols-1 md:grid-cols-2  gap-4 place-items-center">
            <Imageform
              labelName={'Citizenship*'}
              fileName={'citizenship'}
              setData={setData}
              data={data}
            />
            <Imageform
              labelName={'SEE Marksheet*'}
              fileName={'seeMarksheet'}
              setData={setData}
              data={data}
            />
            <Imageform
              labelName={'Passport Size Photo*'}
              fileName={'ppPhoto'}
              setData={setData}
              data={data}
            />
            <Formsmall
              type="text"
              label="Bank Name*"
              value={data.bankName}
              setData={setData}
              data={data}
              inputName="bankName"
              placeHolder={'e.g.NIC Asia'}
            />
            <Formsmall
              type="text"
              label="Bank Account Name*"
              value={data.bankAccountName}
              setData={setData}
              data={data}
              inputName="bankAccountName"
              placeHolder={'e.g. Harilal Shrestha '}
            />
            <Formsmall
              type="text"
              label="Bank Account Number*"
              value={data.bankAccountNumber}
              setData={setData}
              data={data}
              inputName="bankAccountNumber"
              placeHolder={'16 digits number'}
            />
            <Formsmall
              type="text"
              label="College RollNo*"
              value={data.instituteRollNo}
              setData={setData}
              data={data}
              inputName="instituteRollNo"
              placeHolder={'PUR077BCT097'}
            />
            <div></div>
            <div className="mt-5 md:mt-8 pl-5 block pr-[1vw]">
              {progress ? (
                <Progress />
              ) : (
                <button
                  onClick={handleSubmit}
                  className="mr-[12vw] md:mr-[26vw]    bg-blue-500 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                >
                  <span type="submit">Submit</span>
                </button>
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default ScholarshipApply
