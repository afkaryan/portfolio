"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const timeline = [
    {
        year: "2022 - Present",
        title: "B.Tech in Computer Science",
        subtitle: "Lovely Professional University (CGPA: 7.38)",
        desc: "Specializing in full-stack engineering, algorithms, and AI solutions."
    },
    {
        year: "July 2024",
        title: "DSA Summer Training",
        subtitle: "GeeksforGeeks",
        desc: "Completed self-paced DSA course, improving problem-solving efficiency with dynamic programming and graph algorithms."
    },
    {
        year: "2024 - 2025",
        title: "Key Certifications",
        subtitle: "Cloud Computing & Machine Learning",
        desc: "Swayam Nptel (Cloud Computing), Coursera (Supervised Machine Learning: Regression and Classification & Data Visualization with Tableau)."
    }
];

export const Timeline = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="timeline" className="py-32 px-8 md:px-24 bg-[#121212] text-white relative z-20">
            <div className="max-w-4xl mx-auto">
                <motion.h3 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                    className="text-4xl md:text-6xl font-bold mb-16 tracking-tight"
                >
                    Timeline.
                </motion.h3>
                <div ref={containerRef} className="relative ml-4 md:ml-0">
                    {/* The animated progress line */}
                    <motion.div 
                        style={{ scaleY, transformOrigin: 'top' }}
                        className="absolute left-0 top-0 bottom-0 w-[1px] bg-amber-300 z-10 hidden md:block shadow-[0_0_15px_rgba(252,211,77,0.5)]"
                    />
                    {/* The static background border */}
                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10 hidden md:block" />

                    <div className="md:ml-0 border-l border-white/10 md:border-none">
                        {timeline.map((item, idx) => (
                            <motion.div 
                                key={idx} 
                                initial={{ opacity: 0, x: -40, filter: "blur(4px)" }}
                                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                viewport={{ once: true, margin: "-100px", amount: 0.2 }}
                                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                                className="relative pl-8 md:pl-12 pb-20 last:pb-0 hover:opacity-100 transition-opacity duration-300 group"
                            >
                                {/* Dot Indicator */}
                                <div className="absolute left-[-5px] md:left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-amber-300 md:group-hover:shadow-[0_0_15px_rgba(252,211,77,0.8)] transition-all duration-500 z-20" />
                                
                                <div className="text-sm font-bold text-amber-300 mb-3 tracking-wider">{item.year}</div>
                                <h4 className="text-2xl md:text-4xl font-bold mb-2 text-white group-hover:text-amber-100 transition-colors duration-300">{item.title}</h4>
                                <h5 className="text-lg text-gray-400 mb-6 font-medium">{item.subtitle}</h5>
                                <p className="text-gray-300 leading-relaxed font-light text-lg max-w-2xl">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

