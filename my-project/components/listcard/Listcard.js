import React from 'react'
import Image from 'next/image'
const Listcard = ({ name, email, date, dateApply, institute, phone, faculty, bankName, bankAccountName, bankAccountNumber, dateOfBirthInBS, dateOfBirthInAD, showAccount, isVerified, instituteRollNo }) => {
    return (
        <div>
            <div className="p-4 min-w-lg max-w-lg my-0 bg-white  rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <ul role="list" className="my-7 space-y-3">
                    <div className='-mt-8'>
                        <Image src={"/logo.jpg"} height={40} width={40} />
                    </div>
                    <li className="flex space-x-3">
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
                        <span className="text-base font-normal leading-tight text-gray-500">isVerifiedEmail: {isVerified}</span>
                    </li>
                    {!showAccount && (
                        <li className="flex space-x-3 ">
                            <span className="text-base font-normal leading-tight text-gray-500">Registered Date:{date}</span>
                        </li>
                    )}
                    {showAccount && (
                        <>
                            <li className="flex space-x-3 ">
                                <span className="text-base font-normal leading-tight text-gray-500">InstituteRollNo: {instituteRollNo}</span>
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
                            <li className="flex space-x-3 ">
                                <span className="text-base font-normal leading-tight text-gray-500">Scholarship Apply(Date):{dateApply}</span>
                            </li>
                        </>
                    )}
                </ul>

            </div>

        </div>
    )
}

export default Listcard