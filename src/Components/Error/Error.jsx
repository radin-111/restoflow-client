import React, { useState } from "react";
import { Link } from "react-router";
import { FaHome } from "react-icons/fa";
import FuzzyText from "../FuzzyText";

const Error = () => {
    const [hoverIntensity, setHoverIntensity] = useState(0.6);
    

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-400 via-pink-500 to-purple-600 flex flex-col items-center justify-center px-6 py-12 text-white">
            <FuzzyText
                baseIntensity={0.2}
                hoverIntensity={hoverIntensity}
                
            >
                404
            </FuzzyText>

            <p className="mt-6 max-w-lg text-center text-lg sm:text-xl md:text-2xl tracking-wide drop-shadow-lg">
                Oops! The page you’re looking for doesn’t exist.
            </p>

            <Link
                to="/"
                onMouseEnter={() => setHoverIntensity(1)}
                onMouseLeave={() => setHoverIntensity(0.6)}
                className="mt-10 inline-flex items-center gap-3 px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg shadow-lg hover:bg-purple-700 hover:text-white transition-colors duration-300"
                aria-label="Go back home"
            >
                <FaHome size={20} />
                Home
            </Link>
        </div>
    );
};

export default Error;
