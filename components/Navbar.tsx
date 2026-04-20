"use client";
import React from 'react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-[100] flex items-center justify-between px-8 md:px-12 py-6 pointer-events-none mix-blend-difference">
      
      {/* Left Column: Logo */}
      <div className="w-[200px] flex items-center">
        <div 
          className="text-2xl font-black tracking-tighter text-white cursor-pointer pointer-events-auto uppercase" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          Aryan.
        </div>
      </div>

      {/* Center Column: Links */}
      <div className="hidden lg:flex flex-1 justify-center items-center space-x-8 text-sm font-semibold text-gray-400 pointer-events-auto">
        <a href="#arsenal" className="hover:text-white transition-colors">Arsenal</a>
        <a href="#work" className="hover:text-white transition-colors text-white">Work</a>
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#timeline" className="hover:text-white transition-colors">Education</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </div>

      {/* Right Column: Actions */}
      <div className="hidden md:flex w-[200px] items-center justify-end space-x-6 pointer-events-auto">
        {/* Resume Button */}
        <a 
          href="/resume.pdf" 
          target="_blank" 
          className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors text-sm font-semibold backdrop-blur-md"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Resume
        </a>

        {/* GitHub Icon (Line Art) */}
        <a href="https://github.com/afkaryan" target="_blank" className="text-gray-400 hover:text-white transition-colors">
          <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>

        {/* LinkedIn Icon (Line Art) */}
        <a href="https://www.linkedin.com/in/aryan-bisht-" target="_blank" className="text-gray-400 hover:text-white transition-colors">
          <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </div>

    </nav>
  );
};
