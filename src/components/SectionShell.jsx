import { motion } from 'framer-motion';

const viewport = { once: true, amount: 0.25 };

export function SectionShell({ id, eyebrow, title, description, children, dark = false }) {
  return (
    <section
      id={id}
      className={`relative px-6 py-20 md:px-10 md:py-28 lg:px-16 ${
        dark ? 'bg-panel-dark' : ''
      }`}
    >
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 max-w-3xl"
          >
            {eyebrow ? <div className="section-eyebrow">{eyebrow}</div> : null}
            {title ? <h2 className="section-title">{title}</h2> : null}
            {description ? (
              <p className="mt-5 text-base leading-7 text-white/70 md:text-lg">{description}</p>
            ) : null}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
