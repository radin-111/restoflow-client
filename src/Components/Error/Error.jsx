import React from 'react';
import { useNavigate } from 'react-router';
import Nav from '../Nav';


const Error = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Nav></Nav>

            <div className='relative'>
                <img className=' w-[100%] h-screen md:h-auto object-cover' src="https://s3-cdn.cmlabs.co/page/2023/01/24/a-guideline-on-how-to-fix-error-404-not-found-effectively-519451.png" alt="" />
            </div>
            <div className='absolute top-166 md:top-192 right-20 md:right-180 '><button className="btn md:px-40 px-20 rounded-3xl bg-[#0EA106]  text-white  " onClick={() => navigate("/")}>Got to Home Page</button></div>

        </div>

    );
};

export default Error;