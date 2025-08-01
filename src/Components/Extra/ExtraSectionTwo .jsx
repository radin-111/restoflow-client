import React from 'react';
import { Quote } from 'lucide-react';


const ExtraSectionTwo = () => {
    return (
        <section className="py-20 px-6 md:px-20 dark:from-gray-900 dark:to-gray-800">
            <h2 className="text-4xl  font-extrabold text-center mb-14 text-sky-400 tracking-tight ">
                What Our Fans Are  Saying ⭐
            </h2>
            <div className="grid md:grid-cols-3 gap-10">

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-l-4 border-orange-500 dark:border-orange-400">
                    <Quote className="w-8 h-8 text-orange-400 mb-4" />
                    <p className="italic text-gray-700 dark:text-gray-300 mb-4">
                        “The pizza was very delicious that can't be described in words .... ”
                    </p>
                    <h4 className="font-semibold text-lg text-orange-600 dark:text-orange-400">— Sabrina R.</h4>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-l-4 border-orange-500 dark:border-orange-400">
                    <Quote className="w-8 h-8 text-orange-400 mb-4" />
                    <p className="italic text-gray-700 dark:text-gray-300 mb-4">
                        “Their burgers tastes wonderful and the other dishes .I was ver much impressed....”
                    </p>
                    <h4 className="font-semibold text-lg text-orange-600 dark:text-orange-400">— Zubair K.</h4>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-l-4 border-orange-500 dark:border-orange-400">
                    <Quote className="w-8 h-8 text-orange-400 mb-4" />
                    <p className="italic text-gray-700 dark:text-gray-300 mb-4">
                        “Spend a very nice time with my family . All the members of the family love their dishes....”
                    </p>
                    <h4 className="font-semibold text-lg text-orange-600 dark:text-orange-400">— Ahmed T.</h4>
                </div>
            </div>
        </section>
    );
};

export default ExtraSectionTwo;
