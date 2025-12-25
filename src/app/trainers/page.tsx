"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Award, Star, Calendar, Instagram, Check } from "lucide-react";
import { trainers } from "@/data/trainers";

const certifications = [
  "NASM Certified Personal Trainer",
  "CrossFit Level 3 Trainer",
  "USA Powerlifting Coach",
  "RYT-500 Yoga Alliance",
  "Precision Nutrition Level 2",
  "ACE Group Fitness Instructor",
];

export default function TrainersPage() {
  const [selectedTrainer, setSelectedTrainer] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 60 }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: 48 }}>
            <div>
              <p style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>
                Our Team
              </p>
              <h1 className="heading-font" style={{ fontSize: "clamp(40px, 6vw, 64px)", color: "white", marginBottom: 16 }}>
                MEET YOUR
                <br />
                <span className="text-gradient">COACHES</span>
              </h1>
              <p style={{ color: "#9CA3AF", fontSize: 18, marginBottom: 24, lineHeight: 1.7 }}>
                Our world-class trainers are dedicated to helping you achieve your fitness goals.
                Each brings unique expertise and a passion for transforming lives.
              </p>
              <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                <div>
                  <p className="heading-font text-gradient" style={{ fontSize: 32 }}>6</p>
                  <p style={{ color: "#6B7280", fontSize: 14 }}>Expert Trainers</p>
                </div>
                <div>
                  <p className="heading-font text-gradient" style={{ fontSize: 32 }}>63+</p>
                  <p style={{ color: "#6B7280", fontSize: 14 }}>Years Combined</p>
                </div>
                <div>
                  <p className="heading-font text-gradient" style={{ fontSize: 32 }}>50+</p>
                  <p style={{ color: "#6B7280", fontSize: 14 }}>Certifications</p>
                </div>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
              {trainers.slice(0, 6).map((trainer) => (
                <div key={trainer.id} style={{ aspectRatio: "1", borderRadius: 12, overflow: "hidden" }}>
                  <img src={trainer.image} alt={trainer.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "#111", borderTop: "1px solid #222", borderBottom: "1px solid #222" }}>
        <div className="container" style={{ paddingTop: 48, paddingBottom: 48 }}>
          <div className="grid-4" style={{ textAlign: "center" }}>
            {[
              { value: "50+", label: "Certifications" },
              { value: "10K+", label: "Lives Changed" },
              { value: "15+", label: "Years Avg Experience" },
              { value: "4.9", label: "Average Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="heading-font text-gradient" style={{ fontSize: 36, marginBottom: 4 }}>{stat.value}</p>
                <p style={{ color: "#6B7280", fontSize: 14 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 className="heading-font" style={{ fontSize: 40, color: "white", marginBottom: 16 }}>
              OUR EXPERT TEAM
            </h2>
            <p style={{ color: "#9CA3AF", fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
              Click on any trainer to learn more about their background, certifications, and availability.
            </p>
          </div>

          <div className="grid-3">
            {trainers.map((trainer) => (
              <div
                key={trainer.id}
                className="card"
                style={{ overflow: "hidden", cursor: "pointer", border: selectedTrainer === trainer.id ? "2px solid #EF4444" : "1px solid #222" }}
                onClick={() => setSelectedTrainer(selectedTrainer === trainer.id ? null : trainer.id)}
              >
                <div style={{ position: "relative", height: 280, overflow: "hidden" }}>
                  <img src={trainer.image} alt={trainer.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)", padding: 24 }}>
                    <div style={{ display: "flex", gap: 4, marginBottom: 8 }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="#EF4444" color="#EF4444" />
                      ))}
                    </div>
                    <h3 className="heading-font" style={{ fontSize: 22, color: "white", marginBottom: 4 }}>{trainer.name}</h3>
                    <p style={{ color: "#EF4444", fontSize: 14 }}>{trainer.title}</p>
                  </div>
                </div>
                <div style={{ padding: 24 }}>
                  <p style={{ color: "#6B7280", fontSize: 14, marginBottom: 16, lineHeight: 1.6 }}>{trainer.shortBio}</p>

                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                    <Award size={16} color="#EF4444" />
                    <span style={{ color: "#9CA3AF", fontSize: 13 }}>{trainer.experience}+ years experience</span>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
                    {trainer.specialties.map((spec) => (
                      <span key={spec} style={{ background: "rgba(239,68,68,0.1)", color: "#EF4444", padding: "4px 12px", borderRadius: 20, fontSize: 12 }}>
                        {spec}
                      </span>
                    ))}
                  </div>

                  {selectedTrainer === trainer.id && (
                    <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #222" }}>
                      <p style={{ color: "white", fontSize: 13, fontWeight: 600, marginBottom: 12 }}>Certifications:</p>
                      <ul style={{ listStyle: "none", padding: 0, marginBottom: 16 }}>
                        {trainer.certifications.slice(0, 3).map((cert) => (
                          <li key={cert} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, color: "#9CA3AF", fontSize: 13 }}>
                            <Check size={14} color="#22C55E" /> {cert}
                          </li>
                        ))}
                      </ul>

                      <p style={{ color: "white", fontSize: 13, fontWeight: 600, marginBottom: 12 }}>Availability:</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
                        {trainer.schedule.slice(0, 4).map((s) => (
                          <span key={s.day} style={{ background: "#222", padding: "6px 12px", borderRadius: 6, fontSize: 12, color: "#9CA3AF" }}>
                            {s.day}: {s.available[0]}
                          </span>
                        ))}
                      </div>

                      {trainer.socialMedia?.instagram && (
                        <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#EF4444", fontSize: 13, textDecoration: "none" }}>
                          <Instagram size={16} /> {trainer.socialMedia.instagram}
                        </a>
                      )}
                    </div>
                  )}

                  <button style={{ background: "transparent", border: "none", color: "#EF4444", fontSize: 13, fontWeight: 600, cursor: "pointer", padding: 0, marginTop: 8 }}>
                    {selectedTrainer === trainer.id ? "Show Less ↑" : "View Full Profile ↓"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section" style={{ background: "#111" }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: 64 }}>
            <div>
              <p style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>
                Credentials
              </p>
              <h2 className="heading-font" style={{ fontSize: 40, color: "white", marginBottom: 24 }}>
                CERTIFIED EXCELLENCE
              </h2>
              <p style={{ color: "#9CA3AF", fontSize: 16, marginBottom: 32, lineHeight: 1.8 }}>
                Our trainers hold certifications from the world's most respected fitness organizations.
                When you train at APEX, you're in expert hands.
              </p>
              <Link href="/trial" className="btn btn-primary">
                Book a Session <ArrowRight size={18} />
              </Link>
            </div>
            <div>
              <div className="grid-2" style={{ gap: 16 }}>
                {certifications.map((cert) => (
                  <div key={cert} className="card" style={{ padding: 20, display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(239,68,68,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Award size={20} color="#EF4444" />
                    </div>
                    <span style={{ color: "#9CA3AF", fontSize: 13 }}>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
              What Members Say
            </p>
            <h2 className="heading-font" style={{ fontSize: 40, color: "white" }}>
              TRAINER REVIEWS
            </h2>
          </div>

          <div className="grid-3">
            {trainers.slice(0, 3).map((trainer) => (
              <div key={trainer.id} className="card" style={{ padding: 32 }}>
                <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
                  {[...Array(trainer.testimonials[0]?.rating || 5)].map((_, i) => (
                    <Star key={i} size={16} fill="#EF4444" color="#EF4444" />
                  ))}
                </div>
                <p style={{ color: "#9CA3AF", fontSize: 14, lineHeight: 1.7, marginBottom: 24, fontStyle: "italic" }}>
                  "{trainer.testimonials[0]?.text}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#222", overflow: "hidden" }}>
                    <img src={trainer.image} alt={trainer.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div>
                    <p style={{ color: "white", fontSize: 14, fontWeight: 600 }}>{trainer.testimonials[0]?.name}</p>
                    <p style={{ color: "#6B7280", fontSize: 12 }}>Training with {trainer.name.split(" ")[0]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #EF4444, #F97316)", padding: "80px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <Calendar size={48} color="white" style={{ marginBottom: 24 }} />
          <h2 className="heading-font" style={{ fontSize: 40, color: "white", marginBottom: 16 }}>
            READY TO TRAIN WITH THE BEST?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: 18, marginBottom: 32, maxWidth: 500, margin: "0 auto 32px" }}>
            Book a free consultation with one of our expert trainers and start your transformation journey.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/trial" className="btn" style={{ background: "white", color: "#EF4444" }}>
              Book Free Consultation <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn" style={{ background: "transparent", color: "white", border: "2px solid white" }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
