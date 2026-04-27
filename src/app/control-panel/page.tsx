"use client";

import { useState } from "react";
import { useTheme, TIME_THEMES, WEATHER_EFFECTS, TimeOfDay, Weather } from "../ThemeContext";

const timeOptions: { value: TimeOfDay; label: string; icon: string; description: string }[] = [
  { value: "dawn", label: "Dawn", icon: "\u{1F305}", description: "The purple sky wakes up" },
  { value: "morning", label: "Morning", icon: "\u2600\uFE0F", description: "Bright and beautiful" },
  { value: "afternoon", label: "Afternoon", icon: "\u{1F324}\uFE0F", description: "Peak island hours" },
  { value: "sunset", label: "Sunset", icon: "\u{1F307}", description: "The signature purple sunset" },
  { value: "night", label: "Night", icon: "\u{1F319}", description: "The ocean starts glowing" },
  { value: "midnight", label: "Midnight", icon: "\u2728", description: "Full bioluminescence" },
];

const weatherOptions: { value: Weather; label: string; icon: string; description: string }[] = [
  { value: "perfect", label: "Perfect", icon: "\u2600\uFE0F", description: "82\u00B0F, no clouds, light breeze. The default." },
  { value: "breezy", label: "Tropical Breeze", icon: "\u{1F32C}\uFE0F", description: "A warm wind dances through the palms" },
  { value: "rain", label: "Warm Rain", icon: "\u{1F327}\uFE0F", description: "Soft tropical rain. Still warm. Still beautiful." },
  { value: "storm", label: "Dragon Storm", icon: "\u26C8\uFE0F", description: "The dragons are flying. The sky rumbles." },
  { value: "rainbow", label: "Rainbow", icon: "\u{1F308}", description: "After the rain, across the waterfalls" },
  { value: "aurora", label: "Purple Aurora", icon: "\u{1F49C}", description: "Rare purple northern lights over the island" },
];

const temperatureRange = { min: 75, max: 90 };

