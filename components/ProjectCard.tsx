"use client";
import React, { useRef } from 'react';
import { LuArrowUpRight } from "react-icons/lu";

export interface ProjectType {
    title: string;
    subtitle: string;
    desc?: string;
    img: string;
    link?: string;
}

interface ProjectCardProps {
    proj: ProjectType;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ proj }) => {
    return (
        <div className="group relative w-full flex flex-col items-start cursor-pointer">
            {/* Project Image Container */}
            <div className="relative w-full aspect-[16/10] rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-[#0a0a0a] border border-white/[0.08] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8),0_0_40px_rgba(59,130,246,0.1)] group-hover:-translate-y-3 group-hover:border-white/20">
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.2s] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110"
                    style={{ backgroundImage: `url(${proj.img})` }}
                />
                
                {/* Refined Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-1000" />
                
                {/* Premium Glow Layer */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-blue-500/10 blur-[60px]" />
                </div>
                
                {/* Top-Right Arrow (Minimalist Reveal) */}
                <div className="absolute top-8 right-8 w-14 h-14 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-full flex items-center justify-center text-white opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                    <LuArrowUpRight className="text-2xl group-hover:rotate-0 transition-transform duration-500" />
                </div>
            </div>

            {/* Project Info: Balanced Spacing */}
            <div className="mt-10 px-2 w-full flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                        <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter transition-all duration-500 group-hover:text-blue-200">
                            {proj.title}
                        </h3>
                        {/* Subtle Badge */}
                        <div className="h-[1px] flex-1 bg-white/5 group-hover:bg-white/10 transition-colors" />
                    </div>
                    
                    <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em] text-white/30 group-hover:text-white/60 transition-all duration-500">
                        {proj.subtitle}
                    </p>
                </div>

                {proj.desc && (
                    <p className="text-gray-500 text-xs md:text-[13px] font-medium mt-4 leading-relaxed max-w-lg opacity-80 group-hover:opacity-100 transition-opacity duration-700">
                        {proj.desc}
                    </p>
                )}
            </div>
            
            {/* External Ambient Shadow (Premium Lift) */}
            <div className="absolute -inset-10 bg-blue-900/5 blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
        </div>
    );
};
