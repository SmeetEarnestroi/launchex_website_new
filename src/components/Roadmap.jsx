import React from 'react';
import { Check, Circle } from 'lucide-react';

const Roadmap = () => {
    const steps = [
        {
            phase: "1",
            title: "Platform Launch",
            status: "Done",
            items: [
                "LaunchEx smart contract deployment",
                "Prex Markets activity system live",
                "LossLess™ rebate mechanism",
                "Internal production markets",
                "Tier-based trading levels"
            ],
            active: false,
        },
        {
            phase: "2",
            title: "LaunchEx Allocation Begins",
            status: "Active",
            items: [
                "Account creation allocations",
                "Trading volume reward pools",
                "Referral network rewards",
                "Grant program launch",
                "Unlock schedule enforcement"
            ],
            active: true,
        },
        {
            phase: "3",
            title: "Solvency Pool Opens",
            status: "Upcoming",
            items: [
                "Solvency pool initialization",
                "USDT redemption path (Path A)",
                "Premium LaunchEx enhancements",
                "Treasury transparency dashboard",
                "Redemption queue system"
            ],
            active: false,
        },
        {
            phase: "4",
            title: "Marketplace & PREX Utilities Go Live",
            status: "Upcoming",
            items: [
                "LaunchEx marketplace launch",
                "Spotlight auction system",
                "PREX token launch (Path B)",
                "Premium tools & AI Features",
                "Full ecosystem integration"
            ],
            active: false,
        }
    ];

    return (
        <section className="py-24 px-6 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 text-balance">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-launchex-main/10 text-launchex-main font-bold text-[10px] uppercase tracking-widest mb-6 border border-launchex-main/20">
                        Roadmap
                    </div>
                    <h2 className="text-4xl md:text-7xl font-black text-slate-950 dark:text-white mb-6 tracking-tight leading-[0.9]">
                        Roadmap to <span className="bg-linear-to-r from-launchex-main to-launchex-secondary bg-clip-text text-transparent pb-2">Full Maturity</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 font-medium text-lg md:text-xl max-w-2xl mx-auto italic">
                        Each phase strengthens backing before expanding utility.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, i) => (
                        <div key={i} className={`p-8 rounded-[32px] border transition-all duration-500 ${step.active ? 'border-launchex-main bg-white dark:bg-slate-900 shadow-2xl shadow-launchex-main/5' : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50'} relative group`}>
                            <div className="flex justify-between items-center mb-8">
                                <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${step.status === 'Done' ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800' :
                                    step.active ? 'bg-launchex-main text-white border-launchex-main' :
                                        'bg-slate-50 dark:bg-slate-800 text-slate-400 border-slate-100 dark:border-slate-700'
                                    }`}>
                                    Phase {step.phase}
                                </div>
                                {step.status === 'Done' ? <Check className="w-5 h-5 text-emerald-600" /> :
                                    step.active ? <Circle className="w-5 h-5 text-launchex-main fill-current" /> :
                                        <Circle className="w-5 h-5 text-slate-200 dark:text-slate-700" />}
                            </div>

                            <h3 className="text-2xl font-black text-slate-950 dark:text-white mb-6 tracking-tight">{step.title}</h3>
                            <ul className="space-y-4">
                                {step.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${step.status === 'Done' ? 'bg-emerald-500' : step.active ? 'bg-launchex-main' : 'bg-slate-200 dark:bg-slate-700'}`}></div>
                                        <span className="text-[13px] font-black text-slate-600 dark:text-slate-400 leading-tight">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
