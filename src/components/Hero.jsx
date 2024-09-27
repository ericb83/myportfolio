import React from "react";

const Hero = () => {
  return (
    <div className="hero bg-secondary min-h-screen ">
      <div className="hero-content flex-col lg:flex-row gap-20">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-full shadow-2xl"
        />
        <div className=" flex flex-col items-center gap-4">
          <h1 className="text-5xl font-bold px-6 text-center">
            Eric Boerschinger
          </h1>
          <h3 className="text-xl p-6 text-center"> Web Developer</h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
