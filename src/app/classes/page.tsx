"use client";

import { useState } from "react";
import Image from "next/image";
import { Clock, Flame } from "lucide-react";
import { classes, categories } from "@/data/classes";

export default function ClassesPage() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? classes : classes.filter(c => c.category === filter);

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 60 }}>
        <div className="container">
          <p style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>
            Our Classes
          </p>
          <h1 className="heading-font" style={{ fontSize: "clamp(40px, 6vw, 64px)", color: "white", marginBottom: 16 }}>
            FIND YOUR
            <br />
            <span className="text-gradient">PERFECT CLASS</span>
          </h1>
          <p style={{ color: "#9CA3AF", fontSize: 18, maxWidth: 500 }}>
            From high-intensity HIIT to mindful yoga. Find the workout that fits your goals.
          </p>
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
                <div style={{ position: "relative", height: 200 }}>
                  <Image src={cls.image} alt={cls.name} fill style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: 16, left: 16 }}>
                    <span style={{ background: "#EF4444", color: "white", padding: "6px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>
                      {cls.category}
                    </span>
                  </div>
                </div>
                <div style={{ padding: 24 }}>
                  <h3 className="heading-font" style={{ fontSize: 22, color: "white", marginBottom: 8 }}>{cls.name}</h3>
                  <p style={{ color: "#6B7280", fontSize: 14, marginBottom: 16, lineHeight: 1.6 }}>{cls.shortDescription}</p>
                  <div style={{ display: "flex", gap: 16, color: "#6B7280", fontSize: 14 }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <Clock size={14} /> {cls.duration} min
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <Flame size={14} /> Level {cls.intensity}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
