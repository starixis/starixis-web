"use client";

import { useEffect, useRef } from "react";

const nodes = [
  { x: .14, y: .24, r: 11, c: "#4fd6e6" }, { x: .82, y: .16, r: 11, c: "#7aa8ff" },
  { x: .50, y: .50, r: 17, c: "#4fd6e6" }, { x: .20, y: .80, r: 9, c: "#7aa8ff" },
  { x: .86, y: .74, r: 9, c: "#4fd6e6" }, { x: .58, y: .88, r: 8, c: "#9a86ff" },
  { x: .70, y: .36, r: 8, c: "#9a86ff" },
];
const edges = [[0,2],[1,2],[3,2],[4,2],[5,2],[6,2],[0,3],[1,6],[4,5],[3,5],[1,4]];

// Seeded so the starfield is identical every render/reload rather than reshuffling.
function mulberry32(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const random = mulberry32(20260802);
const stars = Array.from({ length: 440 }, () => ({
  x: random(),
  y: random(),
  r: .3 + random() * 1.15,
  alpha: .16 + random() * .58,
  phase: random() * Math.PI * 2,
  speed: .4 + random() * 1.2,
}));

export function IntelligenceNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0, height = 0, time = 0, frame = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width; height = rect.height;
      canvas.width = width * dpr; canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      if (!reduced) time += .007;
      // Node/line sizes are authored for a ~1200px-wide canvas; scale them down on
      // narrow viewports so the network stays a backdrop instead of dominating.
      const scale = Math.max(.4, Math.min(1, width / 1200));
      // Star positions are normalised, so draw a count proportional to area to keep
      // density roughly constant instead of thinning out on wide viewports.
      const starCount = Math.max(90, Math.min(stars.length, Math.round((width * height) / 4600)));
      for (let i = 0; i < starCount; i++) {
        const star = stars[i];
        const twinkle = reduced ? 1 : .62 + .38 * Math.sin(time * star.speed * 2 + star.phase);
        ctx.fillStyle = `rgba(214,230,255,${star.alpha * twinkle})`;
        ctx.beginPath(); ctx.arc(star.x * width, star.y * height, star.r, 0, Math.PI * 2); ctx.fill();
      }
      const positions = nodes.map((node, index) => ({
        ...node,
        x: node.x * width + Math.sin(time + index * 1.3) * 5,
        y: node.y * height + Math.cos(time * .8 + index) * 5,
      }));
      edges.forEach(([from, to], index) => {
        const a = positions[from], b = positions[to];
        ctx.strokeStyle = "rgba(125,212,240,.42)"; ctx.lineWidth = 1.8 * scale;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        const progress = ((time * .32) + index * .11) % 1;
        const px = a.x + (b.x - a.x) * progress, py = a.y + (b.y - a.y) * progress;
        ctx.fillStyle = "rgba(150,240,255,.30)";
        ctx.beginPath(); ctx.arc(px, py, 11 * scale, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "rgba(210,250,255,1)";
        ctx.beginPath(); ctx.arc(px, py, 4 * scale, 0, Math.PI * 2); ctx.fill();
      });
      positions.forEach((node, index) => {
        const pulse = .5 + .5 * Math.sin(time * 1.4 + index);
        const r = node.r * scale;
        ctx.fillStyle = `rgba(79,214,230,${.12 + pulse * .14})`;
        ctx.beginPath(); ctx.arc(node.x, node.y, r + (12 + pulse * 8) * scale, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "#0c1620"; ctx.strokeStyle = node.c; ctx.lineWidth = 2.6 * scale;
        ctx.beginPath(); ctx.arc(node.x, node.y, r, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      });
      if (!reduced) frame = requestAnimationFrame(draw);
    };
    resize(); draw();
    window.addEventListener("resize", resize);
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(frame); };
  }, []);

  return (
    <div className="network" aria-hidden="true">
      <canvas ref={canvasRef} />
      <span className="network-label" style={{ left: "8%", top: "20%" }}>shoppers</span>
      <span className="network-label" style={{ right: "6%", top: "12%" }}>retailers</span>
      <span className="network-label" style={{ left: "10%", bottom: "16%" }}>destinations</span>
      <span className="network-label" style={{ right: "8%", bottom: "22%" }}>commerce</span>
    </div>
  );
}
