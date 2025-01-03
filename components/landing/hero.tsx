"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedGradientText from "../ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { ArrowDown } from "lucide-react";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

function Hero() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <div
      id="home"
      className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-4 mx-auto"
    >
      <div className="absolute hidden md:block top-20 right-20 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -z-10" />
      <div className="absolute hidden md:block bottom-40 left-32 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -z-10" />
      <div className="absolute hidden md:block top-1/2 -right-10 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -z-10" />
      <AnimatedGradientText className="cursor-pointer">
        🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
          )}
        >
          Get the best deal
        </span>
        <ChevronRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold mb-6 max-w-4xl mt-10"
      >
        Building your mobile app{" "}
        <span className="text-blue-500">MVP in 14 days</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl mb-8 text-gray-600 dark:text-gray-300"
      >
        Got an app idea? We can help you design, develop and market in days
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col items-center"
      >
        <button
          data-cal-namespace="30min"
          data-cal-link="khushaal-choithramani-5mvbsx/30min"
          data-cal-config='{"layout":"month_view"}'
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-10 py-3 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-blue-800 transition-all"
        >
          Book a Call
        </button>

        <div className="mt-14">
          <ArrowDown className="size-6 text-gray-400 animate-bounce" />
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
