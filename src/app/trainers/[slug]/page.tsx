"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Award,
  Instagram,
  Twitter,
  Linkedin,
  Star,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { trainers } from "@/data/trainers";
import { classes } from "@/data/classes";

export default function TrainerDetailPage() {
  const params = useParams();
  const trainer = trainers.find((t) => t.slug === params.slug);

  if (!trainer) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-deep-black">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-pure-white mb-4">
            Trainer Not Found
          </h1>
          <Link href="/trainers">
            <Button>Back to Trainers</Button>
          </Link>
        </div>
      </div>
    );
  }

  const trainerClasses = classes.filter(
    (c) => c.trainerId === trainer.slug
  );

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-deep-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-power-red/10 rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <Link
            href="/trainers"
            className="inline-flex items-center text-gray-400 hover:text-pure-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Trainers
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-power-red/30 to-electric-orange/30">
                {/* Social Links Overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-center space-x-4">
                  {trainer.socialMedia.instagram && (
                    <a
                      href="#"
                      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-pure-white hover:bg-power-red transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                  {trainer.socialMedia.twitter && (
                    <a
                      href="#"
                      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-pure-white hover:bg-power-red transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {trainer.socialMedia.linkedin && (
                    <a
                      href="#"
                      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-pure-white hover:bg-power-red transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Profile Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h1 className="font-[family-name:var(--font-oswald)] text-5xl md:text-6xl font-bold text-pure-white mb-2">
                {trainer.name}
              </h1>
              <p className="text-xl text-power-red font-medium mb-6">
                {trainer.title}
              </p>

              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-electric-orange" />
                  <span className="text-gray-400">
                    {trainer.experience}+ Years Experience
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-electric-orange fill-electric-orange"
                    />
                  ))}
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {trainer.bio}
              </p>

              {/* Specialties */}
              <div className="mb-8">
                <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-3">
                  Specialties
                </h3>
                <div className="flex flex-wrap gap-2">
                  {trainer.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-power-red/20 to-electric-orange/20 text-pure-white rounded-full border border-power-red/30"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <Link href="/trial">
                <Button size="lg">
                  Book a Session
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications & Schedule */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <div>
              <h2 className="font-[family-name:var(--font-oswald)] text-3xl font-bold text-pure-white mb-6">
                Certifications
              </h2>
              <div className="space-y-3">
                {trainer.certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-4 rounded-xl bg-deep-black border border-border"
                  >
                    <Award className="w-5 h-5 text-electric-orange flex-shrink-0" />
                    <span className="text-gray-300">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div>
              <h2 className="font-[family-name:var(--font-oswald)] text-3xl font-bold text-pure-white mb-6">
                Availability
              </h2>
              <div className="space-y-3">
                {trainer.schedule.map((slot, index) => (
                  <motion.div
                    key={slot.day}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-xl bg-deep-black border border-border"
                  >
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-power-red" />
                      <span className="text-pure-white font-medium">
                        {slot.day}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{slot.available.join(", ")}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes */}
      {trainerClasses.length > 0 && (
        <section className="py-16 bg-deep-black">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-[family-name:var(--font-oswald)] text-3xl font-bold text-pure-white mb-8">
              Classes by {trainer.name.split(" ")[0]}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trainerClasses.map((classItem) => (
                <Link
                  key={classItem.id}
                  href={`/classes/${classItem.slug}`}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-power-red/50 transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-sm text-power-red font-medium">
                        {classItem.category}
                      </span>
                      <h3 className="font-[family-name:var(--font-oswald)] text-xl font-bold text-pure-white mt-1 group-hover:text-power-red transition-colors">
                        {classItem.name}
                      </h3>
                      <p className="text-gray-400 text-sm mt-2">
                        {classItem.shortDescription}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-power-red group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-[family-name:var(--font-oswald)] text-3xl font-bold text-pure-white mb-8">
            What Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainer.testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-deep-black border border-border"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-electric-orange fill-electric-orange"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="text-pure-white font-medium">
                  {testimonial.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-power-red to-electric-orange">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-oswald)] text-4xl font-bold text-pure-white mb-4">
            TRAIN WITH {trainer.name.split(" ")[0].toUpperCase()}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book your personal training session today
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
