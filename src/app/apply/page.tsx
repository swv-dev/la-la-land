"use client";

import { useState, useEffect } from "react";

interface Application {
  id: string;
  name: string;
  email: string;
  relationship: string;
  reason: string;
  history: string;
  timestamp: string;
  status: "pending" | "approved" | "denied";
  response?: string;
}

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    relationship: "",
    reason: "",
    history: "",
    acknowledge5pm: false,
    acknowledgeRules: false,
    acknowledgeValencia: false,
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Save application to localStorage
    const application: Application = {
      id: Date.now().toString(),
      name: form.name,
      email: form.email,
      relationship: form.relationship,
      reason: form.reason,
      history: form.history,
      timestamp: new Date().toISOString(),
      status: "pending",
    };

    const existing = JSON.parse(localStorage.getItem("lalaland-applications") || "[]");
    existing.unshift(application);
    localStorage.setItem("lalaland-applications", JSON.stringify(existing));

    // Open email notification to Valencia
    const subject = encodeURIComponent(`La La Land Application: ${form.name}`);
    const body = encodeURIComponent(
      `NEW VISITOR APPLICATION\n` +
      `========================\n\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Relationship: ${form.relationship}\n\n` +
      `Why they want to visit:\n${form.reason}\n\n` +
      `Full history:\n${form.history}\n\n` +
      `Submitted: ${new Date().toLocaleString()}\n\n` +
      `---\n` +
      `Review this application at: http://localhost:3000/admin`
    );
    window.open(`mailto:vyfrick92@gmail.com?subject=${subject}&body=${body}`, "_self");

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#0c0618] px-6 text-center">
        <div className="animate-pulse-glow rounded-full bg-purple-glow/20 p-8">
          <span className="text-6xl">📨</span>
        </div>
        <h2 className="mt-6 text-2xl font-bold text-white">
          Application Submitted
        </h2>
        <p className="mt-4 max-w-md text-foreground/60">
          Your application has been sent directly to Valencia for personal review.
          She will read every word. She will judge accordingly.
        </p>
        <p className="mt-2 text-sm text-sunset-pink/50">
          You&apos;ll receive a response at the email you provided. If Valencia feels like it.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", email: "", relationship: "", reason: "", history: "", acknowledge5pm: false, acknowledgeRules: false, acknowledgeValencia: false });
          }}
          className="mt-8 text-sm text-sunset-pink/60 underline hover:text-sunset-pink"
        >
          Submit another application (bold move)
        </button>
        <p className="mt-6 text-xs text-foreground/25">
          Average review time: whenever Valencia gets around to it.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0c0618] px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <h1 className="glow-text mb-4 text-5xl font-bold text-white">
            Visitor Application
          </h1>
          <p className="text-lg text-foreground/60">
            You want to come to La La Land? Fill this out. Completely.
          </p>
          <p className="mt-2 text-sm text-sunset-pink/50">
            Incomplete applications will be ignored and possibly mocked.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Name */}
          <div className="bg-card rounded-2xl p-6">
            <label className="mb-2 block text-sm font-semibold text-sunset-pink">
              Full Legal Name *
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your actual name. Don't play."
              className="w-full rounded-lg border border-purple-glow/30 bg-deep-purple/30 px-4 py-3 text-white placeholder:text-foreground/30 focus:border-sunset-pink focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="bg-card rounded-2xl p-6">
            <label className="mb-2 block text-sm font-semibold text-sunset-pink">
              Email Address *
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="So Valencia can respond. If she chooses to."
              className="w-full rounded-lg border border-purple-glow/30 bg-deep-purple/30 px-4 py-3 text-white placeholder:text-foreground/30 focus:border-sunset-pink focus:outline-none"
            />
          </div>

          {/* Relationship */}
          <div className="bg-card rounded-2xl p-6">
            <label className="mb-2 block text-sm font-semibold text-sunset-pink">
              How Do You Know Valencia? *
            </label>
            <select
              required
              value={form.relationship}
              onChange={(e) => setForm({ ...form, relationship: e.target.value })}
              className="w-full rounded-lg border border-purple-glow/30 bg-deep-purple/30 px-4 py-3 text-white focus:border-sunset-pink focus:outline-none"
            >
              <option value="" className="bg-[#1e1035]">Select one...</option>
              <option value="Friend" className="bg-[#1e1035]">Friend</option>
              <option value="Family" className="bg-[#1e1035]">Family</option>
              <option value="Acquaintance" className="bg-[#1e1035]">Acquaintance</option>
              <option value="Stranger (bold move)" className="bg-[#1e1035]">I don&apos;t know her (bold move)</option>
              <option value="We have history..." className="bg-[#1e1035]">We have history... (explain below)</option>
            </select>
          </div>

          {/* Reason for visit */}
          <div className="bg-card rounded-2xl p-6">
            <label className="mb-2 block text-sm font-semibold text-sunset-pink">
              Why Do You Want to Visit La La Land? *
            </label>
            <textarea
              required
              rows={4}
              value={form.reason}
              onChange={(e) => setForm({ ...form, reason: e.target.value })}
              placeholder="Be specific. 'Because it looks cool' is not going to cut it."
              className="w-full rounded-lg border border-purple-glow/30 bg-deep-purple/30 px-4 py-3 text-white placeholder:text-foreground/30 focus:border-sunset-pink focus:outline-none"
            />
          </div>

          {/* Full history */}
          <div className="bg-card rounded-2xl p-6">
            <label className="mb-2 block text-sm font-semibold text-sunset-pink">
              Full History - Especially If Valencia Doesn&apos;t Know You *
            </label>
            <textarea
              required
              rows={5}
              value={form.history}
              onChange={(e) => setForm({ ...form, history: e.target.value })}
              placeholder="Who are you? Where are you from? What's your deal? If Valencia has never heard of you, you better make this good."
              className="w-full rounded-lg border border-purple-glow/30 bg-deep-purple/30 px-4 py-3 text-white placeholder:text-foreground/30 focus:border-sunset-pink focus:outline-none"
            />
          </div>

          {/* Acknowledgements */}
          <div className="bg-card rounded-2xl p-6">
            <p className="mb-4 text-sm font-semibold text-sunset-pink">
              Required Acknowledgements *
            </p>
            <div className="flex flex-col gap-3">
              <label className="flex items-start gap-3 text-sm text-foreground/70">
                <input
                  type="checkbox"
                  required
                  checked={form.acknowledge5pm}
                  onChange={(e) => setForm({ ...form, acknowledge5pm: e.target.checked })}
                  className="mt-1 accent-purple-600"
                />
                I understand I must leave La La Land by 5:00 PM. No exceptions. No &quot;just five more minutes.&quot;
              </label>
              <label className="flex items-start gap-3 text-sm text-foreground/70">
                <input
                  type="checkbox"
                  required
                  checked={form.acknowledgeRules}
                  onChange={(e) => setForm({ ...form, acknowledgeRules: e.target.checked })}
                  className="mt-1 accent-purple-600"
                />
                I have read The Rules and I will follow every single one of them.
              </label>
              <label className="flex items-start gap-3 text-sm text-foreground/70">
                <input
                  type="checkbox"
                  required
                  checked={form.acknowledgeValencia}
                  onChange={(e) => setForm({ ...form, acknowledgeValencia: e.target.checked })}
                  className="mt-1 accent-purple-600"
                />
                I acknowledge that Valencia is in charge of everything and her word is final.
              </label>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="animate-pulse-glow rounded-full bg-purple-glow px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-purple-glow/80"
          >
            Submit Application for Review
          </button>
        </form>

        {/* Fine Print */}
        <div className="mt-12 rounded-xl border border-foreground/10 bg-deep-purple/10 p-6">
          <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-foreground/30">
            Fine Print
          </h3>
          <div className="space-y-2 text-xs leading-relaxed text-foreground/25">
            <p>
              By submitting this application, you acknowledge that Valencia reserves the absolute
              and unconditional right to deny any application for any reason, including but not
              limited to: (a) you pissed her off at some point and have not apologized,
              (b) she simply does not want you on her island, (c) your vibe is wrong,
              (d) the wolves don&apos;t like you, (e) Sasha said no, (f) YAS got mad reading
              your application, (g) James did a background check, (h) no reason at all
              because she doesn&apos;t owe you one.
            </p>
            <p>
              Approval of this application does not constitute a permanent invitation. Visitor
              status may be revoked at any time, for any reason, without notice, explanation,
              or refund (there is no refund because there is no charge because you should be
              grateful you were even considered).
            </p>
            <p>
              All visitors must vacate La La Land premises by 5:00 PM local island time.
              &quot;Local island time&quot; is whatever time Valencia says it is. Failure to comply
              will result in permanent ban and/or dragon escort off the island.
            </p>
            <p>
              La La Land is not responsible for: hurt feelings, wounded egos, encounters with
              the wolves, encounters with the dragons, sunburn, waterfall splash damage, volcanic
              ash, or any emotional distress caused by Sasha&apos;s honesty, YAS&apos;s outbursts,
              or James&apos;s energy.
            </p>
            <p>
              Denied applicants may appeal by filing their complaint directly into the volcano.
              Response time: never.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
