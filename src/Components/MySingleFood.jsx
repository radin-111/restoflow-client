
import React from 'react';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { Link } from 'react-router';


const MySingleFood = ({ myfood, handleDelete }) => {

    const { imageUrl, foodName, _id } = myfood;

    return (
        <div className='flex justify-between items-center p-4 shadow-xl bg-gray-100 rounded-2xl'>
            <div><img src={imageUrl} className='w-[80px] h-[80px] object-cover rounded-2xl' alt="" /></div>
            <div className='text-black'>{foodName}</div>
            <div className='flex gap-2'>
                <Link to={`/update/${_id}`} className="btn btn-primary btn-outline" ><MdModeEdit size={25} /></Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-error btn-outline"><MdDelete size={25} /></button>
            </div>
        </div>
    );
};

export default MySingleFood;