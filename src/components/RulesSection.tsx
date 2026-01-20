import { motion } from "framer-motion";
import { VolumeX, Smartphone, PhoneOff, MessageSquareOff, IdCard, Armchair, ShieldCheck, Sparkles, PenOff, Clock } from "lucide-react";

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
    description: "Phone calls are strictly not allowed inside the study area.",
  },
  {
    icon: MessageSquareOff,
    title: "No Discussions",
    description: "Talking or group discussions are not permitted in the study area.",
  },
  {
    icon: IdCard,
    title: "Valid ID Required",
    description: "Students must carry a valid library ID/pass daily.",
  },
  {
    icon: Armchair,
    title: "Fixed Seating",
    description: "Seats are allotted and cannot be changed without permission.",
  },
  {
    icon: ShieldCheck,
    title: "Personal Belongings",
    description: "Personal belongings should be kept responsibly at all times.",
  },
  {
    icon: Sparkles,
    title: "Cleanliness & Hygiene",
    description: "Maintain cleanliness and hygiene in the library premises.",
  },
  {
    icon: PenOff,
    title: "No Vandalism",
    description: "Writing on desks, walls, or books is strictly prohibited.",
  },
  {
    icon: Clock,
    title: "Registered Time Slots",
    description: "Entry is allowed only during registered time slots.",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          {rules.map((rule, index) => (
            <motion.div
              key={rule.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-card p-4 md:p-6 rounded-2xl border border-destructive/20 shadow-sm text-center"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-3">
                <rule.icon className="w-6 h-6 md:w-7 md:h-7 text-destructive" />
              </div>
              <h3 className="text-sm md:text-base font-semibold mb-1">{rule.title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm">{rule.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
