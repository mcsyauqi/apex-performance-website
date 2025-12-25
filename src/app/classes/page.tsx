"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, Flame, Users, Calendar, ArrowRight, CheckCircle, Zap, Heart, Target } from "lucide-react";
import { classes, categories } from "@/data/classes";

const benefits = [
  { icon: Zap, title: "Burn Calories", desc: "Torch up to 700 calories per session with our high-intensity classes" },
  { icon: Heart, title: "Improve Health", desc: "Boost cardiovascular fitness and overall well-being" },
  { icon: Users, title: "Community", desc: "Train with like-minded people in a motivating environment" },
  { icon: Target, title: "Expert Guidance", desc: "Learn proper form from certified professional trainers" },
];

const schedule = [
  { time: "06:00", mon: "HIIT Inferno", tue: "Spin Revolution", wed: "HIIT Inferno", thu: "Spin Revolution", fri: "HIIT Inferno", sat: "Power Strength" },
  { time: "08:00", mon: "Zen Flow Yoga", tue: "-", wed: "Zen Flow Yoga", thu: "-", fri: "Zen Flow Yoga", sat: "Spin Revolution" },
  { time: "10:00", mon: "Core Pilates", tue: "-", wed: "Core Pilates", thu: "-", fri: "Core Pilates", sat: "Boxing Fundamentals" },
  { time: "17:30", mon: "Spin Revolution", tue: "Boxing Fundamentals", wed: "-", thu: "Spin Revolution", fri: "-", sat: "-" },
  { time: "18:00", mon: "-", tue: "Boxing Fundamentals", wed: "-", thu: "Boxing Fundamentals", fri: "-", sat: "-" },
];

