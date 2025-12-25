"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { classes } from "@/data/classes";
import { trainers } from "@/data/trainers";

export default function HomePage() {
  return (
    <main className="bg-deep-black">
      {/* Hero - Split Screen */}
      <section className="min-h-screen grid lg:grid-cols-2">
        {/* Left - Content */}
        <div className="flex flex-col justify-center px-8 lg:px-16 py-32 lg:py-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-power-red text-sm font-bold tracking-[0.3em] uppercase mb-4 block">
              Premium Fitness
            </span>
            <h1 className="heading-font text-5xl lg:text-7xl font-black text-pure-white leading-[0.9] mb-6">
              FORGE
              <br />
              YOUR
              <br />
              <span className="text-gradient">LEGACY</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-md mb-8">
              Where elite athletes and beginners alike push beyond limits.
              Your transformation starts with a single step.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/trial">
                <Button size="lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button variant="ghost" size="lg" className="group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Story
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Right - Image */}
        <div className="relative hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200"
            alt="Gym"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-black via-deep-black/50 to-transparent" />

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-16 left-8 right-8 grid grid-cols-3 gap-4"
          >
            {[
              { value: "5K+", label: "Members" },
              { value: "50+", label: "Classes" },
              { value: "15+", label: "Trainers" },
            ].map((stat) => (
              <div key={stat.label} className="bg-deep-black/80 backdrop-blur-sm border border-border rounded-xl p-4 text-center">
                <div className="heading-font text-2xl font-bold text-gradient">{stat.value}</div>
                <div className="text-gray-500 text-xs uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="px-8 lg:px-16 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-pure-white mb-4">
            WHY <span className="text-gradient">APEX</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {/* Large Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800"
              alt="Equipment"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="heading-font text-2xl font-bold text-pure-white mb-2">
                World-Class Equipment
              </h3>
              <p className="text-gray-300 text-sm">
                200+ pieces of premium equipment from Rogue, Hammer Strength & Life Fitness
              </p>
            </div>
          </motion.div>

          {/* Small Cards */}
          {[
            { title: "24/7 Access", desc: "Train anytime", color: "from-power-red to-electric-orange" },
            { title: "Expert Coaches", desc: "Certified trainers", color: "from-electric-orange to-yellow-500" },
            { title: "Recovery Zone", desc: "Sauna & cold plunge", color: "from-power-red to-pink-500" },
            { title: "Group Classes", desc: "50+ weekly", color: "from-electric-orange to-power-red" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-gradient-to-br ${item.color} rounded-3xl p-6 flex flex-col justify-end aspect-square`}
            >
              <h3 className="heading-font text-lg font-bold text-pure-white">{item.title}</h3>
              <p className="text-white/80 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Classes Horizontal Scroll */}
      <section className="py-20 border-y border-border">
        <div className="px-8 lg:px-16 mb-8 flex items-end justify-between">
          <div>
            <span className="text-power-red text-sm font-bold tracking-[0.2em] uppercase">Classes</span>
            <h2 className="heading-font text-4xl font-bold text-pure-white mt-2">
              Find Your Flow
            </h2>
          </div>
          <Link href="/classes" className="text-power-red hover:text-electric-orange transition-colors flex items-center gap-1 text-sm font-medium">
            View All <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 px-8 lg:px-16 pb-4" style={{ width: "max-content" }}>
            {classes.slice(0, 6).map((cls, i) => (
              <motion.div
                key={cls.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="w-72 flex-shrink-0 group"
              >
                <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={cls.image}
                    alt={cls.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-power-red text-white text-xs font-bold rounded-full uppercase">
                      {cls.category}
                    </span>
                  </div>
                </div>
                <h3 className="heading-font text-xl font-bold text-pure-white group-hover:text-power-red transition-colors">
                  {cls.name}
                </h3>
                <p className="text-gray-500 text-sm">{cls.duration} min • {cls.trainer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="px-8 lg:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-power-red text-sm font-bold tracking-[0.2em] uppercase">Our Team</span>
            <h2 className="heading-font text-4xl font-bold text-pure-white mt-2">
              Elite Coaches
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trainers.slice(0, 4).map((trainer, i) => (
              <motion.div
                key={trainer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="heading-font text-lg font-bold text-pure-white">{trainer.name}</h3>
                <p className="text-power-red text-sm">{trainer.title}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/trainers">
              <Button variant="outline">
                Meet All Trainers
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Full Width */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2000"
          alt="Background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-power-red/20 to-electric-orange/20" />

        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-electric-orange fill-electric-orange" />
            ))}
          </div>
          <blockquote className="text-2xl lg:text-4xl text-pure-white font-light italic mb-8 leading-relaxed">
            &ldquo;APEX changed my life. I lost 30kg and gained confidence I never knew I had. The trainers here truly care about your success.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <Image
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=100"
              alt="Member"
              width={56}
              height={56}
              className="rounded-full object-cover"
            />
            <div className="text-left">
              <div className="text-pure-white font-semibold">Michael R.</div>
              <div className="text-gray-400 text-sm">Member since 2023</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Minimal */}
      <section className="px-8 lg:px-16 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-font text-5xl lg:text-7xl font-black text-pure-white mb-6">
              READY TO
              <br />
              <span className="text-gradient">BEGIN?</span>
            </h2>
            <p className="text-gray-400 text-xl mb-10 max-w-lg mx-auto">
              Your first week is on us. No contracts, no pressure.
            </p>
            <Link href="/trial">
              <Button size="lg" className="text-lg px-10 py-6">
                Claim Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
