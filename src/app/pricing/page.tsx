import { Footer, Navbar, Newsletter } from "@/components";
import Image from "next/image";
import React from "react";
import pricelist from "../../assets/pricelist.svg";

const page = () => {
  return (
    <main className="bg-white w-full">
      <Navbar />
      <div className="md:pt-32 pt-20"></div>
      <>
        <div className="container text-primary">
          <div>
            <p className="h1">Pricing</p>
            <p className="py-3">
              Increase your teams productivity. Get things done in rapid time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start justify-between gap-x-8 gap-y-12  py-8">
            <div>
              <p className="h5 pb-4">Features</p>
              <p className="pt-4">
                Everything you need to take your productivity to the next level.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="h5">Personal</p>
              <p className="text-secondary">$0 per month</p>
              <p className="pb-2">
                Unleash your superpowers at no cost. Yes, really. It’s free.
              </p>
              <button className="py-3 px-6 hover:text-[#3D42B0] text-white hover:bg-white bg-[#1F2492] rounded border-[#99999E] border">
                Download for Mac
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-start gap-4">
                <p className="h5">Teams</p>
                <button className="border py-1 px-3 border-[text-secondary] rounded-2xl text-secondary text-[12px] hover:bg-[#1F2492] hover:text-white">
                  Basic
                </button>
              </div>
              <p className="text-secondary">$0 per user per month</p>
              <p className="pb-2">
                Power up your team speed and maximize productivity.
              </p>
              <button className="py-3 px-6 hover:text-[#3D42B0] text-white hover:bg-white bg-[#1F2492] rounded border-[#99999E] border">
                Create Organization
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-start gap-4">
                <p className="h5">Teams</p>
                <button className="border py-1 px-3 border-[#611F69] rounded-2xl text-[#611F69] text-[12px] hover:bg-[#611F69] hover:text-white">
                  Paid
                </button>
              </div>
              <p className="text-secondary">$10 per user per month</p>
              <p className="pb-2">
                Supercharge your team and maximize productivity.
              </p>
              <button className="py-3 px-6 hover:text-[#3D42B0] text-white hover:bg-white bg-[#1F2492] rounded border-[#99999E] border">
                Create Organization
              </button>
            </div>
          </div>
          <Image src={pricelist} alt="price list" className="py-14" />
          <div className="py-8"></div>
        </div>
      </>
      <Newsletter />
      <Footer />
    </main>
  );
};

export default page;
