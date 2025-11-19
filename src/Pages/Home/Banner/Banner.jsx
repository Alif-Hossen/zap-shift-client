import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import bannerImg1 from '../../../assets/banner/banner1.png'
import bannerImg2 from '../../../assets/banner/banner2.png'
import bannerImg3 from '../../../assets/banner/banner3.png'
import { FaArrowCircleUp } from 'react-icons/fa';

const Banner = () => {
    return (
        <Carousel
        autoPlay={true}
        infiniteLoop={true}
        >
            <div className='relative'>
                <img src={bannerImg1} />
                <div className='flex gap-4 absolute top-45 md:top-5/6 left-8 md:left-23 '>
                    <div className='flex'>
                        <button className='btn btn-primary text-black'>Track Your Parcel</button>
                        <span className='p-2 bg-black rounded-full text-white shadow-lg text-2xl rotate-45'>
                            <FaArrowCircleUp />
                        </span>
                    </div>
                    <button className='btn rounded-lg'>Be A rider</button>
                </div>
            </div>
            <div className='relative'>
                <img src={bannerImg2} />
                <div className='flex gap-4 absolute top-43 md:top-5/6 left-8 md:left-23 '>
                    <div className='flex'>
                        <button className='btn btn-primary text-black rounded-2xl'>Track Your Parcel</button>
                        <span className='p-2 bg-black rounded-full text-white shadow-lg text-2xl rotate-45'>
                            <FaArrowCircleUp />
                        </span>
                    </div>
                    <button className='btn rounded-lg'>Be A rider</button>
                </div>
            </div>
            <div className='relative '>
                <img src={bannerImg3} />
                <div className='absolute top-42 md:top-5/6 left-8 md:left-23 flex gap-4'>
                    <div className='flex'>
                        <button className='btn btn-primary text-black rounded-2xl'>Track Your Parcel</button>
                        <span className='p-2 bg-black rounded-full text-white shadow-lg text-2xl rotate-45'>
                            <FaArrowCircleUp />
                        </span>
                    </div>
                    <button className='btn rounded-lg'>Be A rider</button>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;