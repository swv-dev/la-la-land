"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Hotspot {
  id: string;
  name: string;
  emoji: string;
  description: string;
  x: number;
  y: number;
}

const hotspots: Hotspot[] = [
  {
    id: "volcano",
    name: "The Volcano",
    emoji: "🌋",
    description: "The heart of La La Land. Glows red at night. Also where complaints go.",
    x: 52,
    y: 22,
  },
  {
    id: "drogon",
    name: "Drogon",
    emoji: "🐉",
    description: "The largest and most fearsome. Named after Khal Drogo. Guardian of the western highlands. Loyal to Valencia. Will escort uninvited guests off the island.",
    x: 32,
    y: 25,
  },
  {
    id: "viserion",
    name: "Viserion",
    emoji: "🐉",
    description: "Guardian of the eastern skies. Matches the purple sunset. That was on purpose.",
    x: 72,
    y: 18,
  },
  {
    id: "rhaegal",
    name: "Rhaegal",
    emoji: "🐉",
    description: "The fiery one. YAS's favorite. They have a lot in common. Named after Rhaegar Targaryen.",
    x: 15,
    y: 55,
  },
  {
    id: "wolves",
    name: "The Wolf Pack",
    emoji: "🐺",
    description: "Beautiful, loyal, and living their best life at 80-85 degrees. Don't approach without permission.",
    x: 70,
    y: 75,
  },
  {
    id: "villa",
    name: "Valencia's Villa",
    emoji: "🏠",
    description: "The luxury villa. Valencia's home. You are NOT invited inside. Don't even look at it too long.",
    x: 50,
    y: 38,
  },
  {
    id: "waterfalls",
    name: "The Waterfalls",
    emoji: "💧",
    description: "Cascading from the volcanic highlands. The mist creates permanent rainbows. Yes, permanent.",
    x: 78,
    y: 45,
  },
  {
    id: "beach",
    name: "The Main Beach",
    emoji: "🏖️",
    description: "White sand, crystal clear water. Private. Because the whole island is private.",
    x: 55,
    y: 78,
  },
  {
    id: "glowing-water",
    name: "The Glowing Ocean",
    emoji: "✨",
    description: "Bioluminescent, crystal clear, sparkling at night like scattered diamonds. Residents only after dark.",
    x: 25,
    y: 85,
  },
  {
    id: "rainbow-bridge",
    name: "The Rainbow Bridge",
    emoji: "🌉",
    description: "The only way on or off the island. Iridescent and magical. Closes at 5:00 PM for visitors.",
    x: 90,
    y: 50,
  },
];

export default function InteractiveIsland() {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);

  return (
    <div className="relative">
      {/* The Island Image with parallax hover */}
      <motion.div
        className="relative overflow-hidden rounded-3xl border border-purple-glow/30"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Image
          src="/island.png"
          alt="La La Land - Interactive Map"
          width={1920}
          height={1080}
          className="h-auto w-full"
          priority
        />

        {/* Hotspots */}
        {hotspots.map((spot) => {
          const isActive = activeHotspot?.id === spot.id;
          return (
            <button
              key={spot.id}
              onClick={() =>
                setActiveHotspot(isActive ? null : spot)
              }
              className="absolute z-10 flex items-center justify-center"
              style={{
                left: `${spot.x}%`,
                top: `${spot.y}%`,
                transform: "translate(-50%, -50%)",
              }}
              title={spot.name}
            >
              {/* Outer ring */}
              <motion.span
                className={`absolute h-10 w-10 rounded-full border-2 ${
                  isActive
                    ? "border-sunset-pink"
                    : "border-purple-glow/60"
                }`}
                animate={{
                  scale: isActive ? [1, 1.4, 1] : [1, 1.3, 1],
                  opacity: isActive ? [0.8, 0, 0.8] : [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Inner dot */}
              <motion.span
                className={`relative z-20 flex h-8 w-8 items-center justify-center rounded-full shadow-lg ${
                  isActive
                    ? "bg-sunset-pink/90 shadow-sunset-pink/50"
                    : "bg-purple-glow/70 shadow-purple-glow/40 hover:bg-purple-glow/90"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <span className="text-sm">{spot.emoji}</span>
              </motion.span>
            </button>
          );
        })}
      </motion.div>

      {/* Info Panel with AnimatePresence */}
      <AnimatePresence mode="wait">
        {activeHotspot ? (
          <motion.div
            key={activeHotspot.id}
            className="mt-6 bg-card rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="flex items-start gap-4">
              <span className="text-4xl">{activeHotspot.emoji}</span>
              <div>
                <h3 className="text-xl font-bold text-sunset-pink">
                  {activeHotspot.name}
                </h3>
                <p className="mt-2 text-foreground/70">
                  {activeHotspot.description}
                </p>
              </div>
              <button
                onClick={() => setActiveHotspot(null)}
                className="ml-auto text-foreground/30 hover:text-foreground/60 transition-colors"
              >
                &times;
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.p
            key="instructions"
            className="mt-4 text-center text-sm text-foreground/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            Click on the glowing spots to explore La La Land
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
