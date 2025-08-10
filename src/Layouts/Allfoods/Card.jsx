import React from 'react';
import { useNavigate } from 'react-router';

const Card = ({ data }) => {
    const { imageUrl, foodName, description, _id } = data
    const navigate = useNavigate();
    return (
        <div className="card bg-base-100 image-full  shadow-sm rounded-3xl">
            <figure>
                <img
                    className=' w-full sm:!h-[200px] max-sm:!h-[300px] md:!h-[450px] object-cover'

                    src={imageUrl}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{foodName}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">



                    <button onClick={() => navigate(`/details/${_id}`)} className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] font-bold
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;