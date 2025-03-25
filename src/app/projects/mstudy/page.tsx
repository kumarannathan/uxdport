"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import DropdownSection from "@/components/DropdownSection";
import Image from "next/image";

export default function MStudyProject() {
  return (
    <div className="bg-[#111111] text-white min-h-screen">
      <header className="fixed w-full top-0 z-50 bg-[#111111]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-lg font-space-mono tracking-wide px-3 py-1 rounded border border-white/20">
            kumaran
          </Link>
        </div>
      </header>

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hero Section */}
            <motion.section 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[60vh] w-full overflow-hidden"
            >
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/employed.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/50 flex items-center">
                <div className="max-w-7xl mx-auto px-4 w-full">
                  <h1 className="text-5xl sm:text-7xl tracking-tight font-light mb-4 font-space-grotesk">employed</h1>
                  <p className="text-xl text-gray-300 tracking-wide font-space-mono">
                    streamlining the student recruitment process
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Content Sections */}
            <div className="space-y-16">
              {/* Background Section */}
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="py-20 border-b border-white/10"
              >
                <h2 className="text-3xl tracking-wide mb-8 font-space-mono">background</h2>
                <div className="prose prose-invert max-w-3xl space-y-6 tracking-wide font-space-grotesk">
                  <p>
                    employed is a comprehensive recruitment platform designed to help students at the University of Michigan navigate their career journey. the app streamlines the process of job searching, application preparation, and professional networking.
                  </p>
                  <p>
                    our team identified that students often struggled with the complexities of job recruitment, from resume creation to interview preparation. the process was fragmented across multiple platforms and resources.
                  </p>
                  <p>
                    through an iterative design process, we developed a unified solution that guides students through each step of their recruitment journey, providing tools, resources, and community support along the way.
                  </p>
                </div>

                <p className="text-xl text-gray-400 tracking-wide mb-12">
                  A platform for streamlining the peer studying process.
                </p>

                <div className="aspect-video w-full mb-16 bg-gray-900/40 rounded-lg overflow-hidden p-8">
                  <div className="relative w-full h-full">
                    <video
                      className="w-full h-full object-contain"
                      playsInline
                      autoPlay
                      muted
                      loop
                      poster="/project3.jpg"
                    >
                      <source src="/mstudy.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </motion.section>

              {/* Approach Section */}
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="py-20 border-b border-white/10"
              >
                <h2 className="text-3xl tracking-wide mb-8 font-space-mono">approach</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl tracking-wide mb-4 text-gray-300 font-space-mono">ideation & research</h3>
                      <p className="text-gray-400 tracking-wide font-space-grotesk">
                        we began by identifying core student frustrations through user interviews and surveys. using the IDEO ideation method, we brainstormed over 80 potential solutions and refined them based on feasibility, impact, and alignment with user needs.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl tracking-wide mb-4 text-gray-300 font-space-mono">storyboarding & validation</h3>
                      <p className="text-gray-400 tracking-wide font-space-grotesk">
                        to visualize user interactions, we created 8 storyboards, each demonstrating a unique feature. these were tested through speed dating sessions with four students, allowing us to refine our design based on real user feedback.
                      </p>
                    </div>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="absolute inset-0 w-full h-full object-fit rounded-[15px]"
                    >
                      <source src="/employed.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </motion.section>

              {/* Features Section */}
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="py-20"
              >
                <h2 className="text-3xl tracking-wide mb-12 font-space-mono">core features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl tracking-wide text-gray-300 font-space-mono">resume building</h3>
                    <p className="text-gray-400 tracking-wide font-space-grotesk">
                      interactive resume builder with industry-specific templates and ai-powered suggestions for optimal content structuring.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl tracking-wide text-gray-300 font-space-mono">networking</h3>
                    <p className="text-gray-400 tracking-wide font-space-grotesk">
                      connect with alumni, industry professionals, and fellow students. schedule coffee chats and informational interviews seamlessly.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl tracking-wide text-gray-300 font-space-mono">interview prep</h3>
                    <p className="text-gray-400 tracking-wide font-space-grotesk">
                      practice with industry-specific interview questions, receive real-time feedback, and schedule mock interviews with peers.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl tracking-wide text-gray-300 font-space-mono">recruitment modules</h3>
                    <p className="text-gray-400 tracking-wide font-space-grotesk">
                      structured guides and timelines for each recruitment phase, from application tracking to offer negotiation support.
                    </p>
                  </div>
                </div>
                <p className="mt-12 text-gray-400 tracking-wide font-space-grotesk max-w-3xl">
                  our comprehensive suite of tools is designed to empower students throughout their entire recruitment journey, from initial preparation to final offer negotiations.
                </p>
              </motion.section>

              <DropdownSection title="wireframes & mockups">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-gray-900/40">
                      <Image
                        src="/mstudy-wireframe-1.jpg"
                        alt="MStudy Wireframe 1"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-400">Initial user flow and wireframes</p>
                  </div>
                  <div className="space-y-4">
                    <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-gray-900/40">
                      <Image
                        src="/mstudy-wireframe-2.jpg"
                        alt="MStudy Wireframe 2"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-400">Final UI design for study session interface</p>
                  </div>
                </div>
              </DropdownSection>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
} 
