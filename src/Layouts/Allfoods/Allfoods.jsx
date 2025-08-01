import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Card from './Card';
import Foot from '../../Components/Foot';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import bg_image from '../../assets/image-removebg-preview.png'
import { XCircle } from 'lucide-react';
const Allfoods = () => {
    const data = useLoaderData();
    const [food, setFood] = useState(data)

    const handleOnSearch = (string) => {

        const searchTerm = string.toLowerCase();
        

        const filtered = data.filter(d => d?.foodName.toLowerCase().includes(searchTerm));
        
        setFood(filtered)


    }
    const handleClear = () => {

        setFood(data)
    }


    return (
        <div>
            <div className='my-4 text-center'>
                <ReactSearchAutocomplete
                    items={food}
                    onSearch={handleOnSearch}
                    onClear={handleClear}

                    autoFocus
                    className='w-100 max-sm:w-[350px] mx-auto'
                    fuseOptions={{ keys: ["name"] }}
                    placeholder="Search food by name"
                    resultStringKeyName="name"
                />
            </div>
            <div style={{ backgroundImage: `url(${bg_image})` }} className='md:my-10 my-5 max-w-11/12 lg:max-w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2  gap-8 bg-no-repeat bg-top  '>

                {
                    food.length === 0 ? <NoFood></NoFood> : food.map(d => <Card key={d._id} data={d}></Card>)
                }
            </div>
            <Foot></Foot>
        </div>
    );
};
function NoFood() {
    return (
        <div className='text-center'>
            <div className="my-30 p-8 font-bold flex flex-col justify-between items-center text-center bg-white  shadow-2xl rounded-4xl ">
                <XCircle size={100} color='red' />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 mb-2 text-center">
                    No Food Available
                </h2>
                <p className="text-gray-500 max-w-sm text-center text-sm sm:text-base">
                    Sorry, we couldn’t find any food matching your search. Try adjusting your search term.
                </p>
            </div>
        </div>
    );
}



export default Allfoods;