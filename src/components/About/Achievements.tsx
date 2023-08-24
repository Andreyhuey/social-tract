"use client";

import React from "react";
import Image from "next/image";
import image1 from "../../assets/Frame1.svg";
import image2 from "../../assets/Frame2.svg";
import image3 from "../../assets/user.svg";
import image4 from "../../assets/arrow-triangle-recycle-svgrepo-com 1.svg";
import CountUp from "react-countup";

const Achievements = () => {
  return (
    <div className="bg-[#F4EDE4]">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-between w-full gap-x-4 md:h-auto">
          <div className="flex flex-col items-center justify-start gap-4 py-16 w-full">
            <Image src={image1} alt="image of 1" />
            <div className="text-center text-black">
              <p className="h1">
                <CountUp end={70} duration={5} enableScrollSpy />+
              </p>
              <p className="text-primary text-center">Country</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-4 py-16 w-full">
            <Image src={image2} alt="image of 1" />
            <div className="text-center text-black">
              <p className="h1">
                <CountUp end={60} duration={5} enableScrollSpy />
              </p>
              <p className="text-primary text-center">Awards and Medals</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-4 py-16 w-full">
            <Image src={image3} alt="image of 1" />
            <div className="text-center text-black">
              <p className="h1">
                <CountUp end={130} duration={5} enableScrollSpy />
                K+
              </p>
              <p className="text-primary text-center">
                International Customers
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-4 py-16 w-full">
            <Image src={image4} alt="image of 1" />
            <div className="text-center text-black">
              <p className="h1">
                <CountUp end={21} duration={5} enableScrollSpy />+
              </p>
              <p className="text-primary text-center">Facilities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
