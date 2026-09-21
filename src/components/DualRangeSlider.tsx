"use client";

import { useState } from "react";

interface DualRangeSliderProps {
  min: number;
  max: number;
  step: number;
  formatValue: (value: number) => string;
}

export function DualRangeSlider({
  min,
  max,
  step,
  formatValue,
}: DualRangeSliderProps) {
  const [low, setLow] = useState(min);
  const [high, setHigh] = useState(max);

  return (
    <div>
      <div className="relative h-5">
        <div className="absolute top-1/2 h-1.5 w-full -translate-y-1/2 rounded-full bg-slate-200" />
        <div
          className="absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-brand-500"
          style={{
            left: `${((low - min) / (max - min)) * 100}%`,
            right: `${100 - ((high - min) / (max - min)) * 100}%`,
          }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={low}
          onChange={(e) =>
            setLow(Math.min(Number(e.target.value), high - step))
          }
          className="range-thumb pointer-events-none absolute inset-0 w-full appearance-none bg-transparent"
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={high}
          onChange={(e) =>
            setHigh(Math.max(Number(e.target.value), low + step))
          }
          className="range-thumb pointer-events-none absolute inset-0 w-full appearance-none bg-transparent"
        />
      </div>
      <div className="mt-2 flex items-center justify-between text-xs font-medium text-slate-500">
        <span>{formatValue(low)}</span>
        <span>{formatValue(high)}{high === max ? "+" : ""}</span>
      </div>
    </div>
  );
}
