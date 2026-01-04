import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Gift, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import orbitLogo from "@/assets/orbit-library-logo.jpeg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-48 md:w-72 h-48 md:h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 md:w-96 h-64 md:h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Grand Opening Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold animate-pulse">
            <Gift className="w-4 h-4" />
            🎉 GRAND OPENING - Limited Time Offers!
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Your Gateway to Academic Excellence
            </motion.div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
              Welcome to{" "}
              <span className="text-gradient">Orbit Library</span>
            </h1>

            <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
              Your new favorite study destination! Experience the perfect blend of 
              peaceful environment, modern facilities, and supportive atmosphere 
              designed for student success.
            </p>

            {/* Special Offer Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-primary text-white p-4 rounded-2xl mb-6 md:mb-8 max-w-md mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-bold">Opening Special Offer!</span>
              </div>
              <p className="text-sm text-white/90">
                Register now and get <span className="font-bold">50% OFF</span> on your first month + 
                <span className="font-bold"> FREE WiFi access</span> for lifetime!
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-primary text-white rounded-full px-8 h-12 md:h-14 text-base md:text-lg shadow-elegant"
                  asChild
                >
                  <a href="#register">Register Now - 50% OFF</a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto rounded-full px-8 h-12 md:h-14 text-base md:text-lg"
                  asChild
                >
                  <a href="https://wa.me/917004656429" target="_blank" rel="noopener noreferrer">
                    📱 WhatsApp Us
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Stats - Updated for new library */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border"
            >
              {[
                { value: "50+", label: "Seats" },
                { value: "17hrs", label: "Daily" },
                { value: "100%", label: "AC & WiFi" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-xl md:text-3xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Logo/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-56 h-56 md:w-80 md:h-80">
              {/* Animated rings - positioned around the container */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 md:-inset-8 border-2 border-dashed border-primary/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 md:-inset-16 border-2 border-dashed border-accent/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-12 md:-inset-24 border border-dashed border-primary/15 rounded-full"
              />

              {/* Main Logo Container */}
              <div className="w-full h-full rounded-full overflow-hidden shadow-elegant bg-white p-2">
                <img src={orbitLogo} alt="Orbit Library Logo" className="w-full h-full object-contain" />
              </div>

              {/* Floating elements - positioned outside the logo */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-16 md:h-16 bg-accent rounded-2xl flex items-center justify-center shadow-lg"
              >
                <span className="text-xl md:text-2xl">📚</span>
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-10 h-10 md:w-14 md:h-14 bg-card rounded-2xl flex items-center justify-center shadow-lg border"
              >
                <span className="text-lg md:text-xl">✨</span>
              </motion.div>
              
              {/* NEW badge */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full"
              >
                NEW!
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
