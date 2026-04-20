"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Overlay = () => {
    const { scrollYProgress } = useScroll();

    // Section 1: Fades extremely fast relative to entire document.
    // Max 3% to 5% of total page scroll.
    const opacity1 = useTransform(scrollYProgress, [0, 0.02, 0.05], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.05], [0, -100]);

    // Section 2: Building the future (8% to 18%)
    const opacity2 = useTransform(scrollYProgress, [0.06, 0.10, 0.16, 0.19], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.06, 0.19], [50, -50]);

    // Section 3: Bridging design (22% to 35%)
    const opacity3 = useTransform(scrollYProgress, [0.21, 0.25, 0.35, 0.39], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.21, 0.39], [50, -50]);

    return (
        <div className="pointer-events-none absolute inset-0 h-[500vh] w-full" style={{ zIndex: 10 }}>
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-8 md:px-24">
                
                {/* View 1 */}
                <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute inset-x-8 md:inset-x-24 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center">
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-4">ARYAN BISHT</h1>
                    <p className="text-xl md:text-3xl text-gray-300 font-light max-w-2xl">
                        Full-Stack Developer | AI/ML Enthusiast | Building Real-World Projects
                    </p>
                    <div className="mt-8 flex space-x-6">
                        <a href="https://github.com/afkaryan" target="_blank" rel="noreferrer" className="pointer-events-auto text-gray-400 hover:text-white transition-colors duration-300">
                           GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/aryan-bisht-" target="_blank" rel="noreferrer" className="pointer-events-auto text-gray-400 hover:text-white transition-colors duration-300">
                           LinkedIn
                        </a>
                        <a href="mailto:bishtaryan41@gmail.com" className="pointer-events-auto text-gray-400 hover:text-white transition-colors duration-300">
                           Email
                        </a>
                    </div>
                </motion.div>

                {/* View 2: Minimal Storytelling */}
                <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute inset-x-8 md:inset-x-24 top-1/2 -translate-y-1/2 flex flex-col items-start text-left max-w-4xl">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl tracking-tighter leading-[1.1] mb-6">
                        <span className="font-light text-white/50">Building the future of</span>
                        <br />
                        <span className="font-bold text-white">digital experiences.</span>
                    </h2>
                </motion.div>

                {/* View 3 */}
                <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute inset-x-8 md:inset-x-24 top-1/2 -translate-y-1/2 flex flex-col items-end text-right">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl tracking-tighter leading-[1.1] mb-6">
                        <span className="font-light text-white/50">Bridging</span>
                        <br />
                        <span className="font-bold text-white/80">design and</span>
                        <br />
                        <span className="font-bold text-white">engineering.</span>
                    </h2>
                </motion.div>

            </div>
        </div>
    );
};

