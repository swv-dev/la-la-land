"use client";

import { useState, useEffect, useCallback } from "react";

// --- Auth Helpers ---
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function getStoredHash(): string | null {
  return localStorage.getItem("lalaland-admin-hash");
}

function isLoggedIn(): boolean {
  return sessionStorage.getItem("lalaland-admin-auth") === "true";
}

// --- Login Component ---
function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSetup, setIsSetup] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    setIsSetup(!getStoredHash());
  }, []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (isSetup) {
      if (password.length < 4) {
        setError("Password must be at least 4 characters. Even wolves have standards.");
        return;
      }
      if (password !== confirmPassword) {
        setError("Passwords don't match. Try again, Valencia.");
        return;
      }
      const hash = await hashPassword(password);
      localStorage.setItem("lalaland-admin-hash", hash);
      sessionStorage.setItem("lalaland-admin-auth", "true");
      onLogin();
    } else {
      const hash = await hashPassword(password);
      if (hash === getStoredHash()) {
        sessionStorage.setItem("lalaland-admin-auth", "true");
        onLogin();
      } else {
        setError("Wrong password. The dragons have been alerted.");
      }
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0c0618] px-6">
      <div className="w-full max-w-md rounded-2xl border border-purple-glow/30 bg-deep-purple/20 p-8 backdrop-blur-sm">
        <div className="mb-8 text-center">
          <h1 className="glow-text mb-2 text-4xl font-bold text-white">
            {isSetup ? "Set Your Password" : "Admin Access"}
          </h1>
          <p className="text-sm text-sunset-pink">
            {isSetup
              ? "First time? Create a password to lock this panel down."
              : "Valencia's eyes only. Prove it's you."}
          </p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={isSetup ? "Create a password" : "Enter password"}
            autoFocus
            className="w-full rounded-lg border border-purple-glow/30 bg-[#0c0618] px-4 py-3 text-white placeholder:text-foreground/30 focus:border-sunset-pink focus:outline-none"
          />
          {isSetup && (
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              className="w-full rounded-lg border border-purple-glow/30 bg-[#0c0618] px-4 py-3 text-white placeholder:text-foreground/30 focus:border-sunset-pink focus:outline-none"
            />
          )}

          {error && (
            <p className="text-sm text-volcano-red">{error}</p>
          )}

          <button
            type="submit"
            className="mt-2 rounded-full bg-purple-glow px-6 py-3 font-semibold text-white transition-all hover:bg-purple-glow/80 hover:shadow-lg hover:shadow-purple-glow/30"
          >
            {isSetup ? "Lock It Down" : "Enter"}
          </button>
        </form>

        {!isSetup && (
          <p className="mt-6 text-center text-xs text-foreground/20">
            If you forgot your password, that&apos;s between you and the volcano.
          </p>
        )}
      </div>
    </div>
  );
}

// --- Admin Panel ---
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

const approvalResponses = [
  {
    label: "Standard Approval",
    text: "Your application to visit La La Land has been APPROVED by Valencia. Consider yourself lucky. Remember: be respectful, clean up after yourself, and GO HOME BY 5:00 PM. The wolves will be watching.",
  },
  {
    label: "Warm Welcome",
    text: "Valencia has reviewed your application and has decided to grant you visitor access to La La Land. You must be doing something right. Don't make her regret it. See you on the island.",
  },
  {
    label: "Barely Made It",
    text: "After careful consideration (and a brief argument between Sasha and Robin), your application has been approved. Barely. You're on thin ice, but it's tropical ice, so it melts fast. Don't waste this opportunity.",
  },
  {
    label: "VIP Treatment",
    text: "Congratulations. Valencia has not only approved your application but has granted you VIP status. That means you get to see the waterfalls up close. The dragons have been informed you're cool. For now.",
  },
];

