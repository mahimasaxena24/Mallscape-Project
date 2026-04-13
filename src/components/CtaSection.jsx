import { motion } from 'framer-motion';
import { SectionShell } from './SectionShell';

const ctas = [
  { label: 'Book a Space', href: 'mailto:mahimasaxena109@gmail.com?subject=Book%20a%20Space' },
  {
    label: 'Partner With Us',
    href: 'mailto:mahimasaxena109@gmail.com?subject=Partner%20With%20Us',
  },
  { label: 'Host an Event', href: 'mailto:mahimasaxena109@gmail.com?subject=Host%20an%20Event' },
];

export function CtaSection() {
  return (
    <SectionShell
      id="cta"
      eyebrow="Call to Action"
      title="Create the next defining moment."
      description="For flagship leasing, sponsorship packages, and destination-scale events, this is where your brand steps into global visibility."
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="glass-card flex flex-col items-start justify-between gap-8 rounded-[36px] px-8 py-10 md:px-10 lg:flex-row lg:items-center"
      >
        <div className="max-w-2xl">
          <p className="font-display text-3xl italic text-pearl md:text-5xl">
            Reach audiences at the scale of a city, with the desirability of a luxury icon.
          </p>
          <div className="mt-8 flex flex-col gap-3 text-sm text-white/70">
            <a
              href="mailto:mahimasaxena109@gmail.com"
              className="inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 transition hover:border-champagne/40 hover:bg-white/[0.08] hover:text-white"
            >
              mahimasaxena109@gmail.com
            </a>
            <a
              href="tel:6395946300"
              className="inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 transition hover:border-champagne/40 hover:bg-white/[0.08] hover:text-white"
            >
              6395946300
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          {ctas.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full border border-white/15 bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.25em] text-obsidian transition hover:scale-[1.02] hover:bg-champagne"
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.div>
    </SectionShell>
  );
}
