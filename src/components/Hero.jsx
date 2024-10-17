"use client";
import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = "mailto:eboerschinger@gmail.com";
  };

  return (
    <div className="hero bg-secondary min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-20">
        <Image
          src="/portfoliopic.jpg"
          width={400}
          height={400}
          alt="Eric Boerschinger"
          className="max-w-sm rounded-full shadow-2xl"
          priority
        />
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-5xl font-bold px-6 text-center">
            Eric Boerschinger
          </h1>
          <h2 className="text-xl p-6 text-center">Web Developer</h2>
          <p className="py-6 max-w-2xl text-center">
            Welcome to My Web Development Portfolio! I'm Eric Boerschinger, a
            passionate web developer with experience in building dynamic,
            user-focused web applications. My expertise includes modern
            frameworks like Next.js and Tailwind CSS, enabling me to create
            fast, responsive websites and applications. This portfolio
            highlights my work. Whether you're looking for freelance web
            development services or collaborative projects, I bring a
            combination of creativity, clean code, and dedication to every
            project. Let's build something great together!
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="https://github.com/ericb83"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline"
              aria-label="GitHub Profile"
            >
              <FaGithub className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/eric-boerschinger-867b88a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="h-6 w-6" />
            </Link>
            <button
              className="btn btn-circle btn-outline"
              onClick={handleEmailClick}
              aria-label="Send email"
            >
              <FaEnvelope className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
