import React from 'react';
import { Twitter, Instagram, Mail } from 'lucide-react';
import Logo from '../assests/logo.png';


const Footer = () => {
    return (
        <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 pt-24 pb-12 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">

                    {/* Brand Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-8">
                            <div className="flex items-center gap-2 cursor-pointer">
                                <img src={Logo} alt="" className='h-14' />
                            </div>
                        </div>
                        <p className="text-slate-400 font-black text-[10px] uppercase tracking-widest leading-relaxed mb-4">
                            The User-First Algorithmic Token
                        </p>
                        <p className="text-slate-500 font-medium text-xs leading-relaxed mb-10">
                            Earned through activity. Backed by revenue. Built for real users.
                        </p>
                        <div className="flex gap-4">
                            <Twitter className="w-5 h-5 text-slate-300 dark:text-slate-600 hover:text-launchex-main cursor-pointer transition-colors" />
                            <Instagram className="w-5 h-5 text-slate-300 dark:text-slate-600 hover:text-launchex-main cursor-pointer transition-colors" />
                            <Mail className="w-5 h-5 text-slate-300 dark:text-slate-600 hover:text-launchex-main cursor-pointer transition-colors" />
                        </div>
                    </div>

                    {/* Links 1: PRODUCT */}
                    <div>
                        <h4 className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-8">PRODUCT</h4>
                        <ul className="space-y-4 text-[13px] font-bold text-slate-400 dark:text-slate-500">
                            <li><a href="#" className="hover:text-launchex-main transition-colors">How it Works</a></li>
                            <li><a href="#" className="hover:text-launchex-main transition-colors">Earn LaunchEx</a></li>
                            <li><a href="#" className="hover:text-launchex-main transition-colors">Transparency</a></li>
                            <li><a href="#" className="hover:text-launchex-main transition-colors">Roadmap</a></li>
                            <li><a href="#" className="hover:text-launchex-main transition-colors">LaunchEx Whitepaper</a></li>
                        </ul>
                    </div>

                    {/* Links 2: RESOURCES */}
                    <div>
                        <h4 className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-8">RESOURCES</h4>
                        <ul className="space-y-4 text-[13px] font-bold text-slate-400 dark:text-slate-500">
                            <li><a href="#" className="hover:text-launchex-main transition-colors">Developers</a></li>
                            <li><a href="#" className="hover:text-launchex-main transition-colors">API Reference</a></li>
                            <li><a href="#" className="hover:text-launchex-main transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-launchex-main transition-colors">About Prex Markets</a></li>
                        </ul>
                    </div>

                    {/* Links 3: COMPANY */}
                    <div>
                        <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] mb-8">COMPANY</h4>
                        <ul className="space-y-4 text-[13px] font-bold text-slate-400">
                            <li><a href="#" className="hover:text-primary-600 transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-primary-600 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-primary-600 transition-colors">Press</a></li>
                        </ul>
                    </div>

                    {/* Links 4: LEGAL */}
                    <div>
                        <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] mb-8">LEGAL</h4>
                        <ul className="space-y-4 text-[13px] font-bold text-slate-400">
                            <li><a href="#" className="hover:text-primary-600 transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-primary-600 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary-600 transition-colors">Risk Disclosure</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:row items-center justify-between gap-6">
                    <p className="text-[10px] font-bold text-slate-400 dark:text-slate-600">
                        © 2026 LaunchEx. All rights reserved.
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="px-3 py-1 bg-launchex-main/10 dark:bg-launchex-main/5 rounded-full flex items-center gap-2 border border-launchex-main/20">
                            <div className="w-1.5 h-1.5 bg-launchex-main rounded-full animate-pulse"></div>
                            <span className="text-[10px] font-black text-launchex-main uppercase tracking-widest">LaunchEx</span>
                        </div>
                        <p className="text-[10px] font-bold text-slate-400 dark:text-slate-600">LaunchEx is an algorithmic treasury-backed token</p>
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default Footer;
