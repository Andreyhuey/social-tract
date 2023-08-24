import React from "react";
import image1 from "../../assets/Rectangle-2.svg";
import image2 from "../../assets/Rectangle-3.svg";
import image3 from "../../assets/Rectangle-4.svg";
import Image from "next/image";

const Team = () => {
  return (
    <div className="container text-primary py-16">
      <div className="text-center flex flex-col items-center justify-center">
        <p className="h3">Our Team</p>
        <p className="pt-3 md:max-w-[900px]">
          As a leading college in Paris, we look to engage with our student
          beyond the conventional design and development school relationship,
          becoming a partner to the people.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-y-7 gap-x-3 py-10">
        <div className="flex items-start justify-start flex-col gap-5 ">
          <Image src={image1} alt="image of mary Hughes" />
          <p className="h4">Mary Hughes</p>
          <p className="text-secondary">PROFFESSOR</p>
          <p>
            Gilbert Hughes joined Hub Constructon in 1955 as an
            estimator/project manager, after previously working months as a
            laborer.
          </p>
        </div>
        <div className="flex items-start justify-start flex-col gap-5 ">
          <Image src={image2} alt="image of mary Hughes" />
          <p className="h4">Erik Genie</p>
          <p className="text-secondary">PROFFESSOR</p>
          <p>
            Gilbert Hughes joined Hub Constructon in 1955 as an
            estimator/project manager, after previously working months as a
            laborer.
          </p>
        </div>
        <div className="flex items-start justify-start flex-col gap-5 ">
          <Image src={image3} alt="image of mary Hughes" />
          <p className="h4">Gilbert Hughes</p>
          <p className="text-secondary">PROFFESSOR</p>
          <p>
            Gilbert Hughes joined Hub Constructon in 1955 as an
            estimator/project manager, after previously working months as a
            laborer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
