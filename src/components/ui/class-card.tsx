"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Flame, User } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ClassType } from "@/data/classes";

interface ClassCardProps {
  classData: ClassType;
  index?: number;
}

export function ClassCard({ classData, index = 0 }: ClassCardProps) {
  const intensityBars = Array.from({ length: 5 }, (_, i) => i < classData.intensity);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/classes/${classData.slug}`}>
        <div className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-power-red/50 transition-all duration-500 card-hover">
          {/* Image Container */}
          <div className="relative h-56 overflow-hidden">
            {/* Placeholder gradient for image */}
            <div className="absolute inset-0 bg-gradient-to-br from-power-red/20 to-electric-orange/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-power-red text-pure-white rounded-full">
                {classData.category}
              </span>
            </div>

            {/* Video Play Indicator */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-16 h-16 rounded-full bg-power-red/90 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-pure-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="font-[family-name:var(--font-oswald)] text-2xl font-bold text-pure-white mb-2 group-hover:text-power-red transition-colors">
              {classData.name}
            </h3>
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
              {classData.shortDescription}
            </p>

            {/* Stats */}
            <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4 text-power-red" />
                <span>{classData.duration} min</span>
              </div>
              <div className="flex items-center space-x-1">
                <Flame className="w-4 h-4 text-electric-orange" />
                <span>{classData.calories} cal</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4 text-success-green" />
                <span>{classData.trainer}</span>
              </div>
            </div>

            {/* Intensity Indicator */}
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-500 uppercase tracking-wider">
                Intensity
              </span>
              <div className="flex space-x-1">
                {intensityBars.map((active, i) => (
                  <div
                    key={i}
                    className={cn(
                      "w-6 h-1.5 rounded-full transition-all duration-300",
                      active
                        ? "bg-gradient-to-r from-power-red to-electric-orange"
                        : "bg-steel-gray"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
