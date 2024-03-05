import Image from "next/image";
import React from "react";

interface CardProps {
  header: string;
  text: string;
  name: string;
  loaction: string;
}

const Crad = ({ header, text, name, loaction }: CardProps) => {
  return (
    <div className="w-[24rem] md:w-[25rem] h-[18rem] px-10 py-5 flex flex-col gap-8 rounded-xl shadow-md bg-bg_primary">
      <div>
        <h1 className=" font-semibold text-xl md:text-base text-text_color">
          {header}
        </h1>
        <p className="text-sm mt-2 text-p_color">{text}</p>
      </div>
      <div className=" flex flex-row gap-2 items-center">
        <Image src="/assets/images/test.png" alt="img" width={50} height={50} />
        <div className=" flex flex-col">
          <h1 className=" font-semibold text-text_color">{name}</h1>
          <p className="text-sm text-p_color">{loaction}</p>
        </div>
      </div>
    </div>
  );
};

export default Crad;
