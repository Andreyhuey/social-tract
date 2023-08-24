import { Footer, Navbar, Newsletter } from "@/components";
import Image from "next/image";
import React from "react";
import pricelist from "../../assets/pricelist.svg";
import logo from "../../assets/Group-1145.svg";
import { BiLogoTwitter } from "react-icons/bi";

const page = () => {
  return (
    <main className="bg-white w-full">
      <Navbar />
      <div className="md:pt-32 pt-20"></div>
      <>
        <div className="container text-primary md:py-16 py-8">
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
          <div className="py-8 flex flex-col items-center justify-center gap-5 text-center">
            <p className="h1">Ready for take-off?</p>
            <p className="md:max-w-[450px]">
              Download the Slack app and start taking your productivity to new
              heights
            </p>
            <button className="py-3 px-14 hover:text-[#3D42B0] text-white hover:bg-white bg-[#1F2492] rounded border-[#99999E] border w-full md:w-auto">
              Download for Mac
            </button>
            <p className="text-secondary">or</p>
            <button className="py-3 md:px-14 px-10 text-secondary rounded border-[#99999E] border w-full md:w-auto">
              $ brew install - - cask slack
            </button>
            <p className="text-secondary">macOS 11+</p>
          </div>
          <div className="py-8 flex flex-col md:flex-row items-center justify-center gap-x-4 gap-y-6 text-black">
            <div className="flex flex-col items-start justify-start gap-4 shadow-2xl px-5 py-9 rounded-md">
              <BiLogoTwitter className="text-[30px]" />
              <p className="font-bold">Stay up to date</p>
              <p className="md:max-w-[400px]">
                We’d love to stay connected with you. If the feeling’s mutual,
                follow @slackapp on Twitter for the latest news and updates.
              </p>
            </div>
            <div className="flex flex-col items-start justify-start gap-4 shadow-2xl px-5 py-9 rounded-md">
              <Image src={logo} alt="logo" className="h-[30px]" />
              <p className="font-bold">Help shape the product</p>
              <p className="md:max-w-[400px]">
                Lots of the best brightness ideas come from you. Join our Slack
                Community to help create the future of Slack.
              </p>
            </div>
          </div>
        </div>
      </>
      <Newsletter />
      <Footer />
    </main>
  );
};

export default page;
