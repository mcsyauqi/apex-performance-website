"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Check } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
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
          <p style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>
            Contact
          </p>
          <h1 className="heading-font" style={{ fontSize: "clamp(40px, 6vw, 64px)", color: "white", marginBottom: 16 }}>
            GET IN
            <br />
            <span className="text-gradient">TOUCH</span>
          </h1>
          <p style={{ color: "#9CA3AF", fontSize: 18, maxWidth: 500 }}>
            Have questions? We&apos;re here to help. Reach out and we&apos;ll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section style={{ paddingBottom: 48 }}>
        <div className="container">
          <div className="grid-4">
            {[
              { icon: MapPin, label: "Location", value: "123 Fitness Street, Jakarta" },
              { icon: Phone, label: "Phone", value: "+62 21 1234 5678" },
              { icon: Mail, label: "Email", value: "hello@apex.com" },
              { icon: Clock, label: "Hours", value: "Mon-Fri 6AM-11PM" },
            ].map((item) => (
              <div key={item.label} className="card" style={{ padding: 24 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(239,68,68,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <item.icon size={20} color="#EF4444" />
                </div>
                <p style={{ color: "#6B7280", fontSize: 12, marginBottom: 4 }}>{item.label}</p>
                <p style={{ color: "white", fontSize: 14 }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid-2" style={{ gap: 48 }}>
            {/* Form */}
            <div>
              <h2 className="heading-font" style={{ fontSize: 24, color: "white", marginBottom: 24 }}>
                Send a Message
              </h2>

              {sent ? (
                <div className="card" style={{ padding: 48, textAlign: "center" }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(34,197,94,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                    <Check size={32} color="#22C55E" />
                  </div>
                  <h3 className="heading-font" style={{ fontSize: 24, color: "white", marginBottom: 8 }}>Message Sent!</h3>
                  <p style={{ color: "#6B7280", marginBottom: 24 }}>We&apos;ll get back to you within 24 hours.</p>
                  <button onClick={() => setSent(false)} className="btn btn-outline">
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <label style={{ display: "block", color: "#6B7280", fontSize: 14, marginBottom: 8 }}>Your Name</label>
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
                    <label style={{ display: "block", color: "#6B7280", fontSize: 14, marginBottom: 8 }}>Email</label>
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
                    <label style={{ display: "block", color: "#6B7280", fontSize: 14, marginBottom: 8 }}>Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      style={{ width: "100%", padding: 16, background: "#111", border: "1px solid #222", borderRadius: 12, color: "white", fontSize: 14, resize: "none" }}
                      placeholder="How can we help?"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ opacity: loading ? 0.7 : 1 }}>
                    {loading ? "Sending..." : "Send Message"} <Send size={18} />
                  </button>
                </form>
              )}
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="heading-font" style={{ fontSize: 24, color: "white", marginBottom: 24 }}>
                Find Us
              </h2>
              <div className="card" style={{ height: 400, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <MapPin size={48} color="#EF4444" style={{ marginBottom: 16 }} />
                <p style={{ color: "#6B7280" }}>Interactive Map</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
