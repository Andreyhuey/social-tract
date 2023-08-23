"use client";

import React, { useState } from "react";
import logo from "../assets/slack-1-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div className="fixed left-0 top-0 z-30 w-full h-auto bg-white">
      <div className="container text-black">
        {/* for tabs and pcs */}
        <div className="hidden md:flex md:justify-between md:items-center py-4 relative">
          <div>
            <ul className="flex items-center justify-center gap-7">
              <li className="cursor-pointer">
                <Link href="why-slack">Why Slack?</Link>
              </li>
              <li className="cursor-pointer">
                <Link href="why-slack">Pricing</Link>
              </li>
              <li className="cursor-pointer">
                <Link href="why-slack">About</Link>
              </li>
            </ul>
          </div>
          <div
            className="flex items-center justify-center gap-2 
          absolute top-1/2 left-1/2 
          transform -translate-x-1/2 -translate-y-1/2
          "
          >
            <Image src={logo} alt="site logo" />
            <p className="text-[18px] font-semibold">slack</p>
          </div>
          <div className="flex items-center justify-between gap-5">
            <button>Sign in</button>
            <button className="border border-[#99999E] p-3">Sign up</button>
          </div>
        </div>

        {/* for mobile devices */}
        <div className="flex items-center justify-between md:hidden py-4">
          <Link href="\" className="cursor-pointer">
            <Image src={logo} alt="site logo" />
          </Link>
          <FiMenu className="text-[24px] cursor-pointer" onClick={handleNav} />
        </div>

        {nav ? (
          <div className="absolute h-screen w-full p-4 cursor-pointer bg-white">
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
                <button className="border border-[#99999E] p-3">Sign up</button>
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Navbar;
