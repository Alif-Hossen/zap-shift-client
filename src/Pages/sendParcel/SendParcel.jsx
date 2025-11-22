import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';
// import Swal from 'sweetalert2';

const SendParcel = () => {

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },

    } = useForm();

    const serviceCenters = useLoaderData();
    const regionsDuplicate = serviceCenters.map(c => c.region);
    // const regions = new Set(regionsDuplicate); // SET EE CONVERT HOBE
    const regions = [...new Set(regionsDuplicate)];
    // console.log(regions);

    const senderRegion = useWatch({ control, name: 'senderRegion' })
    const receiverRegion = useWatch({ control, name: 'receiverRegion' })

    const districtsByRegion = region => {
        const regionDistricts = serviceCenters.filter(c => c.region === region);
        const districts = regionDistricts.map(d => d.district);
        return districts;
    }

    const handleSendParcel = data => {
        console.log(data);


        const isDocument = data.parcelType === 'document';
        const isSameDistrict = data.senderDistrict === data.receiverDistrict;
        const parcelWeight = parseFloat(data.parcelWeight);

        let cost = 0;
        if (isDocument) {
            cost = isSameDistrict ? 60 : 80;
        }
        else {
            if (parcelWeight < 3) {
                cost = isSameDistrict ? 110 : 150;
            } else {
                const minCharge = isSameDistrict ? 110 : 150;
                const extraWeight = parcelWeight - 3;
                const extraCharge = isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40;
                cost = minCharge + extraCharge;
            }
        }

        console.log('Cost -', cost);

        

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

                        {/* SENDER EMAIL - */}
                        <label className="label">Sender Email</label>
                        <input type="email" {...register('senderEmail')} className="input w-full" placeholder="Enter Sender Email" />

                        {/* SENDER PHONE NUMBER - */}
                        <label className="label mt-4">Sender Phone Number</label>
                        <input type="text" {...register('senderPhoneNumber')} className="input w-full" placeholder="Enter Sender Phone Number" />

                        {/* SENDER REGION -> */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Sender Region</legend>
                            <select {...register('senderRegion')} defaultValue="Pick a region" className="select">
                                <option disabled={true}>Pick a Region</option>
                                {
                                    regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                                }
                            </select>
                        </fieldset>

                        {/* SENDER DISTRICTS -> */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Sender District</legend>
                            <select {...register('senderDistrict')} defaultValue="Pick a region" className="select">
                                <option disabled={true}>Pick a District</option>
                                {
                                    districtsByRegion(senderRegion).map((r, i) => <option key={i} value={r}>{r}</option>)
                                }
                            </select>
                        </fieldset>

                        {/* SENDER ADDRESS - */}
                        <label className="label mt-4">Sender Address</label>
                        <input type="text" {...register('senderAddress')} className="input w-full" placeholder="Enter Sender Address" />


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

                        {/*RECEIVER  EMAIL - */}
                        <label className="label">Receiver Email</label>
                        <input type="email" {...register('receiverEmail')} className="input w-full" placeholder="Enter Receiver Email" />

                        {/* RECEIVER REGION -> */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Receiver Region</legend>
                            <select {...register('receiverRegion')} defaultValue="Pick a region" className="select">
                                <option disabled={true}>Pick a Region</option>
                                {
                                    regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                                }
                            </select>
                        </fieldset>

                        {/* RECEIVER DISTRICT -> */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Receiver District</legend>
                            <select {...register('receiverDistrict')} defaultValue="Pick a district" className="select">
                                <option disabled={true}>Pick a District</option>
                                {
                                    districtsByRegion(receiverRegion).map((d, i) => <option key={i} value={d}>{d}</option>)
                                }
                            </select>
                        </fieldset>

                        {/* SENDER ADDRESS - */}
                        <label className="label mt-4">Sender Address</label>
                        <input type="text" {...register('senderAddress')} className="input w-full" placeholder="Enter Sender Address" />

                        {/*RECEIVER  PHONE NUMBER - */}
                        <label className="label mt-4">Receiver Phone Number</label>
                        <input type="text" {...register('receiverPhoneNumber')} className="input w-full" placeholder="Enter Receiver Phone Number" />

                        {/* RECEIVER DISTRICT - */}

                        {/*  INSTRUCTION - */}
                        <label className="label mt-4">Pickup Instruction</label>
                        <textarea type="text" {...register('receiverPickUpInstruction')} className="input w-full" placeholder="Enter Pickup Instruction">

                        </textarea>
                    </fieldset>
                </div>
                <input type="submit" value="Send Parcel" className='btn btn-primary mt-8 text-black' />
            </form>

        </div>
    );
};

export default SendParcel;