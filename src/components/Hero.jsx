import React from "react";
import { ArrowRight, Play, ShieldCheck } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-950 pt-32 pb-24 md:pt-44 md:pb-32">

      {/* 🔵 Premium Background Effects */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] 
        bg-linear-to-br from-launchex-main/30 via-launchex-secondary/20 to-transparent 
        blur-[140px] -z-10"></div>

      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] 
        bg-launchex-secondary/20 blur-[120px] -z-10"></div>

      <div className="container-custom text-center">

        {/* 🔥 Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full
          bg-launchex-main/10 text-launchex-main
          font-semibold text-xs tracking-[0.15em] uppercase
          border border-launchex-main/20 mb-2 backdrop-blur-md">

          <ShieldCheck className="w-4 h-4" />
          Audited • Transparent • Fully Backed
        </div>

        {/* 🏆 Headline */}
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight mb-8 text-slate-900 dark:text-white">
          Redefining  
          <br className="hidden md:block" />
          <span className="bg-linear-to-r from-launchex-main to-launchex-secondary bg-clip-text text-transparent">
            On-Chain Wealth Infrastructure
          </span>
        </h1>

        {/* 📝 Subtext */}
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed">
          LaunchEx transforms treasury growth into real, sustainable yield for holders.
          100% collateralized, transparently managed, and powered by autonomous smart contracts.
          Built for long-term value — not short-term hype.
        </p>

        {/* 🎯 CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-5">

          {/* Primary CTA */}
          <button className="group relative inline-flex items-center gap-3
            px-10 py-4 rounded-2xl font-semibold text-lg text-white
            bg-launchex-main
            shadow-[0_10px_30px_-5px_rgba(96,165,250,0.5)]
            hover:scale-105 transition-all duration-300">

            Launch App
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Secondary CTA */}
          <button className="inline-flex items-center gap-2
            px-10 py-4 rounded-2xl font-semibold text-lg
            text-slate-900 dark:text-white
            border border-slate-200 dark:border-slate-700
            backdrop-blur-sm
            hover:bg-slate-50 dark:hover:bg-slate-800
            transition-all duration-300">

            <Play className="w-5 h-5 fill-current" />
            Read Documentation
          </button>
        </div>

        {/* 📊 Stats Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  max-w-5xl mx-auto">

          {[
            { value: "$12.4M+", label: "Treasury Assets" },
            { value: "31.2%", label: "Yield Distributed (APY)" },
            { value: "142%", label: "Collateralization Ratio" },
          ].map((stat, index) => (
            <div
              key={index}
              className="group rounded-3xl p-8
                bg-white/70 dark:bg-slate-900/60
                backdrop-blur-xl
                border border-slate-100 dark:border-slate-800
                shadow-xl
                hover:shadow-2xl hover:-translate-y-2
                transition-all duration-300 text-center"
            >
              <div className="text-4xl font-bold bg-linear-to-r from-launchex-main to-launchex-secondary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
