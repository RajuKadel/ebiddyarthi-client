import React from 'react'
import NumberCounter from 'number-counter';
const Infocard = ({ color, title, ends }) => {
    console.log(ends);
    return (
        <div>
            <div className={`md:w-[31vw] w-[96vw] md:mx-2 h-[22vh] pl-2 flex min-w-lg flex-col md:flex-row md:max-w-xl rounded-lg ${color} shadow-lg`}>
                <div className=" min-w-lg p-6 flex flex-col justify-start">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
                    <NumberCounter className=' mt-5  text-5xl font-semibold' start={0} end={Number(ends)} duration={3} />

                </div>
            </div>
        </div>
    )
}

export default Infocard