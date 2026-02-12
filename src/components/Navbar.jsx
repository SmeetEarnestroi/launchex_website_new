import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assests/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2 cursor-pointer">
                       <img src={Logo} alt="" className='h-14' />
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-6">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} className={`${isScrolled ? 'text-black':'text-white'} hover:text-primary-600 font-medium text-md transition-colors`}>
                                    {link.name}
                                </a>
                            ))}
                        </div>
                        <button className="bg-launchex-main
  text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-primary-700 ">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="dark:text-white">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-slate-100 px-4 py-4 space-y-3 shadow-lg">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="block text-slate-600 font-medium py-2">
                            {link.name}
                        </a>
                    ))}
                    <button className="w-full bg-primary-600 text-white px-4 py-3 rounded-lg font-bold">
                        Get Started
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
