import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BrandMark } from './BrandMark';

export function FloatingNav({ items }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const observers = items.map(({ id }) => {
      const node = document.getElementById(id);
      if (!node) {
        return null;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        { threshold: 0.45 },
      );

      observer.observe(node);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [items]);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <motion.nav
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-auto flex max-w-full items-center gap-3 overflow-x-auto rounded-full border border-white/10 bg-black/35 px-3 py-3 shadow-luxe backdrop-blur-2xl"
      >
        <div className="hidden pl-1 md:block">
          <BrandMark compact />
        </div>
        {items.map((item) => {
          const selected = item.id === active;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] transition duration-300 ${
                selected
                  ? 'bg-white text-obsidian'
                  : 'text-white/65 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </motion.nav>
    </div>
  );
}
