import React from 'react'
import { CiYoutube } from "react-icons/ci";

import { RiMessengerLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
    return (
        <>

            <div className=' flex flex-col  bg-black text-white '>
                <div className='flex flex-row justify-around max-md:flex-col max-lg:ml-4'>
                    <div className='  mt-20 w-96'>
                        <div className='flex text-4xl font-semibold'>
                            <h1 className=''>Gaming</h1>
                            <h1 className='text-purple-800' >.</h1>
                        </div>
                        <div className='mt-4 text-2xl font-extrabold  '>
                            <p className='flex gap-1'>Reach out & let your <h1 className='text-blue-500'> mind </h1> </p>
                            <h1 className='pro'>exlpore</h1>

                        </div>

                        <p className='mt-2 text-sm'>I also love the challenge of trying to beat a difficult game or master a new skill.</p>

                    </div>
                    <div className=' mt-20 max-md:mt-8'>
                        <h1 className='text-xl font-bold'>NAVIGATION:</h1>
                        <ul className='mt-2 leading-loose text-sm font-semibold'>
                            <li className='hover:text-gray-400 '><a href="">Search</a></li>
                            <li className='hover:text-gray-400 '><a href="">All Collections</a></li>
                            <li className='hover:text-gray-400 '><a href="">All Products</a></li>
                            <li className='hover:text-gray-400 '><a href="">Article Page</a></li>
                            <li className='hover:text-gray-400 '><a href="">Blog Page</a></li>
                        </ul>
                    </div>
                    <div className=' mt-20 max-md:mt-8'>
                        <h1 className='text-xl font-bold'>ABOUT US:</h1>
                        <ul className='mt-2 leading-loose text-sm font-semibold '>
                            <li className='hover:text-gray-400 '><a href="">About Us</a></li>
                            <li className='hover:text-gray-400 '><a href="">Contact with us</a></li>
                            <li className='hover:text-gray-400 '><a href="">FAQ's</a></li>
                            <li className='hover:text-gray-400 '><a href="">Privacy Policy</a></li>
                            <li className='hover:text-gray-400 '><a href="">Shipping & Delivery</a></li>
                            <li className='hover:text-gray-400 '><a href="">Terms & Conditions</a></li>
                        </ul>
                    </div>
                    <div className=' mt-20 max-md:mt-8'>
                        <h1 className='text-xl font-bold'>SHARE:</h1>
                        <ul className='flex gap-3 mt-2 text-sm  '>
                            <li className='  icon'><a href=""><CiYoutube /></a></li>
                            <li className='   icon'><a href=""><RiMessengerLine /></a></li>
                            <li className='     icon'><a href=""><FaInstagram /></a></li>
                            <li className='  icon'><a href=""><FiTwitter /></a></li>
                        </ul>
                    </div>

                </div> 
                <div className=''>
                    <h1 className=' ml-14 max-md:ml-2 max-lg:ml-4  mt-10 mb-10 text-sm'>© 2023, Gaming WorkDo, Powered by Shopify</h1>
                </div>
               
            </div>

           

        </>
    )
}

export default Footer
