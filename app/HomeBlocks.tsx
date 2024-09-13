import Image from "next/image";
import arrowImage from "./assets/arrow.svg";
import arrowBlackImage from "./assets/arrowBlack.svg";
import flower1Image from "./assets/flower1.svg";
import flower2Image from "./assets/flower2.svg";
import githubImage from "./assets/github.png";
import portraitImage from "./assets/portrait.png";

const HomeBlocks = () => {
  const primaryBlock = "bg-[#8FB4C7] rounded-xl";
  const secondaryBlock = "bg-[#274244] rounded-xl";
  return (
    <div className="grid grid-cols-4">
      <div className="gap-5 col-span-3">
        <div className="flex flex-col">
          <div className="flex gap-5 mb-5 h-[476px]">
            <div className={`${primaryBlock} w-full h-full p-5 relative`}>
              <Image
                src={flower1Image}
                alt=""
                className="top-10 right-10 absolute animate-spin-slow"
              />
              <h1 className="bottom-16 absolute w-[70%] font-extrabold text-[56px]">
                Driven <span className="font-thin">Developer</span> Focused on
                Web Breakthroughs
              </h1>
            </div>
            <Image
              src={portraitImage}
              alt="my photo"
              width={330}
              height={476}
              className="mr-5"
            />
          </div>
          <div className="flex gap-5 h-[273px]">
            <div className={`${primaryBlock} w-full h-full relative p-5`}>
              <Image
                src={flower2Image}
                width={38}
                height={38}
                alt=""
                className="animate-spin-medium"
              />
              <p className="bottom-5 absolute w-[55%] text-lg">
                Bohdan Kondratsky is a full-stack web developer based in
                Wroclaw, Poland, who prefers remote work for its flexibility.
                Disciplined and adaptable, he sees coding as a form of magic,
                allowing him to create anything and positively impact others.
              </p>
            </div>
            <div
              className={`${secondaryBlock} w-full h-full mr-5 text-[#F9F1F0] p-5 relative cursor-pointer`}
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
          className={`${primaryBlock} h-[649px] flex flex-col text-[25px] font-bold p-5`}
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
        <div className={`${primaryBlock} h-[100px] p-5`}>
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
