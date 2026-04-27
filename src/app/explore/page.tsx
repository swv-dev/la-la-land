function Sparkle({ className }: { className?: string }) {
  return (
    <span className={`inline-block animate-twinkle text-lagoon/70 ${className ?? ""}`}>
      &#10022;
    </span>
  );
}

const features = [
  {
    name: "The Beaches",
    emoji: "🏖️",
    description:
      "Soft white sand stretching for miles, kissed by crystal clear water that sparkles under the purple sky. These beaches are private. Because the whole island is private. Because it's Valencia's.",
    color: "text-sunset-orange",
  },
  {
    name: "The Glowing Ocean",
    emoji: "🌊",
    description:
      "The water around La La Land isn't just clear - it glows at night. Sparkly, twinkling, crystal clear ocean that looks like someone scattered diamonds across the waves. It's giving bioluminescent fantasy.",
    color: "text-lagoon",
    sparkles: true,
  },
  {
    name: "The Waterfalls",
    emoji: "💧",
    description:
      "Multiple waterfalls cascade down from the volcanic highlands into hidden lagoons. The mist catches the purple sunset light and creates permanent rainbows. Yes, permanent. It's a fantasy island - things work differently here.",
    color: "text-sunset-pink",
  },
  {
    name: "The Volcano",
    emoji: "🌋",
    description:
      "Majestic and dramatic, the volcano sits at the heart of La La Land. It doesn't erupt (unless Valencia is in a mood). It glows a soft red at night, reminding everyone who really runs things around here.",
    color: "text-volcano-red",
  },
  {
    name: "The Wolves",
    emoji: "🐺",
    description:
      "La La Land's most distinguished residents (besides the actual residents). Beautiful, loyal wolves that roam the island freely. The temperature stays at a comfortable 80-85°F so they're always happy. They're friendly - unless you break the rules.",
    color: "text-purple-glow",
  },
  {
    name: "The Wildlife",
    emoji: "🦋",
    description:
      "Colorful butterflies, dolphins playing in the glowing water, tropical birds with jewel-toned feathers, baby sea turtles on the beach, and fireflies that dance with the stars at night. Nothing creepy. That's a rule.",
    color: "text-sunset-orange",
  },
];

export default function ExplorePage() {
  return (
    <div className="bg-ocean-night min-h-screen px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h1 className="glow-text mb-4 text-5xl font-bold text-white">
            Explore La La Land
          </h1>
          <p className="text-lg text-foreground/60">
            Everything on this island is beautiful. That was a requirement.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="bg-card rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <span className="text-4xl">{feature.emoji}</span>
                <div className="flex-1">
                  <h2 className={`mb-3 text-2xl font-bold ${feature.color}`}>
                    {feature.name}
                  </h2>
                  <p className="text-base leading-relaxed text-foreground/70">
                    {feature.description}
                  </p>
                  {feature.sparkles && (
                    <div className="mt-4 flex gap-4 text-xl">
                      <Sparkle className="[animation-delay:0s]" />
                      <Sparkle className="[animation-delay:0.4s]" />
                      <Sparkle className="[animation-delay:0.8s]" />
                      <Sparkle className="[animation-delay:1.2s]" />
                      <Sparkle className="[animation-delay:0.2s]" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Temperature notice */}
        <div className="mt-16 rounded-2xl border border-sunset-pink/20 bg-deep-purple/30 p-6 text-center">
          <p className="text-sm text-sunset-pink/70">
            Island Temperature: Maintained at a perfect 80-85&deg;F at all times.
            <br />
            The wolves require it. Valencia approves it. Discussion closed.
          </p>
        </div>
      </div>
    </div>
  );
}
