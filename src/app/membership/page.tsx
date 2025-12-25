"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, Dumbbell, Users, Clock, Star, Shield, CreditCard, Gift } from "lucide-react";
import { membershipPlans } from "@/data/membership";
import { formatCurrency } from "@/lib/utils";

const features = [
  { icon: Dumbbell, title: "Premium Equipment", desc: "Access to world-class Technogym equipment" },
  { icon: Users, title: "Group Classes", desc: "50+ classes per week included" },
  { icon: Clock, title: "Flexible Hours", desc: "Train when it suits your schedule" },
  { icon: Star, title: "Expert Trainers", desc: "Guidance from certified professionals" },
];

const guarantees = [
  { icon: Shield, title: "No Long-Term Contracts", desc: "Month-to-month flexibility" },
  { icon: CreditCard, title: "Freeze Anytime", desc: "Pause your membership when needed" },
  { icon: Gift, title: "Bring a Friend", desc: "Free guest passes every month" },
];

const faqs = [
  { q: "Can I switch between plans?", a: "Yes! You can upgrade or downgrade your membership at any time. Changes will take effect at your next billing cycle." },
  { q: "Is there a joining fee?", a: "We often run promotions with waived joining fees. Ask about our current offers when you sign up." },
  { q: "What's included in the free trial?", a: "The 7-day trial includes full gym access, all group classes, locker room facilities, and one complimentary personal training session." },
  { q: "Do you offer corporate rates?", a: "Yes! We offer special rates for companies with 10+ employees. Contact us for a custom quote." },
  { q: "Can I freeze my membership?", a: "Absolutely. You can freeze your membership for up to 3 months per year for travel, medical reasons, or any other circumstance." },
  { q: "What's the cancellation policy?", a: "We require 30 days notice to cancel. There are no cancellation fees or penalties." },
];