export default function ClassesPage() {
  const [filter, setFilter] = useState("all");
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const filtered = filter === "all" ? classes : classes.filter(c => c.category === filter);

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 60 }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: 48 }}>
            <div>
              <p style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>
                Our Classes
              </p>
              <h1 className="heading-font" style={{ fontSize: "clamp(40px, 6vw, 64px)", color: "white", marginBottom: 16 }}>
                FIND YOUR
                <br />
                <span className="text-gradient">PERFECT CLASS</span>
              </h1>
              <p style={{ color: "#9CA3AF", fontSize: 18, marginBottom: 24, lineHeight: 1.7 }}>
                From high-intensity HIIT to mindful yoga, we offer over 50 classes per week.
                Find the workout that fits your goals and schedule.
              </p>
              <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                <div>
                  <p className="heading-font text-gradient" style={{ fontSize: 32 }}>50+</p>
                  <p style={{ color: "#6B7280", fontSize: 14 }}>Weekly Classes</p>
                </div>
                <div>
                  <p className="heading-font text-gradient" style={{ fontSize: 32 }}>6</p>
                  <p style={{ color: "#6B7280", fontSize: 14 }}>Class Types</p>
                </div>
                <div>
                  <p className="heading-font text-gradient" style={{ fontSize: 32 }}>15+</p>
                  <p style={{ color: "#6B7280", fontSize: 14 }}>Instructors</p>
                </div>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {classes.slice(0, 4).map((cls) => (
                <div key={cls.id} style={{ height: 120, borderRadius: 12, overflow: "hidden", position: "relative" }}>
                  <img src={cls.image} alt={cls.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)", display: "flex", alignItems: "flex-end", padding: 12 }}>
                    <span style={{ color: "white", fontSize: 12, fontWeight: 600 }}>{cls.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ background: "#111", borderTop: "1px solid #222", borderBottom: "1px solid #222" }}>
        <div className="container" style={{ paddingTop: 48, paddingBottom: 48 }}>
          <div className="grid-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} style={{ display: "flex", gap: 16, alignItems: "start" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(239,68,68,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <benefit.icon size={22} color="#EF4444" />
                </div>
                <div>
                  <h3 style={{ color: "white", fontSize: 16, fontWeight: 600, marginBottom: 4 }}>{benefit.title}</h3>
                  <p style={{ color: "#6B7280", fontSize: 13, lineHeight: 1.5 }}>{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section style={{ borderBottom: "1px solid #222", position: "sticky", top: 80, background: "#0A0A0A", zIndex: 50 }}>
        <div className="container" style={{ paddingTop: 24, paddingBottom: 24 }}>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                style={{
                  padding: "10px 20px",
                  borderRadius: 50,
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  background: filter === cat.value ? "#EF4444" : "#111",
                  color: filter === cat.value ? "white" : "#9CA3AF",
                  border: filter === cat.value ? "none" : "1px solid #222",
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="section">
        <div className="container">
          <p style={{ color: "#6B7280", fontSize: 14, marginBottom: 32 }}>
            Showing <span style={{ color: "white" }}>{filtered.length}</span> classes
          </p>

          <div className="grid-3">
            {filtered.map((cls) => (
              <div key={cls.id} className="card" style={{ overflow: "hidden" }}>
                <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
                  <img src={cls.image} alt={cls.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: 16, left: 16, zIndex: 10 }}>
                    <span style={{ background: "#EF4444", color: "white", padding: "6px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>
                      {cls.category}
                    </span>
                  </div>
                </div>
                <div style={{ padding: 24 }}>
                  <h3 className="heading-font" style={{ fontSize: 22, color: "white", marginBottom: 8 }}>{cls.name}</h3>
                  <p style={{ color: "#6B7280", fontSize: 14, marginBottom: 16, lineHeight: 1.6 }}>{cls.shortDescription}</p>

                  <div style={{ display: "flex", gap: 16, color: "#6B7280", fontSize: 14, marginBottom: 16 }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <Clock size={14} /> {cls.duration} min
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <Flame size={14} /> Level {cls.intensity}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <Zap size={14} /> {cls.calories} cal
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedClass(selectedClass === cls.id ? null : cls.id)}
                    style={{ background: "transparent", border: "none", color: "#EF4444", fontSize: 14, fontWeight: 600, cursor: "pointer", padding: 0 }}
                  >
                    {selectedClass === cls.id ? "Hide Details ↑" : "View Details ↓"}
                  </button>

                  {selectedClass === cls.id && (
                    <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #222" }}>
                      <p style={{ color: "white", fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Benefits:</p>
                      <ul style={{ listStyle: "none", padding: 0, marginBottom: 16 }}>
                        {cls.benefits.slice(0, 3).map((benefit) => (
                          <li key={benefit} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, color: "#9CA3AF", fontSize: 13 }}>
                            <CheckCircle size={14} color="#22C55E" /> {benefit}
                          </li>
                        ))}
                      </ul>
                      <p style={{ color: "white", fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Schedule:</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                        {cls.schedule.slice(0, 3).map((s, i) => (
                          <span key={i} style={{ background: "#222", padding: "4px 10px", borderRadius: 6, fontSize: 12, color: "#9CA3AF" }}>
                            {s.day} {s.time}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="section" style={{ background: "#111" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
              Schedule
            </p>
            <h2 className="heading-font" style={{ fontSize: 40, color: "white", marginBottom: 16 }}>
              WEEKLY TIMETABLE
            </h2>
            <p style={{ color: "#9CA3AF", fontSize: 16 }}>
              Plan your week with our comprehensive class schedule
            </p>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 800 }}>
              <thead>
                <tr>
                  <th style={{ padding: 16, textAlign: "left", color: "#6B7280", fontSize: 14, borderBottom: "1px solid #222" }}>Time</th>
                  <th style={{ padding: 16, textAlign: "center", color: "#6B7280", fontSize: 14, borderBottom: "1px solid #222" }}>Monday</th>
                  <th style={{ padding: 16, textAlign: "center", color: "#6B7280", fontSize: 14, borderBottom: "1px solid #222" }}>Tuesday</th>
                  <th style={{ padding: 16, textAlign: "center", color: "#6B7280", fontSize: 14, borderBottom: "1px solid #222" }}>Wednesday</th>
                  <th style={{ padding: 16, textAlign: "center", color: "#6B7280", fontSize: 14, borderBottom: "1px solid #222" }}>Thursday</th>
                  <th style={{ padding: 16, textAlign: "center", color: "#6B7280", fontSize: 14, borderBottom: "1px solid #222" }}>Friday</th>
                  <th style={{ padding: 16, textAlign: "center", color: "#6B7280", fontSize: 14, borderBottom: "1px solid #222" }}>Saturday</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row) => (
                  <tr key={row.time}>
                    <td style={{ padding: 16, color: "white", fontWeight: 600, fontSize: 14, borderBottom: "1px solid #222" }}>{row.time}</td>
                    {[row.mon, row.tue, row.wed, row.thu, row.fri, row.sat].map((cell, i) => (
                      <td key={i} style={{ padding: 16, textAlign: "center", borderBottom: "1px solid #222" }}>
                        {cell !== "-" ? (
                          <span style={{ background: "rgba(239,68,68,0.1)", color: "#EF4444", padding: "6px 12px", borderRadius: 6, fontSize: 12, fontWeight: 500 }}>
                            {cell}
                          </span>
                        ) : (
                          <span style={{ color: "#333" }}>-</span>
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

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="card" style={{ padding: 48, textAlign: "center", background: "linear-gradient(135deg, rgba(239,68,68,0.1), rgba(249,115,22,0.1))", border: "1px solid rgba(239,68,68,0.3)" }}>
            <Calendar size={48} color="#EF4444" style={{ marginBottom: 24 }} />
            <h2 className="heading-font" style={{ fontSize: 32, color: "white", marginBottom: 16 }}>
              READY TO JOIN A CLASS?
            </h2>
            <p style={{ color: "#9CA3AF", fontSize: 16, marginBottom: 32, maxWidth: 500, margin: "0 auto 32px" }}>
              Start your fitness journey today with a free trial. Experience any class and find your perfect fit.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/trial" className="btn btn-primary">
                Start Free Trial <ArrowRight size={18} />
              </Link>
              <Link href="/membership" className="btn btn-outline">
                View Membership
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
