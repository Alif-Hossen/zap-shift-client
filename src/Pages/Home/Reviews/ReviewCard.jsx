import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa'; 

const ReviewCard = ({review}) => {

    const title = "Senior Product Designer";

    const { userName, review: testimonial,user_photoURL } = review

    return (
        <div className='p-6 md:p-8 bg-white rounded-2xl shadow-xl max-w-sm mx-auto'>
            
            <div className='text-4xl text-gray-200 mb-4'>
                <FaQuoteLeft />
            </div>

            <p className='text-gray-600 leading-relaxed mb-6'>
                {testimonial}
            </p>

            <div className='border-t-2 border-dotted border-gray-300 w-full mb-6'></div>

            <div className='flex items-center gap-4'>
                <div className='w-12 h-12 rounded-full bg-teal-800 flex-shrink-0'>
                    <img className='rounded-full' src={user_photoURL} alt="" />
                </div>
                
                <div>
                    <h3 className='text-gray-800 font-bold text-base'>{userName}</h3>
                    <p className='text-gray-500 text-sm mt-0.5'>{title}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;