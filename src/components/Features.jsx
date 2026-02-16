import React,{useState} from "react";
import { Mail, CheckCircle2, Gift } from "lucide-react";

const Features = () => {


  const [email, setEmail] = useState('');
  const [error, seterror] = useState("")

  const handleReserve = () => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
      seterror("")
      if (!email || !emailRegex.test(email)) {
        return seterror("Please enter a valid email address.");
      }
    
      window.open(
        `https://app.launchex.ai/signup?email=${encodeURIComponent(email)}`,
        '_blank',
        'noopener,noreferrer'
      );
    };





  return (
    <section className="relative py-16 px-4 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      
      {/* 🔵 Background Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] 
        bg-linear-to-r from-[#60a5fa]/20 to-[#7c3aed]/20 
        blur-3xl opacity-40 rounded-full" />

      <div className="relative max-w-md mx-auto">
        
        {/* ✨ Card */}
        <div className="relative p-8 rounded-3xl 
          bg-white/80 dark:bg-white/5 
          backdrop-blur-xl 
          border border-gray-200 dark:border-white/10
          shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)]
          transition-all duration-500 hover:shadow-[0_20px_80px_-10px_rgba(124,58,237,0.35)]">

          {/* 🎁 Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-linear-to-br from-[#60a5fa] to-[#7c3aed] text-white shadow-lg">
              <Gift size={22} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Get 1,000 FREE LaunchEx Tokens
            </h3>
          </div>

          {/* 📩 Input + Button */}
          <div className="space-y-4">
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#7c3aed] transition-colors" />
              
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-3 rounded-xl 
                  border border-gray-200 dark:border-white/10
                  bg-gray-50 dark:bg-black/30
                  focus:outline-none focus:ring-2 
                  focus:ring-[#7c3aed] focus:border-transparent
                  transition-all duration-300
                  text-gray-900 dark:text-white
                  placeholder:text-gray-400"
              />
              {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
            </div>

            <button
             onClick={handleReserve}
              className="w-full py-3 rounded-xl text-white font-semibold
                bg-linear-to-r from-[#60a5fa] to-[#7c3aed]
                hover:scale-[1.02] active:scale-[0.98]
                transition-all duration-300
                shadow-lg shadow-[#7c3aed]/30"
            >
              Reserve Early Access
            </button>
          </div>

          {/* ✅ Benefits */}
          <div className="mt-6 space-y-3">
            {[
              "Takes 10 seconds",
              "No wallet needed",
              "Early users get priority access to meme launches",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300"
              >
                <CheckCircle2 className="w-4 h-4 text-[#60a5fa]" />
                <span>{item}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
