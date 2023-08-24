import {
  FAQ,
  Footer,
  HeaderTwo,
  Navbar,
  Newsletter,
  Solutions,
  Testimonials,
} from "@/components";

import React from "react";

const page = () => {
  return (
    <main className="bg-white w-full">
      <Navbar />
      <div className="md:pt-32 pt-20"></div>
      <HeaderTwo />
      <Solutions />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default page;
