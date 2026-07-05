export function AbstractHeroBg() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Base */}
      <div className="absolute inset-0 bg-[#0a1628]" />

      {/* Abstract mesh */}
      <div className="absolute inset-0 hero-abstract-mesh" />

      {/* Diagonal light slice */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          background:
            "linear-gradient(125deg, transparent 40%, rgba(255,255,255,0.8) 50%, transparent 60%)",
        }}
      />

      {/* Geometric arcs */}
      <svg
        className="absolute -right-[20%] top-[10%] w-[70%] h-[80%] opacity-[0.08]"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="140" stroke="white" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="100" stroke="white" strokeWidth="0.5" />
        <line x1="0" y1="200" x2="400" y2="200" stroke="white" strokeWidth="0.5" />
        <line x1="200" y1="0" x2="200" y2="400" stroke="white" strokeWidth="0.5" />
      </svg>

      {/* Floating rectangles */}
      <div className="absolute left-[8%] top-[18%] w-32 h-32 border border-white/[0.06] rotate-12" />
      <div className="absolute right-[15%] bottom-[25%] w-24 h-24 border border-white/[0.04] -rotate-6" />
      <div className="absolute left-[20%] bottom-[15%] w-16 h-16 bg-blue-500/[0.06] rotate-45" />

      {/* Dot field */}
      <div className="absolute inset-0 hero-dot-field opacity-40" />

      {/* Top edge highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}
