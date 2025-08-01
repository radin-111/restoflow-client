import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import AuthInfo from '../../hooks/AuthInfo';
import SingleOrder from './SingleOrder';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyOrder = () => {
    const data = useLoaderData()
    const { user, quantity2 } = AuthInfo();
    const allOrders = data.filter(d => d.email === user.email)
    const [orders, setOrders] = useState(allOrders)

    // const [addQuantity, setAddquantity] = useState(null)

    let finalCount = {}


    const handleDelete = (id, docId, quantity) => {

        const remainOrders = orders.filter(d => d._id != id)


        if (quantity2) {


            const mainProduct = quantity2.find(d => d._id == docId)


            const newQuantity = parseInt(mainProduct?.quantity) + parseInt(quantity)
            const newPurchase = parseInt(mainProduct?.purchaseCount) - parseInt(quantity)
            // const finalCount ={ {
            //     quantity: newQuantity,
            //     purchaseCount: newPurchase

            // }}
            finalCount = { ...mainProduct }
            delete finalCount._id;
            finalCount.quantity = newQuantity
            finalCount.purchaseCount = newPurchase;
            delete finalCount.doc_Id


        }


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {





                axios.delete(`https://restaurant-management-server-bay.vercel.app/deleteorders/${id}`)
                    .then(d => {
                        if (d.data.deletedCount) {
                            





                            axios.put(`https://restaurant-management-server-bay.vercel.app/update/${docId}`, finalCount)
                                .then(d => {
                                    if (d.data.modifiedCount) {
                                        setOrders(remainOrders)
                                        Swal.fire({
                                            title: "Deleted!",
                                            text: "Your order has been deleted.",
                                            icon: "success"
                                        });


                                    }
                                })

                        }

                    })

            }
        });



    }
    return (
        <div className='max-w-11/12 mx-auto lg:max-w-8/12 my-10  space-y-2'>
            {
                orders.length === 0 ? <NoOrders></NoOrders> : orders.map(d => <SingleOrder key={d._id} data={d} handleDelete={handleDelete} ></SingleOrder>)

            }

        </div>
    );
};

function NoOrders() {
    return (
        <div className='text-center'>
            <h1 className="text-2xl font-bold">No orders yet</h1><br />
            <Link to='/allfoods' className='btn btn-primary'>Order food</Link>
        </div>
    );
}

export default MyOrder;