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

  return (
    <section className="py-20 px-6 bg-card/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-10 text-center mb-16"
        >
          <div className="space-y-3">
            <Calendar className="w-6 h-6 text-gold mx-auto" />
            <p className="text-gold uppercase tracking-[0.15em] text-xs font-medium">Уақыты</p>
            <p className="text-2xl font-serif font-semibold">15 Тамыз, 2025</p>
            <p className="text-muted-foreground text-sm">Жұма, сағат 18:00-де</p>
          </div>

          <div className="space-y-3">
            <MapPin className="w-6 h-6 text-gold mx-auto" />
            <p className="text-gold uppercase tracking-[0.15em] text-xs font-medium">Мекен-жайы</p>
            <p className="text-xl font-serif font-semibold text-balance">Ақтөбе қ., Жанқоныс, Тастемір 22</p>
          </div>

          <div className="space-y-3">
            <Clock className="w-6 h-6 text-gold mx-auto" />
            <p className="text-gold uppercase tracking-[0.15em] text-xs font-medium">Кері санақ</p>
            <div className="flex justify-center gap-3">
              {timerBlocks.map((b) => (
                <div key={b.label} className="bg-background rounded-lg p-3 min-w-[56px] shadow-card">
                  <p className="text-2xl font-serif font-bold text-foreground">{String(b.value).padStart(2, "0")}</p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{b.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DetailsSection;
