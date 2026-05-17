"use client";

export function GridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 grid-bg animate-grid-move opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg-deep via-transparent to-bg-deep" />
      <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-600/8 blur-[100px]" />
    </div>
  );
}


