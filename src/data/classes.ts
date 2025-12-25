export interface ClassType {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  shortDescription: string;
  duration: number;
  intensity: 1 | 2 | 3 | 4 | 5;
  calories: number;
  trainer: string;
  trainerId: string;
  image: string;
  videoPreview?: string;
  schedule: {
    day: string;
    time: string;
    room: string;
  }[];
  benefits: string[];
  requirements: string[];
}

export const classes: ClassType[] = [
  {
    id: "1",
    name: "HIIT Inferno",
    slug: "hiit-inferno",
    category: "HIIT",
    description: "High-Intensity Interval Training designed to maximize calorie burn and boost metabolism. This explosive workout alternates between intense bursts of activity and fixed periods of less-intense activity or rest. Perfect for those who want to push their limits and see rapid results.",
    shortDescription: "Maximum calorie burn with explosive interval training",
    duration: 45,
    intensity: 5,
    calories: 600,
    trainer: "Marcus Chen",
    trainerId: "marcus-chen",
    image: "/images/classes/hiit.svg",
    schedule: [
      { day: "Monday", time: "06:00", room: "Studio A" },
      { day: "Wednesday", time: "06:00", room: "Studio A" },
      { day: "Friday", time: "06:00", room: "Studio A" },
      { day: "Saturday", time: "09:00", room: "Studio A" },
    ],
    benefits: [
      "Burn up to 600 calories per session",
      "Boost metabolism for 24+ hours",
      "Improve cardiovascular health",
      "Build lean muscle mass",
      "Increase endurance and stamina",
    ],
    requirements: [
      "Moderate fitness level recommended",
      "Bring towel and water bottle",
      "Wear supportive athletic shoes",
    ],
  },
  {
    id: "2",
    name: "Power Strength",
    slug: "power-strength",
    category: "Strength",
    description: "Build functional strength and sculpt lean muscle with our comprehensive strength training program. Using a combination of free weights, resistance machines, and bodyweight exercises, this class targets all major muscle groups for total body transformation.",
    shortDescription: "Build muscle and functional strength",
    duration: 60,
    intensity: 4,
    calories: 450,
    trainer: "Sarah Johnson",
    trainerId: "sarah-johnson",
    image: "/images/classes/strength.svg",
    schedule: [
      { day: "Tuesday", time: "07:00", room: "Weight Room" },
      { day: "Thursday", time: "07:00", room: "Weight Room" },
      { day: "Saturday", time: "11:00", room: "Weight Room" },
    ],
    benefits: [
      "Build lean muscle mass",
      "Increase bone density",
      "Improve posture and balance",
      "Boost resting metabolism",
      "Enhance functional fitness",
    ],
    requirements: [
      "All fitness levels welcome",
      "Gloves recommended",
      "Towel required",
    ],
  },
  {
    id: "3",
    name: "Zen Flow Yoga",
    slug: "zen-flow-yoga",
    category: "Yoga",
    description: "Find your center with our signature vinyasa flow yoga class. This mindful practice connects breath with movement, building flexibility, strength, and inner peace. Perfect for stress relief and improving overall well-being.",
    shortDescription: "Mindful movement for flexibility and peace",
    duration: 75,
    intensity: 2,
    calories: 250,
    trainer: "Emma Williams",
    trainerId: "emma-williams",
    image: "/images/classes/yoga.svg",
    schedule: [
      { day: "Monday", time: "08:00", room: "Zen Studio" },
      { day: "Wednesday", time: "08:00", room: "Zen Studio" },
      { day: "Friday", time: "08:00", room: "Zen Studio" },
      { day: "Sunday", time: "09:00", room: "Zen Studio" },
    ],
    benefits: [
      "Increase flexibility and mobility",
      "Reduce stress and anxiety",
      "Improve mental clarity",
      "Build core strength",
      "Enhance mind-body connection",
    ],
    requirements: [
      "All levels welcome",
      "Yoga mat provided or bring your own",
      "Comfortable stretchy clothing",
    ],
  },
  {
    id: "4",
    name: "Spin Revolution",
    slug: "spin-revolution",
    category: "Cycling",
    description: "Experience the ultimate cardio workout on our state-of-the-art spin bikes. Set to energizing music, this ride takes you through hills, sprints, and endurance challenges that will transform your cardiovascular fitness.",
    shortDescription: "High-energy indoor cycling experience",
    duration: 50,
    intensity: 4,
    calories: 550,
    trainer: "Jake Martinez",
    trainerId: "jake-martinez",
    image: "/images/classes/cycling.svg",
    schedule: [
      { day: "Monday", time: "17:30", room: "Spin Studio" },
      { day: "Tuesday", time: "06:00", room: "Spin Studio" },
      { day: "Thursday", time: "17:30", room: "Spin Studio" },
      { day: "Saturday", time: "08:00", room: "Spin Studio" },
    ],
    benefits: [
      "Burn 500+ calories per session",
      "Build leg strength and endurance",
      "Low impact on joints",
      "Improve cardiovascular health",
      "Boost energy and mood",
    ],
    requirements: [
      "Cycling shoes recommended",
      "Bring water bottle",
      "Arrive 5 minutes early to set up bike",
    ],
  },
  {
    id: "5",
    name: "Boxing Fundamentals",
    slug: "boxing-fundamentals",
    category: "Boxing",
    description: "Learn the art of boxing while getting an incredible full-body workout. This class covers proper technique, footwork, combinations, and conditioning. No fighting required – just pure fitness and skill development.",
    shortDescription: "Learn to box while getting fit",
    duration: 60,
    intensity: 5,
    calories: 700,
    trainer: "Mike Thompson",
    trainerId: "mike-thompson",
    image: "/images/classes/boxing.svg",
    schedule: [
      { day: "Tuesday", time: "18:00", room: "Combat Studio" },
      { day: "Thursday", time: "18:00", room: "Combat Studio" },
      { day: "Saturday", time: "10:00", room: "Combat Studio" },
    ],
    benefits: [
      "Full-body conditioning",
      "Stress relief and mental focus",
      "Improve coordination and reflexes",
      "Build upper body strength",
      "Learn self-defense techniques",
    ],
    requirements: [
      "Hand wraps required (available for purchase)",
      "Boxing gloves provided",
      "All fitness levels welcome",
    ],
  },
  {
    id: "6",
    name: "Core Pilates",
    slug: "core-pilates",
    category: "Pilates",
    description: "Strengthen your core, improve posture, and develop long, lean muscles with our reformer-inspired mat Pilates class. Focus on controlled movements and proper alignment for maximum results.",
    shortDescription: "Core strength and body alignment",
    duration: 55,
    intensity: 3,
    calories: 300,
    trainer: "Lisa Anderson",
    trainerId: "lisa-anderson",
    image: "/images/classes/pilates.svg",
    schedule: [
      { day: "Monday", time: "10:00", room: "Pilates Studio" },
      { day: "Wednesday", time: "10:00", room: "Pilates Studio" },
      { day: "Friday", time: "10:00", room: "Pilates Studio" },
    ],
    benefits: [
      "Develop core strength",
      "Improve posture and alignment",
      "Increase flexibility",
      "Prevent injuries",
      "Enhance body awareness",
    ],
    requirements: [
      "Pilates mat recommended",
      "Grip socks helpful",
      "All levels welcome",
    ],
  },
];

export const categories = [
  { name: "All", value: "all" },
  { name: "HIIT", value: "HIIT" },
  { name: "Strength", value: "Strength" },
  { name: "Yoga", value: "Yoga" },
  { name: "Cycling", value: "Cycling" },
  { name: "Boxing", value: "Boxing" },
  { name: "Pilates", value: "Pilates" },
];
