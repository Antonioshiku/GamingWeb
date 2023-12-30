import React from "react";
import { Controller } from "react-bootstrap-icons";
import Glide from "@glidejs/glide";
import "../glide.css";
import "../glideCore.css";
import { useEffect } from "react";

const sliderConfiguration = {
  perView: 4,
  startAt: 0,
  gap: 20,
  focusAt: "center",
  type: "carousel",
  breakpoints: {
    800: {
      perView: 2
    },
    550: {
      perView: 2
    },
    400: {
      perView: 1
    }
  }
};

const PSlider = () => {
  const slider = new Glide(".glide", sliderConfiguration);

  useEffect(() => {
    return () => slider.mount();
  }, [slider]);

  return (
    <div className="container w-full h-auto bg-black relative ">
      <div className="w-10/12 h-10  mx-auto mt-10 flex max-md:w-full max-md:mt-0 max-md:pt-20 max-md:items-center max-sm:w-11/12">
        <div className="w-1/2 flex  items-center justify-start">
          <p className="text-white text-[30px] ps-5 max-md:text-[26px] max-sm:text-[20px]">
            Bestsellers of the week
          </p>
        </div>
        <div className="w-1/2 flex justify-end">
          <button className="colBu flex justify-center items-center hover:bg-gradient-to-r from-[#0098ff] to-[#7b35c8] max-sm:w-[140px] ">
            <Controller className="me-3" />
            Show Products
          </button>
        </div>
      </div>

      <div className="w-full flex  all relative">
        <img
          src="src\img\design-circle-3.webp"
          width={300}
          className="left-[38%] bottom-[40%] absolute z-0 "
          alt=""
        />
        <div className="w-full flex gap-4 relative max-sm:mt-5 ">
          <div className="glide text-white ">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                <li className="glide__slide slider mt-5 max-sm:flex max-sm:justify-center">
                  <div className="relative flex flex-col max-sm:w-10/12 ">
                    <div className=" w-full h-full absolute top-0 left-0 right-0 bottom-0 ProductCard border-white"></div>
                    <div className="flex flex-col w-11/12 mx-auto mt-2 ">
                      <h1 className="text-lg  font-semibold">
                        Alien ware Monitar 641
                      </h1>
                      <p className="text-[12px] text-gray-500">TYPE: Samsung</p>
                    </div>
                    <div className="w-full flex justify-center">
                      <img
                        src="src\img\samsungTv.avif"
                        className="w-[150px] max-sm:w-[210px]"
                        alt=""
                      />
                    </div>
                    <div className="input-group text-neutral-500 w-full flex flex-col justify-center  ">
                      <label className="text-white font-semibold text-[10px] ps-4 max-sm:text-[15px]">
                        color :
                      </label>
                      <select
                        className="form-select w-[190px] h-6 p-2 mx-auto text-[6px] mt-2 max-sm:w-[210px] border rounded border-slate-600 bg-inherit cursor-pointer"
                        id="inputGroupSelect01"
                      >
                        <option selected value="1" className="text-xs">
                          52D x 66W x 131H
                        </option>
                        <option value="2">52D x 65W x 130H</option>
                      </select>
                    </div>
                    <div className="flex gap-4 mb-3 mt-3 items-center max-sm:justify-between">
                      <h1 className="text-sm text-white font-bold px-4 pt-2">
                        800.00<span className="superscript">USD</span>
                      </h1>
                      <div className="mt-4 ">
                        <button className="CartBu flex justify-center items-center hover:bg-gradient-to-r from-[#0098ff] to-[#7b35c8] max-sm:me-5  ">
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="glide__slide slider mt-5">
                  <div className="relative flex flex-col">
                    <div className=" w-full h-full absolute top-0 left-0 right-0 bottom-0 ProductCard border-white"></div>
                    <div className="flex flex-col w-11/12 mx-auto mt-2 ">
                      <h1 className="text-lg  font-semibold">
                        Alien ware Monitar 641
                      </h1>
                      <p className="text-[12px] text-gray-500">TYPE: Samsung</p>
                    </div>
                    <div className="w-full flex justify-center">
                      <img
                        src="src\img\samsungTv.avif"
                        className="w-[150px]"
                        alt=""
                      />
                    </div>
                    <div className="input-group text-neutral-500 w-full flex flex-col justify-center  ">
                      <label className="text-white font-semibold text-[10px] ps-4">
                        color :
                      </label>
                      <select
                        className="form-select w-[190px] h-6 p-2 mx-auto text-[6px] mt-2  border rounded border-slate-600 bg-inherit cursor-pointer"
                        id="inputGroupSelect01"
                      >
                        <option selected value="1" className="text-xs">
                          52D x 66W x 131H
                        </option>
                        <option value="2">52D x 65W x 130H</option>
                      </select>
                    </div>
                    <div className="flex gap-4 mb-3 mt-3 items-center">
                      <h1 className="text-sm text-white font-bold px-4 pt-2">
                        800.00<span className="superscript">USD</span>
                      </h1>
                      <div className="mt-4 ">
                        <button className="CartBu flex justify-center items-center hover:bg-gradient-to-r from-[#0098ff] to-[#7b35c8] max-sm:me-5  ">
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="glide__slide slider mt-5">
                  <div className="relative flex flex-col">
                    <div className=" w-full h-full absolute top-0 left-0 right-0 bottom-0 ProductCard border-white"></div>
                    <div className="flex flex-col w-11/12 mx-auto mt-2 ">
                      <h1 className="text-lg  font-semibold">
                        Alien ware Monitar 641
                      </h1>
                      <p className="text-[12px] text-gray-500">TYPE: Samsung</p>
                    </div>
                    <div className="w-full flex justify-center">
                      <img
                        src="src\img\samsungTv.avif"
                        className="w-[150px]"
                        alt=""
                      />
                    </div>
                    <div className="input-group text-neutral-500 w-full flex flex-col justify-center  ">
                      <label className="text-white font-semibold text-[10px] ps-4">
                        color :
                      </label>
                      <select
                        className="form-select w-[190px] h-6 p-2 mx-auto text-[6px] mt-2  border rounded border-slate-600 bg-inherit cursor-pointer"
                        id="inputGroupSelect01"
                      >
                        <option selected value="1" className="text-xs">
                          52D x 66W x 131H
                        </option>
                        <option value="2">52D x 65W x 130H</option>
                      </select>
                    </div>
                    <div className="flex gap-4 mb-3 mt-3 items-center">
                      <h1 className="text-sm text-white font-bold px-4 pt-2">
                        800.00<span className="superscript">USD</span>
                      </h1>
                      <div className="mt-4 ">
                        <button className="CartBu flex justify-center items-center hover:bg-gradient-to-r from-[#0098ff] to-[#7b35c8] max-sm:me-5  ">
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="glide__slide slider mt-5">
                  <div className="h-auto relative flex flex-col">
                    <div className=" w-full h-full absolute top-0 left-0 right-0 bottom-0 ProductCard border-white"></div>
                    <div className="flex flex-col w-11/12 mx-auto mt-2 ">
                      <h1 className="text-lg  font-semibold">
                        Alien ware Monitar 64
                      </h1>
                      <p className="text-[12px] text-gray-500">TYPE: Samsung</p>
                    </div>
                    <div className="w-full flex justify-center">
                      <img
                        src="src\img\samsungTv.avif"
                        className="w-[150px]"
                        alt=""
                      />
                    </div>
                    <div className="input-group text-neutral-500 w-full flex flex-col justify-center  ">
                      <label className="text-white font-semibold text-[10px] ps-4">
                        color :
                      </label>
                      <select
                        className="form-select w-[190px] h-6 p-2 mx-auto text-[6px] mt-2  border rounded border-slate-600 bg-inherit cursor-pointer"
                        id="inputGroupSelect01"
                      >
                        <option selected value="1" className="text-xs">
                          52D x 66W x 131H
                        </option>
                        <option value="2">52D x 65W x 130H</option>
                      </select>
                    </div>
                    <div className="flex gap-6 mb-3 mt-3">
                      <h1 className="text-sm text-white font-bold px-4 pt-2">
                        800.00<span className="superscript">USD</span>
                      </h1>
                      <div className="mt-4 ">
                        <button className="CartBu flex justify-center items-center hover:bg-gradient-to-r from-[#0098ff] to-[#7b35c8] max-sm:me-5 ">
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="glide__slide slider mt-5">
                  <div className="relative flex flex-col">
                    <div className=" w-full h-full absolute top-0 left-0 right-0 bottom-0 ProductCard border-white"></div>
                    <div className="flex flex-col w-11/12 mx-auto mt-2 ">
                      <h1 className="text-lg  font-semibold">
                        Alien ware Monitar 641
                      </h1>
                      <p className="text-[12px] text-gray-500">TYPE: Samsung</p>
                    </div>
                    <div className="w-full flex justify-center">
                      <img
                        src="src\img\samsungTv.avif"
                        className="w-[150px]"
                        alt=""
                      />
                    </div>
                    <div className="input-group text-neutral-500 w-full flex flex-col justify-center  ">
                      <label className="text-white font-semibold text-[10px] ps-4">
                        color :
                      </label>
                      <select
                        className="form-select w-[190px] h-6 p-2 mx-auto text-[6px] mt-2  border rounded border-slate-600 bg-inherit cursor-pointer"
                        id="inputGroupSelect01"
                      >
                        <option selected value="1" className="text-xs">
                          52D x 66W x 131H
                        </option>
                        <option value="2">52D x 65W x 130H</option>
                      </select>
                    </div>
                    <div className="flex gap-4 mb-3 mt-3 items-center">
                      <h1 className="text-sm text-white font-bold px-4 pt-2">
                        800.00<span className="superscript">USD</span>
                      </h1>
                      <div className="mt-4 ">
                        <button className="CartBu flex justify-center items-center hover:bg-gradient-to-r from-[#0098ff] to-[#7b35c8] max-sm:me-5  ">
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PSlider;
