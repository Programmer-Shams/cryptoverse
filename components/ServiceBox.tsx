import React from "react";

interface ServiceBoxProps {
  headerText: string;
  Ptext: string;
  Icon: React.ReactNode;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({ headerText, Ptext, Icon }) => {
  return (
    <div className="flex flex-col gap-5 w-[22rem] h-[28rem] border items-center p-8 rounded-xl shadow-lg bg-bg_primary">
      <p className="text-[4rem] text-text_secondary mt-2">{Icon}</p>
      <h2 className="text-text_color text-2xl font-semibold mt-2">
        {headerText}
      </h2>
      <p className=" text-base text-p_color text-center">{Ptext}</p>
    </div>
  );
};

export default ServiceBox;
