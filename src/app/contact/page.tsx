"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Send, Check, ArrowRight, MessageCircle, Instagram, Facebook, Twitter } from "lucide-react";

const contactReasons = [
  "General Inquiry",
  "Membership Question",
  "Personal Training",
  "Class Schedule",
  "Corporate Rates",
  "Feedback",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", reason: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSent(true);
  };

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 60 }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: 48 }}>
            <div>
              <p style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>
                Contact
              </p>
              <h1 className="heading-font" style={{ fontSize: "clamp(40px, 6vw, 64px)", color: "white", marginBottom: 16 }}>
                GET IN
                <br />
                <span className="text-gradient">TOUCH</span>
              </h1>
              <p style={{ color: "#9CA3AF", fontSize: 18, marginBottom: 24, lineHeight: 1.7 }}>
                Have questions about membership, classes, or personal training?
                We&apos;re here to help. Reach out and we&apos;ll respond within 24 hours.
              </p>
              <div style={{ display: "flex", gap: 16 }}>
                <a href="#" style={{ width: 40, height: 40, borderRadius: "50%", background: "#111", border: "1px solid #222", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Instagram size={18} color="#9CA3AF" />
                </a>
                <a href="#" style={{ width: 40, height: 40, borderRadius: "50%", background: "#111", border: "1px solid #222", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Facebook size={18} color="#9CA3AF" />
                </a>
                <a href="#" style={{ width: 40, height: 40, borderRadius: "50%", background: "#111", border: "1px solid #222", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Twitter size={18} color="#9CA3AF" />
                </a>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { icon: MapPin, label: "Visit Us", value: "123 Fitness Street, Jakarta Selatan 12345" },
                { icon: Phone, label: "Call Us", value: "+62 21 1234 5678" },
                { icon: Mail, label: "Email Us", value: "hello@apexperformance.com" },
                { icon: Clock, label: "Open Hours", value: "Mon-Sat: 5AM-11PM\nSun: 6AM-10PM" },
              ].map((item) => (
                <div key={item.label} className="card" style={{ padding: 24 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(239,68,68,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    <item.icon size={22} color="#EF4444" />
                  </div>
                  <p style={{ color: "#6B7280", fontSize: 12, marginBottom: 4, textTransform: "uppercase", letterSpacing: 1 }}>{item.label}</p>
                  <p style={{ color: "white", fontSize: 14, whiteSpace: "pre-line" }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section style={{ background: "#111", borderTop: "1px solid #222", borderBottom: "1px solid #222" }}>
        <div className="container" style={{ paddingTop: 48, paddingBottom: 48 }}>
          <div className="grid-3">
            {[
              { icon: MessageCircle, title: "Live Chat", desc: "Chat with our team instantly", action: "Start Chat" },
              { icon: Phone, title: "Call Us", desc: "Speak with a team member", action: "Call Now" },
              { icon: Mail, title: "Email Us", desc: "Get a response within 24h", action: "Send Email" },
            ].map((item) => (
              <div key={item.title} className="card" style={{ padding: 24, display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(239,68,68,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <item.icon size={24} color="#EF4444" />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ color: "white", fontSize: 16, fontWeight: 600, marginBottom: 4 }}>{item.title}</h3>
                  <p style={{ color: "#6B7280", fontSize: 13 }}>{item.desc}</p>
                </div>
                <button className="btn btn-outline" style={{ padding: "8px 16px", fontSize: 13 }}>
                  {item.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 64 }}>
            {/* Form */}
            <div>
              <h2 className="heading-font" style={{ fontSize: 32, color: "white", marginBottom: 8 }}>
                Send a Message
              </h2>
              <p style={{ color: "#6B7280", fontSize: 14, marginBottom: 32 }}>
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {sent ? (
                <div className="card" style={{ padding: 48, textAlign: "center" }}>
                  <div style={{ width: 80, height: 80, borderRadius: "50%", background: "rgba(34,197,94,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                    <Check size={40} color="#22C55E" />
                  </div>
                  <h3 className="heading-font" style={{ fontSize: 28, color: "white", marginBottom: 8 }}>Message Sent!</h3>
                  <p style={{ color: "#6B7280", marginBottom: 32, lineHeight: 1.6 }}>
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", reason: "", message: "" }); }} className="btn btn-outline">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div className="grid-2" style={{ gap: 20 }}>
                    <div>
                      <label style={{ display: "block", color: "#9CA3AF", fontSize: 14, marginBottom: 8 }}>Your Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                        style={{ width: "100%", padding: 16, background: "#111", border: "1px solid #222", borderRadius: 12, color: "white", fontSize: 14 }}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", color: "#9CA3AF", fontSize: 14, marginBottom: 8 }}>Phone Number</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                        style={{ width: "100%", padding: 16, background: "#111", border: "1px solid #222", borderRadius: 12, color: "white", fontSize: 14 }}
                        placeholder="+62 812 3456 7890"
                      />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: "block", color: "#9CA3AF", fontSize: 14, marginBottom: 8 }}>Email Address *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                      style={{ width: "100%", padding: 16, background: "#111", border: "1px solid #222", borderRadius: 12, color: "white", fontSize: 14 }}
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", color: "#9CA3AF", fontSize: 14, marginBottom: 8 }}>What's this about?</label>
                    <select
                      value={form.reason}
                      onChange={e => setForm(p => ({ ...p, reason: e.target.value }))}
                      style={{ width: "100%", padding: 16, background: "#111", border: "1px solid #222", borderRadius: 12, color: form.reason ? "white" : "#6B7280", fontSize: 14 }}
                    >
                      <option value="">Select a reason</option>
                      {contactReasons.map(reason => (
                        <option key={reason} value={reason}>{reason}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", color: "#9CA3AF", fontSize: 14, marginBottom: 8 }}>Your Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      style={{ width: "100%", padding: 16, background: "#111", border: "1px solid #222", borderRadius: 12, color: "white", fontSize: 14, resize: "none" }}
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ opacity: loading ? 0.7 : 1, marginTop: 8 }}>
                    {loading ? "Sending..." : "Send Message"} <Send size={18} />
                  </button>
                </form>
              )}
            </div>

            {/* Map & Info */}
            <div>
              <h2 className="heading-font" style={{ fontSize: 32, color: "white", marginBottom: 8 }}>
                Find Us
              </h2>
              <p style={{ color: "#6B7280", fontSize: 14, marginBottom: 32 }}>
                Located in the heart of Jakarta with easy access and free parking.
              </p>

              <div className="card" style={{ height: 300, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", marginBottom: 24 }}>
                <MapPin size={48} color="#EF4444" style={{ marginBottom: 16 }} />
                <p style={{ color: "white", fontSize: 16, fontWeight: 600, marginBottom: 4 }}>APEX Performance</p>
                <p style={{ color: "#6B7280", textAlign: "center" }}>123 Fitness Street, Jakarta Selatan 12345</p>
              </div>

              <div className="card" style={{ padding: 24 }}>
                <h3 style={{ color: "white", fontSize: 16, fontWeight: 600, marginBottom: 16 }}>Getting Here</h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li style={{ display: "flex", alignItems: "start", gap: 12, marginBottom: 12 }}>
                    <span style={{ color: "#EF4444", fontWeight: 600 }}>By Car:</span>
                    <span style={{ color: "#9CA3AF", fontSize: 14 }}>Free parking available for all members</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "start", gap: 12, marginBottom: 12 }}>
                    <span style={{ color: "#EF4444", fontWeight: 600 }}>By MRT:</span>
                    <span style={{ color: "#9CA3AF", fontSize: 14 }}>5 min walk from Senayan Station</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "start", gap: 12 }}>
                    <span style={{ color: "#EF4444", fontWeight: 600 }}>By Bus:</span>
                    <span style={{ color: "#9CA3AF", fontSize: 14 }}>Transjakarta Koridor 1, stop at Senayan</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: "#111" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
              FAQ
            </p>
            <h2 className="heading-font" style={{ fontSize: 40, color: "white" }}>
              QUICK ANSWERS
            </h2>
          </div>

          <div className="grid-2" style={{ gap: 24 }}>
            {[
              { q: "What are your operating hours?", a: "We're open Monday-Saturday 5AM-11PM and Sunday 6AM-10PM. Premium and Elite members have 24/7 access." },
              { q: "Do I need to book classes in advance?", a: "We recommend booking classes 24 hours in advance through our app or website to secure your spot." },
              { q: "Is personal training included?", a: "Premium members get 1 PT session/month included. Elite members have unlimited PT sessions." },
              { q: "Can I bring a guest?", a: "Yes! Premium members get 2 guest passes/month and Elite members get 4 guest passes/month." },
            ].map((faq) => (
              <div key={faq.q} className="card" style={{ padding: 24 }}>
                <h4 style={{ color: "white", fontSize: 16, marginBottom: 12 }}>{faq.q}</h4>
                <p style={{ color: "#6B7280", fontSize: 14, lineHeight: 1.6 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="card" style={{ padding: 48, textAlign: "center", background: "linear-gradient(135deg, rgba(239,68,68,0.1), rgba(249,115,22,0.1))", border: "1px solid rgba(239,68,68,0.3)" }}>
            <h2 className="heading-font" style={{ fontSize: 32, color: "white", marginBottom: 16 }}>
              READY TO START YOUR FITNESS JOURNEY?
            </h2>
            <p style={{ color: "#9CA3AF", fontSize: 16, marginBottom: 32, maxWidth: 500, margin: "0 auto 32px" }}>
              Skip the questions and start your free 7-day trial today. Experience APEX for yourself.
            </p>
            <Link href="/trial" className="btn btn-primary">
              Claim Your Free Trial <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
