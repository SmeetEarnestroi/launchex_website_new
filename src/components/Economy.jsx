import React from 'react';
import { Users, Shield, TrendingUp, HandCoins, BarChart3, ArrowRight, CircleDashed, Zap } from 'lucide-react';

const Economy = () => {
    return (
        <div className="bg-white dark:bg-slate-950 transition-colors duration-500">
            {/* --- Section: How LaunchEx Is Earned --- */}
            <section className="py-24 px-6 border-t border-slate-50 dark:border-slate-800 bg-slate-50/20 dark:bg-slate-900/10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 font-bold text-[10px] uppercase tracking-widest mb-6 border border-amber-100">
                            Proof of Activity
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-950 dark:text-white mb-6 tracking-tight leading-tight">
                            How LaunchEx Is <span className="bg-linear-to-r from-launchex-main to-launchex-secondary bg-clip-text text-transparent pb-2">Earned</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 font-medium text-lg md:text-xl max-w-2xl mx-auto">
                            LaunchEx is minted through four core activity channels.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
                        {/* Card 1 */}
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm relative group overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div className="flex justify-between items-start mb-10">
                                <div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/20 text-launchex-main rounded-xl flex items-center justify-center">
                                    <Users className="w-6 h-6" />
                                </div>
                                <div className="px-3 py-1 bg-amber-50 dark:bg-amber-900/20 rounded-full text-amber-600 dark:text-amber-400 text-[10px] font-black uppercase tracking-widest border border-amber-100 dark:border-amber-800">Island</div>
                            </div>
                            <h3 className="text-2xl font-black text-slate-950 dark:text-white mb-4 tracking-tight">Account Creation Allocation</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm font-semibold mb-6">100 LaunchEx credited on signup. Unlock through activity via the Golden Ratio.</p>
                            <ul className="space-y-2 text-xs font-black text-slate-400 uppercase tracking-widest pl-1">
                                <li>• 100 LaunchEx initially locked</li>
                                <li>• 1 LaunchEx unlocked per $1 volume</li>
                                <li>• Max unlock 100 LaunchEx</li>
                                <li>• Golden Ratio: 1:1 with activity</li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm relative group overflow-hidden hover:shadow-xl transition-all duration-500">
                            <div className="flex justify-between items-start mb-10">
                                <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 text-primary-500 rounded-xl flex items-center justify-center">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <div className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 rounded-full text-primary-600 dark:text-primary-400 text-[10px] font-black uppercase tracking-widest border border-primary-100 dark:border-primary-800">Protection</div>
                            </div>
                            <h3 className="text-2xl font-black text-slate-950 dark:text-white mb-4 tracking-tight">LossLess™ Trading Protection</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm font-semibold mb-6">Get up to 10% of realized trading losses back in LaunchEx automatically.</p>
                            <ul className="space-y-2 text-xs font-black text-slate-400 uppercase tracking-widest pl-1">
                                <li>• 1 LaunchEx per $1 of loss</li>
                                <li>• Up to 10 LaunchEx per loss event</li>
                                <li>• 100 LaunchEx lifetime support cap</li>
                                <li>• Automatic — no action needed</li>
                            </ul>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm relative group overflow-hidden hover:shadow-xl transition-all duration-500">
                            <div className="flex justify-between items-start mb-10">
                                <div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/20 text-launchex-main rounded-xl flex items-center justify-center">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <div className="px-3 py-1 bg-amber-50 dark:bg-amber-900/20 rounded-full text-amber-600 dark:text-amber-400 text-[10px] font-black uppercase tracking-widest border border-amber-100 dark:border-amber-800">Rewards</div>
                            </div>
                            <h3 className="text-2xl font-black text-slate-950 dark:text-white mb-4 tracking-tight">Active Rewards Pool</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm font-semibold mb-6">Earn LaunchEx rewards for every successful trade and prediction.</p>
                            <ul className="space-y-2 text-xs font-black text-slate-400 uppercase tracking-widest pl-1">
                                <li>• L1: 10 LaunchEx per signup</li>
                                <li>• L2: 1 LaunchEx • L3: 1 LaunchEx</li>
                                <li>• L4: 1 LaunchEx • L5: 1 LaunchEx</li>
                                <li>• No cap on referrers</li>
                            </ul>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm relative group overflow-hidden hover:shadow-xl transition-all duration-500">
                            <div className="flex justify-between items-start mb-10">
                                <div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/20 text-launchex-main rounded-xl flex items-center justify-center">
                                    <HandCoins className="w-6 h-6" />
                                </div>
                                <div className="px-3 py-1 bg-amber-50 dark:bg-amber-900/20 rounded-full text-amber-600 dark:text-amber-400 text-[10px] font-black uppercase tracking-widest border border-amber-100 dark:border-amber-800">Builders</div>
                            </div>
                            <h3 className="text-2xl font-black text-slate-950 dark:text-white mb-4 tracking-tight">Grant Program</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm font-semibold mb-6">Builders and creators receive milestone-based LaunchEx grants.</p>
                            <ul className="space-y-2 text-xs font-black text-slate-400 uppercase tracking-widest pl-1">
                                <li>• Apply with your project</li>
                                <li>• 20% on approval</li>
                                <li>• 80% on completion</li>
                                <li>• Stack with other earnings</li>
                            </ul>
                        </div>
                    </div>

                    {/* Golden Ratio Bar */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[28px] p-6 shadow-sm flex flex-col md:row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center rounded-xl text-primary-600 dark:text-primary-400">
                                <BarChart3 className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-black text-slate-900 dark:text-white tracking-tight">Golden Ratio Unlock</h4>
                                <p className="text-xs text-slate-400 font-bold tracking-tight">Your signup allocation unlocks 1:1 with trading volume.</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-8 w-full md:w-auto">
                            <div className="flex-1 md:flex-none">
                                <div className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] mb-1">100 LaunchEx</div>
                                <div className="text-sm font-black text-slate-950 dark:text-white">Initial Allocation</div>
                                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold whitespace-nowrap">Credited on signup (locked)</div>
                            </div>
                            <div className="h-10 w-px bg-slate-100 dark:bg-slate-800 hidden md:block"></div>
                            <div className="flex-1 md:flex-none">
                                <div className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] mb-1">1:1</div>
                                <div className="text-sm font-black text-slate-950 dark:text-white">Golden Ratio</div>
                                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold whitespace-nowrap">1 LaunchEx per $1 volume</div>
                            </div>
                            <div className="h-10 w-px bg-slate-100 dark:bg-slate-800 hidden md:block"></div>
                            <div className="flex-1 md:flex-none">
                                <div className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] mb-1">Unlocked</div>
                                <div className="text-sm font-black text-slate-950 dark:text-white">Wallet Transfer</div>
                                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold whitespace-nowrap">Full utility unlocked at 100 LaunchEx</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Section: What Backs LaunchEx? --- */}
            <section className="py-24 px-6 bg-white dark:bg-slate-950 overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20 text-balance">
                        <h2 className="text-4xl md:text-7xl font-black text-slate-950 dark:text-white mb-6 tracking-tight leading-[0.9]">
                            What Backs <span className="bg-linear-to-r from-launchex-main to-launchex-secondary bg-clip-text text-transparent pb-2">LaunchEx?</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 font-medium text-lg md:text-xl max-w-2xl mx-auto">
                            LaunchEx is not hype-backed. It is treasury-backed.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        {/* Economic Diagram (Simplified Placeholder style based on screenshot) */}
                        <div className="relative flex justify-center">
                            <div className="w-80 h-80 relative flex items-center justify-center">
                                <div className="absolute inset-0 border-[20px] border-launchex-main rounded-full"></div>
                                <div className="absolute inset-0 border-[20px] border-launchex-main rounded-full border-t-transparent -rotate-45"></div>
                                <div className="w-32 h-32 bg-launchex-main rounded-full flex items-center justify-center shadow-2xl shadow-launchex-main/50">
                                    <CircleDashed className="text-white w-20 h-20" />
                                </div>

                                {/* Floating labels around diagram */}
                                <div className="absolute -top-10 left-10 py-3 px-6 bg-white dark:bg-slate-900 shadow-xl rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center gap-3">
                                    <span className="w-3 h-3 bg-launchex-main rounded-full"></span>
                                    <span className="text-slate-800 dark:text-white font-black text-xs tracking-tight">USDT Pool</span>
                                </div>
                                <div className="absolute top-1/2 -right-16 -translate-y-1/2 py-3 px-6 bg-white dark:bg-slate-900 shadow-xl rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center gap-3">
                                    <span className="w-3 h-3 bg-primary-400 rounded-full"></span>
                                    <span className="text-slate-800 dark:text-white font-black text-xs tracking-tight">Escrow</span>
                                </div>
                                <div className="absolute -bottom-10 left-20 py-3 px-6 bg-white dark:bg-slate-900 shadow-xl rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center gap-3">
                                    <span className="w-3 h-3 bg-launchex-main rounded-full"></span>
                                    <span className="text-slate-800 dark:text-white font-black text-xs tracking-tight">Revenue</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Revenue Sources</div>
                                <div className="space-y-4">
                                    <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="w-8 h-8 flex items-center justify-center bg-primary-50 dark:bg-primary-900/20 text-launchex-main rounded-lg">
                                                <TrendingUp className="w-4 h-4" />
                                            </div>
                                            <span className="text-slate-900 dark:text-white font-black text-sm tracking-tight">Trading Fees generated on Prex Markets</span>
                                        </div>
                                    </div>
                                    <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="w-8 h-8 flex items-center justify-center bg-primary-50 dark:bg-primary-900/20 text-launchex-main rounded-lg">
                                                <Users className="w-4 h-4" />
                                            </div>
                                            <span className="text-slate-900 dark:text-white font-black text-sm tracking-tight">Platform subscriptions</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl">
                                <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Smart Distribution Model</div>
                                <p className="text-xs text-slate-500 font-medium mb-6">All protocol revenue is split automatically:</p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-2xl border border-primary-100 dark:border-primary-800 text-center">
                                        <div className="text-2xl font-black text-launchex-main mb-1">50%</div>
                                        <div className="text-[10px] font-black text-primary-700 dark:text-primary-400 uppercase tracking-widest leading-none">Solvency Treasury</div>
                                    </div>
                                    <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-2xl border border-amber-100 dark:border-amber-800 text-center">
                                        <div className="text-2xl font-black text-amber-600 dark:text-amber-400 mb-1">50%</div>
                                        <div className="text-[10px] font-black text-amber-700 dark:text-amber-400 uppercase tracking-widest leading-none">Community & Affiliates</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-20">
                        <div className="w-32 h-32 mx-auto relative mb-6">
                            <svg viewBox="0 0 100 100" className="w-full h-full text-primary-100">
                                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="10" />
                                <circle cx="50" cy="50" r="45" fill="none" stroke="#2563eb" strokeWidth="10" strokeDasharray="140 280" />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <CircleDashed className="text-launchex-main w-8 h-8" />
                            </div>
                        </div>
                        <div className="flex justify-center gap-4 text-[10px] font-black text-slate-400 mb-8 uppercase tracking-widest">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-launchex-main rounded-full"></div>
                                Treasury 50%
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-launchex-main rounded-full"></div>
                                Community 50%
                            </div>
                        </div>
                        <p className="text-slate-900 dark:text-white font-black text-lg mb-8 tracking-tight">The more the platform is used, the stronger LaunchEx becomes.</p>
                        <button className="bg-linear-to-r from-launchex-main to-launchex-secondary text-white px-10 py-3.5 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 shadow-xl shadow-launchex-main/30 transition-all">
                            Go to Transparency Page
                        </button>
                    </div>
                </div>
            </section>

            {/* --- Section: Redeeming LaunchEx --- */}
            <section className="py-24 px-6 bg-slate-50/20 dark:bg-slate-900/10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/20 text-launchex-main font-bold text-[10px] uppercase tracking-widest mb-6 border border-primary-100 dark:border-primary-800">
                            Two Strategic Paths
                        </div>
                        <h2 className="text-4xl md:text-7xl font-black text-slate-950 dark:text-white mb-6 tracking-tight leading-[0.9]">
                            Redeeming <span className="bg-linear-to-r from-launchex-main to-launchex-secondary bg-clip-text text-transparent pb-2">LaunchEx</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 font-medium text-lg md:text-xl max-w-2xl mx-auto">
                            LaunchEx gives users a choice: liquidity now or treasury later.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Path A */}
                        <div className="bg-white dark:bg-slate-900 p-10 rounded-[40px] border-2 border-launchex-main shadow-2xl shadow-launchex-main/5 relative group">
                            <div className="inline-block px-3 py-1 bg-launchex-main text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-8">Path A: USDT Liquidity</div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 text-launchex-main rounded-xl flex items-center justify-center">
                                    <CircleDashed className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Redemption from Solvency Pool</h3>
                            </div>
                            <p className="text-primary-600 font-bold text-sm mb-6">Best for users seeking an immediate LaunchEx value.</p>
                            <ul className="space-y-4 mb-10">
                                <li className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 mt-0.5"><Zap className="w-3 h-3" /></div>
                                    <span className="text-xs text-slate-500 font-bold leading-relaxed"><span className="text-slate-900">3-Month Cliff:</span> LaunchEx must mature for 3 months before redemption eligibility.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 mt-0.5"><Zap className="w-3 h-3" /></div>
                                    <span className="text-xs text-slate-500 font-bold leading-relaxed"><span className="text-slate-900">Redemption Value Formula:</span> Value = Solvency Pool USDT ÷ LaunchEx Oping in Redeem.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 mt-0.5"><Zap className="w-3 h-3" /></div>
                                    <span className="text-xs text-slate-500 font-bold leading-relaxed"><span className="text-slate-900">Treasury-Backed:</span> Pool funded by trading fees, subscriptions, and capital reserves.</span>
                                </li>
                            </ul>
                            <div className="bg-primary-50/50 p-6 rounded-2xl border border-launchex-main">
                                <div className="text-[10px] font-black text-primary-600 uppercase tracking-widest mb-2">Example Scenario:</div>
                                <p className="text-sm font-bold text-slate-900 leading-relaxed italic">Pool: <span className="text-primary-600">$500,000 USDT</span> — Redeeming: <span className="text-primary-600">400,000 LaunchEx</span> <br /> $1.25 per LaunchEx redemption value</p>
                            </div>
                        </div>

                        {/* Path B */}
                        <div className="bg-white dark:bg-slate-900 p-10 rounded-[40px] border border-launchex-main shadow-sm relative group transition-all duration-500">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-launchex-main text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-8">
                                Path B: Long-term Value
                            </div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/20 text-launchex-main rounded-xl flex items-center justify-center">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Redemption from PREX Treasury</h3>
                            </div>
                            <p className="text-amber-600 dark:text-amber-400 font-bold text-sm mb-6">Best for long-term believers in Prex Markets.</p>
                            <ul className="space-y-4 mb-10">
                                <li className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-600 dark:text-amber-400 mt-0.5"><Zap className="w-3 h-3" /></div>
                                    <span className="text-xs text-slate-500 dark:text-slate-400 font-bold leading-relaxed"><span className="text-slate-900 dark:text-white">FDV Trigger: $1 Billion:</span> Conversion unlocks when PREX reaches $1B fully diluted valuation.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-600 dark:text-amber-400 mt-0.5"><Zap className="w-3 h-3" /></div>
                                    <span className="text-xs text-slate-500 dark:text-slate-400 font-bold leading-relaxed"><span className="text-slate-900 dark:text-white">6-Month Streaming Vest:</span> PREX tokens released linearly over 6 months after conversion.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-600 dark:text-amber-400 mt-0.5"><Zap className="w-3 h-3" /></div>
                                    <span className="text-xs text-slate-500 dark:text-slate-400 font-bold leading-relaxed"><span className="text-slate-900 dark:text-white">50% Treasury Cap:</span> Auto-liquidates at 50% usage, no on-chain reserves replenish.</span>
                                </li>
                            </ul>
                            <div className="bg-amber-50/50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-200 dark:border-amber-800">
                                <div className="text-[10px] font-black text-amber-700 dark:text-amber-400 uppercase tracking-widest mb-2">Conversion Benefit:</div>
                                <p className="text-sm font-bold text-slate-900 dark:text-white leading-relaxed italic">1:1 ratio + Potential upside if PREX appreciates during vest <br /> <span className="text-amber-600 dark:text-amber-400">Zero cost basis + growth exposure • pure alpha</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <button className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-8 py-3 rounded-full text-slate-900 dark:text-white font-black text-xs uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm flex items-center gap-3 mx-auto transition-colors">
                            View Transparency Dashboard
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Economy;
