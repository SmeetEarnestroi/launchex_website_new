import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Logo from '../assests/logo.png';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Trade', href: '#' },
        { name: 'Earn LaunchEx', href: '#' },
        { name: 'Redeem', href: '#' },
        { name: 'Governance', href: '#' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 shadow-sm py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2 cursor-pointer">
                        <img src={Logo} alt="" className='h-16' />
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-6">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} className={`${isScrolled ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-white/90'} hover:text-launchex-main dark:hover:text-launchex-main font-semibold text-sm tracking-tight transition-all duration-300`}>
                                    {link.name}
                                </a>
                            ))}
                        </div>
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-lg transition-all duration-300 ${isScrolled
                                ? 'text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                                : 'text-slate-900 dark:text-white hover:bg-white/10'}`}
                        >
                            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                        <button className="bg-linear-to-r from-launchex-main to-launchex-secondary
  text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-primary-700 ">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-lg transition-all duration-300 ${isScrolled ? 'text-slate-900 dark:text-white' : 'text-slate-900 dark:text-white'}`}
                        >
                            {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                        </button>
                        <button onClick={() => setIsOpen(!isOpen)} className={isScrolled ? 'text-slate-900 dark:text-white' : 'text-white'}>
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 px-4 py-4 space-y-3 shadow-lg">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="block text-slate-700 dark:text-slate-300 font-semibold py-2 transition-colors hover:text-launchex-main dark:hover:text-launchex-main">
                            {link.name}
                        </a>
                    ))}
                    <button className="w-full bg-linear-to-r from-launchex-main to-launchex-secondary text-white px-4 py-3 rounded-lg font-bold">
                        Get Started
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
