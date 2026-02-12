import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Economy from './components/Economy';
import Utilities from './components/Utilities';
import Roadmap from './components/Roadmap';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Economy />
        <Utilities />
        <Roadmap />

        {/* FAQ Section with Read all FAQs link */}
        <div className="bg-slate-50/20">
          <FAQ />
          <div className="text-center pb-24">
            <a href="#" className="text-launchex-main font-black text-xs uppercase tracking-widest hover:underline">
               Read all FAQs 
            </a>
          </div>
        </div>

        {/* Final CTA Section */}
        <section className="py-24 px-6 bg-white text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-10">
              <div className="w-16 h-16 bg-launchex-main rounded-2xl flex items-center justify-center shadow-2xl shadow-launchex-main/30">
                <span className="text-white font-black text-4xl">p</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
              Driving the Future of Rewards
            </h2>
            <p className="max-w-xl mx-auto text-lg text-slate-500 font-medium leading-relaxed mb-12">
              LaunchEx supports and empowers growing traders throughout the Prex ecosystem as a reward token backed by real protocol revenue.
            </p>
            <button className="bg-launchex-main text-white px-10 py-4 rounded-xl font-black text-lg shadow-2xl shadow-launchex-main/20 hover:bg-primary-700 transition-all">
              Start Earning LaunchEx
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
