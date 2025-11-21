import React from 'react';
import { useForm } from 'react-hook-form';

const SendParcel = () => {

    const { 
        register,
        formState: { errors } ,
        handleSubmit,

     } = useForm()

     const handleSendParcel = data => {

     }

    return (
        <div>
            <h2 className="text-5xl font-bold">Send A Parcel</h2>
            <form onSubmit={handleSubmit(handleSendParcel)}>
                {/* DOCUMENTS */}
                <div>

                </div>
                {/* PARCEL INFO -  */}
                <div>

                </div>
                {/* TWO COLUMN */}
                <div>
                    {/* SENDER */}
                    <div>

                    </div>
                    {/* RECEIVER */}
                    <div>

                    </div>
                </div>
            </form>
            
        </div>
    );
};

export default SendParcel;