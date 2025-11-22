import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router';

const SendParcel = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    
    } = useForm();

    const serviceCenters = useLoaderData();
    const regionsDuplicate = serviceCenters.map(c => c.region);
    // const regions = new Set(regionsDuplicate); // SET EE CONVERT HOBE
    const regions = [...new Set(regionsDuplicate)];
    // console.log(regions);
    const senderRegion = watch('senderRegion')

    const districtsByRegion = region => {
        const regionDistricts = serviceCenters.filter ( c => c.region === region);
        const districts = regionDistricts.map(d => d.district);
        return districts;
    }

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

                        {/* SENDER REGION -> */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Sender Region</legend>
                            <select {...register('senderRegion')} defaultValue="Pick a region" className="select">
                                <option disabled={true}>Pick a Region</option>
                                {
                                    regions.map((r,i) => <option key={i} value={r}>{r}</option>)
                                }
                            </select>
                        </fieldset>

                        {/* SENDER DISTRICTS -> */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Sender District</legend>
                            <select {...register('senderDistrict')} defaultValue="Pick a region" className="select">
                                <option disabled={true}>Pick a District</option>
                                {
                                    districtsByRegion(senderRegion).map((r,i) => <option key={i} value={r}>{r}</option>)
                                }
                            </select>
                        </fieldset>


                       



                        {/* SENDER INSTRUCTION - */}
                        <label className="label mt-4">Pickup Instruction</label>
                        <textarea type="text" {...register('senderPickUpInstruction')} className="input w-full" placeholder="Enter Pickup Instruction">

                        </textarea>
                        {/* <input type="text" {...register('pickUpInstruction')} className="input w-full" placeholder="Enter Pickup Instruction" /> */}
                    </fieldset>


                    {/* ---------------- */}


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
                        <textarea type="text" {...register('receiverPickUpInstruction')} className="input w-full" placeholder="Enter Pickup Instruction">

                        </textarea>
                    </fieldset>
                </div>
                <input type="submit" value="Send Parcel" className='btn btn-primary text-black' />
            </form>

        </div>
    );
};

export default SendParcel;