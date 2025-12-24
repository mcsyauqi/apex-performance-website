"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Play,
  Dumbbell,
  Bike,
  Heart,
  Waves,
  Sparkles,
  Users,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const facilities = [
  {
    id: "strength",
    name: "Strength Floor",
    description:
      "Our massive 10,000 sq ft strength training area features Olympic platforms, power racks, and the latest equipment from Rogue, Hammer Strength, and Life Fitness.",
    features: [
      "20 Power Racks",
      "Olympic Lifting Platforms",
      "Complete Dumbbell Range (5-150 lbs)",
      "Cable Machines & Functional Training",
      "Plate-Loaded Equipment",
    ],
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800",
  },
  {
    id: "cardio",
    name: "Cardio Zone",
    description:
      "State-of-the-art cardio equipment with personal entertainment screens, heart rate monitoring, and virtual training programs.",
    features: [
      "50+ Cardio Machines",
      "Treadmills with Virtual Trails",
      "Concept2 Rowers",
      "Assault Bikes & Ski Ergs",
      "StairMasters & Ellipticals",
    ],
    icon: Bike,
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800",
  },
  {
    id: "studios",
    name: "Group Studios",
    description:
      "Four specialized studios designed for group fitness, yoga, cycling, and combat sports with premium sound and lighting systems.",
    features: [
      "Studio A - HIIT & Functional",
      "Zen Studio - Yoga & Pilates",
      "Spin Studio - 30 Premium Bikes",
      "Combat Studio - Boxing & MMA",
    ],
    icon: Users,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800",
  },
  {
    id: "recovery",
    name: "Recovery Zone",
    description:
      "Premium recovery amenities to help you rest, recover, and come back stronger. Available exclusively to Elite members.",
    features: [
      "Infrared Sauna",
      "Steam Room",
      "Cold Plunge Pool",
      "Massage Chairs",
      "Compression Therapy",
    ],
    icon: Waves,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800",
  },
  {
    id: "wellness",
    name: "Wellness Center",
    description:
      "Comprehensive wellness services including nutrition counseling, body composition analysis, and physical therapy.",
    features: [
      "Nutrition Consultations",
      "InBody Body Composition",
      "Physical Therapy",
      "Sports Massage",
      "Supplement Bar",
    ],
    icon: Heart,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800",
  },
  {
    id: "amenities",
    name: "Premium Amenities",
    description:
      "Luxury amenities to make your gym experience comfortable and convenient from start to finish.",
    features: [
      "Spa-Style Locker Rooms",
      "Towel Service",
      "Private Showers",
      "Hair Dryers & Toiletries",
      "VIP Parking",
    ],
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbec6e?q=80&w=800",
  },
];

export default function FacilitiesPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % facilities.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + facilities.length) % facilities.length);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-deep-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-power-red/10 rounded-full blur-[200px]" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-font text-5xl md:text-7xl font-bold text-pure-white mb-6">
              WORLD-CLASS
              <br />
              <span className="text-gradient">FACILITIES</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              Experience premium fitness with 40,000 sq ft of state-of-the-art
              equipment, expert-designed spaces, and luxury amenities.
            </p>

            {/* Virtual Tour Button */}
            <Button
              size="lg"
              onClick={() => setIsPlaying(true)}
              className="group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Take Virtual Tour
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Virtual Tour Modal */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setIsPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl aspect-video bg-deep-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-power-red/20 to-electric-orange/20">
                <div className="text-center">
                  <Play className="w-16 h-16 mx-auto mb-4 text-pure-white" />
                  <p className="text-gray-400">Virtual Tour Video</p>
                  <p className="text-sm text-gray-500">
                    (Video would be embedded here)
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-pure-white hover:bg-white/20 transition-colors"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Facility Carousel */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative">
            {/* Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-deep-black border border-border flex items-center justify-center text-pure-white hover:border-power-red transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10">
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-deep-black border border-border flex items-center justify-center text-pure-white hover:border-power-red transition-colors"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Image */}
                <div className="relative h-[400px] rounded-3xl overflow-hidden">
                  <Image
                    src={facilities[activeIndex].image}
                    alt={facilities[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 via-transparent to-transparent" />
                </div>

                {/* Info */}
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-power-red to-electric-orange mb-6">
                    {(() => {
                      const Icon = facilities[activeIndex].icon;
                      return <Icon className="w-8 h-8 text-pure-white" />;
                    })()}
                  </div>
                  <h2 className="heading-font text-4xl font-bold text-pure-white mb-4">
                    {facilities[activeIndex].name}
                  </h2>
                  <p className="text-gray-400 text-lg mb-8">
                    {facilities[activeIndex].description}
                  </p>
                  <ul className="space-y-3">
                    {facilities[activeIndex].features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center space-x-3 text-gray-300"
                      >
                        <div className="w-2 h-2 rounded-full bg-power-red" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex justify-center space-x-2 mt-12">
              {facilities.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all",
                    index === activeIndex
                      ? "bg-power-red w-8"
                      : "bg-steel-gray hover:bg-gray-400"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-24 bg-deep-black">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="EXPLORE OUR SPACES"
            subtitle="Every corner designed for your success"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-card border border-border hover:border-power-red/50 transition-all duration-300 card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-power-red to-electric-orange flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <facility.icon className="w-7 h-7 text-pure-white" />
                </div>
                <h3 className="heading-font text-2xl font-bold text-pure-white mb-3 group-hover:text-power-red transition-colors">
                  {facility.name}
                </h3>
                <p className="text-gray-400 mb-6 line-clamp-3">
                  {facility.description}
                </p>
                <button
                  onClick={() =>
                    setActiveIndex(
                      facilities.findIndex((f) => f.id === facility.id)
                    )
                  }
                  className="text-power-red hover:text-electric-orange transition-colors text-sm font-medium inline-flex items-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "40,000", label: "Sq Ft of Space" },
              { value: "200+", label: "Equipment Pieces" },
              { value: "4", label: "Group Studios" },
              { value: "24/7", label: "Access Available" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="heading-font text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-power-red to-electric-orange">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="heading-font text-4xl md:text-5xl font-bold text-pure-white mb-6">
            SEE IT FOR YOURSELF
          </h2>
          <p className="text-xl text-white/90 max-w-xl mx-auto mb-10">
            Schedule a tour and experience our world-class facilities in person.
          </p>
          <Link href="/trial">
            <Button
              size="lg"
              className="bg-pure-white text-power-red hover:bg-gray-100"
            >
              Book a Tour
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
