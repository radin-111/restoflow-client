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
                    <button onClick={()=>navigate(`/details/${_id}`)} className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Card;