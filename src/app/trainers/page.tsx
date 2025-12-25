"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Award, X, ArrowRight } from "lucide-react";
import { trainers } from "@/data/trainers";
import { Button } from "@/components/ui/button";

export default function TrainersPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedTrainer = trainers.find(t => t.id === selected);

  return (
    <main className="bg-deep-black min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <span className="text-power-red text-sm font-bold tracking-[0.3em] uppercase">Our Team</span>
            <h1 className="heading-font text-5xl lg:text-7xl font-black text-pure-white mt-4 mb-6">
              MEET THE
              <br />
              <span className="text-gradient">EXPERTS</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Certified professionals with decades of combined experience, dedicated to your transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trainers - Large Cards */}
      <section className="px-8 lg:px-16 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainers.map((trainer, i) => (
              <motion.div
                key={trainer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelected(trainer.id)}
                className="group cursor-pointer"
              >
                <div className="relative rounded-3xl overflow-hidden bg-card border border-border hover:border-power-red/50 transition-all">
                  <div className="grid grid-cols-2 min-h-[300px]">
                    {/* Image */}
                    <div className="relative">
                      <Image
                        src={trainer.image}
                        alt={trainer.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {/* Content */}
                    <div className="p-8 flex flex-col justify-center">
                      <h2 className="heading-font text-2xl font-bold text-pure-white group-hover:text-power-red transition-colors mb-1">
                        {trainer.name}
                      </h2>
                      <p className="text-power-red text-sm mb-4">{trainer.title}</p>
                      <p className="text-gray-500 text-sm mb-4 line-clamp-3">{trainer.bio}</p>
                      <div className="flex flex-wrap gap-2">
                        {trainer.specialties.slice(0, 2).map(spec => (
                          <span key={spec} className="px-2 py-1 bg-power-red/10 text-power-red text-xs rounded-full">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-8 lg:px-16 py-16 border-y border-border">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          {[
            { value: "50+", label: "Certifications" },
            { value: "10K+", label: "Lives Changed" },
            { value: "15+", label: "Years Experience" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="heading-font text-4xl lg:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 lg:px-16 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="heading-font text-3xl font-bold text-pure-white mb-4">
            Ready to train with the best?
          </h2>
          <p className="text-gray-400 mb-8">
            Book a free consultation with one of our expert trainers today.
          </p>
          <Link href="/trial">
            <Button size="lg">
              Book Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedTrainer && (
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
              className="bg-card border border-border rounded-3xl max-w-3xl w-full overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative h-80 md:h-auto">
                  <Image
                    src={selectedTrainer.image}
                    alt={selectedTrainer.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 relative">
                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-deep-black rounded-full flex items-center justify-center text-white hover:bg-power-red transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <span className="text-power-red text-sm font-bold uppercase">{selectedTrainer.title}</span>
                  <h2 className="heading-font text-3xl font-bold text-pure-white mt-2 mb-4">{selectedTrainer.name}</h2>
                  <p className="text-gray-400 text-sm mb-6">{selectedTrainer.bio}</p>

                  <div className="mb-6">
                    <h4 className="text-pure-white font-semibold mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-power-red" /> Specialties
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedTrainer.specialties.map(spec => (
                        <span key={spec} className="px-3 py-1 bg-power-red/10 text-power-red text-sm rounded-full">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-pure-white font-semibold mb-3">Certifications</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {selectedTrainer.certifications.map(cert => (
                        <li key={cert}>• {cert}</li>
                      ))}
                    </ul>
                  </div>

                  {selectedTrainer.socialMedia?.instagram && (
                    <a
                      href={`https://instagram.com/${selectedTrainer.socialMedia.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-power-red hover:text-electric-orange transition-colors text-sm"
                    >
                      <Instagram className="w-4 h-4" /> {selectedTrainer.socialMedia.instagram}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
