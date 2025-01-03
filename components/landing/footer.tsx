"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logo from "../../app/images/logo.png";
function Footer() {
  return (
    <footer className="relative py-20 px-4 overflow-hidden">
      {/* Gradient blur effect similar to founder component */}
      <div className="absolute bottom-0 left-1/2 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-16 pt-2 border-t border-gray-800 text-center text-gray-400 flex w-full justify-end"
      >
        <p className="flex items-center gap-2 mt-10">
          <Image
            src={logo}
            alt="logo"
            width={30}
            height={30}
            className="rounded-md z-50"
          />
          &copy; {new Date().getFullYear()} .buildnow . All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}

export default Footer;
