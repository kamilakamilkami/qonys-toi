import { motion } from "framer-motion";

const schedule = [
  { time: "18:00", title: "Қонақтарды қарсы алу", desc: "Салтанатты жиынның басталуы" },
  { time: "18:30", title: "Үй көрсету", desc: "Жаңа шаңыраққа экскурсия" },
  { time: "19:00", title: "Шашу және Ақ тілектер", desc: "Жаңа үйге бата беру рәсімі" },
  { time: "19:30", title: "Көркем-сауық бағдарлама", desc: "Ән-жыр, тілектер, ойындар" },
  { time: "20:00", title: "Той дастарханы", desc: "Мерекелік ас және ойын-сауық" },
];

const ProgramSection = () => {
  return (
    <section className="py-24 px-6 bg-pattern">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif text-center mb-16 font-bold"
        >
          Той бағдарламасы
        </motion.h2>

        <div className="space-y-0 relative">
          {/* Timeline line */}
          <div className="absolute left-[17px] top-4 bottom-4 w-[1px] bg-gold/20" />

          {schedule.map((item, i) => (
            <motion.div
              key={item.time}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-6 items-start relative pb-10 last:pb-0"
            >
              <div className="w-9 h-9 rounded-full gradient-gold flex-shrink-0 flex items-center justify-center text-primary-foreground text-[10px] font-semibold z-10 shadow-gold">
                {item.time}
              </div>
              <div className="pt-1">
                <h3 className="font-serif text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
