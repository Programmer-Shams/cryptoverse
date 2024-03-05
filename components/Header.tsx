import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full px-10 py-5 bg-bg_primary fixed z-10">
      <div className="flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.png"
            width={128}
            height={38}
            alt="logo"
          />
        </Link>
        <nav className="md:flex-between hidden md:block -ml-[8.5rem]  w-full max-w-xs">
          <NavItems />
        </nav>

        <div className="flex w-32 justify-end gap-3">
          <MobileNav />
          <Button
            asChild
            className="rounded-lg px-6 bg-bg_secondary text-white hidden md:block"
          >
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button
            asChild
            className="rounded-lg px-6 bg-white border border-blue-700 hover:bg-blue-700 hover:text-white hidden md:block"
          >
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
