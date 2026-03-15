"use client";

export default function GradientMesh() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[140px] animate-pulse" />

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[140px] animate-pulse" />

      <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-emerald-400/20 rounded-full blur-[120px]" />

    </div>
  );
}