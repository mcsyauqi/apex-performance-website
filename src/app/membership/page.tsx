"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { membershipPlans } from "@/data/membership";
import { formatCurrency } from "@/lib/utils";

export default function MembershipPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 60 }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>
            Memberships
          </p>
          <h1 className="heading-font" style={{ fontSize: "clamp(40px, 6vw, 64px)", color: "white", marginBottom: 16 }}>
            INVEST IN
            <br />
            <span className="text-gradient">YOURSELF</span>
          </h1>
          <p style={{ color: "#9CA3AF", fontSize: 18, maxWidth: 500, margin: "0 auto" }}>
            Choose the plan that fits your lifestyle. Upgrade or downgrade anytime.
          </p>
        </div>
      </section>

      {/* Toggle */}
      <section style={{ paddingBottom: 48 }}>
        <div className="container" style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ display: "inline-flex", background: "#111", borderRadius: 50, padding: 4, border: "1px solid #222" }}>
            <button
              onClick={() => setAnnual(false)}
              style={{
                padding: "10px 24px",
                borderRadius: 50,
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                border: "none",
                background: !annual ? "#EF4444" : "transparent",
                color: !annual ? "white" : "#9CA3AF",
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              style={{
                padding: "10px 24px",
                borderRadius: 50,
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                border: "none",
                background: annual ? "#EF4444" : "transparent",
                color: annual ? "white" : "#9CA3AF",
              }}
            >
              Annual <span style={{ color: "#22C55E", marginLeft: 4 }}>-20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid-3">
            {membershipPlans.map((plan) => {
              const price = annual ? Math.floor(plan.price * 12 * 0.8) : plan.price;
              return (
                <div
                  key={plan.id}
                  className="card"
                  style={{
                    padding: 32,
                    border: plan.highlighted ? "2px solid #EF4444" : undefined,
                    position: "relative",
                  }}
                >
                  {plan.highlighted && (
                    <div style={{
                      position: "absolute",
                      top: -1,
                      left: 0,
                      right: 0,
                      background: "#EF4444",
                      color: "white",
                      textAlign: "center",
                      padding: "8px 0",
                      fontSize: 12,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      borderRadius: "16px 16px 0 0",
                    }}>
                      Most Popular
                    </div>
                  )}

                  <div style={{ paddingTop: plan.highlighted ? 24 : 0 }}>
                    <h3 className="heading-font" style={{ fontSize: 24, color: "white", marginBottom: 8 }}>{plan.name}</h3>
                    <p style={{ color: "#6B7280", fontSize: 14, marginBottom: 24 }}>{plan.description}</p>

                    <div style={{ marginBottom: 24 }}>
                      <span className="heading-font" style={{ fontSize: 48, color: "white" }}>{formatCurrency(price)}</span>
                      <span style={{ color: "#6B7280", marginLeft: 8 }}>/{annual ? "year" : "month"}</span>
                    </div>

                    <Link
                      href="/trial"
                      className="btn"
                      style={{
                        width: "100%",
                        marginBottom: 24,
                        background: plan.highlighted ? "linear-gradient(135deg, #EF4444, #F97316)" : "transparent",
                        color: plan.highlighted ? "white" : "#9CA3AF",
                        border: plan.highlighted ? "none" : "1px solid #222",
                      }}
                    >
                      Get Started <ArrowRight size={18} />
                    </Link>

                    <ul style={{ listStyle: "none", padding: 0 }}>
                      {plan.features.map((feature) => (
                        <li key={feature} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12, color: "#9CA3AF", fontSize: 14 }}>
                          <span style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(34,197,94,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <Check size={12} color="#22C55E" />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: "#111" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <h2 className="heading-font" style={{ fontSize: 32, color: "white", textAlign: "center", marginBottom: 48 }}>
            Common Questions
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { q: "Can I switch plans?", a: "Yes, upgrade or downgrade anytime. Changes apply at next billing cycle." },
              { q: "Is there a contract?", a: "No contracts. Cancel anytime with 30-day notice." },
              { q: "What's in the free trial?", a: "Full access to facilities, classes, and one personal training session." },
              { q: "Corporate rates?", a: "Yes! Contact us for groups of 10+ employees." },
            ].map((faq) => (
              <div key={faq.q} className="card" style={{ padding: 24 }}>
                <h4 style={{ color: "white", fontSize: 16, marginBottom: 8 }}>{faq.q}</h4>
                <p style={{ color: "#6B7280", fontSize: 14 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
