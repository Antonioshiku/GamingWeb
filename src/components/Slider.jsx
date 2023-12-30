
import React from 'react'
import Glide from '@glidejs/glide';
import '../glide.core.css'
import '../glide.theme.css'
import { useEffect } from 'react';
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

const sliderConfiguration = {

  perView: 2,
  startAt: 0,
  type: "carousel",
  breakpoints: {
    760: {
      perView: 1,
    },
    800: {
      perView: 1,
    }
  }

};

const Slider = () => {
  const slider = new Glide('.g', sliderConfiguration);

  useEffect(() => {
    return () => slider.mount()
  }, [slider])
  return (
    <>
      <div className=' mx-auto  mb-10 ml-4'>
        <h1 className='font-bold text-3xl '>Testimonials</h1>
      </div>

      <div className='w-full '>
        <div className='g text-black mt-2 max-md:w-full '>

          <div className='g__track ml-16 mr-16 max-xl:ml-4 max-xl:mr-4' data-glide-el='track'>
            <ul className='g__slides '>


              <li className='g__slide slider '>
                <div className='flex   w-fit  border-purple-600 border  rounded-tr-3xl rounded-bl-3xl slide h-fit max-md:w-full max-sm:w-full'>
                  <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/testi-1.png?v=1670904860" className='w-44 h-44  ' />
                  <div className='w-fit h-auto'>
                    <h1 className='text-2xl font-bold mt-2'>Escaping Reality!</h1>
                    <p className='text-3sm mt-2  mr-8  max-lg:mr-4 leading-tight'>"I've been gaming for as long as I can remember, and I've
                      always loved the sense of escape and adventure that it provides.</p>


                    <div className='mt-3 flex gap-3 justify-between max-lg:flex-col  max-sm:flex-col'>

                      <div className=' flex gap-6 mt-2'>
                        <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/client-img.png?v=1670904971" className='w-10 h-10 ' />
                        <div className=' leading-none'>
                          <h1 className='text-sm font-bold'>Sarah Johnson,</h1>
                          <h1 className='text-sm '>Client</h1>
                        </div>

                      </div>

                      <div className='flex mr-6 gap-3 mb-2 '>
                        <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/star.png?v=1670905123" className='w-15 h-4 mt-7 max-sm:mt-1 max-lg:mt-1' />
                        <div className='flex text-sm  mt-7 max-sm:mt-1 max-lg:mt-1'>
                          <h1 className='text-blue-400 font-bold'>4.5 </h1>
                          <h1 className='font-semibold'>/5.0</h1>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </li>


              <li className='g__slide slider  '>
                <div className='flex w-fit  border-purple-600 border rounded-tr-3xl rounded-bl-3xl slide h-fit max-md:w-full max-sm:w-full '>
                  <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/testi-2.png?v=1670904959" className='w-44 h-44' />
                  <div className='w-fit h-auto'>
                    <h1 className='text-2xl font-bold mt-2'>One Level Time!</h1>
                    <p className='text-3sm mt-2  mr-8  max-md:mr-8 max-lg:mr-7 leading-tight '>"I've been gaming for as long as I can remember, and I've
                      always loved the sense of escape and adventure that it provides.</p>

                    <div className='mt-3 flex gap-3 justify-between max-lg:flex-col  max-sm:flex-col'>

                      <div className=' flex gap-6 mt-2'>
                        <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/client-img.png?v=1670904971" className='w-10 h-10 ' />
                        <div className=' leading-none'>
                          <h1 className='text-sm font-bold'>Alex Thopsom,</h1>
                          <h1 className='text-sm '>Client</h1>
                        </div>

                      </div>

                      <div className='flex mr-6 gap-3 mb-2 '>
                        <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/star.png?v=1670905123" className='w-15 h-4 mt-7 max-sm:mt-1 max-lg:mt-1' />
                        <div className='flex text-sm  mt-7 max-sm:mt-1 max-lg:mt-1'>
                          <h1 className='text-blue-400 font-bold'>4.5 </h1>
                          <h1 className='font-semibold'>/5.0</h1>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              </li>


              <li className='g__slide slider'>
                <div className='flex   w-fit  border-purple-600 border  rounded-tr-3xl rounded-bl-3xl slide h-fit max-md:w-full max-sm:w-full'>
                  <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/testi-1.png?v=1670904860" className='w-44 h-44  ' />
                  <div className='w-fit h-auto'>
                    <h1 className='text-2xl font-bold mt-2'>Gamer's Journey!</h1>
                    <p className='text-3sm mt-2  mr-8  max-lg:mr-4 leading-tight'>"I've been gaming for as long as I can remember, and I've
                      always loved the sense of escape and adventure that it provides.</p>


                    <div className='mt-3 flex gap-3 justify-between max-lg:flex-col  max-sm:flex-col'>

                      <div className=' flex gap-6 mt-2'>
                        <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/client-img.png?v=1670904971" className='w-10 h-10 ' />
                        <div className=' leading-none'>
                          <h1 className='text-sm font-bold'>David Rodriguez,</h1>
                          <h1 className='text-sm '>Client</h1>
                        </div>

                      </div>

                      <div className='flex mr-6 gap-3 mb-2 '>
                        <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/star.png?v=1670905123" className='w-15 h-4 mt-7 max-sm:mt-1 max-lg:mt-1' />
                        <div className='flex text-sm  mt-7 max-sm:mt-1 max-lg:mt-1'>
                          <h1 className='text-blue-400 font-bold'>4.5 </h1>
                          <h1 className='font-semibold'>/5.0</h1>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </li>

            </ul>
          </div>

          <div className='glide__as ' data-glide-el='controls'>
            <button
              className='glide__a glide__a--left  border rounded-full py-2 px-2 border-blue-400 bg-blue-400'
              data-glide-dir='<'>
              <BsArrowLeft className='text-2xl text-white' />


            </button>
            <button
              className='glide__a glide__a--right   border rounded-full py-2 px-2 border-blue-400 bg-blue-400 '
              data-glide-dir='>'>
              <BsArrowRight className='text-2xl text-white' />
            </button>
          </div>

        </div>
      </div>
    </>


  )
}

export default Slider