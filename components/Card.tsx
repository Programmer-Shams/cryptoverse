import React from "react";
import { IoMdCheckmark } from "react-icons/io";
type investProps = {
  header: string;
  text: string;
};
const Card = ({ header, text }: investProps) => {
  return (
    <div className="flex gap-2">
      <IoMdCheckmark className="text-text_secondary font-extrabold text-5xl md:text-3xl -mt-3 md:mt-0" />
      <p className="text-p_color text-[15px]">
        <span className="font-semibold text-base text-text_color">
          {header}
        </span>{" "}
        {""}
        {text}
      </p>
    </div>
  );
};

export default Card;
