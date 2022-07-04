import React from 'react'
import { useEffect } from "react"
import { useRouter } from "next/router"
import { useSelector } from 'react-redux'
import Cardmerit from "../components/scholarshipcard/Cardmerit";
import Head from 'next/head';
const scholarship = () => {
    const router = useRouter()
    const { activeSidebar, token } = useSelector((state) => state)
    useEffect(() => {
        if (!token) {
            router.push('/auth')
        }
    }, [])
    const scholarships = [
        {
            heading: 'UGC Sholarship Program',
            description: 'The university grants commission (UGC) was established as an autonomous and statuary institution under the university grants commission act (1993) to promote, facilitate support and enhance the quality of higher education in the country. thereby enabling educated workforce .it also aims at developing Nepali academic as per the global standard.',
            image: '/ugc.png',
            isAvailable: true,
            route: 'ugc'
        },
        {
            heading: 'Golden Jubilee Scholarship',
            description: `The Embassy of India, Kathmandu invites online applications for Mahatma Gandhi and Golden Jubilee Scholarship Schemes from Nepali nationals studying in Nepal.The Online Application may please be submitted through the web portal  www.goischolarship.com.np.Students need not visit the Embassy but have to submit all the documents online which will be verified by the Embassy itself.Those who are receiving scholarships from any other source are not eligible to apply.`,
            image: '/golden.png',
            isAvailable: false,
            route: 'mahatma-gandhi'
        },
        {
            heading: 'Garib Tatha Jehendar Scholarship',
            description: `According to Centre for applied research and development (CARD) report:
            Pursuant to the memorandum of understanding between Asia development
            foundation, Korea (ADF) and Tribhuvan university, institute of engineering (IOE).4
            student 2/2 (boys/girls) from paranuchal engineering campus will get this
            scholarship. Particular student who selected for this scholarship will get Rs.9000
            per semester.`,
            image: '/merit.png',
            isAvailable: false,
            route: 'garib-tatha-jehendar'
        }
    ]
    return (
        <>
            {token && (
                <div
                    className={` lg:h-[92vh]  transition-all lg:overflow-hidden ease-out duration-700 pt-3 md:pt-7  md:mt-5  bg-slate-100 ${activeSidebar ? 'lg:ml-64 ' : ''
                        }`}
                >
                     <Head>
        <title>Scholarship</title>
      </Head>
                    <div className={` md:ml-0  pt-8 transition-all ease-out duration-700 grid gap-4 md:gap-2  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${!activeSidebar ? 'lg:ml-32 ' : ''
                        }`}>
                        {scholarships.map(({ heading, description, image, isAvailable, route }, index) => (
                            <div key={index}>
                                <Cardmerit route={route} key={index} heading={heading} description={description} image={image} isAvailable={isAvailable} />

                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}
export default scholarship