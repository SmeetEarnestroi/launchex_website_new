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
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 text-balance">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 font-bold text-[10px] uppercase tracking-widest mb-6 border border-primary-100">
                        Roadmap
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-none">
                        Roadmap to <span className="text-primary-600">Full Maturity</span>
                    </h2>
                    <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">
                        Each phase strengthens backing before expanding utility.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, i) => (
                        <div key={i} className={`p-8 rounded-[32px] border ${step.active ? 'border-primary-600 bg-white shadow-2xl shadow-primary-600/5' : 'border-slate-100 bg-white'} relative group`}>
                            <div className="flex justify-between items-center mb-8">
                                <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${step.status === 'Done' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                                        step.active ? 'bg-primary-600 text-white border-primary-600' :
                                            'bg-slate-50 text-slate-400 border-slate-100'
                                    }`}>
                                    Phase {step.phase}
                                </div>
                                {step.status === 'Done' ? <Check className="w-5 h-5 text-emerald-600" /> :
                                    step.active ? <Circle className="w-5 h-5 text-primary-600 fill-current" /> :
                                        <Circle className="w-5 h-5 text-slate-200" />}
                            </div>

                            <h3 className="text-xl font-black text-slate-900 mb-6 tracking-tight">{step.title}</h3>
                            <ul className="space-y-4">
                                {step.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${step.status === 'Done' ? 'bg-emerald-500' : step.active ? 'bg-primary-500' : 'bg-slate-200'}`}></div>
                                        <span className="text-[13px] font-bold text-slate-500 leading-tight">{item}</span>
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
