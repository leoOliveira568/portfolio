"use client";

import { useEffect, useRef } from "react";

type NodePoint = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  hue: number;
};

export function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    let frame = 0;
    let width = 0;
    let height = 0;
    let nodes: NodePoint[] = [];
    let pointer = { x: -1000, y: -1000 };

    const makeNodes = () => {
      const density = width < 640 ? 26 : width < 1024 ? 44 : 72;
      nodes = Array.from({ length: density }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        radius: 0.8 + Math.random() * 1.1,
        hue: index % 3 === 0 ? 153 : index % 5 === 0 ? 265 : 188,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      makeNodes();
      if (reduceMotion.matches) draw(true);
    };

    const draw = (staticFrame = false) => {
      context.clearRect(0, 0, width, height);
      const linkDistance = width < 640 ? 92 : 132;

      nodes.forEach((node, index) => {
        if (!staticFrame) {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < -10) node.x = width + 10;
          if (node.x > width + 10) node.x = -10;
          if (node.y < -10) node.y = height + 10;
          if (node.y > height + 10) node.y = -10;

          if (!coarsePointer) {
            const dx = node.x - pointer.x;
            const dy = node.y - pointer.y;
            const distance = Math.hypot(dx, dy);
            if (distance < 110 && distance > 0) {
              const force = (110 - distance) / 110;
              node.x += (dx / distance) * force * 0.42;
              node.y += (dy / distance) * force * 0.42;
            }
          }
        }

        for (let next = index + 1; next < nodes.length; next += 1) {
          const other = nodes[next];
          const distance = Math.hypot(node.x - other.x, node.y - other.y);
          if (distance < linkDistance) {
            const alpha = (1 - distance / linkDistance) * 0.12;
            context.beginPath();
            context.moveTo(node.x, node.y);
            context.lineTo(other.x, other.y);
            context.strokeStyle = `rgba(94, 234, 212, ${alpha})`;
            context.lineWidth = 0.65;
            context.stroke();
          }
        }

        context.beginPath();
        context.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        context.fillStyle = `hsla(${node.hue}, 82%, 66%, 0.42)`;
        context.fill();
      });
    };

    const loop = () => {
      draw();
      frame = window.requestAnimationFrame(loop);
    };

    const onPointerMove = (event: PointerEvent) => {
      pointer = { x: event.clientX, y: event.clientY };
    };

    const onVisibility = () => {
      window.cancelAnimationFrame(frame);
      if (!document.hidden && !reduceMotion.matches) loop();
    };

    const onMotionChange = () => {
      window.cancelAnimationFrame(frame);
      if (reduceMotion.matches) draw(true);
      else loop();
    };

    resize();
    if (!reduceMotion.matches) loop();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    reduceMotion.addEventListener("change", onMotionChange);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibility);
      reduceMotion.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-20 opacity-75"
    />
  );
}
