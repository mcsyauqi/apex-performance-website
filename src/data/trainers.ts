export interface Trainer {
  id: string;
  name: string;
  slug: string;
  title: string;
  specialties: string[];
  bio: string;
  shortBio: string;
  image: string;
  certifications: string[];
  experience: number;
  socialMedia: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
  schedule: {
    day: string;
    available: string[];
  }[];
  testimonials: {
    name: string;
    text: string;
    rating: number;
  }[];
}

export const trainers: Trainer[] = [
  {
    id: "marcus-chen",
    name: "Marcus Chen",
    slug: "marcus-chen",
    title: "Head HIIT & Conditioning Coach",
    specialties: ["HIIT", "Functional Training", "Athletic Performance"],
    bio: "Marcus is a former professional athlete who discovered his passion for coaching after a career-ending injury. With over 12 years of experience in high-performance training, he has helped hundreds of clients achieve their fitness goals. His HIIT Inferno class is legendary for transforming bodies and minds. Marcus believes that everyone has an athlete within them waiting to be unleashed.",
    shortBio: "Former pro athlete turned elite coach. 12+ years experience in high-performance training.",
    image: "/images/trainers/marcus.svg",
    certifications: [
      "NASM Certified Personal Trainer",
      "CrossFit Level 3 Trainer",
      "Precision Nutrition Level 2",
      "TRX Suspension Training Certified",
    ],
    experience: 12,
    socialMedia: {
      instagram: "@marcus.apex",
      twitter: "@marcuschen",
    },
    schedule: [
      { day: "Monday", available: ["06:00-12:00", "16:00-20:00"] },
      { day: "Wednesday", available: ["06:00-12:00", "16:00-20:00"] },
      { day: "Friday", available: ["06:00-12:00"] },
      { day: "Saturday", available: ["08:00-14:00"] },
    ],
    testimonials: [
      {
        name: "David K.",
        text: "Marcus completely transformed my approach to fitness. Lost 30 lbs and gained a whole new mindset!",
        rating: 5,
      },
      {
        name: "Jennifer M.",
        text: "The best trainer I've ever worked with. His energy is contagious and his programs actually work.",
        rating: 5,
      },
    ],
  },
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    slug: "sarah-johnson",
    title: "Strength & Powerlifting Specialist",
    specialties: ["Strength Training", "Powerlifting", "Body Recomposition"],
    bio: "Sarah is a competitive powerlifter and certified strength coach who empowers clients to build confidence through strength. She specializes in helping beginners master proper form and experienced lifters break through plateaus. Her approach combines scientific programming with personalized attention to help you achieve sustainable results.",
    shortBio: "Competitive powerlifter empowering clients through strength training.",
    image: "/images/trainers/sarah.svg",
    certifications: [
      "CSCS - Certified Strength and Conditioning Specialist",
      "USA Powerlifting Coach",
      "ACE Personal Trainer",
      "Sports Nutrition Specialist",
    ],
    experience: 8,
    socialMedia: {
      instagram: "@sarah.lifts",
      linkedin: "sarah-johnson-fitness",
    },
    schedule: [
      { day: "Tuesday", available: ["07:00-15:00"] },
      { day: "Thursday", available: ["07:00-15:00"] },
      { day: "Saturday", available: ["10:00-16:00"] },
    ],
    testimonials: [
      {
        name: "Michael R.",
        text: "Sarah helped me deadlift 400lbs when I thought 300 was my limit. Incredible coach!",
        rating: 5,
      },
      {
        name: "Amanda T.",
        text: "Finally found a trainer who understands women's strength training. Sarah is the best!",
        rating: 5,
      },
    ],
  },
  {
    id: "emma-williams",
    name: "Emma Williams",
    slug: "emma-williams",
    title: "Yoga & Mindfulness Director",
    specialties: ["Vinyasa Yoga", "Meditation", "Stress Management"],
    bio: "Emma discovered yoga during a stressful corporate career and never looked back. After training in India and Bali, she brings an authentic, accessible approach to yoga that welcomes practitioners of all levels. Her classes blend physical practice with mindfulness techniques to help you find balance in your busy life.",
    shortBio: "Certified yoga instructor bringing mindfulness and movement together.",
    image: "/images/trainers/emma.svg",
    certifications: [
      "RYT-500 Yoga Alliance",
      "Mindfulness-Based Stress Reduction (MBSR)",
      "Yin Yoga Certified",
      "Prenatal Yoga Specialist",
    ],
    experience: 10,
    socialMedia: {
      instagram: "@emma.yoga.flow",
    },
    schedule: [
      { day: "Monday", available: ["08:00-14:00"] },
      { day: "Wednesday", available: ["08:00-14:00"] },
      { day: "Friday", available: ["08:00-14:00"] },
      { day: "Sunday", available: ["08:00-12:00"] },
    ],
    testimonials: [
      {
        name: "Lisa P.",
        text: "Emma's classes are my weekly therapy. She creates such a peaceful, welcoming environment.",
        rating: 5,
      },
      {
        name: "Robert W.",
        text: "As a skeptic, Emma made me a believer. My flexibility and stress levels have completely changed.",
        rating: 5,
      },
    ],
  },
  {
    id: "jake-martinez",
    name: "Jake Martinez",
    slug: "jake-martinez",
    title: "Cycling & Cardio Coach",
    specialties: ["Indoor Cycling", "Endurance Training", "Heart Rate Training"],
    bio: "Jake is a former competitive cyclist who brings the thrill of the road into the spin studio. His high-energy classes combine killer playlists, motivating coaching, and scientifically-designed intervals to deliver maximum results. Whether you're a cycling newbie or seasoned rider, Jake will push you to new heights.",
    shortBio: "Former competitive cyclist bringing road-level intensity to the studio.",
    image: "/images/trainers/jake.svg",
    certifications: [
      "Schwinn Cycling Certified",
      "ACE Group Fitness Instructor",
      "Heart Rate Performance Specialist",
      "Sports Psychology Certificate",
    ],
    experience: 7,
    socialMedia: {
      instagram: "@jake.spins",
      twitter: "@jakemartinez",
    },
    schedule: [
      { day: "Monday", available: ["17:00-21:00"] },
      { day: "Tuesday", available: ["05:30-09:00"] },
      { day: "Thursday", available: ["17:00-21:00"] },
      { day: "Saturday", available: ["07:00-12:00"] },
    ],
    testimonials: [
      {
        name: "Chris D.",
        text: "Jake's spin classes are addictive! The music, the energy, the results - all amazing.",
        rating: 5,
      },
      {
        name: "Nicole F.",
        text: "Best cardio workout I've ever had. Jake knows how to motivate without being intimidating.",
        rating: 5,
      },
    ],
  },
  {
    id: "mike-thompson",
    name: "Mike Thompson",
    slug: "mike-thompson",
    title: "Combat Sports Director",
    specialties: ["Boxing", "Kickboxing", "Self-Defense"],
    bio: "Mike is a former amateur boxing champion with a passion for teaching the sweet science. His classes focus on proper technique, conditioning, and the mental discipline that boxing develops. Mike creates a supportive environment where everyone from beginners to advanced fighters can improve their skills.",
    shortBio: "Former amateur boxing champion teaching technique and discipline.",
    image: "/images/trainers/mike.svg",
    certifications: [
      "USA Boxing Coach Level 2",
      "NASM Performance Enhancement Specialist",
      "First Aid & CPR Certified",
      "Krav Maga Instructor",
    ],
    experience: 15,
    socialMedia: {
      instagram: "@mike.fights",
    },
    schedule: [
      { day: "Tuesday", available: ["17:00-21:00"] },
      { day: "Thursday", available: ["17:00-21:00"] },
      { day: "Saturday", available: ["09:00-14:00"] },
    ],
    testimonials: [
      {
        name: "Alex G.",
        text: "Mike taught me more about discipline in 6 months than I learned in 10 years. Life-changing.",
        rating: 5,
      },
      {
        name: "Samantha K.",
        text: "I feel so empowered after learning boxing with Mike. Great workout and self-defense skills!",
        rating: 5,
      },
    ],
  },
  {
    id: "lisa-anderson",
    name: "Lisa Anderson",
    slug: "lisa-anderson",
    title: "Pilates & Rehabilitation Specialist",
    specialties: ["Mat Pilates", "Reformer Pilates", "Injury Rehabilitation"],
    bio: "Lisa combines her background in physical therapy with her Pilates expertise to help clients move better and feel stronger. She specializes in working with clients recovering from injuries or dealing with chronic pain. Her attention to detail and focus on proper alignment makes her classes both challenging and therapeutic.",
    shortBio: "Physical therapist and Pilates expert focused on movement quality.",
    image: "/images/trainers/lisa.svg",
    certifications: [
      "PMA Certified Pilates Teacher",
      "Doctor of Physical Therapy",
      "STOTT PILATES Certified",
      "Functional Movement Screen Certified",
    ],
    experience: 11,
    socialMedia: {
      instagram: "@lisa.pilates",
      linkedin: "lisa-anderson-dpt",
    },
    schedule: [
      { day: "Monday", available: ["09:00-17:00"] },
      { day: "Wednesday", available: ["09:00-17:00"] },
      { day: "Friday", available: ["09:00-15:00"] },
    ],
    testimonials: [
      {
        name: "Karen M.",
        text: "After my back surgery, Lisa helped me regain strength and confidence. She's incredibly knowledgeable.",
        rating: 5,
      },
      {
        name: "Tom B.",
        text: "Lisa's Pilates classes fixed my posture issues that I'd had for years. Highly recommend!",
        rating: 5,
      },
    ],
  },
];
