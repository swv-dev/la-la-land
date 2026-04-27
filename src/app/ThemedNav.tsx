"use client";

import Link from "next/link";
import { useTheme, TIME_THEMES, WEATHER_EFFECTS } from "./ThemeContext";

export function ThemedNav() {
  const { time, weather, temp } = useTheme();
  const theme = TIME_THEMES[time];
  const weatherInfo = WEATHER_EFFECTS[weather];

  const links = [
    { href: "/", label: "Home" },
    { href: "/island", label: "The Island" },
    { href: "/explore", label: "Explore" },
    { href: "/residents", label: "Residents" },
    { href: "/rules", label: "The Rules" },
    { href: "/founder", label: "The Founder" },
    { href: "/apply", label: "Visit" },
    { href: "/guestbook", label: "Guestbook" },
    { href: "/control-panel", label: "Control Panel" },
    { href: "/admin", label: "Admin" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md transition-all duration-1000"
      style={{
        backgroundColor: theme.navBg,
        borderColor: `${theme.accent}33`,
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-wide transition-colors duration-700"
          style={{ color: theme.textSecondary }}
        >
          La La Land
        </Link>
        <div className="flex items-center gap-6 text-sm">
          {/* Weather/time badge */}
          <span className="hidden sm:inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs opacity-60" style={{ backgroundColor: `${theme.accent}20`, color: theme.textSecondary }}>
            {theme.icon} {weatherInfo.icon} {temp}&deg;F
          </span>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors duration-300 hover:opacity-100 opacity-70"
              style={{ color: theme.textPrimary }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
