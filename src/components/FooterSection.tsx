import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <footer className="py-16 text-center px-6 bg-card/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <p className="text-gold text-3xl">✦</p>
        <p className="font-serif text-2xl md:text-3xl font-semibold">
          Рахмет!
        </p>
        <p className="text-muted-foreground text-xs pt-4">
          Сүйіспеншілікпен жасалды ❤️
        </p>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
