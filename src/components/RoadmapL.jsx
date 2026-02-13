export default function RoadmapL() {
    const roadmapItems = [
        {
            quarter: 'Q1 2026',
            title: 'Foundation',
            status: 'current',
            items: [
                'Launch early access program',
                'Token airdrop claims',
                'Community building',
                'Smart contract audits',
            ],
        },
        {
            quarter: 'Q2 2026',
            title: 'Platform Launch',
            status: 'upcoming',
            items: [
                'Main platform goes live',
                'First meme coin IEO',
                'Staking program launch',
                'Mobile app beta',
            ],
        },
        {
            quarter: 'Q3 2026',
            title: 'Expansion',
            status: 'upcoming',
            items: [
                'Trading fee rewards',
                'Governance voting',
                'Partnership announcements',
                'Cross-chain integration',
            ],
        },
        {
            quarter: 'Q4 2026',
            title: 'Global Scale',
            status: 'upcoming',
            items: [
                'Major exchange listings',
                'Institutional features',
                'Advanced trading tools',
                'Global marketing campaign',
            ],
        },
    ];

    return (
        <div className="relative pt-28 pb-28 overflow-hidden bg-white dark:bg-black text-white" id="roadmap">

           

            {/* Hero */}
            <section className="relative max-w-6xl mx-auto px-6 text-center">
                <h1 className="text-4xl sm:text-6xl font-bold">
                    
                    <span className="bg-linear-to-r from-[#60a5fa] to-[#7c3aed] bg-clip-text text-transparent">
                        Roadmap
                    </span>
                </h1>

                <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
                    A transparent vision for building the future of fair meme coin launches.
                </p>
            </section>

            {/* Timeline */}
            <section className="relative mt-24 max-w-6xl mx-auto px-6">

                {/* Vertical Line (Desktop Only) */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-linear-to-r from-[#60a5fa] to-[#7c3aed] -translate-x-1/2" />

                <div className="space-y-20">

                    {roadmapItems.map((item, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <div
                                key={item.quarter}
                                className={`relative md:flex ${
                                    isLeft ? "md:justify-start" : "md:justify-end"
                                }`}
                            >
                                {/* Timeline Dot */}
                                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8">
                                    <div
                                        className={`w-6 h-6 rounded-full border-4 ${
                                            item.status === "current"
                                                ? "bg-primary border-primary animate-pulse shadow-lg shadow-primary/40"
                                                : "bg-gray-700 border-gray-600"
                                        }`}
                                    />
                                </div>

                                {/* Card */}
                                <div
                                    className={`relative w-full md:w-[46%] p-8 rounded-3xl border border-white/10 
                                    backdrop-blur-xl bg-white/5 shadow-xl transition-all duration-500
                                    hover:scale-[1.03] hover:border-primary/40 hover:shadow-primary/20
                                    ${
                                        isLeft ? "md:mr-auto" : "md:ml-auto"
                                    }`}
                                >

                                    {/* Quarter Badge */}
                                    <div className="flex items-center gap-3 mb-5">
                                        <span
                                            className={`px-4 py-1 text-sm rounded-full font-medium ${
                                                item.status === "current"
                                                    ? "bg-primary/20 dark:text-gray-400 text-black"
                                                    : "bg-white/10 dark:text-gray-400 text-black"
                                            }`}
                                        >
                                            {item.quarter}
                                        </span>

                                        {item.status === "current" && (
                                            <span className="text-xs text-green-400 font-semibold tracking-wide">
                                                ● LIVE
                                            </span>
                                        )}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl dark:text-gray-400 text-black font-bold mb-6">
                                        {item.title}
                                    </h3>

                                    {/* Milestones */}
                                    <ul className="space-y-3">
                                        {item.items.map((milestone, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-3 dark:text-gray-400 text-black text-sm"
                                            >
                                                <span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-primary to-purple-400 flex-shrink-0" />
                                                {milestone}
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            </div>
                        );
                    })}

                </div>
            </section>

        </div>
    );
}
