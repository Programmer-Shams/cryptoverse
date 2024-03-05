import Image from "next/image";
import React from "react";

import { CardContent, Card } from "@/components/ui/card";

const Management = () => {
  return (
    <div className="">
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between gap-[10rem]">
        <div className="lg:w-1/2">
          <Image
            src="/assets/images/portfolio.png"
            alt="Management"
            width={500}
            height={500}
          />
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <h1 className="text-5xl font-bold">
            Manage Your{" "}
            <span className=" text-text_secondary">Cryptocurrency</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Diversifying your crypto portfolio is a fundamental principle of
            risk management. Pass-FolioTrades X offers a wide range of
            cryptocurrencies for trading. Consider allocating your investments
            across different assets to mitigate risks and maximize potential
            returns.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Card className="bg-blue-100 py-4">
              <CardContent>
                <WalletIcon className="text-blue-600 h-6 w-6" />
                <h3 className="mt-2 font-semibold">Manage Crypto</h3>
                <p className="text-sm text-gray-600">
                  Digital assets Network provide user-friendly interfaces for
                  managing your crypto.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-blue-100 py-4">
              <CardContent>
                <SmartphoneIcon className="text-blue-600 h-6 w-6" />
                <h3 className="mt-2 font-semibold">Mobile Apps</h3>
                <p className="text-sm text-gray-600">
                  Mobile app allows you to access your account anytime
                </p>
              </CardContent>
            </Card>
            <Card className="bg-blue-100 py-4">
              <CardContent>
                <BuildingIcon className="text-blue-600 h-6 w-6" />
                <h3 className="mt-2 font-semibold">Capital Market</h3>
                <p className="text-sm text-gray-600">
                  Digital assets Network has a significant impact on the capital
                  markets.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;

function BuildingIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

// function CurvedlineChart(props) {
//   return (
//     <div {...props}>
//       <ResponsiveLine
//         data={[
//           {
//             id: "Desktop",
//             data: [
//               { x: "Jan", y: 43 },
//               { x: "Feb", y: 137 },
//               { x: "Mar", y: 61 },
//               { x: "Apr", y: 145 },
//               { x: "May", y: 26 },
//               { x: "Jun", y: 154 },
//             ],
//           },
//           {
//             id: "Mobile",
//             data: [
//               { x: "Jan", y: 60 },
//               { x: "Feb", y: 48 },
//               { x: "Mar", y: 177 },
//               { x: "Apr", y: 78 },
//               { x: "May", y: 96 },
//               { x: "Jun", y: 204 },
//             ],
//           },
//         ]}
//         margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
//         xScale={{
//           type: "point",
//         }}
//         yScale={{
//           type: "linear",
//           min: 0,
//           max: "auto",
//         }}
//         curve="monotoneX"
//         axisTop={null}
//         axisRight={null}
//         axisBottom={{
//           tickSize: 0,
//           tickPadding: 16,
//         }}
//         axisLeft={{
//           tickSize: 0,
//           tickValues: 5,
//           tickPadding: 16,
//         }}
//         colors={["#2563eb", "#e11d48"]}
//         pointSize={6}
//         useMesh={true}
//         gridYValues={6}
//         theme={{
//           tooltip: {
//             chip: {
//               borderRadius: "9999px",
//             },
//             container: {
//               fontSize: "12px",
//               textTransform: "capitalize",
//               borderRadius: "6px",
//             },
//           },
//           grid: {
//             line: {
//               stroke: "#f3f4f6",
//             },
//           },
//         }}
//         role="application"
//       />
//     </div>
//   )
// }

function SmartphoneIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
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
