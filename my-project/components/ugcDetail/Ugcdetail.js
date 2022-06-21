import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Ugcdetail = () => {
    const router = useRouter()
    const { slug } = router.query
    return (
        <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className='rounded-t-lg relative h-[40vh] w-full'>
                <Image src='/ugc.png' layout='fill' objectFit='cover' alt="image" />
            </div>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">UGC Scholarship Program</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 capitalize">
                    The university grants commission (UGC) was established as an autonomous and
                    statuary institution under the university grants commission act (1993) to
                    promote, facilitate support and enhance the quality of higher education in the
                    country. thereby enabling educated workforce .it also aims at developing Nepali
                    academic as per the global standard.
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 capitalize">
                    BE (1 st year 1 st part) student are easily applied for scholarship through ours mobile
                    app by uploading student rank card, bank detail and university roll no. the
                    particular student who selected for this scholarship will get 60000 per year for the
                    livelihood and semester fee 66000 (fee pay student) or (9000 for regular student)
                    per year for 4 year of engineering.
                </p>
                <p className='capitalize '>Scholarship per year distribution:
                    <p className='bg-green-400 w-fit px-1'>For full-fee:Rs.125000</p>
                    <p className='bg-green-400 w-fit mt-1 px-1'>For Regular:Rs.69000</p>
                </p>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Faculty
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Seat No.
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    Civil
                                </th>
                                <td class="px-6 py-4">
                                    48
                                </td>

                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    Mechanical
                                </th>
                                <td class="px-6 py-4">
                                    24
                                </td>

                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    Electrical
                                </th>
                                <td class="px-6 py-4">
                                    48
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    Computer
                                </th>
                                <td class="px-6 py-4">
                                    48
                                </td>
                            </tr>
                            <tr class="bg-white  dark:bg-gray-800">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    Automobile
                                </th>
                                <td class="px-6 py-4">
                                    24
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400 capitalize">
                    The selection process are based upon the IOE entrance rank of the student.
                    After pursuing bachelor degree in engineering the scholarship holder student
                    necessary working in institute or other gov. organization for 3 year. government
                    of Nepal provide basic salary to those particular students as similar as engineer.
                    During the 3 years of working period the student also accessible for doing master
                    degree from institute of engineering (IOE).
                </p>
                <p href="#" onClick={() => router.push(`/apply/${slug}`)} className="pl-2 ml-3 w-fit mb-1 cursor-pointer  py-2 px-3 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Apply Now
                </p>
                <div>
                </div>
            </div>
        </div>

    )
}

export default Ugcdetail