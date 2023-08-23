import Image from "next/image";
import React from "react";
import image1 from "../../assets/Group-1139.svg";
import image2 from "../../assets/Group-1140.svg";
import image3 from "../../assets/secure-data-lock-svgrepo-com-1.svg";
import image7 from "../../assets/Image7.svg";
import image8 from "../../assets/Image8.svg";
import image9 from "../../assets/Image9.svg";
import vector1 from "../../assets/Vector-1.svg";
import vector2 from "../../assets/Vector-2.svg";
import { BsArrowRight } from "react-icons/bs";

const Solutions = () => {
  return (
    <div className="text-[#272D40]">
      <div className="bg-[#F5F4F5] min-h-screen md:py-16 py-8">
        <div className="container text-[#272D40]">
          <div className="text-center pt-16">
            <p className=" md:text-[40px] text-[30px] font-bold">
              Digital Solutions
            </p>
            <p className="pt-5 md:text-center text-start">
              Slack channels are the place for work. Bring your tools to your
              team, save time and avoid context-switching.
            </p>
          </div>
          <div className="py-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex flex-col gap-4 justify-start items-start">
              <Image src={image3} alt="icon" className="h-[68px] w-[60px]" />
              <p className="text-[#272D40] text-[22px] font-semibold">
                Unified and secure
              </p>
              <p>
                Apps keep work and information right at your fingertips, and
                Slack keeps it all securely working together.
              </p>
            </div>
            {/*  */}
            <div className="flex flex-col gap-4 justify-start items-start">
              <Image src={image2} alt="icon" />
              <p className="text-[#272D40] text-[22px] font-semibold">
                No additional costs
              </p>
              <p>
                Apps keep work and information right at your fingertips, and
                Slack keeps it all securely working together.
              </p>
            </div>
            {/*  */}
            <div className="flex flex-col gap-4 justify-start items-start">
              <Image src={image1} alt="icon" />
              <p className="text-[#272D40] text-[22px] font-semibold">
                Works on the move
              </p>
              <p>
                You can work with apps in channels, where they’re a seamless
                part of the conversation, across all your devices.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="container py-16">
        <div className="flex items-center justify-between flex-col md:flex-row gap-4">
          <Image src={image7} alt="image of m" className="order-2 md:order-1" />
          <div className="flex flex-col items-start justify-center gap-4 order-1 md:order-2 md:max-w-[450px]">
            <p className="font-bold text-[30px]">Productivity for all</p>
            <p>
              Save time by streamlining daily tasks in Slack. Your entire team
              can join video calls, manage calendars and collaborate on files
              without switching context.
            </p>
            <div className="flex items-center justify-start gap-3 text-[#50519E] hover:text-[#1F2492] cursor-pointer">
              <p>Browse productivity apps</p>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="container py-16">
        <div className="flex items-center justify-between flex-col md:flex-row gap-4">
          <div className="flex flex-col items-start justify-center gap-4 md:max-w-[430px]">
            <p className="font-bold text-[29px]">Every type solutions</p>
            <p>
              Your department’s critical apps always have a place in Slack.
              Connect specialised tools to increase their use and adoption so
              that teams can quickly take action.
            </p>
            <div className="flex items-center justify-start gap-3 text-[#50519E] hover:text-[#1F2492] cursor-pointer">
              <p>Browse productivity apps</p>
              <BsArrowRight />
            </div>
          </div>
          <Image src={image8} alt="image of m" className="" />
        </div>
      </div>
      {/*  */}
      <div className="container py-20">
        <div className="flex items-center justify-between flex-col md:flex-row gap-5">
          <Image src={image9} alt="image of m" className="order-2 md:order-1" />
          <div className="flex flex-col items-start justify-center gap-4 order-1 md:order-2 md:max-w-[450px]">
            <p className="font-bold text-[30px]">
              Explore the creative process.
            </p>
            <p>
              Slack is designed to work with your internally built solutions and
              processes. In fact, every week people use over 650,000 customised
              apps. You too can create your own solutions, with or without code.
            </p>
            <div className="flex items-center gap-3 flex-col md:flex-row justify-between">
              <div className="flex flex-col shadow-lg p-3 gap-2">
                <Image src={vector1} alt="Vector 1" />
                <p className="font-semibold">Workflow Builder</p>
                <p>
                  Turn routine processes into automated workflows that keep work
                  moving forward.
                </p>
                <div className="flex items-end justify-end">
                  <BsArrowRight />
                </div>
              </div>
              {/* <p>Browse productivity apps</p>
               */}
              <div className="flex flex-col shadow-lg p-3 gap-2">
                <Image src={vector1} alt="Vector 1" />
                <p className="font-semibold">Workflow Builder</p>
                <p>
                  Turn routine processes into automated workflows that keep work
                  moving forward.
                </p>
                <div className="flex items-end justify-end">
                  <BsArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
