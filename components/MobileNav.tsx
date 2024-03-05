"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

import NavItems from "./NavItems";
import { Separator } from "@radix-ui/react-separator";
import { HiMenuAlt3 } from "react-icons/hi";
import { Button } from "./ui/button";
import Link from "next/link";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle text-4xl text-text_color">
          <HiMenuAlt3 />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={128}
            height={38}
          />
          <Separator className="border border-gray-50" />
          <NavItems />
          <Button
            asChild
            className="rounded-lg px-6 bg-bg_secondary text-white"
            size="sm"
          >
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button
            asChild
            className="rounded-lg px-6 bg-white border border-blue-700 hover:bg-blue-700 hover:text-white"
            size="sm"
          >
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
