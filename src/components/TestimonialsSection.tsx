import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "UPSC Aspirant",
    content: "Orbital Library has been my second home during my preparation. The peaceful environment and extended hours helped me study without any distractions.",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Rahul Verma",
    role: "Engineering Student",
    content: "The high-speed WiFi and power backup are game changers. I can attend online lectures and study late nights without any worries.",
    rating: 5,
    avatar: "RV",
  },
  {
    name: "Anjali Patel",
    role: "Medical Student",
    content: "The group study rooms are perfect for our study groups. The staff is incredibly supportive and the facilities are top-notch.",
    rating: 5,
    avatar: "AP",
  },
  {
    name: "Vikram Singh",
    role: "CA Student",
    content: "I cleared my CA exams thanks to the focused environment here. The library has everything a serious student needs.",
    rating: 5,
    avatar: "VS",
  },
  {
    name: "Sneha Gupta",
    role: "Law Student",
    content: "The vast collection of law books and journals is impressive. It's the best library for any student in the city.",
    rating: 5,
    avatar: "SG",
  },
  {
    name: "Amit Kumar",
    role: "MBA Aspirant",
    content: "Great ambiance, friendly staff, and all the resources you need. Highly recommend Orbital Library for serious preparation.",
    rating: 5,
    avatar: "AK",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            What Our <span className="text-gradient">Students Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our students have to say
            about their experience at Orbital Library.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card p-6 rounded-2xl border shadow-sm hover:shadow-elegant transition-all duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
