"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery & Planning",
    description:
      "We start by understanding your vision, target users, and core features. Together we'll create a roadmap for your MVP.",
    icon: "🎯",
  },
  {
    title: "Design & Prototyping",
    description:
      "Our designers create intuitive user flows and beautiful interfaces, iterating based on your feedback.",
    icon: "🎨",
  },
  {
    title: "Development",
    description:
      "Our experienced developers build your MVP using modern technologies, focusing on quality and speed.",
    icon: "💻",
  },
  {
    title: "Testing & Launch",
    description:
      "Rigorous testing ensures your MVP works flawlessly. We help you launch and gather initial user feedback.",
    icon: "🚀",
  },
];

function Process() {
  return (
    <div id="process" className="py-20 px-4  text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">Our Development Process</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Getting your app ready for market in just 2 weeks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto place-items-center">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-8 rounded-2xl bg-[#111111] border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">{step.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Process;
