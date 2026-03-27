"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Updated Carousel: Matching your new hyphenated filenames
const productGallery = [
  {
    src: "/images/Labware.jpg", 
    label: "MRI-Compatible Animal Restraints • Non-Ferromagnetic"
  },
  {
    src: "/images/Lab-Equipment.png", // Updated to hyphenated .png
    label: "Custom Centrifuge Rotors • Precision Balanced"
  },
  {
    src: "/images/PCB.jpg", 
    label: "Proprietary R&D Tooling • High-Performance Polymers"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % productGallery.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 px-6 bg-white overflow-hidden">
      {/* Blueprint Style Grid Background */}
      <div className="absolute inset-0 opacity-[0.4]" 
           style={{ backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Product Positioning */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded border border-orange-200 bg-orange-50 text-orange-700 text-xs font-bold tracking-widest uppercase mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse"/>
            Lab Instrument Manufacturer
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-5xl lg:text-7xl font-heading text-slate-900 mb-6 leading-[1.1] tracking-tight font-black"
          >
            Precision Tools. <br />
            <span className="text-orange-600">Engineered by Karvyn.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed font-medium"
          >
            We design and manufacture specialized research hardware that can&apos;t be found in any catalogue. From MRI-safe restraints to custom microfluidic jigs, our products are engineered from first principles for mission-critical lab environments.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="#products" className="px-8 py-4 bg-slate-900 text-white font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-orange-600 transition-all text-center shadow-lg">
              Explore Product Line
            </Link>
            <Link href="#contact" className="px-8 py-4 border-2 border-slate-200 text-slate-700 font-bold text-sm uppercase tracking-wider rounded-lg hover:border-slate-900 hover:text-slate-900 transition-colors text-center">
              Request Custom Engineering
            </Link>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.8 }}
             className="mt-16 border-t border-slate-100 pt-8"
          >
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Engineering validated for</p>
            <div className="flex flex-wrap gap-8 text-slate-500 font-semibold text-sm">
               <span>Research Labs</span>
               <span className="text-slate-300">•</span>
               <span>University Hospitals</span>
               <span className="text-slate-300">•</span>
               <span>Tech Startups</span>
               <span className="text-slate-300">•</span>
               <span>Industrial R&D</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: The Product Showcase */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative hidden lg:block h-[600px] w-full bg-slate-100 rounded-[2rem] border border-slate-200 shadow-2xl overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={productGallery[currentIndex].src}
                alt="Karvyn3D Proprietary Hardware"
                fill
                className="object-cover"
                priority
                unoptimized // Added to bypass Netlify image optimization issues
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>
            
          <div className="absolute bottom-6 left-8 z-20">
             <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm py-2 px-4 rounded-full border border-slate-200 shadow-sm">
               <div className="w-1.5 h-1.5 bg-orange-600 rounded-full animate-pulse"></div>
               <span className="text-[10px] font-black tracking-widest uppercase text-slate-800">
                 {productGallery[currentIndex].label}
               </span>
             </div>
          </div>

          <div className="absolute bottom-8 right-8 flex gap-2 z-20">
            {productGallery.map((_, i) => (
              <div 
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-10 bg-orange-600' : 'w-2 bg-white/50'}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}