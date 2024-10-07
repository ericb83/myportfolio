import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero bg-secondary min-h-screen ">
      <div className="hero-content flex-col lg:flex-row gap-20">
        <Image
          src="/portfoliopic.jpg"
          width={500}
          height={500}
          alt="portfolio picture"
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
