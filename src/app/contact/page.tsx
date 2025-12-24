"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["123 Fitness Street, Sudirman Central", "Jakarta 12190, Indonesia"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+62 21 1234 5678", "+62 812 3456 7890 (WhatsApp)"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@apexperformance.com", "membership@apexperformance.com"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: [
      "Mon-Fri: 6:00 AM - 11:00 PM",
      "Sat-Sun: 7:00 AM - 9:00 PM",
      "Elite Members: 24/7 Access",
    ],
  },
];

const socialLinks = [
  { name: "Instagram", icon: Instagram, handle: "@apexperformance" },
  { name: "Facebook", icon: Facebook, handle: "APEX Performance" },
  { name: "Twitter", icon: Twitter, handle: "@apexfit" },
  { name: "YouTube", icon: Youtube, handle: "APEX Performance" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-deep-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-power-red/10 rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-[family-name:var(--font-oswald)] text-5xl md:text-7xl font-bold text-pure-white mb-6">
              GET IN
              <br />
              <span className="text-gradient">TOUCH</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have questions? We&apos;re here to help. Reach out to our team
              and we&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-deep-black border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-power-red/10 flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-power-red" />
                </div>
                <h3 className="font-semibold text-pure-white mb-2">
                  {info.title}
                </h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-400 text-sm">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-deep-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-[family-name:var(--font-oswald)] text-3xl font-bold text-pure-white mb-6">
                Send Us a Message
              </h2>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-card border border-border text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success-green/20 flex items-center justify-center">
                    <Send className="w-8 h-8 text-success-green" />
                  </div>
                  <h3 className="text-xl font-semibold text-pure-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Thank you for reaching out. We&apos;ll get back to you
                    within 24 hours.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 bg-card border border-border rounded-xl text-pure-white placeholder:text-gray-600 focus:outline-none focus:border-power-red transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 bg-card border border-border rounded-xl text-pure-white placeholder:text-gray-600 focus:outline-none focus:border-power-red transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            phone: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 bg-card border border-border rounded-xl text-pure-white placeholder:text-gray-600 focus:outline-none focus:border-power-red transition-colors"
                        placeholder="+62 812 3456 7890"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Subject *
                      </label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            subject: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 bg-card border border-border rounded-xl text-pure-white focus:outline-none focus:border-power-red transition-colors appearance-none"
                      >
                        <option value="">Select a subject</option>
                        <option value="membership">Membership Inquiry</option>
                        <option value="classes">Classes Information</option>
                        <option value="training">Personal Training</option>
                        <option value="corporate">Corporate Wellness</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 bg-card border border-border rounded-xl text-pure-white placeholder:text-gray-600 focus:outline-none focus:border-power-red transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <Button type="submit" size="lg" loading={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send className="ml-2 w-5 h-5" />}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-[family-name:var(--font-oswald)] text-3xl font-bold text-pure-white mb-6">
                Find Us
              </h2>

              <div className="relative h-[400px] rounded-2xl overflow-hidden bg-card border border-border mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-power-red/10 to-electric-orange/10 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-4 text-power-red" />
                    <p className="text-gray-400">Interactive Map</p>
                    <p className="text-sm text-gray-500">
                      (Map would be embedded here)
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold text-pure-white mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      className="flex items-center space-x-2 p-3 rounded-xl bg-card border border-border hover:border-power-red transition-colors"
                    >
                      <social.icon className="w-5 h-5 text-power-red" />
                      <span className="text-sm text-gray-400 hidden md:inline">
                        {social.handle}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="QUICK ANSWERS"
            subtitle="Common questions answered"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "What are your operating hours?",
                a: "We're open Monday-Friday 6AM-11PM, weekends 7AM-9PM. Elite members enjoy 24/7 access.",
              },
              {
                q: "Is parking available?",
                a: "Yes! We offer free parking for all members. VIP parking is available for Elite members.",
              },
              {
                q: "Do you offer day passes?",
                a: "We offer a 7-day free trial for new visitors. Day passes are available for Rp 150,000.",
              },
              {
                q: "Can I bring a guest?",
                a: "Performance members get 2 guest passes/month. Elite members have unlimited guest access.",
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-deep-black border border-border"
              >
                <h3 className="font-semibold text-pure-white mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
