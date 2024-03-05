import Image from "next/image";
import Link from "next/link";

export default function FooteerCom() {
  return (
    <footer className=" bg-bg_primary py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="w-36">
              <Image
                src="/assets/images/logo.png"
                width={128}
                height={38}
                alt="logo"
              />
            </Link>
            <p className="mt-2 text-sm text-gray-600">
              Take your crypto to the next level
            </p>
            <div className="flex mt-4 space-x-4">
              <FacebookIcon className="text-gray-600" />
              <TwitterIcon className="text-gray-600" />
              <InstagramIcon className="text-gray-600" />
              <LinkedinIcon className="text-gray-600" />
              <YoutubeIcon className="text-gray-600" />
            </div>
          </div>
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-900">Company</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link className="text-sm text-gray-600" href="#">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-600" href="#">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-600" href="#">
                  Careers
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-600" href="#">
                  Student
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-600" href="#">
                  Security
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-600" href="#">
                  Trust and Safety
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-600" href="#">
                  Newsroom
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-600" href="#">
                  Videos
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-900">Learn</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link className="text-sm text-gray-600" href="#">
                  What's Trending
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-600" href="#">
                  Product News
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-600" href="#">
                  Events
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-600" href="#">
                  University
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-600" href="#">
                  Research
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-600" href="#">
                  Market Updates
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-900">Products</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link className="text-sm text-gray-600" href="#">
                  Stock & Fund
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-600" href="#">
                  Cash Card
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-600" href="#">
                  Crypto
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-600" href="#">
                  Options
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-600" href="#">
                  Gold
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-600" href="#">
                  Learn Snacks
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-auto">
            <h3 className="text-lg font-semibold text-gray-900">Support</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link className="text-sm text-gray-600" href="#">
                  Support Center
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-600" href="#">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-600" href="#">
                  System Status
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-600" href="#">
                  Areas of Availability
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-auto">
            <h3 className="text-lg font-semibold text-gray-900">Resources</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link className="text-sm text-gray-600" href="#">
                  Prices
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-600" href="#">
                  Site Widgets
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-600" href="#">
                  Tax
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-600" href="#">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-sm text-gray-600">
          © Design by Diya’ Zarror Nibros. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
