import { motion } from "framer-motion";
import ornament from "@/assets/ornament.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center py-20 bg-pattern overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gold/5 blur-2xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-gold/5 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10"
      >
        <span className="text-gold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block font-sans font-medium">
          Шаңырақ шаттығы
        </span>

        <div className="w-20 h-[1px] bg-gold mx-auto mb-6" />

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 text-foreground">
          Қоныс той
        </h1>

        <div className="w-20 h-[1px] bg-gold mx-auto mb-8" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="space-y-4 mb-12 relative z-10"
      >
        <p className="text-xl md:text-2xl font-serif italic text-muted-foreground">
          Құрметті достар!
        </p>
        <p className="max-w-md mx-auto leading-relaxed text-muted-foreground text-sm md:text-base">
          Жаңа шаңырағымыздың босағасын аттап, қуанышымызды сіздермен бірге
          бөлісуге шақырамыз. Ақ тілектеріңіз бен жылы лебіздеріңіз біз үшін
          үлкен мәртебе!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="relative border border-gold rounded-sm p-8 md:p-10 z-10"
      >
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-3 text-gold text-lg">✦</span>
        <p className="text-sm font-sans font-medium tracking-[0.2em] uppercase text-muted-foreground mb-2">
          Үй иелері
        </p>
        <p className="text-2xl md:text-3xl font-serif text-gold font-semibold">
          Тоғжан & Дулат
        </p>
      </motion.div>

      {/* Music hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="text-xs text-muted-foreground/60 mt-8 tracking-wide z-10"
      >
        🎵 Музыканы қосыңыз — жоғарғы оң жақтағы батырманы басыңыз
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 border-2 border-gold/30 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-gold/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
