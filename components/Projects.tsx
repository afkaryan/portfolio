"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
    {
        title: "AI Career Assistant Platform",
        date: "Mar '26",
        desc: "AI-powered platform analyzing resumes & matching skills using NLP keyword extraction & similarity scoring.",
        tech: ["React.js", "Node.js", "MongoDB", "NLP", "JWT"]
    },
    {
        title: "Social Media Analytics",
        date: "Jan '26",
        desc: "Full-stack analytics mapping post-comment relationships with NLP sentiment analysis and dashboards.",
        tech: ["React.js", "Express", "MongoDB", "NLP Analytics"]
    },
    {
        title: "BookFlicks",
        date: "Jul '25",
        desc: "Movie ticket booking platform with real-time seat selection, Firebase auth, and Stripe integration.",
        tech: ["React", "Express", "Firebase", "Stripe", "Tailwind"]
    }
];

const ProjectCard = ({ proj }: { proj: { title: string, date: string, desc: string, tech: string[] } }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end end"]
    });

    const yMove = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const opacityMove = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <motion.div 
            ref={cardRef}
            style={{ y: yMove, opacity: opacityMove }}
            className="group relative bg-[#1c1c1c] border border-white/5 p-8 rounded-3xl hover:bg-[#242424] transition-all duration-300 hover:shadow-[0_10px_40px_rgba(255,255,255,0.05)] cursor-pointer flex flex-col h-full"
        >
            <div className="text-sm font-medium text-gray-500 mb-3">{proj.date}</div>
            <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-amber-300 transition-colors">{proj.title}</h4>
            <p className="text-gray-400 mb-8 font-light leading-relaxed flex-grow">{proj.desc}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
                {proj.tech.map((t: string) => (
                    <span key={t} className="text-[11px] uppercase tracking-wider px-4 py-2 bg-white/5 rounded-full font-semibold text-gray-300 group-hover:bg-amber-300/10 group-hover:text-amber-300 transition-colors">
                        {t}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export const Projects = () => {
    return (
        <section className="min-h-screen bg-[#121212] text-white py-32 px-8 md:px-24">
            <div className="max-w-7xl mx-auto">
                <motion.h3 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                    className="text-4xl md:text-6xl font-bold mb-16 tracking-tight"
                >
                    Featured Work.
                </motion.h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {projects.map((proj, i) => (
                        <ProjectCard key={i} proj={proj} />
                    ))}
                </div>
            </div>
        </section>
    );
};

