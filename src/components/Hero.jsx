import React from "react";

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className=" flex flex-col items-center">
          <h2 className="text-3xl p-6 text-center">Hello!</h2>
          <h1 className="text-5xl font-bold px-6 text-center">
            I'm Eric Boerschinger
          </h1>
          <h3 className="text-xl p-6 text-center"> Web Developer</h3>

          <button className="btn btn-primary rounded-lg ">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
