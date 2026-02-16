import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Logo from '../assests/logo.png';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    // Scroll detection
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    // Smooth scroll function
    const handleScrollTo = (id) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    const navLinks = [
        { name: 'Why Meme Coin Fail', href: '#economy' },
        { name: 'Fair Way to Launch', href: '#utilities' },
        { name: 'Upcoming Launches', href: '#launches' },
        { name: 'Roadmap', href: '#roadmap' },
    ];

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800 shadow-sm py-3'
                    : 'bg-transparent py-5'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">

                        {/* Logo */}
                        <div
                            className="flex items-center gap-2 cursor-pointer group"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            <img src={Logo} alt="Logo" className="h-16 transition-transform duration-300" />
                        </div>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8">
                            <div className="flex items-center gap-8">
                                {navLinks.map((link) => (
                                    <button
                                        key={link.name}
                                        onClick={() => handleScrollTo(link.href)}
                                        className={`relative font-semibold text-sm tracking-wide transition-all duration-300 ${isScrolled
                                                ? 'text-slate-800 dark:text-white'
                                                : 'text-slate-700 dark:text-white/90'
                                            } hover:text-launchex-main`}
                                    >
                                        {link.name}
                                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-launchex-main transition-all duration-300 group-hover:w-full"></span>
                                    </button>
                                ))}
                            </div>

                            {/* Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-xl transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                            >
                                {theme === 'dark'
                                    ? <Sun className="w-5 h-5 text-yellow-400" />
                                    : <Moon className="w-5 h-5 text-slate-800" />}
                            </button>

                            {/* CTA Button */}
                            <a
                                href="https://app.launchex.ai/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="relative overflow-hidden bg-linear-to-r from-launchex-main to-launchex-secondary text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                    Get Started
                                </button>
                            </a>

                        </div>

                        {/* Mobile Buttons */}
                        <div className="md:hidden flex items-center gap-4">
                            <button onClick={toggleTheme}>
                                {theme === 'dark'
                                    ? <Sun className="w-6 h-6 text-yellow-400" />
                                    : <Moon className="w-6 h-6 text-slate-800 dark:text-white" />}
                            </button>

                            <button onClick={() => setIsOpen(!isOpen)}>
                                {isOpen
                                    ? <X className="w-7 h-7 text-slate-800 dark:text-white" />
                                    : <Menu className="w-7 h-7 text-slate-800 dark:text-white" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Overlay */}
            <div className={`fixed inset-0 z-40 transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}>

                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />

                {/* Slide Drawer */}
                <div className={`absolute top-0 right-0 h-full w-[80%] max-w-sm bg-white dark:bg-slate-950 shadow-2xl transform transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}>
                    <div className="p-6 space-y-6 mt-20">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleScrollTo(link.href)}
                                className="block w-full text-left text-lg font-semibold text-slate-800 dark:text-white hover:text-launchex-main transition-colors"
                            >
                                {link.name}
                            </button>
                        ))}

                        <button className="w-full mt-6 bg-linear-to-r from-launchex-main to-launchex-secondary text-white py-3 rounded-xl font-semibold text-lg shadow-md hover:scale-[1.02] transition-all">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
