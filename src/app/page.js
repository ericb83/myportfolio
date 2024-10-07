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
              {},
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
                      <Link href={project.url} className="btn btn-primary">
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
      </main>
    </div>
  );
}
