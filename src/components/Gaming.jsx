import React from "react";
import "../App.css";
import Glide from "@glidejs/glide";
import "./glideCore.css";
import "./glide.css";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";

import { useEffect } from "react";

const sliderCon = {
  perView: 5,
  startAt: 0,
  perTouch: 1,
  touchRatio: 1,
  peek: {
    before: 100,
    after: 20
  },

  breakpoints: {
    700: {
      perView: 3
    },
    500: {
      perView: 2
    }
  },

  type: "carousel"
};

const Gaming = () => {
  const slider = new Glide(".glideSlider", sliderCon);

  useEffect(() => {
    return () => slider.mount();
  }, [slider]);
  return (
    <div>
      <div className="container w-full h-auto bg-black">
        <div className="w-full flex justify-center all">
          <div className="w-full">
            <div className="glideSlider text-white ">
              <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides flex w-full">
                  <li className="glide__slide slider">
                    <div className="h-[50px] w-[120px]">
                      <h1 className="font-bold text-2xl mt-2 text-purple-700 px-4">
                        Gaming.
                      </h1>
                    </div>
                  </li>
                  <li className="glide__slide slider">
                    <div className="h-[50px] w-[120px]">
                      <h1 className="font-bold text-2xl mt-2 text-purple-700 px-4">
                        Gaming.
                      </h1>
                    </div>
                  </li>
                  <li className="glide__slide slider">
                    <div className="h-[50px] w-[120px]">
                      <h1 className="font-bold text-2xl mt-2 text-purple-700 px-4">
                        Gaming.
                      </h1>
                    </div>
                  </li>
                  <li className="glide__slide slider">
                    <div className="h-[50px] w-[120px]">
                      <h1 className="font-bold text-2xl mt-2 text-purple-700 px-4">
                        Gaming.
                      </h1>
                    </div>
                  </li>
                  <li className="glide__slide slider">
                    <div className="h-[50px] w-[120px]">
                      <h1 className="font-bold text-2xl mt-2 text-purple-700 px-4">
                        Gaming.
                      </h1>
                    </div>
                  </li>
                  <li className="glide__slide slider">
                    <div className="h-[50px] w-[120px]">
                      <h1 className="font-bold text-2xl mt-2 text-purple-700 px-4">
                        Gaming.
                      </h1>
                    </div>
                  </li>
                </ul>
                <div
                  className="glide__arrows text-black relative"
                  data-glide-el="controls"
                >
                  <button
                    className="glide__arrow glide__arrow--prev rounded-full top-[-20px] bg-[#0098ff]
                     relative glideRight "
                    data-glide-dir="<"
                  >
                    <ArrowLeft className="absolute top-1 left-1" />
                  </button>
                  <button
                    className="glide__arrow glide__arrow--next  glideLeft rounded-full top-[-20px] right-5 bg-[#0098ff]"
                    data-glide-dir=">"
                  >
                    <ArrowRight className="absolute top-1.5 right-1.5" />
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

export default Gaming;
