"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

function Founder() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl overflow-hidden"
            >
              <Image
                src="https://pbs.twimg.com/profile_images/1820021257552773120/bgAQmFYe_400x400.jpg"
                alt="Founder"
                width={300}
                height={300}
                className="rounded-full"
              />
            </motion.div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">Meet the Developer</h2>
            <p className="text-xl text-gray-400">
              Hi, I'm Khushaal, a passionate developer and entrepreneur
              dedicated to helping businesses build amazing digital products.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <span className="text-blue-500">5+</span>
                </div>
                <div>
                  <h3 className="font-semibold">Years of Experience</h3>
                  <p className="text-sm text-gray-400">
                    In software development and product design
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <span className="text-purple-500">50+</span>
                </div>
                <div>
                  <h3 className="font-semibold">Projects Delivered</h3>
                  <p className="text-sm text-gray-400">For clients worldwide</p>
                </div>
              </div>
            </div>
            <p className="text-gray-400">
              I believe in creating efficient, scalable solutions that help
              businesses grow. Let's work together to bring your vision to life.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Founder;
