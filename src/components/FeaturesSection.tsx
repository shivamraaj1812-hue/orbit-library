import { motion } from "framer-motion";
import { Wifi, Coffee, BookOpen, Users, Clock, Shield, Zap, Headphones } from "lucide-react";

const features = [
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Blazing fast internet connectivity for seamless research and online learning.",
  },
  {
    icon: BookOpen,
    title: "Vast Collection",
    description: "Access to thousands of books, journals, and study materials across all subjects.",
  },
  {
    icon: Headphones,
    title: "Silent Zones",
    description: "Dedicated quiet areas for deep focus and uninterrupted study sessions.",
  },
  {
    icon: Coffee,
    title: "Refreshment Zone",
    description: "Cozy café area with coffee and snacks to keep you energized.",
  },
  {
    icon: Users,
    title: "Group Study Rooms",
    description: "Private rooms for collaborative learning and group discussions.",
  },
  {
    icon: Clock,
    title: "Extended Hours",
    description: "Open early morning till late night to accommodate your schedule.",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "24/7 security with CCTV surveillance and secure storage lockers.",
  },
  {
    icon: Zap,
    title: "Power Backup",
    description: "Uninterrupted power supply so your study never stops.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Features That Make Us <span className="text-gradient">Stand Out</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the perfect study environment with our world-class facilities
            designed specifically for student success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card p-6 rounded-2xl border shadow-sm hover:shadow-elegant transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
