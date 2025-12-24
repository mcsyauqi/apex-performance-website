"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import type { Trainer } from "@/data/trainers";

const trainerImages: Record<string, string> = {
  "marcus-chen": "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=600",
  "sarah-johnson": "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=600",
  "emma-williams": "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600",
  "jake-martinez": "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600",
  "mike-thompson": "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600",
  "lisa-anderson": "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600",
};

interface TrainerCardProps {
  trainer: Trainer;
  index?: number;
}

export function TrainerCard({ trainer, index = 0 }: TrainerCardProps) {
  const imageUrl = trainerImages[trainer.slug] || trainerImages["marcus-chen"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/trainers/${trainer.slug}`}>
        <div className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-power-red/50 transition-all duration-500 card-hover">
          {/* Image Container */}
          <div className="relative h-80 overflow-hidden bg-steel-gray">
            <Image
              src={imageUrl}
              alt={trainer.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

            {/* Social Links */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
              {trainer.socialMedia.instagram && (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-pure-white hover:bg-power-red transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </motion.div>
              )}
              {trainer.socialMedia.twitter && (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-pure-white hover:bg-power-red transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </motion.div>
              )}
              {trainer.socialMedia.linkedin && (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-pure-white hover:bg-power-red transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="heading-font text-2xl font-bold text-pure-white mb-1 group-hover:text-power-red transition-colors uppercase">
              {trainer.name}
            </h3>
            <p className="text-power-red text-sm font-medium mb-3">
              {trainer.title}
            </p>
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
              {trainer.shortBio}
            </p>

            {/* Specialties */}
            <div className="flex flex-wrap gap-2">
              {trainer.specialties.slice(0, 3).map((specialty) => (
                <span
                  key={specialty}
                  className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/10"
                >
                  {specialty}
                </span>
              ))}
            </div>

            {/* Experience Badge */}
            <div className="mt-4 flex items-center space-x-2">
              <span className="text-electric-orange font-bold text-lg">
                {trainer.experience}+
              </span>
              <span className="text-gray-500 text-sm">Years Experience</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
