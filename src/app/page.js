"use client";
import React from "react";
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" min-h-screen bg-secondary">
      <main className="container mx-auto px-4 py-8">
        <Hero />

        {/* Projects Section */}
        <section id="projects" className="py-12">
          <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Wix Website",
                description:
                  "A website for a local non-profit using Wix Studio",
                image: "/edenrestored.png?height=100&width=200",
                url: "https://www.edenrestoredhealthmarket.com/",
              },
              {
                title: "Kittenz",
                description: "A cat themed memory game.",
                image: "/kittenzapp.png?height=100&width=200",
                url: "https://kittenz-seven.vercel.app/",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="card bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <figure>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={200}
                    height={90}
                    className="w-full h-full rounded-xl"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{project.title}</h2>
                  <p>{project.description}</p>
                  <div className="card-actions justify-end">
                    {project.url ? (
                      <Link
                        href={project.url}
                        className="btn btn-primary rounded-xl"
                      >
                        View Project
                      </Link>
                    ) : (
                      <button className="btn btn-primary btn-disabled">
                        Coming Soon
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-12 ">
          <h2 className="text-4xl font-bold text-center mb-8">Education</h2>
          <div className="space-y-6">
            <div className="card bg-base-100 shadow-xl rounded-xl">
              <div className="card-body">
                <h2 className="card-title">
                  Bachelor of Science in Information Technology
                </h2>
                <p className="text-sm opacity-70">
                  University of Phoenix, Graduated- May 2024
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl rounded-xl">
              <div className="card-body">
                <h2 className="card-title">CodeNoobs Web Dev Incubator</h2>
                <p className="text-sm opacity-70">April 2024 - Current</p>
                <p>
                  A developer mentorship program with a focus on developing real
                  world world projects and collaboration with a team of
                  developers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Me Section */}
        <section id="contact" className="py-12">
          <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
          <div className="card bg-base-100 shadow-xl max-w-md mx-auto rounded-xl">
            <div className="card-body">
              <h3 className="text-xl font-bold mb-4">Get in touch</h3>
              <p className="mb-4">
                Fill out the form below to send me a message.
              </p>
              <form className="space-y-4">
                <div className="form-control">
                  <label className="label" htmlFor="name">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="input input-bordered rounded-xl"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label" htmlFor="email">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email"
                    className="input input-bordered rounded-xl"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label" htmlFor="message">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your message"
                    className="textarea textarea-bordered rounded-xl"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-full rounded-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
