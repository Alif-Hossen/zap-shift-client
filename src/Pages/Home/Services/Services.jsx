import React from 'react';
import parcelRtn from '../../../assets/66.jpeg'
import parcelRtn2 from '../../../assets/61.avif'
import parcelRtn1 from '../../../assets/62.avif'
import parcelRtn3 from '../../../assets/63.avif'
import parcelRtn4 from '../../../assets/64.avif'
import parcelRtn5 from '../../../assets/65.avif'


const Services = () => {
    return (
        <div className='bg-secondary my-20 rounded-2xl'>
            <div className='text-center py-8'>
                <h1 className='text-white font-bold text-4xl pb-2'>Our Services</h1>
                <p className='text-white'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.</p>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 max-w-[1200px] mx-3 md:mx-auto  pb-12 '>
                <div className='hover:bg-[#CAEB66]  bg-white text-center rounded-4xl'>
                    <img className='mx-auto h-[70px] w-[70px] rounded-full mt-4' src={parcelRtn1} alt="" />
                    <h1 className='text-secondary font-bold text-2xl'>Express & Standard Delivery</h1>
                    <p className='text-gray-500 py-2'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>
                <div className='hover:bg-[#CAEB66]  bg-white text-center rounded-4xl'>
                    <img className='mx-auto h-[70px] w-[70px] rounded-full mt-4' src={parcelRtn2} alt="" />
                    <h1 className='text-secondary font-bold text-2xl'>Nationwide Delivery</h1>
                    <p className='text-gray-500'>We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>
                </div>
                <div className='hover:bg-[#CAEB66]  bg-white text-center rounded-4xl'>
                    <img className=' mx-auto h-[70px] w-[70px] rounded-full mt-4' src={parcelRtn3} alt="" />
                    <h1 className='text-secondary font-bold text-2xl'>Fulfillment Solution</h1>
                    <p className='text-gray-500 py-2'>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                </div>
                <div className='hover:bg-[#CAEB66]  bg-white text-center rounded-4xl'>
                    <img className='mx-auto h-[70px] w-[70px] rounded-full mt-4' src={parcelRtn4} alt="" />
                    <h1 className='text-secondary font-bold text-2xl'>Cash on Home Delivery</h1>
                    <p className='text-gray-500'>100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
                </div>
                <div className='hover:bg-[#CAEB66]  bg-white text-center rounded-4xl'>
                    <img className=' mt-4 mx-auto h-[70px] w-[70px] rounded-full' src={parcelRtn5} alt="" />
                    <h1 className='text-secondary font-bold text-2xl'>Corporate Service / Contract In Logistics</h1>
                    <p className='text-gray-500 py-2'> Customized corporate services which includes warehouse and inventory management support.</p>
                </div>
                <div className='hover:bg-[#CAEB66]  bg-white text-center rounded-4xl'>
                    <img className='mt-4 mx-auto h-[70px] w-[70px] rounded-full' src={parcelRtn} alt="" />
                    <h1 className='text-secondary font-bold text-2xl'>Parcel Return</h1>
                    <p className='text-gray-500 py-2'>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
                </div>
            </div>

        </div>
    );
};

export default Services;