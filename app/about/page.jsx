import React from "react";
import Navbar from "@/app/Global/Navbar/page";
import Footer from "@/app/Global/Footer/page";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiNextdotjs,
  SiAntdesign,
  SiVercel,
  SiNetlify,
  SiMagic,
} from "react-icons/si";

const About = () => {
  return (
    <div className="max-w-[90%] mx-auto px-4">
      <Navbar />

      <section className="mt-20 mb-20 text-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent mb-8">
          Know Who I Am
        </h1>

        <p className="text-xl text-gray-300 mb-6 leading-relaxed">
          Hello, I'm{" "}
          <span className="font-semibold text-violet-400">
            Xamidullayev Abdulhamid
          </span>
          , a passionate web developer from Namangan, Uzbekistan.
        </p>

        <p className="text-lg text-gray-400 mb-6 leading-relaxed">
          I study as Frontend Developer at Najot Ta'lim, where I focus on
          building clean, efficient, and user-friendly interfaces. <br /> I love
          turning ideas into reality using code.
        </p>

        <p className="text-lg text-gray-400 mb-6 leading-relaxed">
          Besides coding, I'm also interested in exploring other areas of
          creativity and learning.
        </p>

        <div className="bg-gray-800/30 rounded-xl p-6 shadow-md max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">What I Enjoy</h2>
          <ul className="text-lg text-gray-300 list-disc list-inside text-left space-y-2">
            <li>Playing video games</li>
            <li>Playing & watching Football</li>
            <li>Learning new skills & technologies</li>
            <li>Exploring UI/UX design trends</li>
          </ul>
        </div>
      </section>
      <section className="mt-20 mb-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Professional Skillset
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-6">
          <div className="flex flex-col justify-center items-center border border-white rounded-xl w-[180px] h-[180px] hover:scale-105 transition duration-300">
            <FaJs className="text-5xl text-white mb-3" />
            <p className="text-white text-lg font-medium">JavaScript</p>
          </div>
          <div className="flex flex-col justify-center items-center border border-white rounded-xl w-[180px] h-[180px] hover:scale-105 transition duration-300">
            <FaHtml5 className="text-5xl text-white mb-3" />
            <p className="text-white text-lg font-medium">HTML</p>
          </div>
          <div className="flex flex-col justify-center items-center border border-white rounded-xl w-[180px] h-[180px] hover:scale-105 transition duration-300">
            <FaCss3Alt className="text-5xl text-white mb-3" />
            <p className="text-white text-lg font-medium">CSS</p>
          </div>
          <div className="flex flex-col justify-center items-center border border-white rounded-xl w-[180px] h-[180px] hover:scale-105 transition duration-300">
            <SiTailwindcss className="text-5xl text-white mb-3" />
            <p className="text-white text-lg font-medium">Tailwind</p>
          </div>
          <div className="flex flex-col justify-center items-center border border-white rounded-xl w-[180px] h-[180px] hover:scale-105 transition duration-300">
            <FaGithub className="text-5xl text-white mb-3" />
            <p className="text-white text-lg font-medium">GitHub</p>
          </div>
          <div className="flex flex-col justify-center items-center border border-white rounded-xl w-[180px] h-[180px] hover:scale-105 transition duration-300">
            <SiBootstrap className="text-5xl text-white mb-3" />
            <p className="text-white text-lg font-medium">Bootstrap</p>
          </div>
          <div className="flex flex-col justify-center items-center border border-white rounded-xl w-[180px] h-[180px] hover:scale-105 transition duration-300">
            <SiMagic className="text-5xl text-white mb-3" />
            <p className="text-white text-lg font-medium">MagicUI</p>
          </div>
          <div className="flex flex-col justify-center items-center border border-white rounded-xl w-[180px] h-[180px] hover:scale-105 transition duration-300">
            <FaReact className="text-5xl text-white mb-3" />
            <p className="text-white text-lg font-medium">React</p>
          </div>
          <div className="flex flex-col justify-center items-center border border-white rounded-xl w-[180px] h-[180px] hover:scale-105 transition duration-300">
            <SiNextdotjs className="text-5xl text-white mb-3" />
            <p className="text-white text-lg font-medium">Next.js</p>
          </div>
          <div className="flex flex-col justify-center items-center border border-white rounded-xl w-[180px] h-[180px] hover:scale-105 transition duration-300">
            <SiAntdesign className="text-5xl text-white mb-3" />
            <p className="text-white text-lg font-medium">Ant Design</p>
          </div>
          <div className="flex flex-col justify-center items-center border border-white rounded-xl w-[180px] h-[180px] hover:scale-105 transition duration-300">
            <SiVercel className="text-5xl text-white mb-3" />
            <p className="text-white text-lg font-medium">Vercel</p>
          </div>
          <div className="flex flex-col justify-center items-center border border-white rounded-xl w-[180px] h-[180px] hover:scale-105 transition duration-300">
            <SiNetlify className="text-5xl text-white mb-3" />
            <p className="text-white text-lg font-medium">Netlify</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
