// import React from 'react';
// import LPT from '../../../assets/live-tracking.png'
// import SD from '../../../assets/customer-top.png'
// import CCS from '../../../assets/safe-delivery.png'

// const Another = () => {
//     return (
//         <div className='my-20 flex flex-col gap-8'>
//             <div className='flex items-center  bg-white rounded-xl'>
//                 <img className='my-4' src={LPT} alt="" />
//                 <div className=''>
//                     <h1 className='text-secondary text-2xl font-bold'>Live Parcel Tracking</h1>
//                     <p className='text-gray-500'>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
//                 </div>
//             </div>

//             <div className='flex justify-between items-center bg-white rounded-xl'>
//                 <img className='py-4 h-[190px] w-[300px]' src={SD} alt="" />
//                 <div className=''>
//                     <h1 className='text-secondary text-2xl font-bold'>100% Safe Delivery</h1>
//                     <p className='text-gray-500'>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
//                 </div>
//             </div>
//             <div className='flex items-center justify-between bg-white rounded-xl'>
//                 <img className='py-4' src={CCS} alt="" />
//                 <div className=''>
//                     <h1 className='text-secondary text-2xl font-bold'>100% Safe Delivery</h1>
//                     <p className='text-gray-500'>Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Another;

import React from 'react';
import LPT from '../../../assets/live-tracking.png'
import SD from '../../../assets/customer-top.png'
import CCS from '../../../assets/safe-delivery.png'

const Another = () => {
    return (
        <div className='bg-gray-200 py-16 px-4 md:px-8 lg:px-16'>
            <div className='max-w-[1200px] mx-auto flex flex-col gap-8'>

                {/* Live Parcel Tracking Card */}
                <div className='flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md p-6 lg:p-10 gap-6'>
                    {/* Image Block - বাম দিকে */}
                    <div className='md:w-1/3 lg:w-1/4 flex justify-center items-center pb-4 md:pb-0'> 
                        <img className='max-w-full h-auto object-contain' src={LPT} alt="Live Parcel Tracking" />
                    </div>
                    
                    {/* Separator এবং Content Block - মাঝখানে উল্লম্ব দাগ */}
                    <div className='md:w-2/3 lg:w-3/4 flex items-start md:border-l md:border-gray-300 md:pl-8'>
                        <div>
                            <h1 className='text-gray-800 text-2xl font-bold mb-2'>Live Parcel Tracking</h1>
                            <p className='text-gray-500'>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                        </div>
                    </div>
                </div>

                {/* 100% Safe Delivery Card */}
                <div className='flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md p-6 lg:p-10 gap-6'>
                    {/* Image Block - বাম দিকে */}
                    <div className='md:w-1/3 lg:w-1/4 flex justify-center items-center pb-4 md:pb-0'>
                        <img className='max-w-full h-auto object-contain' src={SD} alt="100% Safe Delivery" />
                    </div>
                    
                    {/* Separator এবং Content Block - মাঝখানে উল্লম্ব দাগ */}
                    <div className='md:w-2/3 lg:w-3/4 flex items-start md:border-l md:border-gray-300 md:pl-8'>
                        <div>
                            <h1 className='text-gray-800 text-2xl font-bold mb-2'>100% Safe Delivery</h1>
                            <p className='text-gray-500'>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
                        </div>
                    </div>
                </div>

                {/* 24/7 Call Center Support Card */}
                <div className='flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md p-6 lg:p-10 gap-6'>
                    {/* Image Block - বাম দিকে */}
                    <div className='md:w-1/3 lg:w-1/4 flex justify-center items-center pb-4 md:pb-0'>
                        <img className='max-w-full h-auto object-contain' src={CCS} alt="24/7 Call Center Support" />
                    </div>
                    
                    {/* Separator এবং Content Block - মাঝখানে উল্লম্ব দাগ */}
                    <div className='md:w-2/3 lg:w-3/4 flex items-start md:border-l md:border-gray-300 md:pl-8'>
                        <div>
                            <h1 className='text-gray-800 text-2xl font-bold mb-2'>24/7 Call Center Support</h1>
                            <p className='text-gray-500'>Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Another;