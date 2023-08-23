import Image from "next/image";
import React from "react";
import logo from "../assets/slack-1-logo.svg";
import { BiLogoFacebook, BiLogoTwitter, BiLogoYoutube } from "react-icons/bi";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="pt-5 pb-10 md:pt-14 md:pb-5">
      {/* for tabs and pcs */}
      <div className="hidden md:flex flex-col">
        <div>
          <div className="flex md:flex-col lg:flex-row  md:items-center lg:items-start md:justify-between gap-24 container pb-20">
            <Link className="cursor-pointer" href="/">
              <Image src={logo} alt="site logo" className="flex-1 h-10 w-10" />
            </Link>
            <div className="md:grid md:grid-cols-2 flex-1 lg:grid-cols-4 text-[#272D40] flex items-start justify-end gap-x-32 gap-y-8">
              <div>
                <p className="font-bold">Company</p>
                <div className="flex flex-col gap-3 pt-4">
                  <p>Company</p>
                  <p>About Us</p>
                  <p>Blog</p>
                  <p>Press Info</p>
                </div>
              </div>
              <div>
                <p className="font-bold">Slack</p>
                <div className="flex flex-col gap-3 pt-4">
                  <p>Why Slack</p>
                  <p>Enterprise</p>
                  <p>Customer Stories</p>
                  <p>Pricing</p>
                  <p>Security</p>
                  <p>FAQ</p>
                </div>
              </div>
              <div>
                <p className="font-bold">Resources</p>
                <div className="flex flex-col gap-3 pt-4">
                  <p>Download</p>
                  <p>Help Center</p>
                  <p>Guides</p>
                  <p>Events</p>
                  <p>Developers</p>
                  <p>App Directory</p>
                  <p>Partners</p>
                </div>
              </div>
              <div>
                <p className="font-bold">Extras</p>
                <div className="flex flex-col gap-3 pt-4">
                  <p>Podcast</p>
                  <p>Slack Shop</p>
                  <p>Slack at Work</p>
                  <p>Slack Fund</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-t-[#99999E] border-r-0 border-b-0 border-l-0 py-6">
          <div className="flex items-center justify-between container">
            <div className="flex items-start justify-center gap-5 text-[#272D40] font-semibold">
              <p>Status</p>
              <p>Privacy & Terms</p>
            </div>
            <div className="flex items-center justify-between gap-7 text-[#272D40] text-[24px]">
              <BiLogoFacebook />
              <BiLogoTwitter />
              <BiLogoYoutube />
            </div>
          </div>
        </div>
      </div>
      {/* for mobile devices */}
      <div className="md:hidden container">
        <div className=""></div>
        <div className="flex items-center justify-between">
          <Link href="/" className="cursor-pointer">
            <Image src={logo} alt="site logo" />
          </Link>
          <div className="flex items-center justify-between gap-7 text-[#272D40]">
            <BiLogoFacebook />
            <BiLogoTwitter />
            <BiLogoYoutube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