export default function ControlPanelPage() {
  const { time, weather, temp, setTime, setWeather, setTemp } = useTheme();
  const [announcement, setAnnouncement] = useState("");
  const [showAnnouncement, setShowAnnouncement] = useState(false);

  const currentTime = timeOptions.find((t) => t.value === time)!;
  const currentWeather = weatherOptions.find((w) => w.value === weather)!;
  const theme = TIME_THEMES[time];
  const weatherEffect = WEATHER_EFFECTS[weather];

  function broadcastAnnouncement() {
    if (announcement.trim()) {
      setShowAnnouncement(true);
      setTimeout(() => setShowAnnouncement(false), 5000);
    }
  }

  return (
    <div className="min-h-screen px-6 py-24" style={{ backgroundColor: theme.bg }}>
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="glow-text mb-4 text-5xl font-bold" style={{ color: theme.textPrimary }}>
            Island Control Panel
          </h1>
          <p className="text-lg" style={{ color: theme.textSecondary }}>
            Valencia&apos;s Eyes Only
          </p>
          <p className="mt-2 text-sm" style={{ color: theme.textMuted }}>
            Because she controls everything. Including the weather. Changes apply to the whole island.
          </p>
        </div>

        {/* Live Preview */}
        <div
          className={`relative mb-12 overflow-hidden rounded-3xl p-12 text-center transition-all duration-1000 ${weatherEffect.className}`}
          style={{ background: theme.gradient, border: `1px solid ${theme.accent}44` }}
        >
          <div className="relative z-10">
            <span className="text-6xl">{currentTime.icon}</span>
            <span className="ml-4 text-4xl">{currentWeather.icon}</span>
            <h2 className="mt-4 text-3xl font-bold text-white drop-shadow-lg">
              La La Land
            </h2>
            <p className="mt-2 text-lg text-white/80 drop-shadow">
              {currentTime.label} &bull; {currentWeather.label} &bull; {temp}&deg;F
            </p>
            <p className="mt-1 text-sm text-white/60 drop-shadow">
              {currentTime.description} &bull; {currentWeather.description}
            </p>
          </div>

          {/* Rain effect */}
          {weather === "rain" && (
            <div className="absolute inset-0 opacity-40">
              {Array.from({ length: 30 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute h-8 w-px bg-gradient-to-b from-transparent to-blue-300"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animation: "twinkle 1s linear infinite",
                  }}
                />
              ))}
            </div>
          )}

          {weather === "storm" && (
            <div className="absolute inset-0 bg-black/20 animate-pulse" />
          )}

          {weather === "aurora" && (
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/10 to-purple-500/20 animate-pulse" />
          )}

          {showAnnouncement && (
            <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/60 p-4 backdrop-blur text-white font-semibold animate-float">
              {"\u{1F4E2}"} {announcement}
            </div>
          )}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Time of Day */}
          <div className="bg-card rounded-2xl p-6">
            <h2 className="mb-4 text-xl font-bold" style={{ color: theme.textSecondary }}>
              Time of Day
            </h2>
            <div className="grid grid-cols-3 gap-2">
              {timeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setTime(option.value)}
                  className={`rounded-xl p-3 text-center transition-all ${
                    time === option.value
                      ? "border text-white"
                      : "border border-transparent text-foreground/50 hover:opacity-80"
                  }`}
                  style={
                    time === option.value
                      ? { backgroundColor: `${theme.accent}30`, borderColor: theme.accent }
                      : { backgroundColor: `${theme.bg}40` }
                  }
                >
                  <span className="text-2xl">{option.icon}</span>
                  <p className="mt-1 text-xs font-semibold">{option.label}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Weather */}
          <div className="bg-card rounded-2xl p-6">
            <h2 className="mb-4 text-xl font-bold" style={{ color: theme.textSecondary }}>
              Weather
            </h2>
            <div className="grid grid-cols-3 gap-2">
              {weatherOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setWeather(option.value)}
                  className={`rounded-xl p-3 text-center transition-all ${
                    weather === option.value
                      ? "border text-white"
                      : "border border-transparent text-foreground/50 hover:opacity-80"
                  }`}
                  style={
                    weather === option.value
                      ? { backgroundColor: `${theme.accent}30`, borderColor: theme.accent }
                      : { backgroundColor: `${theme.bg}40` }
                  }
                >
                  <span className="text-2xl">{option.icon}</span>
                  <p className="mt-1 text-xs font-semibold">{option.label}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Temperature */}
          <div className="bg-card rounded-2xl p-6">
            <h2 className="mb-4 text-xl font-bold" style={{ color: theme.textSecondary }}>
              Temperature
            </h2>
            <div className="flex items-center gap-4">
              <span className="text-sm text-foreground/40">{temperatureRange.min}&deg;</span>
              <input
                type="range"
                min={temperatureRange.min}
                max={temperatureRange.max}
                value={temp}
                onChange={(e) => setTemp(Number(e.target.value))}
                className="flex-1"
                style={{ accentColor: theme.accent }}
              />
              <span className="text-sm text-foreground/40">{temperatureRange.max}&deg;</span>
            </div>
            <p className="mt-3 text-center text-3xl font-bold" style={{ color: theme.textPrimary }}>
              {temp}&deg;F
            </p>
            <p className="mt-1 text-center text-xs" style={{ color: theme.textMuted }}>
              {temp < 80
                ? "Getting a little cool for the wolves..."
                : temp > 85
                ? "Getting warm. The wolves are judging you."
                : "Perfect wolf temperature."}
            </p>
          </div>

          {/* Island Announcement */}
          <div className="bg-card rounded-2xl p-6">
            <h2 className="mb-4 text-xl font-bold" style={{ color: theme.textSecondary }}>
              Island Announcement
            </h2>
            <input
              type="text"
              value={announcement}
              onChange={(e) => setAnnouncement(e.target.value)}
              placeholder="Broadcast a message to all of La La Land..."
              className="mb-3 w-full rounded-lg border px-4 py-3 text-white placeholder:text-foreground/30 focus:outline-none"
              style={{ backgroundColor: `${theme.bg}80`, borderColor: `${theme.accent}44`, }}
            />
            <button
              onClick={broadcastAnnouncement}
              className="rounded-full px-5 py-2 text-sm font-semibold text-black transition-all hover:opacity-80"
              style={{ backgroundColor: theme.accent }}
            >
              {"\u{1F4E2}"} Broadcast
            </button>
          </div>
        </div>

        <div className="mt-12 text-center text-xs" style={{ color: theme.textMuted }}>
          This control panel is for Valencia&apos;s use only. If you are not Valencia,
          close this page immediately. The dragons have been notified.
        </div>
      </div>
    </div>
  );
}
