import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La La Land - Valencia's Fantasy Island",
  description: "A tropical fantasy island ruled by Valencia. Democracy with a hint of tyranny. Guests go home by 5 PM.",
};

function Nav() {
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
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-purple-glow/20 bg-[#0c0618]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-wide text-sunset-pink">
          La La Land
        </Link>
        <div className="flex gap-6 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/70 transition-colors hover:text-sunset-pink"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Nav />
        <main className="flex-1 pt-16">{children}</main>
        <footer className="border-t border-purple-glow/20 bg-[#0c0618]/90 px-6 py-8 text-center text-sm text-foreground/40">
          <p>La La Land &mdash; Property of Valencia. All rights reserved. Permanently.</p>
          <p className="mt-1">Temperature: a perfect 80-85&deg;F, always.</p>
        </footer>
      </body>
    </html>
  );
}
