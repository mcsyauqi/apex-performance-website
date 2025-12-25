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
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%231a1a1a' width='800' height='600'/%3E%3Crect fill='%23EF4444' opacity='0.15' width='800' height='600'/%3E%3Ccircle cx='400' cy='260' r='100' fill='%23EF4444' opacity='0.3'/%3E%3Ccircle cx='400' cy='260' r='60' fill='%23EF4444'/%3E%3Cpolygon points='400,220 430,280 370,280' fill='white'/%3E%3Ctext x='400' y='420' text-anchor='middle' fill='white' font-family='sans-serif' font-size='32' font-weight='bold'%3EHIIT INFERNO%3C/text%3E%3Ctext x='400' y='460' text-anchor='middle' fill='%236B7280' font-family='sans-serif' font-size='16'%3EHigh Intensity Training%3C/text%3E%3C/svg%3E",
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
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%231a1a1a' width='800' height='600'/%3E%3Crect fill='%23F97316' opacity='0.15' width='800' height='600'/%3E%3Crect x='300' y='280' width='200' height='25' rx='5' fill='%23F97316'/%3E%3Crect x='260' y='250' width='40' height='85' rx='8' fill='%23F97316'/%3E%3Crect x='500' y='250' width='40' height='85' rx='8' fill='%23F97316'/%3E%3Ccircle cx='280' cy='293' r='50' fill='%23F97316' opacity='0.5'/%3E%3Ccircle cx='520' cy='293' r='50' fill='%23F97316' opacity='0.5'/%3E%3Ctext x='400' y='420' text-anchor='middle' fill='white' font-family='sans-serif' font-size='32' font-weight='bold'%3EPOWER STRENGTH%3C/text%3E%3Ctext x='400' y='460' text-anchor='middle' fill='%236B7280' font-family='sans-serif' font-size='16'%3EBuild Muscle%3C/text%3E%3C/svg%3E",
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
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%231a1a1a' width='800' height='600'/%3E%3Crect fill='%2322C55E' opacity='0.15' width='800' height='600'/%3E%3Ccircle cx='400' cy='180' r='40' fill='%2322C55E'/%3E%3Cellipse cx='400' cy='320' rx='60' ry='100' fill='%2322C55E' opacity='0.7'/%3E%3Cellipse cx='300' cy='280' rx='25' ry='80' fill='%2322C55E' opacity='0.5'/%3E%3Cellipse cx='500' cy='280' rx='25' ry='80' fill='%2322C55E' opacity='0.5'/%3E%3Ctext x='400' y='480' text-anchor='middle' fill='white' font-family='sans-serif' font-size='32' font-weight='bold'%3EZEN FLOW YOGA%3C/text%3E%3Ctext x='400' y='520' text-anchor='middle' fill='%236B7280' font-family='sans-serif' font-size='16'%3EMind and Body%3C/text%3E%3C/svg%3E",
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
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%231a1a1a' width='800' height='600'/%3E%3Crect fill='%233B82F6' opacity='0.15' width='800' height='600'/%3E%3Ccircle cx='280' cy='320' r='90' fill='none' stroke='%233B82F6' stroke-width='18'/%3E%3Ccircle cx='520' cy='320' r='90' fill='none' stroke='%233B82F6' stroke-width='18'/%3E%3Ccircle cx='280' cy='320' r='25' fill='%233B82F6'/%3E%3Ccircle cx='520' cy='320' r='25' fill='%233B82F6'/%3E%3Crect x='350' y='200' width='100' height='15' rx='5' fill='%233B82F6'/%3E%3Ccircle cx='400' cy='160' r='35' fill='%233B82F6'/%3E%3Ctext x='400' y='480' text-anchor='middle' fill='white' font-family='sans-serif' font-size='32' font-weight='bold'%3ESPIN REVOLUTION%3C/text%3E%3Ctext x='400' y='520' text-anchor='middle' fill='%236B7280' font-family='sans-serif' font-size='16'%3EIndoor Cycling%3C/text%3E%3C/svg%3E",
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
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%231a1a1a' width='800' height='600'/%3E%3Crect fill='%23EF4444' opacity='0.15' width='800' height='600'/%3E%3Cellipse cx='300' cy='280' rx='90' ry='110' fill='%23EF4444'/%3E%3Cellipse cx='300' cy='280' rx='55' ry='75' fill='%231a1a1a'/%3E%3Cellipse cx='500' cy='280' rx='90' ry='110' fill='%23EF4444'/%3E%3Cellipse cx='500' cy='280' rx='55' ry='75' fill='%231a1a1a'/%3E%3Ctext x='400' y='460' text-anchor='middle' fill='white' font-family='sans-serif' font-size='32' font-weight='bold'%3EBOXING%3C/text%3E%3Ctext x='400' y='500' text-anchor='middle' fill='%236B7280' font-family='sans-serif' font-size='16'%3ELearn to Fight%3C/text%3E%3C/svg%3E",
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
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%231a1a1a' width='800' height='600'/%3E%3Crect fill='%23A855F7' opacity='0.15' width='800' height='600'/%3E%3Crect x='180' y='380' width='440' height='25' rx='12' fill='%23A855F7'/%3E%3Ccircle cx='350' cy='220' r='50' fill='%23A855F7'/%3E%3Cellipse cx='350' cy='310' rx='40' ry='70' fill='%23A855F7' opacity='0.7'/%3E%3Cellipse cx='450' cy='320' rx='60' ry='30' fill='%23A855F7' opacity='0.5'/%3E%3Ctext x='400' y='480' text-anchor='middle' fill='white' font-family='sans-serif' font-size='32' font-weight='bold'%3ECORE PILATES%3C/text%3E%3Ctext x='400' y='520' text-anchor='middle' fill='%236B7280' font-family='sans-serif' font-size='16'%3EStrength and Flexibility%3C/text%3E%3C/svg%3E",
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
