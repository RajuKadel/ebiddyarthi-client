import React from 'react'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Slider = () => {


    return (
        <div className="mb-12 w-screen md:w-[50vw] md:h-[81vh] ">
            <Carousel
                showArrows={true}
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
            // onChange={onChange}
            // onClickItem={onClickItem}
            // onClickThumb={onClickThumb}
            >
                <div>
                    <img src="/berger.jpg" className='h-[80vh] object-cover'  />
                </div>
                <div>
                    <img src="/a.png" className='h-[80vh] object-cover' />
                </div>
                <div>
                    <img src="/berger2.jpg" className='h-[80vh] object-cover'  />
                </div>
                <div>
                    <img src="/money.webp" className='h-[80vh] object-cover'  />
                </div>
            </Carousel>
        </div>
    )
}

export default Slider
