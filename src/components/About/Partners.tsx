import React from "react";
import Image from "next/image";
import img from "../../assets/Rectangle-9.svg";
import img2 from "../../assets/Rectangle-100.svg";
import image4 from "../../assets/image-4.svg";
import image5 from "../../assets/image-5.svg";
import image6 from "../../assets/image-6.svg";
import image7 from "../../assets/image-7.svg";
import image8 from "../../assets/image-8.svg";
import image9 from "../../assets/image-9.svg";

const Partners = () => {
  return (
    <div className="py-16 container">
      <div className="py-8 text-primary">
        <div className="text-center pb-8">
          <p>A deep commitment to diversity</p>
          <p className="h3">Business Partners</p>
        </div>
        <div className="py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
            <div className="flex flex-col lg:flex-row gap-3 items-center w-full">
              <Image src={img} alt="Daniel James Stripe" className="w-full" />
              <div className="flex flex-col lg:items-start items-center">
                <p className="h5 pb-5">Daniel James, Stripe</p>
                <p>
                  By enrolling in the Four Bear Program, UM guarantees you will
                  graduate in four years with a bachelor’s degree. Discover the
                  global city—filled with inspiration, opportunities to explore.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-3 items-center w-full">
              <Image src={img2} alt="Daniel James Stripe" className="w-full" />
              <div className="flex flex-col lg:items-start items-center">
                <p className="h5 pb-5 text-start">Shane Dore, PayPal</p>
                <p>
                  By enrolling in the Four Bear Program, UM guarantees you will
                  graduate in four years with a bachelor’s degree. Discover the
                  global city—filled with inspiration, opportunities to explore.
                </p>
              </div>
            </div>
          </div>
          <p className="text-secondary text-center pt-8 pb-4">
            Our nearly 8,000 committed staff members are ready to help.
          </p>
        </div>
      </div>
      {/* for phones */}
      <div className="pt-16 grid grid-cols-3 lg:hidden items-center gap-10 justify-between">
        <Image src={image9} alt="image of 9" />
        <Image src={image4} alt="image of 4" />
        <Image src={image5} alt="image of 5" />
        <Image src={image6} alt="image of 6" />
        <Image src={image7} alt="image of 7" />
        <Image src={image8} alt="image of 8" />
      </div>
      {/* for pcs */}
      <div className="pt-16 lg:flex hidden items-center gap-6 justify-between">
        <Image src={image9} alt="image of 9" />
        <Image src={image4} alt="image of 4" />
        <Image src={image5} alt="image of 5" />
        <Image src={image6} alt="image of 6" />
        <Image src={image7} alt="image of 7" />
        <Image src={image8} alt="image of 8" />
      </div>
    </div>
  );
};

export default Partners;
