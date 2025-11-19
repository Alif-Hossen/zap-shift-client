import React from 'react';
import { FaTruckPickup } from 'react-icons/fa';
import { GiCash, GiDeliveryDrone } from 'react-icons/gi';
import { MdCorporateFare } from 'react-icons/md';

const HowWork = () => {
    return (
        <div className='max-w-[450px] md:max-w-[760px] lg:max-w-[1100px] mx-auto'>
            <h1 className='text-secondary font-bold text-4xl py-12'>How It Work </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 '>
                <div className=' bg-white rounded-xl px-5 pt-4 '>
                    <span className='text-4xl '>
                        <FaTruckPickup />
                    </span>
                    <h1 className='text-secondary font-bold text-lg py-3'>Booking Pick & Drop</h1>
                    <p className='text-gray-600 pb-4'>Easily book pickup and drop-off services for any package. We ensure fast, secure delivery with live tracking from your location to the destination.</p>
                </div>

                <div className=' bg-white rounded-xl px-3 pt-4'>
                    <span className='text-4xl'>
                        <GiCash />
                    </span>
                    <h1 className='text-secondary font-bold text-lg py-3'>Cash On Delivery</h1>
                    <p className='text-gray-600 pb-4'>Enjoy complete peace of mind. Receive your order first, then pay our courier with cash. It's secure, hassle-free, and puts you in control.</p>
                </div>

                <div className=' bg-white rounded-xl px-3 pt-4'>
                    <span className='text-4xl'>
                        <GiDeliveryDrone />
                    </span>
                    <h1 className='text-secondary font-bold text-lg py-3'>Delivery Hub</h1>
                    <p className='text-gray-600 pb-4' >Our dedicated Delivery Hub ensures rapid processing and flawless routing of every shipment. Experience seamless logistics from sorting to final mile delivery.</p>
                </div>
                <div className=' bg-white rounded-xl px-3 pt-4'>
                    <span className='text-4xl'>
                        <MdCorporateFare />
                    </span>
                    <h1 className='text-secondary font-bold text-lg py-3'>Booking SME & Corporate</h1>
                    <p className='text-gray-600 pb-4'>Tailored logistics solutions for SMEs and corporate clients. Streamline your business shipping with dedicated support and competitive rates.</p>
                </div>
            </div>
        </div>
    );
};

export default HowWork;