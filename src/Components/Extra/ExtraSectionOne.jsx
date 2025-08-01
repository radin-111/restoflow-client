import React from 'react';
import { Sparkles, Rocket, Flame } from 'lucide-react';

const ExtraSectionOne = () => {
    return (
        <section className="py-20 px-6 md:px-20 dark:from-gray-900 dark:to-gray-800">
            <h2 className="text-4xl font-extrabold text-center mb-14 text-orange-700 dark:text-orange-400 tracking-tight">
                Why Everyone loves Restoflow 🍽️
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-300">
                    <Sparkles className="w-12 h-12 text-orange-500 mb-5" />
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Food That Everyone love ✨</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                        Every bite feels like that you are in the heaven .
                    </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-300">
                    <Rocket className="w-12 h-12 text-blue-600 mb-5" />
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Fast Delivery 🚀</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                        Fast delivery and wonderful service . Made with care served with love
                    </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-300">
                    <Flame className="w-12 h-12 text-red-600 mb-5" />
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Chef-Are-Magician 🔥</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                        Our chefs are magician . Every food has magical taste.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ExtraSectionOne;
