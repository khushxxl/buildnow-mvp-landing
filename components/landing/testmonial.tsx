"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote:
      "Super smooth working with Khush, he was super helpful and overdelivered within short timeline. Would definitely keep working with him on next mobile apps! ",
    author: "@MaximeMB",
    role: "Founder, EasyChef AI & Blogbuster",
    avatar:
      "https://pbs.twimg.com/profile_images/1808500045576065025/8l79rTSl_400x400.jpg",
  },
  {
    id: 2,
    quote:
      "Khushaal built an incredible app with multiple features, which has since become the foundation of our business. Despite our limited knowledge of software and app development, he guided us through every step, patiently assisting with setup and account management. He continues to help us with further updates that we require and is always keen to converse with us to hear how things are going.",
    author: "@MarcRisi",
    role: "Founder, Fitness Centre",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4E03AQF77fXU3wvw9Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710361077860?e=1761177600&v=beta&t=9keFEhsgdmHgrbLil7pT0S-ZryLX1u8cHSFI1nemjyE",
  },
  // {
  //   id: 3,
  //   quote:
  //     "From concept to launch in two weeks - I didn't think it was possible until they proved me wrong. Incredible work!",
  //   author: "@RishiPatel",
  //   role: "Co-founder & Software Engineer",
  //   avatar:
  //     "https://media.licdn.com/dms/image/v2/D4E03AQH6GpjG9ljmHA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731971248605?e=1761177600&v=beta&t=lD0F0RBGXAmE062LUMjcml5J5-WGrH4TR53XGiGjmOw",
  // },
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
        <div className="flex flex-wrap gap-8 max-w-7xl mx-auto justify-center">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 backdrop-blur-sm flex-1 basis-[calc(50%-1rem)] min-w-[300px] max-w-2xl"
            >
              <div className="flex flex-col h-full">
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

        {/* <motion.div
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
        </motion.div> */}
      </div>
    </section>
  );
}

export default Testimonial;
