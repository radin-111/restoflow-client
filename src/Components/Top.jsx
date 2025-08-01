import React from 'react';
import Card from '../Layouts/Allfoods/Card';
import { useNavigate } from 'react-router';

const Top = ({ top }) => {
    const navigate = useNavigate();

    return (
        <div className='md:my-10 my-5 max-w-11/12 lg:max-w-8/12 mx-auto flex flex-col items-center gap-10'>
            <div className=' grid grid-cols-1 md:grid-cols-2  gap-8   '>
                {
                    top.map(d => <Card data={d} key={d._id}></Card>)
                }

            </div>
            <div>
                <button onClick={()=>navigate('/allfoods')} className='btn btn-success rounded-2xl btn-lg'>All foods</button>
            </div>
        </div>
    );
};

export default Top;