"use client";
import React from 'react';
import { motion } from 'framer-motion';

const arsenalItems = [
    { category: "Languages", skills: ["Python", "C++", "C", "R", "Java", "React & Node.js"] },
    { category: "Databases & Cloud", skills: ["MongoDB", "MS SQL", "AWS"] },
    { category: "Data Analytics & AI", skills: ["Tableau", "Power BI", "NLP"] },
];

export const Skills = () => {
    return (
        <section id="arsenal" className="min-h-screen bg-[#0a0a0a] text-white py-32 px-8 md:px-24 relative z-20">
            <div className="max-w-7xl mx-auto">
                <motion.h3 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                    className="text-4xl md:text-6xl font-bold mb-16 tracking-tight"
                >
                    My Arsenal.
                </motion.h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {arsenalItems.map((item, idx) => (
                        <motion.div 
                            key={idx} 
                            initial={{ opacity: 0, y: 50, scale: 0.98 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1.2, delay: idx * 0.15, ease: [0.76, 0, 0.24, 1] }}
                            className="bg-white/[0.02] border border-white/10 p-10 rounded-3xl hover:bg-white/[0.05] transition-all duration-300 transform-gpu hover:-translate-y-2 group/card"
                        >
                            <h4 className="text-xl font-semibold mb-8 text-gray-400 group-hover/card:text-gray-200 transition-colors">{item.category}</h4>
                            <motion.ul 
                                className="space-y-6"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 + (idx * 0.15) } },
                                    hidden: {}
                                }}
                            >
                                {item.skills.map((skill, sIdx) => (
                                    <motion.li 
                                        key={sIdx} 
                                        variants={{
                                            hidden: { opacity: 0, x: -30, filter: "blur(4px)" },
                                            visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
                                        }}
                                        className="flex items-center text-xl md:text-2xl font-medium text-white group cursor-none"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-amber-300 mr-4 scale-75 group-hover:scale-150 transition-all duration-500 shadow-[0_0_10px_rgba(252,211,77,0.3)]"></span>
                                        <span className="group-hover:text-amber-300 transition-colors duration-300 group-hover:translate-x-2 inline-block transform-gpu">{skill}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

