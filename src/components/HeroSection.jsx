import { motion } from 'framer-motion';
import { BrandMark } from './BrandMark';

export function HeroSection({ metrics }) {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80"
      >
        <source
          src="https://player.vimeo.com/external/434045526.sd.mp4?s=089ddf1a71bf8a846d7ec260ca4c542d024c0e27&profile_id=139&oauth2_token_id=57447761"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-hero-fade" />
      <div className="grid-overlay absolute inset-0 opacity-50" />

      <div className="relative z-10 flex min-h-screen items-end px-6 pb-12 pt-28 md:px-10 md:pb-16 lg:px-16">
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <BrandMark />
            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl lg:text-[6.5rem]">
              MallScape
            </h1>
            <p className="mt-5 max-w-3xl font-display text-2xl italic leading-tight text-pearl md:text-4xl">
              The Ultimate Retail Destination Experience
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
              MallScape is a premium interactive web experience designed to showcase a mega
              shopping destination as a high-impact business platform for tenants, sponsors, and
              event partners.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#cta"
                className="rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.25em] text-obsidian transition hover:scale-[1.02]"
              >
                Book a Space
              </a>
              <a
                href="#platform"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-[0.25em] text-white transition hover:border-white/50 hover:bg-white/10"
              >
                Explore the Platform
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card p-6 md:p-8"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">
              Performance Snapshot
            </p>
            <div className="mt-6 space-y-6">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0"
                >
                  <div className="text-3xl font-semibold md:text-4xl">{metric.value}</div>
                  <div className="mt-2 text-sm uppercase tracking-[0.25em] text-white/55">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
