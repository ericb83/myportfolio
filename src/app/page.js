"use client";
import React, { useState, useEffect } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiNextdotjs } from "react-icons/si";
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Home() {
  const [formKey, setFormKey] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("Sending...");
    console.log("Form data:", formData);

    try {
      const docRef = await addDoc(collection(db, "messages"), {
        ...formData,
        createdAt: new Date(),
      });
      console.log("Document written with ID:", docRef.id);
      setFormStatus("Message sent successfully!");
      setFormKey((prevKey) => prevKey + 1); // Force re-render of the form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message: ", error);
      setFormStatus(`Failed to send message. ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (formStatus === "Message sent successfully!") {
      const timer = setTimeout(() => {
        setFormStatus("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  return (
    <div className=" min-h-screen bg-secondary">
      <div className="container mx-auto px-4 py-8">
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
                    height={100}
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

        {/* Tech Stack Section */}
        <section id="tech-stack" className="py-12">
          <h2 className="text-4xl font-bold text-center mb-8">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: FaReact, name: "React" },
              { icon: FaHtml5, name: "HTML5" },
              { icon: FaCss3Alt, name: "CSS3" },
              { icon: FaJs, name: "JavaScript" },
              { icon: FaNodeJs, name: "Node.js" },
              { icon: SiTailwindcss, name: "Tailwind CSS" },
              { icon: SiFirebase, name: "Firebase" },
              { icon: SiNextdotjs, name: "Next.js" },
            ].map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <tech.icon className="text-6xl mb-2" />
                <span className="text-sm">{tech.name}</span>
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
                  world projects and collaboration with a team of developers.
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
              <p className="mb-4">
                Fill out the form below to send me a message.
              </p>
              <form key={formKey} onSubmit={handleSubmit} className="space-y-4">
                <div className="form-control">
                  <label className="label" htmlFor="name">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    id="name"
                    name="name"
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
                    onChange={handleInputChange}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    className="input input-bordered rounded-xl"
                    autoComplete="on"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label" htmlFor="message">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    onChange={handleInputChange}
                    id="message"
                    name="message"
                    placeholder="Your message"
                    className="textarea textarea-bordered rounded-xl"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-full rounded-xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                {formStatus && (
                  <p className="text-center mt-4 text-primary">{formStatus}</p>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-8">
            What Clients Have To Say
          </h2>
          <div className="card bg-base-100 shadow-xl max-w-md mx-auto rounded-xl">
            <div className="card-body">
              <p className=" font-xl text-center mb-4">
                If you’re looking for someone who combines skill, efficiency,
                and a personable approach, we highly recommend Eric. --Eden
                Restored
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
