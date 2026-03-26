// // constants/services.ts

// import { Factory, FlaskConical, Box, Cpu, GraduationCap, Layers } from "lucide-react";

// export const SERVICES = [
//   {
//     title: "Bridge Manufacturing",
//     description: "Launch products weeks ahead of hard tooling. Scalable production of 50–1,000 units using engineering-grade thermoplastics. Ideal for pilot runs and market testing.",
//     icon: Factory,
//     imageUrl: "/images/PCB Housing.jpg", 
//   },
//   {
//     title: "PCB & Electronics Enclosures",
//     description: "ESD-safe housings designed for perfect component fitment. We handle snap-fit optimization, thermal management, and assembly tolerances.",
//     icon: Cpu,
//     imageUrl: "/images/service-prototyping.jpg", 
//   },
//   {
//     title: "Custom Labware Solutions",
//     description: "Bespoke scientific apparatus for specific experimental protocols. From micro-fluidic jigs to custom centrifuge rotors, we fabricate what catalogues don't sell.",
//     icon: FlaskConical,
//     imageUrl: "/images/service-labware-rnd.jpg", 
//   },
//   {
//     title: "Corporate Brand Engineering",
//     description: "Physicalize your brand values. Premium, functional onboarding kits and executive artifacts—not just trinkets. Vapor-smoothed finishes and Pantone matching available.",
//     icon: Box,
//     imageUrl: "/images/service-corporate-branding.jpg", 
//   },
//   {
//     title: "Advanced Design Validation",
//     description: "Move from 'looks-like' to 'works-like'. High-fidelity functional prototyping to validate ergonomics, assembly, and mechanical stress before mass production.",
//     icon: Layers,
//     imageUrl: "/images/service-prototyping.jpg", 
//   },
//   {
//     title: "Institutional Research Support",
//     description: "Partnering with universities for grant-backed projects. We provide infrastructure for student innovation and complex geometry fabrication for PhD research.",
//     icon: GraduationCap,
//     imageUrl: "/images/service-academic-products.jpg", 
//   }
// ];










































// constants/services.ts
import { Factory, FlaskConical, Microscope, Cpu, GraduationCap, Zap, ShieldCheck } from "lucide-react";

export const SERVICES = [
  {
    title: "MRI-Compatible Animal Restraints",
    description: "Non-ferromagnetic and biocompatible hardware engineered specifically for high-field imaging protocols. Designed for stability and zero interference in sensitive research environments.",
    icon: ShieldCheck,
    imageUrl: "/images/Labware.jpg", 
  },
  {
    title: "Custom Labware & Microfluidics",
    description: "Specialized scientific apparatus including bespoke centrifuge rotors, micro-fluidic jigs, and reaction vessels. We manufacture the precise tools that aren't available in standard catalogues.",
    icon: FlaskConical,
    imageUrl: "/images/Lab_Equipments.jpg", 
  },
  {
    title: "R&D Instrumentation Enclosures",
    description: "High-performance housings for sensitive electronics. Engineered using industrial-grade polymers for thermal management, chemical resistance, and precise component fitment.",
    icon: Cpu,
    imageUrl: "/images/PCB.jpg", 
  },
  {
    title: "Industrial Research Tools",
    description: "Bespoke mechanical hardware for grant-backed institutional projects. We provide the engineering and fabrication infrastructure for complex PhD and university-level research.",
    icon: GraduationCap,
    imageUrl: "/images/Lab Equipment.png", 
  },
  {
    title: "Functional Prototype Validation",
    description: "Advanced engineering models used to validate mechanical stress, ergonomics, and assembly protocols before final production. Moving from digital concept to lab-ready validation.",
    icon: Microscope,
    imageUrl: "/images/Drone.jpg", 
  },
  {
    title: "Low-Volume Batch Production",
    description: "Direct manufacturing of end-use components in quantities of 50 to 1,000. Optimized for high-mix production of specialized hardware with zero tooling costs.",
    icon: Factory,
    imageUrl: "/images/PCB Housing.jpg", 
  }
];