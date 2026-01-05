import { motion } from "framer-motion";
import { Wifi, Coffee, BookOpen, Users, Clock, Shield, Zap, Headphones, Armchair, Lamp, Newspaper, Droplets, Lock, Car, UtensilsCrossed, Camera, Bath, MessageSquare, Snowflake, Heart } from "lucide-react";

const features = [
  {
    icon: Armchair,
    title: "Well Furnished Desks",
    description: "Huge desks with high-back comfortable chairs for extended study sessions.",
  },
  {
    icon: Lamp,
    title: "Personal Light & Charging",
    description: "Individual lighting and charging points available at every table.",
  },
  {
    icon: Newspaper,
    title: "Newspapers & Magazines",
    description: "Daily newspapers and monthly magazines to keep you updated.",
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi 24x7",
    description: "Blazing fast internet connectivity available round the clock.",
  },
  {
    icon: Droplets,
    title: "RO Drinking Water",
    description: "Pure and safe RO drinking water available for all students.",
  },
  {
    icon: Lock,
    title: "Locker Facilities",
    description: "Secure lockers to safely store your belongings while you study.",
  },
  {
    icon: Users,
    title: "Separate Rows",
    description: "Dedicated separate seating rows for boys and girls.",
  },
  {
    icon: Snowflake,
    title: "Fully Air Conditioned",
    description: "Comfortable AC environment throughout the library.",
  },
  {
    icon: Car,
    title: "Proper Parking Space",
    description: "Ample parking space available for your convenience.",
  },
  {
    icon: UtensilsCrossed,
    title: "Separate Lunch Room",
    description: "Dedicated lunch room area for meals and refreshments.",
  },
  {
    icon: Camera,
    title: "24hrs CCTV Surveillance",
    description: "Round-the-clock security with CCTV cameras everywhere.",
  },
  {
    icon: Bath,
    title: "Clean & Hygienic Washroom",
    description: "Well-maintained and hygienic washroom facilities.",
  },
  {
    icon: MessageSquare,
    title: "Chit-Chat Space",
    description: "Separate space for discussions and group conversations.",
  },
  {
    icon: Heart,
    title: "Peaceful Environment",
    description: "Calm and serene atmosphere perfect for focused studying.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mt-2 mb-4">
            Features That Make Us <span className="text-gradient">Stand Out</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Experience the perfect study environment with our world-class facilities
            designed specifically for student success.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-card p-4 md:p-6 rounded-2xl border shadow-sm hover:shadow-elegant transition-all duration-300 group"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-base md:text-xl font-semibold mb-1 md:mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
