"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import DropdownSection from "@/components/DropdownSection";
import Image from "next/image";

export default function EmployedProject() {
  return (
    <div className="bg-[#111111] text-white min-h-screen">
      <header className="fixed w-full top-0 z-50 bg-[#111111]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-lg tracking-wider px-3 py-1 rounded border border-white/20">
            back
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
            <h1 className="text-5xl sm:text-6xl font-light tracking-tight mb-8">eMployed</h1>
            <p className="text-xl text-gray-400 tracking-wide mb-12">
              A platform for streamlining the student recruiting process.
            </p>

            <div className="aspect-video w-full mb-16 rounded-lg overflow-hidden p-8">
              <div className="relative w-full h-full">
                <video
                  className="w-full h-full object-contain"
                  playsInline
                  autoPlay
                  muted
                  loop
                  poster="/project1.jpg"
                >
                  <source src="/employed.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="space-y-16">
              <section>
                <h2 className="text-2xl tracking-wide mb-6 lowercase">Background</h2>
                <div className="prose prose-invert">
                  <p className="text-gray-400 tracking-wide leading-relaxed">
                    eMployed was created to address the challenges students face during the recruitment process. 
                    The platform provides a structured approach to job searching, networking, and interview preparation, 
                    making the transition from student to professional more manageable.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl tracking-wide mb-6 lowercase">Approach</h2>
                <div className="prose prose-invert">
                  <p className="text-gray-400 tracking-wide leading-relaxed">
                    The platform was designed with a user-centric approach, focusing on the key pain points students 
                    experience during recruitment. We developed modules that guide students through resume building, 
                    networking strategies, and interview preparation, with progress tracking and personalized feedback.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl tracking-wide mb-6 lowercase">Core Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl mb-2 lowercase">Resume Building</h3>
                    <p className="text-gray-400 tracking-wide">
                      Interactive resume builder with industry-specific templates and real-time feedback.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 lowercase">Networking</h3>
                    <p className="text-gray-400 tracking-wide">
                      Tools and strategies for building professional connections and leveraging LinkedIn.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 lowercase">Interview Prep</h3>
                    <p className="text-gray-400 tracking-wide">
                      Practice interviews with AI-powered feedback and industry-specific question banks.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 lowercase">Progress Tracking</h3>
                    <p className="text-gray-400 tracking-wide">
                      Visual progress indicators and personalized recommendations for improvement.
                    </p>
                  </div>
                </div>
              </section>

              <DropdownSection title="wireframes & mockups">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-gray-900/40">
                      <Image
                        src="/employed-wireframe-1.jpg"
                        alt="eMployed Wireframe 1"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-400">Initial wireframe exploration for the dashboard</p>
                  </div>
                  <div className="space-y-4">
                    <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-gray-900/40">
                      <Image
                        src="/employed-wireframe-2.jpg"
                        alt="eMployed Wireframe 2"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-400">High-fidelity mockup of the main interface</p>
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