"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type TimeOfDay = "dawn" | "morning" | "afternoon" | "sunset" | "night" | "midnight";
export type Weather = "perfect" | "breezy" | "rain" | "storm" | "rainbow" | "aurora";

interface ThemeState {
  time: TimeOfDay;
  weather: Weather;
  temp: number;
  setTime: (t: TimeOfDay) => void;
  setWeather: (w: Weather) => void;
  setTemp: (t: number) => void;
}

const ThemeContext = createContext<ThemeState | null>(null);

// Auto-detect time of day from user's clock
function detectTimeOfDay(): TimeOfDay {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 7) return "dawn";
  if (hour >= 7 && hour < 12) return "morning";
  if (hour >= 12 && hour < 17) return "afternoon";
  if (hour >= 17 && hour < 20) return "sunset";
  if (hour >= 20 && hour < 24) return "night";
  return "midnight";
}

export const TIME_THEMES = {
  dawn: {
    label: "Dawn",
    icon: "\u{1F305}",
    bg: "#1a0d2e",
    accent: "#f59e0b",
    glow: "rgba(245, 158, 11, 0.4)",
    gradient: "linear-gradient(180deg, #1e1035 0%, #7c3aed 30%, #f59e0b 70%, #fb923c 100%)",
    navBg: "rgba(26, 13, 46, 0.85)",
    cardBg: "linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(30, 16, 53, 0.8) 100%)",
    cardBorder: "rgba(245, 158, 11, 0.3)",
    textPrimary: "#fff",
    textSecondary: "#fbbf24",
    textMuted: "rgba(251, 191, 36, 0.6)",
  },
  morning: {
    label: "Morning",
    icon: "\u2600\uFE0F",
    bg: "#0f1b3d",
    accent: "#60a5fa",
    glow: "rgba(96, 165, 250, 0.4)",
    gradient: "linear-gradient(180deg, #3b82f6 0%, #60a5fa 40%, #93c5fd 70%, #fde68a 100%)",
    navBg: "rgba(15, 27, 61, 0.85)",
    cardBg: "linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(15, 27, 61, 0.8) 100%)",
    cardBorder: "rgba(96, 165, 250, 0.3)",
    textPrimary: "#fff",
    textSecondary: "#93c5fd",
    textMuted: "rgba(147, 197, 253, 0.6)",
  },
  afternoon: {
    label: "Afternoon",
    icon: "\u{1F324}\uFE0F",
    bg: "#0c1a3a",
    accent: "#38bdf8",
    glow: "rgba(56, 189, 248, 0.4)",
    gradient: "linear-gradient(180deg, #1d4ed8 0%, #3b82f6 50%, #60a5fa 100%)",
    navBg: "rgba(12, 26, 58, 0.85)",
    cardBg: "linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(12, 26, 58, 0.8) 100%)",
    cardBorder: "rgba(56, 189, 248, 0.3)",
    textPrimary: "#fff",
    textSecondary: "#7dd3fc",
    textMuted: "rgba(125, 211, 252, 0.6)",
  },
  sunset: {
    label: "Sunset",
    icon: "\u{1F307}",
    bg: "#0c0618",
    accent: "#c084fc",
    glow: "rgba(192, 132, 252, 0.4)",
    gradient: "linear-gradient(180deg, #1e1035 0%, #4c1d95 30%, #7c3aed 50%, #c084fc 70%, #f59e0b 90%)",
    navBg: "rgba(12, 6, 24, 0.85)",
    cardBg: "linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(30, 16, 53, 0.8) 100%)",
    cardBorder: "rgba(124, 58, 237, 0.3)",
    textPrimary: "#fff",
    textSecondary: "#c084fc",
    textMuted: "rgba(192, 132, 252, 0.6)",
  },
  night: {
    label: "Night",
    icon: "\u{1F319}",
    bg: "#050210",
    accent: "#06b6d4",
    glow: "rgba(6, 182, 212, 0.4)",
    gradient: "linear-gradient(180deg, #0c0618 0%, #1e1035 40%, #0e1a3a 100%)",
    navBg: "rgba(5, 2, 16, 0.9)",
    cardBg: "linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(5, 2, 16, 0.8) 100%)",
    cardBorder: "rgba(6, 182, 212, 0.3)",
    textPrimary: "#e0f2fe",
    textSecondary: "#22d3ee",
    textMuted: "rgba(34, 211, 238, 0.6)",
  },
  midnight: {
    label: "Midnight",
    icon: "\u2728",
    bg: "#000000",
    accent: "#a78bfa",
    glow: "rgba(167, 139, 250, 0.5)",
    gradient: "linear-gradient(180deg, #000000 0%, #0c0618 40%, #06b6d4 100%)",
    navBg: "rgba(0, 0, 0, 0.9)",
    cardBg: "linear-gradient(135deg, rgba(167, 139, 250, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)",
    cardBorder: "rgba(167, 139, 250, 0.3)",
    textPrimary: "#ddd6fe",
    textSecondary: "#a78bfa",
    textMuted: "rgba(167, 139, 250, 0.6)",
  },
};

