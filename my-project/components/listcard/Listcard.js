import React from 'react'
import Image from 'next/image'
const Listcard = ({ name, email, institute, phone, faculty, bankName, bankAccountName, bankAccountNumber, dateOfBirthInBS, dateOfBirthInAD, isVerified }) => {
    return (
        <div>

            <div className="p-4 min-w-lg max-w-lg my-0 bg-white  rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                {/* <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Name:Raju kadel</h5>
                <div className="flex items-baseline text-gray-900 dark:text-white">
                    <span className="text-3xl font-semibold">$</span>
                    <span className="text-5xl font-extrabold tracking-tight">49</span>
                    <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                </div> */}
                <ul role="list" className="my-7 space-y-3">
                    <div className='-mt-8'>
                        <Image src="/logo.jpg" height={40} width={40} />
                    </div>
                    <li className="flex space-x-3">
                        {/* <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> */}
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Name: {name}</span>
                    </li>
                    <li className="flex space-x-3">
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Email: {email}</span>
                    </li>
                    <li className="flex space-x-3">
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Faculty: {faculty}</span>
                    </li>
                    <li className="flex space-x-3 ">
                        <span className="text-base font-normal leading-tight text-gray-500">School/College: {institute}</span>
                    </li>
                    <li className="flex space-x-3 ">
                        <span className="text-base font-normal leading-tight text-gray-500">Phone: {phone}</span>
                    </li>
                    <li className="flex space-x-3 ">
                        <span className="text-base font-normal leading-tight text-gray-500">Date of Birth (BS): {dateOfBirthInBS} </span>
                    </li>
                    <li className="flex space-x-3 ">
                        <span className="text-base font-normal leading-tight text-gray-500">Date of Birth (AD): {dateOfBirthInAD}</span>
                    </li>
                    <li className="flex space-x-3 ">
                        <span className="text-base font-normal leading-tight text-gray-500">Bank Name: {bankName}</span>
                    </li>
                    <li className="flex space-x-3 ">
                        <span className="text-base font-normal leading-tight text-gray-500">Bank Account Name: {bankAccountName}</span>
                    </li>
                    <li className="flex space-x-3 ">
                        <span className="text-base font-normal leading-tight text-gray-500">Bank Account Number: {bankAccountNumber}</span>
                    </li>
                </ul>

            </div>

        </div>
    )
}

export default Listcard