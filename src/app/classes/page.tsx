"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Flame, Users, X } from "lucide-react";
import { classes, categories } from "@/data/classes";
import { cn } from "@/lib/utils";

export default function ClassesPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [filter, setFilter] = useState("all");

  const filtered = classes.filter(c => filter === "all" || c.category === filter);
  const selectedClass = classes.find(c => c.id === selected);

  return (
    <main className="bg-deep-black min-h-screen">
      {/* Hero - Minimal */}
      <section className="pt-32 pb-16 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-power-red text-sm font-bold tracking-[0.3em] uppercase">Our Classes</span>
            <h1 className="heading-font text-5xl lg:text-7xl font-black text-pure-white mt-4 mb-6">
              MOVE YOUR
              <br />
              <span className="text-gradient">BODY</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl">
              From high-intensity workouts to mindful yoga, find the perfect class for your fitness journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Pills */}
      <section className="px-8 lg:px-16 pb-8 sticky top-20 z-30 bg-deep-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all",
                  filter === cat.value
                    ? "bg-power-red text-pure-white"
                    : "bg-card border border-border text-gray-400 hover:text-pure-white hover:border-power-red/50"
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="px-8 lg:px-16 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((cls, i) => (
                <motion.div
                  key={cls.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setSelected(cls.id)}
                  className="break-inside-avoid group cursor-pointer"
                >
                  <div className="relative rounded-2xl overflow-hidden bg-card border border-border hover:border-power-red/50 transition-all">
                    <div className="relative h-48">
                      <Image
                        src={cls.image}
                        alt={cls.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-black/90 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-power-red/90 backdrop-blur-sm text-white text-xs font-bold rounded-full uppercase">
                          {cls.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="heading-font text-xl font-bold text-pure-white mb-2 group-hover:text-power-red transition-colors">
                        {cls.name}
                      </h3>
                      <p className="text-gray-500 text-sm mb-4 line-clamp-2">{cls.description}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {cls.duration} min
                        </span>
                        <span className="flex items-center gap-1">
                          <Flame className="w-3 h-3" /> {cls.intensity}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" /> {cls.trainer}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedClass && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-3xl max-w-2xl w-full overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={selectedClass.image}
                  alt={selectedClass.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-deep-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-power-red transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-8">
                <span className="text-power-red text-sm font-bold uppercase">{selectedClass.category}</span>
                <h2 className="heading-font text-3xl font-bold text-pure-white mt-2 mb-4">{selectedClass.name}</h2>
                <p className="text-gray-400 mb-6">{selectedClass.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-deep-black rounded-xl p-4 text-center">
                    <Clock className="w-5 h-5 text-power-red mx-auto mb-2" />
                    <div className="text-pure-white font-bold">{selectedClass.duration} min</div>
                    <div className="text-gray-500 text-xs">Duration</div>
                  </div>
                  <div className="bg-deep-black rounded-xl p-4 text-center">
                    <Flame className="w-5 h-5 text-electric-orange mx-auto mb-2" />
                    <div className="text-pure-white font-bold capitalize">{selectedClass.intensity}</div>
                    <div className="text-gray-500 text-xs">Intensity</div>
                  </div>
                  <div className="bg-deep-black rounded-xl p-4 text-center">
                    <Users className="w-5 h-5 text-success-green mx-auto mb-2" />
                    <div className="text-pure-white font-bold">{selectedClass.calories}</div>
                    <div className="text-gray-500 text-xs">Calories</div>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h4 className="text-pure-white font-semibold mb-3">Schedule</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedClass.schedule.map((s, i) => (
                      <span key={i} className="px-3 py-1 bg-power-red/10 text-power-red text-sm rounded-full">
                        {s.day} {s.time}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
