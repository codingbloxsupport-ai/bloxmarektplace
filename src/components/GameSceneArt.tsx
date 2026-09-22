// Small illustrated scene thumbnails for the hero laptop mockup's mini
// listing cards. Built as flat-shaded blocky/voxel illustrations (evoking
// Roblox's low-poly look) rather than a literal photo — we have no way to
// generate real screenshots, and a stock icon on a tinted tile reads as a
// generic placeholder, so this aims for "clearly a small illustrated scene"
// instead of either extreme.

function Sky({ id, top, bottom }: { id: string; top: string; bottom: string }) {
  return (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={top} />
        <stop offset="100%" stopColor={bottom} />
      </linearGradient>
    </defs>
  );
}

export function TycoonScene() {
  const bg = "url(#tycoon-sky)";
  return (
    <svg viewBox="0 0 200 80" preserveAspectRatio="none" className="h-full w-full">
      <Sky id="tycoon-sky" top="#dbeafe" bottom="#0a5cf5" />
      <rect width="200" height="80" fill={bg} />
      <circle cx="168" cy="20" r="16" fill="#ffffff" opacity="0.18" />
      {[
        { x: 8, w: 20, h: 34, fill: "#0b3fc4" },
        { x: 32, w: 16, h: 50, fill: "#0a2472" },
        { x: 52, w: 22, h: 30, fill: "#0b3fc4" },
        { x: 78, w: 18, h: 58, fill: "#0a2472" },
        { x: 100, w: 24, h: 40, fill: "#0b3fc4" },
        { x: 128, w: 16, h: 52, fill: "#0a2472" },
        { x: 148, w: 26, h: 32, fill: "#0b3fc4" },
        { x: 178, w: 18, h: 46, fill: "#0a2472" },
      ].map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={80 - b.h} width={b.w} height={b.h} fill={b.fill} />
          {Array.from({ length: Math.floor(b.h / 12) }).map((_, r) => (
            <rect
              key={r}
              x={b.x + 3}
              y={80 - b.h + 5 + r * 12}
              width={3}
              height={4}
              fill="#fde68a"
              opacity={0.8}
            />
          ))}
        </g>
      ))}
    </svg>
  );
}

export function AnimeScene() {
  return (
    <svg viewBox="0 0 200 80" preserveAspectRatio="none" className="h-full w-full">
      <Sky id="anime-sky" top="#e0fbff" bottom="#17c7fb" />
      <rect width="200" height="80" fill="url(#anime-sky)" />
      <circle cx="100" cy="34" r="20" fill="#ffffff" opacity="0.35" />
      {[
        { cx: 24, cy: 62, r: 5 },
        { cx: 150, cy: 20, r: 3 },
        { cx: 170, cy: 44, r: 4 },
        { cx: 40, cy: 24, r: 3 },
      ].map((p, i) => (
        <circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill="#ffffff" opacity="0.6" />
      ))}
      {/* torii gate */}
      <rect x="70" y="30" width="8" height="50" fill="#0a2472" />
      <rect x="122" y="30" width="8" height="50" fill="#0a2472" />
      <rect x="58" y="22" width="84" height="9" rx="1.5" fill="#0b3fc4" />
      <rect x="66" y="34" width="68" height="6" rx="1.5" fill="#0b3fc4" />
      <rect x="0" y="74" width="200" height="6" fill="#0a5cf5" opacity="0.4" />
    </svg>
  );
}

export function PetScene() {
  return (
    <svg viewBox="0 0 200 80" preserveAspectRatio="none" className="h-full w-full">
      <Sky id="pet-sky" top="#ecfdf5" bottom="#10b981" />
      <rect width="200" height="80" fill="url(#pet-sky)" />
      <circle cx="30" cy="18" r="12" fill="#fde68a" opacity="0.9" />
      <path d="M0 56 Q 50 34 100 54 T 200 50 V80 H0 Z" fill="#047857" opacity="0.9" />
      {[
        { cx: 46, cy: 46, r: 13 },
        { cx: 64, cy: 40, r: 10 },
        { cx: 150, cy: 44, r: 15 },
        { cx: 170, cy: 38, r: 9 },
      ].map((t, i) => (
        <g key={i}>
          <rect x={t.cx - 2} y={t.cy + t.r - 4} width={4} height={14} fill="#78350f" />
          <circle cx={t.cx} cy={t.cy} r={t.r} fill="#065f46" />
        </g>
      ))}
    </svg>
  );
}

export function CityScene() {
  return (
    <svg viewBox="0 0 200 80" preserveAspectRatio="none" className="h-full w-full">
      <Sky id="city-sky" top="#fff7ed" bottom="#f59e0b" />
      <rect width="200" height="80" fill="url(#city-sky)" />
      <circle cx="34" cy="52" r="18" fill="#fde68a" opacity="0.8" />
      {[
        { x: 0, w: 18, h: 26, fill: "#b45309" },
        { x: 18, w: 22, h: 20, fill: "#92400e" },
        { x: 40, w: 16, h: 30, fill: "#b45309" },
        { x: 58, w: 24, h: 18, fill: "#92400e" },
        { x: 84, w: 18, h: 34, fill: "#b45309" },
        { x: 104, w: 20, h: 22, fill: "#92400e" },
        { x: 126, w: 16, h: 28, fill: "#b45309" },
        { x: 144, w: 24, h: 18, fill: "#92400e" },
        { x: 170, w: 18, h: 30, fill: "#b45309" },
        { x: 188, w: 12, h: 22, fill: "#92400e" },
      ].map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={80 - b.h} width={b.w} height={b.h} fill={b.fill} />
          {Array.from({ length: Math.max(1, Math.floor(b.h / 10)) }).map((_, r) => (
            <rect
              key={r}
              x={b.x + 3}
              y={80 - b.h + 4 + r * 10}
              width={3}
              height={3}
              fill="#fef3c7"
              opacity={0.85}
            />
          ))}
        </g>
      ))}
    </svg>
  );
}
