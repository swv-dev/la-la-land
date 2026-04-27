import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./ThemeContext";
import { ThemedNav } from "./ThemedNav";
import { ThemedFooter } from "./ThemedFooter";
import { WeatherOverlay } from "./WeatherOverlay";
import { MusicPlayer } from "./MusicPlayer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La La Land - Valencia's Fantasy Island",
  description: "A tropical fantasy island ruled by Valencia. Democracy with a hint of tyranny. Guests go home by 5 PM.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans transition-colors duration-1000">
        <ThemeProvider>
          <WeatherOverlay />
          <ThemedNav />
          <main className="flex-1 pt-16">{children}</main>
          <ThemedFooter />
          <MusicPlayer />
        </ThemeProvider>
      </body>
    </html>
  );
}
