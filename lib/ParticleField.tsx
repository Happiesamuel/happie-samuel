"use client";

import { useEffect, useRef } from "react";

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const cols = 24;
    const spacingX = width / cols;
    const spacingY = spacingX;
    const rows = Math.ceil(height / spacingY) + 2;

    const dots: { x: number; y: number; baseY: number; phase: number }[] = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        dots.push({
          x: x * spacingX,
          y: y * spacingY,
          baseY: y * spacingY,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    let raf: number;
    let t = 0;

    const draw = () => {
      t += 0.015;
      ctx.clearRect(0, 0, width, height);

      dots.forEach((d) => {
        const wave = Math.sin(t + d.phase + d.x * 0.01) * 6;
        const y = d.baseY + wave;
        const pulse = (Math.sin(t * 1.5 + d.phase) + 1) / 2;

        ctx.beginPath();
        ctx.arc(d.x, y, 1 + pulse * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(74, 222, 128, ${0.05 + pulse * 0.12})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 opacity-60"
    />
  );
}
