"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import viia from "../../app/images/viia.png";

const projects = [
  {
    title: "Whispra",
    description:
      "A real-time voice journaling app with an AI companion that talks back to you. Features include voice conversations, text chat, progress insights, and mood tracking. The AI provides personalized responses and helps users process their thoughts and emotions.",
    image: "https://i.ibb.co/Nd7TH58b/Shots-Mockups-72.png",
    tags: ["React Native", "OpenAI", "Mobile App"],
    href: "https://apps.apple.com/gb/app/whispra-voice-journal-diary/id6746568356",
  },
  {
    title: "EasyChef AI",
    description:
      "An AI-powered recipe app that helps you cook delicious meals with ingredients you already have. Simply input what's in your kitchen and get personalized recipe suggestions, reducing food waste and making cooking easier. Features smart meal planning, dietary preferences, and recipes for all skill levels.",
    image: "https://i.ibb.co/S7dhY2mg/Shots-Mockups-75.png",
    tags: ["React Native", "OpenAI", "Mobile App"],
    href: "https://apps.apple.com/gb/app/easychefai/id6736747720",
  },
  {
    title: "Goodie AI",
    description:
      "A smart food scanner app that helps Gen Z make healthier choices. Instantly analyze ingredients, get personalized scores for health goals, and make informed decisions about what you eat. Powered by frontier AI models, it works globally in 150+ languages with zero judgement.",
    image: "https://i.ibb.co/4Z1vL1fM/Shots-Mockups-74.png",
    tags: ["React Native", "OpenAI", "Mobile App"],
    href: "https://apps.apple.com/gb/app/goodie-ai-food-scanner/id6741483227",
  },
  {
    title: "Strand AI",
    description:
      "An AI powered hair analysis app, that can help you analyze 20+ attributes of your hair. It also generates a personalized hair care plan for you with an AI hair coach to give you best style recommendations.",
    image: "https://i.ibb.co/CpM5MVHm/466shots-so.png",
    tags: ["React Native", "OpenAI", "Mobile App"],
    href: "https://apps.apple.com/gb/app/strand-ai-hair-style-analysis/id6743377249",
  },

  {
    title: "Viia",
    description:
      "Developed a carpooling application that can help users lower down their travel expenses by a great percentage, without cutting down on a great travel experience, with a great provided security. Primary goal of the app was to travel safest, with necessary and extended security.",
    image: "https://i.ibb.co/RQVXGJZ/918shots-so.png",
    tags: ["React Native", "Mobile App"],
    href: "https://apps.apple.com/gb/app/viia/id6447322346",
  },
  {
    title: "Makamba Maternity",
    description:
      "Developed a pregnancy tracker app, which includes all the functionalities for a mother, and makes her pregnancy tracking easy. Includes a on service doctor on chat / call subscriptions. A complete SASS product.",
    image: "https://i.ibb.co/g3MgYF4/370shots-so.png",
    tags: ["React Native", "Mobile App"],
    href: "https://apps.apple.com/app/id6469010105",
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
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Mobile App", "iOS"].map((tag) => (
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
