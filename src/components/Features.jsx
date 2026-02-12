import React from 'react';
import { Shield, Zap, TrendingUp, BarChart3, AlertCircle, Info } from 'lucide-react';

const Features = () => {
    return (
        <div className="bg-white">
            {/* --- Section: What is LaunchEx? --- */}
            <section className="py-24 px-6 border-b border-slate-50">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex justify-center mb-10">
                        <div className="w-16 h-16 bg-launchex-main rounded-2xl flex items-center justify-center shadow-xl shadow-primary-600/20 rotate-45">
                            <Zap className="text-white w-8 h-8 -rotate-45" />
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">What is LaunchEx?</h2>
                    <p className="text-slate-500 font-medium text-lg leading-relaxed mb-12">
                        LaunchEx is a Proof-of-Activity digital asset designed to reward real users, not speculators. <br />
                        You don't buy LaunchEx. You earn it by participating in the Prex Markets ecosystem.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                        {[
                            "LaunchEx cannot be bought on exchanges.",
                            "LaunchEx is minted only through real activity.",
                            "LaunchEx is backed by verifiable protocol revenue.",
                            "LaunchEx introduces downside protection for traders."
                        ].map((text, i) => (
                            <div key={i} className="bg-slate-50/50 p-5 rounded-xl border border-slate-100 flex items-center gap-4">
                                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                                <span className="text-slate-700 font-bold text-sm tracking-tight">{text}</span>
                            </div>
                        ))}
                    </div>

                    <p className="mt-12 text-slate-900 font-black text-lg tracking-tight">
                        LaunchEx aligns the platform's success with its users' success.
                    </p>
                    <a href="#" className="inline-block mt-4 text-primary-600 font-black text-sm uppercase tracking-widest hover:underline">
            Learn How LaunchEx Works
                    </a>
                </div>
            </section>

            {/* --- Section: Comparison --- */}
            <section className="py-24 px-6 bg-slate-50/30">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 font-bold text-[10px] uppercase tracking-widest mb-6 border border-primary-100">
                            Why LaunchEx Token
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                            The problem with today's <span className="text-accent-600">reward tokens</span>
                        </h2>
                        <p className="text-slate-500 font-medium text-lg">
                            Most DeFi platforms rely on inflationary reward tokens that:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Traditional Rewards */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-6 h-6 rounded-md bg-red-100 flex items-center justify-center text-red-600">
                                    <AlertCircle className="w-4 h-4" />
                                </div>
                                <h3 className="text-lg font-black text-slate-800">Traditional Rewards</h3>
                            </div>
                            {[
                                "Are printed without a real backing",
                                "Require upfront capital to participate",
                                "Collapse under sell pressure",
                                "Offer no protection when users lose money"
                            ].map((text, i) => (
                                <div key={i} className="bg-red-50/30 p-5 rounded-xl border border-red-100/50 flex items-center gap-4">
                                    <div className="w-8 h-8 bg-red-100/50 rounded-lg flex items-center justify-center text-red-600">
                                        <Zap className="w-4 h-4" />
                                    </div>
                                    <span className="text-red-900/70 font-bold text-sm">{text}</span>
                                </div>
                            ))}
                            <p className="text-xs text-slate-400 italic pt-4">This creates an extractive ecosystem where platforms win, and users return.</p>
                        </div>

                        {/* LaunchEx System */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-6 h-6 rounded-md bg-amber-100 flex items-center justify-center text-amber-600">
                                    <Zap className="w-4 h-4" />
                                </div>
                                <h3 className="text-lg font-black text-slate-800">LaunchEx flips the model</h3>
                            </div>
                            <div className="text-xs font-black text-slate-400 mb-4 uppercase tracking-widest pl-1">With LaunchEx:</div>
                            {[
                                "Users earn value before risking capital",
                                "Rewards come from real revenue",
                                "Losses are partially refunded automatically",
                                "Long-term users capture the upside"
                            ].map((text, i) => (
                                <div key={i} className="bg-amber-50/30 p-5 rounded-xl border border-amber-200/50 flex items-center gap-4">
                                    <div className="w-8 h-8 bg-amber-100/50 rounded-lg flex items-center justify-center text-amber-600">
                                        <Zap className="w-4 h-4" />
                                    </div>
                                    <span className="text-amber-900/70 font-bold text-sm">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Warning Box */}
                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex items-start gap-4 shadow-sm shadow-amber-100/50">
                        <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                            <AlertCircle className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                            <h4 className="text-amber-900 font-black text-sm uppercase tracking-widest mb-1">Important: LaunchEx is an Algorithmic Treasury-Backed Token</h4>
                            <p className="text-amber-800/80 text-sm font-medium leading-relaxed">
                                Unlike USDC and USDT which are 1:1 fiat-backed, LaunchEx is an <span className="font-black text-amber-900">algorithmic treasury-backed token</span> with dynamic redemption ratios based on treasury health and redemption demand. You earn it through activity—you don't buy it.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;
