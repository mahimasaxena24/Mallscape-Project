import { motion } from 'framer-motion';
import { SectionShell } from './SectionShell';

export function PlatformSection({ events }) {
  return (
    <SectionShell
      id="platform"
      eyebrow="Events & Platform"
      title="A global platform, not just a venue."
      description="The property delivers scale, audience density, and cultural relevance that make activations, sponsorships, and events feel larger than life."
    >
      <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="media-frame relative min-h-[520px]"
        >
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=80"
          >
            <source
              src="https://player.vimeo.com/external/371433846.sd.mp4?s=2368c796b6e9c5137f4d3a99b2d95610d9ee05f8&profile_id=139&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10" />
          <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
            <p className="max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">
              Every campaign becomes a public moment.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-5">
          {events.map((event, index) => (
            <motion.article
              key={event.title}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-7"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-azure">{`Platform 0${
                index + 1
              }`}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{event.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/70">{event.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
