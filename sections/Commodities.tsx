import CommodyBox from "@/components/CommodyBox";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { AiFillGolden } from "react-icons/ai";
import { FaBitcoin } from "react-icons/fa6";
import { SiGoldenline } from "react-icons/si";

const Commodities = () => {
  return (
    <div className="flex flex-col gap-5 items-center border rounded-2xl py-10">
      <div className="bg-bg_secondary rounded-3xl p-5 flex flex-col md:flex-row gap-8 justify-between px-20 mx-5 lg:w-[75rem]">
        <Image
          src="/assets/images/girl.png"
          alt="commodities"
          width={280}
          height={220}
          className=" -mt-8"
        />
        <div className="flex flex-col gap-8 items-center justify-center">
          <h1 className=" text-white text-2xl md:text-5xl text-center font-semibold">
            Invest Today <br /> Own Tomorrow
          </h1>
          <Button className="bg-white rounded-xl px-10">Get Started</Button>
        </div>
      </div>
      <div className="lg:w-[75rem] flex flex-col md:flex-row gap-12 md:gap-8 justify-center">
        <CommodyBox
          Text="Crypto Bundles"
          Icon={<SiGoldenline />}
          text2="Auto-updating crypto portfolios"
        />
        <CommodyBox
          Text="Cryptocurrencies"
          Icon={<FaBitcoin />}
          text2="Buy, sell, and store your crypto 24/7/365"
        />
        <CommodyBox
          Text="Commodities"
          Icon={<AiFillGolden />}
          text2="Hedge against inflation and volatility"
        />
      </div>
    </div>
  );
};

export default Commodities;
