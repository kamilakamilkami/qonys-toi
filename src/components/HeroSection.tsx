import { motion } from "framer-motion";
import floralBg from "@/assets/floral-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center py-20 overflow-hidden">
      {/* Floral background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${floralBg})` }}
      />
      <div className="absolute inset-0 bg-background/40" />

      {/* Animated glow orbs */}
      <div className="absolute top-20 left-10 w-40 h-40 glow-orb" />
      <div className="absolute bottom-32 right-10 w-56 h-56 glow-orb" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/3 w-32 h-32 glow-orb" style={{ animationDelay: '4s' }} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10"
      >
        <motion.span
          className="text-gold text-glow-sm tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block font-sans font-medium"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Шаңырақ шаттығы
        </motion.span>

        <div className="glow-line w-24 mx-auto mb-6" />

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 gold-shimmer">
          Қоныс той
        </h1>

        <div className="glow-line w-24 mx-auto mb-8" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="space-y-4 mb-12 relative z-10"
      >
        <p className="text-xl md:text-2xl font-serif italic text-gold text-glow-sm">
          Құрметті достар!
        </p>
        <p className="max-w-md mx-auto leading-relaxed text-foreground/80 text-sm md:text-base">
          Жаңа шаңырағымыздың босағасын аттап, қуанышымызды сіздермен бірге
          бөлісуге шақырамыз. Ақ тілектеріңіз бен жылы лебіздеріңіз біз үшін
          үлкен мәртебе!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative border border-gold/40 rounded-sm p-8 md:p-10 z-10 backdrop-blur-sm bg-background/20"
      >
        <motion.span
          className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-3 text-gold text-lg text-glow"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ✦
        </motion.span>
        <p className="text-sm font-sans font-medium tracking-[0.2em] uppercase text-foreground/60 mb-2">
          Үй иелері
        </p>
        <p className="text-2xl md:text-3xl font-serif font-semibold gold-shimmer">
          Дулат & Тоғжан
        </p>
      </motion.div>

      {/* Music hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="text-xs text-foreground/40 mt-8 tracking-wide z-10"
      >
        🎵 Музыканы қосыңыз — жоғарғы оң жақтағы батырманы басыңыз
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 border-2 border-gold/30 rounded-full flex justify-center pt-1.5">
          <motion.div
            className="w-1 h-2 bg-gold/50 rounded-full"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
