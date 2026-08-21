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
    <div className="relative min-h-screen bg-black text-[#F5F5F7] selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden">
      {/* Background ambient lighting effects - refined and optimized */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-900/10 via-indigo-950/5 to-transparent blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main id="main-content">
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
