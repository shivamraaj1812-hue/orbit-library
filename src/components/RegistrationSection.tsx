import { useState } from "react";
import { motion } from "framer-motion";
import { User, Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const RegistrationSection = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
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

    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: "Registration Successful!",
      description: "We'll contact you soon with more details.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="register" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Get Started
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Join <span className="text-gradient">Orbital Library</span> Today
              </h2>
              <p className="text-muted-foreground mb-8">
                Ready to transform your study experience? Register now and become
                part of our growing community of successful students.
              </p>

              <div className="space-y-4">
                {[
                  "Access to all library facilities",
                  "Personal study desk allocation",
                  "High-speed WiFi access",
                  "Extended hours during exams",
                  "Priority booking for group rooms",
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
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
                  className="bg-card p-8 rounded-2xl border shadow-elegant text-center"
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-muted-foreground mb-6">
                    Your registration has been received. Our team will contact you
                    within 24 hours.
                  </p>
                  <Button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", phone: "", email: "", address: "" });
                    }}
                    variant="outline"
                    className="rounded-full"
                  >
                    Register Another Student
                  </Button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-card p-8 rounded-2xl border shadow-elegant space-y-6"
                >
                  <h3 className="text-xl font-bold mb-2">Registration Form</h3>

                  <div className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="pl-10 h-12 rounded-xl"
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
                        className="pl-10 h-12 rounded-xl"
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
                        className="pl-10 h-12 rounded-xl"
                      />
                    </div>

                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                      <Textarea
                        name="address"
                        placeholder="Full Address"
                        value={formData.address}
                        onChange={handleChange}
                        className="pl-10 min-h-[100px] rounded-xl resize-none"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-primary text-white rounded-xl text-lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Submit Registration
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
