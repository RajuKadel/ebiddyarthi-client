import React from 'react'
import Image from 'next/image'
const Introperson = ({ description, colour, image, name, position }) => {
    return (
        <div className="w-full xl:max-w-[80vw] lg:mx-auto">
            <section className=" bg-slate-700 pt-5">
                <div className="container w-full">
                    <div
                        x-data="
     {
     slides: ['1','2','3'],
     activeSlide: 1,
     activeButton: 'w-[30px] bg-primary',
     button: 'w-[10px] bg-[#E4E4E4]'
     }
     "
                    >
                        <div className="w-full flex justify-start relative">
                            <div
                                className="
           w-full
           md:w-11/12
           lg:w-10/12
           xl:w-8/12
           relative
           xl:pb-0
           "
                            >
                                <div
                                    className="
              snap
              w-[100vw]
              max-w-[300px]
              lg:max-w-[80vw]
              2xl:max-w-[850px]
              px-3
              md:px-0
              md:mx-auto
              h-auto
              flex flex-no-wrap
              
              transition-all
             whitespace-prewrap
              "
                                    x-ref="carousel"
                                >
                                    <div
                                        className="
                                        w-[100vw]
                                        md:w-[70vw]
                 min-w-[300px]
   
                 sm:min-w-[508px]
                 md:min-w-[680px]
                 lg:min-w-[780px]
                 2xl:min-w-[850px]
                 mx-auto
                mr-5
                 md:p-2
                 "
                                    >
                                        <div className=" w-[85vw] lg:flex space-x-5 md:space-x-4 mt-1
                                        items-center">
                                            <div
                                                className="
                    
                       relative
                       h-[300px]
                       w-[350px]
                       md:-ml-3
                       md:h-[350px]
                       md:w-[35vw]
                        lg:min-w[30vw]
                       rounded-lg
                       ml-10
                       sm:ml-0
                       sm:mr-5
                       "
                                            >
                                                <Image
                                                    src={image}
                                                    alt={"image"}
                                                    layout={'fill'}
                                                    objectFit={'cover'}
                                                    className=" hidden md:block rounded-md mr-5"
                                                />

                                            </div>
                                            <div className="w-full mb-6">
                                                <div>
                                                    <p
                                                        className={`
                                                        md:pr-40 mr-8
                             font-medium
                             italic
                             text-pink-100 text-base
                             sm:text-md
                             mb-3
                             mt-2
                             lg:mr-24

                             `}
                                                    >
                                                        "{description}"
                                                    </p>
                                                    <h4 className="
                                                    
                                                  animate-pulse  font-semibold text-purple-400 text-lg md:text-md lg:mr-5 lg:ml-[15vw]">
                                                        ~{name}
                                                    </h4>
                                                    <p className="animate-pulse text-purple-300 italic pl-4  text-md md:text-md lg:mr-5 lg:ml-[15vw]">
                                                        {position}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Introperson