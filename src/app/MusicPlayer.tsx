"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme, TIME_THEMES } from "./ThemeContext";

export function MusicPlayer() {
  const { time } = useTheme();
  const theme = TIME_THEMES[time];
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Spotify embed approach - use iframe for "On My Mama" by Victoria Monet
    // Track URI: spotify:track:5gJKsGij5oGsL3eSJRGxGH
  }, []);

  return (
    <>
      {/* Floating music button */}
      <button
        onClick={() => setShowPlayer(!showPlayer)}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        style={{
          backgroundColor: theme.accent,
          boxShadow: `0 0 20px ${theme.glow}`,
        }}
        title="On My Mama - Victoria Monet"
      >
        <span className="text-xl">{showPlayer ? "\u2716" : "\u266B"}</span>
      </button>

      {/* Spotify embed player */}
      {showPlayer && (
        <div className="fixed bottom-20 right-6 z-50 overflow-hidden rounded-2xl shadow-2xl transition-all duration-300"
          style={{ boxShadow: `0 0 40px ${theme.glow}` }}
        >
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/track/5gJKsGij5oGsL3eSJRGxGH?utm_source=generator&theme=0"
            width="352"
            height="152"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      )}
    </>
  );
}
