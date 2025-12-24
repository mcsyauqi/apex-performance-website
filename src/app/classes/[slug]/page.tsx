"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Clock,
  Flame,
  Users,
  Calendar,
  MapPin,
  ArrowLeft,
  ArrowRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { classes } from "@/data/classes";
import { trainers } from "@/data/trainers";
import { cn } from "@/lib/utils";

export default function ClassDetailPage() {
  const params = useParams();
  const classData = classes.find((c) => c.slug === params.slug);

  if (!classData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-deep-black">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-pure-white mb-4">
            Class Not Found
          </h1>
          <Link href="/classes">
            <Button>Back to Classes</Button>
          </Link>
        </div>
      </div>
    );
  }

  const trainer = trainers.find((t) => t.slug === classData.trainerId);
  const intensityBars = Array.from(
    { length: 5 },
    (_, i) => i < classData.intensity
  );

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-deep-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-power-red/10 to-electric-orange/10" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <Link
            href="/classes"
            className="inline-flex items-center text-gray-400 hover:text-pure-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Classes
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Class Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4">
                <span className="inline-block px-4 py-1 text-sm font-semibold uppercase tracking-wider bg-power-red text-pure-white rounded-full">
                  {classData.category}
                </span>
              </div>

              <h1 className="font-[family-name:var(--font-oswald)] text-5xl md:text-6xl font-bold text-pure-white mb-6">
                {classData.name}
              </h1>

              <p className="text-xl text-gray-400 mb-8">
                {classData.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 rounded-xl bg-card border border-border">
                  <Clock className="w-6 h-6 mx-auto mb-2 text-power-red" />
                  <div className="text-2xl font-bold text-pure-white">
                    {classData.duration}
                  </div>
                  <div className="text-sm text-gray-500">Minutes</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-card border border-border">
                  <Flame className="w-6 h-6 mx-auto mb-2 text-electric-orange" />
                  <div className="text-2xl font-bold text-pure-white">
                    {classData.calories}
                  </div>
                  <div className="text-sm text-gray-500">Calories</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-card border border-border">
                  <Users className="w-6 h-6 mx-auto mb-2 text-success-green" />
                  <div className="text-2xl font-bold text-pure-white">20</div>
                  <div className="text-sm text-gray-500">Max Class Size</div>
                </div>
              </div>

              {/* Intensity */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">Intensity Level</span>
                  <span className="text-pure-white font-medium">
                    {classData.intensity}/5
                  </span>
                </div>
                <div className="flex space-x-2">
                  {intensityBars.map((active, i) => (
                    <div
                      key={i}
                      className={cn(
                        "flex-1 h-2 rounded-full transition-all duration-300",
                        active
                          ? "bg-gradient-to-r from-power-red to-electric-orange"
                          : "bg-steel-gray"
                      )}
                    />
                  ))}
                </div>
              </div>

              <Link href="/trial">
                <Button size="lg" className="w-full md:w-auto">
                  Book This Class
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-power-red/30 to-electric-orange/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-pure-white/10 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-pure-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Schedule & Benefits */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Schedule */}
            <div>
              <h2 className="font-[family-name:var(--font-oswald)] text-3xl font-bold text-pure-white mb-6">
                Class Schedule
              </h2>
              <div className="space-y-3">
                {classData.schedule.map((slot, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-xl bg-deep-black border border-border"
                  >
                    <div className="flex items-center space-x-4">
                      <Calendar className="w-5 h-5 text-power-red" />
                      <span className="text-pure-white font-medium">
                        {slot.day}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-400">
                      <span>{slot.time}</span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {slot.room}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="font-[family-name:var(--font-oswald)] text-3xl font-bold text-pure-white mb-6">
                Benefits
              </h2>
              <div className="space-y-4">
                {classData.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-success-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-success-green" />
                    </div>
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainer Section */}
      {trainer && (
        <section className="py-16 bg-deep-black">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-[family-name:var(--font-oswald)] text-3xl font-bold text-pure-white mb-8">
              Your Instructor
            </h2>

            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 p-8 rounded-3xl bg-card border border-border">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-power-red to-electric-orange flex-shrink-0" />
              <div className="text-center md:text-left">
                <h3 className="font-[family-name:var(--font-oswald)] text-2xl font-bold text-pure-white mb-1">
                  {trainer.name}
                </h3>
                <p className="text-power-red font-medium mb-3">
                  {trainer.title}
                </p>
                <p className="text-gray-400 mb-4 max-w-2xl">{trainer.shortBio}</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {trainer.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/10"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/trainers/${trainer.slug}`}
                  className="inline-flex items-center text-power-red hover:text-electric-orange mt-4 transition-colors"
                >
                  View Full Profile
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Requirements */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-[family-name:var(--font-oswald)] text-3xl font-bold text-pure-white mb-6">
            What to Bring
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {classData.requirements.map((req, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-deep-black border border-border text-gray-300"
              >
                {req}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-power-red to-electric-orange">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-oswald)] text-4xl font-bold text-pure-white mb-4">
            READY TO JOIN?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book your spot in {classData.name} today
          </p>
          <Link href="/trial">
            <Button
              size="lg"
              className="bg-pure-white text-power-red hover:bg-gray-100"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
