"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import about1Image from "../../assets/about1.png";
import about2Image from "../../assets/about2.png";
import about3Image from "../../assets/about3.png";

const Page = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col mt-11 text-white">
      {/* First Block: Who I Am */}
      <div className="flex lg:flex-row flex-col justify-center lg:justify-between items-center gap-3 w-full text-center lg:text-left">
        <div>
          <h2
            className={`font-extrabold text-[40px] lg:text-[64px] transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            Who I am
          </h2>
          <p
            className={`max-w-full lg:max-w-[85%] font-[20px] transition-all duration-700 ease-out delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            I'm an <b className="text-lg text-lime-300">ambitious</b>,{" "}
            <b className="text-lg text-lime-300">curious</b>, and highly{" "}
            <b className="text-lg text-lime-300">adaptable</b> individual,
            always striving for knowledge. My approach to life and work is much
            like leveling up in an MMORPG — continuous growth, learning, and
            overcoming challenges. In my free time, I love hitting the{" "}
            <b className="text-lg text-lime-300">gym</b>, reading{" "}
            <b className="text-lg text-lime-300">light novels</b> that strive
            into character development, spending time with my{" "}
            <b className="text-lg text-lime-300">dog</b>, and playing some{" "}
            <b className="text-lg text-lime-300">competitive video games</b>.
          </p>
        </div>
        <Image
          src={about1Image}
          alt=""
          className={`transition-all duration-700 ease-out delay-300 ${
            isVisible
              ? "opacity-100 scale-100 translate-x-0"
              : "opacity-0 scale-90 translate-x-10"
          } lg:mt-0 mt-5`}
        />
      </div>

      {/* Second Block: Skills & Experience */}
      <div className="lg:text-right flex lg:flex-row-reverse flex-col justify-center lg:justify-between items-center gap-3 mt-5 w-full text-center">
        <div className="max-w-full lg:max-w-[60%]">
          <h2
            className={`font-extrabold text-[40px] lg:text-[64px] transition-all duration-700 ease-out delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            Skills & Experience
          </h2>
          <p
            className={`mx-11 lg:mx-0 font-[20px] transition-all duration-700 ease-out delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            I have solid experience working with{" "}
            <b className="text-lg text-pink-300">
              JavaScript, TypeScript, React, Next.js, Node.js, Express.js, Go,
              and Python.
            </b>{" "}
            My most significant project was{" "}
            <b className="text-lg text-pink-300">KI Recruitment</b>, where I
            worked as a{" "}
            <b className="text-lg text-pink-300">full-stack developer</b> using
            Next.js and Prisma for{" "}
            <b className="text-lg text-pink-300">4 months.</b> It was an
            incredible learning experience that pushed my skills forward. I left
            the project to focus on expanding my{" "}
            <b className="text-lg text-pink-300">knowledge</b> and finding new
            opportunities, always believing that, just like in coding, anything
            is possible with enough{" "}
            <b className="text-lg text-pink-300">effort</b> and{" "}
            <b className="text-lg text-pink-300">persistence</b>.
          </p>
        </div>
        <Image
          src={about2Image}
          alt=""
          className={`transition-all duration-700 ease-out delay-500 ${
            isVisible
              ? "opacity-100 scale-100 translate-x-0"
              : "opacity-0 scale-90 translate-x-10"
          } lg:mt-0 mt-5`}
        />
      </div>

      {/* Third Block: Vision & Goals */}
      <div className="flex lg:flex-row flex-col justify-center lg:justify-between items-center gap-3 mt-5 w-full text-center lg:text-left">
        <div>
          <h2
            className={`font-extrabold text-[40px] lg:text-[64px] transition-all duration-700 ease-out delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            Vision & Goals
          </h2>
          <p
            className={`mx-11 lg:mx-0 lg:max-w-[85%] font-[20px] transition-all duration-700 ease-out delay-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            My next milestone is to become a{" "}
            <b className="text-blue-300 text-lg">
              proficient, independent developer
            </b>{" "}
            and transition to working{" "}
            <b className="text-blue-300 text-lg">remotely</b>. I focus on{" "}
            <b className="text-blue-300 text-lg">creativity</b>, using
            development as a way to continuously{" "}
            <b className="text-blue-300 text-lg">improve</b> myself. I aim to{" "}
            <b className="text-blue-300 text-lg">innovate</b> and create{" "}
            <b className="text-blue-300 text-lg">meaningful solutions</b> that
            contribute to growth — both for myself and the world around me.
          </p>
        </div>
        <Image
          src={about3Image}
          alt=""
          className={`transition-all duration-700 ease-out delay-700 ${
            isVisible
              ? "opacity-100 scale-100 translate-x-0"
              : "opacity-0 scale-90 translate-x-10"
          } lg:mt-0 mt-5`}
        />
      </div>
    </div>
  );
};

export default Page;
