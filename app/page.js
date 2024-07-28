"use client";
import React from "react";
import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ProjectSection from './components/ProjectSection';
import EmailSection from './components/EmailSection';

export default function Home() {
  return (
   
    <main className="relative flex min-h-screen flex-col items-center justify-center p-24 bg-black text-white overflow-hidden">
      <HeroSection />
      <Navbar />
   
     <AboutSection />
     <ProjectSection />
     <EmailSection />
    </main>
   
  );
}