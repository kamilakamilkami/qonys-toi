import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import floralBorder from "@/assets/floral-border.jpg";

const RsvpSection = () => {
  const [form, setForm] = useState({
    name: "",
    attending: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      toast.error("Атыңызды жазыңыз");
      return;
    }
    if (!form.attending) {
      toast.error("Жауабыңызды таңдаңыз");
      return;
    }

    setLoading(true);
    try {
      const guests = form.attending === "couple" ? 2 : form.attending === "yes" ? 1 : 0;
      const { error } = await supabase.from("rsvp_responses").insert({
        name: form.name.trim(),
        attending: form.attending === "no" ? "no" : "yes",
        guests,
      });

      if (error) throw error;

      toast.success("Рахмет! Жауабыңыз қабылданды ✨");
      setForm({ name: "", attending: "" });
    } catch (err) {
      console.error("RSVP error:", err);
      toast.error("Қате болды, қайталап көріңіз");
    } finally {
      setLoading(false);
    }
  };

  const options = [
    { value: "yes", label: "Әрине, келемін" },
    { value: "couple", label: "Жұбайыммен келемін" },
    { value: "no", label: "Өкінішке орай, келе алмаймын" },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Floral background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${floralBorder})` }}
      />
      <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />

      <div className="max-w-lg mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-background/40 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-card border border-border/30"
        >
          <h2 className="text-3xl font-serif text-center mb-2 font-bold gold-shimmer">
            Келетініңізді растаңыз
          </h2>
          <p className="text-center text-foreground/50 text-sm mb-8">
            Сіздің жауабыңыз біз үшін маңызды
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name input */}
            <div>
              <label className="block text-gold text-glow-sm text-sm font-serif mb-3 text-left">
                Аты-жөніңіз
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full border-b border-gold/30 py-3 focus:border-gold outline-none transition-colors bg-transparent text-foreground placeholder:text-foreground/30"
                placeholder="Жұбайыңызбен келетін болсаңыз, екі есімді де көрсетіңіз"
                maxLength={100}
              />
            </div>

            {/* Radio options */}
            <div className="space-y-3">
              {options.map((opt) => (
                <motion.label
                  key={opt.value}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={`flex items-center gap-4 cursor-pointer p-4 rounded-xl transition-all ${
                    form.attending === opt.value
                      ? "bg-gold/10 border border-gold/40"
                      : "border border-transparent hover:bg-foreground/5"
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                    form.attending === opt.value
                      ? "border-gold"
                      : "border-foreground/30"
                  }`}>
                    {form.attending === opt.value && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2.5 h-2.5 rounded-full bg-gold"
                      />
                    )}
                  </div>
                  <span className={`text-sm font-medium transition-colors ${
                    form.attending === opt.value ? "text-gold" : "text-foreground/70"
                  }`}>
                    {opt.label}
                  </span>
                  <input
                    type="radio"
                    name="attending"
                    value={opt.value}
                    checked={form.attending === opt.value}
                    onChange={(e) => setForm((f) => ({ ...f, attending: e.target.value }))}
                    className="sr-only"
                  />
                </motion.label>
              ))}
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full gradient-gold text-primary-foreground py-4 rounded-full font-semibold shadow-gold text-sm tracking-wide disabled:opacity-50 uppercase"
            >
              {loading ? "Жіберілуде..." : "Жіберу"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default RsvpSection;
