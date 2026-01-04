import { motion } from "framer-motion";
import { Target, Heart, Award, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To provide an exceptional learning environment that empowers students to achieve academic excellence.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Dedication, discipline, and determination – the three pillars that define our community.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in facilities, services, and student support.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a supportive network of ambitious learners who inspire each other.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-3 md:space-y-4"
              >
                <div className="bg-card rounded-2xl p-4 md:p-6 shadow-elegant border">
                  <div className="text-2xl md:text-4xl font-bold text-gradient">New!</div>
                  <div className="text-muted-foreground text-xs md:text-base">Just Opened</div>
                </div>
                <div className="bg-gradient-primary rounded-2xl p-4 md:p-6 text-white">
                  <div className="text-2xl md:text-4xl font-bold">50+</div>
                  <div className="text-white/80 text-xs md:text-base">Seats Available</div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-3 md:space-y-4 pt-4 md:pt-8"
              >
                <div className="bg-card rounded-2xl p-4 md:p-6 shadow-elegant border">
                  <div className="text-2xl md:text-4xl font-bold text-gradient">20%</div>
                  <div className="text-muted-foreground text-xs md:text-base">Off All Shifts</div>
                </div>
                <div className="bg-accent rounded-2xl p-4 md:p-6 text-accent-foreground">
                  <div className="text-2xl md:text-4xl font-bold">23hrs</div>
                  <div className="text-accent-foreground/80 text-xs md:text-base">Open Daily</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-2xl md:text-4xl font-bold mt-2 mb-4">
              Your Success is <span className="text-gradient">Our Priority</span>
            </h2>
            <p className="text-muted-foreground mb-6 md:mb-8 text-sm md:text-base">
              Orbit Library was founded with a simple mission – to create the perfect
              study sanctuary for students. We believe that the right environment can
              transform how you learn and achieve your goals.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
