import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Economy from './components/Economy';
import Utilities from './components/Utilities';
import Roadmap from './components/Roadmap';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

import { ThemeProvider } from './context/ThemeContext';
import MemeCoinL from './components/MemeCoinL';
import RoadmapL from './components/RoadmapL';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-950 font-inter transition-colors duration-500">
        <Navbar />

        <main>
          <Hero />
          <Features />
          <Economy />
          <Utilities />
          <MemeCoinL/>
          <RoadmapL/>
          {/* <Roadmap />

          <div className="bg-slate-50/20 dark:bg-slate-900/10">
            <FAQ />
            <div className="text-center pb-24">
              <a href="#" className="text-launchex-main font-black text-xs uppercase tracking-widest hover:underline">
                Read all FAQs
              </a>
            </div>
          </div>

          
          <section className="py-24 px-6 bg-white dark:bg-slate-950 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-10">
                <div className="w-16 h-16 bg-launchex-main rounded-2xl flex items-center justify-center shadow-2xl shadow-launchex-main/30">
                  <span className="text-white font-black text-4xl">p</span>
                </div>
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-slate-950 dark:text-white mb-8 tracking-tighter leading-[0.8]">
                Driving the <br className="hidden md:block" />
                <span className="bg-linear-to-r from-launchex-main to-launchex-secondary bg-clip-text text-transparent pb-2">Future of Rewards</span>
              </h2>
              <p className="max-w-xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 font-semibold leading-relaxed mb-12">
                LaunchEx supports and empowers growing traders throughout the Prex ecosystem as a reward token backed by real protocol revenue.
              </p>
              <button className="bg-linear-to-r from-launchex-main to-launchex-secondary text-white px-10 py-4 rounded-xl font-black text-lg shadow-2xl shadow-launchex-main/20 hover:scale-105 transition-all">
                Start Earning LaunchEx
              </button>
            </div>
          </section> */}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
