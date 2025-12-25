"use client";

import Link from "next/link";
import { ArrowRight, Star, Dumbbell, Users, Clock, Wifi, Car, ShowerHead, Coffee, Smartphone, Apple, Play, Target, Trophy, Flame, Calendar, Camera, MapPin, Mail, ChevronRight, Utensils, Heart, Zap, Award, Crown, Medal, TrendingUp, Check } from "lucide-react";
import { classes } from "@/data/classes";
import { trainers } from "@/data/trainers";

const transformations = [
  {
    name: "Alex Thompson",
    duration: "6 months",
    weightLoss: "25kg",
    beforeText: "Struggled with weight for years",
    afterText: "Now runs marathons",
    quote: "APEX gave me the tools and support to completely transform my life.",
  },
  {
    name: "Jennifer Liu",
    duration: "8 months",
    weightLoss: "18kg",
    beforeText: "No fitness experience",
    afterText: "Certified yoga instructor",
    quote: "Started as a complete beginner, now I teach classes here!",
  },
  {
    name: "Robert Martinez",
    duration: "12 months",
    weightLoss: "40kg",
    beforeText: "Pre-diabetic condition",
    afterText: "Healthiest ever at 45",
    quote: "My doctor couldn't believe my transformation. APEX saved my life.",
  },
];

const appFeatures = [
  { icon: Calendar, title: "Book Classes", desc: "Reserve your spot in any class with one tap" },
  { icon: TrendingUp, title: "Track Progress", desc: "Monitor your workouts, weight, and goals" },
  { icon: Trophy, title: "Earn Rewards", desc: "Collect points and unlock exclusive perks" },
  { icon: Users, title: "Connect", desc: "Join challenges and connect with members" },
];

const nutritionPlans = [
  { name: "Weight Loss", icon: Flame, color: "#EF4444", desc: "Calorie-controlled meals for sustainable fat loss" },
  { name: "Muscle Gain", icon: Dumbbell, color: "#F97316", desc: "High-protein plans to build lean muscle" },
  { name: "Performance", icon: Zap, color: "#3B82F6", desc: "Optimized nutrition for peak athletic performance" },
  { name: "Wellness", icon: Heart, color: "#22C55E", desc: "Balanced nutrition for overall health" },
];

const events = [
  { title: "Summer Shred Challenge", date: "Jan 15 - Mar 15", participants: 234, type: "Challenge" },
  { title: "Charity 5K Run", date: "Feb 20", participants: 150, type: "Event" },
  { title: "Member Appreciation Day", date: "Mar 1", participants: 500, type: "Social" },
  { title: "CrossFit Competition", date: "Mar 15", participants: 80, type: "Competition" },
];

const partners = [
  { name: "Nike", category: "Apparel" },
  { name: "Under Armour", category: "Apparel" },
  { name: "Technogym", category: "Equipment" },
  { name: "Hammer Strength", category: "Equipment" },
  { name: "MyFitnessPal", category: "Technology" },
  { name: "Whoop", category: "Wearables" },
];

const blogPosts = [
  { title: "5 Best Exercises for Core Strength", category: "Training", readTime: "5 min", date: "Dec 20, 2024" },
  { title: "Pre-Workout Nutrition Guide", category: "Nutrition", readTime: "7 min", date: "Dec 18, 2024" },
  { title: "How to Stay Motivated in Winter", category: "Mindset", readTime: "4 min", date: "Dec 15, 2024" },
];

const galleryImages = [
  { title: "Weight Room", color: "#EF4444" },
  { title: "Cardio Zone", color: "#F97316" },
  { title: "Yoga Studio", color: "#22C55E" },
  { title: "Boxing Ring", color: "#EF4444" },
  { title: "Spin Studio", color: "#3B82F6" },
  { title: "Recovery Area", color: "#A855F7" },
];