const denialResponses = [
  {
    label: "You Know What You Did",
    text: "Your application has been DENIED. You pissed Valencia off previously and haven't said sorry. You know what you did. When you're ready to apologize properly, you may reapply. Until then, the island doesn't know you.",
  },
  {
    label: "Just Don't Want You Here",
    text: "Your application has been DENIED. Why? Because Valencia just doesn't want you on her island. No further explanation required. No, this is not up for discussion. No, there is no appeals process. Well, there is, but it involves the volcano.",
  },
  {
    label: "Sasha Said No",
    text: "Your application has been reviewed and DENIED. Sasha read your application and said, and I quote, 'Who the fuck is this?' When Sasha says no, it's a no. Try again when you've figured out how to make a better first impression.",
  },
  {
    label: "Wolves Don't Like You",
    text: "DENIED. The wolves reviewed your application. They growled. That's never a good sign. Valencia trusts the wolves' judgment more than most people's resumes. Better luck in your next life.",
  },
  {
    label: "YAS Got Mad",
    text: "Your application has been DENIED because YAS read it and got angry. Now she's sitting in her corner. You did that. You made YAS mad. That's on you. Do better.",
  },
  {
    label: "Boring Application",
    text: "DENIED. Your application was boring. Valencia read it, yawned, and moved on. If you can't even make a visitor application interesting, imagine how boring you'd be on the island. Try again with some personality.",
  },
  {
    label: "5 PM Risk",
    text: "DENIED. You seem like the type who wouldn't leave at 5:00 PM. Valencia can tell. She has a sense for these things. The dragons have been notified of your face just in case.",
  },
  {
    label: "James Did a Background Check",
    text: "DENIED. James did a background check. You didn't pass. No, we won't tell you what he found. No, you can't see the report. James works in silence. Accept the results and move on.",
  },
];

