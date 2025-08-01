import React from 'react';
import Foot from '../Components/Foot';
import Slider from '../Components/Slider';
import Foods from '../Components/Foods';
import ExtraSectionOne from '../Components/Extra/ExtraSectionOne';
import ExtraSectionTwo from '../Components/Extra/ExtraSectionTwo ';
import { useLoaderData } from 'react-router';
import Top from '../Components/Top';




const Home = () => {
    const data = useLoaderData()
    const top6 = data.filter(item => item.purchaseCount > 0).sort((a, b) => b.purchaseCount - a.purchaseCount).slice(0, 6);                                



    


    return (
        <div>
            <Slider></Slider>
            <div className=''>
                <Foods></Foods>
                <Top top={top6}></Top>
                
                <ExtraSectionOne></ExtraSectionOne>
                <ExtraSectionTwo></ExtraSectionTwo>
            </div>
            <Foot></Foot>
        </div>
    );
};

export default Home;