import React from "react";
import { Button } from "./ui/button";

interface BoxProps {
  Text: string;
  Icon: React.ReactNode;
  text2: string;
}

const CommodyBox = ({ Text, Icon, text2 }: BoxProps) => {
  return (
    <div className="w-[20rem] h-[15rem] flex flex-col gap-12 items-center border-b md:border-none">
      <div className="flex flex-col items-center gap-5">
        <p className="text-5xl text-text_secondary">{Icon}</p>
        <h1 className="text-text_color text-xl ">{Text}</h1>
        <p className="text-p_color text-[17px] text-center">{text2}</p>
      </div>
      <Button className=" bg-bg_secondary rounded-2xl text-white px-5 hover:bg-white hover:text-text_secondary hover:border border-text_secondary">
        Learn More
      </Button>
    </div>
  );
};

export default CommodyBox;
