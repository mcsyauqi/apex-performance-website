"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Check, Dumbbell, Users, Calendar, Star, Clock, CreditCard, Shield, Gift } from "lucide-react";

const goals = ["Lose Weight", "Build Muscle", "Improve Fitness", "Reduce Stress", "Sports Performance", "General Health"];

const experiences = ["Complete Beginner", "Some Experience", "Regular Gym Goer", "Advanced/Athlete"];

const trialIncludes = [
  { icon: Dumbbell, title: "Full Gym Access", desc: "Access to all equipment and facilities" },
  { icon: Users, title: "All Group Classes", desc: "Join any of our 50+ weekly classes" },
  { icon: Calendar, title: "1 PT Session", desc: "Complimentary personal training session" },
  { icon: Star, title: "Fitness Assessment", desc: "Know your starting point" },
];

const guarantees = [
  { icon: CreditCard, text: "No credit card required" },
  { icon: Shield, text: "No obligation to join" },
  { icon: Gift, text: "Full access for 7 days" },
];

const testimonials = [
  { name: "Alex K.", text: "The free trial convinced me to join. Best decision ever!", rating: 5 },
  { name: "Maria S.", text: "I was hesitant at first, but the trainers made me feel so welcome.", rating: 5 },
  { name: "James L.", text: "Amazing facilities and the PT session showed me what I was doing wrong.", rating: 5 },
];

