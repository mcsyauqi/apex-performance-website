"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Users,
  Calendar,
  Award,
  Dumbbell,
  Heart,
  Target,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { ClassCard } from "@/components/ui/class-card";
import { TrainerCard } from "@/components/ui/trainer-card";
import { classes } from "@/data/classes";
import { trainers } from "@/data/trainers";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { value: "5,000+", label: "Active Members", icon: Users },
  { value: "50+", label: "Classes/Week", icon: Calendar },
  { value: "15+", label: "Expert Trainers", icon: Award },
];

const features = [
  {
    icon: Dumbbell,
    title: "State-of-the-Art Equipment",
    description: "Premium machines and free weights from world-class brands",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description: "Certified professionals dedicated to your success",
  },
  {
    icon: Heart,
    title: "Wellness Focus",
    description: "Holistic approach to fitness, nutrition, and recovery",
  },
  {
    icon: Target,
    title: "Results Driven",
    description: "Proven programs designed to achieve your goals",
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: "#stats-section",
        start: "top 80%",
        onEnter: () => {
          gsap.to({}, {
            duration: 2,
            onUpdate: function() {
              setCount1(Math.floor(this.progress() * 5000));
              setCount2(Math.floor(this.progress() * 50));
              setCount3(Math.floor(this.progress() * 15));
            }
          });
        },
        once: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <motion.div
          style={{ y }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070"
            alt="Gym background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-black/70 via-deep-black/60 to-deep-black" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity }}
          className="relative z-10 container mx-auto px-4 lg:px-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 text-sm font-medium uppercase tracking-wider text-power-red bg-power-red/10 rounded-full border border-power-red/20">
              Premium Fitness Experience
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="heading-font text-5xl md:text-7xl lg:text-8xl font-bold text-pure-white mb-6 leading-tight uppercase"
          >
            Unleash Your
            <br />
            <span className="text-gradient">Potential</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10"
          >
            Where Champions Are Made. Every rep counts. Every day matters.
            <br />
            Start your transformation today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/trial">
              <Button size="lg" className="group">
                Claim Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/classes">
              <Button variant="outline" size="lg">
                View Classes
              </Button>
            </Link>
          </motion.div>

          {/* Stats Ticker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-power-red" />
                <div className="heading-font text-3xl md:text-4xl font-bold text-pure-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-gray-500 rounded-full flex items-start justify-center p-1"
          >
            <motion.div className="w-1.5 h-3 bg-power-red rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-power-red/10 text-power-red mb-4">
                <Users className="w-8 h-8" />
              </div>
              <div className="heading-font text-5xl font-bold text-pure-white mb-2">
                {count1.toLocaleString()}+
              </div>
              <div className="text-gray-400">Active Members</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-electric-orange/10 text-electric-orange mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <div className="heading-font text-5xl font-bold text-pure-white mb-2">
                {count2}+
              </div>
              <div className="text-gray-400">Classes Per Week</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success-green/10 text-success-green mb-4">
                <Award className="w-8 h-8" />
              </div>
              <div className="heading-font text-5xl font-bold text-pure-white mb-2">
                {count3}+
              </div>
              <div className="text-gray-400">Expert Trainers</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-deep-black">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="WHY CHOOSE APEX"
            subtitle="Experience the difference with our premium facilities and expert guidance"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-power-red/50 transition-all duration-300 card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-power-red to-electric-orange flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-pure-white" />
                </div>
                <h3 className="heading-font text-xl font-bold text-pure-white mb-3 uppercase">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeading
              title="POPULAR CLASSES"
              subtitle="Find your perfect workout from our diverse range of classes"
              centered={false}
            />
            <Link
              href="/classes"
              className="mt-6 md:mt-0 inline-flex items-center text-power-red hover:text-electric-orange transition-colors font-medium"
            >
              View All Classes
              <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.slice(0, 6).map((classItem, index) => (
              <ClassCard key={classItem.id} classData={classItem} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2075"
          alt="Gym workout"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-power-red/90 to-electric-orange/90" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold text-pure-white mb-6 uppercase">
              Ready To Transform?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Join APEX Performance today and get your first week free. No
              commitment, no pressure – just results.
            </p>
            <Link href="/trial">
              <Button
                size="lg"
                className="bg-pure-white text-power-red hover:bg-gray-100 hover:shadow-none"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-24 bg-deep-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeading
              title="MEET OUR TRAINERS"
              subtitle="World-class coaches dedicated to your success"
              centered={false}
            />
            <Link
              href="/trainers"
              className="mt-6 md:mt-0 inline-flex items-center text-power-red hover:text-electric-orange transition-colors font-medium"
            >
              View All Trainers
              <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.slice(0, 3).map((trainer, index) => (
              <TrainerCard key={trainer.id} trainer={trainer} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="SUCCESS STORIES"
            subtitle="Hear from our members who transformed their lives"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "APEX completely changed my life. I've lost 30kg and gained a whole new perspective on fitness.",
                name: "Michael R.",
                role: "Member since 2023",
                image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200",
              },
              {
                quote:
                  "The trainers here are incredible. They pushed me beyond what I thought was possible.",
                name: "Sarah K.",
                role: "Member since 2022",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200",
              },
              {
                quote:
                  "The community at APEX is what keeps me coming back. It's more than a gym – it's a family.",
                name: "David L.",
                role: "Member since 2021",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-deep-black border border-border"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-electric-orange"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-pure-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/transformations">
              <Button variant="outline">
                View All Transformations
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-deep-black relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070"
          alt="Workout motivation"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/80 to-deep-black/60" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-font text-4xl md:text-6xl lg:text-7xl font-bold text-pure-white mb-6 uppercase">
              Your Journey
              <br />
              <span className="text-gradient">Starts Here</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-xl mx-auto mb-10">
              Every rep counts. Every day matters. Start today.
            </p>
            <Link href="/trial">
              <Button size="lg" className="animate-pulse-glow">
                Join the Community
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
