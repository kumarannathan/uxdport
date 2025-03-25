"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import RotatingText from "@/components/RotatingText";
import ScrollProgress from "@/components/ScrollProgress";
import DropdownSection from "@/components/DropdownSection";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "eMployed",
    description: "A platform for streamlining the student recruiting process.",
    imageUrl: "/project1.jpg",
    link: "/projects/employed"
  },
  {
    title: "EinNel Fleet Dashboards Redesign",
    description: "A dashboard for fleet managers to track their vehicles KPIs",
    imageUrl: "/project2.jpg",
    link: "/projects/fleet-analytics"
  },
  {
    title: "MStudy",
    description: "A platform for streamlining the peery studying process.",
    imageUrl: "/project3.jpg",
    link: "/projects/mstudy"
  },
  {
    title: "UNSW DevSoc Redesign",
    description: "A redesign of the UNSW DevSoc website",
    imageUrl: "/project4.jpg",
    link: "/projects/devsoc"
  }
];

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-[#111111] text-white min-h-screen">
      <header className="fixed w-full top-0 z-50 bg-[#111111]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="text-lg tracking-wider px-3 py-1 rounded border border-white/20">
             home
            </a>
          </motion.div>
          <nav className="flex gap-6 tracking-wide text-sm lowercase">
            <a href="https://kumarann.netlify.app/" className="hover:text-gray-300 transition-colors">Full Stack Portfolio</a>
            <a href="https://www.linkedin.com/in/kkumarann/" className="hover:text-gray-300 transition-colors">Linkedin</a>
            <a href="github.com/kumarannathan?tab=repositories" className="hover:text-gray-300 transition-colors">GitHub</a>
            <a href="mailto:kumarann@umich.edu" className="hover:text-gray-300 transition-colors">Email</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center px-4 pt-20">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              className="space-y-6"
            >
              <h1 className="text-5xl sm:text-7xl tracking-tight font-light max-w-4xl leading-[1.5] flex flex-col">
                <span>
                  i&apos;m kumaran, a <RotatingText />
                </span>
                <span className="block mt-2">
                  based in ann arbor, michigan.
                </span>
              </h1>
              <p className="text-2xl sm:text-3xl text-gray-400 max-w-3xl tracking-wide">
                check out my developer work <a href="https://kumarann.netlify.app/" className="underline hover:text-white transition-colors">here</a>. scroll down to see my ux works.
              </p>
            </motion.div>
          </div>
        </section>
        {/* Projects Section */}
        <div className="max-w-7xl mx-auto px-4">
          <DropdownSection title="selected works">
            <div className="max-w-[95vw]">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <ScrollProgress containerRef={carouselRef} />
                <div 
                  ref={carouselRef}
                  className="flex space-x-8 overflow-x-auto pb-8 snap-x snap-mandatory mt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.8,
                        delay: index * 0.2,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      className="flex-none w-[80vw] md:w-[45vw] lg:w-[30vw] snap-center"
                    >
                      <a href={project.link} className="block group">
                        <div className="relative w-full h-[220px] overflow-hidden rounded-[10px] bg-transparent">
                          <Image
                            src={project.imageUrl}
                            alt={project.title}
                            fill
                            className="object-contain transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 45vw, 30vw"
                            priority={index === 0}
                          />
                          <div className="absolute inset-0 bg-black/10 transition-opacity duration-700 group-hover:opacity-0" />
                        </div>
                        <div className="mt-6 space-y-2">
                          <h3 className="text-2xl tracking-wide lowercase">{project.title}</h3>
                          <p className="text-gray-400 tracking-wide lowercase text-sm">{project.description}</p>
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </DropdownSection>
          
          {/* About Me Section */}
          <DropdownSection title="about me">
            <div className="max-w-3xl">
              <p className="text-xl text-gray-400 tracking-wide leading-relaxed">
                i&apos;m a software engineer and designer based in ann arbor. i focus on creating intuitive and efficient solutions that solve real-world problems. currently studying at the university of michigan.
              </p>
            </div>
          </DropdownSection>

          {/* Academics Section */}   
          <DropdownSection title="academics">
            <div className="max-w-3xl space-y-8">
              <div>
                <p className="text-xl text-gray-400 tracking-wide leading-relaxed">
                  studying computer science at the university of michigan, class of 2025. focusing on software engineering, human-computer interaction, and web development.
                </p>
              </div>

              <div>
                <h3 className="text-lg text-white mb-3 tracking-wide">relevant coursework</h3>
                <p className="text-gray-400 tracking-wide leading-relaxed">
                  discrete mathematics, theory of computation, data structures & algorithms, computer architecture, artificial intelligence, web development, database systems, computer networks and applications, xr/virtual reality, user interface development
                </p>
              </div>

              <div>
                <h3 className="text-lg text-white mb-3 tracking-wide">technical skills</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-gray-300 mb-2 tracking-wide">programming languages</h4>
                    <p className="text-gray-400 tracking-wide">
                      c/c#/c++, java, javascript, python, sql, swift, assembly
                    </p>
                  </div>
                  <div>
                    <h4 className="text-gray-300 mb-2 tracking-wide">technologies & frameworks</h4>
                    <p className="text-gray-400 tracking-wide">
                      reactjs, postgresql, git, html/css, aws
                    </p>
                  </div>
                  <div>
                    <h4 className="text-gray-300 mb-2 tracking-wide">development practices</h4>
                    <p className="text-gray-400 tracking-wide">
                      ios/mobile app development, frontend development, agile methodologies, api integration, testing & qa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </DropdownSection>
        </div>

        {/* Previous Work Section */}
        <section className="py-20 px-4 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-2xl sm:text-3xl text-gray-400 max-w-3xl tracking-wide">
                Check out my full stack development work on my{" "}
                <a href="https://kumarann.netlify.app/" className="underline hover:text-white transition-colors">portfolio site</a>.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
