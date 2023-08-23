import Image from "next/image";
import React from "react";
import Header from "../../assets/Group-13100.svg";

const HeaderTwo = () => {
  return (
    <div className="container text-[#272D40] md:py-16 py-8">
      <div className="flex items-start justify-between flex-col md:flex-row gap-4">
        <div>
          <div className="flex flex-col gap-4 justify-start items-center md:max-w-[500px]">
            <div>
              <p>INTEGRATION</p>
              <p className="md:text-[40px] text-[30px] font-bold pt-2">
                Investing in Digital Platforms.
              </p>
            </div>
            <p>
              Slack makes all your tools work better by letting you integrate
              industry-leading software and custom apps right into Slack.
            </p>
          </div>
          <div className="flex items-start justify-start pt-4">
            <button className="py-3 px-6 hover:text-[#3D42B0] text-white hover:bg-white bg-[#1F2492] rounded border-[#99999E] border">
              LEARN MORE
            </button>
          </div>
        </div>
        <Image src={Header} alt="header img" />
      </div>
    </div>
  );
};

export default HeaderTwo;
