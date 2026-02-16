import React from "react";
import {
  Twitter,
  Send,
  Github,
  Linkedin
} from "lucide-react";
import Logo from "../assests/logo.png";

const Footer = () => {
  const handleScrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-white dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800 pt-24 pb-12 transition-colors duration-300 overflow-hidden">

      {/* Subtle Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-linear-to-r from-launchex-main/20 to-launchex-secondary/20 blur-3xl opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">

          {/* Brand */}
          <div>
            <img src={Logo} alt="LaunchEx" className="h-14 mb-6 hover:scale-105 transition-transform duration-300" />

            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-slate-800 dark:text-white mb-4">
              The Fair Way to Launch Meme Coins
            </p>

            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
              Earned through activity. Backed by revenue. Built for real users.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[Twitter, Send, Github, Linkedin].map((Icon, index) => (
                <div
                  key={index}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-linear-to-r hover:from-launchex-main hover:to-launchex-secondary hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <Icon className="w-4 h-4" />
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-8">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500 dark:text-slate-400">
              {[
                { name: "Why Meme Coin Fail", id: "#economy" },
                { name: "Fair Way to Launch", id: "#utilities" },
                { name: "Upcoming Launches", id: "#launches" },
                { name: "Roadmap", id: "#roadmap" },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleScrollTo(link.id)}
                    className="hover:text-launchex-main transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-8">
              Resources
            </h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500 dark:text-slate-400">
              <li className="hover:text-launchex-main cursor-pointer transition-colors">Docs</li>
              <li className="hover:text-launchex-main cursor-pointer transition-colors">Whitepaper</li>
              <li className="hover:text-launchex-main cursor-pointer transition-colors">Audit Report</li>
              <li className="hover:text-launchex-main cursor-pointer transition-colors">Community</li>
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-8">
              Stay Updated
            </h4>

            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              Get early access to launches and exclusive updates.
            </p>

            <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent flex-1 px-4 py-3 text-sm focus:outline-none text-slate-700 dark:text-white"
              />
              <button className="bg-linear-to-r from-launchex-main to-launchex-secondary text-white px-5 py-3 text-sm font-semibold hover:opacity-90 transition-all">
                Join
              </button>
            </div>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200/60 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <p className="text-slate-500 dark:text-slate-600">
            © 2026 LaunchEx. All rights reserved.
          </p>

          <div className="flex gap-6 text-slate-500 dark:text-slate-600">
            <span className="hover:text-launchex-main cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-launchex-main cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
