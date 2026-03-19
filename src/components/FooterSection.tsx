import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <footer className="py-16 text-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-card/50" />
      <div className="absolute top-0 left-0 right-0 glow-line" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="space-y-4 relative z-10"
      >
        <motion.p
          className="text-gold text-3xl text-glow"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          ✦
        </motion.p>
        <p className="font-serif text-2xl md:text-3xl font-semibold gold-shimmer">
          Рахмет!
        </p>
        <p className="text-foreground/40 text-xs pt-4">
          Сүйіспеншілікпен жасалды ❤️
        </p>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
