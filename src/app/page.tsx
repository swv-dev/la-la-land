"use client";

import Link from "next/link";
import { motion } from "framer-motion";

function Sparkle({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.span
      className={`inline-block text-lagoon/60 ${className ?? ""}`}
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 2, repeat: Infinity, delay }}
    >
      &#10022;
    </motion.span>
  );
}

/* ── SVG Wave Divider ────────────────────── */
function WaveDivider() {
  return (
    <svg viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <motion.path
        d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,40 1440,60 L1440,120 L0,120 Z"
        fill="url(#wave-grad)"
        animate={{
          d: [
            "M0,60 C360,120 720,0 1080,60 C1260,90 1380,40 1440,60 L1440,120 L0,120 Z",
            "M0,80 C360,20 720,100 1080,40 C1260,60 1380,80 1440,50 L1440,120 L0,120 Z",
            "M0,60 C360,120 720,0 1080,60 C1260,90 1380,40 1440,60 L1440,120 L0,120 Z",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

/* ── SVG Feature Icons ───────────────────── */
function WaterIcon() {
  return (
    <svg viewBox="0 0 80 80" className="h-16 w-16">
      <defs>
        <linearGradient id="water-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <motion.path
        d="M10,45 Q25,30 40,45 Q55,60 70,45"
        stroke="url(#water-g)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        animate={{ d: ["M10,45 Q25,30 40,45 Q55,60 70,45", "M10,45 Q25,55 40,45 Q55,35 70,45", "M10,45 Q25,30 40,45 Q55,60 70,45"] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.path
        d="M10,55 Q25,40 40,55 Q55,70 70,55"
        stroke="url(#water-g)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
        animate={{ d: ["M10,55 Q25,40 40,55 Q55,70 70,55", "M10,55 Q25,65 40,55 Q55,45 70,55", "M10,55 Q25,40 40,55 Q55,70 70,55"] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      />
      <motion.circle
        cx="40"
        cy="25"
        r="3"
        fill="#67e8f9"
        animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  );
}

function WolfIcon() {
  return (
    <svg viewBox="0 0 80 80" className="h-16 w-16">
      <defs>
        <linearGradient id="wolf-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9ca3af" />
          <stop offset="100%" stopColor="#d1d5db" />
        </linearGradient>
      </defs>
      {/* Head */}
      <ellipse cx="40" cy="45" rx="18" ry="20" fill="url(#wolf-g)" />
      {/* Ears */}
      <polygon points="25,30 20,12 33,28" fill="#9ca3af" />
      <polygon points="55,30 60,12 47,28" fill="#9ca3af" />
      <polygon points="27,28 23,16 32,27" fill="#c084fc" opacity="0.4" />
      <polygon points="53,28 57,16 48,27" fill="#c084fc" opacity="0.4" />
      {/* Eyes */}
      <motion.ellipse
        cx="33"
        cy="42"
        rx="3"
        ry="2.5"
        fill="#f59e0b"
        animate={{ ry: [2.5, 1, 2.5] }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.ellipse
        cx="47"
        cy="42"
        rx="3"
        ry="2.5"
        fill="#f59e0b"
        animate={{ ry: [2.5, 1, 2.5] }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
      />
      {/* Nose */}
      <ellipse cx="40" cy="52" rx="4" ry="3" fill="#374151" />
      {/* Snout */}
      <path d="M36,55 Q40,60 44,55" stroke="#6b7280" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function VolcanoIcon() {
  return (
    <svg viewBox="0 0 80 80" className="h-16 w-16">
      <defs>
        <linearGradient id="volcano-g" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#4a3728" />
        </linearGradient>
      </defs>
      {/* Mountain */}
      <polygon points="40,15 10,70 70,70" fill="url(#volcano-g)" />
      {/* Snow/ash cap */}
      <polygon points="40,15 32,30 48,30" fill="#6b7280" opacity="0.5" />
      {/* Lava glow */}
      <motion.ellipse
        cx="40"
        cy="20"
        rx="6"
        ry="4"
        fill="#ef4444"
        animate={{
          opacity: [0.5, 1, 0.5],
          ry: [4, 6, 4],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      {/* Eruption particles */}
      <motion.circle
        cx="38"
        cy="10"
        r="2"
        fill="#f59e0b"
        animate={{ y: [-5, -15], opacity: [1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.circle
        cx="43"
        cy="8"
        r="1.5"
        fill="#ef4444"
        animate={{ y: [-3, -18], opacity: [1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Purple Sunset Sky */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-sunset text-center">
        <div className="stars absolute inset-0 opacity-40" />

        <div className="relative z-10 px-6">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 text-lg tracking-widest text-sunset-pink/80 uppercase"
          >
            Welcome to
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="glow-text mb-6 text-7xl font-bold tracking-tight text-white sm:text-8xl"
          >
            La La Land
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mx-auto mb-2 max-w-xl text-xl text-white/80"
          >
            A tropical fantasy island of luxury, wolves, and waterfalls.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mx-auto mb-10 max-w-md text-lg text-sunset-pink/70"
          >
            Ruled by Valencia. Population: her and her personalities.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              href="/island"
              className="animate-pulse-glow rounded-full bg-purple-glow px-8 py-3 font-semibold text-white transition-all hover:bg-purple-glow/80"
            >
              Explore the Island
            </Link>
            <Link
              href="/rules"
              className="rounded-full border border-sunset-pink/40 px-8 py-3 font-semibold text-sunset-pink transition-all hover:bg-sunset-pink/10"
            >
              Read the Rules
            </Link>
          </motion.div>
        </div>

        {/* Animated wave + sparkles at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="flex justify-center gap-8 pb-2 text-2xl">
            {[0, 0.3, 0.6, 0.9, 1.2, 0.15, 0.75].map((delay, i) => (
              <Sparkle key={i} delay={delay} />
            ))}
          </div>
          <WaveDivider />
        </div>
      </section>

      {/* Quick Intro Section */}
      <section className="bg-ocean-night px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glow-text mb-8 text-4xl font-bold text-white"
          >
            This Island is Mine.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-foreground/70"
          >
            La La Land is a fantasy island paradise where the water glows at night,
            wolves roam free, dragons guard the skies, and the sunset is always purple.
            It&apos;s tropical, it&apos;s luxurious, it&apos;s private, and it belongs to Valencia.
            If you&apos;re here, you were invited. Act accordingly.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
            className="mt-12 grid gap-6 sm:grid-cols-3"
          >
            {[
              {
                icon: <WaterIcon />,
                title: "Crystal Waters",
                desc: "Glowing, sparkling, crystal clear ocean that twinkles at night",
              },
              {
                icon: <WolfIcon />,
                title: "Wolf Territory",
                desc: "Beautiful wolves in a comfortable 80-85\u00B0F tropical climate",
              },
              {
                icon: <VolcanoIcon />,
                title: "The Volcano",
                desc: "Dramatic, majestic, and a reminder that this island has power",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(124, 58, 237, 0.3)" }}
                className="bg-card rounded-2xl p-6"
              >
                <div className="mb-3 flex justify-center">{card.icon}</div>
                <h3 className="mb-2 font-semibold text-sunset-pink">{card.title}</h3>
                <p className="text-sm text-foreground/60">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
