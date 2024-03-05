import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import FooteerCom from "./FooterComp";

const Footer = () => {
  return (
    <footer>
      <div className="mt-[10rem] flex flex-row items-center justify-center">
        <div className="flex flex-row justify-center relative">
          <Image
            src="/assets/images/frame.png"
            alt="Footer"
            width={1200}
            height={300}
            className="h-[328px]"
          />
          <div className="absolute mt-20 lg:-ml-[37rem] flex flex-col gap-10">
            <h1 className="text-4xl text-white font-semibold">
              Join a new generation <br /> of investors
            </h1>
            <Button className=" bg-white w-[8rem]">Get Started</Button>
          </div>
        </div>
        <div className="hidden md:block absolute lg:ml-[45rem]">
          <Image
            src="/assets/images/btc.png"
            alt="btn"
            width={140}
            height={50}
          />
          <Image
            src="/assets/images/eth.png"
            alt="btn"
            width={110}
            height={50}
            className="ml-24"
          />
          <Image
            src="/assets/images/luna.png"
            alt="btn"
            width={90}
            height={50}
            className="-mt-[50px]"
          />
        </div>
      </div>
      <div className="mt-10">
        <FooteerCom />
      </div>
    </footer>
  );
};

export default Footer;
