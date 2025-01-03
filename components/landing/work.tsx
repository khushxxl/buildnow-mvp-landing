"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Alc AI",
    description:
      "Developed a fitness centre app, which allows users to get personally trained, tailored workout plans, track their progress and much more. The app is compleely scalable and is being used by actual users & trainers",
    image: "https://i.ibb.co/wyVf0jz/Shots-Mockups-3.png",
    tags: ["iOS", "Mobile App"],
    href: "https://apps.apple.com/gb/app/alc-ai/id6739513699",
  },
  {
    title: "Makamba Maternity",
    description:
      "Developed a pregnancy tracker app, which includes all the functionalities for a mother, and makes her pregnancy tracking easy. Includes a on service doctor on chat / call subscriptions. A complete SASS product.",
    image: "https://i.ibb.co/g3MgYF4/370shots-so.png",
    tags: ["iOS", "Mobile App"],
    href: "https://apps.apple.com/app/id6469010105",
  },
  {
    title: "Fitness Centre",
    description:
      "Developed a fitness centre app, which allows users to get personally trained, tailored workout plans, track their progress and much more. The app is compleely scalable and is being used by actual users & trainers",
    image: "https://i.ibb.co/ZJy3vgM/575shots-so.png",
    tags: ["iOS", "Mobile App"],
    href: "https://apps.apple.com/gb/app/fit-center/id6479176792",
  },
  {
    title: "Viia",
    description:
      "Developed a carpooling application that can help users lower down their travel expenses by a great percentage, without cutting down on a great travel experience, with a great provided security. Primary goal of the app was to travel safest, with necessary and extended security.",
    image: "https://i.ibb.co/RQVXGJZ/918shots-so.png",
    tags: ["iOS", "Mobile App"],
    href: "https://apps.apple.com/gb/app/viia/id6447322346",
  },
];

function Projects() {
  return (
    <div id="work" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Our Recent Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={cn(
                "relative group rounded-xl overflow-hidden",
                "bg-white/5 backdrop-blur-sm border border-white/10",
                "hover:border-white/20 transition-all duration-300"
              )}
            >
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  {/* <p className="text-gray-500 dark:text-gray-400 mb-4">
                    {project.description}
                  </p> */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
