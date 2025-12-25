"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Crown, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { membershipPlans } from "@/data/membership";
import { formatCurrency } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function MembershipPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <main className="bg-deep-black min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-power-red text-sm font-bold tracking-[0.3em] uppercase">Memberships</span>
            <h1 className="heading-font text-5xl lg:text-7xl font-black text-pure-white mt-4 mb-6">
              INVEST IN
              <br />
              <span className="text-gradient">YOURSELF</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Choose the plan that fits your lifestyle. Upgrade or downgrade anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Toggle */}
      <section className="px-8 lg:px-16 pb-8">
        <div className="max-w-4xl mx-auto flex justify-center">
          <div className="bg-card border border-border rounded-full p-1 inline-flex">
            <button
              onClick={() => setAnnual(false)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                !annual ? "bg-power-red text-white" : "text-gray-400"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                annual ? "bg-power-red text-white" : "text-gray-400"
              )}
            >
              Annual <span className="text-success-green ml-1">-20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards - Horizontal */}
      <section className="px-8 lg:px-16 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {membershipPlans.map((plan, i) => {
              const price = annual ? Math.floor(plan.price * 12 * 0.8) : plan.price;
              const Icon = plan.id === "elite" ? Crown : plan.id === "pro" ? Zap : Dumbbell;

              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={cn(
                    "relative rounded-3xl overflow-hidden",
                    plan.highlighted
                      ? "bg-gradient-to-b from-power-red/20 to-card border-2 border-power-red"
                      : "bg-card border border-border"
                  )}
                >
                  {plan.highlighted && (
                    <div className="absolute top-0 left-0 right-0 bg-power-red text-center py-2 text-xs font-bold text-white uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}

                  <div className={cn("p-8", plan.highlighted && "pt-14")}>
                    <div className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center mb-6",
                      plan.highlighted
                        ? "bg-power-red"
                        : "bg-gradient-to-br from-power-red/20 to-electric-orange/20"
                    )}>
                      <Icon className={cn("w-7 h-7", plan.highlighted ? "text-white" : "text-power-red")} />
                    </div>

                    <h3 className="heading-font text-2xl font-bold text-pure-white mb-2">{plan.name}</h3>
                    <p className="text-gray-500 text-sm mb-6">{plan.description}</p>

                    <div className="mb-8">
                      <span className="heading-font text-5xl font-black text-pure-white">
                        {formatCurrency(price)}
                      </span>
                      <span className="text-gray-500 ml-2">/{annual ? "year" : "month"}</span>
                    </div>

                    <Link href="/trial">
                      <Button
                        fullWidth
                        variant={plan.highlighted ? "primary" : "outline"}
                        className="mb-8"
                      >
                        Get Started
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>

                    <ul className="space-y-3">
                      {plan.features.map(feature => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-success-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-success-green" />
                          </div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-8 lg:px-16 py-20 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-font text-3xl font-bold text-pure-white text-center mb-12">
            Common Questions
          </h2>

          <div className="space-y-4">
            {[
              { q: "Can I switch plans?", a: "Yes, upgrade or downgrade anytime. Changes apply at next billing cycle." },
              { q: "Is there a contract?", a: "No contracts. Cancel anytime with 30-day notice." },
              { q: "What's included in the free trial?", a: "Full access to facilities, classes, and one personal training session." },
              { q: "Do you offer corporate rates?", a: "Yes! Contact us for groups of 10+ employees." },
            ].map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <h3 className="text-pure-white font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
