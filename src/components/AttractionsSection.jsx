import { motion } from 'framer-motion';
import { SectionShell } from './SectionShell';

export function AttractionsSection({ attractions }) {
  return (
    <SectionShell
      id="attractions"
      eyebrow="Entertainment & Attractions"
      title="Experiences that convert visits into stories."
      description="World-class attractions create natural repeat behavior, family relevance, and unforgettable sponsor integration opportunities."
    >
      <div className="space-y-6">
        {attractions.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
            className={`media-frame group grid overflow-hidden ${
              item.title === 'Aquarium' || item.title === 'VR Park'
                ? 'min-h-[620px] lg:grid-cols-[1.05fr_0.95fr]'
                : 'lg:grid-cols-[0.95fr_1.05fr]'
            }`}
          >
            <div
              className={`relative ${item.title === 'Aquarium' || item.title === 'VR Park' ? 'min-h-[360px] lg:min-h-[620px]' : 'min-h-[320px]'}`}
            >
              <motion.img
                src={item.media}
                alt={item.title}
                loading="lazy"
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${item.accent}`} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_28%)] opacity-70" />
              <motion.div
                animate={{ opacity: [0.25, 0.45, 0.25] }}
                transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                className="absolute inset-y-0 left-[-10%] w-1/3 bg-gradient-to-r from-white/0 via-white/10 to-white/0 blur-2xl"
              />
            </div>
            <div className="flex items-center p-8 md:p-10 lg:p-12">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-sm uppercase tracking-[0.3em] text-amberglow">{`Attraction 0${
                    index + 1
                  }`}</p>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">
                    {item.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-3xl font-semibold md:text-4xl lg:text-5xl">{item.title}</h3>
                <p className="mt-5 max-w-xl text-base leading-8 text-white/70 md:text-lg">
                  {item.copy}
                </p>
                {(item.title === 'Aquarium' || item.title === 'VR Park') && (
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[22px] border border-white/10 bg-white/[0.04] px-5 py-4">
                      <p className="text-xs uppercase tracking-[0.3em] text-white/45">Impact</p>
                      <p className="mt-2 text-sm leading-6 text-white/75">
                        High-visibility storytelling moments that keep cameras, families, and
                        sponsors engaged.
                      </p>
                    </div>
                    <div className="rounded-[22px] border border-white/10 bg-white/[0.04] px-5 py-4">
                      <p className="text-xs uppercase tracking-[0.3em] text-white/45">Opportunity</p>
                      <p className="mt-2 text-sm leading-6 text-white/75">
                        Premium integrations for launches, naming rights, immersive brand zones,
                        and event amplification.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
