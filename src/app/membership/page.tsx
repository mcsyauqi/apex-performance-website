"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  X,
  ArrowRight,
  Dumbbell,
  Users,
  Calendar,
  Heart,
  Zap,
  Crown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { membershipPlans, membershipBenefits } from "@/data/membership";
import { formatCurrency } from "@/lib/utils";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  dumbbell: Dumbbell,
  users: Users,
  calendar: Calendar,
  heart: Heart,
};

export default function MembershipPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly"
  );

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-deep-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-power-red/10 rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-[family-name:var(--font-oswald)] text-5xl md:text-7xl font-bold text-pure-white mb-6">
              CHOOSE YOUR
              <br />
              <span className="text-gradient">PATH TO GREATNESS</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Flexible membership options designed to fit your lifestyle and
              fitness goals. Start your transformation today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-8 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-center space-x-4">
            <span
              className={cn(
                "text-lg font-medium transition-colors",
                billingPeriod === "monthly"
                  ? "text-pure-white"
                  : "text-gray-500"
              )}
            >
              Monthly
            </span>
            <button
              onClick={() =>
                setBillingPeriod((prev) =>
                  prev === "monthly" ? "yearly" : "monthly"
                )
              }
              className="relative w-16 h-8 bg-steel-gray rounded-full transition-colors"
            >
              <motion.div
                animate={{ x: billingPeriod === "yearly" ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute left-1 top-1 w-6 h-6 bg-gradient-to-r from-power-red to-electric-orange rounded-full"
              />
            </button>
            <span
              className={cn(
                "text-lg font-medium transition-colors",
                billingPeriod === "yearly"
                  ? "text-pure-white"
                  : "text-gray-500"
              )}
            >
              Yearly
              <span className="ml-2 text-sm text-success-green">(Save 20%)</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-deep-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {membershipPlans.map((plan, index) => {
              const price =
                billingPeriod === "yearly"
                  ? Math.floor(plan.price * 12 * 0.8)
                  : plan.price;

              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    "relative rounded-3xl overflow-hidden",
                    plan.highlighted
                      ? "border-2 border-power-red"
                      : "border border-border"
                  )}
                >
                  {plan.highlighted && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-power-red to-electric-orange text-center py-2 text-sm font-bold text-pure-white">
                      MOST POPULAR
                    </div>
                  )}

                  <div
                    className={cn(
                      "p-8 bg-card",
                      plan.highlighted && "pt-14"
                    )}
                  >
                    {/* Plan Icon */}
                    <div
                      className={cn(
                        "w-14 h-14 rounded-xl flex items-center justify-center mb-6",
                        plan.highlighted
                          ? "bg-gradient-to-br from-power-red to-electric-orange"
                          : "bg-steel-gray"
                      )}
                    >
                      {plan.id === "elite" ? (
                        <Crown className="w-7 h-7 text-pure-white" />
                      ) : plan.id === "pro" ? (
                        <Zap className="w-7 h-7 text-pure-white" />
                      ) : (
                        <Dumbbell className="w-7 h-7 text-pure-white" />
                      )}
                    </div>

                    <h3 className="font-[family-name:var(--font-oswald)] text-2xl font-bold text-pure-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6">
                      {plan.description}
                    </p>

                    <div className="mb-8">
                      <span className="font-[family-name:var(--font-oswald)] text-5xl font-bold text-pure-white">
                        {formatCurrency(price)}
                      </span>
                      <span className="text-gray-500 ml-2">
                        /{billingPeriod === "yearly" ? "year" : "month"}
                      </span>
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

                    <div className="space-y-4">
                      {plan.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-5 h-5 rounded-full bg-success-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-success-green" />
                          </div>
                          <span className="text-gray-300 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="COMPARE PLANS"
            subtitle="Find the perfect membership for your fitness journey"
          />

          <div className="mt-16 overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-gray-400 font-normal">
                    Features
                  </th>
                  {membershipPlans.map((plan) => (
                    <th
                      key={plan.id}
                      className={cn(
                        "text-center py-4 px-4",
                        plan.highlighted
                          ? "text-power-red font-bold"
                          : "text-pure-white font-medium"
                      )}
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Gym Access", basic: true, pro: true, elite: true },
                  {
                    feature: "Group Classes",
                    basic: "2/week",
                    pro: "Unlimited",
                    elite: "Unlimited",
                  },
                  {
                    feature: "Personal Training",
                    basic: false,
                    pro: "1/month",
                    elite: "4/month",
                  },
                  {
                    feature: "24/7 Access",
                    basic: false,
                    pro: true,
                    elite: true,
                  },
                  {
                    feature: "Sauna & Steam Room",
                    basic: false,
                    pro: true,
                    elite: true,
                  },
                  {
                    feature: "Guest Passes",
                    basic: false,
                    pro: "2/month",
                    elite: "Unlimited",
                  },
                  {
                    feature: "Nutrition Consultation",
                    basic: false,
                    pro: true,
                    elite: true,
                  },
                  {
                    feature: "Private Locker",
                    basic: false,
                    pro: false,
                    elite: true,
                  },
                  {
                    feature: "Recovery Zone",
                    basic: false,
                    pro: false,
                    elite: true,
                  },
                  {
                    feature: "VIP Parking",
                    basic: false,
                    pro: false,
                    elite: true,
                  },
                ].map((row, index) => (
                  <tr
                    key={row.feature}
                    className={cn(
                      "border-b border-border",
                      index % 2 === 0 ? "bg-deep-black/50" : ""
                    )}
                  >
                    <td className="py-4 px-4 text-gray-300">{row.feature}</td>
                    {["basic", "pro", "elite"].map((planType) => {
                      const value = row[planType as keyof typeof row];
                      return (
                        <td key={planType} className="text-center py-4 px-4">
                          {typeof value === "boolean" ? (
                            value ? (
                              <Check className="w-5 h-5 text-success-green mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-600 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-300">{value}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-deep-black">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="MEMBERSHIP BENEFITS"
            subtitle="Every membership includes access to our world-class facilities"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {membershipBenefits.map((benefit, index) => {
              const Icon = iconMap[benefit.icon] || Dumbbell;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-8 rounded-2xl bg-card border border-border"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-power-red to-electric-orange flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-pure-white" />
                  </div>
                  <h3 className="font-[family-name:var(--font-oswald)] text-xl font-bold text-pure-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="FREQUENTLY ASKED QUESTIONS"
            subtitle="Everything you need to know about our memberships"
          />

          <div className="mt-16 max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Can I switch my membership plan later?",
                answer:
                  "Yes! You can upgrade or downgrade your membership at any time. Changes will take effect at the start of your next billing cycle.",
              },
              {
                question: "Is there a joining fee?",
                answer:
                  "We occasionally waive the joining fee during promotions. Contact us or start your free trial to learn about current offers.",
              },
              {
                question: "Can I freeze my membership?",
                answer:
                  "Yes, all members can freeze their membership for up to 3 months per year for medical reasons or extended travel.",
              },
              {
                question: "What happens after my free trial?",
                answer:
                  "After your 7-day free trial, you can choose the membership that best fits your needs. There's no obligation to continue.",
              },
              {
                question: "Do you offer corporate memberships?",
                answer:
                  "Yes! We offer special corporate rates for companies with 10+ employees. Contact our sales team for more information.",
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-deep-black border border-border"
              >
                <h3 className="font-semibold text-pure-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-power-red to-electric-orange">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-oswald)] text-4xl md:text-5xl font-bold text-pure-white mb-6">
            READY TO START?
          </h2>
          <p className="text-xl text-white/90 max-w-xl mx-auto mb-10">
            Try APEX Performance free for 7 days. No commitment required.
          </p>
          <Link href="/trial">
            <Button
              size="lg"
              className="bg-pure-white text-power-red hover:bg-gray-100"
            >
              Claim Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
