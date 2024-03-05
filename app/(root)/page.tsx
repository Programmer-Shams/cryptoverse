import Commodities from "@/sections/Commodities";
import Hero from "@/sections/Hero";
import Investment from "@/sections/Investment";
import Management from "@/sections/Management";
import Services from "@/sections/Services";
import Starter from "@/sections/Starter";
import Testimonial from "@/sections/Testimonial";
import Why from "@/sections/Why";
import React from "react";

const Home = () => {
  return (
    <div>
      <section className="h-[58rem] md:h-[45rem] px-5 md:px-10">
        <Hero />
      </section>
      <section className="bg-bg_primary px-5 md:px-10">
        <Management />
      </section>
      <section className="py-10">
        <Services />
      </section>
      <section className="px-5 md:px-10 bg-bg_primary h-[68rem] md:h-[50rem]">
        <Investment />
      </section>
      <section className="px-5 md:px-10 bg-white h-[80rem] md:h-[34rem]">
        <Why />
      </section>
      {/* <section className="h-[58rem] md:h-[35rem] px-5 md:px-10 bg-bg_primary">
        <Starter />
      </section> */}
      <section className="bg-bg_primary px-5 md:px-10">
        <Commodities />
      </section>
      <section className="px-5 md:px-10">
        <Testimonial />
      </section>
    </div>
  );
};

export default Home;
