import Card from "@/components/Card";
import Image from "next/image";

const Investment = () => {
  return (
    <div className="flex flex-col py-5 mt-5  md:flex-row gap-[4rem] md:gap-[8rem] items-center h-screen">
      <div className="">
        <Image src="/assets/images/left.png" alt="" width={550} height={650} />
      </div>

      <div>
        <p className="text-text_secondary text-xl font-bold mb-2 md:text-xl">
          Dynamic Trading
        </p>
        <h1 className="text-2xl md:text-3xl font-semibold py-3 md:w-[30rem] text-text_color">
          Trading And Investment Solution Built In Morden Platform.
        </h1>
        <div className="flex flex-col gap-10 mt-6 md:w-[37rem]">
          <Card
            header="Fundamental Research"
            text="Buy and sell popular digital currencies, keep track of them in the one place.
             Has a variety of features that make it the best place to start trading"
          />
          <Card
            header="Trading Ideas And Reports"
            text="Buy and sell popular digital currencies, keep track of them in the one place.
             Has a variety of features that make it the best place to start trading"
          />
          <Card
            header="knowledge Center"
            text="Buy and sell popular digital currencies, keep track of them in the one place.
             Has a variety of features that make it the best place to start trading"
          />
        </div>
      </div>
    </div>
  );
};

export default Investment;
