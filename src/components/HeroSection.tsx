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

      {/* Music hint — moved higher, above main content */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute top-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.p
          className="text-sm font-sans font-medium tracking-wide text-gold text-glow-sm px-5 py-2.5 rounded-full border border-gold/30 bg-background/30 backdrop-blur-md"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🎵 Музыканы қосыңыз — жоғарғы оң жақтағы батырманы басыңыз
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10"
      >
        <motion.span
          className="text-gold text-glow tracking-[0.35em] uppercase text-sm md:text-base mb-6 block font-sans font-semibold"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Шаңырақ шаттығы
        </motion.span>

        <div className="glow-line w-32 mx-auto mb-8" />

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-6 gold-shimmer leading-tight">
          Қоныс той
        </h1>

        <div className="glow-line w-32 mx-auto mb-10" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="space-y-5 mb-14 relative z-10"
      >
        <p className="text-2xl md:text-3xl font-serif italic text-gold text-glow font-semibold">
          Құрметті достар!
        </p>
        <p className="max-w-lg mx-auto leading-relaxed text-foreground/90 text-base md:text-lg font-light tracking-wide">
          Жаңа шаңырағымыздың босағасын аттап, қуанышымызды сіздермен бірге
          бөлісуге шақырамыз. Ақ тілектеріңіз бен жылы лебіздеріңіз біз үшін
          үлкен мәртебе!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative border border-gold/40 rounded-lg p-8 md:p-12 z-10 backdrop-blur-md bg-background/20"
      >
        <motion.span
          className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-4 text-gold text-xl text-glow"
          animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          ✦
        </motion.span>
        <p className="text-sm font-sans font-semibold tracking-[0.25em] uppercase text-gold/60 text-glow-sm mb-3">
          Үй иелері
        </p>
        <p className="text-3xl md:text-4xl font-serif font-bold gold-shimmer">
          Дулат & Тоғжан
        </p>
      </motion.div>

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
