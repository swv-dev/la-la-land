"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HoverCard } from "@/components/PageTransition";

interface Resident {
  name: string;
  title: string;
  description: string;
  color: string;
  accent: string;
  portrait: string;
}

const residents: Resident[] = [
  {
    name: "Valencia",
    title: "The Founder. The Ruler. The Whole Package.",
    description:
      "If you mix Sasha and Robin together, you kind of get Valencia. She's the balance between taking no nonsense and keeping things calm. She runs La La Land, she cooks all the meals (no restaurants needed, thank you), and she makes every single decision. She's the reason this island exists.",
    color: "from-purple-glow to-sunset-pink",
    accent: "text-sunset-pink",
    portrait: "/portraits/valencia.png",
  },
  {
    name: "Sasha",
    title: "The One Who Takes No Shit",
    description:
      "Her attitude is basically, \"Who the fuck are you talking to?\" Sasha doesn't have time for nonsense, disrespect, or people who don't know their place. If someone steps out of line on La La Land, Sasha is the first one they'll hear from. And probably the last, because the conversation will be over.",
    color: "from-volcano-red to-sunset-orange",
    accent: "text-sunset-orange",
    portrait: "/portraits/sasha.png",
  },
  {
    name: "Robin",
    title: "The Calm One",
    description:
      "Robin is the voice of reason. When things get heated, Robin steps in with logic, patience, and a level head. She's the one who actually listens, considers all sides, and then calmly explains why Valencia's decision was right all along.",
    color: "from-ocean-glow to-lagoon",
    accent: "text-lagoon",
    portrait: "/portraits/robin.png",
  },
  {
    name: "Envy",
    title: "The Laid-Back One",
    description:
      "Whatever. Envy's whole vibe is just... whatever. Not in a rude way - in a \"life is chill and I'm not stressing about anything\" way. She's probably on the beach right now. Or not. Whatever.",
    color: "from-green-500 to-emerald-400",
    accent: "text-emerald-400",
    portrait: "/portraits/envy.png",
  },
  {
    name: "James",
    title: "Straight Gangster",
    description:
      "Don't mind his name. James is straight gangster and also Valencia's personal driver. In her head. He handles transportation around La La Land and carries himself with an energy that says \"I'm not the one to test.\" He drives, he protects, he keeps it real.",
    color: "from-zinc-400 to-zinc-300",
    accent: "text-zinc-300",
    portrait: "/portraits/james.png",
  },
  {
    name: "YAS",
    title: "The Angry One (She's Fine Though)",
    description:
      "YAS gets a little angry sometimes. Okay, maybe more than a little. But she's just a little special, and that's perfectly okay. When YAS starts going off, you just have to sit her in a corner or something. She'll be fine. She's always fine. Just... give her a minute.",
    color: "from-volcano-red to-orange-500",
    accent: "text-orange-400",
    portrait: "/portraits/yas.png",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ResidentsPage() {
  return (
    <div className="min-h-screen bg-[#0c0618] px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="glow-text mb-4 text-5xl font-bold text-white">
            The Residents
          </h1>
          <p className="text-lg text-foreground/60">
            Meet the personalities of La La Land. You&apos;re being warned now
            so you can&apos;t act surprised later.
          </p>
          <p className="mt-2 text-sm text-sunset-pink/50">
            Because apparently people don&apos;t understand the first time you tell them.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-8"
        >
          {residents.map((resident, i) => (
            <motion.div key={resident.name} variants={itemVariants}>
              <HoverCard className="group relative overflow-hidden rounded-2xl bg-card p-8">
                {/* Gradient accent bar */}
                <div
                  className={`absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b ${resident.color}`}
                />

                <div className="flex items-start gap-6 pl-4">
                  {/* Portrait */}
                  <motion.div
                    className="shrink-0 overflow-hidden rounded-2xl border-2 border-purple-glow/30 shadow-lg shadow-purple-glow/20"
                    whileHover={{ scale: 1.05, borderColor: "rgba(192, 132, 252, 0.6)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src={resident.portrait}
                      alt={`${resident.name} - ${resident.title}`}
                      width={160}
                      height={213}
                      className="h-[213px] w-[160px] object-cover object-top"
                    />
                  </motion.div>

                  <div className="flex-1">
                    <h2 className="mb-1 text-2xl font-bold text-white">
                      {resident.name}
                    </h2>
                    <p className={`mb-3 text-sm font-semibold ${resident.accent}`}>
                      {resident.title}
                    </p>
                    <p className="text-base leading-relaxed text-foreground/70">
                      {resident.description}
                    </p>
                  </div>
                </div>

                {/* Resident number */}
                <div className="absolute right-6 top-6 text-6xl font-black text-white/[0.03]">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </HoverCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-12 rounded-xl border border-purple-glow/20 bg-deep-purple/20 p-6 text-center"
        >
          <p className="text-sm text-foreground/50">
            You have now been formally introduced. If any of the above surprises
            you later, that&apos;s a you problem. You were told.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
