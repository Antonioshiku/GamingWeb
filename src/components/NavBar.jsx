import React, { useState } from "react";

import {
  Person,
  Globe2,
  Cart2,
  ChevronDown,
  Search,
  Controller,
  List,
  XLg
} from "react-bootstrap-icons";

const NavBar = () => {
  function shop() {
    let collShop = document.querySelector(".collapseHome");
    collShop.classList.toggle("hidden");
  }

  function dropNav() {
    let Nav = document.querySelector(".dropNav");
    Nav.classList.remove("translate-y-[-290px]");
  }
  function CancleNav() {
    let Nav = document.querySelector(".dropNav");
    Nav.classList.add("translate-y-[-290px]");
  }

  function DropDown() {
    let icon = document.getElementById("3");

    icon.classList.add("rotate-180");
  }

  function DropUp() {
    let icon = document.getElementById("3");

    icon.classList.remove("rotate-180");
  }

  const [string, setString] = useState(
    "   Gaming accessories include gear such as headsets, extra controllers, charging stations, memory devices, carrying cases andmuch more."
  );

  return (
    <>
      <div className="container w-full h-[60px] relative border-b border-gray-500 max-sm:border-none  ">
        <div className="container w-full h-10 hidden relative border-b border-violet-800 z-20 items-center  justify-between mobileNav z-40  bg-black max-sm:flex">
          <img
            src="src\img\logo_aceeaa59-f6d4-423f-86f0-8c025cf33812.png"
            className="w-54 ms-3"
            width={66}
            alt=""
          />
          <div className="logos w-[120px] flex text-white text-sm justify-evenly me-5  ">
            <Search />
            <Person />
            <Globe2 />
            <Cart2 />
            <List onClick={dropNav} />
          </div>
        </div>
        <div className="container w-full h-[60vh] relative bg-white hidden z-30 flex flex-col  dropNav transform translate-y-[-290px] origin-top delay-100 ease-out transition duration-300 max-sm:flex ">
          <div className="w-full h-10 flex justify-end items-center bg-[#0098FF]">
            <XLg onClick={CancleNav} className="me-6 text-white text-lg" />
          </div>
          <div className="container flex flex-col ms-3 mt-2 text-gray-400">
            <div onClick={shop} className="flex items-center">
              <p>Shop All</p>
              <ChevronDown className="ms-2" />
            </div>
            <div
              className="!visible  collapseHome hidden"
              data-te-collapse-item
            >
              <div className="w-20  text-gray-400 flex flex-col text-[10px] leading-5 items-start ms-4 ">
                <a href="">Gaming PCs</a>
                <a href="">Game Remote</a>
                <a href="">Gaming Cards</a>
                <a href="">Gaming Chairs</a>
                <a href="">Gaming Moniter</a>
                <a href="">Gaming Console</a>
              </div>
            </div>
            <p>Blog</p>
            <p>All Collections</p>
            <p>About Us</p>
            <p>Contact Us</p>
          </div>
        </div>
        <img
          src="src\img\Half-bluthooth.avif"
          className="absolute w-20 top-0 z-[-1px]"
          alt=""
        />
        <img
          src="src\img\Half-bluthooth-right.webp"
          className="absolute w-44 top-0 right-52 halfBu max-md:left-[70%] max-md:w-[150px] z-[-1px] max-sm:w-[40%] max-sm:left-[58%]"
          alt=""
        />
        <img
          src="src\img\design-circle-1.webp"
          width={600}
          className="left-[21%] absolute z-0 max-sm:hidden "
          alt=""
        />
        <div className="container w-10/12   h-full mx-auto sticky flex justify-around items-center text-white z-20  max-md:w-full  max-sm:hidden ">
          <div className="flex justify-between w-60 text-xs font-bold">
            <div className="flex items-center relative gamingNav z-30 ">
              <p>Gaming Accessories</p>
              <ChevronDown className="ms-1 text-[9px] mt-1 icons" />
            </div>
            <div className="flex items-center ">
              <p>Pages</p>
              <ChevronDown className="ms-1 text-[9px] mt-1 icons" />
            </div>
            <div
              className="flex items-center relative  "
              onMouseEnter={DropDown}
              onMouseLeave={DropUp}
            >
              <p>Blog</p>
              <ChevronDown
                id="3"
                className="ms-1 text-[9px] mt-1 icons transition delay-200 duration-500 linear "
              />
            </div>
          </div>
          <div>
            <img
              src="src\img\logo_aceeaa59-f6d4-423f-86f0-8c025cf33812.png"
              className="w-54 max-md:left-[10%]"
              width={86}
              alt=""
            />
          </div>
          <div className="flex justify-evenly w-56 items-center">
            <Person className="text-white text-lg" />
            <Globe2 />
            <div className="flex flex-col text-[8px] items-end font-semibold">
              <p>My Cart:</p>
              <p>865.00 Usd</p>
            </div>
            <Cart2 />
          </div>
        </div>
      </div>
      <div className="container w-full h-[60px] relative border-b border-gray-500 z-10  max-sm:hidden">
        <div className="container w-9/12  h-full mx-auto  flex justify-between items-center  text-white z-20 relative overflow-hidden max-md:w-11/12">
          <div className="flex text-[10px] font-semibold w-52">
            <p>New Accessories -30 % Off.</p>
            <p>More</p>
          </div>
          <div className="relative z-10">
            <Search className="absolute text-[13px] top-2 left-2" />
            <input
              className="text-black bg-transparent   search  "
              type="search"
              placeholder="Search Product.."
              autoComplete="true"
            />
          </div>
          <div className="w-32 text-[10px] font-semibold text-end">
            <a href="#" className="underline">
              New Collections
            </a>
          </div>
        </div>
      </div>
      <div className="container content mt-4 w-full h-auto relative z-20 flex  ">
        <img
          src="src\img\main-conent-games.avif"
          className="absolute top-[55%] left-12 max-md:hidden"
          width={45}
          alt=""
        />
        <div className="w-1/2 h-full relative   flex flex-col items-center justify-center max-sm:w-7/12">
          <div className="w-7/12 h-8 rounded-3xl flex justify-center items-center bg-[#12103E] text-[9px] max-md:w-10/12 max-sm:w-full ">
            <div className="w-14 featured text-center me-3"> Featured</div>
            <p className="text-white">New Feature Collections</p>
            <p className="text-blue-400"> \Gaming . Collector</p>
          </div>
          <div className=" w-9/12 mt-4 ms-20 max-md:w-full ">
            <p className="text-5xl text-white">
              Best <span className="text-[#0098ff]">Pro</span>
              <span className="gaming ps-2">Gaming </span>
              Accessories
            </p>
          </div>
          <div className="w-7/12 mt-3 max-md:w-9/12 ">
            <p className="text-gray-300 text-[10px] ">{string}</p>
          </div>
          <div className="w-7/12 flex justify-center text-white mt-4 max-md:w-full max-md:ms-12">
            <button className="ProductBu flex justify-center items-center ">
              <Controller className="me-3" />
              Show Products
            </button>
            <button className="colBu ms-7 flex justify-center items-center hover:bg-gradient-to-r from-[#0098ff] to-[#7b35c8]">
              <Controller className="me-3" />
              Show Collections
            </button>
          </div>
        </div>
        <div className="relative w-1/2">
          <img
            src="src\img\round-img-small.webp"
            className="absolute top-[10%] max-sm:hidden"
            width={40}
            alt=""
          />
          <img
            src="src\img\round-img-small.webp"
            className="absolute top-[58%] right-[80%] max-sm:hidden"
            width={25}
            alt=""
          />
          <img
            src="src\img\full-bluthooth.avif"
            className="absolute top-[18%] right-[46%] max-sm:hidden"
            width={65}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default NavBar;
