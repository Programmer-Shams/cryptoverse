import TradeBox from "@/components/TradeBox";
import { Button } from "@/components/ui/button";
import { FaUserCheck } from "react-icons/fa6";
import { BsBank2 } from "react-icons/bs";
import { FaWallet } from "react-icons/fa6";
import { TbChartCandleFilled } from "react-icons/tb";

const Starter = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className=" mt-5 text-center w-full md:text-left">
        <p className="text-text_secondary text-xl font-bold mb-2 md:text-xl">
          Dynamic Trading
        </p>
        <h1
          className="text-2xl md:text-3xl font-semibold py-2 md:w-[15rem] text-text_color"
          style={{ letterSpacing: "2px", lineHeight: "1.3" }}
        >
          Start Trading In Few Steps
        </h1>
        <Button className="bg-bg_secondary text-white w-[8rem] rounded-xl mt-5 md:mt-16 hover:bg-white hover:text-text_secondary hover:border hover:border-bg_secondary">
          Start Trading
        </Button>
      </div>

      <div
        className="mt-8 flex flex-col md:flex-row gap-14 md:gap-5"
        // style={{ background: "radial-gradient(#FDF3EB, #FFFFFF)" }}
      >
        <div className="flex flex-col gap-5">
          <TradeBox
            step1="Create Account"
            step2="Create an account on our platform"
            stepIcon={<FaUserCheck />}
            Color="#24A1FF"
            bgColor="#F3F9FF"
          />
          <TradeBox
            step1="Verify Your Bank"
            step2="Verify Your Bank Account In Few Steps"
            stepIcon={<BsBank2 />}
            Color="#B391FF"
            bgColor="#FDF2FF"
          />
        </div>
        <div className="flex flex-col gap-5 -mt-10">
          <TradeBox
            step1="Add Funds In Wallet"
            step2="Quickly Add Money To Your Investment Wallet"
            stepIcon={<FaWallet />}
            Color="#FF5768"
            bgColor="#FFF2F3"
          />
          <TradeBox
            step1="Start Trading Instantly"
            step2="Buy And Sell Variety Of Top Coins At Best Rates"
            stepIcon={<TbChartCandleFilled />}
            Color="#FFBE3D"
            bgColor="#FDFEE4"
          />
        </div>
      </div>
    </div>
  );
};

export default Starter;