function AdminPanel() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  const [customResponse, setCustomResponse] = useState("");
  const [responseType, setResponseType] = useState<"approve" | "deny" | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("lalaland-applications");
    if (saved) setApplications(JSON.parse(saved));
  }, []);

  function sendResponse(app: Application, response: string, status: "approved" | "denied") {
    const updated = applications.map((a) =>
      a.id === app.id ? { ...a, status, response } : a
    );
    setApplications(updated);
    localStorage.setItem("lalaland-applications", JSON.stringify(updated));

    const statusLabel = status === "approved" ? "APPROVED" : "DENIED";
    const subject = encodeURIComponent(`La La Land Application: ${statusLabel}`);
    const body = encodeURIComponent(
      `Dear ${app.name},\n\n` +
      `${response}\n\n` +
      `---\n` +
      `Valencia\n` +
      `Supreme Ruler of La La Land\n` +
      `(This decision is final. Appeals go directly into the volcano.)`
    );
    window.open(`mailto:${app.email}?subject=${subject}&body=${body}`);

    setSelectedApp(null);
    setResponseType(null);
    setCustomResponse("");
  }

  function deleteApplication(id: string) {
    const updated = applications.filter((a) => a.id !== id);
    setApplications(updated);
    localStorage.setItem("lalaland-applications", JSON.stringify(updated));
  }

  const handleLogout = useCallback(() => {
    sessionStorage.removeItem("lalaland-admin-auth");
    window.location.reload();
  }, []);

  const pending = applications.filter((a) => a.status === "pending");
  const reviewed = applications.filter((a) => a.status !== "pending");

  return (
    <div className="min-h-screen bg-[#0c0618] px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="glow-text mb-4 text-5xl font-bold text-white">
            Admin Panel
          </h1>
          <p className="text-lg text-sunset-pink">
            Valencia&apos;s Eyes Only. Seriously.
          </p>
          <div className="mt-4 flex justify-center gap-6 text-sm">
            <span className="rounded-full bg-sunset-orange/20 px-4 py-1.5 text-sunset-orange">
              {pending.length} Pending
            </span>
            <span className="rounded-full bg-green-500/20 px-4 py-1.5 text-green-400">
              {reviewed.filter((a) => a.status === "approved").length} Approved
            </span>
            <span className="rounded-full bg-volcano-red/20 px-4 py-1.5 text-volcano-red">
              {reviewed.filter((a) => a.status === "denied").length} Denied
            </span>
          </div>
          <button
            onClick={handleLogout}
            className="mt-4 text-xs text-foreground/30 transition-colors hover:text-volcano-red"
          >
            Log Out
          </button>
        </div>

        {/* Response Modal */}
        {selectedApp && responseType && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
            <div className="max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-purple-glow/30 bg-[#0c0618] p-8">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">
                  {responseType === "approve" ? "Approve" : "Deny"} {selectedApp.name}
                </h2>
                <button
                  onClick={() => { setSelectedApp(null); setResponseType(null); }}
                  className="text-foreground/30 hover:text-foreground/60"
                >
                  &times;
                </button>
              </div>

              {/* Pre-written responses */}
              <p className="mb-3 text-sm font-semibold text-sunset-pink">
                Choose a response:
              </p>
              <div className="mb-6 flex flex-col gap-2">
                {(responseType === "approve" ? approvalResponses : denialResponses).map((r) => (
                  <button
                    key={r.label}
                    onClick={() => sendResponse(selectedApp, r.text, responseType === "approve" ? "approved" : "denied")}
                    className="rounded-xl bg-card p-4 text-left transition-all hover:border-purple-glow/50 hover:bg-purple-glow/10"
                  >
                    <span className="text-sm font-semibold text-sunset-pink">{r.label}</span>
                    <p className="mt-1 text-xs text-foreground/50 line-clamp-2">{r.text}</p>
                  </button>
                ))}
              </div>

              {/* Custom response */}
              <p className="mb-3 text-sm font-semibold text-sunset-pink">
                Or write your own:
              </p>
              <textarea
                rows={4}
                value={customResponse}
                onChange={(e) => setCustomResponse(e.target.value)}
                placeholder="Tell them exactly how you feel..."
                className="mb-3 w-full rounded-lg border border-purple-glow/30 bg-deep-purple/30 px-4 py-3 text-white placeholder:text-foreground/30 focus:border-sunset-pink focus:outline-none"
              />
              <button
                onClick={() => {
                  if (customResponse.trim()) {
                    sendResponse(selectedApp, customResponse, responseType === "approve" ? "approved" : "denied");
                  }
                }}
                disabled={!customResponse.trim()}
                className="rounded-full bg-purple-glow px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-purple-glow/80 disabled:opacity-30"
              >
                Send Custom Response
              </button>
            </div>
          </div>
        )}

        {/* Pending Applications */}
        {pending.length > 0 && (
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-sunset-orange">
              Pending Review
            </h2>
            <div className="flex flex-col gap-4">
              {pending.map((app) => (
                <div key={app.id} className="bg-card rounded-2xl p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white">{app.name}</h3>
                      <p className="text-xs text-foreground/40">
                        {app.email} &bull; {app.relationship} &bull;{" "}
                        {new Date(app.timestamp).toLocaleDateString("en-US", {
                          month: "short", day: "numeric", hour: "numeric", minute: "2-digit",
                        })}
                      </p>
                    </div>
                    <span className="rounded-full bg-sunset-orange/20 px-3 py-1 text-xs text-sunset-orange">
                      Pending
                    </span>
                  </div>

                  <div className="mb-2">
                    <p className="text-xs font-semibold text-foreground/40">Why they want to visit:</p>
                    <p className="mt-1 text-sm text-foreground/70">{app.reason}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-foreground/40">Full history:</p>
                    <p className="mt-1 text-sm text-foreground/70">{app.history}</p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => { setSelectedApp(app); setResponseType("approve"); }}
                      className="rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-white hover:bg-green-500"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => { setSelectedApp(app); setResponseType("deny"); }}
                      className="rounded-full bg-volcano-red px-5 py-2 text-sm font-semibold text-white hover:bg-red-500"
                    >
                      Deny
                    </button>
                    <button
                      onClick={() => deleteApplication(app.id)}
                      className="ml-auto text-xs text-foreground/20 hover:text-volcano-red"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty state */}
        {pending.length === 0 && reviewed.length === 0 && (
          <div className="py-20 text-center">
            <span className="text-6xl">📭</span>
            <p className="mt-4 text-lg text-foreground/40">No applications yet.</p>
            <p className="text-sm text-foreground/25">They&apos;ll come. Everybody wants to visit La La Land.</p>
          </div>
        )}

        {/* Reviewed Applications */}
        {reviewed.length > 0 && (
          <div>
            <h2 className="mb-6 text-2xl font-bold text-foreground/40">
              Reviewed
            </h2>
            <div className="flex flex-col gap-3">
              {reviewed.map((app) => (
                <div key={app.id} className="group bg-card rounded-xl p-5 opacity-70">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-white">{app.name}</span>
                      <span className="ml-2 text-xs text-foreground/30">{app.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs ${
                          app.status === "approved"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-volcano-red/20 text-volcano-red"
                        }`}
                      >
                        {app.status === "approved" ? "Approved" : "Denied"}
                      </span>
                      <button
                        onClick={() => deleteApplication(app.id)}
                        className="text-xs text-foreground/20 opacity-0 hover:text-volcano-red group-hover:opacity-100"
                      >
                        delete
                      </button>
                    </div>
                  </div>
                  {app.response && (
                    <p className="mt-2 text-xs text-foreground/40 italic line-clamp-1">
                      &quot;{app.response}&quot;
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 text-center text-xs text-foreground/20">
          This panel is for Valencia only. If you are not Valencia, leave now.
          The dragons know you&apos;re here.
        </div>
      </div>
    </div>
  );
}

// --- Main Page (Auth Gate) ---
export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setAuthenticated(isLoggedIn());
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0c0618]">
        <p className="text-foreground/30 animate-pulse">Checking credentials...</p>
      </div>
    );
  }

  if (!authenticated) {
    return <AdminLogin onLogin={() => setAuthenticated(true)} />;
  }

  return <AdminPanel />;
}
