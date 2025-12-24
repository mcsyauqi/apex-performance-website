export interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  color: string;
}

export const membershipPlans: MembershipPlan[] = [
  {
    id: "basic",
    name: "Essential",
    price: 599000,
    period: "month",
    description: "Perfect for getting started on your fitness journey",
    features: [
      "Full gym access",
      "Locker room & showers",
      "2 group classes per week",
      "Fitness assessment",
      "Mobile app access",
      "Standard hours (6AM - 10PM)",
    ],
    highlighted: false,
    color: "steel-gray",
  },
  {
    id: "pro",
    name: "Performance",
    price: 999000,
    period: "month",
    description: "Our most popular plan for serious fitness enthusiasts",
    features: [
      "Full gym access",
      "Unlimited group classes",
      "1 personal training session/month",
      "Nutrition consultation",
      "Sauna & steam room",
      "Guest passes (2/month)",
      "24/7 access",
      "Priority class booking",
      "Workout tracking app premium",
    ],
    highlighted: true,
    color: "power-red",
  },
  {
    id: "elite",
    name: "Elite",
    price: 1799000,
    period: "month",
    description: "The ultimate fitness experience for peak performers",
    features: [
      "Everything in Performance",
      "4 personal training sessions/month",
      "Monthly body composition analysis",
      "Custom meal planning",
      "Recovery zone access",
      "Unlimited guest passes",
      "Private locker",
      "Laundry service",
      "Exclusive member events",
      "VIP parking",
    ],
    highlighted: false,
    color: "electric-orange",
  },
];

export const membershipBenefits = [
  {
    title: "State-of-the-Art Equipment",
    description: "Premium machines and free weights from top brands",
    icon: "dumbbell",
  },
  {
    title: "Expert Trainers",
    description: "Certified professionals to guide your journey",
    icon: "users",
  },
  {
    title: "Flexible Scheduling",
    description: "Classes and training sessions that fit your life",
    icon: "calendar",
  },
  {
    title: "Community Support",
    description: "Join a motivated community of like-minded individuals",
    icon: "heart",
  },
];
