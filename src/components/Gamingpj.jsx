import React from 'react'
import { LuGamepad2 } from "react-icons/lu";

const Gamingpj = () => {
  return (
    <div className='w-full bg-black'>
      <div className='container w-full text-white bg-black'>
        <div className='flex justify-between w-10/12 h-auto mx-auto max-md:w-full max-md:justify-evenly'>

          <div className='flex gap-2 mt-10'>
            <h1 className='text-4xl font-bold w-80 text-bold max-md:text-2xl'>Best Pro Gaming  Products</h1>
          </div>

          <div>
            <h2 className='mx-10 mt-12 text-sm w-[530px] max-md:hidden'>More powerful hardware not only betters their experiences in games they're currently playing, but it also gives many players access to titles with more demanding specifications.</h2>
          </div>

          <div className='flex items-center justify-center w-48 h-10 gap-3 mt-10 border border-white rounded-tr-lg rounded-bl-lg'>
            <button className='text-sm'>show Produts</button>
            <LuGamepad2 className='text-lg' />
          </div>

        </div>
      </div>

      <div className='relative flex justify-between pt-10 bg-black full-container max-sm:flex-col max-sm:items-center'>
        <div className=''>
          <img src='https://gaming-workdo.myshopify.com/cdn/shop/files/product-cpu.png?v=1671539253' className='w-[500px] max-md:w-[350px] max-sm:w-[500px]'></img>
        </div>

        <div className='container relative flex w-1/4 px-3 py-4 text-white h-1/4 max-sm:w-full' >
          <div className='px-5 py-3 border border-white rounded-tr-lg rounded-bl-lg'>
            <p className='text-2xl font-bold'>KD DMTR...</p>
            <p1 className='text-sm leading-3'>Multiple connectivity options including HDMI, USB ports & RGB fans let you connect a variety of peripherals easily. Wi-Fi Ready – Connect to the internet wirelessly with ease. Preloaded with Windows 10 64-bit OS for enhanced productivity and multitasking.</p1>
            <h1 className='mt-3 text-xs font-bold'>Size : </h1>

            <div className="w-full h-5 px-4 mt-3 input-group text-neutral-500 ">
              <select class="form-select w-72 h-8 p-2 border rounded border-slate-600 cursor-pointer  rounded-tr-lg rounded-bl-lg" id="inputGroupSelect01">
                <option selected></option>
                <option value="1">256 GB</option>
                <option value="2">364 GB</option>
              </select>
            </div>


            <div className='flex gap-6 mt-3 mb-3'>
              <h1 className='px-5 mt-5 text-xl font-bold '>865.00</h1>
              <div className='px-8 mt-4'> <button className='px-5 py-2 text-sm border border-gray-300 rounded-tr-lg rounded-bl-lg text-neutral-400'>Add to Cart </button></div>
            </div>

          </div>
        </div>

        <div className='absolute flex w-72 left-[55%]'>
          <img src='https://gaming-workdo.myshopify.com/cdn/shop/files/design-circle-5.png?v=1671538615'></img>
        </div>

        <div className='left-auto flex max-md:hidden'>
          <img src='https://gaming-workdo.myshopify.com/cdn/shop/files/double.cpu.png?v=1671539287'></img>
        </div>

      </div>
    </div>
  )
}

export default Gamingpj
