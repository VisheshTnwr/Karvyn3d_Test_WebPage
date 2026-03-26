"use client";
import { useForm } from 'react-hook-form';
import { Lock, FileText, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { submitToGoogleSheets } from '@/app/actions/submit-form';
import { useState } from 'react';

// This now matches the exported type in your action file exactly
type ContactFormData = {
  name: string;
  email: string;
  phone?: string; 
  institution: string;
  productLine: string;
  volume: string;
  message: string;
};

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, reset, formState: { isSubmitting } } =
    useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    const result = await submitToGoogleSheets(data);

    if (result.success) {
      setIsSuccess(true);
      reset(); 
      setTimeout(() => setIsSuccess(false), 5000);
    } else {
      alert("Submission failed. Please try again or contact us directly.");
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-16 overflow-hidden relative shadow-xl">

        <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-slate-900 pointer-events-none">
          <FileText size={300} strokeWidth={0.5} />
        </div>

        <div className="grid lg:grid-cols-3 gap-16 relative z-10">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-heading text-slate-900 mb-6 font-black tracking-tight">Technical Inquiry</h2>
            <p className="text-slate-500 mb-8 leading-relaxed font-medium">
              Request a formal quote or technical datasheet for institutional procurement and research-grade manufacturing.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-slate-600">
                <ShieldCheck size={20} className="text-orange-600" />
                <span className="text-sm font-bold uppercase tracking-wider">NDA Ready</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed italic">
                Our engineers review all specifications against lab safety and imaging protocols before providing a feasibility report.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-500">
                <CheckCircle2 size={64} className="text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received</h3>
                <p className="text-slate-500">Our engineering team will review your specifications and contact you via your work email.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                    <input
                      {...register("name", { required: true })}
                      className="w-full bg-white border border-slate-200 rounded-lg p-3 text-slate-900 focus:border-orange-600 focus:ring-1 focus:ring-orange-600 outline-none transition-all"
                      placeholder="Dr. John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Work Email</label>
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      className="w-full bg-white border border-slate-200 rounded-lg p-3 text-slate-900 focus:border-orange-600 focus:ring-1 focus:ring-orange-600 outline-none transition-all"
                      placeholder="john@university.edu"
                    />
                  </div>
                </div>

                {/* Added Institution field to resolve the type mismatch and data collection */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Institution / Company</label>
                  <input
                    {...register("institution", { required: true })}
                    className="w-full bg-white border border-slate-200 rounded-lg p-3 text-slate-900 focus:border-orange-600 focus:ring-1 focus:ring-orange-600 outline-none transition-all"
                    placeholder="e.g. Stanford University or Research Lab"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Product of Interest</label>
                    <select
                      {...register("productLine")}
                      className="w-full bg-white border border-slate-200 rounded-lg p-3 text-slate-900 focus:border-orange-600 outline-none"
                    >
                      <option>MRI-Compatible Animal Restraints</option>
                      <option>Custom Labware / Centrifuge Rotors</option>
                      <option>R&D Instrumentation Enclosures</option>
                      <option>New Product Development</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Target Quantity</label>
                    <select
                      {...register("volume")}
                      className="w-full bg-white border border-slate-200 rounded-lg p-3 text-slate-900 focus:border-orange-600 outline-none"
                    >
                      <option>Institutional Batch (50 - 500)</option>
                      <option>Low Volume (10 - 50)</option>
                      <option>Bespoke / Single Unit</option>
                      <option>Ongoing Production</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Technical Specifications</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Specific lab protocols, material requirements (Autoclave safe, Non-ferromagnetic), or mechanical tolerances..."
                    className="w-full bg-white border border-slate-200 rounded-lg p-3 text-slate-900 focus:border-orange-600 focus:ring-1 focus:ring-orange-600 outline-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200 mt-8">
                  <div className="flex items-center gap-2 text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                    <Lock size={12} />
                    <span>Secure Protocol Encryption</span>
                  </div>
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="bg-slate-900 text-white px-8 py-3 rounded-lg font-black uppercase tracking-widest text-[10px] hover:bg-orange-600 hover:shadow-lg transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Generating Ticket..." : "Request Technical Quote"} <Send size={14} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}