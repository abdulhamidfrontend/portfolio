import React from "react";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="left">
          <h1 className="text-[36px] font-bold">Hello Sir !</h1>
          <h1 className="text-[36px]  font-bold mt-6 mb-15">
            I`m{" "}
            <span className="text-violet-500">
              XAMIDULLAYEV <br /> ABDULHAMID
            </span>
          </h1>

          <h3 className="">
            <TypingAnimation loop duration={100} className="text-white">
              FRONTEND DEVELOPER
            </TypingAnimation>
          </h3>
          <div className="flex mt-15 flex-col">
            <h1>LINKS TO FIND ME</h1>
            <div className="icons mt-5 flex items-center gap-5">
              <Link
                href={
                  "https://www.instagram.com/abbbbbbbbb01?igsh=MWMyeTY2Z3hhZXlqZg%3D%3D&utm_source=qr"
                }
              >
                <button className="border hover:scale-[1.100] transition duration-300  hover:shadow-[0_0_50px_1px_white] rounded-full flex items-center justify-center bg-white text-[#12122d] w-10 h-10">
                  <FaInstagram />
                </button>
              </Link>
              <Link href="mailto:khamidullayew@gmail.com">
                <button className="border hover:scale-[1.100] transition duration-300  hover:shadow-[0_0_50px_1px_white] rounded-full flex items-center justify-center bg-white text-[#12122d] w-10 h-10">
                  <BiLogoGmail />
                </button>
              </Link>
              <Link href="https://github.com/abdulhamid97">
                <button className="border hover:scale-[1.100] transition duration-300  hover:shadow-[0_0_50px_1px_white] rounded-full flex items-center justify-center bg-white text-[#12122d] w-10 h-10">
                  <FaGithub />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="right">
          <img src="../../assets/avatar.png" alt="ava" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
