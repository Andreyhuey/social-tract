import React from "react";
import mark from "../../assets/mark.svg";
import clifford from "../../assets/clifford.svg";
import nick from "../../assets/nick.svg";
import image3 from "../../assets/Image3.svg";
import image4 from "../../assets/Image4.svg";
import image5 from "../../assets/image5.svg";
import Image from "next/image";

const Desc = () => {
  return (
    <div>
      <div className="bg-[#F9F9F9] min-h-screen py-8">
        <div className="container py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
            <div className="text-[#272D40]">
              <div>
                <p className="">A communication platform for teams</p>
                <p className="md:max-w-[360px] md:text-[32px] text-[25px] text-black font-bold">
                  Edit and customize in real-time.
                </p>
                <p className="md:max-w-[430px]">
                  Through a deep understanding of our audience’s makeup and
                  motivations, we design digital experiences that connect with
                  people.
                </p>
                <button className="underline text-[#50519E]">Learn More</button>
              </div>
              <div className="mt-9 pt-8 border border-t-[#99999E] border-r-0 border-b-0 border-l-0 md:max-w-[380px]">
                <div className="flex items-start justify-between gap-3">
                  <Image src={mark} alt="image of mark" />
                  <div>
                    <p className="italic">
                      “Adding more communication products-can be but with slack
                      what we’re actually doing is rebuilding an entirely new
                      network at work.”
                    </p>
                    <p className="pt-3 font-bold">
                      Mark Kirby, Liberty Mutual{" "}
                      <span className="text-[#50519E] font-normal">
                        {" "}
                        - Read story
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Image src={image3} alt="image 3" />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="min-h-screen py-8">
        <div className="container py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
            <Image src={image4} alt="image 4" className="md:order-1 order-2" />
            <div className="text-[#272D40] md:order-2 order-1">
              <div>
                <p className="">Every decision, made searchable</p>
                <p className="md:max-w-[360px] md:text-[32px] text-[25px] text-black font-bold">
                  Where all knowledge is common knowledge
                </p>
                <p className="md:max-w-[430px]">
                  You don’t have to go to every meeting and be in every
                  conversation to be in the loop. The shared knowledge of your
                  whole company is out there, organized, and accessible when
                  (and if) you want it.
                </p>
                <button className="underline text-[#50519E]">Learn More</button>
              </div>
              <div className="mt-9 pt-8 border border-t-[#99999E] border-r-0 border-b-0 border-l-0 md:max-w-[380px]">
                <div className="flex items-start justify-between gap-3">
                  <Image src={clifford} alt="image of mark" />
                  <div>
                    <p className="italic">
                      “The fantastic thing about Slack is transparency. Everyone
                      can see what everyone else is working on and the status of
                      thing is much more visible.”
                    </p>
                    <p className="pt-3 font-bold">
                      Clifford Bailey, Ocado Technology{" "}
                      <span className="text-[#50519E] font-normal">
                        {" "}
                        - Read story
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="min-h-screen py-8">
        <div className="container py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
            <div className="text-[#272D40]">
              <div>
                <p className="">The hub all work</p>
                <p className="md:max-w-[360px] md:text-[32px] text-[25px] text-black font-bold">
                  We create world-class digital products materials that
                  communicate clearly.
                </p>
                <p className="md:max-w-[430px]">
                  If all the people are in Slack, and all your apps, resources
                  and tools are part of the conversation, you don’t have to put
                  in extra work to connect them. They’re just there, and youre
                  all on the same page, ready to go.
                </p>
                <button className="underline text-[#50519E]">Learn More</button>
              </div>
              <div className="mt-9 pt-8 border border-t-[#99999E] border-r-0 border-b-0 border-l-0 md:max-w-[380px]">
                <div className="flex items-start justify-between gap-3">
                  <Image src={nick} alt="image of mark" />
                  <div>
                    <p className="italic">
                      “Slack is not only great at connecting people, it’s great
                      at connect- ing the tools and systems we already have.”
                    </p>
                    <p className="pt-3 font-bold">
                      Nick Coronges, R/GA{" "}
                      <span className="text-[#50519E] font-normal">
                        {" "}
                        - Read story
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Image src={image5} alt="image 5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desc;
