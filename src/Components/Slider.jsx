import React from 'react';

const Slider = () => {
    
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://cdn.qwenlm.ai/output/24058570-a08d-412a-b885-c2c9cef0d4a7/t2i/d2d1489f-2465-4d8f-81d8-883b982c7e3f/cdc81af2-5089-4175-bd45-d3a9b5d651a3.png?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV91c2VyX2lkIjoiMjQwNTg1NzAtYTA4ZC00MTJhLWI4ODUtYzJjOWNlZjBkNGE3IiwicmVzb3VyY2VfaWQiOiJjZGM4MWFmMi01MDg5LTQxNzUtYmQ0NS1kM2E5YjVkNjUxYTMiLCJyZXNvdXJjZV9jaGF0X2lkIjpudWxsfQ.nywPQEN4vdFvkx5xVCaGEEEcf8CRhY97O_s2HupGKRQ"
                        className="w-full md:h-[800px] object-cover" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://cdn.qwenlm.ai/output/24058570-a08d-412a-b885-c2c9cef0d4a7/t2i/d2d1489f-2465-4d8f-81d8-883b982c7e3f/187bec0a-8e11-4dec-b7fc-09112d091c5f.png?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV91c2VyX2lkIjoiMjQwNTg1NzAtYTA4ZC00MTJhLWI4ODUtYzJjOWNlZjBkNGE3IiwicmVzb3VyY2VfaWQiOiIxODdiZWMwYS04ZTExLTRkZWMtYjdmYy0wOTExMmQwOTFjNWYiLCJyZXNvdXJjZV9jaGF0X2lkIjpudWxsfQ.Noa54j7F7BxhvJXpfGqy_StMuOx5l4nFxvz0I4cBLcI"
                        className="w-full md:h-[800px] object-cover" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://cdn.qwenlm.ai/output/24058570-a08d-412a-b885-c2c9cef0d4a7/t2i/d2d1489f-2465-4d8f-81d8-883b982c7e3f/4d95edb6-4606-457a-a454-2b3ca8e21dc7.png?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV91c2VyX2lkIjoiMjQwNTg1NzAtYTA4ZC00MTJhLWI4ODUtYzJjOWNlZjBkNGE3IiwicmVzb3VyY2VfaWQiOiI0ZDk1ZWRiNi00NjA2LTQ1N2EtYTQ1NC0yYjNjYThlMjFkYzciLCJyZXNvdXJjZV9jaGF0X2lkIjpudWxsfQ.yfyB4uuAfEWL1EhA4Duov00BcLeC21q-4ESx3jwqOGs"
                        className="w-full md:h-[800px] object-cover" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://cdn.qwenlm.ai/output/24058570-a08d-412a-b885-c2c9cef0d4a7/t2i/d2d1489f-2465-4d8f-81d8-883b982c7e3f/f8f3c03c-51f6-4531-8082-4b100fbf07e9.png?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV91c2VyX2lkIjoiMjQwNTg1NzAtYTA4ZC00MTJhLWI4ODUtYzJjOWNlZjBkNGE3IiwicmVzb3VyY2VfaWQiOiJmOGYzYzAzYy01MWY2LTQ1MzEtODA4Mi00YjEwMGZiZjA3ZTkiLCJyZXNvdXJjZV9jaGF0X2lkIjpudWxsfQ.T-R80FaoAymw-wRq0DCzVQ7mUosmaZqu9pHsp_Ko-kw"
                        className="w-full md:h-[800px] object-cover" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;