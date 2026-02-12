import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-100 dark:border-slate-800 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left hover:text-launchex-main transition-colors group"
            >
                <span className="text-lg md:text-xl font-black text-slate-950 dark:text-white pr-8 group-hover:translate-x-1 transition-transform">{question}</span>
                {isOpen ? <ChevronUp className="w-5 h-5 text-launchex-main" /> : <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-launchex-main" />}
            </button>
            {isOpen && (
                <div className="pb-6 text-slate-600 dark:text-slate-400 leading-relaxed font-medium transition-all">
                    {answer}
                </div>
            )}
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "How is LaunchEx yield sustainable?",
            answer: "Yield is generated via automated treasury operations including delta-neutral hedging, DEX liquidity provision, and cross-protocol arbitrage. 100% of these profits are shared with LaunchEx holders."
        },
        {
            question: "Is the treasury audit public?",
            answer: "Yes. Our treasury is verified on-chain 24/7. We also undergo quarterly security audits by top-tier firms like OpenZeppelin and Trail of Bits."
        },
        {
            question: "Can I mint LaunchEx with any asset?",
            answer: "Initially, we support USDC, USDT, and DAI. Governance proposals are currently active to include blue-chip assets like ETH and wBTC as collateral."
        }
    ];

    return (
        <section className="py-20 bg-slate-50/50 dark:bg-slate-900/10 transition-colors duration-500">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-7xl font-black text-slate-950 dark:text-white mb-6 tracking-tight leading-[0.9]">Frequently Asked <br className="hidden md:block" /> <span className="bg-linear-to-r from-launchex-main to-launchex-secondary bg-clip-text text-transparent pb-2">Questions</span></h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium italic max-w-2xl mx-auto">
                        Find answers to common questions about the LaunchEx Finance protocol.
                    </p>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100 dark:border-slate-800">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
