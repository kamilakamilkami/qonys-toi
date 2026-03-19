import { motion } from "framer-motion";

const WishSection = () => {
  return (
    <section className="relative overflow-hidden px-6 py-20 text-center">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute left-0 right-0 top-0 glow-line" />

      <div
        className="absolute right-20 top-10 h-32 w-32 glow-orb"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-10 left-20 h-24 w-24 glow-orb"
        style={{ animationDelay: "3s" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-3xl"
      >
        <motion.span
          className="mb-4 block text-3xl text-gold text-glow"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          ✦
        </motion.span>

        <h2 className="mb-6 font-serif text-3xl font-bold gold-shimmer md:text-4xl">
          Неге бұл маңызды?
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mb-4 text-sm leading-relaxed text-foreground/75 md:text-base"
        >
          Мирас есімі — 15 жыл күткен арманымыздың орындалғанын және
          артымыздан қалатын аманат пен мирас екенін білдіретін ерекше
          мағыналы есім.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="font-serif text-sm italic leading-relaxed text-gold/80 text-glow-sm md:text-base"
        >
          Үш қуаныш — бұл жай той емес, бұл өміріміздегі жаңа кезеңнің,
          жаңа белестің басталуы.
        </motion.p>
        
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 glow-line" />
    </section>
  );
};

export default WishSection;