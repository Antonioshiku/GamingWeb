import React, { useEffect } from 'react'
import '../blog.css'
import { BsController } from "react-icons/bs";
import Glide from '@glidejs/glide';
import '../glideG.css'
import '../glideCoreG.css'
import { CgArrowLeft, CgArrowRight } from "react-icons/cg";

const sliderConfigu = {

  perView: 4,
  startAt: 0,
  breakpoints: {
    990: {
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

const Blog = () => {

  const slider = new Glide('.blogGlide', sliderConfigu);

  useEffect(() => {
    return () => slider.mount()
  }, [slider])



  return (
    <div className='bg-black w-full h-full pt-6 flex flex-col glide '>
      <div class=" flex justify-evenly px-8 py-8 max-lg:px-4 max-lg:py-4 max-sm:flex-col w-full">
        <div className='w-4/12 max-sm:w-full max-md:w-full max-md:ps-3 ps-0'>
          <h2 className='text-white text-4xl font-semibold'>Best <b className='pro'>Pro Gaming</b></h2>
          <h2 className='text-white text-4xl font-semibold'>Blog</h2>
        </div>
        <div className="section-title-center w-2/5 max-md:hidden">
          <p className='flex text-gray-500'>Gaming Product means any intangible asset, good or interest that can be bought or sold or otherwise is the subject of an activity constituting a Gaming Business.</p>
        </div>
        <div className="section-title-right ">
          <a className='bu bg-primary gap-4 hover:transition-all hover:duration-300'>Show More<BsController /></a>
        </div>
      </div>

      <div className='blogGlide text-white mt-6'>
        <div className='glide__track' data-glide-el='track'>
          <ul className='glide__slides'>
            <li className='glide__slide slider'>
              {/* Card A */}
              <div className='flex justify-evenly  '>
                <div className='flex flex-col  items-start text-white'>
                  <div className='bg border bb '>
                  </div>
                  <h1 className='text-xl font-bold mt-4'>The Dev Diary...</h1>
                  <p className='text-gray-500 mt-2'>AUTHOR: WORKDO</p>
                  <a className='bu w-[30] mt-4 text-white font-bold '>Read More</a>
                  {/* row A*/}
                  <div className='flex flex-col items-start text-white mt-10 '>
                    <div className='bgA border bb'>
                    </div>
                    <h1 className='text-xl font-bold mt-4'>Game Play Segmen...</h1>
                    <p className='text-gray-500 mt-2'>AUTHOR: WORKDO</p>
                    <a className='bu w-[30] mt-4 text-white font-bold'>Read More</a>
                  </div>
                </div>
              </div>
            </li>
            <li className='glide__slide slider'>
              {/* Card B*/}
              <div className='flex justify-evenly '>
                <div className='flex flex-col text-white'>
                  <div className='bg1 border bb'>
                  </div>
                  <h1 className='text-xl font-bold mt-4'>My Game Reveiew...</h1>
                  <p className='text-gray-500 mt-2'>AUTHOR: WORKDO</p>
                  <a className='bu w-[30] mt-4 text-white font-bold'>Read More</a>
                  {/* row B*/}
                  <div className='flex flex-col items-start text-white mt-10 '>
                    <div className='bgB border bb'>
                    </div>
                    <h1 className='text-xl font-bold mt-4'>The Loud Reveiew...</h1>
                    <p className='text-gray-500 mt-2'>AUTHOR: WORKDO</p>
                    <a className='bu w-[30] mt-4 text-white font-bold'>Read More</a>
                  </div>
                </div>
              </div>
            </li>
            <li className='glide__slide slider'>
              {/* Card C */}
              <div className='flex justify-evenly '>
                <div className='flex flex-col text-white'>
                  <div className='bg2 border bb'>
                  </div>
                  <h1 className='text-xl font-bold mt-4'>The Dirty Video...</h1>
                  <p className='text-gray-500 mt-2'>AUTHOR: WORKDO</p>
                  <a className='bu w-[30] mt-4 text-white font-bold'>Read More</a>
                  {/* row C*/}
                  <div className='flex flex-col items-start text-white mt-10 '>
                    <div className='bgC border bb'>
                    </div>
                    <h1 className='text-xl font-bold mt-4'>Last Living Man...</h1>
                    <p className='text-gray-500 mt-2'>AUTHOR: WORKDO</p>
                    <a className='bu w-[30] mt-4 text-white font-bold'>Read More</a>
                  </div>
                </div>
              </div>
            </li>
            <li className='glide__slide slider'>
              {/* Card D */}
              <div className='flex justify-evenly '>
                <div className='flex flex-col text-white'>
                  <div className='bg3 border bb'>
                  </div>
                  <h1 className='text-xl font-bold mt-4'>Phantasy Star...</h1>
                  <p className='text-gray-500 mt-2'>AUTHOR: WORKDO</p>
                  <a className='bu w-[30] mt-4 text-white font-bold'>Read More</a>
                  {/* row D*/}
                  <div className='flex flex-col items-start text-white mt-10 '>
                    <div className='bgD border bb'>
                    </div>
                    <h1 className='text-xl font-bold mt-4'>Gaming Magnitude...</h1>
                    <p className='text-gray-500 mt-2'>AUTHOR: WORKDO</p>
                    <a className='bu w-[30] mt-4 text-white font-bold mb-4'>Read More</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className='glide__arrows' data-glide-el='controls'>
          <button
            className='glide__arrow glide__arrow--prev backArrow'
            data-glide-dir='<'>
            <CgArrowLeft />

          </button>
          <button
            className='glide__arrow glide__arrow--next nextArrow'
            data-glide-dir='>'>
            <CgArrowRight />

          </button>
        </div>

      </div>
    </div>



  )
}

export default Blog
