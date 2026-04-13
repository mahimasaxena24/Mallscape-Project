import { motion } from 'framer-motion';
import { SectionShell } from './SectionShell';

export function LifestyleSection({ collections }) {
  return (
    <SectionShell
      id="lifestyle"
      eyebrow="Dining & Lifestyle"
      title="From destination dining to everyday ritual."
      description="The mix of restaurants, cafes, wellness, and social destinations extends dwell time and reshapes the visit into an all-day experience."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {collections.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group media-frame"
          >
            <div className="relative h-80 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent" />
            </div>
            <div className="p-7">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">{item.subtitle}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
