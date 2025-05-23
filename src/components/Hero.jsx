import React from "react";
import HeroImage from "../assets/my.jpg";
import pdf from "../assets/SurajChavan.pdf"

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={HeroImage}
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I'm {" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Suraj Chavan
        </span>
        , Front-end Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        I specialize in buildind intractive, modern and responsive UI.
      </p>
      <div className="mt-8 space-x-4">
        <button
          className="bg-gradient-to-r from-green-400 to-red-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Contact With Me
        </button>
        <a href={pdf} type="_blank"
          className="bg-gradient-to-r from-pink-400 to-yellow-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
