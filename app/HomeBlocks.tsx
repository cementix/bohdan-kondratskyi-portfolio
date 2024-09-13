"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import arrowImage from "./assets/arrow.svg";
import arrowBlackImage from "./assets/arrowBlack.svg";
import flower1Image from "./assets/flower1.svg";
import flower2Image from "./assets/flower2.svg";
import githubImage from "./assets/github.png";
import portraitImage from "./assets/portrait.png";

const HomeBlocks = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [isMoved, setIsMoved] = useState(false);
  const [isBlockVisible, setIsBlockVisible] = useState(false);

  useEffect(() => {
    const shrinkTimer = setTimeout(() => {
      setIsShrunk(true);
    }, 200);

    const moveTimer = setTimeout(() => {
      setIsMoved(true);
    }, 1200);

    const blockTimer = setTimeout(() => {
      setIsBlockVisible(true);
    }, 1400);

    return () => {
      clearTimeout(shrinkTimer);
      clearTimeout(moveTimer);
      clearTimeout(blockTimer);
    };
  }, []);

  const primaryBlock = "bg-[#8FB4C7] rounded-xl";
  const secondaryBlock = "bg-[#274244] rounded-xl";

  return (
    <div className="grid grid-cols-4 overflow-hidden">
      <div className="gap-5 col-span-3">
        <div className="flex flex-col">
          <div className="flex gap-5 mb-5 h-[476px]">
            <div
              className={`${primaryBlock} w-full delay-300 h-full p-5 relative transition-transform duration-700 ease-out ${
                isBlockVisible
                  ? "scale-100 translate-x-0 translate-y-0 opacity-100 ease-out"
                  : "scale-0 translate-x-[50%]  opacity-0"
              }`}
            >
              <Image
                src={flower1Image}
                alt=""
                className={`top-10 right-10 absolute animate-spin-slow transition-opacity duration-1000 delay-700 ease-out ${
                  isBlockVisible ? "opacity-100" : "opacity-0"
                }`}
              />

              <h1
                className={`bottom-16 absolute w-[70%] font-extrabold text-[56px] transition-all duration-500 ease-out delay-[580ms] ${
                  isBlockVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                Driven <span className="font-thin">Developer</span> Focused on
                Web Breakthroughs
              </h1>
            </div>

            <Image
              src={portraitImage}
              alt="my photo"
              width={330}
              height={476}
              className={`mr-5 transition-transform ease-out ${
                isShrunk ? "scale-100 duration-1000" : "scale-[1.2]"
              } ${
                isMoved
                  ? "translate-x-0 translate-y-0 duration-[1500] ease-in"
                  : "translate-x-[-80%] translate-y-[20%]"
              }`}
            />
          </div>
          <div className="flex gap-5 h-[273px]">
            <div
              className={`${primaryBlock} w-full h-full relative p-5 delay-150 transition-transform duration-700 ease-out ${
                isBlockVisible
                  ? "scale-100 translate-x-0 translate-y-0 opacity-100"
                  : "scale-0 translate-x-[-50%] translate-y-[-50%] opacity-0"
              }`}
            >
              <Image
                src={flower2Image}
                width={38}
                height={38}
                alt=""
                className={`transition-opacity duration-700 delay-[300ms] ease-out ${
                  isBlockVisible ? "opacity-100" : "opacity-0"
                } animate-spin-medium`}
              />
              <p className="bottom-5 absolute w-[55%] text-md">
                <span
                  className={`block transition-all duration-500 delay-[800ms] ${
                    isBlockVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  Bohdan Kondratsky is a full-stack web developer
                </span>
                <span
                  className={`block transition-all duration-500 delay-[900ms] ${
                    isBlockVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  based in Wroclaw, Poland, who prefers remote
                </span>
                <span
                  className={`block transition-all duration-500 delay-[1000ms] ${
                    isBlockVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  work for its flexibility. Disciplined and adaptable,
                </span>
                <span
                  className={`block transition-all duration-500 delay-[1100ms] ${
                    isBlockVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  he sees coding as a form of magic,
                </span>
                <span
                  className={`block transition-all duration-500 delay-[1200ms] ${
                    isBlockVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  allowing him to create anything and positively impact others.
                </span>
              </p>
            </div>

            <div
              className={`${secondaryBlock} w-full h-full mr-5 text-[#F9F1F0] p-5 relative cursor-pointer transition-transform duration-700 ease-out ${
                isBlockVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-[200%] opacity-0"
              }`}
            >
              <div className="flex justify-between w-full">
                <p className="w-[100px]">Have some questions?</p>
                <Image src={arrowImage} alt="" />
              </div>
              <h2 className="bottom-5 absolute font-extrabold text-[64px]">
                Contact me
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 col-span-1">
        <div
          className={`${primaryBlock} h-[649px] flex flex-col text-[25px] font-bold p-5 transition-transform duration-700 ease-out ${
            isBlockVisible
              ? "scale-100 translate-x-0 translate-y-0 opacity-100"
              : "scale-0 translate-x-[-50%] translate-y-[20%] opacity-0"
          }`}
        >
          <div className="flex justify-between items-center mb-2 w-full">
            <p>GitHub</p>
            <Image src={arrowBlackImage} alt="" />
          </div>
          <Image src={githubImage} alt="" className="rounded-xl" height={293} />
          <hr className="border-[#274244] mt-5 mb-5 border-t-[3px] rounded-xl" />
          <p className="cursor-pointer">LeetCode</p>
          <hr className="border-[#274244] mt-5 mb-5 border-t-[3px] rounded-xl" />
          <p className="cursor-pointer">CodeWars</p>
          <hr className="border-[#274244] mt-5 mb-5 border-t-[3px] rounded-xl" />
          <p className="cursor-pointer">Curriculum Vitae</p>
        </div>

        <div
          className={`${primaryBlock} h-[100px] p-5 transition-transform delay-100 duration-700 ease-out ${
            isBlockVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <div className="flex justify-center items-center gap-20 w-full h-full">
            <p className="cursor-pointer">INSTAGRAM</p>
            <p className="cursor-pointer">TELEGRAM</p>
            <p className="cursor-pointer">LINKEDIN</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlocks;
