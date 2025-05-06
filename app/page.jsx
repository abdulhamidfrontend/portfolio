import React from "react";
import Navbar from "./Global/Navbar/page";
import Hero from "./Components/Hero/page";
import Footer from "./Global/Footer/page";
const page = () => {
  return (
    <div className="max-w-[90%] m-auto">
      <Navbar />
      <Hero />
    </div>
  );
};

export default page;
