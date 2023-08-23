import React from "react";

const Newsletter = () => {
  return (
    <div className="container py-32">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
        <div className="text-[#272D40] text-center md:text-start">
          <p className=" font-bold">Try it for free</p>
          <p>Already using Slack? Sign in to your account.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-2">
          <input
            placeholder="Email Address"
            className=" placeholder:text-center placeholder:text-[#272D40] focus:outline-none rounded border-[#99999E] text-black py-3 px-6 border w-full"
          />
          <button className="py-3 px-6 bg-[#3D42B0] hover:bg-[#1F2492] rounded flex items-center justify-center md:w-full">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
