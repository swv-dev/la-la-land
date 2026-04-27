"use client";

import { motion } from "framer-motion";
import InteractiveIsland from "@/components/InteractiveIsland";

export default function IslandPage() {
  return (
    <div className="min-h-screen bg-[#0c0618] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="glow-text mb-4 text-5xl font-bold text-white">
            La La Land
          </h1>
          <p className="text-lg text-sunset-pink">
            Valencia&apos;s fantasy island. Click the markers to explore.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <InteractiveIsland />
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-xs text-foreground/30">
            This is not a dream. This is La La Land. And it belongs to Valencia.
          </p>
        </div>
      </div>
    </div>
  );
}
