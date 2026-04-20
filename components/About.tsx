"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export const About = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const parallaxRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!sectionRef.current) return;
        const q = gsap.utils.selector(sectionRef);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse",
                preventOverlaps: true,
                fastScrollEnd: true
            }
        });

        // 1. Heading entrance
        tl.fromTo(q('.gsap-about-heading'),
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        )
        // 2. Image container entrance
        .fromTo(q('.gsap-about-image'), 
            { scale: 0.98, y: 30, opacity: 0, filter: 'blur(8px)' },
            { scale: 1, y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.2, ease: 'expo.out' },
            "-=0.6"
        )
        // 3. Staggered paragraphs
        .fromTo(q('.gsap-about-text'),
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' },
            "-=0.8"
        )
        // 4. Stats
        .fromTo(q('.gsap-about-stat'),
            { y: 20, opacity: 0, scale: 0.98 },
            { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' },
            "-=0.6"
        );

        ScrollTrigger.refresh();
    }, { scope: sectionRef });

    const { scrollYProgress } = useScroll({
        target: parallaxRef,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const mouseXSpring = useSpring(mouseX, { stiffness: 300, damping: 20 });
    const mouseYSpring = useSpring(mouseY, { stiffness: 300, damping: 20 });
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

    return (
        <section 
            id="about" 
            ref={sectionRef} 
            className="w-full min-h-screen py-32 md:py-48 px-8 md:px-16 lg:px-24 bg-[#050505] text-white relative z-20 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto">
                <div className="gsap-about-heading mb-20 md:mb-32 flex flex-col md:flex-row md:items-end md:justify-between border-b border-white/5 pb-10 opacity-0 relative z-30">
                    <h3 className="text-5xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white to-cyan-300">
                        About Me.
                    </h3>
                    <p className="text-gray-500 uppercase tracking-[0.4em] text-[10px] md:text-xs mt-6 md:mt-0 font-black">
                        System Identity / 01
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-20 lg:gap-24 items-start justify-between">
                    <div className="gsap-about-image relative w-full lg:w-[45%] aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden group max-w-lg opacity-0 lg:sticky lg:top-32">
                        <motion.div ref={parallaxRef} style={{ y }} className="w-full h-full relative">
                            <motion.div 
                                onMouseMove={(e) => {
                                    if (!parallaxRef.current) return;
                                    const rect = parallaxRef.current.getBoundingClientRect();
                                    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
                                    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
                                }}
                                onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
                                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                                className="w-full h-full relative"
                            >
                                <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-3xl -z-10 group-hover:bg-purple-500/20 transition-colors duration-1000"></div>
                                <Image
                                    src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?auto=format&fit=crop&q=80&w=1000" 
                                    alt="About Me Avatar" 
                                    fill
                                    className="object-cover rounded-[2rem] border border-white/5 opacity-80 group-hover:opacity-100 transition-all duration-1000" 
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] via-transparent to-transparent opacity-60"></div>
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="flex flex-col justify-start w-full lg:w-[50%]">
                        <div className="space-y-8 text-base md:text-lg lg:text-xl font-medium text-gray-400 leading-relaxed text-left">
                            <p className="gsap-about-text opacity-0">
                                I am a passionate <span className="text-white font-semibold">Full Stack Developer</span> and <span className="text-blue-300 font-semibold">AI enthusiast</span> focused on building scalable, high-performance applications that solve real-world problems. With a strong foundation in programming and modern web technologies, I aim to bridge the gap between intelligent systems and seamless user experiences.
                            </p>
                            <p className="gsap-about-text opacity-0">
                                I have hands-on experience with technologies like <span className="text-white font-semibold">React, Node.js, and MongoDB</span>, along with strong programming skills in <span className="text-white font-semibold">Python, Java, and C++</span>. I enjoy working across the stack — from designing intuitive frontends to developing efficient backend systems and APIs.
                            </p>
                            <p className="gsap-about-text opacity-0">
                                My interest in <span className="text-purple-300 font-semibold">Data Analytics and AI</span> allows me to go beyond traditional development. I have explored areas like <span className="text-white font-semibold">NLP, machine learning models</span>, and data visualization using tools like Power BI and Tableau to extract meaningful insights and build smarter applications.
                            </p>
                            <p className="gsap-about-text opacity-0">
                                I am a fast learner and <span className="text-white font-semibold">problem-solver</span>, currently preparing for software development roles where I can contribute, grow, and build impactful products. I aim to take on challenges, learn new technologies, and continue improving my skills.
                            </p>
                        </div>

                        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6">
                            {[
                                { val: "Fresher", label: "Experience", color: "from-blue-400 to-cyan-400" },
                                { val: "5+", label: "Projects", color: "from-purple-400 to-fuchsia-400" },
                                { val: "10+", label: "Tech Stack", color: "from-cyan-400 to-emerald-400" }
                            ].map((stat, i) => (
                                <div key={i} className="gsap-about-stat opacity-0 bg-white/[0.03] border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-white/[0.06] transition-all group">
                                    <span className={`text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b ${stat.color} mb-3`}>
                                        {stat.val}
                                    </span>
                                    <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-black group-hover:text-white transition-colors">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