export default function TrialPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    goals: [] as string[],
    experience: "",
    date: "",
    time: "",
    referral: "",
  });
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

  const canProceedStep1 = form.firstName && form.lastName && form.email && form.phone;
  const canProceedStep2 = form.goals.length > 0 && form.experience;
  const canProceedStep3 = form.date && form.time;

  if (done) {
    return (
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
        <div style={{ textAlign: "center", maxWidth: 500 }}>
          <div style={{ width: 100, height: 100, borderRadius: "50%", background: "rgba(34,197,94,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 32px" }}>
            <Check size={50} color="#22C55E" />
          </div>
          <h1 className="heading-font" style={{ fontSize: 40, color: "white", marginBottom: 16 }}>Welcome to APEX!</h1>
          <p style={{ color: "#9CA3AF", marginBottom: 16, fontSize: 18, lineHeight: 1.6 }}>
            Your free trial has been booked. We're excited to help you start your fitness journey!
          </p>
          <div className="card" style={{ padding: 24, marginBottom: 32, textAlign: "left" }}>
            <p style={{ color: "#6B7280", fontSize: 14, marginBottom: 8 }}>Your appointment:</p>
            <p style={{ color: "white", fontSize: 16, fontWeight: 600 }}>{form.date} • {form.time === "morning" ? "Morning (6AM - 12PM)" : form.time === "afternoon" ? "Afternoon (12PM - 5PM)" : "Evening (5PM - 10PM)"}</p>
          </div>
          <p style={{ color: "#6B7280", marginBottom: 32 }}>
            We'll send a confirmation email to <span style={{ color: "#EF4444" }}>{form.email}</span> with all the details.
          </p>
          <Link href="/" className="btn btn-primary">Back to Home <ArrowRight size={18} /></Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 32 }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 50, padding: "8px 20px", marginBottom: 24 }}>
            <span style={{ color: "#22C55E", fontSize: 14, fontWeight: 500 }}>7-Day Free Trial • No Card Required • No Obligation</span>
          </div>
          <h1 className="heading-font" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "white", marginBottom: 16 }}>
            START YOUR
            <br />
            <span className="text-gradient">FREE TRIAL</span>
          </h1>
          <p style={{ color: "#9CA3AF", fontSize: 18, maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
            Experience APEX for yourself. No strings attached, just results.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section style={{ paddingBottom: 48 }}>
        <div className="container">
          <div className="grid-4">
            {trialIncludes.map((item) => (
              <div key={item.title} className="card" style={{ padding: 20, textAlign: "center" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(239,68,68,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                  <item.icon size={22} color="#EF4444" />
                </div>
                <h3 style={{ color: "white", fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{item.title}</h3>
                <p style={{ color: "#6B7280", fontSize: 12 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section style={{ background: "#111", borderTop: "1px solid #222", borderBottom: "1px solid #222" }}>
        <div className="container" style={{ paddingTop: 24, paddingBottom: 24 }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
            {guarantees.map((g) => (
              <div key={g.text} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <g.icon size={20} color="#22C55E" />
                <span style={{ color: "#9CA3AF", fontSize: 14 }}>{g.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress */}
      <section style={{ paddingTop: 48, paddingBottom: 32 }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8, marginBottom: 16 }}>
            {[
              { num: 1, label: "Your Info" },
              { num: 2, label: "Your Goals" },
              { num: 3, label: "Schedule" },
            ].map((s, i) => (
              <div key={s.num} style={{ display: "flex", alignItems: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 600,
                    fontSize: 16,
                    background: step >= s.num ? "#EF4444" : "#111",
                    color: step >= s.num ? "white" : "#6B7280",
                    border: step >= s.num ? "none" : "1px solid #222",
                    marginBottom: 8,
                  }}>
                    {step > s.num ? <Check size={20} /> : s.num}
                  </div>
                  <span style={{ color: step >= s.num ? "white" : "#6B7280", fontSize: 12 }}>{s.label}</span>
                </div>
                {i < 2 && <div style={{ width: 60, height: 2, marginLeft: 16, marginRight: 16, marginBottom: 28, background: step > s.num ? "#EF4444" : "#222" }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 600 }}>
          {step === 1 && (
            <div className="card" style={{ padding: 32 }}>
              <h2 className="heading-font" style={{ fontSize: 28, color: "white", textAlign: "center", marginBottom: 8 }}>Tell us about yourself</h2>
              <p style={{ color: "#6B7280", textAlign: "center", marginBottom: 32 }}>We'll use this to personalize your experience</p>

              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label style={{ display: "block", color: "#9CA3AF", fontSize: 14, marginBottom: 8 }}>First Name *</label>
                    <input type="text" placeholder="John" value={form.firstName} onChange={e => setForm(p => ({ ...p, firstName: e.target.value }))} style={{ width: "100%", padding: 16, background: "#0A0A0A", border: "1px solid #222", borderRadius: 12, color: "white", fontSize: 14 }} />
                  </div>
                  <div>
                    <label style={{ display: "block", color: "#9CA3AF", fontSize: 14, marginBottom: 8 }}>Last Name *</label>
                    <input type="text" placeholder="Doe" value={form.lastName} onChange={e => setForm(p => ({ ...p, lastName: e.target.value }))} style={{ width: "100%", padding: 16, background: "#0A0A0A", border: "1px solid #222", borderRadius: 12, color: "white", fontSize: 14 }} />
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", color: "#9CA3AF", fontSize: 14, marginBottom: 8 }}>Email *</label>
                  <input type="email" placeholder="john@example.com" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} style={{ width: "100%", padding: 16, background: "#0A0A0A", border: "1px solid #222", borderRadius: 12, color: "white", fontSize: 14 }} />
                </div>
                <div>
                  <label style={{ display: "block", color: "#9CA3AF", fontSize: 14, marginBottom: 8 }}>Phone *</label>
                  <input type="tel" placeholder="+62 812 3456 7890" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} style={{ width: "100%", padding: 16, background: "#0A0A0A", border: "1px solid #222", borderRadius: 12, color: "white", fontSize: 14 }} />
                </div>
                <button
                  onClick={() => setStep(2)}
                  disabled={!canProceedStep1}
                  className="btn btn-primary"
                  style={{ marginTop: 8, opacity: canProceedStep1 ? 1 : 0.5, cursor: canProceedStep1 ? "pointer" : "not-allowed" }}
                >
                  Continue <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="card" style={{ padding: 32 }}>
              <h2 className="heading-font" style={{ fontSize: 28, color: "white", textAlign: "center", marginBottom: 8 }}>What are your goals?</h2>
              <p style={{ color: "#6B7280", textAlign: "center", marginBottom: 32 }}>Select all that apply</p>

              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
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
                        background: form.goals.includes(g) ? "rgba(239,68,68,0.1)" : "#0A0A0A",
                        color: form.goals.includes(g) ? "#EF4444" : "#9CA3AF",
                        border: form.goals.includes(g) ? "1px solid #EF4444" : "1px solid #222",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                      }}
                    >
                      {form.goals.includes(g) && <Check size={16} />}
                      {g}
                    </button>
                  ))}
                </div>

                <div>
                  <label style={{ display: "block", color: "#9CA3AF", fontSize: 14, marginBottom: 12 }}>What's your fitness experience?</label>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    {experiences.map(exp => (
                      <button
                        key={exp}
                        onClick={() => setForm(p => ({ ...p, experience: exp }))}
                        style={{
                          padding: 14,
                          borderRadius: 12,
                          fontSize: 13,
                          cursor: "pointer",
                          background: form.experience === exp ? "rgba(239,68,68,0.1)" : "#0A0A0A",
                          color: form.experience === exp ? "#EF4444" : "#9CA3AF",
                          border: form.experience === exp ? "1px solid #EF4444" : "1px solid #222",
                        }}
                      >
                        {exp}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
                  <button onClick={() => setStep(1)} className="btn btn-outline" style={{ flex: 1 }}><ArrowLeft size={18} /> Back</button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!canProceedStep2}
                    className="btn btn-primary"
                    style={{ flex: 1, opacity: canProceedStep2 ? 1 : 0.5, cursor: canProceedStep2 ? "pointer" : "not-allowed" }}
                  >
                    Continue <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="card" style={{ padding: 32 }}>
              <h2 className="heading-font" style={{ fontSize: 28, color: "white", textAlign: "center", marginBottom: 8 }}>When would you like to visit?</h2>
              <p style={{ color: "#6B7280", textAlign: "center", marginBottom: 32 }}>Pick a time that works for you</p>

              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                  <label style={{ display: "block", color: "#9CA3AF", fontSize: 14, marginBottom: 8 }}>Preferred Date *</label>
                  <input type="date" value={form.date} onChange={e => setForm(p => ({ ...p, date: e.target.value }))} style={{ width: "100%", padding: 16, background: "#0A0A0A", border: "1px solid #222", borderRadius: 12, color: "white", fontSize: 14 }} />
                </div>
                <div>
                  <label style={{ display: "block", color: "#9CA3AF", fontSize: 14, marginBottom: 8 }}>Preferred Time *</label>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
                    {[
                      { value: "morning", label: "Morning", sub: "6AM - 12PM" },
                      { value: "afternoon", label: "Afternoon", sub: "12PM - 5PM" },
                      { value: "evening", label: "Evening", sub: "5PM - 10PM" },
                    ].map(time => (
                      <button
                        key={time.value}
                        onClick={() => setForm(p => ({ ...p, time: time.value }))}
                        style={{
                          padding: 16,
                          borderRadius: 12,
                          cursor: "pointer",
                          background: form.time === time.value ? "rgba(239,68,68,0.1)" : "#0A0A0A",
                          color: form.time === time.value ? "#EF4444" : "#9CA3AF",
                          border: form.time === time.value ? "1px solid #EF4444" : "1px solid #222",
                          textAlign: "center",
                        }}
                      >
                        <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{time.label}</div>
                        <div style={{ fontSize: 11, opacity: 0.7 }}>{time.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", color: "#9CA3AF", fontSize: 14, marginBottom: 8 }}>How did you hear about us? (Optional)</label>
                  <select value={form.referral} onChange={e => setForm(p => ({ ...p, referral: e.target.value }))} style={{ width: "100%", padding: 16, background: "#0A0A0A", border: "1px solid #222", borderRadius: 12, color: form.referral ? "white" : "#6B7280", fontSize: 14 }}>
                    <option value="">Select an option</option>
                    <option value="google">Google Search</option>
                    <option value="instagram">Instagram</option>
                    <option value="facebook">Facebook</option>
                    <option value="friend">Friend/Family</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
                  <button onClick={() => setStep(2)} className="btn btn-outline" style={{ flex: 1 }}><ArrowLeft size={18} /> Back</button>
                  <button
                    onClick={handleSubmit}
                    disabled={!canProceedStep3}
                    className="btn btn-primary"
                    style={{ flex: 1, opacity: loading ? 0.7 : canProceedStep3 ? 1 : 0.5, cursor: canProceedStep3 ? "pointer" : "not-allowed" }}
                  >
                    {loading ? "Submitting..." : "Claim Free Trial"} {!loading && <ArrowRight size={18} />}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ background: "#111" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
              Success Stories
            </p>
            <h2 className="heading-font" style={{ fontSize: 32, color: "white" }}>
              WHAT TRIAL MEMBERS SAY
            </h2>
          </div>

          <div className="grid-3">
            {testimonials.map((t) => (
              <div key={t.name} className="card" style={{ padding: 24 }}>
                <div style={{ display: "flex", gap: 4, marginBottom: 12 }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#EF4444" color="#EF4444" />
                  ))}
                </div>
                <p style={{ color: "#9CA3AF", fontSize: 14, lineHeight: 1.6, marginBottom: 16, fontStyle: "italic" }}>
                  "{t.text}"
                </p>
                <p style={{ color: "white", fontSize: 14, fontWeight: 600 }}>{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 className="heading-font" style={{ fontSize: 32, color: "white" }}>
              TRIAL FAQ
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { q: "Is the trial really free?", a: "Yes! The 7-day trial is completely free with no credit card required. You can use all facilities, attend classes, and get a free PT session." },
              { q: "What should I bring?", a: "Just bring workout clothes, training shoes, and a water bottle. We'll provide a locker, towel, and anything else you need." },
              { q: "Do I need to book classes?", a: "For popular classes, we recommend booking through our app or at reception. But many classes have open spots for walk-ins." },
              { q: "What happens after the trial?", a: "There's no automatic billing. If you love APEX (we think you will!), our team will help you choose the right membership." },
            ].map((faq) => (
              <div key={faq.q} className="card" style={{ padding: 24 }}>
                <h4 style={{ color: "white", fontSize: 16, marginBottom: 8 }}>{faq.q}</h4>
                <p style={{ color: "#6B7280", fontSize: 14, lineHeight: 1.6 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
