import { motion } from "framer-motion";
import { VolumeX, Smartphone, PhoneOff } from "lucide-react";

const rules = [
  {
    icon: VolumeX,
    title: "Maintain Silence",
    description: "Silence must be maintained at all times inside the library.",
  },
  {
    icon: Smartphone,
    title: "Silent Mode Only",
    description: "Mobile phones should be kept on silent mode at all times.",
  },
  {
    icon: PhoneOff,
    title: "No Phone Calls",
    description: "Phone calls are strictly not allowed inside the study area. We have a separate area for calls.",
  },
];

const RulesSection = () => {
  return (
    <section id="rules" className="py-16 md:py-24 bg-destructive/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-destructive font-semibold text-xs md:text-sm uppercase tracking-wider">
            Important Guidelines
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mt-2 mb-4">
            Library <span className="text-destructive">Rules</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Please follow these rules to maintain a peaceful study environment for everyone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {rules.map((rule, index) => (
            <motion.div
              key={rule.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-6 md:p-8 rounded-2xl border border-destructive/20 shadow-sm text-center"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                <rule.icon className="w-7 h-7 md:w-8 md:h-8 text-destructive" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{rule.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base">{rule.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
