"use client";
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";
import { SERVICES } from "@/constants/services";
import { useState, useEffect } from "react";
import { X, ArrowRight, ShieldCheck, Microscope, FlaskConical } from "lucide-react"; 

export default function ServiceContent() {
  const [selectedService, setSelectedService] = useState<(typeof SERVICES)[0] | null>(null);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedService]);

  return (
    <section id="products" className="py-20 relative bg-white">
      {/* SECTION HEADER: Re-aligned to Product Lineup */}
      <div className="mb-20 text-center lg:text-left max-w-7xl mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-heading text-slate-900 mb-4 tracking-tight font-black">
          Laboratory Instrumentation
        </h2>
        <p className="text-slate-500 text-lg max-w-2xl lg:mx-0 mx-auto leading-relaxed">
          We engineer proprietary research tools for labs that require hardware not found in standard catalogues. 
          Every product is designed in-house and validated for clinical and research protocols.
        </p>
      </div>

      <div className="flex flex-col gap-16 lg:gap-24 w-full px-4 max-w-7xl mx-auto">
        {SERVICES.map((service, index) => {
          // Audit Rule: Exclude low-relevance items like Corporate Gifting
          if (service.title.toLowerCase().includes("corporate")) return null;

          const isFlipped = index % 2 !== 0;

          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${isFlipped ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200 group bg-white`}
            >
              <div 
                className="flex-1 p-8 lg:p-12 flex flex-col justify-between relative"
                style={{ 
                  backgroundColor: '#ffffff',
                  backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', 
                  backgroundSize: '32px 32px' 
                }}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-orange-50 rounded-xl shadow-sm text-orange-600 border border-orange-100">
                      <service.icon size={28} />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex gap-2 mb-6">
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[10px] font-bold uppercase tracking-widest border border-slate-200">
                      In-House Design
                    </span>
                    <span className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-[10px] font-bold uppercase tracking-widest border border-orange-100">
                      Lab Validated
                    </span>
                  </div>

                  <p className="text-lg text-slate-700 font-medium leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                <div className="relative z-10 pt-6 border-t border-slate-100">
                  <button 
                    onClick={() => setSelectedService(service)}
                    className="group/btn relative inline-flex items-center gap-4 px-8 py-4 bg-slate-900 rounded-xl text-white font-bold uppercase tracking-widest text-[10px] transition-all duration-300 hover:bg-orange-600 shadow-lg active:scale-95"
                  >
                    View Specifications
                    <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>

              <div className="flex-1 relative min-h-[400px] overflow-hidden bg-slate-50">
                <Image src={service.imageUrl} alt={service.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-200 shadow-sm text-[10px] font-black uppercase text-slate-900">
                    K3D Reference: {index + 101}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            />

            <motion.div 
              layoutId={selectedService.title}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-200"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 z-50 p-2 bg-slate-100 rounded-full hover:bg-orange-100 hover:text-orange-600 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="flex-1 space-y-8">
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tighter mb-4">
                        {selectedService.title}
                      </h2>
                      <p className="text-lg text-slate-600 leading-relaxed font-medium">
                        {selectedService.description} Engineered specifically for rigorous protocol environments where standard hardware fails to meet tolerances.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <ShieldCheck className="text-orange-600 mb-2" size={20} />
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Safety Class</p>
                        <p className="text-sm font-bold text-slate-900">Lab-Safe / Non-Ferromagnetic</p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <Microscope className="text-orange-600 mb-2" size={20} />
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Precision</p>
                        <p className="text-sm font-bold text-slate-900">±0.05mm Tolerance</p>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-slate-100">
                      <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                        <FlaskConical size={14} className="text-orange-600" />
                        Research Application
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        This instrument is designed for high-field imaging and chemical-resistant environments. 
                        It has been validated through iterative stress-testing and parametric analysis in Fusion 360.
                      </p>
                    </div>
                  </div>

                  <div className="lg:w-[320px] space-y-6">
                    <div className="relative aspect-square rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
                      <Image src={selectedService.imageUrl} alt="Detail" fill className="object-cover" />
                    </div>
                    
                    <div className="bg-slate-900 p-6 rounded-2xl text-white">
                      <h4 className="font-bold text-sm mb-2">Institutional Inquiry</h4>
                      <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                        Request a formal quote or technical datasheet for grant-funded research or batch production.
                      </p>
                      <a href="#contact" onClick={() => setSelectedService(null)} className="block w-full text-center bg-orange-600 py-3 rounded-lg font-bold text-sm hover:bg-orange-500 transition-colors">
                        Request Datasheet
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}