"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Quote,
  TrendingDown,
  TrendingUp,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { transformations, stats } from "@/data/transformations";
import { cn } from "@/lib/utils";

export default function TransformationsPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"before" | "after" | "compare">(
    "compare"
  );

  const currentTransformation = transformations[selectedIndex];

  const nextTransformation = () => {
    setSelectedIndex((prev) => (prev + 1) % transformations.length);
  };

  const prevTransformation = () => {
    setSelectedIndex(
      (prev) => (prev - 1 + transformations.length) % transformations.length
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-deep-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-success-green/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-power-red/10 rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-font text-5xl md:text-7xl font-bold text-pure-white mb-6">
              REAL PEOPLE.
              <br />
              <span className="text-gradient">REAL RESULTS.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Be inspired by the incredible transformations of our members.
              Their journey could be yours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="heading-font text-3xl font-bold text-power-red">
                {stats.totalWeightLost}
              </div>
              <div className="text-sm text-gray-500">Total Weight Lost</div>
            </div>
            <div>
              <div className="heading-font text-3xl font-bold text-electric-orange">
                {stats.memberTransformations}
              </div>
              <div className="text-sm text-gray-500">Transformations</div>
            </div>
            <div>
              <div className="heading-font text-3xl font-bold text-success-green">
                {stats.averageWeightLoss}
              </div>
              <div className="text-sm text-gray-500">Average Weight Loss</div>
            </div>
            <div>
              <div className="heading-font text-3xl font-bold text-pure-white">
                {stats.successRate}
              </div>
              <div className="text-sm text-gray-500">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Transformation */}
      <section className="py-32 bg-deep-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative">
            {/* Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10 hidden lg:block">
              <button
                onClick={prevTransformation}
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-pure-white hover:border-power-red transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10 hidden lg:block">
              <button
                onClick={nextTransformation}
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-pure-white hover:border-power-red transition-colors"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Before/After Images */}
                <div className="relative">
                  {/* View Mode Toggle */}
                  <div className="flex justify-center space-x-2 mb-6">
                    {["before", "compare", "after"].map((mode) => (
                      <button
                        key={mode}
                        onClick={() =>
                          setViewMode(mode as "before" | "after" | "compare")
                        }
                        className={cn(
                          "px-4 py-2 rounded-full text-sm font-medium capitalize transition-all",
                          viewMode === mode
                            ? "bg-power-red text-pure-white"
                            : "bg-card text-gray-400 hover:text-pure-white"
                        )}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>

                  <div className="relative h-[500px] rounded-3xl overflow-hidden">
                    {viewMode === "compare" ? (
                      <div className="flex h-full">
                        <div className="w-1/2 h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border-r border-white/20">
                          <div className="text-center">
                            <span className="text-gray-400 text-lg">Before</span>
                          </div>
                        </div>
                        <div className="w-1/2 h-full bg-gradient-to-br from-power-red/20 to-electric-orange/20 flex items-center justify-center">
                          <div className="text-center">
                            <span className="text-pure-white text-lg">After</span>
                          </div>
                        </div>
                      </div>
                    ) : viewMode === "before" ? (
                      <div className="h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <span className="text-gray-400 text-2xl">Before</span>
                      </div>
                    ) : (
                      <div className="h-full bg-gradient-to-br from-power-red/20 to-electric-orange/20 flex items-center justify-center">
                        <span className="text-pure-white text-2xl">After</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Story */}
                <div>
                  <div className="inline-flex items-center space-x-4 mb-6">
                    {currentTransformation.weightLoss && (
                      <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-power-red/10 text-power-red">
                        <TrendingDown className="w-5 h-5" />
                        <span className="font-bold">
                          -{currentTransformation.weightLoss} kg
                        </span>
                      </div>
                    )}
                    {currentTransformation.muscleGain && (
                      <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-success-green/10 text-success-green">
                        <TrendingUp className="w-5 h-5" />
                        <span className="font-bold">
                          +{currentTransformation.muscleGain} kg muscle
                        </span>
                      </div>
                    )}
                  </div>

                  <h2 className="heading-font text-4xl font-bold text-pure-white mb-2">
                    {currentTransformation.name}
                  </h2>
                  <p className="text-gray-400 mb-6">
                    Age {currentTransformation.age} • {currentTransformation.duration} transformation
                  </p>

                  <div className="relative mb-8">
                    <Quote className="absolute -top-4 -left-2 w-10 h-10 text-power-red/20" />
                    <p className="text-xl text-gray-300 italic pl-6">
                      {currentTransformation.quote}
                    </p>
                  </div>

                  <p className="text-gray-400 mb-8">
                    {currentTransformation.story}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="px-4 py-2 rounded-xl bg-card border border-border">
                      <div className="text-xs text-gray-500 uppercase">
                        Program
                      </div>
                      <div className="text-pure-white font-medium">
                        {currentTransformation.program}
                      </div>
                    </div>
                    <div className="px-4 py-2 rounded-xl bg-card border border-border">
                      <div className="text-xs text-gray-500 uppercase">
                        Trainer
                      </div>
                      <div className="text-pure-white font-medium">
                        {currentTransformation.trainer}
                      </div>
                    </div>
                    <div className="px-4 py-2 rounded-xl bg-card border border-border flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <div className="text-pure-white font-medium">
                        {currentTransformation.duration}
                      </div>
                    </div>
                  </div>

                  <Link href="/trial">
                    <Button size="lg">
                      Start Your Transformation
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex justify-center space-x-2 mt-12">
              {transformations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all",
                    index === selectedIndex
                      ? "bg-power-red w-8"
                      : "bg-steel-gray hover:bg-gray-400"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Transformations Grid */}
      <section className="py-32 bg-card border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="MORE SUCCESS STORIES"
            subtitle="Every transformation is unique, just like you"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformations.map((transformation, index) => (
              <motion.div
                key={transformation.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedIndex(index)}
                className="cursor-pointer group"
              >
                <div className="relative h-80 rounded-2xl overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-power-red/20 to-electric-orange/20 group-hover:from-power-red/30 group-hover:to-electric-orange/30 transition-all" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    {transformation.weightLoss && (
                      <span className="px-3 py-1 bg-deep-black/80 backdrop-blur-sm rounded-full text-sm text-power-red font-bold">
                        -{transformation.weightLoss} kg
                      </span>
                    )}
                    <span className="px-3 py-1 bg-deep-black/80 backdrop-blur-sm rounded-full text-sm text-gray-300">
                      {transformation.duration}
                    </span>
                  </div>
                </div>
                <h3 className="heading-font text-xl font-bold text-pure-white group-hover:text-power-red transition-colors">
                  {transformation.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {transformation.program}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-r from-power-red to-electric-orange">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="heading-font text-4xl md:text-5xl font-bold text-pure-white mb-6">
            YOUR STORY STARTS TODAY
          </h2>
          <p className="text-xl text-white/90 max-w-xl mx-auto mb-10">
            Join APEX and become our next success story. Your transformation
            is waiting.
          </p>
          <Link href="/trial">
            <Button
              size="lg"
              className="bg-pure-white text-power-red hover:bg-gray-100"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
