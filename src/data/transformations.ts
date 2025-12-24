export interface Transformation {
  id: string;
  name: string;
  age: number;
  duration: string;
  beforeImage: string;
  afterImage: string;
  weightLoss?: number;
  muscleGain?: number;
  story: string;
  quote: string;
  program: string;
  trainer: string;
}

export const transformations: Transformation[] = [
  {
    id: "1",
    name: "Michael Rodriguez",
    age: 34,
    duration: "6 months",
    beforeImage: "/images/transformations/michael-before.jpg",
    afterImage: "/images/transformations/michael-after.jpg",
    weightLoss: 25,
    story: "After years of sedentary office work, I decided it was time for a change. APEX Performance gave me the tools, guidance, and community I needed to completely transform my life. The trainers pushed me beyond what I thought was possible.",
    quote: "I went from barely climbing stairs to running my first 10K. APEX changed everything.",
    program: "Performance Membership + Personal Training",
    trainer: "Marcus Chen",
  },
  {
    id: "2",
    name: "Sarah Mitchell",
    age: 28,
    duration: "4 months",
    beforeImage: "/images/transformations/sarah-before.jpg",
    afterImage: "/images/transformations/sarah-after.jpg",
    weightLoss: 15,
    muscleGain: 5,
    story: "I was always intimidated by gyms until I found APEX. The supportive environment and amazing group classes made fitness fun. I discovered a strength I never knew I had.",
    quote: "APEX didn't just change my body – it changed my mindset about what I'm capable of.",
    program: "Elite Membership",
    trainer: "Sarah Johnson",
  },
  {
    id: "3",
    name: "David Chen",
    age: 42,
    duration: "8 months",
    beforeImage: "/images/transformations/david-before.jpg",
    afterImage: "/images/transformations/david-after.jpg",
    weightLoss: 35,
    story: "At 42, I thought my best years were behind me. APEX proved me wrong. With personalized training and nutrition guidance, I'm in the best shape of my life. My energy levels are through the roof.",
    quote: "Age is just a number. APEX helped me prove that to myself every single day.",
    program: "Elite Membership + Boxing",
    trainer: "Mike Thompson",
  },
  {
    id: "4",
    name: "Jennifer Park",
    age: 31,
    duration: "5 months",
    beforeImage: "/images/transformations/jennifer-before.jpg",
    afterImage: "/images/transformations/jennifer-after.jpg",
    muscleGain: 8,
    story: "I came to APEX skinny and weak, wanting to build strength and confidence. Through consistent training and the amazing Power Strength classes, I've built a body I'm proud of.",
    quote: "Strong is the new beautiful. Thank you APEX for showing me my potential.",
    program: "Performance Membership + Strength Training",
    trainer: "Sarah Johnson",
  },
  {
    id: "5",
    name: "Robert Williams",
    age: 38,
    duration: "12 months",
    beforeImage: "/images/transformations/robert-before.jpg",
    afterImage: "/images/transformations/robert-after.jpg",
    weightLoss: 50,
    muscleGain: 10,
    story: "My doctor told me I needed to make changes or face serious health consequences. APEX became my second home. The trainers, the community, the classes – everything came together to save my life.",
    quote: "APEX didn't just help me lose weight. They helped me gain a whole new life.",
    program: "Elite Membership + Full Coaching",
    trainer: "Marcus Chen",
  },
  {
    id: "6",
    name: "Amanda Torres",
    age: 26,
    duration: "3 months",
    beforeImage: "/images/transformations/amanda-before.jpg",
    afterImage: "/images/transformations/amanda-after.jpg",
    weightLoss: 12,
    story: "Post-pregnancy, I struggled to find time and motivation for fitness. APEX's flexible scheduling and amazing childcare made it possible. The yoga and Pilates classes restored my body and mind.",
    quote: "As a new mom, APEX gave me back my strength and my confidence.",
    program: "Performance Membership + Yoga & Pilates",
    trainer: "Emma Williams",
  },
];

export const stats = {
  totalWeightLost: "50,000+ kg",
  memberTransformations: "2,500+",
  averageWeightLoss: "15 kg",
  successRate: "94%",
};
