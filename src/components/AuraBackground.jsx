import React from 'react';
import { motion } from 'framer-motion';

const AuraBackground = () => {
    return (
        <div className="fixed inset-0 -z-50 overflow-hidden bg-white">
            {/* Animated Blobs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-100/50 blur-[120px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -120, 0],
                    y: [0, -80, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-50/60 blur-[150px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-yellow-50/40 blur-[100px]"
            />

            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-grid-slate-900/[0.02] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        </div>
    );
};

export default AuraBackground;
