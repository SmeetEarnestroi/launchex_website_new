import React from 'react';
import { Shield, Zap, TrendingUp, BarChart3, AlertCircle, Info } from 'lucide-react';

const Features = () => {
    return (
        <div className="bg-white dark:bg-slate-950 transition-colors duration-500">
            {/* --- Section: What is LaunchEx? --- */}
            <section className="py-24 px-6 border-b border-slate-50 dark:border-slate-800">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex justify-center mb-10">
                        <div className="w-16 h-16 bg-linear-to-br from-launchex-main to-launchex-secondary rounded-2xl flex items-center justify-center shadow-xl shadow-launchex-main/20 rotate-45">
                            <Zap className="text-white w-8 h-8 -rotate-45" />
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-950 dark:text-white mb-6 tracking-tight leading-tight">What is LaunchEx?</h2>
                    <p className="text-slate-600 dark:text-slate-400 font-medium text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
                        LaunchEx is a Proof-of-Activity digital asset designed to reward real users, not speculators.
                        You don't buy LaunchEx. You earn it by participating in the Prex Markets ecosystem.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                        {[
                            "LaunchEx cannot be bought on exchanges.",
                            "LaunchEx is minted only through real activity.",
                            "LaunchEx is backed by verifiable protocol revenue.",
                            "LaunchEx introduces downside protection for traders."
                        ].map((text, i) => (
                            <div key={i} className="bg-slate-50/50 dark:bg-slate-900/50 p-5 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center gap-4">
                                <div className="w-2 h-2 bg-launchex-main rounded-full"></div>
                                <span className="text-slate-700 dark:text-slate-300 font-bold text-sm tracking-tight">{text}</span>
                            </div>
                        ))}
                    </div>

                    <p className="mt-12 text-slate-900 dark:text-white font-black text-lg tracking-tight">
                        LaunchEx aligns the platform's success with its users' success.
                    </p>
                    <a href="#" className="inline-block mt-4 text-launchex-main font-black text-sm uppercase tracking-widest hover:underline">
                        Learn How LaunchEx Works
                    </a>
                </div>
            </section>

            {/* --- Section: Comparison --- */}
            <section className="py-24 px-6 bg-slate-50/30 dark:bg-slate-900/10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/20 text-launchex-main font-bold text-[10px] uppercase tracking-widest mb-6 border border-primary-100 dark:border-primary-800">
                            Why LaunchEx Token
                        </div>
                        <h2 className="text-4xl md:text-7xl font-black text-slate-950 dark:text-white mb-6 tracking-tight leading-[0.9]">
                            The problem with today's <span className="bg-linear-to-r from-launchex-main to-launchex-secondary bg-clip-text text-transparent pb-2">reward tokens</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 font-medium text-lg md:text-xl max-w-2xl mx-auto">
                            Most DeFi platforms rely on inflationary reward tokens that:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Traditional Rewards */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-6 h-6 rounded-md bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-red-600">
                                    <AlertCircle className="w-4 h-4" />
                                </div>
                                <h3 className="text-lg font-black text-slate-800 dark:text-slate-200">Traditional Rewards</h3>
                            </div>
                            {[
                                "Are printed without a real backing",
                                "Require upfront capital to participate",
                                "Collapse under sell pressure",
                                "Offer no protection when users lose money"
                            ].map((text, i) => (
                                <div key={i} className="bg-red-50/30 dark:bg-red-900/10 p-5 rounded-xl border border-red-100/50 dark:border-red-900/20 flex items-center gap-4">
                                    <div className="w-8 h-8 bg-red-100/50 dark:bg-red-900/20 rounded-lg flex items-center justify-center text-red-600">
                                        <Zap className="w-4 h-4" />
                                    </div>
                                    <span className="text-red-900/70 dark:text-red-400 font-bold text-sm">{text}</span>
                                </div>
                            ))}
                            <p className="text-xs text-slate-400 italic pt-4">This creates an extractive ecosystem where platforms win, and users return.</p>
                        </div>

                        {/* LaunchEx System */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-6 h-6 rounded-md bg-amber-100 dark:bg-amber-900/20 flex items-center justify-center text-amber-600">
                                    <Zap className="w-4 h-4" />
                                </div>
                                <h3 className="text-lg font-black text-slate-800 dark:text-slate-200">LaunchEx flips the model</h3>
                            </div>
                            <div className="text-xs font-black text-slate-400 mb-4 uppercase tracking-widest pl-1">With LaunchEx:</div>
                            {[
                                "Users earn value before risking capital",
                                "Rewards come from real revenue",
                                "Losses are partially refunded automatically",
                                "Long-term users capture the upside"
                            ].map((text, i) => (
                                <div key={i} className="bg-amber-50/30 dark:bg-amber-900/10 p-5 rounded-xl border border-amber-200/50 dark:border-amber-900/20 flex items-center gap-4">
                                    <div className="w-8 h-8 bg-amber-100/50 dark:bg-amber-900/20 rounded-lg flex items-center justify-center text-amber-600">
                                        <Zap className="w-4 h-4" />
                                    </div>
                                    <span className="text-amber-900/70 dark:text-amber-400 font-bold text-sm">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Warning Box */}
                    <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-2xl p-6 flex items-start gap-4 shadow-sm shadow-amber-100/50 dark:shadow-none">
                        <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center shrink-0">
                            <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                        </div>
                        <div>
                            <h4 className="text-amber-900 dark:text-amber-400 font-black text-sm uppercase tracking-widest mb-1">Important: LaunchEx is an Algorithmic Treasury-Backed Token</h4>
                            <p className="text-amber-800/80 dark:text-amber-500/80 text-sm font-medium leading-relaxed">
                                Unlike USDC and USDT which are 1:1 fiat-backed, LaunchEx is an <span className="font-black text-amber-900 dark:text-amber-400">algorithmic treasury-backed token</span> with dynamic redemption ratios based on treasury health and redemption demand. You earn it through activity—you don't buy it.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;
