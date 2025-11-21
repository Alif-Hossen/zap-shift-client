import React from 'react';
import { useForm } from 'react-hook-form';

const SendParcel = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,

    } = useForm()

    const handleSendParcel = data => {
        console.log(data)

    }

    return (
        <div>
            <h2 className="text-5xl font-bold">Send A Parcel</h2>
            <form onSubmit={handleSubmit(handleSendParcel)} className='mt-12 p-4 '>

                {/* PARCEL TYPE */}
                <div className='flex gap-20 pb-2'>
                    <label className='"label'>
                        <input type="radio" {...register('parcelType')} value="document" className="radio" defaultChecked />
                        Document
                    </label>

                    <label className='"label'>
                        <input type="radio" {...register('parcelType')} value="npn-document" className="radio" />
                        Non-Document
                    </label>
                </div>
                {/* PARCEL INFO -  */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-20'>
                    <fieldset className="fieldset">
                        <label className="label">Parcel Name</label>
                        <input type="text" {...register('parcelName')} className="input w-full" placeholder="Enter Parcel Name" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label">Parcel Weight (KG)</label>
                        <input type="number" {...register('parcelWeight')} className="input w-full" placeholder="Enter Parcel Weight" />
                    </fieldset>

                </div>

                {/* TWO COLUMN */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    {/* SENDER DETAILS*/}
                    
                    <fieldset className="fieldset">
                        <h4 className="text-2xl font-semibold">Sender Details</h4>

                        {/* SENDER NAME - */}
                        <label className="label">Sender Name</label>
                        <input type="text" {...register('senderName')} className="input w-full" placeholder="Enter Sender Name" />

                        {/* SENDER ADDRESS - */}
                        <label className="label mt-4">Sender Address</label>
                        <input type="text" {...register('senderAddress')} className="input w-full" placeholder="Enter Sender Address" />
                        {/* SENDER PHONE NUMBER - */}
                        <label className="label mt-4">Sender Phone Number</label>
                        <input type="text" {...register('senderPhoneNumber')} className="input w-full" placeholder="Enter Sender Phone Number" />

                        {/* SENDER DISTRICT - */}
                        <label className="label mt-4">Sender District</label>
                        <input type="text" {...register('senderDistrict')} className="input w-full" placeholder="Enter Sender District" />

                        {/* SENDER INSTRUCTION - */}
                        <label className="label mt-4">Pickup Instruction</label>
                        <textarea type="text" {...register('pickUpInstruction')} className="input w-full" placeholder="Enter Pickup Instruction">

                        </textarea>
                        {/* <input type="text" {...register('pickUpInstruction')} className="input w-full" placeholder="Enter Pickup Instruction" /> */}
                    </fieldset>


                    {/* RECEIVER DETAILS - */}
                    <fieldset className="fieldset">
                        <h4 className="text-2xl font-semibold">Receiver  Details</h4>

                        {/*RECEIVER  NAME - */}
                        <label className="label">Receiver Name</label>
                        <input type="text" {...register('receiverName')} className="input w-full" placeholder="Enter Receiver Name" />

                        {/*RECEIVER  ADDRESS - */}
                        <label className="label mt-4">Receiver Address</label>
                        <input type="text" {...register('receiverAddress')} className="input w-full" placeholder="Enter Sender Address" />

                        {/*RECEIVER  PHONE NUMBER - */}
                        <label className="label mt-4">Receiver Phone Number</label>
                        <input type="text" {...register('receiverPhoneNumber')} className="input w-full" placeholder="Enter Receiver Phone Number" />

                        {/* RECEIVER DISTRICT - */}
                        <label className="label mt-4">Receiver District</label>
                        <input type="text" {...register('receiverDistrict')} className="input w-full" placeholder="Enter Receiver District" />

                        {/*  INSTRUCTION - */}
                        <label className="label mt-4">Pickup Instruction</label>
                        <textarea type="text" {...register('pickUpInstruction')} className="input w-full" placeholder="Enter Pickup Instruction">

                        </textarea>
                    </fieldset>
                </div>
                <input type="submit" value="Send Parcel" className='btn btn-primary text-black' />
            </form>

        </div>
    );
};

export default SendParcel;