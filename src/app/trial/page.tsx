"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Check, Dumbbell, Users, Calendar } from "lucide-react";

const goals = ["Lose Weight", "Build Muscle", "Improve Fitness", "Reduce Stress", "Sports Performance", "General Health"];

export default function TrialPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", goals: [] as string[], date: "", time: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const toggleGoal = (g: string) => {
    setForm(p => ({ ...p, goals: p.goals.includes(g) ? p.goals.filter(x => x !== g) : [...p.goals, g] }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 2000));
    setLoading(false);
    setDone(true);
  };

  if (done) {
    return (
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
        <div style={{ textAlign: "center", maxWidth: 400 }}>
          <div style={{ width: 80, height: 80, borderRadius: "50%", background: "rgba(34,197,94,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
            <Check size={40} color="#22C55E" />
          </div>
          <h1 className="heading-font" style={{ fontSize: 36, color: "white", marginBottom: 16 }}>You&apos;re In!</h1>
          <p style={{ color: "#6B7280", marginBottom: 32 }}>We&apos;ll contact you within 24 hours to confirm your visit.</p>
          <Link href="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 32 }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 50, padding: "8px 16px", marginBottom: 24 }}>
            <span style={{ color: "#22C55E", fontSize: 14 }}>7-Day Free Trial • No Card Required</span>
          </div>
          <h1 className="heading-font" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "white", marginBottom: 16 }}>
            START YOUR
            <br />
            <span className="text-gradient">FREE TRIAL</span>
          </h1>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ paddingBottom: 48 }}>
        <div className="container">
          <div className="grid-3" style={{ maxWidth: 600, margin: "0 auto" }}>
            {[
              { icon: Dumbbell, text: "Full Access" },
              { icon: Users, text: "All Classes" },
              { icon: Calendar, text: "1 PT Session" },
            ].map((item) => (
              <div key={item.text} className="card" style={{ padding: 16, textAlign: "center" }}>
                <item.icon size={24} color="#EF4444" style={{ marginBottom: 8 }} />
                <p style={{ color: "#6B7280", fontSize: 14 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress */}
      <section style={{ paddingBottom: 32 }}>
        <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16 }}>
          {[1, 2, 3].map((s, i) => (
            <div key={s} style={{ display: "flex", alignItems: "center" }}>
              <div style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
                fontSize: 14,
                background: step >= s ? "#EF4444" : "#111",
                color: step >= s ? "white" : "#6B7280",
                border: step >= s ? "none" : "1px solid #222",
              }}>
                {step > s ? <Check size={18} /> : s}
              </div>
              {i < 2 && <div style={{ width: 48, height: 2, marginLeft: 16, background: step > s ? "#EF4444" : "#222" }} />}
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 500 }}>
          {step === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <h2 className="heading-font" style={{ fontSize: 24, color: "white", textAlign: "center", marginBottom: 16 }}>Tell us about yourself</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <input type="text" placeholder="First Name" value={form.firstName} onChange={e => setForm(p => ({ ...p, firstName: e.target.value }))} style={{ padding: 16, background: "#111", border: "1px solid #222", borderRadius: 12, color: "white" }} />
                <input type="text" placeholder="Last Name" value={form.lastName} onChange={e => setForm(p => ({ ...p, lastName: e.target.value }))} style={{ padding: 16, background: "#111", border: "1px solid #222", borderRadius: 12, color: "white" }} />
              </div>
              <input type="email" placeholder="Email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} style={{ padding: 16, background: "#111", border: "1px solid #222", borderRadius: 12, color: "white" }} />
              <input type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} style={{ padding: 16, background: "#111", border: "1px solid #222", borderRadius: 12, color: "white" }} />
              <button onClick={() => setStep(2)} className="btn btn-primary" style={{ marginTop: 16 }}>Continue <ArrowRight size={18} /></button>
            </div>
          )}

          {step === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <h2 className="heading-font" style={{ fontSize: 24, color: "white", textAlign: "center", marginBottom: 16 }}>What are your goals?</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {goals.map(g => (
                  <button
                    key={g}
                    onClick={() => toggleGoal(g)}
                    style={{
                      padding: 16,
                      borderRadius: 12,
                      fontSize: 14,
                      cursor: "pointer",
                      background: form.goals.includes(g) ? "rgba(239,68,68,0.1)" : "#111",
                      color: form.goals.includes(g) ? "#EF4444" : "#6B7280",
                      border: form.goals.includes(g) ? "1px solid #EF4444" : "1px solid #222",
                    }}
                  >
                    {g}
                  </button>
                ))}
              </div>
              <div style={{ display: "flex", gap: 16, marginTop: 16 }}>
                <button onClick={() => setStep(1)} className="btn btn-outline" style={{ flex: 1 }}><ArrowLeft size={18} /> Back</button>
                <button onClick={() => setStep(3)} className="btn btn-primary" style={{ flex: 1 }}>Continue <ArrowRight size={18} /></button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <h2 className="heading-font" style={{ fontSize: 24, color: "white", textAlign: "center", marginBottom: 16 }}>When would you like to visit?</h2>
              <div>
                <label style={{ display: "block", color: "#6B7280", fontSize: 14, marginBottom: 8 }}>Preferred Date</label>
                <input type="date" value={form.date} onChange={e => setForm(p => ({ ...p, date: e.target.value }))} style={{ width: "100%", padding: 16, background: "#111", border: "1px solid #222", borderRadius: 12, color: "white" }} />
              </div>
              <div>
                <label style={{ display: "block", color: "#6B7280", fontSize: 14, marginBottom: 8 }}>Preferred Time</label>
                <select value={form.time} onChange={e => setForm(p => ({ ...p, time: e.target.value }))} style={{ width: "100%", padding: 16, background: "#111", border: "1px solid #222", borderRadius: 12, color: "white" }}>
                  <option value="">Select time</option>
                  <option value="morning">Morning (6AM - 12PM)</option>
                  <option value="afternoon">Afternoon (12PM - 5PM)</option>
                  <option value="evening">Evening (5PM - 10PM)</option>
                </select>
              </div>
              <div style={{ display: "flex", gap: 16, marginTop: 16 }}>
                <button onClick={() => setStep(2)} className="btn btn-outline" style={{ flex: 1 }}><ArrowLeft size={18} /> Back</button>
                <button onClick={handleSubmit} className="btn btn-primary" style={{ flex: 1, opacity: loading ? 0.7 : 1 }}>{loading ? "Submitting..." : "Claim Trial"} {!loading && <ArrowRight size={18} />}</button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
