"use client";

import Image from "next/image";
import React, { useState } from "react";

// images for pcs and tabs
import image1 from "../../assets/Rectangle-14.svg";
import image2 from "../../assets/Rectangle-6.svg";
import image3 from "../../assets/Rectangle-7.svg";
import image4 from "../../assets/Rectangle-8.svg";

// images for phones
import image5 from "../../assets/Rectangle-10.svg";
import image6 from "../../assets/Rectangle-11.svg";

const HeaderThree = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const nextTab = (index: number) => {
    setTabIndex(index);
  };

  return (
    <div className="text-primary overflow-hidden md:py-16 py-8">
      <div className="md:py-4 container ">
        <p className="h1">About</p>
        <p className="py-3">
          unleashing our client’s potential by maximizing the innovation.
        </p>
      </div>
      {/*  */}
      <div className="border-b border-[#99999E] pt-20">
        <div className="flex flex-row items-center justify-between font-semibold text-secondary container capitalize text-center">
          <a
            href="#qualified-team"
            className={`${
              tabIndex === 1 && "border-b-2 text-primary  border-[#272D40]"
            } p-4 pt-0`}
            onClick={() => nextTab(1)}
          >
            {" "}
            Qualified Team
          </a>
          <a
            href="#qualified-team"
            className={`${
              tabIndex === 2 && "border-b-2 text-primary  border-[#272D40] "
            } p-4 pt-0`}
            onClick={() => nextTab(2)}
          >
            {" "}
            Qualified Team
          </a>
          <a
            href="#our-strategy"
            className={`${
              tabIndex === 3 && "border-b-2 text-primary  border-[#272D40]"
            } p-4 pt-0`}
            onClick={() => nextTab(3)}
          >
            {" "}
            Our Strategy
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center pt-14 pb-8 container ">
        <p className="md:max-w-[600px] text-center">
          As a leading college in Paris, we look to engage with our student
          beyond the conventional design and development school relationship,
          becoming a partner to the people and companies we work with.
        </p>
      </div>
      {/*  */}
      <div className="flex flex-col lg:flex-row  lg:justify-center md:items-center lg:items-stretch py-8 gap-2 container ">
        <Image src={image2} alt="image of 1" />
        <div className="flex flex-col gap-2 justify-between">
          <Image src={image3} alt="image of 2" className="" />
          <div className="flex flex-row justify-center md:gap-2 gap-1 md:px-0 px-2 w-full">
            <Image src={image1} alt="image of 3" className="hidden md:flex" />
            <Image src={image4} alt="image of 4" className="hidden md:flex" />
            {/*  */}
            <Image src={image5} alt="image of 3" className="md:hidden w-full" />
            <Image src={image6} alt="image of 4" className="md:hidden w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderThree;
