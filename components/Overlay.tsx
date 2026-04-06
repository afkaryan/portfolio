"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Overlay = () => {
    const { scrollYProgress } = useScroll();

    // Section 1 (0-20%)
    const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -100]);

    // Section 2 (30-50%)
    const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.25, 0.55], [50, -50]);

    // Section 3 (60-90%)
    const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.85, 0.95], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.55, 0.95], [50, -50]);

    return (
        <div className="pointer-events-none absolute inset-0 h-[500vh] w-full" style={{ zIndex: 10 }}>
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-8 md:px-24">
                
                <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute inset-x-8 md:inset-x-24 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center">
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-4">ARYAN BISHT</h1>
                    <p className="text-xl md:text-3xl text-gray-300 font-light max-w-2xl">
                        Senior Creative Developer | AI Solutions | Full-Stack Engineering
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

                <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute inset-x-8 md:inset-x-24 top-1/2 -translate-y-1/2 flex flex-col items-start text-left max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">Building the Future of Digital Experiences.</h2>
                    <p className="text-lg md:text-2xl text-gray-300 font-light mb-8">
                        Specializing in React, Node.js, and AI-driven platforms. From real-time NLP keyword matching to complex analytics dashboards.
                    </p>
                    <div className="flex gap-12 font-medium text-gray-400">
                        <div>
                            <h4 className="text-white mb-2 text-xl font-semibold">Languages</h4>
                            <p className="font-light">Python, C++, Java, React</p>
                        </div>
                        <div>
                            <h4 className="text-white mb-2 text-xl font-semibold">Tools</h4>
                            <p className="font-light">MongoDB, Tableau, AWS</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute inset-x-8 md:inset-x-24 top-1/2 -translate-y-1/2 flex flex-col items-end text-right">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">Bridging Engineering & Insight.</h2>
                    <p className="text-lg md:text-2xl text-gray-300 font-light max-w-xl">
                        Adept at problem-solving and critical thinking. I turn raw data into interactive visualizations and build scalable, secure full-stack applications.
                    </p>
                </motion.div>

            </div>
        </div>
    );
};
