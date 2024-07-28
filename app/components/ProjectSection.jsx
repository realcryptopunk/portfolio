"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag.jsx";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Video Streaming Platform",
    description: "Technologies used: Typescript, NextAuth, TailwindCSS, Railway In today’s digital age, video creators and editors often struggle to find a dedicated platform that caters specifically to their needs. Existing platforms are either too generic or lack the necessary features to truly showcase the intricacies and creativity involved in video production. So I thought to develop a proper stage for videographers to highlight their work, network with industry professionals, and grow their careers. ",
    image: "project1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/realcryptopunk/gimbals_io",
    previewUrl: "https://gimbals-io.vercel.app/",
  },
  {
    id: 2,
    title: "Ai Tool Aggregator",
    description: "Technologies used: NextJs, ChakraUI, AWSS3 Due to the onslaught of Ai tools brought upon by the popularity of ChatGPT, I thought it would be interesting and useful to make a directory of these tools so people can find useful tools. Users can filter by name, category and similar tools to find a tool that’s useful for them.  ",
    image: "/project2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/realcryptopunk/techlyai",
    previewUrl: "https://techlyai.vercel.app/",
  },
  {
    id: 3,
    title: "Family History App",
    description: "Techologies used: Flutter, Figma, Firebase, Firestore, TailwindCSS.",
    image: "project3.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Flixster",
    description: "Technologies used: Swift",
    image: "project4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
