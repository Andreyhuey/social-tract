import React from "react";
import Hero from "../../assets/hero.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="container md:pt-12 pt-8">
      <div className="flex flex-col items-center justify-center text-center gap-4">
        <p className="text-[#272D40] font-bold md:text-[45px] text-[30px] md:max-w-[600px] text-center">
          Connecting people around the world.
        </p>
        <p className="text-[#272D40] md:max-w-[500px]">
          Tailored to the way you work, customized to the tools of your team’s
          trade; Slack brings into one place all the people and pieces you need
          to get your job done.
        </p>
        <button className="py-3 px-6 bg-[#3D42B0] hover:bg-[#1F2492] rounded">
          Get started
        </button>
        <Image src={Hero} alt="Hero image" className="pt-3" />
      </div>
    </div>
  );
};

export default Header;
