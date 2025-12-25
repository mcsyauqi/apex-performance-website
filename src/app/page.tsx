"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { classes } from "@/data/classes";
import { trainers } from "@/data/trainers";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
        {/* Background Image */}
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src="/images/hero.svg"
            alt="Gym"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.7) 50%, rgba(10,10,10,0.4) 100%)" }} />
        </div>

        {/* Content */}
        <div className="container" style={{ position: "relative", zIndex: 10, paddingTop: 120, paddingBottom: 80 }}>
          <div style={{ maxWidth: 600 }}>
            <p style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>
              Premium Fitness
            </p>
            <h1 className="heading-font" style={{ fontSize: "clamp(48px, 8vw, 80px)", lineHeight: 1, color: "white", marginBottom: 24 }}>
              UNLEASH
              <br />
              <span className="text-gradient">YOUR POTENTIAL</span>
            </h1>
            <p style={{ color: "#9CA3AF", fontSize: 18, marginBottom: 32, maxWidth: 480 }}>
              Where champions are made. Transform your body and mind with world-class equipment and expert trainers.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/trial" className="btn btn-primary">
                Start Free Trial <ArrowRight size={18} />
              </Link>
              <Link href="/classes" className="btn btn-outline">
                View Classes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ background: "#111", borderTop: "1px solid #222", borderBottom: "1px solid #222" }}>
        <div className="container" style={{ paddingTop: 48, paddingBottom: 48 }}>
          <div className="grid-4" style={{ textAlign: "center" }}>
            {[
              { value: "5,000+", label: "Active Members" },
              { value: "50+", label: "Weekly Classes" },
              { value: "15+", label: "Expert Trainers" },
              { value: "24/7", label: "Access" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="heading-font text-gradient" style={{ fontSize: 36, marginBottom: 4 }}>{stat.value}</p>
                <p style={{ color: "#6B7280", fontSize: 14 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: 64 }}>
            <div>
              <p style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>
                Why APEX
              </p>
              <h2 className="heading-font" style={{ fontSize: 40, color: "white", marginBottom: 24 }}>
                MORE THAN A GYM
              </h2>
              <p style={{ color: "#9CA3AF", fontSize: 16, marginBottom: 24, lineHeight: 1.8 }}>
                APEX Performance is a complete fitness ecosystem designed for your success.
                From state-of-the-art equipment to personalized training programs,
                we provide everything you need to achieve your goals.
              </p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {["World-class equipment", "Expert certified trainers", "50+ weekly group classes", "Recovery & wellness zone"].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, color: "#9CA3AF" }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#EF4444" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ position: "relative", height: 400, borderRadius: 16, overflow: "hidden" }}>
              <Image
                src="/images/gym.svg"
                alt="Gym equipment"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="section" style={{ background: "#111" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
            <div>
              <p style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
                Classes
              </p>
              <h2 className="heading-font" style={{ fontSize: 40, color: "white" }}>
                FIND YOUR WORKOUT
              </h2>
            </div>
            <Link href="/classes" style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
              View All →
            </Link>
          </div>

          <div className="grid-3">
            {classes.slice(0, 6).map((cls) => (
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
                  <h3 className="heading-font" style={{ fontSize: 20, color: "white", marginBottom: 8 }}>{cls.name}</h3>
                  <p style={{ color: "#6B7280", fontSize: 14 }}>{cls.duration} min • {cls.trainer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
              Our Team
            </p>
            <h2 className="heading-font" style={{ fontSize: 40, color: "white" }}>
              EXPERT TRAINERS
            </h2>
          </div>

          <div className="grid-4">
            {trainers.slice(0, 4).map((trainer) => (
              <div key={trainer.id} style={{ textAlign: "center" }}>
                <div style={{ position: "relative", width: "100%", aspectRatio: "3/4", borderRadius: 16, overflow: "hidden", marginBottom: 16 }}>
                  <Image src={trainer.image} alt={trainer.name} fill style={{ objectFit: "cover" }} />
                </div>
                <h3 className="heading-font" style={{ fontSize: 18, color: "white", marginBottom: 4 }}>{trainer.name}</h3>
                <p style={{ color: "#EF4444", fontSize: 14 }}>{trainer.title}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link href="/trainers" className="btn btn-outline">
              Meet All Trainers <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: "linear-gradient(135deg, #EF4444, #F97316)", padding: "80px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="heading-font" style={{ fontSize: 48, color: "white", marginBottom: 16 }}>
            READY TO START?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: 18, marginBottom: 32, maxWidth: 500, margin: "0 auto 32px" }}>
            Your first week is free. No commitment, no pressure – just results.
          </p>
          <Link href="/trial" className="btn" style={{ background: "white", color: "#EF4444" }}>
            Claim Your Free Trial <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
