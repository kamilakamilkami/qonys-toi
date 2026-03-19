import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

const TARGET_DATE = new Date("2026-03-28T18:00:00");

const DetailsSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

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
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } }
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-card/80" />
      <div className="absolute top-0 left-0 right-0 glow-line" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-10 text-center mb-16"
        >
          <motion.div variants={itemVariants} className="space-y-3">
            <Calendar className="w-6 h-6 text-gold mx-auto" />
            <p className="text-gold text-glow-sm uppercase tracking-[0.15em] text-xs font-medium">Уақыты</p>
            <p className="text-2xl font-serif font-semibold text-foreground">28 Наурыз, 2026</p>
            <p className="text-muted-foreground text-sm">Сенбі, сағат 18:00-де</p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3">
            <MapPin className="w-6 h-6 text-gold mx-auto" />
            <p className="text-gold text-glow-sm uppercase tracking-[0.15em] text-xs font-medium">Мекен-жайы</p>
            <p className="text-xl font-serif font-semibold text-foreground text-balance">Ақтөбе қ., Жаңақоныс, Тастемір 22</p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3">
            <Clock className="w-6 h-6 text-gold mx-auto" />
            <p className="text-gold text-glow-sm uppercase tracking-[0.15em] text-xs font-medium">Кері санақ</p>
            <div className="flex justify-center gap-3">
              {timerBlocks.map((b) => (
                <motion.div
                  key={b.label}
                  className="bg-background/60 backdrop-blur-sm rounded-lg p-3 min-w-[56px] shadow-card border border-border/50"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-2xl font-serif font-bold text-gold text-glow-sm">{String(b.value).padStart(2, "0")}</p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{b.label}</p>
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
