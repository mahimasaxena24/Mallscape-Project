import { motion } from 'framer-motion';
import { SectionShell } from './SectionShell';

export function LuxurySection({ brands }) {
  return (
    <SectionShell
      id="luxury"
      eyebrow="Luxury Segment"
      title="A stage calibrated for prestige."
      description="An intimate, dark-toned environment expresses rarity, craftsmanship, and status. The luxury district becomes its own signal of relevance for global maisons."
      dark
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="media-frame relative min-h-[460px]"
        >
          <img
            src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1400&q=80"
            alt="Luxury retail promenade"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black/40 to-black/80" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
            <p className="font-display text-3xl italic text-pearl md:text-5xl">
              Crafted for the world&apos;s most discerning customer.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {brands.map((brand) => (
            <div
              key={brand}
              className="rounded-[24px] border border-white/10 bg-white/[0.03] px-6 py-5 text-lg text-pearl transition duration-300 hover:border-champagne/40 hover:bg-white/[0.06]"
            >
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </SectionShell>
  );
}
