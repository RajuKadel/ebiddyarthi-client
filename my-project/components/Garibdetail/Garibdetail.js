import React from 'react'
import Image from 'next/image'
const Garibdetail = () => {
    return (
        <div className=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className='rounded-t-lg relative h-[40vh] w-full'>
                <Image src={'/merit.png'} layout={'fill'} objectFit={'cover'} alt={"image"} />
            </div>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">UGC Scholarship Program</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 capitalize">
                    According to Centre for applied research and development (CARD) report:
                    pursuant to the memorandum of understanding between Asia development
                    foundation, Korea (ADF) and Tribhuvan university, institute of engineering (IOE).4
                    student 2 /2(boys/girls) from paranuchal engineering campus will get this
                    scholarship. Particular student who selected for this scholarship will get Rs.9000
                    per semester.
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 capitalize">
                    Only the student who encounter difficult financial circumstances and schooling
                    completed from government school are highly selected for this scholarship. For
                    the scholarship continuity the student most be holding evidence of good or
                    excellent academic results of last semester.
                </p>
            </div>

            <div>
            </div>
        </div>
    )
}

export default Garibdetail