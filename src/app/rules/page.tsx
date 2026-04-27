export default function RulesPage() {
  const rules = [
    {
      number: 1,
      title: "Valencia Is In Charge",
      description:
        "Of everything. All of it. The beaches, the volcano, the wolves, the vibes, the weather, the water, the rules themselves. This is a democracy with a hint of tyranny. Think of it as a benevolent dictatorship. She listens. She considers. Then she does what she was going to do anyway.",
      icon: "👑",
    },
    {
      number: 2,
      title: "Be Respectful",
      description:
        "This should not need to be a rule, but here we are. Respect the island. Respect the residents. Respect the wolves. Respect Valencia. If you can't manage basic respect, the ocean is right there - feel free to swim home.",
      icon: "🤝",
    },
    {
      number: 3,
      title: "Clean Up After Yourself",
      description:
        "La La Land is a pristine fantasy paradise and it's going to stay that way. You made a mess? Clean it up. Valencia is not your mother. The wolves are not your cleaning crew. Pick up your stuff.",
      icon: "🧹",
    },
    {
      number: 4,
      title: "Go Home by 5:00 PM",
      description:
        "And by \"home\" we mean YOUR home. Not La La Land. La La Land is not your home. It's Valencia's home. At 5:00 PM, you leave. The glowing ocean at night? That's for residents only. Don't make it weird.",
      icon: "🕐",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0c0618] px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <h1 className="glow-text mb-4 text-5xl font-bold text-white">
            The Rules
          </h1>
          <p className="text-lg text-foreground/60">
            Official bylaws of La La Land. Non-negotiable.
          </p>
          <p className="mt-2 text-sm text-sunset-pink/60">
            You were warned. Don&apos;t act surprised later.
          </p>
        </div>

        {/* Official decree header */}
        <div className="mb-10 rounded-xl border border-sunset-orange/30 bg-gradient-to-r from-purple-glow/10 to-sunset-orange/10 p-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sunset-orange/70">
            By official decree of
          </p>
          <p className="mt-1 text-2xl font-bold text-white">
            Valencia, Supreme Ruler of La La Land
          </p>
          <p className="mt-1 text-sm text-foreground/40">
            Benevolent Dictator &bull; Island Owner &bull; Head Chef &bull; Final Word
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {rules.map((rule) => (
            <div
              key={rule.number}
              className="bg-card rounded-2xl p-8 transition-all hover:border-purple-glow/50"
              style={{
                borderLeft: "4px solid rgba(124, 58, 237, 0.6)",
              }}
            >
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-3xl">{rule.icon}</span>
                  <span className="text-xs font-bold text-purple-glow/60">
                    #{rule.number}
                  </span>
                </div>
                <div className="flex-1">
                  <h2 className="mb-3 text-xl font-bold text-sunset-pink">
                    {rule.title}
                  </h2>
                  <p className="text-base leading-relaxed text-foreground/70">
                    {rule.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fine print */}
        <div className="mt-12 text-center">
          <p className="text-xs text-foreground/30">
            These rules are subject to change at any time by Valencia and only Valencia.
            <br />
            Complaints can be filed directly into the volcano.
          </p>
        </div>
      </div>
    </div>
  );
}
