"use client";

import Link from "next/link";
import { ArrowRight, Star, Dumbbell, Users, Clock, Wifi, Car, ShowerHead, Coffee } from "lucide-react";
import { classes } from "@/data/classes";
import { trainers } from "@/data/trainers";

const testimonials = [
  {
    name: "David Kim",
    role: "Member since 2022",
    text: "APEX completely transformed my life. Lost 30kg in 8 months with their amazing trainers and supportive community.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Member since 2021",
    text: "The best gym I've ever been to. The facilities are top-notch and the trainers really care about your progress.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Member since 2023",
    text: "From a complete beginner to running my first marathon. The trainers at APEX made it possible!",
    rating: 5,
  },
];

const facilities = [
  { icon: Dumbbell, name: "Premium Equipment", desc: "Latest Technogym & Hammer Strength" },
  { icon: Users, name: "Group Studios", desc: "3 dedicated class studios" },
  { icon: Clock, name: "24/7 Access", desc: "Train anytime, any day" },
  { icon: Wifi, name: "Free WiFi", desc: "Stay connected" },
  { icon: Car, name: "Free Parking", desc: "100+ parking spots" },
  { icon: ShowerHead, name: "Luxury Locker Rooms", desc: "Sauna & steam rooms" },
  { icon: Coffee, name: "Juice Bar", desc: "Healthy refreshments" },
  { icon: Star, name: "Recovery Zone", desc: "Massage & stretching area" },
];

