"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Sparkles, Dumbbell, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const steps = [
  { num: 1, title: "Your Info" },
  { num: 2, title: "Your Goals" },
  { num: 3, title: "Schedule" },
];

const goals = [
  "Lose Weight",
  "Build Muscle",
  "Improve Fitness",
  "Reduce Stress",
  "Sports Performance",
  "General Health",
];

export default function TrialPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    goals: [] as string[],
    date: "",
    time: "",
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const toggleGoal = (g: string) => {
    setForm(p => ({
      ...p,
      goals: p.goals.includes(g) ? p.goals.filter(x => x !== g) : [...p.goals, g]
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 2000));
    setLoading(false);
    setDone(true);
  };

  if (done) {
    return (
      <main className="bg-deep-black min-h-screen flex items-center justify-center px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg text-center"
        >
          <div className="w-20 h-20 bg-success-green/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Check className="w-10 h-10 text-success-green" />
          </div>
          <h1 className="heading-font text-4xl font-bold text-pure-white mb-4">You&apos;re In!</h1>
          <p className="text-gray-400 text-lg mb-8">
            We&apos;ll contact you within 24 hours to confirm your visit. Get ready to start your transformation!
          </p>
          <Link href="/">
            <Button size="lg">Back to Home</Button>
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="bg-deep-black min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-8 px-8 lg:px-16">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-success-green/10 border border-success-green/20 rounded-full text-success-green text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              7-Day Free Trial • No Card Required
            </div>
            <h1 className="heading-font text-4xl lg:text-6xl font-black text-pure-white mb-4">
              START YOUR
              <br />
              <span className="text-gradient">FREE TRIAL</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-8 lg:px-16 pb-8">
        <div className="max-w-2xl mx-auto grid grid-cols-3 gap-4">
          {[
            { icon: Dumbbell, text: "Full Access" },
            { icon: Users, text: "All Classes" },
            { icon: Calendar, text: "1 PT Session" },
          ].map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-4 text-center"
            >
              <item.icon className="w-6 h-6 text-power-red mx-auto mb-2" />
              <span className="text-gray-400 text-xs">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Progress */}
      <section className="px-8 lg:px-16 pb-8">
        <div className="max-w-2xl mx-auto flex items-center justify-center gap-4">
          {steps.map((s, i) => (
            <div key={s.num} className="flex items-center">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all",
                step >= s.num
                  ? "bg-power-red text-white"
                  : "bg-card border border-border text-gray-500"
              )}>
                {step > s.num ? <Check className="w-5 h-5" /> : s.num}
              </div>
              <span className={cn(
                "ml-2 text-sm hidden sm:block",
                step >= s.num ? "text-pure-white" : "text-gray-500"
              )}>
                {s.title}
              </span>
              {i < steps.length - 1 && (
                <div className={cn(
                  "w-16 h-0.5 mx-4",
                  step > s.num ? "bg-power-red" : "bg-border"
                )} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="px-8 lg:px-16 pb-20">
        <div className="max-w-xl mx-auto">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <h2 className="heading-font text-2xl font-bold text-pure-white text-center mb-8">
                  Tell us about yourself
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={e => setForm(p => ({ ...p, firstName: e.target.value }))}
                    className="w-full px-5 py-4 bg-card border border-border rounded-2xl text-pure-white placeholder:text-gray-600 focus:outline-none focus:border-power-red"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={e => setForm(p => ({ ...p, lastName: e.target.value }))}
                    className="w-full px-5 py-4 bg-card border border-border rounded-2xl text-pure-white placeholder:text-gray-600 focus:outline-none focus:border-power-red"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                  className="w-full px-5 py-4 bg-card border border-border rounded-2xl text-pure-white placeholder:text-gray-600 focus:outline-none focus:border-power-red"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                  className="w-full px-5 py-4 bg-card border border-border rounded-2xl text-pure-white placeholder:text-gray-600 focus:outline-none focus:border-power-red"
                />
                <Button onClick={() => setStep(2)} size="lg" className="w-full mt-6">
                  Continue <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="heading-font text-2xl font-bold text-pure-white text-center mb-8">
                  What are your goals?
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {goals.map(g => (
                    <button
                      key={g}
                      onClick={() => toggleGoal(g)}
                      className={cn(
                        "p-4 rounded-2xl text-sm font-medium transition-all border",
                        form.goals.includes(g)
                          ? "bg-power-red/20 border-power-red text-power-red"
                          : "bg-card border-border text-gray-400 hover:border-power-red/50"
                      )}
                    >
                      {g}
                    </button>
                  ))}
                </div>
                <div className="flex gap-4 mt-8">
                  <Button onClick={() => setStep(1)} variant="ghost" size="lg" className="flex-1">
                    <ArrowLeft className="mr-2 w-5 h-5" /> Back
                  </Button>
                  <Button onClick={() => setStep(3)} size="lg" className="flex-1">
                    Continue <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <h2 className="heading-font text-2xl font-bold text-pure-white text-center mb-8">
                  When would you like to visit?
                </h2>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Preferred Date</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={e => setForm(p => ({ ...p, date: e.target.value }))}
                    className="w-full px-5 py-4 bg-card border border-border rounded-2xl text-pure-white focus:outline-none focus:border-power-red"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Preferred Time</label>
                  <select
                    value={form.time}
                    onChange={e => setForm(p => ({ ...p, time: e.target.value }))}
                    className="w-full px-5 py-4 bg-card border border-border rounded-2xl text-pure-white focus:outline-none focus:border-power-red appearance-none"
                  >
                    <option value="">Select time</option>
                    <option value="morning">Morning (6AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 5PM)</option>
                    <option value="evening">Evening (5PM - 10PM)</option>
                  </select>
                </div>
                <div className="flex gap-4 mt-8">
                  <Button onClick={() => setStep(2)} variant="ghost" size="lg" className="flex-1">
                    <ArrowLeft className="mr-2 w-5 h-5" /> Back
                  </Button>
                  <Button onClick={handleSubmit} loading={loading} size="lg" className="flex-1">
                    {loading ? "Submitting..." : "Claim Trial"}
                    {!loading && <ArrowRight className="ml-2 w-5 h-5" />}
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
