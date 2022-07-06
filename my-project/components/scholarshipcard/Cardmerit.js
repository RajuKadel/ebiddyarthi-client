import Image from 'next/image'
import { useRouter } from 'next/router'
const Cardmerit = ({ heading, description, image, isAvailable, route }) => {
    const router = useRouter()
    return (
        <>
            <div onClick={() => router.push(`/scholarships/${route}`)} className="  cursor-pointer hover:bg-slate-50 w-full  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 transition-all duration-200 ease-out hover:scale-105">
                <div className=' hidden md:block rounded-t-lg relative h-[35vh] w-full'>
                    <Image src={image} layout={'fill'} objectFit={'cover'} alt={"image"} />
                </div>
                <div className='md:hidden rounded-t-lg relative h-[35vh] w-full'>
                    <Image src={image} layout={'fill'} objectFit={'fill'} alt={"image"} />
                </div>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{heading}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description.substring(0, 154)}...</p>

                    {isAvailable ? (
                        <p href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 ">
                            Available

                        </p>
                    ) : (
                        <p href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-yellow-400 rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-yellow-400 ">
                            Not Available
                        </p>
                    )}


                </div>
            </div>
        </>
    )
}

export default Cardmerit
