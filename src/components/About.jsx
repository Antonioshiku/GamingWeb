import React from 'react'
import { LuGamepad2 } from "react-icons/lu";
const About = () => {
    return (
        <div>
            <div className='flex justify-evenly max-md:flex-row-reverse max-sm:flex-col'>


                <div className='
           mt-20 max-md:w-[370px]'><img src="https://gaming-workdo.myshopify.com/cdn/shop/files/double-bluthoth.png?v=1671594490" alt="" />

                </div>

                <div className=' flex w-1/4 px-3 py-4 text-black h-1/4 max-sm:w-full max-lg:w-6/12 max-md:w-7/12 mt-8' >
                    <div className='px-5 py-3 border border-blue-900 rounded-tr-lg rounded-bl-lg'>
                        <p className='text-2xl font-bold'>KD DMTR...</p>
                        <p1 className='text-sm leading-3'>HyperX Dual Chamber Drivers for more distinction and less distortion. Signature Award-Winning HyperX comfort. Durable aluminum frame with an expanded headband. Detachable braided cable with convenient in-line audio control. Detachable noise cancellation microphone.</p1>
                        <h1 className='mt-3 text-xs font-bold'>Color : </h1>

                        <div className="w-full h-5 px-4 mt-3 input-group text-neutral-500 ">
                            <select class="form-select w-72 h-8 p-2 border rounded border-slate-600 cursor-pointer  rounded-tr-lg rounded-bl-lg" id="inputGroupSelect01">
                                <option selected></option>
                                <option value="1">Black</option>
                                <option value="2">White</option>
                            </select>
                        </div>


                        <div className='flex justify-between w-11/12 gap-16 max-lg:gap-10 max-md:gap-2 mb-3 mt-3 max-sm:flex-col'>
                            <div className='ps-4'>
                                <h1 className='text-lg text-black font-bold '>860.00<span className='superscript'>USD</span></h1>
                                <h1 className='line-through text-neutral-500 '>900.00<span className='superscript'>USD</span></h1>
                            </div>
                            <div className='mt-3 max-sm:ml-4'> <button className='add  border border-gray-300 text-neutral-400 px-4 max-md:px-3 max-sm:px-1'>Add to Cart </button></div>
                        </div>

                    </div>
                </div>

                <div className='mt-10 max-lg:hidden'><img src="https://gaming-workdo.myshopify.com/cdn/shop/files/full-width-bluthhoth.png?v=1671594508" className='max-lg:hidden' alt="" />
                </div>
            </div>

            <div className='flex flex-col'>
                <div className='ml-20 mr-20 max-lg:ml-8 max-lg:mr-8 max-md:ml-6 max-md:mr-6'>
                    <h1 className='text-3xl font-bold  '>About our shop</h1>
                    <p className='text-3sm font-semi-bold text-gray-500 mt-2 gap-1'>Gaming can help to improve cognitive skills such as problem-solving, memory, and attention.</p>
                </div>

                <div className='grid grid-flow-col xl:col-span-4 lg:col-span-4 md:col-span-2 sm:col-span-1  gap-5 md:gap-3 
                ml-20 mr-20 max-lg:ml-8 max-lg:mr-8 max-md:ml-6 max-md:mr-6 mt-5'>

                    <div className='col-span-1 
                    max-sm:col-start-1
                    max-md:col-start-1
                    max-lg:col-start-1 xl:col-start-1
                     border-blue-600 border   py-2 rounded-tr-3xl rounded-bl-3xl w-auto h-auto '>
                        <div className='flex flex-col w-3/4  md:w-11/12 md:h-12/12 mt-3 mb-4'>
                            <h1 className='text-4xl font-bold pro ml-4'>01</h1>
                            <h1 className='text-3xl font-bold  ml-4'>Gift Boxes</h1>
                            <p className='text-3sm font-semi-bold text-gray-500 mt-2 ml-4 gap-1'>Finished products and gifts wrapping</p>
                        </div>
                    </div>

                    <div className='col-span-1 
                    max-sm:col-start-1 max-sm:row-start-2
                    max-md:col-start-2
                    max-lg:col-start-2 xl:col-start-2
                     border-blue-600 border   py-2 rounded-tr-3xl rounded-bl-3xl w-auto h-fit'>
                        <div className='flex flex-col w-3/4 md:w-11/12 md:h-12/12 mt-3 mb-4'>
                            <h1 className='text-4xl font-bold pro ml-4'>02</h1>
                            <h1 className='text-3xl font-bold  ml-4'>Promotions</h1>
                            <p className='text-3sm font-semi-bold text-gray-500 mt-2 ml-4 gap-1'>Large promotions with numerous discounts</p>
                        </div>
                    </div>

                    <div className='col-span-1 
                    max-sm:col-start-1 max-sm:row-start-3
                    max-md:col-start-1 max-md:row-start-2
                    max-lg:col-start-3 xl:col-start-3
                     border-blue-600 border   py-2 rounded-tr-3xl rounded-bl-3xl w- auto h-fit'>
                        <div className='flex flex-col w-3/4  md:w-11/12 md:h-12/12 mt-3 mb-4'>
                            <h1 className='text-4xl font-bold pro ml-4'>03</h1>
                            <h1 className='text-3xl font-bold  ml-4'>Shipping</h1>
                            <p className='text-3sm font-semi-bold text-gray-500 mt-2 ml-4 gap-1'>Free shipping on any orders from $ 150</p>
                        </div>
                    </div>

                    <div className='col-span-1 
                    max-sm:col-start-1 max-sm:row-start-4
                    max-md:col-start-2 max-md:row-start-2
                    max-lg:col-start-4 xl:col-start-4
                     border-blue-600 border   py-2 rounded-tr-3xl rounded-bl-3xl w-auto h-fit'>
                        <div className='flex flex-col w-3/4   md:w-11/12 md:h-12/12 mt-3 mb-4'>
                            <h1 className='text-4xl font-bold pro ml-4'>04</h1>
                            <h1 className='text-3xl font-bold  ml-4'>Quality</h1>
                            <p className='text-3sm font-semi-bold text-gray-500 mt-2 ml-4 gap-1'>All products are made by engineers from India</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About
