"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Calendar,
  Dumbbell,
  Users,
  Sparkles,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: Dumbbell,
    title: "Full Gym Access",
    description: "Experience all our equipment and facilities",
  },
  {
    icon: Users,
    title: "Group Classes",
    description: "Join any class during your trial week",
  },
  {
    icon: Calendar,
    title: "Fitness Assessment",
    description: "Complimentary body composition analysis",
  },
  {
    icon: Sparkles,
    title: "Trainer Consultation",
    description: "One-on-one session with an expert trainer",
  },
];

const goals = [
  "Lose Weight",
  "Build Muscle",
  "Improve Fitness",
  "Increase Flexibility",
  "Reduce Stress",
  "Sports Performance",
  "Rehabilitation",
  "General Wellness",
];

export default function TrialPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    goals: [] as string[],
    experience: "",
    preferredDate: "",
    preferredTime: "",
    hearAbout: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleGoalToggle = (goal: string) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  if (isSubmitted) {
    return (
      <section className="min-h-screen pt-32 pb-20 bg-deep-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-xl mx-auto px-4"
        >
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-success-green/20 flex items-center justify-center">
            <Check className="w-10 h-10 text-success-green" />
          </div>
          <h1 className="font-[family-name:var(--font-oswald)] text-4xl md:text-5xl font-bold text-pure-white mb-4">
            YOU&apos;RE ALL SET!
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            We&apos;ve received your free trial request. A member of our team
            will contact you within 24 hours to confirm your visit.
          </p>
          <div className="p-6 rounded-2xl bg-card border border-border text-left mb-8">
            <h3 className="font-semibold text-pure-white mb-4">
              What happens next?
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-3">
                <span className="text-power-red">1.</span>
                <span>You&apos;ll receive a confirmation email shortly</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-power-red">2.</span>
                <span>Our team will call to schedule your visit</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-power-red">3.</span>
                <span>
                  Arrive 15 minutes early for your fitness assessment
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-power-red">4.</span>
                <span>Enjoy your 7-day free trial!</span>
              </li>
            </ul>
          </div>
          <Button onClick={() => (window.location.href = "/")}>
            Back to Home
          </Button>
        </motion.div>
      </section>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-deep-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-power-red/10 rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-success-green/10 border border-success-green/20 text-success-green text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>7-Day Free Trial • No Credit Card Required</span>
            </div>
            <h1 className="font-[family-name:var(--font-oswald)] text-5xl md:text-7xl font-bold text-pure-white mb-6">
              CLAIM YOUR
              <br />
              <span className="text-gradient">FREE TRIAL</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience everything APEX Performance has to offer. Full access
              to facilities, classes, and a personal consultation – completely
              free.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 rounded-xl bg-power-red/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-power-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-pure-white">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-400">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-deep-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Progress Steps */}
            <div className="flex items-center justify-center mb-12">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all",
                      step >= s
                        ? "bg-gradient-to-r from-power-red to-electric-orange text-pure-white"
                        : "bg-card text-gray-500 border border-border"
                    )}
                  >
                    {step > s ? <Check className="w-5 h-5" /> : s}
                  </div>
                  {s < 3 && (
                    <div
                      className={cn(
                        "w-24 h-1 mx-2 rounded-full transition-all",
                        step > s ? "bg-power-red" : "bg-border"
                      )}
                    />
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Info */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="font-[family-name:var(--font-oswald)] text-3xl font-bold text-pure-white text-center mb-8">
                    Tell Us About Yourself
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            firstName: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 bg-card border border-border rounded-xl text-pure-white placeholder:text-gray-600 focus:outline-none focus:border-power-red transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            lastName: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 bg-card border border-border rounded-xl text-pure-white placeholder:text-gray-600 focus:outline-none focus:border-power-red transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
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
                        className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl text-pure-white placeholder:text-gray-600 focus:outline-none focus:border-power-red transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            phone: e.target.value,
                          }))
                        }
                        className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl text-pure-white placeholder:text-gray-600 focus:outline-none focus:border-power-red transition-colors"
                        placeholder="+62 812 3456 7890"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button type="button" onClick={nextStep}>
                      Continue
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Goals */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="font-[family-name:var(--font-oswald)] text-3xl font-bold text-pure-white text-center mb-8">
                    What Are Your Goals?
                  </h2>

                  <div>
                    <label className="block text-sm text-gray-400 mb-4">
                      Select all that apply
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {goals.map((goal) => (
                        <button
                          key={goal}
                          type="button"
                          onClick={() => handleGoalToggle(goal)}
                          className={cn(
                            "p-4 rounded-xl text-sm font-medium transition-all border",
                            formData.goals.includes(goal)
                              ? "bg-power-red/20 border-power-red text-power-red"
                              : "bg-card border-border text-gray-400 hover:border-power-red/50"
                          )}
                        >
                          {goal}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Fitness Experience Level
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          experience: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 bg-card border border-border rounded-xl text-pure-white focus:outline-none focus:border-power-red transition-colors appearance-none"
                    >
                      <option value="">Select your experience level</option>
                      <option value="beginner">
                        Beginner - New to fitness
                      </option>
                      <option value="intermediate">
                        Intermediate - Some experience
                      </option>
                      <option value="advanced">
                        Advanced - Regular gym-goer
                      </option>
                      <option value="athlete">
                        Athlete - Competitive training
                      </option>
                    </select>
                  </div>

                  <div className="flex justify-between">
                    <Button type="button" variant="ghost" onClick={prevStep}>
                      Back
                    </Button>
                    <Button type="button" onClick={nextStep}>
                      Continue
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Schedule */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="font-[family-name:var(--font-oswald)] text-3xl font-bold text-pure-white text-center mb-8">
                    Schedule Your Visit
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            preferredDate: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 bg-card border border-border rounded-xl text-pure-white focus:outline-none focus:border-power-red transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Preferred Time
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            preferredTime: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 bg-card border border-border rounded-xl text-pure-white focus:outline-none focus:border-power-red transition-colors appearance-none"
                      >
                        <option value="">Select a time</option>
                        <option value="morning">Morning (6AM - 12PM)</option>
                        <option value="afternoon">Afternoon (12PM - 5PM)</option>
                        <option value="evening">Evening (5PM - 10PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      How did you hear about us?
                    </label>
                    <select
                      value={formData.hearAbout}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          hearAbout: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 bg-card border border-border rounded-xl text-pure-white focus:outline-none focus:border-power-red transition-colors appearance-none"
                    >
                      <option value="">Select an option</option>
                      <option value="social">Social Media</option>
                      <option value="friend">Friend/Family</option>
                      <option value="google">Google Search</option>
                      <option value="walk-in">Walk-in</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="p-4 rounded-xl bg-card border border-border">
                    <p className="text-sm text-gray-400">
                      By submitting this form, you agree to receive
                      communications from APEX Performance. We respect your
                      privacy and will never share your information.
                    </p>
                  </div>

                  <div className="flex justify-between">
                    <Button type="button" variant="ghost" onClick={prevStep}>
                      Back
                    </Button>
                    <Button type="submit" loading={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Claim Free Trial"}
                      {!isSubmitting && (
                        <ArrowRight className="ml-2 w-5 h-5" />
                      )}
                    </Button>
                  </div>
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