export const WEATHER_EFFECTS = {
  perfect: { label: "Perfect", icon: "\u2600\uFE0F", className: "" },
  breezy: { label: "Tropical Breeze", icon: "\u{1F32C}\uFE0F", className: "animate-float" },
  rain: { label: "Warm Rain", icon: "\u{1F327}\uFE0F", className: "rain-active" },
  storm: { label: "Dragon Storm", icon: "\u26C8\uFE0F", className: "storm-active" },
  rainbow: { label: "Rainbow", icon: "\u{1F308}", className: "rainbow-active" },
  aurora: { label: "Purple Aurora", icon: "\u{1F49C}", className: "aurora-active" },
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [time, setTimeState] = useState<TimeOfDay>("sunset");
  const [weather, setWeatherState] = useState<Weather>("perfect");
  const [temp, setTempState] = useState(82);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load saved preferences or auto-detect
    const savedTime = localStorage.getItem("lalaland-time") as TimeOfDay | null;
    const savedWeather = localStorage.getItem("lalaland-weather") as Weather | null;
    const savedTemp = localStorage.getItem("lalaland-temp");

    setTimeState(savedTime || detectTimeOfDay());
    setWeatherState(savedWeather || "perfect");
    setTempState(savedTemp ? Number(savedTemp) : 82);
    setMounted(true);
  }, []);

  function setTime(t: TimeOfDay) {
    setTimeState(t);
    localStorage.setItem("lalaland-time", t);
  }
  function setWeather(w: Weather) {
    setWeatherState(w);
    localStorage.setItem("lalaland-weather", w);
  }
  function setTemp(t: number) {
    setTempState(t);
    localStorage.setItem("lalaland-temp", String(t));
  }

  // Apply CSS variables globally
  useEffect(() => {
    if (!mounted) return;
    const theme = TIME_THEMES[time];
    const root = document.documentElement;
    root.style.setProperty("--background", theme.bg);
    root.style.setProperty("--theme-accent", theme.accent);
    root.style.setProperty("--theme-glow", theme.glow);
    root.style.setProperty("--theme-nav-bg", theme.navBg);
    root.style.setProperty("--theme-card-bg", theme.cardBg);
    root.style.setProperty("--theme-card-border", theme.cardBorder);
    root.style.setProperty("--theme-text-primary", theme.textPrimary);
    root.style.setProperty("--theme-text-secondary", theme.textSecondary);
    root.style.setProperty("--theme-text-muted", theme.textMuted);
    root.style.setProperty("--theme-gradient", theme.gradient);
  }, [time, mounted]);

  // Apply weather class to body
  useEffect(() => {
    if (!mounted) return;
    const body = document.body;
    // Remove all weather classes
    body.classList.remove("rain-active", "storm-active", "rainbow-active", "aurora-active", "animate-float");
    const weatherClass = WEATHER_EFFECTS[weather].className;
    if (weatherClass) body.classList.add(weatherClass);
  }, [weather, mounted]);

  return (
    <ThemeContext.Provider value={{ time, weather, temp, setTime, setWeather, setTemp }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