const comparisons = [
  { feature: "24/7 Access", basic: false, premium: true, elite: true },
  { feature: "All Group Classes", basic: false, premium: true, elite: true },
  { feature: "Locker Room Access", basic: true, premium: true, elite: true },
  { feature: "Sauna & Steam Room", basic: false, premium: true, elite: true },
  { feature: "Personal Training Sessions", basic: "0/month", premium: "1/month", elite: "Unlimited" },
  { feature: "Nutrition Coaching", basic: false, premium: false, elite: true },
  { feature: "Priority Class Booking", basic: false, premium: false, elite: true },
  { feature: "Guest Passes", basic: "0/month", premium: "2/month", elite: "4/month" },
  { feature: "Towel Service", basic: false, premium: true, elite: true },
  { feature: "App Access", basic: true, premium: true, elite: true },
];

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
          <p style={{ color: "#9CA3AF", fontSize: 18, maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            Choose the plan that fits your lifestyle. Every membership includes access to premium equipment,
            expert support, and a community that will help you reach your goals.
          </p>
        </div>
      </section>

      {/* Features */}
      <section style={{ background: "#111", borderTop: "1px solid #222", borderBottom: "1px solid #222" }}>
        <div className="container" style={{ paddingTop: 48, paddingBottom: 48 }}>
          <div className="grid-4">
            {features.map((feature) => (
              <div key={feature.title} style={{ display: "flex", gap: 16, alignItems: "start" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(239,68,68,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <feature.icon size={22} color="#EF4444" />
                </div>
                <div>
                  <h3 style={{ color: "white", fontSize: 16, fontWeight: 600, marginBottom: 4 }}>{feature.title}</h3>
                  <p style={{ color: "#6B7280", fontSize: 13, lineHeight: 1.5 }}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toggle */}
      <section style={{ paddingTop: 64, paddingBottom: 48 }}>
        <div className="container" style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <div style={{ display: "inline-flex", background: "#111", borderRadius: 50, padding: 4, border: "1px solid #222" }}>
            <button
              onClick={() => setAnnual(false)}
              style={{
                padding: "12px 28px",
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
                padding: "12px 28px",
                borderRadius: 50,
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                border: "none",
                background: annual ? "#EF4444" : "transparent",
                color: annual ? "white" : "#9CA3AF",
              }}
            >
              Annual <span style={{ color: "#22C55E", marginLeft: 4, fontWeight: 600 }}>Save 20%</span>
            </button>
          </div>
          {annual && (
            <p style={{ color: "#22C55E", fontSize: 14 }}>
              🎉 You're saving up to $240/year with annual billing!
            </p>
          )}
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
                    transform: plan.highlighted ? "scale(1.02)" : undefined,
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
                    <h3 className="heading-font" style={{ fontSize: 28, color: "white", marginBottom: 8 }}>{plan.name}</h3>
                    <p style={{ color: "#6B7280", fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>{plan.description}</p>

                    <div style={{ marginBottom: 24 }}>
                      <span className="heading-font" style={{ fontSize: 56, color: "white" }}>{formatCurrency(price)}</span>
                      <span style={{ color: "#6B7280", marginLeft: 8 }}>/{annual ? "year" : "month"}</span>
                    </div>

                    <Link
                      href="/trial"
                      className="btn"
                      style={{
                        width: "100%",
                        marginBottom: 24,
                        justifyContent: "center",
                        background: plan.highlighted ? "linear-gradient(135deg, #EF4444, #F97316)" : "transparent",
                        color: plan.highlighted ? "white" : "#9CA3AF",
                        border: plan.highlighted ? "none" : "1px solid #222",
                      }}
                    >
                      Start Free Trial <ArrowRight size={18} />
                    </Link>

                    <ul style={{ listStyle: "none", padding: 0 }}>
                      {plan.features.map((feature) => (
                        <li key={feature} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12, color: "#9CA3AF", fontSize: 14 }}>
                          <span style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(34,197,94,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
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

      {/* Comparison Table */}
      <section className="section" style={{ background: "#111" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
              Compare Plans
            </p>
            <h2 className="heading-font" style={{ fontSize: 40, color: "white" }}>
              FEATURE COMPARISON
            </h2>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 600 }}>
              <thead>
                <tr>
                  <th style={{ padding: 16, textAlign: "left", color: "#6B7280", fontSize: 14, borderBottom: "1px solid #222" }}>Feature</th>
                  <th style={{ padding: 16, textAlign: "center", color: "white", fontSize: 16, fontWeight: 600, borderBottom: "1px solid #222" }}>Basic</th>
                  <th style={{ padding: 16, textAlign: "center", color: "#EF4444", fontSize: 16, fontWeight: 600, borderBottom: "1px solid #222" }}>Premium</th>
                  <th style={{ padding: 16, textAlign: "center", color: "white", fontSize: 16, fontWeight: 600, borderBottom: "1px solid #222" }}>Elite</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row.feature}>
                    <td style={{ padding: 16, color: "#9CA3AF", fontSize: 14, borderBottom: "1px solid #222" }}>{row.feature}</td>
                    {[row.basic, row.premium, row.elite].map((val, i) => (
                      <td key={i} style={{ padding: 16, textAlign: "center", borderBottom: "1px solid #222" }}>
                        {typeof val === "boolean" ? (
                          val ? <Check size={18} color="#22C55E" style={{ margin: "0 auto" }} /> : <span style={{ color: "#333" }}>—</span>
                        ) : (
                          <span style={{ color: "#9CA3AF", fontSize: 13 }}>{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
              Our Promise
            </p>
            <h2 className="heading-font" style={{ fontSize: 40, color: "white" }}>
              MEMBER GUARANTEES
            </h2>
          </div>

          <div className="grid-3">
            {guarantees.map((guarantee) => (
              <div key={guarantee.title} className="card" style={{ padding: 32, textAlign: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(239,68,68,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <guarantee.icon size={28} color="#EF4444" />
                </div>
                <h3 className="heading-font" style={{ fontSize: 20, color: "white", marginBottom: 8 }}>{guarantee.title}</h3>
                <p style={{ color: "#6B7280", fontSize: 14 }}>{guarantee.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: "#111" }}>
        <div className="container">
          <div className="grid-2" style={{ gap: 64, alignItems: "start" }}>
            <div>
              <p style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
                FAQ
              </p>
              <h2 className="heading-font" style={{ fontSize: 40, color: "white", marginBottom: 16 }}>
                COMMON QUESTIONS
              </h2>
              <p style={{ color: "#9CA3AF", fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>
                Can't find what you're looking for? Our team is always happy to help.
              </p>
              <Link href="/contact" className="btn btn-outline">
                Contact Us <ArrowRight size={18} />
              </Link>
            </div>
            <div>
              {faqs.map((faq, index) => (
                <div key={index} style={{ borderBottom: "1px solid #222", paddingBottom: 24, marginBottom: 24 }}>
                  <h3 style={{ color: "white", fontSize: 16, fontWeight: 600, marginBottom: 12 }}>{faq.q}</h3>
                  <p style={{ color: "#9CA3AF", fontSize: 14, lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #EF4444, #F97316)", padding: "80px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="heading-font" style={{ fontSize: 40, color: "white", marginBottom: 16 }}>
            START YOUR FREE TRIAL TODAY
          </h2>
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: 18, marginBottom: 32, maxWidth: 500, margin: "0 auto 32px" }}>
            7 days free access to all facilities, classes, and one personal training session. No credit card required.
          </p>
          <Link href="/trial" className="btn" style={{ background: "white", color: "#EF4444" }}>
            Claim Your Free Trial <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
