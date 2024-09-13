"use client";

import { useEffect, useState } from "react";

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsNavbarVisible(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex justify-between items-center bg-[#8FB4C7] mb-5 p-8 rounded-xl w-full h-[100px] transition-transform duration-700 ease-out ${
        isNavbarVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <h2
        className={`font-thin text-[25px] transition-all duration-700 ease-out delay-[300ms] ${
          isNavbarVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[-20px]"
        }`}
      >
        BOHDAN{" "}
        <span className="font-gilroyBold cursor-poiner">KONDRATSKYI</span>
      </h2>
      <ul className="flex items-center gap-14 text-xl">
        <li
          className={`transition-all duration-700 ease-out delay-[400ms] cursor-pointer ${
            isNavbarVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[-20px]"
          }`}
        >
          PROJECTS
        </li>
        <li
          className={`transition-all duration-700 ease-out delay-[500ms] cursor-pointer ${
            isNavbarVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[-20px]"
          }`}
        >
          ABOUT
        </li>
        <li
          className={`transition-all duration-700 ease-out delay-[600ms] cursor-pointer ${
            isNavbarVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[-20px]"
          }`}
        >
          CONTACT
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
