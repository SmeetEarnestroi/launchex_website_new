import React, { useEffect, useState } from "react";
import { ArrowRight, Play, ShieldCheck } from "lucide-react";

const Hero = () => {
  const targetDate = new Date("2026-03-31T00:00:00");

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    if (difference <= 0) return null;

    return {
      DAYS: Math.floor(difference / (1000 * 60 * 60 * 24)),
      HOURS: Math.floor((difference / (1000 * 60 * 60)) % 24),
      MINUTES: Math.floor((difference / 1000 / 60) % 60),
      SECONDS: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-950 pt-32 pb-28 md:pt-44 md:pb-36 transition-colors duration-500">

      {/* 🌈 Premium Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] 
        bg-linear-to-r from-launchex-main/30 via-launchex-secondary/20 to-transparent
        blur-[160px] opacity-50 -z-10" />

      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] 
        bg-launchex-secondary/20 blur-[140px] -z-10" />

      <div className="container-custom text-center relative z-10">

        {/* 🛡 Premium Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full
          bg-white/60 dark:bg-white/5 backdrop-blur-xl
          border border-launchex-main/20
          text-launchex-main font-semibold text-xs tracking-widest uppercase mb-6">

          <ShieldCheck className="w-4 h-4" />
          Audited • Transparent • Fully Backed
        </div>

        {/* 🏆 Headline */}
        <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[0.95] mb-8 text-slate-950 dark:text-white">
          The Fair Way to
          <br className="hidden md:block" />
          <span className="bg-linear-to-r from-launchex-main to-launchex-secondary bg-clip-text text-transparent">
            Launch Meme Coins
          </span>
        </h1>

        {/* 📝 Subtext */}
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-medium">
          No bots. No snipers. No insiders.
          Just real communities launching real meme coins.
        </p>

        {/* <p className="max-w-2xl mx-auto text-sm md:text-base text-slate-500 dark:text-slate-500 mb-12">
          LaunchEx is the world’s first AI-powered meme coin launch exchange — 
          built to protect communities and reward early believers.
        </p> */}

        {/* 🎯 CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-14">

          {/* Primary CTA */}
          <button className="group relative inline-flex items-center gap-3
            px-10 py-4 rounded-2xl font-semibold text-lg text-white
            bg-linear-to-r from-launchex-main to-launchex-secondary
            transition-all duration-300
           
           ">
            <a
              href="https://app.launchex.ai/"
              target="_blank"
              rel="noopener noreferrer"
            > <span className="relative z-10">Launch App</span></a>

            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />

            {/* Glow Effect */}

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
            Documentation
          </button>
        </div>

        {/* ⏳ Countdown Section */}
        <div className="mb-12">
          <p className="text-xs tracking-widest uppercase text-slate-500 dark:text-slate-400 mb-6 font-semibold">
            IEO Begins In
          </p>

          {timeLeft ? (
            <div className="flex justify-center gap-4 flex-wrap">
              {Object.entries(timeLeft).map(([label, value]) => (
                <div
                  key={label}
                  className="relative group w-[90px] sm:w-[110px]"
                >
                  <div className="rounded-2xl p-4 text-center
                    bg-white/70 dark:bg-white/5
                    backdrop-blur-xl
                    border border-slate-200 dark:border-white/10
                    shadow-lg">

                    <div className="text-3xl font-bold bg-linear-to-r 
                      from-launchex-main to-launchex-secondary 
                      bg-clip-text text-transparent">
                      {String(value).padStart(2, "0")}
                    </div>

                    <div className="text-[10px] uppercase tracking-widest mt-2 text-slate-500 dark:text-slate-400">
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <span className="text-lg font-semibold text-launchex-main">
              🚀 Live Now
            </span>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
