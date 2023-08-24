"use client";

import React, { useState } from "react";
import Hero from "../../assets/hero.svg";
import Image from "next/image";

const Header = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const nextTab = (index: number) => {
    setTabIndex(index);
  };

  return (
    <div>
      <div className="lg:flex hidden border-b border-[#99999E]">
        <div className="flex flex-row items-center justify-center font-[480] text-secondary  uppercase w-full gap-36">
          <a
            href="#overview"
            className={`${
              tabIndex === 1 && "border-b-2 text-primary  border-[#C9AE5D]"
            } p-8 pt-0`}
            onClick={() => nextTab(1)}
          >
            {" "}
            Overview
          </a>
          <a
            href="#communication"
            className={`${
              tabIndex === 2 && "border-b-2 text-primary  border-[#C9AE5D] "
            } p-8 pt-0`}
            onClick={() => nextTab(2)}
          >
            {" "}
            communication
          </a>
          <a
            href="#insight"
            className={`${
              tabIndex === 3 && "border-b-2 text-primary  border-[#C9AE5D]"
            } p-8 pt-0`}
            onClick={() => nextTab(3)}
          >
            {" "}
            insight
          </a>
          <a
            href="#workflow"
            className={`${
              tabIndex === 4 && "border-b-2 text-primary  border-[#C9AE5D]"
            } p-8 pt-0`}
            onClick={() => nextTab(4)}
          >
            Workflow{" "}
          </a>
        </div>
      </div>

      <div></div>
      <div className="container w-full md:pt-12 pt-8">
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <p className="text-primary font-bold md:text-[45px] text-[30px] md:max-w-[600px] text-center">
            Connecting people around the world.
          </p>
          <p className="text-primary md:max-w-[500px]">
            Tailored to the way you work, customized to the tools of your team’s
            trade; Slack brings into one place all the people and pieces you
            need to get your job done.
          </p>
          <button className="py-3 px-6 bg-[#3D42B0] hover:bg-[#1F2492] rounded">
            Get started
          </button>
          <Image src={Hero} alt="Hero image" className="pt-3" />
        </div>
      </div>
    </div>
  );
};

export default Header;
