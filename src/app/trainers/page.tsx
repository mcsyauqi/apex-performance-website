"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { trainers } from "@/data/trainers";

export default function TrainersPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 60 }}>
        <div className="container">
          <p style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>
            Our Team
          </p>
          <h1 className="heading-font" style={{ fontSize: "clamp(40px, 6vw, 64px)", color: "white", marginBottom: 16 }}>
            MEET YOUR
            <br />
            <span className="text-gradient">COACHES</span>
          </h1>
          <p style={{ color: "#9CA3AF", fontSize: 18, maxWidth: 500 }}>
            World-class trainers dedicated to helping you achieve your fitness goals.
          </p>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid-3">
            {trainers.map((trainer) => (
              <div key={trainer.id} className="card" style={{ overflow: "hidden" }}>
                <div style={{ position: "relative", height: 300, overflow: "hidden" }}>
                  <img src={trainer.image} alt={trainer.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: 24 }}>
                  <h3 className="heading-font" style={{ fontSize: 22, color: "white", marginBottom: 4 }}>{trainer.name}</h3>
                  <p style={{ color: "#EF4444", fontSize: 14, marginBottom: 16 }}>{trainer.title}</p>
                  <p style={{ color: "#6B7280", fontSize: 14, marginBottom: 16, lineHeight: 1.6 }}>{trainer.shortBio}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {trainer.specialties.slice(0, 3).map((spec) => (
                      <span key={spec} style={{ background: "rgba(239,68,68,0.1)", color: "#EF4444", padding: "4px 12px", borderRadius: 20, fontSize: 12 }}>
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "#111", borderTop: "1px solid #222", borderBottom: "1px solid #222" }}>
        <div className="container" style={{ paddingTop: 48, paddingBottom: 48 }}>
          <div className="grid-3" style={{ textAlign: "center" }}>
            {[
              { value: "50+", label: "Certifications" },
              { value: "10K+", label: "Lives Changed" },
              { value: "15+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="heading-font text-gradient" style={{ fontSize: 40, marginBottom: 4 }}>{stat.value}</p>
                <p style={{ color: "#6B7280", fontSize: 14 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="heading-font" style={{ fontSize: 32, color: "white", marginBottom: 16 }}>
            Ready to train with the best?
          </h2>
          <p style={{ color: "#9CA3AF", fontSize: 16, marginBottom: 32 }}>
            Book a free consultation with one of our expert trainers.
          </p>
          <Link href="/trial" className="btn btn-primary">
            Book Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
