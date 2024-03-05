import { IoCheckmarkCircle } from "react-icons/io5";
type investProps = {
  text: string;
};

const CardTwo = ({ text }: investProps) => {
  return (
    <div className="flex gap-2">
      <IoCheckmarkCircle className="text-text_secondary font-bold text-2xl md:text-2xl" />
      <p className="text-text_color text-[15px] font-semibold">{text}</p>
    </div>
  );
};

export default CardTwo;
