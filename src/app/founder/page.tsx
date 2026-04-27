export default function FounderPage() {
  return (
    <div className="min-h-screen bg-[#0c0618] px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-purple-glow to-sunset-pink text-6xl shadow-lg shadow-purple-glow/30">
            👑
          </div>
          <h1 className="glow-text mb-2 text-5xl font-bold text-white">
            Valencia
          </h1>
          <p className="text-lg text-sunset-pink">
            Founder, Ruler, and Sole Owner of La La Land
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {/* Bio */}
          <div className="bg-card rounded-2xl p-8">
            <h2 className="mb-4 text-2xl font-bold text-sunset-pink">
              About the Founder
            </h2>
            <p className="mb-4 text-base leading-relaxed text-foreground/70">
              Valencia is the creator, owner, ruler, and reason La La Land exists.
              She built this island because she wanted a place that was entirely
              hers - tropical, luxurious, private, and fantasy in every way. And
              that&apos;s exactly what she got.
            </p>
            <p className="text-base leading-relaxed text-foreground/70">
              She runs the island as a democracy with a hint of dictatorship - she
              listens, she considers your opinion, and then she makes the decision
              she was already going to make. It works. Don&apos;t question it.
            </p>
          </div>

          {/* Titles */}
          <div className="bg-card rounded-2xl p-8">
            <h2 className="mb-4 text-2xl font-bold text-sunset-pink">
              Official Titles
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Supreme Ruler of La La Land",
                "Head Chef (no restaurants needed)",
                "Wolf Whisperer",
                "Volcano Supervisor",
                "Sunset Coordinator",
                "Vibe Director",
                "Rule Maker & Enforcer",
                "Personality Manager",
              ].map((title) => (
                <div
                  key={title}
                  className="flex items-center gap-2 rounded-lg bg-deep-purple/30 px-4 py-2.5 text-sm text-foreground/70"
                >
                  <span className="text-sunset-pink">&#10022;</span>
                  {title}
                </div>
              ))}
            </div>
          </div>

          {/* What makes it hers */}
          <div className="bg-card rounded-2xl p-8">
            <h2 className="mb-4 text-2xl font-bold text-sunset-pink">
              What Makes La La Land Uniquely Hers?
            </h2>
            <p className="text-3xl font-bold text-white">
              It&apos;s hers.
            </p>
            <p className="mt-3 text-base text-foreground/50">
              That&apos;s it. That&apos;s the answer. It&apos;s her island, her rules,
              her wolves, her volcano, her glowing water, her purple sunsets,
              her waterfalls, her beaches, her kitchen, and her personalities.
              Everything here exists because she wanted it to. What makes it
              uniquely hers is that it&apos;s hers.
            </p>
          </div>

          {/* Fun facts */}
          <div className="bg-card rounded-2xl p-8">
            <h2 className="mb-4 text-2xl font-bold text-sunset-pink">
              Things to Know
            </h2>
            <ul className="flex flex-col gap-3 text-base text-foreground/70">
              <li className="flex gap-3">
                <span className="text-sunset-pink">&#8226;</span>
                She cooks all the food on the island. There are no restaurants and that&apos;s by design.
              </li>
              <li className="flex gap-3">
                <span className="text-sunset-pink">&#8226;</span>
                She manages all six personalities and keeps the island running.
              </li>
              <li className="flex gap-3">
                <span className="text-sunset-pink">&#8226;</span>
                She set the temperature to 80-85&deg;F for the wolves, because she loves them.
              </li>
              <li className="flex gap-3">
                <span className="text-sunset-pink">&#8226;</span>
                She will let you visit. But you&apos;re going home at 5:00 PM.
              </li>
              <li className="flex gap-3">
                <span className="text-sunset-pink">&#8226;</span>
                Complaints go directly into the volcano.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
