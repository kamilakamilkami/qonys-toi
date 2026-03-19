import { motion } from "framer-motion";
import floralBg from "@/assets/floral-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 py-14 text-center sm:px-6 sm:py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${floralBg})` }}
      />
      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute top-20 left-10 h-40 w-40 glow-orb" />
      <div
        className="absolute bottom-32 right-10 h-56 w-56 glow-orb"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/3 h-32 w-32 glow-orb"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-5xl flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full"
        >
          <motion.span
            className="mb-4 block text-[11px] font-medium uppercase tracking-[0.32em] text-gold/90 text-glow sm:mb-6 sm:text-xs md:text-sm"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Үш қуаныш бірге келген
          </motion.span>

          <div className="glow-line mx-auto mb-6 w-24 sm:mb-8 sm:w-32" />

          <h1 className="mb-4 font-serif text-4xl font-semibold leading-[0.95] tracking-[0.04em] gold-shimmer sm:mb-6 sm:text-5xl md:text-7xl lg:text-8xl">
            Берекелі шаңырақ
          </h1>

          <div className="glow-line mx-auto mb-8 w-24 sm:mb-10 sm:w-32" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative z-10 mb-6 w-full px-1 sm:mb-8"
        >
          <p className="font-serif text-[1.35rem] italic font-medium tracking-[0.04em] text-gold text-glow sm:text-2xl md:text-3xl">
            Ардақты достар, қимас бауырлар!
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-[15px] font-light leading-[1.95] tracking-[0.015em] text-foreground/85 sm:text-base md:text-lg">
            Өмірдің белестері мен қуаныштары тоғысқан сәтте сіздермен қауышу —
            біз үшін үлкен бақыт.
          </p>

          <p className="mx-auto mt-4 max-w-4xl text-[15px] font-light leading-[1.95] tracking-[0.015em] text-foreground/85 sm:text-base md:text-lg">
            Ақ босаға аттаған жаңа үйіміздің төрінде, 15 жыл аңсап күткен
            ұлымыз Мирас дүниеге келген қуанышта және бөлім басшысы атану
            мәртебесінде ақ дастарханымыздың қадірлі қонағы болуға шақырамыз!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative z-10 mt-2 w-full max-w-[640px] rounded-[28px] border border-gold/30 bg-background/20 px-5 pb-7 pt-8 backdrop-blur-md sm:px-10 sm:pb-10 sm:pt-10"
        >
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-[#2b241d]/95 shadow-lg"
              animate={{ opacity: [0.75, 1, 0.75], scale: [0.98, 1.05, 0.98] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <span className="text-base leading-none text-gold">✦</span>
            </motion.div>
          </div>

          <p className="mb-3 text-center text-[11px] font-medium uppercase tracking-[0.3em] text-gold/65 sm:mb-4 sm:text-xs">
            Үй иелері
          </p>

          <p className="text-center font-serif text-[2.1rem] font-semibold leading-tight tracking-[0.03em] gold-shimmer sm:text-5xl">
            Дулат & Тоғжан
          </p>

          <p className="mt-3 text-center text-sm tracking-[0.08em] text-gold/75 sm:text-base">
            Ұлымыз — Мирас
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="relative z-10 mt-4 px-4 text-center text-[11px] font-medium tracking-[0.08em] text-gold/75 sm:mt-6 sm:text-sm"
        >
          🎵 Музыканы қосыңыз — жоғарғы оң жақтағы батырманы басыңыз
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex h-8 w-5 justify-center rounded-full border-2 border-gold/30 pt-1.5">
          <motion.div
            className="h-2 w-1 rounded-full bg-gold/50"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;