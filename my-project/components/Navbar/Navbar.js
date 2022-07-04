import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BiLogOut } from 'react-icons/bi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Tooltip from '@mui/material/Tooltip'
import { useSelector, useDispatch } from 'react-redux'
import { changeActiveStateOfSidebar } from "../../src/app/Slice";
import { changeActiveStateOfNavbarDropdown, handleSignOut } from "../../src/app/Slice";
import { hideOtherNavDropdown } from '../../src/app/Slice'
import { handleScreenSize } from '../../src/app/Slice'
import Avatar from '@mui/material/Avatar'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'
const Navbar = () => {
  const { token } = useSelector((state) => state)
  const router = useRouter()
  const dispatch = useDispatch()
  const {
    loginData,
    activeSidebar: activeState,
    activeNav,
    screenSize,
  } = useSelector((state) => state)


  useEffect(() => {
    const handleResize = () => {
      dispatch(handleScreenSize(window.innerWidth))
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  useEffect(() => {
    if (screenSize <= 900) {
      dispatch(changeActiveStateOfSidebar(false))
    } else {
      dispatch(changeActiveStateOfSidebar(true))
    }
  }, [screenSize])

  const handleSidebar = () => {
    dispatch(changeActiveStateOfSidebar(!activeState))
  }

  const handleDropdown = (value) => {
    if (!activeNav) {
      dispatch(changeActiveStateOfNavbarDropdown(value))
    }
    if (activeNav === value) {
      dispatch(hideOtherNavDropdown(value))
    }
    if (activeNav && activeNav !== value) {
      const activeNavIcon = activeNav
      dispatch(hideOtherNavDropdown(activeNavIcon))
      dispatch(changeActiveStateOfNavbarDropdown(value))
    }
  }
  const handleLogOut = () => {
    dispatch(handleSignOut())
    toast.success('Success', {
      position: 'top-right',
      autoClose: 3000,
    })
    router.push('/auth')
  }
  return (
    <>
      {token && (
        <div
          className={`transition-all ease-out duration-700 fixed right-0 top-0 w-screen ${activeState ? 'md:w-[81vw]' : 'w-screen'
            }  z-40 flex h-14 bg-white items-center justify-between  shadow-md`}
        >
          <div className={` rounded-full bg-light-gray pl-3 `}>
            <Tooltip
              title={activeState ? 'Hide Sidebar' : 'Show Sidebar'}
              className={activeState ? 'hidden md:block' : 'block'}
            >
              <button>
                <AiOutlineMenu
                  onClick={handleSidebar}
                  className="ml-2 md:ml-6  mt-1 cursor-pointer text-2xl text-cyan-500 md:text-2xl"
                />
              </button>
            </Tooltip>
          </div>
          <div
            className={` mr-1 flex items-center md:mr-2 ${activeState ? 'space-x-6' : 'space-x-6'
              } `}
          >

            <div className="  mr-3 flex items-center space-x-7">


              <div className='flex items-center'>
                <Avatar alt="Man"
                  className=" h-5 w-5 bg-green-500" sx={{ bgcolor: 'black' }} >{loginData?.fullName[0]}</Avatar>
                <MdKeyboardArrowDown
                  className=" ml-3 cursor-pointer text-xl text-cyan-500"
                />
                <p className='shadow-sm animate-pulse text-cyan-500 p-1 px-2 rounded-md'>Hey, {loginData?.fullName?.split(' ')[0]}</p>
              </div>
              <div className='flex items-center space-x-1 backdrop:items-center'>
                <BiLogOut className='h-8 w-8 cursor-pointer hover:text-red-400' onClick={handleLogOut} />

                <span className='text-md text-black'>Sign out</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default Navbar
