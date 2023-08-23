import { FAQ, Footer, HeaderTwo, Navbar, Solutions } from "@/components";

import React from "react";

const page = () => {
  return (
    <main className="bg-white w-full">
      <Navbar />
      <div className="md:pt-16 pt-10 "></div>
      <HeaderTwo />
      <Solutions />
      <FAQ />
      <Footer />
    </main>
  );
};

export default page;
