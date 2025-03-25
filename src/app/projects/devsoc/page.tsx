"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import DropdownSection from "@/components/DropdownSection";
import Image from "next/image";

export default function DevSocProject() {
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
            <h1 className="text-5xl sm:text-6xl font-light tracking-tight mb-8">UNSW DevSoc Redesign</h1>
            <p className="text-xl text-gray-400 tracking-wide mb-12">
              A modern redesign of the UNSW Developer Society website.
            </p>

            <div className="aspect-video w-full mb-16 rounded-lg overflow-hidden p-8">
              <div className="relative w-full h-full">
                <video
                  className="w-full h-full object-contain"
                  playsInline
                  autoPlay
                  muted
                  loop
                  poster="/project4.jpg"
                >
                  <source src="/devsoc.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="space-y-16">
              <section>
                <h2 className="text-2xl tracking-wide mb-6 lowercase">Background</h2>
                <div className="prose prose-invert">
                  <p className="text-gray-400 tracking-wide leading-relaxed">
                    The UNSW DevSoc website redesign project aimed to create a more engaging and 
                    modern platform for the developer community. The goal was to improve user experience 
                    and better showcase the society&apos;s activities and resources.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl tracking-wide mb-6 lowercase">Approach</h2>
                <div className="prose prose-invert">
                  <p className="text-gray-400 tracking-wide leading-relaxed">
                    We took a design-first approach, focusing on creating a minimalist and modern aesthetic 
                    while ensuring the site remained functional and informative. The redesign process involved 
                    extensive user research and feedback from the DevSoc community.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl tracking-wide mb-6 lowercase">Core Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl mb-2 lowercase">Modern Design</h3>
                    <p className="text-gray-400 tracking-wide">
                      Clean, minimalist interface with improved typography and spacing.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 lowercase">Event Showcase</h3>
                    <p className="text-gray-400 tracking-wide">
                      Dynamic event calendar and registration system for society activities.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 lowercase">Resource Hub</h3>
                    <p className="text-gray-400 tracking-wide">
                      Centralized location for development resources and learning materials.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 lowercase">Member Portal</h3>
                    <p className="text-gray-400 tracking-wide">
                      Personalized dashboard for members to track involvement and access exclusive content.
                    </p>
                  </div>
                </div>
              </section>

              <DropdownSection title="wireframes & mockups">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-gray-900/40">
                      <Image
                        src="/devsoc-wireframe-1.jpg"
                        alt="DevSoc Wireframe 1"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-400">Initial website structure wireframes</p>
                  </div>
                  <div className="space-y-4">
                    <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-gray-900/40">
                      <Image
                        src="/devsoc-wireframe-2.jpg"
                        alt="DevSoc Wireframe 2"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-400">Final design system and component library</p>
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