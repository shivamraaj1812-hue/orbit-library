import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const galleryImages = [
  {
    title: "Study Hall",
    description: "Spacious study area with individual desks",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    title: "Reading Lounge",
    description: "Comfortable seating for relaxed reading",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Computer Lab",
    description: "Modern computers with high-speed internet",
    gradient: "from-orange-500 to-red-600",
  },
  {
    title: "Group Study Room",
    description: "Private rooms for collaborative learning",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    title: "Book Collection",
    description: "Vast library of academic resources",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    title: "Café Area",
    description: "Refreshments to fuel your study sessions",
    gradient: "from-amber-500 to-orange-600",
  },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
            Gallery
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mt-2 mb-4">
            Take a <span className="text-gradient">Virtual Tour</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Explore our modern facilities and see why students love studying at
            Orbit Library.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              {/* Gradient Background as Placeholder */}
              <div className={`absolute inset-0 bg-gradient-to-br ${image.gradient}`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="w-16 h-16 text-white/50" />
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-white mb-1">
                    {image.title}
                  </h3>
                  <p className="text-white/80 text-sm">{image.description}</p>
                </motion.div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/30 rounded-2xl transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mt-8"
        >
          📸 Upload your library photos to showcase the actual space
        </motion.p>
      </div>
    </section>
  );
};

export default GallerySection;
