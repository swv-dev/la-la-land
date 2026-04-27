"use client";

import { useTheme, TIME_THEMES } from "./ThemeContext";

export function ThemedFooter() {
  const { time, temp } = useTheme();
  const theme = TIME_THEMES[time];

  return (
    <footer
      className="border-t px-6 py-8 text-center text-sm transition-all duration-1000"
      style={{
        backgroundColor: `${theme.bg}ee`,
        borderColor: `${theme.accent}33`,
        color: theme.textMuted,
      }}
    >
      <p>La La Land - Property of Valencia. All rights reserved. Permanently.</p>
      <p className="mt-1">Temperature: a perfect {temp}&deg;F, always.</p>
    </footer>
  );
}
