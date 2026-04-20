"use client";
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Icons
import { 
    FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaGithub, FaPython, FaBrain 
} from 'react-icons/fa';
import { 
    SiNextdotjs, SiTailwindcss, SiExpress, SiFlask, SiMongodb, SiMysql, SiFirebase, SiPandas, 
    SiNumpy, SiScikitlearn, SiRedux, SiFigma, SiVercel, SiJest 
} from 'react-icons/si';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(useGSAP);
}

const allSkills = [
    { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "Redux", icon: SiRedux, color: "text-[#764ABC]" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#38B2AC]" },
    { name: "JavaScript", icon: FaJs, color: "text-[#F7DF1E]" },
    { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
    { name: "Express.js", icon: SiExpress, color: "text-white" },
    { name: "Python", icon: FaPython, color: "text-[#3776AB]" },
    { name: "Flask", icon: SiFlask, color: "text-white" },
    { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
    { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
    { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
    { name: "AWS", icon: FaAws, color: "text-[#FF9900]" },
    { name: "Docker", icon: FaDocker, color: "text-[#2496ED]" },
    { name: "Vercel", icon: SiVercel, color: "text-white" },
    { name: "GitHub", icon: FaGithub, color: "text-white" },
    { name: "Git", icon: FaGitAlt, color: "text-[#F05032]" },
    { name: "Pandas", icon: SiPandas, color: "text-[#150458]" },
    { name: "NumPy", icon: SiNumpy, color: "text-[#013243]" },
    { name: "NLP", icon: FaBrain, color: "text-cyan-300" },
    { name: "Scikit-learn", icon: SiScikitlearn, color: "text-[#F7931E]" },
    { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]" },
    { name: "Jest", icon: SiJest, color: "text-[#C21325]" },
    { name: "HTML5", icon: FaHtml5, color: "text-[#E34F26]" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-[#1572B6]" },
];

const SkillPill = ({ skill }: { skill: any }) => {
    const Icon = skill.icon;
    return (
        <div className="flex items-center gap-3 px-6 py-4 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 group cursor-default whitespace-nowrap">
            <Icon className={`${skill.color} text-2xl group-hover:scale-110 transition-transform duration-500`} />
            <span className="text-white font-black uppercase tracking-[0.2em] text-[11px] md:text-sm">
                {skill.name}
            </span>
        </div>
    );
};

export const Skills = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const tweenRef = useRef<gsap.core.Tween | null>(null);

    useGSAP(() => {
        if (!carouselRef.current) return;

        // Infinite Linear Animation
        tweenRef.current = gsap.to(carouselRef.current, {
            x: "-50%",
            duration: 35, // Premium slow speed
            ease: "none",
            repeat: -1,
            onReverseComplete: () => {
                tweenRef.current?.totalTime(tweenRef.current?.rawTime() + tweenRef.current?.duration() * 10);
            }
        });

        // Entrance Reveal
        gsap.fromTo(sectionRef.current,
            { opacity: 0, y: 30 },
            { 
                opacity: 1, y: 0, duration: 1.5, ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%"
                }
            }
        );
    }, { scope: sectionRef });

    const handleMouseEnter = () => tweenRef.current?.pause();
    const handleMouseLeave = () => tweenRef.current?.play();

    return (
        <section 
            id="skills" 
            ref={sectionRef} 
            className="w-full py-32 md:py-48 bg-[#050505] text-white overflow-hidden relative z-20"
        >
            <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 mb-20 text-center md:text-left">
                <div className="inline-flex items-center gap-4 mb-6">
                    <span className="w-12 h-px bg-blue-500/50"></span>
                    <p className="text-blue-500 uppercase tracking-[0.5em] text-[10px] font-black">
                        TECHNOLOGIES & TOOLS
                    </p>
                </div>
                <h3 className="text-5xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9]">
                    My <span className="text-gray-600">Arsenal.</span>
                </h3>
            </div>

            {/* Horizontal Carousel Container */}
            <div 
                className="relative w-full py-10 flex items-center"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* Left/Right Fades for Premium Look */}
                <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-30 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent z-30 pointer-events-none" />

                <div 
                    ref={carouselRef}
                    className="flex gap-6 will-change-transform"
                    style={{ width: "max-content" }}
                >
                    {/* First Set */}
                    {allSkills.map((skill, i) => (
                        <SkillPill key={`s1-${i}`} skill={skill} />
                    ))}
                    {/* Duplicate Set for Seamless Loop */}
                    {allSkills.map((skill, i) => (
                        <SkillPill key={`s2-${i}`} skill={skill} />
                    ))}
                </div>
            </div>

            {/* Background Texture */}
            <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.01] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        </section>
    );
};
