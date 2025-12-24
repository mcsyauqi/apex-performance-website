"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Clock, Flame, User } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ClassType } from "@/data/classes";

const classImages: Record<string, string> = {
  "HIIT": "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=600",
  "Strength": "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?q=80&w=600",
  "Yoga": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600",
  "Cycling": "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600",
  "Boxing": "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=600",
  "Pilates": "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600",
};

interface ClassCardProps {
  classData: ClassType;
  index?: number;
}

export function ClassCard({ classData, index = 0 }: ClassCardProps) {
  const intensityBars = Array.from({ length: 5 }, (_, i) => i < classData.intensity);
  const imageUrl = classImages[classData.category] || classImages["HIIT"];

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
            <Image
              src={imageUrl}
              alt={classData.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

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
            <h3 className="heading-font text-2xl font-bold text-pure-white mb-2 group-hover:text-power-red transition-colors uppercase">
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
