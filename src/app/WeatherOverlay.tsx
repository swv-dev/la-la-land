"use client";

import { useTheme } from "./ThemeContext";

export function WeatherOverlay() {
  const { weather } = useTheme();

  if (weather === "rain") {
    return (
      <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden opacity-30">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="rain-drop absolute"
            style={{
              left: `${(i / 60) * 100 + Math.random() * 2}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${0.8 + Math.random() * 0.4}s`,
            }}
          />
        ))}
      </div>
    );
  }

  if (weather === "storm") {
    return (
      <div className="pointer-events-none fixed inset-0 z-40">
        <div className="absolute inset-0 animate-lightning opacity-0" />
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className="rain-drop absolute"
            style={{
              left: `${(i / 80) * 100 + Math.random() * 2}%`,
              animationDelay: `${Math.random() * 1}s`,
              animationDuration: `${0.5 + Math.random() * 0.3}s`,
              opacity: 0.4,
            }}
          />
        ))}
      </div>
    );
  }

  if (weather === "aurora") {
    return (
      <div className="pointer-events-none fixed inset-0 z-40 opacity-20">
        <div className="absolute inset-0 animate-aurora bg-gradient-to-r from-purple-500/40 via-cyan-400/20 to-purple-600/40" />
      </div>
    );
  }

  if (weather === "rainbow") {
    return (
      <div className="pointer-events-none fixed top-16 left-0 right-0 z-40 flex justify-center opacity-20">
        <div className="h-40 w-[80vw] rounded-t-full bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-blue-500 to-purple-500 blur-sm" />
      </div>
    );
  }

  return null;
}
