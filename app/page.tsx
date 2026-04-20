import { CustomCursor } from '@/components/CustomCursor';
import { Navbar } from '@/components/Navbar';
import { ScrollyCanvas } from '@/components/ScrollyCanvas';
import { Overlay } from '@/components/Overlay';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { About } from '@/components/About';
import { Timeline } from '@/components/Timeline';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
       <CustomCursor />
       <Navbar />
       <div className="relative">
           <ScrollyCanvas />
           <Overlay />
       </div>
       <Skills />
       <div id="work" className="relative z-20">
           <Projects />
       </div>
       <About />
       <Timeline />
       <Footer />
    </main>
  );
}
