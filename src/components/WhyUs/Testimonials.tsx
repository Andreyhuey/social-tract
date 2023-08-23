"use client";

import React from "react";

import { TestimonialData } from "@/constants";
import Image from "next/image";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  let lengthOfArr = TestimonialData?.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === lengthOfArr - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? lengthOfArr - 1 : currentSlide - 1);
  };

  return (
    <div className="bg-[#F4EDE4] min-h-screen py-20">
      <div className="container">
        <>
          {TestimonialData?.map((item, index) => (
            <div key={index}>
              {currentSlide === index && (
                <>
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
                    <div className="text-black md:max-w-[500px]">
                      <p className="h2 ">{item?.name}</p>
                      <p className="text-[#272D40]">{item?.email}</p>
                      <p className="pt-6">{item?.quote}</p>

                      <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:justify-between pt-7">
                        <div className="flex items-center md:justify-start justify-center gap-2">
                          <span
                            className={`${
                              currentSlide === 0
                                ? "h-[10px] w-[10px] bg-black"
                                : "h-[10px] w-[10px]"
                            } rounded-full border-[#101E1C] border cursor-pointer`}
                            onClick={() => setCurrentSlide(0)}
                          />
                          <span
                            className={`${
                              currentSlide === 1
                                ? "h-[10px] w-[10px] bg-black"
                                : "h-[10px] w-[10px]"
                            } rounded-full border-[#101E1C] border cursor-pointer`}
                            onClick={() => setCurrentSlide(1)}
                          />
                          <span
                            className={`${
                              currentSlide === 2
                                ? "h-[10px] w-[10px] bg-black"
                                : "h-[10px] w-[10px]"
                            } rounded-full border-[#101E1C]  border cursor-pointer `}
                            onClick={() => setCurrentSlide(2)}
                          />
                          <span
                            className={`${
                              currentSlide === 3
                                ? "h-[10px] w-[10px] bg-black"
                                : "h-[10px] w-[10px]"
                            } rounded-full border-[#101E1C] border cursor-pointer `}
                            onClick={() => setCurrentSlide(3)}
                          />
                          <span
                            className={`${
                              currentSlide === 4
                                ? "h-[10px] w-[10px] bg-black"
                                : "h-[10px] w-[10px]"
                            } rounded-full border-[#101E1C] border cursor-pointer `}
                            onClick={() => setCurrentSlide(4)}
                          />
                        </div>

                        <div className="flex items-center justify-center gap-4">
                          <div
                            className="rounded-full bg-white hover:bg-[#3D42B0] text-[#3D42B0] hover:text-white p-4 cursor-pointer "
                            onClick={prevSlide}
                          >
                            <AiOutlineArrowLeft className="font-bold" />
                          </div>
                          <div
                            className="rounded-full bg-white hover:bg-[#3D42B0] text-[#3D42B0] hover:text-white p-4 cursor-pointer"
                            onClick={nextSlide}
                          >
                            <AiOutlineArrowRight className="font-bold" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Image src={item?.img} alt={item?.name} />
                  </div>
                </>
              )}
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default Testimonials;
