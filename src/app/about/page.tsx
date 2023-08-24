import React from "react";
import {
  CountUp,
  Footer,
  HeaderThree,
  Info,
  Navbar,
  Newsletter,
  Partners,
  Team,
} from "../../components";

const page = () => {
  return (
    <main className="bg-white w-full">
      <Navbar />
      <div className="md:pt-16 pt-10"></div>
      <HeaderThree />
      <Info />
      <Team />
      <CountUp />
      <Partners />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default page;
