"use client";

import React, { useState } from "react";
import logo from "../assets/slack-1-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div className="fixed left-0 top-0 z-30 w-full h-auto bg-white">
      <div className=" text-black container">
        {/* for tabs and pcs */}
        <div className="hidden md:flex md:justify-between md:items-center py-4 relative">
          <ul className="flex items-center justify-start gap-7">
            <li className="cursor-pointer">
              <Link href="why-slack">Why Slack?</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="pricing">Pricing</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="about">About</Link>
            </li>
          </ul>

          <Link
            href={"/"}
            className="flex items-center justify-center gap-2 
          absolute top-1/2 left-1/2 
          transform -translate-x-1/2 -translate-y-1/2 cursor-pointer
          "
          >
            <Image src={logo} alt="site logo" />
            <p className="text-[18px] font-semibold">slack</p>
          </Link>
          <div className="flex items-center justify-end gap-5">
            <button>Sign in</button>
            <button className="border border-[#99999E] py-2 px-3 hover:text-white hover:bg-[#1F2492] rounded ">
              Sign up
            </button>
          </div>
        </div>

        {/* for mobile devices */}
        <div className="flex items-center justify-between md:hidden py-4">
          <Link href="\" className="cursor-pointer">
            <Image src={logo} alt="site logo" className="h-[30px] w-[30px]" />
          </Link>
          {nav ? (
            <TfiClose
              className="text-[28px] cursor-pointer"
              onClick={handleNav}
            />
          ) : (
            <FiMenu
              className="text-[28px] cursor-pointer"
              onClick={handleNav}
            />
          )}
        </div>
        <div className="w-screen">
          {nav ? (
            <div className="absolute w-screen h-screen px-4 py-24 cursor-pointer bg-white flex items-start justify-center">
              <ul className="flex flex-col items-center justify-center gap-8">
                <li className="cursor-pointer">
                  <Link href="why-slack">Why Slack?</Link>
                </li>
                <li className="cursor-pointer">
                  <Link href="pricing">Pricing</Link>
                </li>
                <li className="cursor-pointer">
                  <Link href="about">About</Link>
                </li>
                <li className="cursor-pointer">
                  <button>Sign in</button>
                </li>
                <li className="cursor-pointer">
                  <button className="border border-[#99999E] py-2 px-3 hover:text-white hover:bg-[#1F2492] rounded">
                    Sign up
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
