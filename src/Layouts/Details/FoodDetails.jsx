import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Foot from '../../Components/Foot';
import AuthInfo from '../../hooks/AuthInfo';

const FoodDetails = () => {
    const [data] = useLoaderData();
    const { foodName, imageUrl, category, price, addedByEmail, quantity, addedByName, description, origin, purchaseCount, _id } = data
    const { user } = AuthInfo();
    const navigate = useNavigate();

    return (
        <div>
            <div className="bg-gradient-to-br from-orange-100 via-white to-yellow-100 min-h-screen flex items-center justify-center p-6 md:p-10 lg:p-16 ">
                <div className="max-w-7xl w-full bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden flex flex-col lg:flex-row transition-all duration-300">

                    <div className="lg:w-1/2 w-full h-64 sm:h-96 lg:h-auto aspect-video overflow-hidden flex items-center justify-center bg-gray-100">
                        <img
                            src={imageUrl}
                            alt={foodName}
                            className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                    </div>


                    <div className="lg:w-1/2 p-6 sm:p-10 flex flex-col justify-between gap-8">
                        <div>
                            <h2 className="text-4xl sm:text-5xl font-extrabold text-orange-600 mb-3">{foodName}</h2>
                            <p className="text-base sm:text-lg text-gray-500 mb-1">
                                Category: <span className="font-semibold text-gray-800">{category}</span>
                            </p>
                            <p className="text-base sm:text-lg text-gray-500 mb-1">
                                Origin: <span className="font-semibold text-gray-800">{origin}</span>
                            </p>
                            <p className="text-base sm:text-lg text-gray-500 mb-6">
                                Added by: <span className="font-semibold text-gray-800">{addedByName}</span>
                            </p>

                            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
                                {description}
                            </p>
                        </div>

                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pt-6 border-t border-gray-200">
                            <div className="space-y-2 text-base sm:text-lg text-black">
                                <p><strong>Price:</strong> <span className="text-green-600 font-bold">${price}</span></p>
                                <p><strong>Available:</strong> {quantity} pieces</p>
                                <p><strong>Purchased:</strong> {purchaseCount} times</p>
                            </div>
                            {
                                user ? (
                                    (parseInt(quantity) === 0 || addedByEmail === user.email) ? (
                                        <div className='text-red-500 font-semibold flex flex-col gap-2'> {parseInt(quantity) !== 0 ? 'You added this item ' : 'It is not available'}
                                            <button onClick={() => navigate(`/order/${_id}`)} className="w-full lg:w-auto bg-orange-500  text-white font-semibold px-8 py-3 rounded-xl text-lg shadow-md transition duration-300 opacity-50" disabled >
                                                Purchase Now
                                            </button>
                                        </div>
                                    ) : (
                                        <button onClick={() => navigate(`/order/${_id}`)} className="w-full lg:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-xl text-lg shadow-md transition duration-300">
                                            Purchase Now
                                        </button>
                                    )
                                ) : (
                                    <button onClick={() => navigate(`/order/${_id}`)} className="w-full lg:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-xl text-lg shadow-md transition duration-300">
                                        Purchase Now
                                    </button>
                                )
                            }

                        </div>
                    </div>

                </div>
            </div>
            <Foot></Foot>
        </div>
    );
};

export default FoodDetails;
