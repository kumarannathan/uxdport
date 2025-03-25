"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import DropdownSection from "@/components/DropdownSection";
import Image from "next/image";
import Footer from "@/components/Footer";
import ImageModal from "@/components/ImageModal";
import ScrollLine from "@/components/ScrollLine";
import { useState } from "react";

export default function MStudyProject() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-[#111111] text-white min-h-screen">
      <ScrollLine />
      <header className="fixed w-full top-0 z-50 bg-[#111111]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-lg tracking-wider px-3 py-1 rounded border border-white/20">
            back
          </Link>
        </div>
      </header>

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl sm:text-6xl font-light tracking-tight mb-8">MStudy</h1>
            <p className="text-xl text-gray-400 tracking-wide mb-12">
             **in progress** A platform for streamlining the peer studying process.
            </p>

            <div className="aspect-video w-full mb-16 rounded-lg overflow-hidden p-8">
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

            <div className="space-y-16">
              <section>
                <h2 className="text-2xl tracking-wide mb-6 lowercase">storyboarding process</h2>
                <div className="prose prose-invert mb-8">
                  <p className="text-gray-400 tracking-wide leading-relaxed">
                    To generate diverse solutions, we employed the IDEO Ideation method, which encouraged us to brainstorm freely and without constraints. The primary goal was to produce as many ideas as possible, without limiting creativity. Techniques such as sketching, brainwriting, and mind mapping helped us explore a variety of potential solutions.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
                  <div className="space-y-4">
                    <div 
                      className="aspect-[16/9] relative rounded-lg overflow-hidden bg-gray-900/40 cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setSelectedImage("/storyboard1.jpg")}
                    >
                      <Image
                        src="/storyboard1.jpg"
                        alt="MStudy Storyboard 1"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-400">Initial storyboard sketches</p>
                  </div>
                  <div className="space-y-4">
                    <div 
                      className="aspect-[16/9] relative rounded-lg overflow-hidden bg-gray-900/40 cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setSelectedImage("/storyboard2.jpg")}
                    >
                      <Image
                        src="/storyboard2.jpg"
                        alt="MStudy Storyboard 2"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-400">Refined storyboard concepts</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl tracking-wide mb-6 lowercase">ideation process</h2>
                <div className="prose prose-invert mb-8">
                  <p className="text-gray-400 tracking-wide leading-relaxed">
                    Our team generated a total of 80 ideas during this phase. Afterward, we filtered and grouped these ideas, considering feasibility, impact, and alignment with user needs. This process resulted in a refined set of solutions that were selected for further exploration and development.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
                  <div className="space-y-4">
                    <div 
                      className="aspect-[16/9] relative rounded-lg overflow-hidden bg-gray-900/40 cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setSelectedImage("/IDEO.jpg")}
                    >
                      <Image
                        src="/IDEO.jpg"
                        alt="MStudy Ideation Process 1"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-400">Initial brainstorming session</p>
                  </div>
                  <div className="space-y-4">
                    <div 
                      className="aspect-[16/9] relative rounded-lg overflow-hidden bg-gray-900/40 cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setSelectedImage("/breakpoints.jpg")}
                    >
                      <Image
                        src="/breakpoints.jpg"
                        alt="MStudy Ideation Process 2"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-400">Idea filtering and grouping</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl tracking-wide mb-6 lowercase">design validation</h2>
                <div className="prose prose-invert mb-8">
                  <p className="text-gray-400 tracking-wide leading-relaxed">
                    We created 8 storyboards to visually represent different solutions to user needs. Storyboarding allowed us to map out the user journey and demonstrate how each solution would address particular pain points. For example, one storyboard highlighted a user searching for study locations based on activity type, which was identified as a key user need.
                  </p>
                  <p className="text-gray-400 tracking-wide leading-relaxed mt-4">
                    To validate our solutions, we conducted speed dating sessions with four potential users. Each participant provided valuable feedback on our proposed solutions, helping us identify which features resonated most strongly with users and which needed refinement.
                  </p>
                </div>
            
              </section>

              <section>
                <h2 className="text-2xl tracking-wide mb-6 lowercase">final direction</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl mb-2 lowercase">activity-based sorting</h3>
                    <p className="text-gray-400 tracking-wide">
                      Find study locations based on specific activity or study type preferences.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 lowercase">verification system</h3>
                    <p className="text-gray-400 tracking-wide">
                      User verification to ensure a trusted community of students.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 lowercase">gamification elements</h3>
                    <p className="text-gray-400 tracking-wide">
                      Points system rewarding achievements like exploring spaces and attending sessions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 lowercase">community features</h3>
                    <p className="text-gray-400 tracking-wide">
                      Connect with peers and join study groups based on shared interests.
                    </p>
                  </div>
                </div>
              </section>

              <DropdownSection title="wireframes & mockups">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* <div className="space-y-4">
                    <div 
                      className="aspect-[16/9] relative rounded-lg overflow-hidden bg-gray-900/40 cursor-pointer hover:opacity-90 transition-opacity max-w-xl"
                      onClick={() => setSelectedImage("/mstudy-wireframe-1.jpg")}
                    >
                      <Image
                        src="/mstudy-wireframe-1.jpg"
                        alt="MStudy Wireframe 1"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-400">Initial user flow and wireframes</p>
                  </div> */}
                  <div className="space-y-4">
                    <div 
                      className="aspect-[16/9] relative rounded-lg overflow-hidden bg-gray-900/40 cursor-pointer hover:opacity-90 transition-opacity max-w-xl"
                      onClick={() => setSelectedImage("/mstudyfinal.jpg")}
                    >
                      <Image
                        src="/mstudyfinal.jpg"
                        alt="MStudy Wireframe 2"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-400">Midcycle UI design for study session interface</p>
                  </div>
                </div>
              </DropdownSection>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage || ""}
        alt="Wireframe"
      />
    </div>
  );
} 
