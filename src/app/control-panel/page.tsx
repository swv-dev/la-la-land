"use client";

import { useState } from "react";

const timeOptions = [
  { value: "dawn", label: "Dawn", icon: "🌅", sky: "linear-gradient(180deg, #1e1035 0%, #7c3aed 30%, #f59e0b 70%, #fb923c 100%)", description: "The purple sky wakes up" },
  { value: "morning", label: "Morning", icon: "☀️", sky: "linear-gradient(180deg, #3b82f6 0%, #60a5fa 40%, #93c5fd 70%, #fde68a 100%)", description: "Bright and beautiful" },
  { value: "afternoon", label: "Afternoon", icon: "🌤️", sky: "linear-gradient(180deg, #1d4ed8 0%, #3b82f6 50%, #60a5fa 100%)", description: "Peak island hours" },
  { value: "sunset", label: "Sunset", icon: "🌇", sky: "linear-gradient(180deg, #1e1035 0%, #4c1d95 30%, #7c3aed 50%, #c084fc 70%, #f59e0b 90%)", description: "The signature purple sunset" },
  { value: "night", label: "Night", icon: "🌙", sky: "linear-gradient(180deg, #0c0618 0%, #1e1035 40%, #0e1a3a 100%)", description: "The ocean starts glowing" },
  { value: "midnight", label: "Midnight", icon: "✨", sky: "linear-gradient(180deg, #000000 0%, #0c0618 40%, #06b6d4 100%)", description: "Full bioluminescence" },
];

const weatherOptions = [
  { value: "perfect", label: "Perfect", icon: "☀️", effect: "", description: "82°F, no clouds, light breeze. The default." },
  { value: "breezy", label: "Tropical Breeze", icon: "🌬️", effect: "animate-float", description: "A warm wind dances through the palms" },
  { value: "rain", label: "Warm Rain", icon: "🌧️", effect: "", description: "Soft tropical rain. Still warm. Still beautiful." },
  { value: "storm", label: "Dragon Storm", icon: "⛈️", effect: "", description: "The dragons are flying. The sky rumbles. It's dramatic." },
  { value: "rainbow", label: "Rainbow", icon: "🌈", effect: "", description: "After the rain, across the waterfalls" },
  { value: "aurora", label: "Purple Aurora", icon: "💜", effect: "animate-pulse-glow", description: "Rare purple northern lights over the island" },
];

const temperatureRange = { min: 75, max: 90, default: 82 };

export default function ControlPanelPage() {
  const [time, setTime] = useState("sunset");
  const [weather, setWeather] = useState("perfect");
  const [temp, setTemp] = useState(82);
  const [announcement, setAnnouncement] = useState("");
  const [showAnnouncement, setShowAnnouncement] = useState(false);

  const currentTime = timeOptions.find((t) => t.value === time)!;
  const currentWeather = weatherOptions.find((w) => w.value === weather)!;

  function broadcastAnnouncement() {
    if (announcement.trim()) {
      setShowAnnouncement(true);
      setTimeout(() => setShowAnnouncement(false), 5000);
    }
  }

  return (
    <div className="min-h-screen bg-[#0c0618] px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="glow-text mb-4 text-5xl font-bold text-white">
            Island Control Panel
          </h1>
          <p className="text-lg text-sunset-pink">
            Valencia&apos;s Eyes Only
          </p>
          <p className="mt-2 text-sm text-foreground/40">
            Because she controls everything. Including the weather.
          </p>
        </div>

        {/* Live Preview */}
        <div
          className={`relative mb-12 overflow-hidden rounded-3xl border border-purple-glow/30 p-12 text-center transition-all duration-1000 ${currentWeather.effect}`}
          style={{ background: currentTime.sky }}
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

          {/* Storm effect */}
          {weather === "storm" && (
            <div className="absolute inset-0 bg-black/20 animate-pulse" />
          )}

          {/* Aurora effect */}
          {weather === "aurora" && (
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/10 to-purple-500/20 animate-pulse" />
          )}

          {/* Announcement banner */}
          {showAnnouncement && (
            <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/60 p-4 backdrop-blur text-white font-semibold animate-float">
              📢 {announcement}
            </div>
          )}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Time of Day */}
          <div className="bg-card rounded-2xl p-6">
            <h2 className="mb-4 text-xl font-bold text-sunset-pink">
              Time of Day
            </h2>
            <div className="grid grid-cols-3 gap-2">
              {timeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setTime(option.value)}
                  className={`rounded-xl p-3 text-center transition-all ${
                    time === option.value
                      ? "bg-purple-glow/30 border border-purple-glow text-white"
                      : "bg-deep-purple/20 border border-transparent text-foreground/50 hover:bg-deep-purple/40"
                  }`}
                >
                  <span className="text-2xl">{option.icon}</span>
                  <p className="mt-1 text-xs font-semibold">{option.label}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Weather */}
          <div className="bg-card rounded-2xl p-6">
            <h2 className="mb-4 text-xl font-bold text-sunset-pink">
              Weather
            </h2>
            <div className="grid grid-cols-3 gap-2">
              {weatherOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setWeather(option.value)}
                  className={`rounded-xl p-3 text-center transition-all ${
                    weather === option.value
                      ? "bg-purple-glow/30 border border-purple-glow text-white"
                      : "bg-deep-purple/20 border border-transparent text-foreground/50 hover:bg-deep-purple/40"
                  }`}
                >
                  <span className="text-2xl">{option.icon}</span>
                  <p className="mt-1 text-xs font-semibold">{option.label}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Temperature */}
          <div className="bg-card rounded-2xl p-6">
            <h2 className="mb-4 text-xl font-bold text-sunset-pink">
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
                className="flex-1 accent-purple-600"
              />
              <span className="text-sm text-foreground/40">{temperatureRange.max}&deg;</span>
            </div>
            <p className="mt-3 text-center text-3xl font-bold text-white">
              {temp}&deg;F
            </p>
            <p className="mt-1 text-center text-xs text-foreground/40">
              {temp < 80
                ? "Getting a little cool for the wolves..."
                : temp > 85
                ? "Getting warm. The wolves are judging you."
                : "Perfect wolf temperature."}
            </p>
          </div>

          {/* Island Announcement */}
          <div className="bg-card rounded-2xl p-6">
            <h2 className="mb-4 text-xl font-bold text-sunset-pink">
              Island Announcement
            </h2>
            <input
              type="text"
              value={announcement}
              onChange={(e) => setAnnouncement(e.target.value)}
              placeholder="Broadcast a message to all of La La Land..."
              className="mb-3 w-full rounded-lg border border-purple-glow/30 bg-deep-purple/30 px-4 py-3 text-white placeholder:text-foreground/30 focus:border-sunset-pink focus:outline-none"
            />
            <button
              onClick={broadcastAnnouncement}
              className="rounded-full bg-sunset-orange px-5 py-2 text-sm font-semibold text-black transition-all hover:bg-sunset-orange/80"
            >
              📢 Broadcast
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-xs text-foreground/25">
          This control panel is for Valencia&apos;s use only. If you are not Valencia,
          close this page immediately. The dragons have been notified.
        </div>
      </div>
    </div>
  );
}
