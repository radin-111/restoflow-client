import React, { useState } from 'react';
import AuthInfo from '../../hooks/AuthInfo';
import { Link, useLoaderData } from 'react-router';
import MySingleFood from '../../Components/MySingleFood';
import Swal from 'sweetalert2';
import axios from 'axios';

const Myfoods = () => {
    const { user } = AuthInfo();
    const data = useLoaderData();
    const myfoods = data.filter(d => d.addedByEmail === user.email)
    const [foods, setFoods] = useState(myfoods)
    const handleDelete = (id) => {
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
                axios.delete(`https://restaurant-management-server-bay.vercel.app/delete/${id}`)
                    .then(d => {
                        if (d.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your food has been deleted.",
                                icon: "success"
                            });
                            setFoods(myfoods.filter(d => d._id !== id))
                        }
                    })
            }
        });

    }
    return (
        <div className='max-w-11/12 mx-auto lg:max-w-8/12 my-10  space-y-2'>
            {
                foods.length === 0 ? <Add></Add> : foods.map(d => <MySingleFood handleDelete={handleDelete} key={d._id} myfood={d} ></MySingleFood>)
            }
        </div>
    );
};

function Add() {
    return (
        <div className='text-center'>
            <h1 className="text-2xl font-bold">No food added</h1><br />
            <Link to='/addfood' className='btn btn-primary'>Add food</Link>
        </div>
    );
}

export default Myfoods;