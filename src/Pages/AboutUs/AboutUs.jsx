import React from 'react';
import { NavLink } from 'react-router';

const AboutUs = () => {

    return (
        <div className='max-w-[12600px] mx-auto bg-white my-8 rounded-2xl'>
            <div className='py-8 px-16'>
                <h1 className='text-secondary text-5xl font-bold'>About Us</h1>
                <p className='text-gray-500 py-5'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div>

            <hr className='my-6 text-gray-400 mx-16' />

            <div className='mx-16'>
                <div className='flex gap-8 md:gap-16 py-8'>
                    <h1 className='text-xl font-bold text-secondary'>Story</h1>
                    <h1 className='text-xl '>Mission</h1>
                    <h1 className='text-xl '>Success</h1>
                    <h1 className='text-xl '>Team & Other</h1>
                </div>
                <div className='pb-8'>
                    <p className='text-gray-500'>
                        We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
                    </p>
                    <p className='text-gray-500 pt-4'>
                        We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
                    </p>
                    <p className='text-gray-500 pt-4'>
                        We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
                    </p>
                </div>
                
            </div>

        </div>
    );
};

export default AboutUs;