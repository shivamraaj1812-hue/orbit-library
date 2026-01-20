import { motion } from "framer-motion";
import galleryStudyHall from "@/assets/gallery-study-hall.jpeg";
import galleryStudyArea from "@/assets/gallery-study-area.jpeg";
import galleryCctv from "@/assets/gallery-cctv.jpeg";
import galleryRestroom from "@/assets/gallery-restroom.jpeg";
import galleryLocker from "@/assets/gallery-locker.jpeg";
import galleryEntrance from "@/assets/gallery-entrance.jpeg";
import galleryRooftop from "@/assets/gallery-rooftop.jpeg";

const galleryImages = [
  {
    title: "Study Hall",
    description: "Spacious study area with individual desks",
    image: galleryStudyHall,
  },
  {
    title: "Panoramic View",
    description: "Full view of our modern study space",
    image: galleryStudyArea,
  },
  {
    title: "CCTV Surveillance",
    description: "24/7 security monitoring for your safety",
    image: galleryCctv,
  },
  {
    title: "Rest Room",
    description: "Comfortable resting area for breaks",
    image: galleryRestroom,
  },
  {
    title: "Personal Lockers",
    description: "Secure storage for your belongings",
    image: galleryLocker,
  },
  {
    title: "Library Entrance",
    description: "Welcoming entrance with peaceful environment",
    image: galleryEntrance,
  },
  {
    title: "Rooftop Area",
    description: "Open space for calling, chit-chats and breaks",
    image: galleryRooftop,
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
              {/* Actual Image */}
              <img
                src={image.image}
                alt={image.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

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
      </div>
    </section>
  );
};

export default GallerySection;
