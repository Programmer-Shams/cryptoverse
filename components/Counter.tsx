import React from "react";

const Counter = () => {
  return (
    <div className="flex md:justify-around flex-col md:flex-row bg-bg_primary p-5 py-12 md:py-8 items-center rounded-lg gap-20">
      <div className="">
        <h1 className="text-6xl text-text_color">99k</h1>
        <p className="text-p_color font-semibold mt-2">User Registered</p>
      </div>
      <div>
        <h1 className="text-6xl text-text_color">$200M+</h1>
        <p className="text-p_color font-semibold text-center mt-2">
          Crypto Invested
        </p>
      </div>
      <div>
        <h1 className="text-6xl text-text_color">$500 M+</h1>
        <p className="text-p_color font-semibold text-center mt-2">
          Crypto Purchased
        </p>
      </div>
    </div>
  );
};

export default Counter;
