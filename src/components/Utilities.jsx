import React from 'react';
import { Sparkles, FlaskConical, Briefcase, Zap, Search, Globe, ChevronRight, TrendingUp } from 'lucide-react';

const Utilities = () => {
    return (
        <div className="bg-white">
            {/* --- Section: What Can You Do With LaunchEx? --- */}
            <section className="py-24 px-6 border-t border-slate-50 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-launchex-main font-bold text-[10px] uppercase tracking-widest mb-6 border border-amber-100">
                            Utility
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                            What Can You Do With <span className="text-launchex-main">LaunchEx</span>?
                        </h2>
                        <p className="text-slate-500 font-medium text-lg">
                            LaunchEx is immediately usable inside the ecosystem.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm relative group overflow-hidden">
                            <div className="flex justify-between items-start mb-10">
                                <div className="w-12 h-12 bg-amber-50 text-launchex-main rounded-xl flex items-center justify-center">
                                    <Sparkles className="w-6 h-6" />
                                </div>
                                <div className="px-3 py-1 bg-emerald-50 rounded-full text-emerald-600 text-[10px] font-black uppercase tracking-widest border border-emerald-100">Live</div>
                            </div>
                            <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight">Internal Prediction Activity</h3>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed">Trade on exclusive prediction markets with LaunchEx. Test strategies, earn more.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm relative group overflow-hidden">
                            <div className="flex justify-between items-start mb-10">
                                <div className="w-12 h-12 bg-amber-50 text-launchex-main rounded-xl flex items-center justify-center">
                                    <FlaskConical className="w-6 h-6" />
                                </div>
                                <div className="px-3 py-1 bg-emerald-50 rounded-full text-emerald-600 text-[10px] font-black uppercase tracking-widest border border-emerald-100">Live</div>
                            </div>
                            <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight">Risk-Free Strategy Testing</h3>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed">Practice with LaunchEx. Learn strategies without real capital risk.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm relative group overflow-hidden">
                            <div className="flex justify-between items-start mb-10">
                                <div className="w-12 h-12 bg-amber-50 text-launchex-main rounded-xl flex items-center justify-center">
                                    <Briefcase className="w-6 h-6" />
                                </div>
                                <div className="px-3 py-1 bg-slate-50 rounded-full text-slate-400 text-[10px] font-black uppercase tracking-widest border border-slate-100">Coming Soon</div>
                            </div>
                            <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight">Premium Tools & AI Trading Features</h3>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed">Buy premium tools, analytics, and AI-powered trading signals from the Prex marketplace.</p>
                        </div>

                        {/* Card 4 - Full Width or centered? (Screenshot shows it in a grid) */}
                        <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm relative group overflow-hidden">
                            <div className="flex justify-between items-start mb-10">
                                <div className="w-12 h-12 bg-amber-50 text-launchex-main rounded-xl flex items-center justify-center">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <div className="px-3 py-1 bg-slate-50 rounded-full text-slate-400 text-[10px] font-black uppercase tracking-widest border border-slate-100">Coming Soon</div>
                            </div>
                            <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight">Market Visibility Bidding via Spotlight</h3>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed">Staking features: your markers. Winning ads are burned, reducing supply.</p>
                        </div>
                    </div>

                    {/* Attention Economy Banner */}
                    <div className="bg-amber-50 border border-amber-200 rounded-[32px] p-10 flex flex-col md:row items-center justify-between gap-8">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-amber-100 flex items-center justify-center rounded-2xl text-amber-600">
                                <Search className="w-8 h-8" />
                            </div>
                            <div>
                                <h4 className="text-xl font-black text-slate-900 tracking-tight">Spotlight: Attention Economy</h4>
                                <p className="text-slate-500 font-medium">LaunchEx is designed to become the universal currency for prediction markets and beyond, facilitated by real user activity.</p>
                            </div>
                        </div>
                        <a href="#" className="flex items-center gap-2 text-slate-900 font-black text-sm uppercase tracking-widest hover:translate-x-1 transition-transform">
                            Learn More
                            <ChevronRight className="w-4 h-4 text-primary-600" />
                        </a>
                    </div>
                </div>
            </section>

            {/* --- Section: The reward token disrupting DeFi incentives --- */}
            <section className="py-24 px-6 bg-slate-50/20 text-center">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-20 tracking-tight leading-none">
                        The reward token disrupting DeFi incentives
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card Traders */}
                        <div className="bg-white p-12 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-shadow group text-left">
                            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-black text-slate-900 mb-6 tracking-tight">LaunchEx for Traders</h3>
                            <p className="text-slate-500 font-medium text-sm mb-10 leading-relaxed">Earn LaunchEx rewards through your trading activity on Prex Markets. Zero-cost basis means every LaunchEx you earn is pure upside.</p>
                            <a href="#" className="flex items-center gap-2 text-primary-600 font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                                Learn how
                                <ChevronRight className="w-4 h-4" />
                            </a>
                        </div>

                        {/* Card Referrers */}
                        <div className="bg-white p-12 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-shadow group text-left">
                            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-black text-slate-900 mb-6 tracking-tight">LaunchEx for Referrers</h3>
                            <p className="text-slate-500 font-medium text-sm mb-10 leading-relaxed">Refer traders to Prex and earn a share of the LaunchEx rewards generated by their activity. Build passive income through your network.</p>
                            <a href="#" className="flex items-center gap-2 text-primary-600 font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                                Learn how
                                <ChevronRight className="w-4 h-4" />
                            </a>
                        </div>

                        {/* Card Developers */}
                        <div className="bg-white p-12 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-shadow group text-left">
                            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                                <FlaskConical className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-black text-slate-900 mb-6 tracking-tight">LaunchEx for Developers</h3>
                            <p className="text-slate-500 font-medium text-sm mb-10 leading-relaxed">Integrate LaunchEx into your applications. Access our API to check balances, redemption values, and build on top of the LaunchEx ecosystem.</p>
                            <a href="#" className="flex items-center gap-2 text-primary-600 font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                                Learn how
                                <ChevronRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Utilities;
