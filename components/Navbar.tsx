"use client";
import React from 'react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-[100] flex items-center justify-between px-8 md:px-24 py-6 mix-blend-difference pointer-events-none">
      <div className="text-2xl md:text-3xl font-bold tracking-tighter text-white cursor-pointer pointer-events-auto" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        Aryan.
      </div>
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300 pointer-events-auto">
        <a href="#work" className="hover:text-white transition-colors">Work</a>
        <a href="#arsenal" className="hover:text-white transition-colors">Arsenal</a>
        <a href="#timeline" className="hover:text-white transition-colors">Timeline</a>
        <a href="#contact" className="px-6 py-2.5 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors font-semibold">Let&apos;s Talk</a>
      </div>
    </nav>
  );
};
