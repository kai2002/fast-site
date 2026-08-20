import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { InteractiveDemo } from './components/InteractiveDemo';
import { TerminalPreview } from './components/TerminalPreview';
import { PerformanceMatrix } from './components/PerformanceMatrix';
import { InstallSection } from './components/InstallSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden">
      {/* Background ambient lighting effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-900/15 via-indigo-950/5 to-transparent blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <InteractiveDemo />
          <TerminalPreview />
          <PerformanceMatrix />
          <InstallSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
