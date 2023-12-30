import React from 'react'
import '../App.css'
import { IoGameControllerOutline } from "react-icons/io5";
import Glide from "@glidejs/glide";
import '../glideCore.css'
import '../glide.css'
import { ArrowLeft, ArrowRight, Shuffle, SuitHeart, Eye } from 'react-bootstrap-icons';

import { useEffect } from 'react'

const sliderConfiguration = {

    perView: 4,
    startAt: 0,

    breakpoints: {
        1200: {
            perView: 3,
        },
        770: {
            perView: 2,
        },
        580: {
            perView: 1,
        },
    },
    type: "carousel"
};



const Products = () => {
    const slider = new Glide('.glidep', sliderConfiguration);

    useEffect(() => {
        return () => slider.mount()
    }, [slider])


    return (
        <>
            <div>
                
                    
                        <div className='w-full h-30 justify-evenly items-center flex mt-12 px-14 max-md:px-6 max-sm:px-5  max-sm:flex-col max-md:flex-row max-sm:items-start'>
                            <div className='w-2/4 max-sm:w-full'>
                            <h1 className='text-4xl font-bold  '>Best Pro Gaming Products</h1>
                            </div>
                            <div className=''>
                            <h1 className='text-sm text-neutral-400  pt-4 max-md:hidden'>With hardware, tools are what enable a person to install, remove, or perform other actions on the components within their computer.</h1>
                            </div> 
                            <div className=' '>
                            <button className='bu  border border-gray-300 text-neutral-400 max-sm:w-full'>show products <div className='px-2'><IoGameControllerOutline /></div> </button>
                            </div>
                        </div>
                    
               
                <div className='mt-3'>
                    <div className='w-full flex justify-center all'>
                        <div className='w-11/12 flex gap-4'>
                            <div className='glidep text-white '>
                                <div className='glidep__track' data-glide-el='track'>
                                    <ul className='glidep__slides'>
                                        <li className='glidep__slide slider'>
                                            <div className='h-300px w-298px border border-blue-600 ba bg-blue-200 relative'>
                                                <h1 className='font-bold text-2xl mt-2 text-black ps-4'>Kepler Brooks Gaming..</h1>
                                                <h1 className='text-neutral-500 mt-1 px-4'>TYPE:Kepler Brooks</h1>
                                                <img className='crimg mx-auto' src="src\image\kepler.webp" alt="Centered Image" />
                                                <span className='text-black px-4 text-sm font-bold py-0'>Size: </span>
                                                <div className="input-group text-neutral-500 w-full h-fit  mt-2 px-4 ">
                                                    <select class="form-select w-full h-10 p-2 border border-slate-600 cursor-pointer" id="inputGroupSelect01">
                                                        <option selected></option>
                                                        <option value="1">52D x 66W x 131H</option>
                                                        <option value="2">52D x 65W x 130H</option>
                                                    </select>
                                                </div>


                                                <div className='flex justify-between w-11/12 gap-16 max-lg:gap-10 max-md:gap-2 mb-3 mt-3 max-sm:flex-col '>
                                                    <h1 className='text-lg text-black font-bold ps-4 pt-2'>800.00<span className='superscript'>USD</span></h1>
                                                    <div className='mt-3 max-sm:ml-4'> <button className='add  border border-gray-300 text-neutral-400 px-2 '>Add to Cart </button></div>
                                                </div>

                                                <div className='container flex hoverDiv w-40 absolute top-[40%] text-white text-[20px] items-center justify-evenly left-[25%] max-sm:left-[35%]'>
                                                    <div className='border-r-2 pe-4'>
                                                        <SuitHeart />
                                                    </div>
                                                    <div className='border-r-2 pe-4'>
                                                        <Eye />
                                                    </div>
                                                    <div>
                                                        <Shuffle />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='glidep__slide slider'>
                                            <div className='h-298px w-298px border border-blue-600 ba bg-blue-200 relative'>
                                                <h1 className='font-bold text-2xl mt-2 text-black px-4'>Radeon<span className='superscript'>TM</span>RX 750 XT...</h1>
                                                <h1 className='text-neutral-500 mt-1 px-4'>TYPE:XFX</h1>
                                                <img className='crimg mx-auto' src="src\image\RX750.webp" alt="Centered Image" />
                                                <span className=' text-black font-bold px-4 text-sm'>Color: </span>
                                                <div className="input-group text-neutral-500 w-full h-fit  mt-2 px-4  ">
                                                    <select className="form-select w-full h-10 p-2 border border-slate-600 cursor-pointer" id="inputGroupSelect01">
                                                        <option selected></option>
                                                        <option value="1">Black</option>
                                                        <option value="2">white</option>
                                                    </select>
                                                </div>

                                                <div className='flex justify-between w-11/12 gap-16 max-lg:gap-10 max-md:gap-2 mb-3 mt-3 max-sm:flex-col'>
                                                    <div className='ps-4'>
                                                        <h1 className='text-lg text-black font-bold '>860.00<span className='superscript'>USD</span></h1>
                                                        <h1 className='line-through text-neutral-500 '>900.00<span className='superscript'>USD</span></h1>
                                                    </div>
                                                    <div className='mt-3 max-sm:ml-4'> <button className='add  border border-gray-300 text-neutral-400 px-4 max-md:px-3 max-sm:px-1'>Add to Cart </button></div>
                                                </div>
                                                <div className='container flex hoverDiv w-40 absolute top-[40%] text-white text-[20px] items-center justify-evenly left-[25%] max-sm:left-[35%] '>
                                                    <div className='border-r-2 pe-4'>
                                                        <SuitHeart />
                                                    </div>
                                                    <div className='border-r-2 pe-4'>
                                                        <Eye />
                                                    </div>
                                                    <div>
                                                        <Shuffle />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='glidep__slide slider'>
                                            <div className='h-auto w-298px border border-blue-600 ba bg-blue-200 relative'>
                                                <h1 className='font-bold text-2xl mt-2 text-black px-4'>Radeon RX 120 GTS...</h1>
                                                <h1 className='text-neutral-500 mt-1 px-4'>TYPE:XFX</h1>
                                                <img className='crimg mx-auto' src="src\image\GTS.webp" alt="Centered Image" />
                                                <span className='text-black px-4 text-sm font-bold'>Size: </span>
                                                <div className="input-group text-neutral-500 w-full h-fit px-4 mt-3 ">
                                                    <select class="form-select w-full h-10 p-2 border  border-slate-600 cursor-pointer" id="inputGroupSelect01">
                                                        <option selected></option>
                                                        <option value="1">3 GB</option>
                                                        <option value="2">8 GB</option>
                                                    </select>
                                                </div>

                                                <div className='flex justify-between w-11/12 gap-16 max-lg:gap-10 max-md:gap-2 mb-3 mt-3 max-sm:flex-col'>
                                                    <div className='ps-4'>
                                                        <h1 className='text-lg text-black font-bold '>860.00<span className='superscript'>USD</span></h1>
                                                        <h1 className='line-through text-neutral-500 '>900.00<span className='superscript'>USD</span></h1>
                                                    </div>
                                                    <div className='mt-3 max-sm:ml-4'> <button className='add  border border-gray-300 text-neutral-400 px-4 max-md:px-3 max-sm:px-1'>Add to Cart </button></div>
                                                </div>
                                                <div className='container flex hoverDiv w-40 absolute top-[40%] text-white text-[20px] items-center justify-evenly left-[25%] max-sm:left-[35%]'>
                                                    <div className='border-r-2 pe-4'>
                                                        <SuitHeart />
                                                    </div>
                                                    <div className='border-r-2 pe-4'>
                                                        <Eye />
                                                    </div>
                                                    <div>
                                                        <Shuffle />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className='glidep__slide slider'>
                                            <div className='h-auto w-298px border border-blue-600 ba bg-blue-200 relative'>
                                                <h1 className='font-bold text-2xl mt-2 text-black px-4'>Rubber Keycaps</h1>
                                                <h1 className='text-neutral-500 mt-1 px-4'>TYPE:VAlture</h1>
                                                <img className='crimg mx-auto' src="src\image\rubber.webp" alt="Centered Image" />
                                                <span className='text-black px-4 text-sm font-bold '>Color: </span>
                                                <div className="input-group text-neutral-500 w-full h-fit px-4 mt-2 ">
                                                    <select class="form-select w-full h-10 p-2 border  border-slate-600 cursor-pointer" id="inputGroupSelect01">
                                                        <option selected></option>
                                                        <option value="1">Green</option>
                                                        <option value="2">Red</option>
                                                    </select>
                                                </div>
                                                <div className='flex justify-between w-11/12 gap-16 max-lg:gap-10 max-md:gap-2 mb-3 mt-3 max-sm:flex-col '>
                                                    <h1 className='text-lg text-black font-bold ps-4 pt-2'>800.00<span className='superscript'>USD</span></h1>
                                                    <div className='mt-3 max-sm:ml-4'> <button className='add  border border-gray-300 text-neutral-400 px-2 '>Add to Cart </button></div>
                                                </div>
                                                <div className='container flex hoverDiv w-40 absolute top-[40%] text-white text-[20px] items-center justify-evenly left-[25%] max-sm:left-[35%] '>
                                                    <div className='border-r-2 pe-4'>
                                                        <SuitHeart />
                                                    </div>
                                                    <div className='border-r-2 pe-4'>
                                                        <Eye />
                                                    </div>
                                                    <div>
                                                        <Shuffle />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className='glidep__slide slider'>
                                            <div className='h-auto w-298px border border-blue-600 ba bg-blue-200 relative'>
                                                <h1 className='font-bold text-2xl mt-2 text-black px-4'>Colossus Ergonomic...</h1>
                                                <h1 className='text-neutral-500 mt-1 px-4'>TYPE:Kepler Brooks</h1>
                                                <img className='crimg mx-auto' src="src\image\colossus.webp" alt="Centered Image" />
                                                <span className='text-black px-4 text-sm font-bold'>Color: </span>
                                                <div className="input-group text-neutral-500 w-full h-fit px-4 mt-3 ">
                                                    <select class="form-select w-full h-10 p-2 border  border-slate-600 cursor-pointer" id="inputGroupSelect01">
                                                        <option selected></option>
                                                        <option value="1">White</option>
                                                        <option value="2">Green</option>
                                                    </select>
                                                </div>

                                                <div className='flex justify-between w-11/12 gap-16 max-lg:gap-10 max-md:gap-2 mb-3 mt-3 max-sm:flex-col'>
                                                    <div className='ps-4'>
                                                        <h1 className='text-lg text-black font-bold '>860.00<span className='superscript'>USD</span></h1>
                                                        <h1 className='line-through text-neutral-500 '>900.00<span className='superscript'>USD</span></h1>
                                                    </div>
                                                    <div className='mt-3 max-sm:ml-4'> <button className='add  border border-gray-300 text-neutral-400 px-4 max-md:px-3 max-sm:px-1'>Add to Cart </button></div>
                                                </div>
                                                <div className='container flex hoverDiv w-40 absolute top-[40%] text-white text-[20px] items-center justify-evenly left-[25%] max-sm:left-[35%] '>
                                                    <div className='border-r-2 pe-4'>
                                                        <SuitHeart />
                                                    </div>
                                                    <div className='border-r-2 pe-4'>
                                                        <Eye />
                                                    </div>
                                                    <div>
                                                        <Shuffle />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className='glidep__slide slider'>
                                            <div className='h-auto w-298px border border-blue-600 ba bg-blue-200 relative'>
                                                <h1 className='font-bold text-2xl mt-2 text-black px-4'>Alienware Gameing...</h1>
                                                <h1 className='text-neutral-500 mt-1 px-4'>TYPE:Acer</h1>
                                                <img className='crimg mx-auto' src="src\image\TV.webp" alt="Centered Image" />
                                                <span className='text-black px-4 text-sm font-bold'>Size: </span>
                                                <div className="input-group text-neutral-500 w-full h-fit px-4 mt-3 ">
                                                    <select class="form-select w-full h-10 p-2 border  border-slate-600 cursor-pointer" id="inputGroupSelect01">
                                                        <option selected></option>
                                                        <option value="1">21.5 Inches</option>
                                                        <option value="2">25.5 Inches</option>
                                                    </select>
                                                </div>

                                                <div className='flex justify-between w-11/12 gap-16 max-lg:gap-10 max-md:gap-2 mb-3 mt-3 max-sm:flex-col'>
                                                    <div className='ps-4'>
                                                        <h1 className='text-lg text-black font-bold '>860.00<span className='superscript'>USD</span></h1>
                                                        <h1 className='line-through text-neutral-500 '>900.00<span className='superscript'>USD</span></h1>
                                                    </div>
                                                    <div className='mt-3 max-sm:ml-4'> <button className='add  border border-gray-300 text-neutral-400 px-4 max-md:px-3 max-sm:px-1'>Add to Cart </button></div>
                                                </div>
                                                <div className='container flex hoverDiv w-40 absolute top-[40%] text-white text-[20px] items-center justify-evenly left-[25%] max-sm:left-[35%]'>
                                                    <div className='border-r-2 pe-4'>
                                                        <SuitHeart />
                                                    </div>
                                                    <div className='border-r-2 pe-4'>
                                                        <Eye />
                                                    </div>
                                                    <div>
                                                        <Shuffle />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className='glidep__slide slider'>
                                            <div className='h-auto w-298px border border-blue-600 ba bg-blue-200 relative'>
                                                <h1 className='font-bold text-2xl mt-2 text-black ps-3'>HTC Vive Tracker (3.0)...</h1>
                                                <h1 className='text-neutral-500 mt-1 px-4'>TYPE:XFX</h1>
                                                <img className='crimg mx-auto' src="src\image\vive.webp" alt="Centered Image" />
                                                <span className='text-black px-4 text-sm font-bold'>Color: </span>
                                                <div className="input-group text-neutral-500 w-full h-fit px-4 mt-3 ">
                                                    <select class="form-select w-full h-10 p-2 border  border-slate-600 cursor-pointer" id="inputGroupSelect01">
                                                        <option selected>Black</option>
                                                    </select>
                                                </div>

                                                <div className='flex justify-between w-11/12 gap-16 max-lg:gap-10 max-md:gap-2 mb-3 mt-3 max-sm:flex-col'>
                                                    <div className='ps-4'>
                                                        <h1 className='text-lg text-black font-bold '>860.00<span className='superscript'>USD</span></h1>
                                                        <h1 className='line-through text-neutral-500 '>900.00<span className='superscript'>USD</span></h1>
                                                    </div>
                                                    <div className='mt-3 max-sm:ml-4'> <button className='add  border border-gray-300 text-neutral-400 px-4 max-md:px-3 max-sm:px-1'>Add to Cart </button></div>
                                                </div>
                                                <div className='container flex hoverDiv w-40 absolute top-[40%] text-white text-[20px] items-center justify-evenly left-[25%] max-sm:left-[35%]'>
                                                    <div className='border-r-2 pe-4'>
                                                        <SuitHeart />
                                                    </div>
                                                    <div className='border-r-2 pe-4'>
                                                        <Eye />
                                                    </div>
                                                    <div>
                                                        <Shuffle />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className='glidep__slide slider'>
                                            <div className='h-auto w-298px border border-blue-600 ba bg-blue-200 relative'>
                                                <h1 className='font-bold text-2xl mt-2 text-black px-4'>VR Headset with...</h1>
                                                <h1 className='text-neutral-500 mt-1 px-4'>TYPE:XFX</h1>
                                                <img className='crimg mx-auto' src="src\image\headset.webp" alt="Centered Image" />
                                                <div className='mt-3'><span className='text-black px-4  text-sm font-bold '>Size: </span></div>
                                                <div className="input-group text-neutral-500 w-full h-fit px-4  ">
                                                    <select class="form-select w-full h-10 p-2 border  border-slate-600 cursor-pointer" id="inputGroupSelect01">
                                                        <option selected></option>
                                                        <option value="1">18 x 11.5 x 11</option>
                                                        <option value="2">20 x 12.5 x 13</option>
                                                    </select>
                                                </div>
                                                <div className='flex justify-between w-11/12 gap-16 max-lg:gap-10 max-md:gap-2 mb-3 mt-3 max-sm:flex-col'>
                                                    <div className='ps-4'>
                                                        <h1 className='text-lg text-black font-bold '>860.00<span className='superscript'>USD</span></h1>
                                                        <h1 className='line-through text-neutral-500 '>900.00<span className='superscript'>USD</span></h1>
                                                    </div>
                                                    <div className='mt-3 max-sm:ml-4'> <button className='add  border border-gray-300 text-neutral-400 px-4 max-md:px-3 max-sm:px-1'>Add to Cart </button></div>
                                                </div>
                                                <div className='container flex hoverDiv w-40 absolute top-[40%] text-white text-[20px] items-center justify-evenly left-[25%] max-sm:left-[35%]'>
                                                    <div className='border-r-2 pe-4'>
                                                        <SuitHeart />
                                                    </div>
                                                    <div className='border-r-2 pe-4'>
                                                        <Eye />
                                                    </div>
                                                    <div>
                                                        <Shuffle />
                                                    </div>
                                                </div>

                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className='glidep__arrows text-black ' data-glide-el='controls'>
                                    <button
                                        className='glidep__arrow glidep__arrow--prev glidepRight'
                                        data-glide-dir='<'>
                                        <ArrowLeft />

                                    </button>
                                    <button
                                        className='glidep__arrow glidep__arrow--next nextArrow glidepLeft'
                                        data-glide-dir='>'>
                                        <ArrowRight />

                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>




            </div>
        </>
    )
}

export default Products
