import { motion } from "framer-motion";
import { Clock, Calendar, Sun, Moon } from "lucide-react";

const timings = [
  { day: "Shift 1", hours: "6:00 AM - 10:00 AM", isWeekday: true },
  { day: "Shift 2", hours: "10:00 AM - 3:00 PM", isWeekday: true },
  { day: "Shift 3", hours: "3:00 PM - 10:00 PM", isWeekday: true },
  { day: "Night Shift", hours: "10:00 PM - 5:00 AM (On Demand)", isWeekday: false },
  { day: "Full Day", hours: "15+ Hours", isWeekday: false },
];

const TimingSection = () => {
  return (
    <section id="timing" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
              Library Hours
            </span>
            <h2 className="text-2xl md:text-4xl font-bold mt-2 mb-4">
              Open When You <span className="text-gradient">Need Us</span>
            </h2>
            <p className="text-muted-foreground mb-6 md:mb-8 text-sm md:text-base">
              We understand that every student has a unique schedule. That's why
              we offer extended hours to accommodate early birds and night owls alike.
            </p>

            <div className="space-y-4">
              {timings.map((timing, index) => (
                <motion.div
                  key={timing.day}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${timing.isWeekday ? 'bg-primary/10' : 'bg-accent/10'}`}>
                      {timing.isWeekday ? (
                        <Calendar className="w-5 h-5 text-primary" />
                      ) : (
                        <Sun className="w-5 h-5 text-accent" />
                      )}
                    </div>
                    <span className="font-medium">{timing.day}</span>
                  </div>
                  <span className="text-muted-foreground font-mono">{timing.hours}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <Clock className="w-16 h-16 mb-6" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Extended Study Hours
                </h3>
                <p className="text-white/80 mb-6">
                  During exam seasons, we extend our hours to support your intensive
                  study sessions. Stay focused, stay prepared.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                    <Sun className="w-6 h-6 mb-2" />
                    <div className="text-sm text-white/70">Day Shifts</div>
                    <div className="text-xl font-bold">6 AM - 10 PM</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                    <Moon className="w-6 h-6 mb-2" />
                    <div className="text-sm text-white/70">Night Shift</div>
                    <div className="text-xl font-bold">10 PM - 5 AM</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimingSection;
