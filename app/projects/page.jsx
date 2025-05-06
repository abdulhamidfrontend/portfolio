import React from "react";
import Navbar from "../Global/Navbar/page";

const Projects = () => {
  return (
    <div className="max-w-[90%] mx-auto text-white">
      <Navbar />

      <section className="mt-20 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-10">My Projects</h1>

        <div className="flex justify-center items-center flex-wrap gap-12">
          <div className="group relative w-[350px]  transition duration-200  h-[450px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg overflow-hidden border border-white/10">
            <img
              src="../../assets/greenshop.png"
              alt="greenshop"
              className="w-full h-[50%] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="p-5 text-left h-[40%] flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold mb-2">GREENSHOP</h2>
                <p className="text-sm text-gray-400">
                  A modern plant e-commerce site built with React and Tailwind.
                </p>
              </div>

              <a
                href="https://greenshop-inky.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block w-full text-center px-4 py-2 bg-white text-black font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="group relative w-[350px]  transition duration-200  h-[450px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg overflow-hidden border border-white/10">
            <img
              src="../../assets/bookshop.png"
              alt="bookshop"
              className="w-full h-[50%] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="p-5 text-left h-[40%] flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold mb-2">BOOKSHOP</h2>
                <p className="text-sm text-gray-400">
                  A modern plant e-commerce site built with React and Tailwind.
                </p>
              </div>

              <a
                href="https://bookshop-search.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block w-full text-center px-4 py-2 bg-white text-black font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
