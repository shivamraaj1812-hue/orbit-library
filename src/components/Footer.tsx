import { motion } from "framer-motion";
import { BookOpen, MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-card border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 md:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <span className="text-lg md:text-xl font-bold text-gradient">Orbit Library</span>
            </div>
            <p className="text-muted-foreground text-sm md:text-base mb-6">
              Your gateway to academic excellence. Join our community of dedicated
              students today.
            </p>
            <a
              href="https://wa.me/917004656429"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2.5 rounded-full text-sm font-medium hover:bg-green-600 transition-colors active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4 text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              {[
                { name: "Features", href: "#features" },
                { name: "Timing", href: "#timing" },
                { name: "About Us", href: "#about" },
                { name: "Gallery", href: "#gallery" },
                { name: "Register", href: "#register" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4 text-sm md:text-base">Contact Us</h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-2 md:gap-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm md:text-base">
                  123 Education Street,<br />
                  Knowledge Park, City
                </span>
              </li>
              <li className="flex items-center gap-2 md:gap-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+917004656429"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base"
                >
                  +91 70046 56429
                </a>
              </li>
              <li className="flex items-center gap-2 md:gap-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@orbitlibrary.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base break-all"
                >
                  info@orbitlibrary.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4 text-sm md:text-base">Study Shifts</h4>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-center gap-2 md:gap-3">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <div>
                  <div className="text-xs md:text-sm font-medium">Shift 1</div>
                  <div className="text-muted-foreground text-xs md:text-sm">6 AM - 10 AM</div>
                </div>
              </li>
              <li className="flex items-center gap-2 md:gap-3">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <div>
                  <div className="text-xs md:text-sm font-medium">Shift 2 / Shift 3</div>
                  <div className="text-muted-foreground text-xs md:text-sm">10 AM - 9 PM</div>
                </div>
              </li>
              <li className="flex items-center gap-2 md:gap-3">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <div>
                  <div className="text-xs md:text-sm font-medium">Night Shift</div>
                  <div className="text-muted-foreground text-xs md:text-sm">9 PM - 5 AM</div>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t text-center text-muted-foreground text-xs md:text-sm">
          <p>© {currentYear} Orbit Library. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
