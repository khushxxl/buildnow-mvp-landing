"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../images/logo.png";
function StudioPage() {
  const projects = [
    {
      name: "alc ai",
      description:
        "ai mobile app that detects alcohol & provides information based on an image snaps",
      link: "https://alcai.me",
    },
    {
      name: "ultimate pr",
      description: "a super minimalistic gym pr tracker",
      link: "https://ultimate-pr-landing.vercel.app/",
    },
  ];

  const apps_images = [];

  return (
    <div className="min-h-screen  text-white p-8 pt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-2xl font-semibold mb-6">.buildnowstudios</h1>
          <div className="flex flex-col gap-4">
            <p className="text-md text-gray-300 max-w-3xl">
              led by small team that build apps for the community, at the moment
              we are working on a few projects that we think are cool and
              pumping apps.
            </p>
            <p className="text-md text-gray-300 max-w-3xl">
              got an idea? we also take on custom projects, hit us up at on our
              <a
                className="text-blue-400 hover:underline ml-2"
                href="mailto:khushaal.choithramani@gmail.com"
              >
                email
              </a>{" "}
              or visit
              <a
                className="text-blue-400 hover:underline ml-2"
                href="https://buildnow.me/"
              >
                home
              </a>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-xl mb-8">Portfolio</h2>
          <div className="space-y-5">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="mt-3"
              >
                <a target="_blank" href={project.link} className="underline">
                  {project.name}
                </a>
                <p className="text-gray-400">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-xl mb-8">Apps we have worked on</h2>
          <div className="space-y-5">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="mt-3"
              >
                <a target="_blank" href={project.link} className="underline">
                  {project.name}
                </a>
                <p className="text-gray-400">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-xl  mb-4">Team</h2>
          <p className="text-gray-300">
            Reach us at{" "}
            <a
              href="mailto:khushaal.choithramani@gmail.com"
              className="text-blue-400 hover:underline"
            >
              email
            </a>
            , if you're interested in joining the team.
          </p>
          <p className="text-gray-300 mt-4 font-semibold">accelerate, anon</p>

          <Image
            src={logo}
            alt="logo"
            width={50}
            height={50}
            className="rounded-xl z-50 mt-10"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default StudioPage;
