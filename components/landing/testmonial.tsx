"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote:
      "They delivered our MVP in just 12 days, exceeding all expectations. The app was polished and ready for our investor demo.",
    author: "Sarah Johnson",
    role: "Founder, HealthTech Startup",
    avatar: "/avatars/avatar-1.png",
  },
  {
    id: 2,
    quote:
      "Working with this team was the best decision we made. They understood our vision and executed it flawlessly within the promised timeframe.",
    author: "Michael Chen",
    role: "CTO, FinTech Innovation",
    avatar: "/avatars/avatar-2.png",
  },
  {
    id: 3,
    quote:
      "From concept to launch in two weeks - I didn't think it was possible until they proved me wrong. Incredible work!",
    author: "Priya Patel",
    role: "CEO, RetailTech Solutions",
    avatar: "/avatars/avatar-3.png",
  },
];

function Testimonial() {
  return (
    <section id="testimonials" className="py-20 px-4 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-40 left-32 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what founders and teams have
            to say about our rapid MVP development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <svg
                    width="45"
                    height="36"
                    viewBox="0 0 45 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue-500"
                  >
                    <path
                      d="M13.5 0C6.04416 0 0 6.04416 0 13.5C0 20.9558 6.04416 27 13.5 27H18V36H9C4.02944 36 0 31.9706 0 27V13.5C0 6.04416 6.04416 0 13.5 0Z"
                      fill="currentColor"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M40.5 0C33.0442 0 27 6.04416 27 13.5C27 20.9558 33.0442 27 40.5 27H45V36H36C31.0294 36 27 31.9706 27 27V13.5C27 6.04416 33.0442 0 40.5 0Z"
                      fill="currentColor"
                      fillOpacity="0.2"
                    />
                  </svg>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center mt-auto">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200 dark:bg-gray-700">
                    {testimonial.avatar && (
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className={cn(
              "inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium hover:from-blue-600 hover:to-blue-800 transition-all"
            )}
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonial;
