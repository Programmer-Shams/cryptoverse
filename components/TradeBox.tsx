"use server";
import React from "react";
import Image from "next/image";
import { IconBaseProps } from "react-icons";

type TradeBoxProps = {
  step1: string;
  step2: string;
  stepIcon: React.ReactNode;
  Color: string;
  bgColor: string;
};

const TradeBox = ({
  step1,
  step2,
  stepIcon,
  Color,
  bgColor,
}: TradeBoxProps) => {
  return (
    <div className="bg-white flex flex-row gap-5 items-center p-5 w-[20rem] h-[10rem] border rounded-lg">
      <p
        style={{ color: Color, backgroundColor: bgColor }}
        className="p-5 border rounded-full text-2xl flex items-center justify-center"
      >
        {stepIcon}
      </p>
      <div>
        <h1 className="text-text_color font-semibold text-lg">{step1}</h1>
        <p className="text-p_color text-base md:text-sm">{step2}</p>
      </div>
    </div>
  );
};

export default TradeBox;
