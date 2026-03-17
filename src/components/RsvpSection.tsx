import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const RsvpSection = () => {
  const [form, setForm] = useState({
    name: "",
    attending: "yes",
    guests: "1",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      toast.error("Атыңызды жазыңыз");
      return;
    }
    toast.success("Рахмет! Жауабыңыз қабылданды ✨");
    setForm({ name: "", attending: "yes", guests: "1" });
  };

  const update = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }));

  return (
    <section className="py-24 px-6 bg-pattern">
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-background p-8 md:p-10 rounded-3xl shadow-card border border-border"
        >
          <h2 className="text-3xl font-serif text-center mb-2 font-bold">
            Келетініңізді растаңыз
          </h2>
          <p className="text-center text-muted-foreground text-sm mb-8">
            Сіздің жауабыңыз біз үшін маңызды
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 font-medium">
                Аты-жөніңіз
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className="w-full border-b border-border py-3 focus:border-primary outline-none transition-colors bg-transparent text-foreground"
                placeholder="Мысалы: Арман"
              />
            </div>


            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 font-medium">
                  Келесіз бе?
                </label>
                <select
                  value={form.attending}
                  onChange={(e) => update("attending", e.target.value)}
                  className="w-full border-b border-border py-3 focus:border-primary outline-none bg-transparent text-foreground"
                >
                  <option value="yes">Иә, келемін</option>
                  <option value="no">Келе алмаймын</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 font-medium">
                  Адам саны
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={form.guests}
                  onChange={(e) => update("guests", e.target.value)}
                  className="w-full border-b border-border py-3 focus:border-primary outline-none bg-transparent text-foreground"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 font-medium">
                Тілек (міндетті емес)
              </label>
              <textarea
                value={form.wish}
                onChange={(e) => update("wish", e.target.value)}
                className="w-full border-b border-border py-3 focus:border-primary outline-none resize-none bg-transparent text-foreground"
                rows={2}
                placeholder="Жылы тілектеріңіз..."
              />
            </div>

            <button
              type="submit"
              className="w-full gradient-gold text-primary-foreground py-4 rounded-xl font-semibold shadow-gold hover:-translate-y-0.5 transition-all text-sm tracking-wide"
            >
              Жіберу
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default RsvpSection;
