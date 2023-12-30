import React from "react";
import "../App.css";
import Glide from "@glidejs/glide";
import "./glideCore.css";
import "./glide.css";
import {
  ArrowLeft,
  ArrowRight,
  Controller,
  Speaker,
  BatteryFull
} from "react-bootstrap-icons";

import { useEffect } from "react";

const sliderConfiguration = {
  perView: 2,
  focusAt: "center",
  type: "carousel",
  peek: {
    before: 80,
    after: 80
  },
  breakpoints: {
    750: {
      perView: 2,
      focusAt: "center",
      peek: {
        before: 0,
        after: 0
      }
    },
    350: {
      perView: 1,
      focusAt: "center",
      peek: {
        before: 0,
        after: 0
      }
    }
  }
};

const Showmore = () => {
  const slider = new Glide(".glideT", sliderConfiguration);

  useEffect(() => {
    return () => slider.mount();
  }, [slider]);
  return (
    <div>
      <div className="container w-full h-auto mt-10 ">
        <div className="w-full h-auto flex justify-center max-sm:flex-col max-sm:items-center">
          <div className="w-60  flex flex-col max-sm:w-full max-sm:items-center ">
            <div className="w-full text-start ms-8 max-sm:text-center">
              <p className="text-3xl">
                Best
                <span className="text-[#0098ff] ps-2">Pro</span> <br />
                <span className="gaming ">Gaming </span>
                Catagories
              </p>
            </div>
            <div className="mt-2">
              <button className="bu border  border-gray-300 ">
                {" "}
                <Controller className="me-3" />
                Gaming peripherals <div className=""></div>{" "}
              </button>
            </div>
            <div>
              <button className="bu  border border-gray-300 text-neutral-400 ">
                {" "}
                <Speaker className="me-3" />
                Speakers & Headphones <div className="px-2"></div>{" "}
              </button>
            </div>
            <div>
              <button className="bu  border border-gray-300 text-neutral-400 ">
                <BatteryFull className="me-3" />
                Power Supplies <div className="px-2"></div>{" "}
              </button>
            </div>
            <div className="w-46 text-center">
              <button className=" py-5  underline underline-offset-1 text-neutral-400">
                Show More Catagories <div className="px-2"></div>{" "}
              </button>
            </div>
          </div>

          <div className="w-3/5  max-sm:w-full  flex justify-end all relative">
            <div className="w-full">
              <div className="glideT text-white ">
                <div className="glide__track" data-glide-el="track">
                  <ul className="glide__slides flex w-full">
                    <li className="glide__slide slider  ">
                      <div className="h-auto w-[210px] border  border-blue-600 ba bg-blue-200">
                        <h1 className="font-bold text-sm mt-2 text-black px-4">
                          Nintendo Switch Lite...
                        </h1>
                        <h1 className="text-neutral-500 mt-1 px-4 text-xs">
                          TYPE:XFX
                        </h1>
                        <img
                          className="crimg mx-auto"
                          src="https://gaming-workdo.myshopify.com/cdn/shop/products/1-1_247x198.png?v=1671449884"
                          alt="Centered Image"
                        />
                        <span className="text-black text-xs font-bold ps-4">
                          Color:
                        </span>
                        <div className="input-group text-neutral-500  w-11/12 mx-auto  ">
                          <select
                            className="form-select w-44 h-8 text-[12px] p-2 border rounded border-slate-600 cursor-pointer"
                            id="inputGroupSelect01"
                          >
                            <option selected>Blue</option>
                            <option value="1">White</option>
                            <option value="2">Grey</option>
                          </select>
                        </div>
                        <div className="w-24"></div>
                        <div className="w-11/12 mt-5  h-auto flex justify-between ">
                          <div>
                            <h1 className="text-xs text-black font-bold px-4">
                              543.00<span className="superscript">USD</span>
                            </h1>
                            <h1 className="line-through text-neutral-500 px-4">
                              700.00<span className="superscript">USD</span>
                            </h1>
                          </div>
                          <div className="">
                            <button className="add  border border-gray-300 px-4">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="glide__slide slider">
                      <div className="h-auto w-[210px] border  border-blue-600 ba bg-blue-200">
                        <h1 className="font-bold text-sm mt-2 text-black px-4">
                          Nintendo Switch Lite...
                        </h1>
                        <h1 className="text-neutral-500 mt-1 px-4 text-xs">
                          TYPE:XFX
                        </h1>
                        <img
                          className="crimg mx-auto"
                          src="https://gaming-workdo.myshopify.com/cdn/shop/products/1-1_247x198.png?v=1671449884"
                          alt="Centered Image"
                        />
                        <span className="text-black text-xs font-bold ps-4">
                          Color:
                        </span>
                        <div className="input-group text-neutral-500  w-11/12 mx-auto  ">
                          <select
                            className="form-select w-44 h-8 text-[12px] p-2 border rounded border-slate-600 cursor-pointer"
                            id="inputGroupSelect01"
                          >
                            <option selected>Blue</option>
                            <option value="1">White</option>
                            <option value="2">Grey</option>
                          </select>
                        </div>
                        <div className="w-24"></div>
                        <div className="w-11/12 mt-5  h-auto flex justify-between ">
                          <div>
                            <h1 className="text-xs text-black font-bold px-4">
                              543.00<span className="superscript">USD</span>
                            </h1>
                            <h1 className="line-through text-neutral-500 px-4">
                              700.00<span className="superscript">USD</span>
                            </h1>
                          </div>
                          <div className="">
                            <button className="add  border border-gray-300 px-4">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="glide__slide slider">
                      <div className="h-auto w-[210px] border  border-blue-600 ba bg-blue-200">
                        <h1 className="font-bold text-sm mt-2 text-black px-4">
                          Nintendo Switch Lite...
                        </h1>
                        <h1 className="text-neutral-500 mt-1 px-4 text-xs">
                          TYPE:XFX
                        </h1>
                        <img
                          className="crimg mx-auto"
                          src="https://gaming-workdo.myshopify.com/cdn/shop/products/1-1_247x198.png?v=1671449884"
                          alt="Centered Image"
                        />
                        <span className="text-black text-xs font-bold ps-4">
                          Color:
                        </span>
                        <div className="input-group text-neutral-500  w-11/12 mx-auto  ">
                          <select
                            className="form-select w-44 h-8 text-[12px] p-2 border rounded border-slate-600 cursor-pointer"
                            id="inputGroupSelect01"
                          >
                            <option selected>Blue</option>
                            <option value="1">White</option>
                            <option value="2">Grey</option>
                          </select>
                        </div>
                        <div className="w-24"></div>
                        <div className="w-11/12 mt-5  h-auto flex justify-between ">
                          <div>
                            <h1 className="text-xs text-black font-bold px-4">
                              543.00<span className="superscript">USD</span>
                            </h1>
                            <h1 className="line-through text-neutral-500 px-4">
                              700.00<span className="superscript">USD</span>
                            </h1>
                          </div>
                          <div className="">
                            <button className="add  border border-gray-300 px-4">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  className="glide__arrows text-black "
                  data-glide-el="controls"
                >
                  <button
                    className="glide__arrow glide__arrow--prev glideRight"
                    data-glide-dir="<"
                  >
                    <ArrowLeft />
                  </button>
                  <button
                    className="glide__arrow glide__arrow--next  glideLeft"
                    data-glide-dir=">"
                  >
                    <ArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showmore;
