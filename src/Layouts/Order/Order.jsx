import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import AuthInfo from '../../hooks/AuthInfo';
import moment from 'moment';
import axios from 'axios';
import Swal from 'sweetalert2';

const Order = () => {
    const [data] = useLoaderData()
    const { foodName, price, quantity, addedByName, imageUrl, _id, purchaseCount } = data;
    const { user, cUser } = AuthInfo()
    const date = moment().format('ll');
    const time = moment().format('LT');

    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const form = Object.fromEntries(formData.entries())
        form.date = date
        form.time = time
        form.owner = addedByName
        form.image = imageUrl

        const product = { ...data }
        product.quantity = parseInt(quantity) - parseInt(form.quantity)
        product.purchaseCount = parseInt(form.quantity) + parseInt(purchaseCount)

        delete product._id;

        form.doc_Id = _id

        
        const handleAdd = () => {
            axios.put(`https://restaurant-management-server-bay.vercel.app/update/${_id}`, product)
                .then(() => {
                    navigate('/myorders')

                })

        }

        if (parseInt(form.quantity) > parseInt(quantity)) {
            setError(true);
            return;
        }
        else {
            setError(false)

            axios.post('https://restaurant-management-server-bay.vercel.app/orders', form)
                .then(d => {
                    if (d.data.insertedId) {
                        Swal.fire({

                            icon: "success",
                            title: "Order successful",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        handleAdd()


                    }
                })




        }



    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-100 via-red-200 to-red-300 flex items-center justify-center px-4 py-12">
            <div className="bg-white shadow-xl rounded-3xl p-6 md:p-10 w-full max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-8">
                    Confirm Your Purchase
                </h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">
                                Food Name
                            </label>
                            <input
                                type="text"
                                name='food'
                                readOnly
                                value={foodName}
                                className="w-full px-4 py-2 bg-gray-100 text-gray-700 border rounded-xl cursor-not-allowed"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">
                                Price ($)
                            </label>
                            <input
                                type="number"
                                readOnly
                                name='price'
                                value={price}
                                className="w-full px-4 py-2 bg-gray-100 text-gray-700 border rounded-xl cursor-not-allowed"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">
                                Quantity
                            </label>
                            <input
                                type="number"
                                min="1"
                                // max={quantity}
                                required
                                name='quantity'
                                placeholder="Enter quantity"
                                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-300"
                            />
                            {
                                error && <p className='text-red-500 italic'>More than stock</p>
                            }
                        </div>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">
                                Buyer Name
                            </label>
                            <input
                                type="text"
                                name='username'
                                readOnly
                                value={user.emailVerified ? user?.displayName : cUser && cUser?.name}
                                className="w-full px-4 py-2 bg-gray-100 text-gray-700 border rounded-xl cursor-not-allowed"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-gray-700 font-semibold mb-1">
                                Buyer Email
                            </label>
                            <input
                                type="email"
                                name='email'
                                readOnly
                                value={user?.email}
                                className="w-full px-4 py-2 bg-gray-100 text-gray-700 border rounded-xl cursor-not-allowed"
                            />
                        </div>
                    </div>

                    <div className="pt-6">
                        <button
                            type="submit"
                            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-xl shadow-md transition-all duration-300"
                        >
                            Purchase Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Order;