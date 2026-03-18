import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const MapSection = () => {
  return (
    <section className="py-20 px-6 bg-sand/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4 font-bold">
            Қалай жетуге болады?
          </h2>
          <p className="text-muted-foreground mb-8 text-sm">
            Ақтөбе қ., Жаңақоныс, Тастемір 22
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-card border-4 border-background mb-8 h-64 md:h-80 bg-muted flex items-center justify-center relative"
        >
          <div className="text-center space-y-3">
            <MapPin className="w-12 h-12 text-gold mx-auto" />
            <p className="text-muted-foreground text-sm"><p className="text-muted-foreground text-sm">Тастемір 22, Жаңақоныс</p></p>
          </div>
        </motion.div>

        <motion.a
          href="https://2gis.kz/aktobe/search/Тастемір%2022"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 bg-foreground text-primary-foreground px-8 py-4 rounded-full hover:opacity-90 transition-opacity font-medium text-sm"
        >
          <Navigation className="w-4 h-4" />
          <span>2GIS арқылы ашу</span>
        </motion.a>
      </div>
    </section>
  );
};

export default MapSection;
