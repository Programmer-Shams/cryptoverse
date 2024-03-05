import { Button } from "@/components/ui/button";
import { FeaturedCompanies } from "@/constants";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col items-center py-5 mt-[5rem] md:flex-row gap-10">
        <div>
          <div>
            <p className="text-text_secondary text-xl font-bold mb-4 md:text-3xl">
              Dynamic Trading
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold py-3 md:w-[40rem] text-text_color">
              Start Trading In Crypto <span className="">Instant</span>
            </h1>
            <p className="text-base text-p_color md:text-[16px] md:w-[35rem] ">
              Join World's Biggest And Trusted Exchange. Trade In Bitcoin,
              Ethereum, Ripple And Many More Currencies. <br /> <br />
              Digitalbase Network stands as a catalyst for empowering investors
              with the knowledge and tools needed to thrive in the world of
              crypto.
            </p>
          </div>
          <div className="mt-5 md:mt-20 flex flex-col gap-4 md:flex-row w-full items-center">
            <Button className="bg-bg_secondary w-[22rem] md:w-[8rem] text-white rounded-xl">
              Start Trading
            </Button>
            <Button className="w-[22rem] md:w-[8rem] border border-bg_secondary rounded-xl hover:bg-bg_secondary hover:text-white">
              Download App
            </Button>
          </div>
        </div>
        <div className="flex items-center md:h-[40rem]">
          <Image
            src="/assets/images/right.png"
            alt=""
            width={550}
            height={650}
          />
        </div>
      </div>

      <div className="hidden md:blockmt-5">
        <p className="text-center md:text-left text-text_color text-xl font-semibold md:-mt-40">
          Featured Companies
        </p>
        <div className=" flex flex-wrap items-center gap-4 justify-center mt-5  md:justify-start md:gap-6">
          {FeaturedCompanies.map((item) => (
            <Image
              src={item.logo}
              alt={item.name}
              width={95}
              height={100}
              key={item.name}
              className=" h-[23px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
