import { motion } from 'framer-motion';
import { AnimatedCounter } from './AnimatedCounter';
import { SectionShell } from './SectionShell';

export function StatsSection({ stats }) {
  return (
    <SectionShell
      id="property"
      eyebrow="Why This Property"
      title="Built for scale, designed for global attention."
      description="This is more than a retail asset. It is an audience engine, a tourism magnet, and a launch platform that amplifies every brand inside it."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.article
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card p-7"
          >
            <div className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                decimals={stat.decimals ?? 0}
              />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-white">{stat.label}</h3>
            <p className="mt-3 text-sm leading-7 text-white/65">{stat.description}</p>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
