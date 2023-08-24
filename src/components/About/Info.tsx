"use client";

import React from "react";
import infoImage from "../../assets/info-image.svg";
import Image from "next/image";
import { AiOutlineDown } from "react-icons/ai";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import frame from "../../assets/Frame.svg";

const Info = () => {
  return (
    <div className="container text-primary py-16">
      <div className="flex flex-col md:items-center lg:justify-between lg:flex-row justify-between gap-3 py-16">
        <div className="w-full flex flex-col gap-4 items-start md:items-center lg:items-start pb-8 md:py-0">
          <div className="md:max-w-[550px]">
            <p className="h3 md:text-center lg:text-start">
              Inspiration, innovation, and opportunities.
            </p>
            <p className="pt-3">
              Take advantage of the experiential-learning opportunities built
              into many programs. You can work in labs on and off{" "}
            </p>
          </div>
          <div className="md:max-w-[630px] w-full">
            <Accordion allowZeroExpanded={true} className="flex flex-col gap-6">
              <AccordionItem className="">
                <AccordionItemHeading>
                  <AccordionItemButton
                    className={` flex items-center justify-between gap-1 w-full foc  py-4 px-2 font-semibold focus:bg-[#3D42B0] focus:text-white rounded  `}
                  >
                    Hub Business’ Vision
                    <AiOutlineDown />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="p-2">
                  Take advantage of the experiential-learning opportunities
                  built into many programs. You can work in labs on and off
                </AccordionItemPanel>
              </AccordionItem>
              {/*  */}
              <AccordionItem className="">
                <AccordionItemHeading>
                  <AccordionItemButton className="flex items-center justify-between gap-1 w-full bg-[#fff] py-4 px-2 font-semibold focus:bg-[#3D42B0] focus:text-white rounded">
                    Our mission for Sustainability
                    <AiOutlineDown />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="p-2">
                  Take advantage of the experiential-learning opportunities
                  built into many programs. You can work in labs on and off
                </AccordionItemPanel>
              </AccordionItem>
              {/*  */}
              <AccordionItem className="">
                <AccordionItemHeading>
                  <AccordionItemButton className="flex items-center justify-between gap-1 w-full bg-[#fff] py-4 px-2 font-semibold focus:bg-[#3D42B0] focus:text-white rounded">
                    Qualified Team
                    <AiOutlineDown />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="p-2">
                  Take advantage of the experiential-learning opportunities
                  built into many programs. You can work in labs on and off
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <Image src={infoImage} alt="information image" />
      </div>
      <div className="py-14">
        {/* for phones and pcs */}
        <div className="flex flex-col lg:flex-row md:hidden lg:flex items-center justify-between gap-4">
          <div className="flex flex-col items-center justify-center gap-3 text-center shadow-xl px-4 py-14 w-full">
            <Image src={frame} alt="frame" />
            <p className="h5">Diversity and Inclusion</p>
            <p>International Partners</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 text-center shadow-xl px-4 py-14 w-full">
            <Image src={frame} alt="frame" />
            <p className="h5">Diversity and Inclusion</p>
            <p>International Partners</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 text-center shadow-xl px-4 py-14 w-full">
            <Image src={frame} alt="frame" />
            <p className="h5">Diversity and Inclusion</p>
            <p>International Partners</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 text-center shadow-xl px-4 py-14 w-full">
            <Image src={frame} alt="frame" />
            <p className="h5">Diversity and Inclusion</p>
            <p>International Partners</p>
          </div>
        </div>

        {/* for tabs */}
        <div className="md:grid md:grid-cols-2 hidden lg:hidden gap-4">
          <div className="flex flex-col items-center justify-center gap-3 text-center shadow-xl px-4 py-14 w-full">
            <Image src={frame} alt="frame" />
            <p className="h5">Diversity and Inclusion</p>
            <p>International Partners</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 text-center shadow-xl px-4 py-14 w-full">
            <Image src={frame} alt="frame" />
            <p className="h5">Diversity and Inclusion</p>
            <p>International Partners</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 text-center shadow-xl px-4 py-14 w-full">
            <Image src={frame} alt="frame" />
            <p className="h5">Diversity and Inclusion</p>
            <p>International Partners</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 text-center shadow-xl px-4 py-14 w-full">
            <Image src={frame} alt="frame" />
            <p className="h5">Diversity and Inclusion</p>
            <p>International Partners</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