const achievements = [
  { icon: Flame, name: "First Workout", desc: "Complete your first session", color: "#EF4444" },
  { icon: Target, name: "Goal Setter", desc: "Set your first fitness goal", color: "#F97316" },
  { icon: Calendar, name: "Consistent", desc: "Work out 10 days in a row", color: "#22C55E" },
  { icon: Trophy, name: "Class Master", desc: "Attend 50 group classes", color: "#3B82F6" },
  { icon: Crown, name: "Elite Member", desc: "1 year membership milestone", color: "#A855F7" },
  { icon: Medal, name: "Champion", desc: "Win a fitness challenge", color: "#EAB308" },
];

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
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2000' height='1200'%3E%3Crect fill='%231a1a1a' width='2000' height='1200'/%3E%3Crect x='1400' y='400' width='300' height='20' rx='10' fill='%23EF4444' opacity='0.3'/%3E%3Crect x='1380' y='380' width='40' height='60' rx='8' fill='%23EF4444' opacity='0.3'/%3E%3Crect x='1680' y='380' width='40' height='60' rx='8' fill='%23EF4444' opacity='0.3'/%3E%3Ccircle cx='1550' cy='600' r='100' fill='none' stroke='%23EF4444' stroke-width='8' opacity='0.2'/%3E%3Ccircle cx='1550' cy='600' r='60' fill='none' stroke='%23EF4444' stroke-width='8' opacity='0.2'/%3E%3Crect x='1500' y='750' width='100' height='200' rx='10' fill='%23EF4444' opacity='0.15'/%3E%3Crect x='1620' y='800' width='80' height='150' rx='10' fill='%23EF4444' opacity='0.15'/%3E%3C/svg%3E"
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
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%231a1a1a' width='800' height='600'/%3E%3Crect fill='%23EF4444' opacity='0.05' width='800' height='600'/%3E%3Crect x='200' y='280' width='150' height='20' rx='5' fill='%23EF4444'/%3E%3Crect x='175' y='255' width='35' height='70' rx='8' fill='%23EF4444'/%3E%3Crect x='340' y='255' width='35' height='70' rx='8' fill='%23EF4444'/%3E%3Ccircle cx='550' cy='320' r='60' fill='%23F97316'/%3E%3Cellipse cx='550' cy='240' rx='30' ry='25' fill='none' stroke='%23F97316' stroke-width='14'/%3E%3Ctext x='400' y='450' text-anchor='middle' fill='white' font-family='sans-serif' font-size='28' font-weight='bold'%3EAPEX PERFORMANCE%3C/text%3E%3Ctext x='400' y='490' text-anchor='middle' fill='%236B7280' font-family='sans-serif' font-size='16'%3EWorld-Class Fitness%3C/text%3E%3C/svg%3E"
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

      {/* Transformation Stories Section */}
      <section className="section" style={{ background: "#111" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
              Real Results
            </p>
            <h2 className="heading-font" style={{ fontSize: 40, color: "white", marginBottom: 16 }}>
              TRANSFORMATION STORIES
            </h2>
            <p style={{ color: "#9CA3AF", fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
              See how our members achieved incredible results with dedication and our expert guidance.
            </p>
          </div>

          <div className="grid-3">
            {transformations.map((t) => (
              <div key={t.name} className="card" style={{ padding: 0, overflow: "hidden" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", height: 200 }}>
                  <div style={{ background: "#1a1a1a", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 16, borderRight: "1px solid #333" }}>
                    <p style={{ color: "#6B7280", fontSize: 12, textTransform: "uppercase", marginBottom: 8 }}>Before</p>
                    <div style={{ width: 60, height: 60, borderRadius: "50%", background: "#333", marginBottom: 8 }} />
                    <p style={{ color: "#9CA3AF", fontSize: 11, textAlign: "center" }}>{t.beforeText}</p>
                  </div>
                  <div style={{ background: "linear-gradient(135deg, rgba(239,68,68,0.1), rgba(249,115,22,0.1))", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 16 }}>
                    <p style={{ color: "#22C55E", fontSize: 12, textTransform: "uppercase", marginBottom: 8 }}>After</p>
                    <div style={{ width: 60, height: 60, borderRadius: "50%", background: "linear-gradient(135deg, #EF4444, #F97316)", marginBottom: 8 }} />
                    <p style={{ color: "#22C55E", fontSize: 11, textAlign: "center" }}>{t.afterText}</p>
                  </div>
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                    <span style={{ color: "#EF4444", fontWeight: 700, fontSize: 24 }}>-{t.weightLoss}</span>
                    <span style={{ color: "#6B7280", fontSize: 14 }}>{t.duration}</span>
                  </div>
                  <p style={{ color: "#9CA3AF", fontSize: 14, fontStyle: "italic", marginBottom: 16 }}>"{t.quote}"</p>
                  <p style={{ color: "white", fontWeight: 600 }}>{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APEX App Section */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: 64 }}>
            <div>
              <p style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
                Mobile App
              </p>
              <h2 className="heading-font" style={{ fontSize: 40, color: "white", marginBottom: 16 }}>
                TRAIN SMARTER WITH THE APEX APP
              </h2>
              <p style={{ color: "#9CA3AF", fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>
                Your fitness journey in your pocket. Book classes, track progress, earn rewards, and connect with the APEX community.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
                {appFeatures.map((feature) => (
                  <div key={feature.title} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{ width: 40, height: 40, borderRadius: 8, background: "rgba(239,68,68,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <feature.icon size={20} color="#EF4444" />
                    </div>
                    <div>
                      <p style={{ color: "white", fontWeight: 600, marginBottom: 4 }}>{feature.title}</p>
                      <p style={{ color: "#6B7280", fontSize: 13 }}>{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 12 }}>
                <button style={{ display: "flex", alignItems: "center", gap: 8, background: "#1a1a1a", border: "1px solid #333", borderRadius: 8, padding: "12px 20px", cursor: "pointer" }}>
                  <Apple size={24} color="white" />
                  <div style={{ textAlign: "left" }}>
                    <p style={{ color: "#6B7280", fontSize: 10 }}>Download on the</p>
                    <p style={{ color: "white", fontWeight: 600 }}>App Store</p>
                  </div>
                </button>
                <button style={{ display: "flex", alignItems: "center", gap: 8, background: "#1a1a1a", border: "1px solid #333", borderRadius: 8, padding: "12px 20px", cursor: "pointer" }}>
                  <Play size={24} color="white" />
                  <div style={{ textAlign: "left" }}>
                    <p style={{ color: "#6B7280", fontSize: 10 }}>Get it on</p>
                    <p style={{ color: "white", fontWeight: 600 }}>Google Play</p>
                  </div>
                </button>
              </div>
            </div>
            <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
              <div style={{ width: 280, height: 560, background: "#1a1a1a", borderRadius: 40, border: "4px solid #333", padding: 12, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}>
                <div style={{ width: "100%", height: "100%", background: "linear-gradient(180deg, #EF4444 0%, #F97316 100%)", borderRadius: 28, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24 }}>
                  <Dumbbell size={48} color="white" style={{ marginBottom: 16 }} />
                  <p style={{ color: "white", fontWeight: 700, fontSize: 24, marginBottom: 8 }}>APEX</p>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 14 }}>Performance App</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition Programs Section */}
      <section className="section" style={{ background: "#111" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
              Nutrition
            </p>
            <h2 className="heading-font" style={{ fontSize: 40, color: "white", marginBottom: 16 }}>
              FUEL YOUR PERFORMANCE
            </h2>
            <p style={{ color: "#9CA3AF", fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
              Customized meal plans designed by our certified nutritionists to complement your training.
            </p>
          </div>

          <div className="grid-4">
            {nutritionPlans.map((plan) => (
              <div key={plan.name} className="card" style={{ padding: 32, textAlign: "center" }}>
                <div style={{ width: 80, height: 80, borderRadius: "50%", background: `${plan.color}15`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <plan.icon size={36} color={plan.color} />
                </div>
                <h3 className="heading-font" style={{ fontSize: 20, color: "white", marginBottom: 12 }}>{plan.name}</h3>
                <p style={{ color: "#6B7280", fontSize: 14, lineHeight: 1.6 }}>{plan.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <div className="card" style={{ display: "inline-flex", alignItems: "center", gap: 24, padding: "20px 40px" }}>
              <Utensils size={24} color="#EF4444" />
              <div style={{ textAlign: "left" }}>
                <p style={{ color: "white", fontWeight: 600 }}>Free Nutrition Consultation</p>
                <p style={{ color: "#6B7280", fontSize: 14 }}>Included with Premium & Elite memberships</p>
              </div>
              <Link href="/membership" className="btn btn-primary" style={{ marginLeft: 16 }}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Events Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
              Community
            </p>
            <h2 className="heading-font" style={{ fontSize: 40, color: "white", marginBottom: 16 }}>
              JOIN THE MOVEMENT
            </h2>
            <p style={{ color: "#9CA3AF", fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
              More than a gym – we're a community. Join challenges, events, and connect with like-minded fitness enthusiasts.
            </p>
          </div>

          <div className="grid-2" style={{ gap: 24 }}>
            {events.map((event) => (
              <div key={event.title} className="card" style={{ padding: 0, overflow: "hidden", display: "flex" }}>
                <div style={{ width: 120, background: "linear-gradient(135deg, #EF4444, #F97316)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 16 }}>
                  <Calendar size={32} color="white" style={{ marginBottom: 8 }} />
                  <p style={{ color: "white", fontSize: 12, textAlign: "center", fontWeight: 600 }}>{event.date}</p>
                </div>
                <div style={{ flex: 1, padding: 24, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <span style={{ display: "inline-block", background: "rgba(239,68,68,0.1)", color: "#EF4444", padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600, marginBottom: 8 }}>
                      {event.type}
                    </span>
                    <h3 className="heading-font" style={{ fontSize: 20, color: "white", marginBottom: 8 }}>{event.title}</h3>
                    <p style={{ color: "#6B7280", fontSize: 14 }}>
                      <Users size={14} style={{ display: "inline", marginRight: 6 }} />
                      {event.participants} participants
                    </p>
                  </div>
                  <ChevronRight size={24} color="#6B7280" />
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/contact" className="btn btn-outline">
              View All Events <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Brands Section */}
      <section className="section" style={{ background: "#111" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
              Partners
            </p>
            <h2 className="heading-font" style={{ fontSize: 40, color: "white", marginBottom: 16 }}>
              TRUSTED BY THE BEST
            </h2>
            <p style={{ color: "#9CA3AF", fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
              We partner with world-class brands to bring you the best equipment and experience.
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 32 }}>
            {partners.map((partner) => (
              <div key={partner.name} style={{ width: 160, padding: 24, background: "#1a1a1a", borderRadius: 12, border: "1px solid #222", textAlign: "center" }}>
                <div style={{ width: 60, height: 60, borderRadius: "50%", background: "linear-gradient(135deg, #333, #222)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                  <Award size={28} color="#9CA3AF" />
                </div>
                <p style={{ color: "white", fontWeight: 600, marginBottom: 4 }}>{partner.name}</p>
                <p style={{ color: "#6B7280", fontSize: 12 }}>{partner.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
            <div>
              <p style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
                Blog
              </p>
              <h2 className="heading-font" style={{ fontSize: 40, color: "white" }}>
                FITNESS TIPS & INSIGHTS
              </h2>
            </div>
            <Link href="/contact" style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
              View All Articles →
            </Link>
          </div>

          <div className="grid-3">
            {blogPosts.map((post) => (
              <div key={post.title} className="card" style={{ padding: 0, overflow: "hidden" }}>
                <div style={{ height: 160, background: "linear-gradient(135deg, #1a1a1a, #222)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Camera size={48} color="#333" />
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                    <span style={{ background: "rgba(239,68,68,0.1)", color: "#EF4444", padding: "4px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600 }}>
                      {post.category}
                    </span>
                    <span style={{ color: "#6B7280", fontSize: 12 }}>{post.readTime}</span>
                  </div>
                  <h3 style={{ color: "white", fontSize: 18, fontWeight: 600, marginBottom: 12, lineHeight: 1.4 }}>{post.title}</h3>
                  <p style={{ color: "#6B7280", fontSize: 13 }}>{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="section" style={{ background: "#111" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
              Gallery
            </p>
            <h2 className="heading-font" style={{ fontSize: 40, color: "white", marginBottom: 16 }}>
              TAKE A LOOK INSIDE
            </h2>
            <p style={{ color: "#9CA3AF", fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
              Explore our state-of-the-art facilities designed for peak performance.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(2, 200px)", gap: 16 }}>
            {galleryImages.map((img, i) => (
              <div
                key={img.title}
                style={{
                  gridColumn: i === 0 ? "span 2" : "span 1",
                  gridRow: i === 0 ? "span 2" : "span 1",
                  borderRadius: 16,
                  overflow: "hidden",
                  position: "relative",
                  background: `linear-gradient(135deg, ${img.color}20, ${img.color}05)`,
                  border: "1px solid #222",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Camera size={i === 0 ? 64 : 32} color={img.color} style={{ opacity: 0.3 }} />
                <div style={{ position: "absolute", bottom: 16, left: 16, right: 16 }}>
                  <p style={{ color: "white", fontWeight: 600, fontSize: i === 0 ? 18 : 14 }}>{img.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/contact" className="btn btn-outline">
              <Camera size={18} /> View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Achievement Badges Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
              Gamification
            </p>
            <h2 className="heading-font" style={{ fontSize: 40, color: "white", marginBottom: 16 }}>
              EARN ACHIEVEMENTS
            </h2>
            <p style={{ color: "#9CA3AF", fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
              Stay motivated by unlocking badges and earning rewards as you progress on your fitness journey.
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 24 }}>
            {achievements.map((badge) => (
              <div key={badge.name} style={{ width: 160, textAlign: "center" }}>
                <div style={{ width: 100, height: 100, borderRadius: "50%", background: `${badge.color}15`, border: `2px solid ${badge.color}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <badge.icon size={40} color={badge.color} />
                </div>
                <h3 style={{ color: "white", fontWeight: 600, marginBottom: 4 }}>{badge.name}</h3>
                <p style={{ color: "#6B7280", fontSize: 12 }}>{badge.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <div className="card" style={{ display: "inline-block", padding: "24px 48px", background: "linear-gradient(135deg, rgba(239,68,68,0.1), rgba(249,115,22,0.1))", border: "1px solid rgba(239,68,68,0.3)" }}>
              <p style={{ color: "#EF4444", fontSize: 32, fontWeight: 700, marginBottom: 8 }}>50+</p>
              <p style={{ color: "#9CA3AF" }}>Achievements to Unlock</p>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="section" style={{ background: "#111" }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: 64 }}>
            <div style={{ position: "relative", height: 400, borderRadius: 16, overflow: "hidden", background: "linear-gradient(135deg, #1a1a1a, #222)", border: "1px solid #333" }}>
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 100, height: 100, borderRadius: "50%", background: "rgba(239,68,68,0.1)", border: "2px solid #EF4444", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, cursor: "pointer" }}>
                  <Play size={40} color="#EF4444" />
                </div>
                <p style={{ color: "white", fontWeight: 600, fontSize: 18 }}>360° Virtual Tour</p>
                <p style={{ color: "#6B7280", marginTop: 8 }}>Click to explore</p>
              </div>
              <div style={{ position: "absolute", top: 16, right: 16, background: "rgba(239,68,68,0.9)", padding: "6px 12px", borderRadius: 20 }}>
                <p style={{ color: "white", fontSize: 12, fontWeight: 600 }}>INTERACTIVE</p>
              </div>
            </div>
            <div>
              <p style={{ color: "#EF4444", fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
                Virtual Tour
              </p>
              <h2 className="heading-font" style={{ fontSize: 40, color: "white", marginBottom: 16 }}>
                EXPLORE OUR FACILITY
              </h2>
              <p style={{ color: "#9CA3AF", fontSize: 16, marginBottom: 24, lineHeight: 1.7 }}>
                Can't visit in person? Take a virtual tour of our 50,000 sq ft facility. Explore the weight room, cardio zone, studios, and more.
              </p>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: 32 }}>
                {["Weight Room - 200+ machines", "3 Group Fitness Studios", "Olympic Swimming Pool", "Recovery & Spa Zone", "Rooftop Training Area"].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, color: "#9CA3AF" }}>
                    <Check size={18} color="#22C55E" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/trial" className="btn btn-primary">
                Book In-Person Tour <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
            <div style={{ width: 80, height: 80, borderRadius: "50%", background: "rgba(239,68,68,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
              <Mail size={36} color="#EF4444" />
            </div>
            <h2 className="heading-font" style={{ fontSize: 40, color: "white", marginBottom: 16 }}>
              STAY IN THE LOOP
            </h2>
            <p style={{ color: "#9CA3AF", fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>
              Get fitness tips, exclusive offers, and updates on new classes and events. No spam, unsubscribe anytime.
            </p>
            <div style={{ display: "flex", gap: 12, maxWidth: 500, margin: "0 auto" }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  padding: "16px 20px",
                  borderRadius: 8,
                  border: "1px solid #333",
                  background: "#1a1a1a",
                  color: "white",
                  fontSize: 16,
                  outline: "none",
                }}
              />
              <button className="btn btn-primary" style={{ whiteSpace: "nowrap" }}>
                Subscribe
              </button>
            </div>
            <p style={{ color: "#6B7280", fontSize: 13, marginTop: 16 }}>
              Join 10,000+ subscribers. We respect your privacy.
            </p>
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
