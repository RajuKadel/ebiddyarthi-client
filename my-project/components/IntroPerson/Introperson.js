import React from 'react'
import Image from 'next/image'
const Introperson = ({ description, colour, image, name, position }) => {
    return (
        <div className="w-full xl:max-w-[80vw] xl:mx-auto">
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
              w-[70vw]
              max-w-[300px]
              xs:max-w-[368px]
              sm:max-w-[508px]
              lg:max-w-[80vw]
              2xl:max-w-[850px]
              mx-auto
              h-auto
              flex flex-no-wrap
              
              transition-all
             whitespace-prewrap
              "
                                    x-ref="carousel"
                                >
                                    <div
                                        className="
                                        w-[70vw]
                 min-w-[300px]
                 xs:min-w-[368px]
                 sm:min-w-[508px]
                 md:min-w-[630px]
                 lg:min-w-fit
                 2xl:min-w-[850px]
                 mx-auto
                
                 sm:p-6
                 "
                                    >
                                        <div className=" w-[85vw] md:flex items-center">
                                            <div
                                                className="
                       max-w-full
                       md:max-w-fit
                       lg:max-w-fit
                       w-full
                       md:mr-12
                       lg:mr-14
                       2xl:mr-16
                       md:mb-0
                       relative
                       rounded-lg
                       "
                                            >
                                                <Image
                                                    src={image}
                                                    alt={"image"}
                                                    height={'270'}
                                                    width={'310'}
                                                    objectFit={'cover'}
                                                    className="w-full rounded-lg"
                                                />
                                            </div>
                                            <div className="w-full mb-6">
                                                <div>
                                                    <p
                                                        className={`
                                                        pr-20 mr-8
                             font-medium
                             italic
                             text-black text-base
                             sm:text-lg
                             mb-3

                             `}
                                                    >
                                                        "{description}"
                                                    </p>
                                                    <h4 className="
                                                    
                                                    font-semibold text-purple-400 text-lg md:text-md xl:mr-5 xl:ml-[29vw]">
                                                        ~{name}
                                                    </h4>
                                                    <p className="text-purple-300 italic pl-4  text-md md:text-md xl:mr-5 xl:ml-[29vw]">
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