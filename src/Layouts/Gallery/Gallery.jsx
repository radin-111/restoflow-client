import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Foot from '../../Components/Foot';
import bg_image from '../../assets/image-removebg-preview.png';
const Gallery = () => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const slides = [
        { src: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/2/23/FNK_Indian-Fried-Chicken_s4x3.jpg.rend.hgtvcom.826.620.suffix/1677264108617.webp" },
        { src: "https://i0.wp.com/maricelsrecipes.com/wp-content/uploads/2022/07/Sizzling-Seafood-main-image.jpg?resize=800%2C600&ssl=1" },
        { src: "https://images.immediate.co.uk/production/volatile/sites/30/2022/12/Garlic-mushrooms-320ddd6.jpg?quality=90&webp=true&resize=300,272" },
        {
            src: 'https://s.lightorangebean.com/media/20240914164843/chow-mein-fun-done.png.webp'
        },
        {
            src: 'https://b3067249.smushcdn.com/3067249/wp-content/uploads/2021/07/Indian-Chicken-Curry-848x477.jpg?lossy=0&strip=1&webp=1'
        },
        {
            src: 'https://images.slurrp.com/prod/recipe_images/transcribe/side%20dish/Chilli_Chicken.webp?impolicy=slurrp-20210601&width=1200&height=675'

        },
        {
            src: 'https://vlaamsebrouwers.be/wp-content/uploads/2021/07/Hamburger-met-cheddar-en-pilsbier-bierpairing.jpg'
        },
        {
            src: 'https://www.foodandwine.com/thmb/oYjnPtbrCOThXo7XEPsQaHKHL1k=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/cioppino-FT-RECIPE0521-4699a9c202574e5cb10232128b0aa90a.jpg'
        },
        {
            src: 'https://www.justonecookbook.com/wp-content/uploads/2020/01/Sushi-Rolls-Maki-Sushi-%E2%80%93-Hosomaki-1106-II.jpg'
        },
        {
            src: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/03/18/0/FNK_CHICKEN_KATSU_H_f_s4x3.jpg.rend.hgtvcom.791.633.85.suffix/1616083203181.webp'
        },
        {
            src: 'https://ooni.com/cdn/shop/articles/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg?v=1737104576&width=2048'
        },
        {
            src: 'https://www.thecookierookie.com/wp-content/uploads/2024/05/street-tacos-recipe-2.jpg'
        }
    ];

    return (
        <div>
            <div  style={{ backgroundImage: `url(${bg_image})`  }} className='min-h-screen bg-no-repeat bg-gray-100 py-12 px-4 sm:px-6 lg:px-8  bg-center '>
                
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Food Gallery</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {slides.map((d, index) => (
                        <div
                            key={index}
                            className="cursor-pointer overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                            onClick={() => {
                                setIndex(index);
                                setOpen(true);
                            }}
                        >
                            <img
                                src={d.src}

                                className="!w-full !h-60 object-cover"
                            />
                        </div>
                    ))}
                </div>

                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={slides}
                    index={index}
                    on={{ view: ({ index }) => setIndex(index) }}
                    styles={{
                        container: { backgroundColor: 'rgba(0,0,0,0.95)' },
                    }}
                    imageFit="contain"
                />


            </div>
            <Foot></Foot>
        </div>
    );
};

export default Gallery;
