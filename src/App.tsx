import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NeuralParticleCanvas } from './components/NeuralParticleCanvas';
import { Features } from './components/Features';
import { AgentTopologyVisual } from './components/AgentTopologyVisual';
import { EnterpriseBrain } from './components/EnterpriseBrain';
import { InteractiveDemo } from './components/InteractiveDemo';
import { TerminalPreview } from './components/TerminalPreview';
import { PerformanceMatrix } from './components/PerformanceMatrix';
import { InstallSection } from './components/InstallSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-[#F5F5F7] selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden">
      {/* 1. Global Neural Particle Field (Interconnect Mesh with Mouse Reactivity) */}
      <NeuralParticleCanvas />

      {/* 2. Background ambient lighting effects */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-blue-900/12 via-indigo-950/6 to-transparent blur-[120px]" />
        <div className="absolute top-[40%] right-[-100px] w-[500px] h-[500px] bg-purple-900/8 blur-[140px]" />
        <div className="absolute bottom-[20%] left-[-100px] w-[600px] h-[600px] bg-cyan-900/8 blur-[150px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main id="main-content">
          <Hero />
          <Features />
          <div className="max-w-7xl mx-auto px-6">
            <AgentTopologyVisual />
          </div>
          <EnterpriseBrain />
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