const faqs = [
  {
    q: "What are your opening hours?",
    a: "We're open 24/7 for Premium and Elite members. Standard members have access from 5 AM to 11 PM.",
  },
  {
    q: "Do you offer personal training?",
    a: "Yes! All our trainers are certified professionals. You can book 1-on-1 sessions or join small group training.",
  },
  {
    q: "Is there a joining fee?",
    a: "We occasionally waive joining fees during promotions. Contact us or sign up for a free trial to learn about current offers.",
  },
  {
    q: "Can I freeze my membership?",
    a: "Yes, you can freeze your membership for up to 3 months per year for medical or travel reasons.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img
            src="/images/hero.svg"
            alt="Gym"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.7) 50%, rgba(10,10,10,0.4) 100%)" }} />
        </div>

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
              <ul style={{ listStyle: "none", padding: 0, marginBottom: 32 }}>
                {["World-class equipment", "Expert certified trainers", "50+ weekly group classes", "Recovery & wellness zone"].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, color: "#9CA3AF" }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#EF4444" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/membership" className="btn btn-primary">
                View Membership Plans <ArrowRight size={18} />
              </Link>
            </div>
            <div style={{ position: "relative", height: 400, borderRadius: 16, overflow: "hidden" }}>
              <img
                src="/images/gym.svg"
                alt="Gym equipment"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="section" style={{ background: "#111" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
              Facilities
            </p>
            <h2 className="heading-font" style={{ fontSize: 40, color: "white", marginBottom: 16 }}>
              WORLD-CLASS AMENITIES
            </h2>
            <p style={{ color: "#9CA3AF", fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
              Everything you need for the ultimate fitness experience, all under one roof.
            </p>
          </div>

          <div className="grid-4">
            {facilities.map((facility) => (
              <div key={facility.name} className="card" style={{ padding: 24, textAlign: "center" }}>
                <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(239,68,68,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <facility.icon size={28} color="#EF4444" />
                </div>
                <h3 className="heading-font" style={{ fontSize: 16, color: "white", marginBottom: 8 }}>{facility.name}</h3>
                <p style={{ color: "#6B7280", fontSize: 14 }}>{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="section">
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
              View All Classes →
            </Link>
          </div>

          <div className="grid-3">
            {classes.slice(0, 6).map((cls) => (
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
                  <h3 className="heading-font" style={{ fontSize: 20, color: "white", marginBottom: 8 }}>{cls.name}</h3>
                  <p style={{ color: "#6B7280", fontSize: 14, marginBottom: 12 }}>{cls.shortDescription}</p>
                  <p style={{ color: "#9CA3AF", fontSize: 13 }}>{cls.duration} min • {cls.trainer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="section" style={{ background: "#111" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
              Our Team
            </p>
            <h2 className="heading-font" style={{ fontSize: 40, color: "white", marginBottom: 16 }}>
              EXPERT TRAINERS
            </h2>
            <p style={{ color: "#9CA3AF", fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
              Our certified professionals are dedicated to helping you achieve your fitness goals.
            </p>
          </div>

          <div className="grid-4">
            {trainers.slice(0, 4).map((trainer) => (
              <div key={trainer.id} style={{ textAlign: "center" }}>
                <div style={{ width: "100%", aspectRatio: "3/4", borderRadius: 16, overflow: "hidden", marginBottom: 16 }}>
                  <img src={trainer.image} alt={trainer.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <h3 className="heading-font" style={{ fontSize: 18, color: "white", marginBottom: 4 }}>{trainer.name}</h3>
                <p style={{ color: "#EF4444", fontSize: 14, marginBottom: 8 }}>{trainer.title}</p>
                <p style={{ color: "#6B7280", fontSize: 13 }}>{trainer.experience}+ years experience</p>
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

      {/* Testimonials Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
              Testimonials
            </p>
            <h2 className="heading-font" style={{ fontSize: 40, color: "white", marginBottom: 16 }}>
              SUCCESS STORIES
            </h2>
            <p style={{ color: "#9CA3AF", fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
              Hear from our members who have transformed their lives at APEX Performance.
            </p>
          </div>

          <div className="grid-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="card" style={{ padding: 32 }}>
                <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#EF4444" color="#EF4444" />
                  ))}
                </div>
                <p style={{ color: "#9CA3AF", fontSize: 15, lineHeight: 1.7, marginBottom: 24, fontStyle: "italic" }}>
                  "{testimonial.text}"
                </p>
                <div>
                  <p style={{ color: "white", fontWeight: 600 }}>{testimonial.name}</p>
                  <p style={{ color: "#6B7280", fontSize: 13 }}>{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Preview Section */}
      <section className="section" style={{ background: "#111" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
              Membership
            </p>
            <h2 className="heading-font" style={{ fontSize: 40, color: "white", marginBottom: 16 }}>
              CHOOSE YOUR PLAN
            </h2>
          </div>

          <div className="grid-3">
            {[
              { name: "Basic", price: "29", features: ["Gym access (5AM-11PM)", "Locker room access", "Free WiFi"] },
              { name: "Premium", price: "59", popular: true, features: ["24/7 gym access", "All group classes", "Locker room + sauna", "1 PT session/month"] },
              { name: "Elite", price: "99", features: ["Everything in Premium", "Unlimited PT sessions", "Nutrition coaching", "Priority booking"] },
            ].map((plan) => (
              <div
                key={plan.name}
                className="card"
                style={{
                  padding: 32,
                  textAlign: "center",
                  border: plan.popular ? "2px solid #EF4444" : "1px solid #222",
                  position: "relative"
                }}
              >
                {plan.popular && (
                  <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "#EF4444", color: "white", padding: "4px 16px", borderRadius: 20, fontSize: 12, fontWeight: 600 }}>
                    MOST POPULAR
                  </div>
                )}
                <h3 className="heading-font" style={{ fontSize: 24, color: "white", marginBottom: 8 }}>{plan.name}</h3>
                <div style={{ marginBottom: 24 }}>
                  <span style={{ color: "#EF4444", fontSize: 48, fontWeight: 700 }}>${plan.price}</span>
                  <span style={{ color: "#6B7280" }}>/month</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, marginBottom: 24, textAlign: "left" }}>
                  {plan.features.map((feature) => (
                    <li key={feature} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, color: "#9CA3AF", fontSize: 14 }}>
                      <span style={{ color: "#22C55E" }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/membership"
                  className={plan.popular ? "btn btn-primary" : "btn btn-outline"}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Choose Plan
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/membership" style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
              Compare All Plans →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
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
                Can't find the answer you're looking for? Feel free to contact us and we'll be happy to help.
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

      {/* CTA Section */}
      <section style={{ background: "linear-gradient(135deg, #EF4444, #F97316)", padding: "80px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="heading-font" style={{ fontSize: 48, color: "white", marginBottom: 16 }}>
            READY TO START?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: 18, marginBottom: 32, maxWidth: 500, margin: "0 auto 32px" }}>
            Your first week is free. No commitment, no pressure – just results.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/trial" className="btn" style={{ background: "white", color: "#EF4444" }}>
              Claim Your Free Trial <ArrowRight size={18} />
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
