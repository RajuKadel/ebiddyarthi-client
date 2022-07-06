import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { BiLogOut } from 'react-icons/bi'
import { BiRefresh } from 'react-icons/bi'
import { handleSignOutt } from '../../src/app/Slice';
import { toast } from 'react-hot-toast';
import { adminLogin } from '../../src/app/Slice';
import Infocard from '../../components/infocard/Infocard';
import Listcard from '../../components/listcard/Listcard';
import axios from 'axios';
const Admin = () => {
    const dispatch = useDispatch();
    const [isAllData, setIsAllData] = React.useState(null);
    const [scholarshipData, setScholarshipData] = React.useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    });
    useEffect(() => {
        dispatch(handleSignOutt());
    }, [])
    useEffect(() => {
        async function fetchData() {
            const url = 'https://ebiddyarthi-server.herokuapp.com'
            const response = await axios.get(`${url}/getallusers`);
            if (response?.data?.responseArray?.length > 0) {
                const data = response?.data?.responseArray
                setIsAllData(data);
                const filter = data?.filter(item => item.type === 'scholarship');
                setScholarshipData(filter);
            }
        }
        if (isAdmin) {
            fetchData();
        }
    }, [isAdmin, refresh])
    const handleSignOut = () => {
        setIsAdmin(false);
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.email === '' || formData.password === '') {
            toast.error('Please fill all the fields.', {
                position: 'top-right',
                autoClose: 3000,
                style: {
                    background: '#b50724',
                    color: '#ffffff'
                },
            })


        }
        else {
            const data = await dispatch(adminLogin(formData));
            if (data?.payload?.data?.message == 'Invalid Credentials') {
                toast.error('Invalid Credentials', {
                    position: 'top-right',
                    autoClose: 3000,
                    style: {
                        background: '#b50724',
                        color: '#ffffff'
                    },
                })
            }
            else if (data?.payload?.data?.message === 'success') {
                setFormData({ email: '', password: '' })
                setIsAdmin(true);
                toast.success('Success', {
                    position: 'top-right',
                    autoClose: 3000
                }
                )
            }
            else {
                toast.error('Something went wrong', {
                    position: 'top-right',
                    autoClose: 3000,
                    style: {
                        background: '#b50724',
                        color: '#ffffff'
                    },
                })
            }

        }
    }
    return (
        <div className='relative mt-24 md:mt-0 '>
            {isAdmin && isAllData && scholarshipData ? (
                <div >
                    <div onClick={handleSignOut} className='bg-black fixed top-0 right-2 cursor-pointer  px-4 p-2 rounded-md'>
                        <button>
                            <BiLogOut className='h-8 w-8 hover:text-yellow-400 text-blue-400' />
                        </button>
                    </div>
                    <div onClick={() => setRefresh((prev) => !prev)} className='bg-black  fixed top-0 left-2 cursor-pointer px-4 p-2 rounded-md'>
                        <button>
                            <BiRefresh className=' h-8 w-8 hover:text-yellow-400 text-blue-400' />
                        </button>
                    </div>
                    <div>
                        <div className='md:flex h-full space-y-2 mr-7  md:mx-10 pr-10  -mt-20 pt-11 items-center justify-between'>
                            <div>
                                <Infocard color='bg-blue-300' data={isAllData} title={'Registered Users'} />
                                <div className='mt-2 w-[100vw] h-[70vh] ml-2 overflow-hidden hover:overflow-y-scroll bg-slate-100 md:w-[31vw] rounded-md'>
                                    <div>
                                        {isAllData?.map((item, index) => (
                                            <Listcard key={index}
                                                name={item.fullName}
                                                email={item.email}
                                                phone={item.phone}
                                                faculty={item.faculty}
                                                bankName={item?.bankName}
                                                bankAccountName={item?.bankAccountName}
                                                bankAccountNumber={item?.bankAccountNumber}
                                                dateOfBirthInBS={item.dateOfBirthInBS}
                                                dateOfBirthInAD={item.dateOfBirthInAD}
                                                isVerified={item.isVerified}
                                                instituteRollNo={item?.instituteRollNo}
                                                institute={item.institute}
                                                showAccount={false}
                                                date={item?.date}
                                                dateApply={item?.dateApply}

                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Infocard color='bg-green-300' data={scholarshipData} title={'Scholarship Applicants'} />
                                <div className='mt-2 h-[70vh] w-[100vw] ml-2 bg-slate-100 overflow-hidden hover:overflow-y-scroll md:w-[31vw] rounded-md'>
                                    <div>
                                        {scholarshipData?.map((item, index) => (


                                            <Listcard key={index}
                                                name={item.fullName}
                                                email={item.email}
                                                phone={item.phone}
                                                faculty={item?.faculty}
                                                bankName={item?.bankName}
                                                bankAccountName={item?.bankAccountName}
                                                bankAccountNumber={item?.bankAccountNumber}
                                                dateOfBirthInBS={item?.dateOfBirthInBS}
                                                dateOfBirthInAD={item?.dateOfBirthInAD}
                                                isVerified={item?.isVerified}
                                                institute={item?.institute}
                                                instituteRollNo={item?.instituteRollNo}
                                                showAccount={true}
                                                date={item?.date}
                                                dateApply={item?.dateApply}
                                            />


                                        )
                                        )}


                                    </div>
                                </div>
                            </div>
                            <div>
                                <Infocard color='bg-purple-400' ends={0} title={'Interns'} />
                                <div className='mt-2 h-[70vh] w-[100vw] ml-2 bg-slate-100 overflow-hidden hover:overflow-y-scroll md:w-[31vw] rounded-md'>
                                    <div>
                                        <p className='text-center text-slate-500 text-md'>No interns available</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className='flex justify-between items-center mt-4 ml-5 pl-8'>



                    </div>
                </div>
            ) : (
                <section className="h-[92vh]">
                    <div className="px-6 h-full text-gray-800">
                        <div
                            className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                        >
                            <div
                                className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                            >
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                    className="w-full"
                                    alt="Sample image"
                                />
                            </div>
                            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                                <form>

                                    <div className='flex space-x-3 items-center mb-8'>
                                        <Image src={"/logo.jpg"} height={'70'} width={'70'} />
                                        <p className='text-blue-400 text-3xl font-medium'>Admin Login</p>
                                    </div>

                                    <div className="mb-6">
                                        <input
                                            name='email'
                                            onChange={handleChange}
                                            value={formData.email}
                                            type="text"
                                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            id="exampleFormControlInput2"
                                            placeholder="Email address"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <input
                                            name='password'
                                            onChange={handleChange}
                                            value={formData.password}
                                            type="password"
                                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            id="exampleFormControlInput23"
                                            placeholder="Password"
                                        />
                                    </div>

                                    <div className="flex justify-between items-center mb-6">

                                    </div>

                                    <div className="text-center lg:text-left">
                                        <button
                                            onClick={handleSubmit}
                                            type="button"
                                            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                        >
                                            Login
                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}
export default Admin;