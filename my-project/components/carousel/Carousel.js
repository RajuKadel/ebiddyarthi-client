import React from 'react'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Slider = () => {


    return (
        <div className="mt-11 w-screen md:w-[50vw] md:h-[81vh] ">
            <Carousel
                showArrows={true}
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
            >
                <div>
                    <Image src={"/getscholarship.jpg"} height={450} width={750} objectFit={'fill'} />
                </div>
                <div>
                    <Image src={"/researchh.jpg"} height={600} width={1000} objectFit={'fill'} />
                </div>


                <div>
                    <Image src={"/internship.jpg"} height={450} width={750} objectFit={'fill'} />
                </div>


            </Carousel>
        </div>
    )
}

export default Slider
