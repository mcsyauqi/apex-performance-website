"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Check, Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <main className="bg-deep-black min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl"
          >
            <span className="text-power-red text-sm font-bold tracking-[0.3em] uppercase">Contact</span>
            <h1 className="heading-font text-5xl lg:text-7xl font-black text-pure-white mt-4 mb-6">
              LET&apos;S
              <br />
              <span className="text-gradient">TALK</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Questions? We&apos;re here to help. Reach out and we&apos;ll respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="px-8 lg:px-16 pb-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {sent ? (
              <div className="bg-card border border-border rounded-3xl p-12 text-center">
                <div className="w-16 h-16 bg-success-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-success-green" />
                </div>
                <h3 className="heading-font text-2xl font-bold text-pure-white mb-3">Message Sent!</h3>
                <p className="text-gray-400 mb-6">We&apos;ll get back to you within 24 hours.</p>
                <Button onClick={() => setSent(false)}>Send Another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    className="w-full px-5 py-4 bg-card border border-border rounded-2xl text-pure-white placeholder:text-gray-600 focus:outline-none focus:border-power-red transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                    className="w-full px-5 py-4 bg-card border border-border rounded-2xl text-pure-white placeholder:text-gray-600 focus:outline-none focus:border-power-red transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    className="w-full px-5 py-4 bg-card border border-border rounded-2xl text-pure-white placeholder:text-gray-600 focus:outline-none focus:border-power-red transition-colors resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                <Button type="submit" size="lg" loading={loading} className="w-full">
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && <Send className="ml-2 w-5 h-5" />}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: MapPin, label: "Location", value: "123 Fitness Street\nJakarta 12190" },
                { icon: Phone, label: "Phone", value: "+62 21 1234 5678\n+62 812 3456 7890" },
                { icon: Mail, label: "Email", value: "hello@apex.com\nmembership@apex.com" },
                { icon: Clock, label: "Hours", value: "Mon-Fri: 6AM-11PM\nSat-Sun: 7AM-9PM" },
              ].map(item => (
                <div key={item.label} className="bg-card border border-border rounded-2xl p-5">
                  <div className="w-10 h-10 bg-power-red/10 rounded-xl flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-power-red" />
                  </div>
                  <h4 className="text-pure-white font-semibold text-sm mb-1">{item.label}</h4>
                  <p className="text-gray-500 text-xs whitespace-pre-line">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-card border border-border rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-10 h-10 text-power-red mx-auto mb-3" />
                <p className="text-gray-500 text-sm">Interactive Map</p>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-pure-white font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {[Instagram, Facebook, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center hover:border-power-red transition-colors"
                  >
                    <Icon className="w-5 h-5 text-gray-400" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
