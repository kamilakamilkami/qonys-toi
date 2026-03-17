import { motion } from "framer-motion";

const WishSection = () => {
  return (
    <section className="py-20 px-6 text-center bg-sand/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-lg mx-auto"
      >
        <span className="text-gold text-3xl mb-4 block">✦</span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
          Қадірлі қонақтарға
        </h2>
        <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-4">
          Біздің тойымызға қатысуыңыз — ең қымбат сыйлық. Сіздің жылы
          лебіздеріңіз бен ақ тілектеріңіз жаңа шаңырағымызға берекет пен
          бақыт әкеледі деп сенеміз.
        </p>
        <p className="text-muted-foreground leading-relaxed text-sm md:text-base italic">
          Ең бастысы — сіздің қатысуыңыз, ең қымбаты — сіздің тілектеріңіз!
        </p>
      </motion.div>
    </section>
  );
};

export default WishSection;
