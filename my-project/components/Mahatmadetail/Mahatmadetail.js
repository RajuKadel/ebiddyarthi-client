import React from 'react'
import Image from 'next/image'
const Mahatmadetail = () => {
    return (

        <div className=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className='rounded-t-lg relative h-[40vh] w-full'>
                <Image src={'/golden.png'} layout={'fill'} objectFit={'cover'} alt={"image"} />
            </div>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Golden Jubilee Scholarship</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 normal-case">
                    Under the golden jubilee scholarship scheme ,embassy of india provides
                    scholarship to student enrolled in bachelor 1 st /1 st part of undergraduate course in
                    recognized educational institute of Nepal in the field of engineering or other
                </p>
                <h2 className='bg-green-400 w-fit px-1'>Scholaarship Amount:</h2>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 normal-case">
                    Selected student in engineering will get scholarship of NRs 4000 per month .the
                    scholarship will be discontinued if the percentage of marks obtained by the
                    awarded falls below 50% in each subsequent year or for any other reason that
                    the embassy may deem necessarily .
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 normal-case">
                    When and how to apply for this scheme is tentatively announced in November
                    /December every year in this regard, announcement is made through local
                    newspaper and uploaded on embassy of indias website.
                </p>
                <a href='https://www.indembkathmandu.gov.in'>https://www.indembkathmandu.gov.in</a>


            </div>
            <div>
            </div>
        </div>
    )
}

export default Mahatmadetail