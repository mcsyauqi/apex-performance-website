"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Clock, Flame } from "lucide-react";
import { ClassCard } from "@/components/ui/class-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { classes, categories } from "@/data/classes";
import { cn } from "@/lib/utils";

const days = [
  "All",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function ClassesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDay, setSelectedDay] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredClasses = classes.filter((classItem) => {
    const matchesCategory =
      selectedCategory === "all" || classItem.category === selectedCategory;
    const matchesDay =
      selectedDay === "All" ||
      classItem.schedule.some((s) => s.day === selectedDay);
    const matchesSearch =
      classItem.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      classItem.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      classItem.trainer.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesDay && matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-deep-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-power-red/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-electric-orange/10 rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-[family-name:var(--font-oswald)] text-5xl md:text-7xl font-bold text-pure-white mb-6">
              FIND YOUR
              <br />
              <span className="text-gradient">PERFECT CLASS</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From high-intensity HIIT to mindful yoga, discover classes that
              match your fitness goals and schedule.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-card border-y border-border sticky top-20 z-40">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search classes, trainers, or categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-deep-black border border-border rounded-full text-pure-white placeholder:text-gray-500 focus:outline-none focus:border-power-red transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  selectedCategory === category.value
                    ? "bg-gradient-to-r from-power-red to-electric-orange text-pure-white"
                    : "bg-deep-black text-gray-400 hover:text-pure-white border border-border hover:border-power-red/50"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Day Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-medium transition-all",
                  selectedDay === day
                    ? "bg-pure-white text-deep-black"
                    : "text-gray-500 hover:text-pure-white"
                )}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-16 bg-deep-black">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Results Count */}
          <div className="mb-8 flex items-center justify-between">
            <p className="text-gray-400">
              Showing{" "}
              <span className="text-pure-white font-medium">
                {filteredClasses.length}
              </span>{" "}
              classes
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>Duration</span>
              </div>
              <div className="flex items-center space-x-1">
                <Flame className="w-4 h-4" />
                <span>Intensity</span>
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {filteredClasses.length > 0 ? (
              <motion.div
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredClasses.map((classItem, index) => (
                  <ClassCard
                    key={classItem.id}
                    classData={classItem}
                    index={index}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <Filter className="w-16 h-16 mx-auto mb-4 text-gray-600" />
                <h3 className="text-xl font-semibold text-pure-white mb-2">
                  No classes found
                </h3>
                <p className="text-gray-400">
                  Try adjusting your filters or search terms
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Schedule Overview */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="WEEKLY SCHEDULE"
            subtitle="Plan your week with our comprehensive class schedule"
          />

          <div className="mt-12 overflow-x-auto">
            <div className="min-w-[800px]">
              <div className="grid grid-cols-8 gap-2">
                {/* Header */}
                <div className="p-4 font-medium text-gray-500">Time</div>
                {days.slice(1).map((day) => (
                  <div
                    key={day}
                    className="p-4 font-medium text-pure-white text-center"
                  >
                    {day.slice(0, 3)}
                  </div>
                ))}

                {/* Time Slots */}
                {["06:00", "08:00", "10:00", "17:30", "18:00"].map((time) => (
                  <>
                    <div key={`${time}-label`} className="p-4 text-gray-400">
                      {time}
                    </div>
                    {days.slice(1).map((day) => {
                      const classForSlot = classes.find((c) =>
                        c.schedule.some(
                          (s) => s.day === day && s.time === time
                        )
                      );
                      return (
                        <div
                          key={`${day}-${time}`}
                          className={cn(
                            "p-2 rounded-lg text-xs text-center",
                            classForSlot
                              ? "bg-gradient-to-r from-power-red/20 to-electric-orange/20 border border-power-red/30"
                              : "bg-deep-black/50"
                          )}
                        >
                          {classForSlot && (
                            <div className="text-pure-white font-medium">
                              {classForSlot.name}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
