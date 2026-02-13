import { useEffect, useState } from "react";

export default function MemeCoinL() {
  const upcomingLaunches = [
    {
      name: "RocketDoge",
      symbol: "RDOGE",
      date: "2026-02-15",
      allocation: "100,000,000",
    },
    {
      name: "MoonCat",
      symbol: "MCAT",
      date: "2026-02-22",
      allocation: "50,000,000",
    },
    {
      name: "FairPepe",
      symbol: "FPEPE",
      date: "2026-03-01",
      allocation: "200,000,000",
    },
  ];

  const calculateTimeLeft = (launchDate) => {
    const difference = +new Date(launchDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      };
    }

    return timeLeft;
  };

  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-gray-950" id="launches">

      {/* ================= HERO ================= */}
      <section className="relative py-24 overflow-hidden text-center">
        <div className="absolute inset-0 bg-linear-to-b from-blue-50 via-purple-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
            Meme Coin{" "}
            <span className="bg-linear-to-r from-[#60a5fa] to-[#7c3aed] bg-clip-text text-transparent">
              Launches
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover AI-powered fair launches. No bots. No insiders. Just
            transparent participation.
          </p>
        </div>
      </section>

      {/* ================= UPCOMING LAUNCHES ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              🚀 Upcoming Launches
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {upcomingLaunches.map((launch) => {
              const timeLeft = calculateTimeLeft(launch.date);

              return (
                <div
                  key={launch.symbol}
                  className="group relative bg-white/70 dark:bg-gray-900/70 
                  backdrop-blur-xl border border-gray-200 dark:border-gray-800
                  rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 
                  transition-all duration-300"
                >

                  {/* Token Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-linear-to-br from-[#60a5fa] to-[#7c3aed] 
                      flex items-center justify-center text-xl shadow-lg text-white">
                      🪙
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {launch.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        ${launch.symbol}
                      </p>
                    </div>
                  </div>

                  {/* Launch Info */}
                  <div className="space-y-3 text-sm mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">
                        Launch Date
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {new Date(launch.date).toDateString()}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">
                        Total Supply
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {launch.allocation}
                      </span>
                    </div>

                    {/* Countdown */}
                    {timeLeft.days >= 0 && (
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">
                          Starts In
                        </span>
                        <span className="font-semibold text-blue-500">
                          {timeLeft.days}d {timeLeft.hours}h
                        </span>
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <button
                    className="w-full py-3 rounded-xl font-semibold text-white 
                    bg-linear-to-r from-[#60a5fa] to-[#7c3aed] 
                    shadow-md shadow-blue-500/20 
                    hover:scale-105 transition-transform duration-300"
                  >
                    Join Waitlist
                  </button>
                </div>
              );
            })}
          </div>

          {/* ================= COMING SOON ================= */}
          <div className="mt-24 relative p-[1px] rounded-3xl bg-linear-to-r from-[#60a5fa] to-[#7c3aed]">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl 
              rounded-3xl p-12 text-center">

              <div className="text-5xl mb-6">🎯</div>

              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                More Launches Coming Soon
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
                Sign up today and be notified about new fair meme coin launches
                before the public.
              </p>

              <button
                className="px-10 py-4 rounded-xl font-semibold text-white 
                bg-linear-to-r from-[#60a5fa] to-[#7c3aed] 
                hover:scale-105 transition-transform duration-300"
              >
                Get Early Access
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
