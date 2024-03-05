import CardTwo from "@/components/Reason";
import Image from "next/image";
import React from "react";
import { Card } from "@/components/ui/card";

// const Why = () => {
//   return (
//     <div className="flex flex-col py-5 mt-5  md:flex-row gap-[4rem] md:gap-[10rem] items-center h-screen">
//       <div className="">
//         <Image src="/assets/images/left.png" alt="" width={550} height={750} />
//       </div>
//       <div className="text-center md:text-left">
//         <p className="text-text_secondary text-xl font-bold mb-1 md:text-xl">
//           Dynamic Trading
//         </p>
//         <h1 className="text-2xl md:text-3xl font-semibold py-3 md:w-[30rem] text-text_color">
//           Why Choose Dynamic!
//         </h1>
//         <p className="text-base text-p_color mt-2">
//           Our platform offers seamless transactions, robust security measures,{" "}
//           <br />
//           and cutting-edge tools to empower users in their cryptocurrency
//           journey.
//         </p>
//         <div className="flex gap-5 mt-5 ">
//           <div className=" flex flex-col gap-2 md:gap-4">
//             <CardTwo text="Safty Comes First" />
//             <CardTwo text="Bonus & Referal" />
//             <CardTwo text="Low Charges" />
//           </div>
//           <div className=" flex flex-col gap-2 md:gap-4">
//             <CardTwo text="Fast Transaction" />
//             <CardTwo text="Easy Deposite & Withdrawls" />
//             <CardTwo text="24/7 Support" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Why;

export default function Why() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-text_color">
            Why Choose Crypto Brains!
          </h2>
          <p className="text-lg">
            Lorem Ipsum has been the industry's standard dummy text ever since
            1500s.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-[#e6f0ff] shadow-lg rounded-lg p-10">
            <TimerIcon className="text-[#007bff] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-text_color">
              Fast Service
            </h3>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </Card>
          <Card className="bg-[#e6f0ff] shadow-lg rounded-lg p-10">
            <WalletIcon className="text-[#ff416c] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-text_color">
              Add Fund in Wallet
            </h3>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </Card>
          <Card className="bg-[#e6f0ff] shadow-lg rounded-lg p-10">
            <CloudLightningIcon className="text-[#ffc107] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-text_color">
              Easy Trading
            </h3>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </Card>
          <Card className="bg-[#e6f0ff] shadow-lg rounded-lg p-10">
            <HeadphonesIcon className="text-[#17a2b8] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-text_color">
              24/7 Help Service
            </h3>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

function CloudLightningIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
      <path d="m13 12-3 5h4l-3 5" />
    </svg>
  );
}

function HeadphonesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  );
}

function TimerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="14" y1="2" y2="2" />
      <line x1="12" x2="15" y1="14" y2="11" />
      <circle cx="12" cy="14" r="8" />
    </svg>
  );
}

function WalletIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
    </svg>
  );
}
