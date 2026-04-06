import React from 'react';

export const Footer = () => {
    return (
        <footer id="contact" className="bg-[#050505] text-white pt-40 pb-12 px-8 md:px-24 relative z-20">
            <div className="max-w-7xl mx-auto flex flex-col items-start md:items-center text-center">
                <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
                    Let&apos;s Work Together.
                </h2>
                <p className="text-lg md:text-3xl text-gray-400 font-light max-w-3xl mb-16 leading-relaxed">
                    Open for opportunities involving full-stack development, AI/ML engineering, and creative data visualization. I build digital architectures.
                </p>
                <a href="mailto:bishtaryan41@gmail.com" className="group relative inline-flex items-center justify-center px-12 py-5 font-medium text-white bg-white/5 border border-white/20 rounded-full overflow-hidden hover:bg-white/10 transition-all duration-300 ease-out hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] cursor-none">
                    <span className="relative z-10 text-xl font-semibold group-hover:text-amber-300 transition-colors">Start a Conversation</span>
                </a>

                <div className="mt-40 w-full pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-medium">
                    <p>© 2026 Aryan Bisht. Crafted with Next.js & Framer Motion.</p>
                    <div className="flex space-x-8 mt-6 md:mt-0">
                        <a href="https://github.com/afkaryan" className="hover:text-white transition-colors uppercase tracking-widest text-[11px]" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/aryan-bisht-" className="hover:text-white transition-colors uppercase tracking-widest text-[11px]" target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
