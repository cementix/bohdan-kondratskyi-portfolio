"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // Импорт компонентов Sheet из ShadCN
import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import ContactDialog from "./components/shared/ContactDialog";

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsNavbarVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ContactDialog
        isContactOpen={isContactOpen}
        setIsContactOpen={setIsContactOpen}
      />
      <div
        className={`flex justify-between items-center bg-[#E2E5D8] mb-5 p-8 rounded-xl w-full h-[100px] transition-transform duration-1000 ease-out ${
          isNavbarVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <Link
          href="/"
          className={`font-thin text-[15px] xs:text-[19px] md:text-[25px] transition-all duration-700 ease-out text-nowrap delay-[300ms] ${
            isNavbarVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[-40px]"
          }`}
        >
          BOHDAN{" "}
          <span className="font-gilroyBold cursor-pointer">KONDRATSKYI</span>
        </Link>

        <ul className="md:flex items-center gap-4 lg:gap-14 hidden text-xl">
          <Link
            href="/experience"
            className={`transition-all duration-700 ease-out delay-[400ms] cursor-pointer ${
              isNavbarVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[-40px]"
            }`}
          >
            EXPERIENCE
          </Link>
          <Link
            href="/about"
            className={`transition-all duration-700 ease-out delay-[500ms] cursor-pointer ${
              isNavbarVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[-40px]"
            }`}
          >
            ABOUT
          </Link>
          <li
            className={`transition-all duration-700 ease-out delay-[600ms] cursor-pointer ${
              isNavbarVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[-40px]"
            }`}
            onClick={() => setIsContactOpen(true)}
          >
            CONTACT
          </li>
        </ul>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="font-bold text-xl focus:outline-none"
                aria-label="Open menu"
              >
                <Menu />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#E2E5D8]">
              <div className="flex flex-col gap-6 p-6 font-bold text-3xl">
                <Link href="/experience">EXPERIENCE</Link>
                <Link href="/about">ABOUT</Link>
                <Link href="/contact">CONTACT</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};

export default Navbar;
