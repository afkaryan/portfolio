"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ProjectCard } from './ProjectCard';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const projects = [
    {
        title: "Lumina Vault",
        subtitle: "Personal Media Storage",
        img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1200",
    },
    {
        title: "Personal Portfolio",
        subtitle: "Interactive Portfolio",
        img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200",
    },
    {
        title: "Smart Attendance & Proxy Detection System",
        subtitle: "MERN Stack + AI System",
        desc: "A MERN stack application for role-based attendance with proxy detection using geolocation, face recognition, and device fingerprinting.",
        img: "https://images.unsplash.com/photo-1633113088452-6e271ee91748?q=80&w=1200",
    },
    {
        title: "Velvet Pass",
        subtitle: "Movie Ticket Platform",
        img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200",
    }
];

export const Projects = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;
        const q = gsap.utils.selector(containerRef);
        const cards = q('.project-grid-item');

        // Defensive Reveal: preventOverlaps & fastScrollEnd
        gsap.fromTo(cards, 
            { opacity: 0, y: 50 }, 
            { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                ease: 'power3.out', 
                stagger: 0.15, 
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                    end: 'bottom 15%',
                    toggleActions: 'play none none reverse',
                    preventOverlaps: true,
                    fastScrollEnd: true
                }
            }
        );

        // Scoped Heading Reveal
        gsap.fromTo(q('.projects-heading'),
            { opacity: 0, x: -30 },
            {
                opacity: 1,
                x: 0,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: q('.projects-heading'),
                    start: "top 90%",
                    preventOverlaps: true
                }
            }
        );

        ScrollTrigger.refresh();
    }, { scope: containerRef });

    return (
        <section 
            ref={containerRef}
            id="work" 
            className="w-full min-h-screen py-32 md:py-48 bg-[#050505] text-white relative z-10 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                
                <div className="mb-24 md:mb-32">
                    <h2 className="projects-heading text-5xl md:text-8xl font-black tracking-tighter text-white opacity-0">
                        Selected <span className="text-gray-600">Work.</span>
                    </h2>
                    <div className="w-20 h-1 bg-white/20 mt-8" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20 md:gap-x-12 md:gap-y-32">
                    {projects.map((proj, i) => (
                        <div key={i} className="project-grid-item">
                            <ProjectCard proj={proj} />
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        </section>
    );
};
