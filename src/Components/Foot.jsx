import React from "react";
import { Link } from "react-router";
import { SiFacebook } from "react-icons/si";
import { TbXboxXFilled } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Foot = () => {
    return (
        <footer className="w-full bg-black bg-opacity-40 backdrop-blur-md px-6 py-12 md:px-20 md:py-16 flex flex-col items-center rounded-t-3xl shadow-xl select-none">
            <img
                src="https://cdn.qwenlm.ai/output/24058570-a08d-412a-b885-c2c9cef0d4a7/t2i/37ad233b-728f-4543-91c0-7efcfc50c57e/3f9bd5fa-2a6e-4c57-a98a-390f8fd5ba09.png?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV91c2VyX2lkIjoiMjQwNTg1NzAtYTA4ZC00MTJhLWI4ODUtYzJjOWNlZjBkNGE3IiwicmVzb3VyY2VfaWQiOiIzZjliZDVmYS0yYTZlLTRjNTctYTk4YS0zOTBmOGZkNWJhMDkiLCJyZXNvdXJjZV9jaGF0X2lkIjpudWxsfQ.NeXmshRyczwJzFAFKNYJzwjyhJftQ6bpadBmNVsW6XY"
                alt="RestoFlow Logo"
                className="w-24 h-24 rounded-3xl mb-4 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
                loading="lazy"
            />
            <h1 className="text-4xl font-extrabold text-white drop-shadow-md mb-1 tracking-wide">
                RestoFlow
            </h1>
            <p className="text-white text-lg mb-6 opacity-90 tracking-wide">
                Join us on social media
            </p>

            <div className="flex gap-10 mb-8">
                <Link
                    to="https://m.facebook.com/profile.php?id=61554372099239"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-white hover:text-blue-500 transform hover:scale-110 transition-all duration-300"
                >
                    <SiFacebook size={40} />
                </Link>
                <Link
                    to="https://x.com/Sheikh_Radin"
                    aria-label="Xbox"
                    
                    className="text-white hover:text-green-500 transform hover:scale-110 transition-all duration-300"
                >
                    <TbXboxXFilled size={45} />
                </Link>
                <Link
                    to="#"
                    aria-label="YouTube"
                    className="text-white hover:text-red-600 transform hover:scale-110 transition-all duration-300"
                >
                    <FaYoutube size={45} />
                </Link>
                <Link
                    to="#"
                    aria-label="LinkedIn"
                    className="text-white hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
                >
                    <FaLinkedinIn size={45} />
                </Link>
            </div>

            <p className="text-white opacity-70 text-center select-text tracking-wide text-sm">
                &copy; {new Date().getFullYear()} All rights reserved — RestoFlow
            </p>
        </footer>
    );
};

export default Foot;
