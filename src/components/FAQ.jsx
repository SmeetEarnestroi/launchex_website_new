import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-100">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left hover:text-primary-600 transition-colors"
            >
                <span className="text-lg font-bold text-slate-900 pr-8">{question}</span>
                {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
            </button>
            {isOpen && (
                <div className="pb-6 text-slate-600 leading-relaxed font-medium">
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
        <section className="py-20 bg-slate-50/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Frequency Asked Questions</h2>
                    <p className="text-slate-500 text-lg">
                        Find answers to common questions about the LaunchEx Finance protocol.
                    </p>
                </div>

                <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
