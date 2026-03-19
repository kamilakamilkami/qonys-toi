import { motion } from "framer-motion";

const WishSection = () => {
  return (
    <section className="py-20 px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 left-0 right-0 glow-line" />

      {/* Floating glow orbs */}
      <div className="absolute top-10 right-20 w-32 h-32 glow-orb" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-10 left-20 w-24 h-24 glow-orb" style={{ animationDelay: '3s' }} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-lg mx-auto relative z-10"
      >
        <motion.span
          className="text-gold text-3xl mb-4 block text-glow"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          ✦
        </motion.span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 gold-shimmer">
          Қадірлі қонақтарға
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-foreground/70 leading-relaxed text-sm md:text-base mb-4"
        >
          Біздің тойымызға қатысуыңыз — ең қымбат сыйлық. Сіздің жылы
          лебіздеріңіз бен ақ тілектеріңіз жаңа шаңырағымызға берекет пен
          бақыт әкеледі деп сенеміз.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-gold/80 text-glow-sm leading-relaxed text-sm md:text-base italic font-serif"
        >
          Ең бастысы — сіздің қатысуыңыз, ең қымбаты — сіздің тілектеріңіз!
        </motion.p>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 glow-line" />
    </section>
  );
};

export default WishSection;
