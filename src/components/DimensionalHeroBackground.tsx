import React, { useEffect, useRef } from 'react';

export const DimensionalHeroBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 800);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse coordinates for gentle distortion warp
    let mouseX = width / 2;
    let mouseY = height / 3;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Multi-dimensional quantum wave parameters
    let t = 0;
    const waveCount = 7;
    const waveColors = [
      { r: 41, g: 151, b: 255, a: 0.28 },   // Electric Blue
      { r: 99, g: 102, b: 241, a: 0.22 },   // Indigo
      { r: 168, g: 85, b: 247, a: 0.18 },   // Ethereal Violet
      { r: 6, g: 182, b: 212, a: 0.2 },     // Cyan Nebula
      { r: 236, g: 72, b: 153, a: 0.12 },   // Dimensional Magenta
      { r: 52, g: 211, b: 153, a: 0.14 },   // Quantum Green
      { r: 147, g: 197, b: 253, a: 0.25 },  // Pure Light Blue
    ];

    // Floating ethereal energy motes (multi-dimensional particles)
    const particleCount = 65;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 2 + 0.5,
      radius: Math.random() * 2.2 + 0.8,
      speedY: Math.random() * 0.4 + 0.15,
      speedX: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.6 + 0.2,
      pulseSpeed: Math.random() * 0.03 + 0.01,
      color: waveColors[Math.floor(Math.random() * waveColors.length)],
    }));

    const render = () => {
      t += 0.008;

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // 1. Multi-layered Fluid Harmonic Dimensional Waves
      ctx.save();
      ctx.globalCompositeOperation = 'screen';

      const cx = width / 2;
      const cy = height * 0.45;

      for (let w = 0; w < waveCount; w++) {
        const color = waveColors[w];
        const phase = t * (0.8 + w * 0.15) + w * 1.1;
        const freq1 = 0.0022 + w * 0.0004;
        const freq2 = 0.005 + w * 0.0008;
        const amp = 45 + w * 18;

        ctx.beginPath();
        ctx.moveTo(0, height);

        for (let x = 0; x <= width; x += 12) {
          // Distance to mouse for dimensional warping
          const dx = x - mouseX;
          const dy = cy - mouseY;
          const distMouse = Math.sqrt(dx * dx + dy * dy);
          const warp = Math.max(0, (1 - distMouse / 380)) * 35 * Math.sin(t * 2 + x * 0.01);

          // Harmonic wave formula with multi-frequency distortion
          const y1 = Math.sin(x * freq1 + phase) * amp;
          const y2 = Math.cos(x * freq2 - phase * 0.7) * (amp * 0.45);
          const y3 = Math.sin((x + t * 40) * 0.001) * 20;

          const y = cy + y1 + y2 + y3 + warp + (w - waveCount / 2) * 24;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();

        // Gradient for volumetric atmospheric lighting
        const grad = ctx.createLinearGradient(0, cy - amp * 2, 0, height);
        grad.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a * 0.8})`);
        grad.addColorStop(0.5, `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a * 0.3})`);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = grad;
        ctx.fill();

        // Wave crest luminous contour line
        ctx.beginPath();
        for (let x = 0; x <= width; x += 12) {
          const dx = x - mouseX;
          const dy = cy - mouseY;
          const distMouse = Math.sqrt(dx * dx + dy * dy);
          const warp = Math.max(0, (1 - distMouse / 380)) * 35 * Math.sin(t * 2 + x * 0.01);

          const y1 = Math.sin(x * freq1 + phase) * amp;
          const y2 = Math.cos(x * freq2 - phase * 0.7) * (amp * 0.45);
          const y3 = Math.sin((x + t * 40) * 0.001) * 20;
          const y = cy + y1 + y2 + y3 + warp + (w - waveCount / 2) * 24;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a * 1.5})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      ctx.restore();

      // 2. Floating Ethereal Energy Particles (Z-Depth Perspective)
      particles.forEach((p) => {
        p.y -= p.speedY * p.z;
        p.x += p.speedX * p.z + Math.sin(t * 2 + p.y * 0.01) * 0.3;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        const pulse = Math.sin(t * 3 + p.x) * 0.25 + 0.75;
        const currentAlpha = p.alpha * pulse;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * p.z, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${currentAlpha})`;
        ctx.shadowColor = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.9)`;
        ctx.shadowBlur = 12 * p.z;
        ctx.fill();
        ctx.restore();
      });

      // 3. Central Dimensional Singularity Pulse (Subtle Radial Core)
      ctx.save();
      const coreGrad = ctx.createRadialGradient(
        cx + Math.sin(t) * 40,
        cy + Math.cos(t * 0.8) * 20,
        10,
        cx,
        cy,
        width * 0.55
      );
      coreGrad.addColorStop(0, 'rgba(41, 151, 255, 0.12)');
      coreGrad.addColorStop(0.35, 'rgba(129, 140, 248, 0.06)');
      coreGrad.addColorStop(0.7, 'rgba(168, 85, 247, 0.02)');
      coreGrad.addColorStop(1, 'transparent');

      ctx.fillStyle = coreGrad;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-80"
        aria-hidden="true"
      />
      {/* Vignette bottom fade for seamless transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,transparent_30%,#000000_100%)] pointer-events-none" />
    </div>
  );
};
