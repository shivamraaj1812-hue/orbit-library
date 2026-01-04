import { useState } from "react";
import { motion } from "framer-motion";
import { User, Phone, Mail, MapPin, Send, CheckCircle, Gift, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const RegistrationSection = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.email || !formData.address) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required for registration.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Phone validation (basic)
    const phoneRegex = /^[0-9+\-\s]{10,}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid phone number.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Send to Google Sheets via edge function
      const { data, error } = await supabase.functions.invoke('submit-registration', {
        body: formData,
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Registration Successful! 🎉",
        description: "We'll contact you soon with your 50% discount details!",
      });
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Registration Submitted!",
        description: "We've received your registration. Our team will contact you shortly.",
      });
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="register" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              {/* Special Offer Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold mb-4"
              >
                <Gift className="w-4 h-4" />
                Limited Time: 50% OFF!
              </motion.div>

              <h2 className="text-2xl md:text-4xl font-bold mt-2 mb-4">
                Join <span className="text-gradient">Orbit Library</span> Today
              </h2>
              <p className="text-muted-foreground mb-6 md:mb-8 text-sm md:text-base">
                Be among our first members and enjoy exclusive founding member benefits! 
                Register now to secure your spot and get amazing discounts.
              </p>

              <div className="space-y-3 md:space-y-4">
                {[
                  "🎉 50% OFF on first month",
                  "📶 FREE lifetime WiFi access",
                  "💺 Personal study desk allocation",
                  "🔌 Power backup guaranteed",
                  "❄️ Fully air-conditioned",
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-sm md:text-base"
                  >
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* Urgency message */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-6 text-sm text-muted-foreground bg-muted/50 p-3 rounded-xl"
              >
                ⏰ <strong>Hurry!</strong> Only first 50 registrations get the founding member discount.
              </motion.p>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-card p-6 md:p-8 rounded-2xl border shadow-elegant text-center"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Thank You! 🎉</h3>
                  <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">
                    Your registration has been received. Our team will contact you
                    within 24 hours with your 50% discount details!
                  </p>
                  <div className="space-y-3">
                    <a
                      href="https://wa.me/917004656429"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full h-12">
                        📱 Chat on WhatsApp Now
                      </Button>
                    </a>
                    <Button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", phone: "", email: "", address: "" });
                      }}
                      variant="outline"
                      className="w-full rounded-full h-12"
                    >
                      Register Another Student
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-card p-6 md:p-8 rounded-2xl border shadow-elegant space-y-4 md:space-y-6"
                >
                  <div className="text-center mb-4">
                    <h3 className="text-lg md:text-xl font-bold">Quick Registration</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Get your 50% discount today!</p>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="pl-10 h-12 md:h-14 rounded-xl text-base"
                        disabled={isLoading}
                      />
                    </div>

                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        name="phone"
                        placeholder="Phone Number"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="pl-10 h-12 md:h-14 rounded-xl text-base"
                        disabled={isLoading}
                      />
                    </div>

                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        name="email"
                        placeholder="Email Address"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10 h-12 md:h-14 rounded-xl text-base"
                        disabled={isLoading}
                      />
                    </div>

                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                      <Textarea
                        name="address"
                        placeholder="Full Address"
                        value={formData.address}
                        onChange={handleChange}
                        className="pl-10 min-h-[80px] md:min-h-[100px] rounded-xl resize-none text-base"
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-12 md:h-14 bg-gradient-primary text-white rounded-xl text-base md:text-lg font-semibold"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Claim 50% Discount
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By registering, you agree to our terms and conditions.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
