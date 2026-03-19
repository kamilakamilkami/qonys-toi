import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

const TARGET_DATE = new Date("2026-03-28T18:00:00");

const DetailsSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    const update = () => {
      const diff = TARGET_DATE.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const timerBlocks = [
    { value: timeLeft.days, label: "Күн" },
    { value: timeLeft.hours, label: "Сағат" },
    { value: timeLeft.mins, label: "Мин" },
    { value: timeLeft.secs, label: "Сек" },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative overflow-hidden px-6 py-20">
      <div className="absolute inset-0 bg-card/80" />
      <div className="absolute left-0 right-0 top-0 glow-line" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-gold text-glow-sm">✦</p>
          <h2 className="mb-6 font-serif text-3xl font-semibold gold-shimmer md:text-5xl">
            Үш қуаныш — бір дастархан
          </h2>
          <div className="mx-auto mb-6 h-px w-24 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
          <div className="mx-auto max-w-4xl space-y-4 text-foreground/85">
            <p className="text-sm leading-[1.9] md:text-base">
              Ақ босаға аттаған жаңа үйіміздің төрінде;
            </p>
            <p className="text-sm leading-[1.9] md:text-base">
              15 жыл аңсап күткен, шаңырағымыздың тірегі — ұлымыз
              <span className="mx-1 font-semibold text-gold">МИРАСТЫҢ</span>
              дүниеге келу қуанышында;
            </p>
            <p className="text-sm leading-[1.9] md:text-base">
              Еңбектегі абыройымыз бен бөлім басшысы атану мәртебесінде ақ
              дастарханымыздың қадірлі қонағы болуға шақырамыз!
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16 grid gap-10 text-center md:grid-cols-3"
        >
          <motion.div variants={itemVariants} className="space-y-3">
            <Calendar className="mx-auto h-6 w-6 text-gold" />
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-gold text-glow-sm">
              Уақыты
            </p>
            <p className="font-serif text-2xl font-semibold text-foreground">
              28 Наурыз, 2026
            </p>
            <p className="text-sm text-muted-foreground">Сенбі, сағат 18:00-де</p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3">
            <MapPin className="mx-auto h-6 w-6 text-gold" />
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-gold text-glow-sm">
              Мекен-жайы
            </p>
            <p className="text-balance font-serif text-xl font-semibold text-foreground">
              Ақтөбе қ., Жаңақоныс, Тастемір 22
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3">
            <Clock className="mx-auto h-6 w-6 text-gold" />
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-gold text-glow-sm">
              Кері санақ
            </p>
            <div className="flex justify-center gap-3">
              {timerBlocks.map((b) => (
                <motion.div
                  key={b.label}
                  className="min-w-[56px] rounded-lg border border-border/50 bg-background/60 p-3 shadow-card backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="font-serif text-2xl font-bold text-gold text-glow-sm">
                    {String(b.value).padStart(2, "0")}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    {b.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 glow-line" />
    </section>
  );
};

export default DetailsSection;