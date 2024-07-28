"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Spline from '@splinetool/react-spline';
import Navbar from './Navbar';
import { motion } from "framer-motion";
import Link from "next/link";


const HeroSection = () => {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen p-8 md:p-16 lg:p-24 bg-black text-white overflow-hidden">
    <div className="absolute inset-0 w-full h-full" style={{ top: '-20%' }}>
      <Spline
        className="w-full h-full"
        scene="https://prod.spline.design/dn2Ik7oIBppJ4NpX/scene.splinecode" 
      />
    </div>
    
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="z-10 max-w-6xl w-full flex flex-col items-center space-y-12 md:space-y-16"
    >
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Hey, I&apos;m{" "}
        </span>
        <br />
        <TypeAnimation
          sequence={[
            "Navid! 👋",
            1000,
            "a Web Developer",
            1000,
            "a Mobile Developer",
            1000,
            "a Product Designer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h1>
      
      <p className="text-xl md:text-2xl lg:text-3xl text-center max-w-3xl">
      Innovative Solutions in Code: Navigating the Future of Technology
      </p>
      
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
        <Link href="/#contact" className="px-8 py-3 text-lg rounded-full border-2 border-white hover:bg-white hover:text-black transition-colors">
          Hire me
        </Link>
        <a 
          href="/sample.pdf" 
          download="sample.pdf"
          className="px-8 py-3 text-lg rounded-full border-2 border-transparent bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all duration-300 ease-in-out bg-size-200 bg-pos-0 hover:bg-pos-100"
        >
          Download CV
        </a>
      </div>
    </motion.div>
  </main>
  );
}

export default HeroSection;