"use client";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { projects } from "@/data/projects";
import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";

export default function Home() {
  const ref = useRef();
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
    console.log(scrollYProgress);
  }, [scrollYProgress]);
  return (
    <main ref={ref} className="relative flex w-full h-full min-h-screen ">
      <div className="absolute -top-4 -left-4 flex before:absolute before:h-[300px] before:w-[480px]  before:rounded-full before:bg-gradient-radial before:from-[#ffacee] before:to-transparent before:blur-xl before:content-[''] after:absolute after:-z-20 after:h-[200px] after:w-[340px]  after:bg-gradient-conic after:from--[#ffacee] after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:via-[#ffacee] before:dark:opacity-10 after:dark:from-[#ffacee] after:dark:via-[#ffacee] after:dark:opacity-80 before:lg:h-[360px] z-[-1]"></div>
      <div className="grid flex-1 w-full h-full grid-cols-2">
        <Hero />
        <div class="flex col-span-2 flex-col flex-wrap md:flex-row">
          {projects.map((project, index) => (
            <div className="flex-1 min-w-[34rem] aspect-square" key={index}>
              <ProjectCard
                title={project.title}
                image={project.href}
                category={project.category}
                brand={project.brand}
              />
            </div>
          ))}
        </div>

        <Footer />
      </div>
      <Sidebar scrollYProgress={scrollYProgress} />
    </main>
  );
}
