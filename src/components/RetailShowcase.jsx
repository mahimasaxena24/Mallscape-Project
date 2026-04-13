import { motion } from 'framer-motion';
import { SectionShell } from './SectionShell';

export function RetailShowcase({ brands }) {
  return (
    <SectionShell
      id="retail"
      eyebrow="Retail Experience"
      title="A complete ecosystem for flagship retail."
      description="From aspirational fashion to innovation-led lifestyle, the environment is curated for discovery, conversion, and sustained brand relevance."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {brands.map((brand, index) => (
          <motion.article
            key={brand.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="group media-frame relative min-h-[360px]"
          >
            <img
              src={brand.image}
              alt={brand.name}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
            <div className="relative flex h-full flex-col justify-end p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-champagne">{`0${index + 1}`}</p>
              <h3 className="mt-3 text-3xl font-semibold">{brand.name}</h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/70">{brand.detail}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
