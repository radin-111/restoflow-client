import React from 'react';
import { MdDelete } from 'react-icons/md';
import AuthInfo from '../../hooks/AuthInfo';

const SingleOrder = ({ data, handleDelete }) => {
    const { quantity2 } = AuthInfo()
    const { image, food, _id, date, quantity, time, doc_Id } = data

    return (
        <div className='flex justify-between items-center p-4 shadow-xl bg-gray-100 rounded-2xl'>
            <div><img src={image} className='w-[80px] h-[80px] object-cover rounded-2xl' alt="" /></div>
            <div className='flex flex-col gap-1 font-semibold text-black '>
                <p>Food: {food}</p>
                <p>Date: {date}</p>
                <p>Time: {time}</p>
                <p>Quantity: {quantity}</p>
            </div>
            <div className='flex gap-2 items-center font-semibold max-sm:flex-col flex-row'>
                <h1 className='text-white px-2 py-1 bg-green-400 rounded-2xl'>Ordered</h1>
                {quantity2 && <button onClick={() => handleDelete(_id, doc_Id, quantity)} className="btn btn-error btn-outline"><MdDelete size={25} /></button>}
            </div>
        </div>
    );
};

export default SingleOrder;