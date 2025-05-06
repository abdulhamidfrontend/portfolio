import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex items-center my-8 justify-between">
      <div className="logo">
        <h1 className="text-4xl  font-bold">A | X</h1>
      </div>
      <div className="links flex items-center gap-10">
        <Link
          href="/"
          className="relative flex pb-2 items-center gap-3 group transition-transform"
        >
          <AiFillHome />
          Home
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full origin-right" />
        </Link>

        <Link
          href="/about"
          className="relative flex pb-2 items-center gap-3 group transition-transform"
        >
          <FaUserAlt />
          About
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full origin-right" />
        </Link>

        <Link
          href="/projects"
          className="relative flex pb-2 items-center gap-3 group transition-transform"
        >
          <FaReact />
          Projects
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full origin-right" />
        </Link>

        <Link
          href="https://github.com/abdulhamidfrontend"
          target="_blank"
          className="relative flex pb-2 items-center gap-3 group transition-transform"
        >
          <FaGithub />
          GitHub
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full origin-right" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
