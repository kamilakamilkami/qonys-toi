import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const MapSection = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-card/50" />
      <div className="absolute top-0 left-0 right-0 glow-line" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4 font-bold gold-shimmer">
            Қалай жетуге болады?
          </h2>
          <p className="text-foreground/60 mb-8 text-sm">
            Ақтөбе қ., Жаңақоныс, Тастемір 22
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden shadow-card border border-border/50 mb-8 h-64 md:h-80 bg-secondary/30 backdrop-blur-sm flex items-center justify-center relative"
        >
          <div className="text-center space-y-3">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MapPin className="w-12 h-12 text-gold mx-auto text-glow" />
            </motion.div>
            <p className="text-foreground/60 text-sm">Тастемір 22, Жаңақоныс</p>
          </div>
        </motion.div>

        <motion.a
          href="https://2gis.kz/aktobe/search/Тастемір%2022"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 gradient-gold text-primary-foreground px-8 py-4 rounded-full shadow-gold font-medium text-sm"
        >
          <Navigation className="w-4 h-4" />
          <span>2GIS арқылы ашу</span>
        </motion.a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 glow-line" />
    </section>
  );
};

export default MapSection;
