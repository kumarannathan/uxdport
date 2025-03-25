"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import DropdownSection from "@/components/DropdownSection";
import Image from "next/image";
import Footer from "@/components/Footer";
import ImageModal from "@/components/ImageModal";
import ScrollLine from "@/components/ScrollLine";
import { useState } from "react";

export default function FleetAnalyticsProject() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-[#111111] text-white min-h-screen">
      <ScrollLine />
      <header className="fixed w-full top-0 z-50 bg-[#111111]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
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
            <h1 className="text-5xl sm:text-6xl font-light tracking-tight mb-8">EinNel Technologies Dashboard Redesign
               {/* <span className="block mt-2 text-1xl tracking-wide mb-7 lowercase  text-gray-700"> EinNel Technologies */}
          </h1>
            <p className="text-xl text-gray-300 tracking-wide mb-12">
              A comprehensive dashboard for fleet managers to track and optimize vehicle performance for <span className="text-weight-300 font-bold">EinNel Technologies</span>.
            </p>

            <div className="aspect-video w-full mb-16 rounded-lg overflow-hidden p-8">
              <div className="relative w-full h-full">
                <video
                  className="w-full h-full object-contain"
                  playsInline
                  autoPlay
                  muted
                  loop
                  poster="/project2.jpg"
                >
                  <source src="/fleet-analytics.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="space-y-16">
              <section>
                <h2 className="text-2xl tracking-wide mb-6 lowercase">Background</h2>
                <div className="prose prose-invert">
                  <p className="text-gray-400 tracking-wide leading-relaxed">
                    The Fleet Analytics Dashboard was developed to address the growing need for real-time 
                    fleet management and performance optimization. It provides fleet managers with comprehensive 
                    insights into their vehicle operations, maintenance schedules, and efficiency metrics.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl tracking-wide mb-6 lowercase">Approach</h2>
                <div className="prose prose-invert">
                  <p className="text-gray-400 tracking-wide leading-relaxed">
                    We focused on creating an intuitive interface that presents complex data in an easily 
                    digestible format. The dashboard utilizes real-time data processing and visualization 
                    techniques to provide actionable insights for fleet optimization.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl tracking-wide mb-6 lowercase">Core Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl mb-2 lowercase">Real-time Monitoring</h3>
                    <p className="text-gray-400 tracking-wide">
                      Live tracking of vehicle locations, status, and performance metrics.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 lowercase">Performance Analytics</h3>
                    <p className="text-gray-400 tracking-wide">
                      Detailed analysis of fuel efficiency, route optimization, and driver behavior.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 lowercase">Maintenance Tracking</h3>
                    <p className="text-gray-400 tracking-wide">
                      Automated maintenance scheduling and service history management.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 lowercase">Custom Reporting</h3>
                    <p className="text-gray-400 tracking-wide">
                      Customizable reports and analytics dashboards for different stakeholders.
                    </p>
                  </div>
                </div>
              </section>

              <DropdownSection title="wireframes & mockups">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div 
                      className="aspect-[16/9] relative rounded-lg overflow-hidden bg-gray-900/40 cursor-pointer hover:opacity-90 transition-opacity max-w-xl"
                      onClick={() => setSelectedImage("/dashframe.jpg")}
                    >
                      <Image
                        src="/dashframe.jpg"
                        alt="Fleet Analytics Wireframe 1"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-400">Original dashboard designs</p>
                  </div>
                  <div className="space-y-4">
                    <div 
                      className="aspect-[16/9] relative rounded-lg overflow-hidden bg-gray-900/40 cursor-pointer hover:opacity-90 transition-opacity max-w-xl"
                      onClick={() => setSelectedImage("/dashframe1.jpg")}
                    >
                      <Image
                        src="/dashframe1.jpg"
                        alt="Fleet Analytics Wireframe 2"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-400">Iteration 1</p>
                  </div>
                  <div className="space-y-4">
                    <div 
                      className="aspect-[16/9] relative rounded-lg overflow-hidden bg-gray-900/40 cursor-pointer hover:opacity-90 transition-opacity max-w-xl"
                      onClick={() => setSelectedImage("/final.jpg")}
                    >
                      <Image
                        src="/final.jpg"
                        alt="Fleet Analytics Wireframe 2"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-400">Final dashboard design</p>
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