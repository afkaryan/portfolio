"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const education = [
    {
        year: "2022 – Present",
        degree: "B.Tech in Computer Science",
        school: "Lovely Professional University, Punjab",
        score: "CGPA: 7.38",
        id: "edu-01"
    },
    {
        year: "2021 – 2022",
        degree: "Class 12 (Intermediate - PCM)",
        school: "Lucknow Public School, U.P.",
        score: "Percentage: 82%",
        id: "edu-02"
    },
    {
        year: "2019 – 2020",
        degree: "Class 10 (Matriculation)",
        school: "Lucknow Public School, U.P.", 
        score: "Percentage: 89.2%",
        id: "edu-03"
    }
];

const TimelineCard = ({ item, index }: { item: any, index: number }) => {
    const isEven = index % 2 === 0;
    const cardRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const innerCard = cardRef.current?.querySelector('.timeline-card');
        const node = cardRef.current?.querySelector('.timeline-node');
        const nodeDot = cardRef.current?.querySelector('.node-dot');
        const nodeRing = cardRef.current?.querySelector('.node-ring');
        const scoreDot = cardRef.current?.querySelector('.node-activation-dot');

        if (!innerCard || !node || !nodeDot || !nodeRing || !scoreDot) return;

        // Advanced Card Activation (Focal Shift)
        gsap.fromTo(innerCard, 
            { opacity: 0.1, scale: 0.92, y: 100, filter: "blur(12px)" },
            { 
                opacity: 1, scale: 1, y: 0, filter: "blur(0px)",
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 95%",
                    end: "top 40%",
                    scrub: true,
                }
            }
        );

        // Peak Milestone Activation (Center Hub)
        const milestoneTl = gsap.timeline({
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top center+=10%",
                end: "bottom center-=10%",
                scrub: true,
                toggleActions: "play reverse play reverse"
            }
        });

        milestoneTl
            .to(innerCard, { backgroundColor: "rgba(255, 255, 255, 0.06)", borderColor: "rgba(255, 255, 255, 0.2)", scale: 1.05, ease: "power2.inOut" }, 0)
            .to(node, { scale: 1.6, backgroundColor: "#3b82f6", borderColor: "rgba(59, 130, 246, 0.5)", ease: "back.out(2)" }, 0)
            .to(nodeDot, { backgroundColor: "#fff", opacity: 1, scale: 1.2 }, 0)
            .to(nodeRing, { opacity: 0.8, scale: 1.2, duration: 0.4 }, 0)
            .to(scoreDot, { scale: 1.8, backgroundColor: "#60a5fa", boxShadow: "0 0 20px rgba(96, 165, 250, 1)" }, 0);

    }, { scope: cardRef });

    return (
        <div 
            ref={cardRef}
            className={`timeline-card-wrapper relative flex flex-col md:flex-row items-center w-full mb-32 md:mb-52 ${isEven ? 'md:flex-row-reverse' : ''}`}
        >
            <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white/20 z-30 timeline-node border-2 border-white/10 overflow-visible transition-none">
                <div className="absolute inset-[3px] rounded-full bg-white opacity-40 node-dot transition-none" />
                <div className="absolute inset-[-12px] rounded-full border border-white/5 opacity-0 node-ring scale-50 transition-none" />
            </div>

            <div className="hidden md:block md:w-1/2" />

            <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pr-20 lg:pr-32' : 'md:pl-20 lg:pl-32'}`}>
                <div className="timeline-card group relative p-10 rounded-[3rem] bg-white/[0.01] border border-white/[0.04] backdrop-blur-3xl hover:bg-white/[0.04] transition-all duration-700">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-transparent group-hover:from-blue-500/10 group-hover:via-purple-500/5 transition-all duration-700 blur-3xl opacity-0 group-hover:opacity-100" />
                    
                    <div className="relative z-10">
                        <div className="mb-8 flex items-center gap-4">
                            <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-black tracking-[0.4em] text-white/40 uppercase">
                                {item.year}
                            </div>
                            <div className="h-px w-8 bg-white/10" />
                        </div>
                        <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[0.9] mb-6">
                            {item.degree}
                        </h3>
                        <p className="text-gray-500 text-lg md:text-xl font-medium mb-10 leading-relaxed max-w-sm">
                            {item.school}
                        </p>
                        <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-white/[0.02] border border-white/5 transition-all duration-500 group-hover:border-white/10">
                            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 node-activation-dot transition-none" />
                            <span className="text-white font-mono font-bold tracking-tight text-base opacity-70 group-hover:opacity-100">
                                {item.score}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Timeline = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Master ScrollTrigger for the Growth Rail (Scoped)
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1.2,
            onUpdate: (self) => {
                gsap.set(lineRef.current, { scaleY: self.progress });
            }
        });

        // Cinematic Heading Reveal (Scoped)
        gsap.fromTo('.education-heading',
            { opacity: 0, y: 30, rotateX: 10 },
            {
                opacity: 1, y: 0, rotateX: 0,
                duration: 1.5,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: '.education-heading',
                    start: "top 90%"
                }
            }
        );

        // Final Isolation Refresh
        ScrollTrigger.refresh();
    }, { scope: containerRef });

    return (
        <section id="timeline" ref={containerRef} className="py-64 bg-[#050505] text-white relative overflow-hidden block z-10 w-full">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[160px] rounded-full pointer-events-none" />
            <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 relative">
                <div className="mb-48 flex flex-col items-center md:items-start relative z-30">
                    <h2 className="education-heading text-6xl md:text-9xl font-black tracking-tighter text-white opacity-0 uppercase leading-none">
                        Education.
                    </h2>
                    <div className="mt-12 flex items-center gap-6">
                        <span className="w-16 h-px bg-blue-500/50" />
                        <p className="text-blue-500 uppercase tracking-[0.5em] text-[10px] font-black">
                            Academic Journey
                        </p>
                    </div>
                </div>

                <div className="relative w-full">
                    <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/[0.05]" />
                    <div 
                        ref={lineRef}
                        className="absolute left-[30px] md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-600 origin-top scale-y-0 z-10"
                        style={{ boxShadow: "0 0 25px rgba(59, 130, 246, 0.4)", willChange: "transform" }}
                    />
                    <div className="flex flex-col w-full relative z-20">
                        {education.map((item, index) => (
                             <TimelineCard key={item.id} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="pointer-events-none absolute inset-0 z-50 opacity-[0.01] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        </section>
    );
};
