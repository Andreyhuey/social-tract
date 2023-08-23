import Image from "next/image";
import React from "react";
import image6 from "../../assets/image6.svg";

const Services = () => {
  return (
    <div className="pb-">
      <div className="container md:py-12 py-8">
        <p className="text-[#272D40] text-center">
          Mobile, desktop, all you need
        </p>
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <p className="text-[#272D40] font-bold md:text-[45px] text-[35px] md:max-w-[600px] text-center">
            Global Services
          </p>
          <p className="text-[#272D40] md:max-w-[550px]">
            We provide digital experience services to startups and small
            businesses. We help our clients succeed by creating brand
            identities, digital experiences, and print materials.
          </p>
          <button className="py-3 px-6 text-[#3D42B0] hover:text-white bg-white hover:bg-[#1F2492] rounded border-[#99999E] border">
            Get started
          </button>
          <Image src={image6} alt="Hero image" className="pt-3" />
        </div>
      </div>
      {/*  */}
      <div className="bg-[#F9F9F9]">
        <div className="container md:py-16 py-8  ">
          <div className="flex flex-col items-center justify-center text-center gap-4">
            <p className="text-[#272D40] font-bold md:text-[45px] text-[35px] md:max-w-[600px] text-center">
              leading the best marketing team.
            </p>
            <p className="text-[#272D40] md:max-w-[550px]">
              We help our clients succeed by creating brand identities, digital
              experiences, and print materials that communicate clearly, achieve
              marketing.
            </p>
            <button className="py-3 px-6 text-[#3D42B0] hover:text-white bg-white hover:bg-[#1F2492] rounded border-[#99999E] border">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
