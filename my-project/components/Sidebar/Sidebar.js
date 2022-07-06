import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MdOutlineEmojiEvents } from 'react-icons/md'
import { GiArchiveResearch } from 'react-icons/gi'
import { IoSchoolOutline } from 'react-icons/io5'
import { IoSearchCircleOutline } from 'react-icons/io5'
import { GrMoney } from 'react-icons/gr';
import { MdOutlineCancel } from 'react-icons/md'
import { AiOutlineHome } from 'react-icons/ai'
import { ImAirplane } from 'react-icons/im';
import { ImInfo } from 'react-icons/im'
import { useSelector, useDispatch } from 'react-redux'
import { changeActiveStateOfSidebar } from '../../src/app/Slice'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import { useRouter } from 'next/router'
const links = [
    {
        name: 'home',
        icon: <AiOutlineHome className='text-2xl ' />,
    },
    {
        name: 'scholarship',
        icon: <IoSchoolOutline className='text-2xl' />,
    },
    {
        name: 'jobs',
        icon: <GrMoney className='text-2xl' />,
    },
    {
        name: 'research',
        icon: <IoSearchCircleOutline className='text-2xl' />,
    }
    ,
    {
        name: 'grand',
        icon: <MdOutlineEmojiEvents className='text-2xl' />,
    },
    {
        name: 'studyabroad',
        icon: <ImAirplane className='text-lg' />
    }
    , {
        name: 'about',
        icon: <ImInfo className='text-2xl' />
    }
]
const Sidebar = () => {
    const router = useRouter()
    const { token, activeSidebar: activeState, screenSize } = useSelector(
        (state) => state
    )
    const activeSite = router?.pathname.split('/')[1]
    console.log(activeSite);
    console.log(router.pathname)
    const isRemain = activeSite.substring(0, activeSite?.length - 1);
    if (!activeSite) {
        activeSite = 'home'
    }
    var isRemainApply = '';
    if (activeSite == "apply") {
        isRemainApply = 'scholarship';
    }
    console.log(isRemainApply,'isremain');

    const dispatch = useDispatch()
    const activeLink =
        'm-2 mr-2 flex  w-full items-center gap-3 rounded-md p-1 text-white'
    const normalLink =
        'm-2 mr-2 flex  w-full items-center gap-3 rounded-md p-1 hover:bg-light-gray dark:text-gray-200 dark:hover:text-black text-gray-700'

    const handleCancel = (e) => {
        e.preventDefault()
        const bool = !activeState
        dispatch(changeActiveStateOfSidebar(bool))
    }
    const handleHomeClick = (e) => {
        e.preventDefault()
        dispatch(changeActiveStateOfSidebar(false))
    }
    const handleSideClick = (e) => {
        e.preventDefault()
        if (activeState && screenSize <= 900) {
            dispatch(changeActiveStateOfSidebar(false))
        }
    }
    return (
        <div
            className={`z-50 -mt-12 md:mt-0 transition-all ease-out duration-700 ${activeState ? 'left-0' : '-left-64'
                }  fixed h-screen w-64 bg-slate-50 md:top-0 md:bottom-0 md:overflow-hidden hover:md:overflow-y-auto `}
        >
            {activeState && token && (

                <nav>
                    <div className="flex items-center justify-between shadow-md pb-3 ">
                        <Link href="/">
                            <div
                                onClick={handleSideClick}
                                className="ml-4 pt-3 mt-4 flex cursor-pointer items-center justify-center gap-3 text-xl font-bold tracking-tight text-slate-900 dark:text-white "
                            >
                                <Image src="/logo.jpg" width={40} height={40} className='rounded-full' />
                                <span className='text-slate-600 '>EBiddyarthi</span>
                            </div>
                        </Link>
                        <div className="mt-8  pr-4 flex items-center pl-1">
                            <p onClick={handleCancel}>
                                <Tooltip title="Hide">
                                    <IconButton>
                                        <MdOutlineCancel className='text-cyan-400' />
                                    </IconButton>
                                </Tooltip>
                            </p>
                        </div>
                    </div>
                    <div className=" mt-8 mr-2 flex flex-col items-start justify-center">
                        {links.map((item, i) => (
                            <div className="w-full" key={i}>
                                <div className="ml-4">

                                    <div onClick={handleSideClick} className=' shadow-sm px-1  mr-2 transition-all ease-out duration-100 text-slate-300 rounded '>
                                        <Link href={`${item.name === 'home' ? `/` : `/${item.name}`}`} passHref>

                                            <a>
                                                <div className={`${normalLink} cursor-pointer transition-all ease-out duration-300 hover:translate-x-1`}>
                                                    {item.icon}
                                                    {item?.name === 'studyabroad' ? (
                                                        <span className={` font-semibold capitalize ${activeSite === item.name ? 'border-b-2   border-red-500' : ''} `}>Abroad Study</span>

                                                    ) :
                                                        (
                                                            <span className={` font-semibold capitalize ${isRemainApply === item.name ? 'border-b-2   border-red-500' : ''}  ${isRemain === item.name ? 'border-b-2   border-red-500' : ''} ${activeSite === item.name ? 'border-b-2   border-red-500' : ''} `}>{item.name}</span>
                                                        )}
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </nav>

            )}
        </div>

    )
}

export default Sidebar
