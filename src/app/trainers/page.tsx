"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { TrainerCard } from "@/components/ui/trainer-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { trainers } from "@/data/trainers";
import { cn } from "@/lib/utils";

const specialties = [
  "All",
  "HIIT",
  "Strength Training",
  "Yoga",
  "Cycling",
  "Boxing",
  "Pilates",
];

export default function TrainersPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTrainers = trainers.filter((trainer) => {
    const matchesSpecialty =
      selectedSpecialty === "All" ||
      trainer.specialties.some((s) =>
        s.toLowerCase().includes(selectedSpecialty.toLowerCase())
      );
    const matchesSearch =
      trainer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trainer.title.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSpecialty && matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-deep-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-power-red/10 rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-font text-5xl md:text-7xl font-bold text-pure-white mb-6">
              MEET YOUR
              <br />
              <span className="text-gradient">COACHES</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              World-class trainers dedicated to helping you achieve your fitness
              goals. Find the perfect coach for your journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-card border-y border-border sticky top-20 z-40">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Search */}
          <div className="relative max-w-xl mx-auto mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search trainers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-deep-black border border-border rounded-full text-pure-white placeholder:text-gray-500 focus:outline-none focus:border-power-red transition-colors"
            />
          </div>

          {/* Specialty Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {specialties.map((specialty) => (
              <button
                key={specialty}
                onClick={() => setSelectedSpecialty(specialty)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  selectedSpecialty === specialty
                    ? "bg-gradient-to-r from-power-red to-electric-orange text-pure-white"
                    : "bg-deep-black text-gray-400 hover:text-pure-white border border-border hover:border-power-red/50"
                )}
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-16 bg-deep-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-400">
              Showing{" "}
              <span className="text-pure-white font-medium">
                {filteredTrainers.length}
              </span>{" "}
              trainers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTrainers.map((trainer, index) => (
              <TrainerCard key={trainer.id} trainer={trainer} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Trainers */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="WHY TRAIN WITH US"
            subtitle="Our trainers are more than just coaches – they're your partners in success"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Certified Experts",
                description:
                  "All our trainers hold multiple certifications and undergo continuous education.",
                stat: "50+",
                statLabel: "Combined Certifications",
              },
              {
                title: "Proven Results",
                description:
                  "Our trainers have helped thousands achieve their fitness transformations.",
                stat: "5,000+",
                statLabel: "Successful Transformations",
              },
              {
                title: "Personalized Approach",
                description:
                  "Every session is tailored to your unique goals, abilities, and preferences.",
                stat: "100%",
                statLabel: "Custom Programs",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-3xl bg-deep-black border border-border"
              >
                <div className="heading-font text-5xl font-bold text-gradient mb-2">
                  {item.stat}
                </div>
                <div className="text-sm text-gray-500 mb-6">
                  {item.statLabel}
                </div>
                <h3 className="heading-font text-xl font-bold text-pure-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
