import ServiceBox from "@/components/ServiceBox";
import React from "react";
import { FaWallet } from "react-icons/fa";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const Services = () => {
  return (
    <section className="py-5 mt-12 flex flex-col gap-8">
      <div className=" flex flex-col items-center gap-5">
        <h2 className=" text-3xl font-semibold text-text_color">
          {" "}
          Our Services
        </h2>
        <p className=" text-text_color text-[17px] text-center">
          Discover the possibilities with Digitalbase Network. Dive into the
          world of cryptocurrencies with ease. <br /> Buy, trade, and explore a
          variety of digital assets
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 md:gap-20 md:flex-row mt-5">
        <ServiceBox
          headerText="Buy Crypto Assets"
          Ptext="Embark on your journey into the world of digital currencies. With Digitalbase Network, purchasing crypto 
          assets has never been easier. Experience seamless transactions and bid farewell to traditional barriers. Whether you're
           buying, selling, or trading, enjoy swift and hassle-free transactions with us."
          Icon={<FaWallet />}
        />
        <ServiceBox
          headerText="Sell Crypto Assets"
          Ptext="Sell Your Crypto Assets:

          Ready to liquidate your digital investments? Whether it's Bitcoin, Ethereum, Ripple, Cardano, or other 
          promising altcoins, unlock the power to sell with ease. Take control of your crypto portfolio and turn your digital assets into real-world value."
          Icon={<HiMiniShoppingBag />}
        />
        <ServiceBox
          headerText="24 Hours Transaction"
          Ptext="In the fast-paced world of cryptocurrencies, Digitalbase Network stands tall as a beacon of trust 
          and innovation, offering a 24-hour whirlwind of thrilling transactions to its dedicated investors."
          Icon={<VscWorkspaceTrusted />}
        />
      </div>
    </section>
  );
};

export default Services;
