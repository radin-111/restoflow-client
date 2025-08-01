import React from 'react';
import { Link } from 'react-router';
import { SiFacebook } from "react-icons/si";
import { TbXboxXFilled } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Foot = () => {
    return (
        <div className='w-full flex flex-col  md:px-20 md:py-10 bg-black px-2 py-5'>
            <img src="https://cdn.qwenlm.ai/output/24058570-a08d-412a-b885-c2c9cef0d4a7/t2i/37ad233b-728f-4543-91c0-7efcfc50c57e/3f9bd5fa-2a6e-4c57-a98a-390f8fd5ba09.png?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV91c2VyX2lkIjoiMjQwNTg1NzAtYTA4ZC00MTJhLWI4ODUtYzJjOWNlZjBkNGE3IiwicmVzb3VyY2VfaWQiOiIzZjliZDVmYS0yYTZlLTRjNTctYTk4YS0zOTBmOGZkNWJhMDkiLCJyZXNvdXJjZV9jaGF0X2lkIjpudWxsfQ.NeXmshRyczwJzFAFKNYJzwjyhJftQ6bpadBmNVsW6XY" className='w-[100px] rounded-2xl h-[100px] mx-auto' alt="" />
            <h1 className="text-2xl font-bold text-center text-white">RestoFlow</h1><br />
            <h1 className='text-center text-white'>Join us</h1><br />
            <div className="flex items-center gap-8 mx-auto">
                <Link to="https://m.facebook.com/profile.php?id=61554372099239"><SiFacebook color='white' size={35} /></Link>
                <Link><TbXboxXFilled color='white' size={45} /></Link>
                <Link><FaYoutube color='white' size={45}  /></Link>
                <Link><FaLinkedinIn  color='white' size={45} /></Link>
            </div><br />
            <h1 className='text-white text-center'>&copy; All rights reserved</h1>
            
        </div>
    );
};

export default Foot;