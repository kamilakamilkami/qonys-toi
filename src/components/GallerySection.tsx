import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const GallerySection = () => {
  return (
    <section className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif text-center mb-4 font-bold"
        >
          Отбасылық сәттер
        </motion.h2>
        <p className="text-center text-muted-foreground mb-12 text-sm">
          Бақытты күндердің естелігі
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl shadow-card group ${
                i === 1 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={heroBg}
                alt={`Отбасылық сурет ${i}`}
                className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </motion.div>

        <p className="text-center text-muted-foreground mt-8 text-xs italic">
          * Суреттерді өз фотоларыңызбен ауыстырыңыз
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
