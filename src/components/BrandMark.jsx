export function BrandMark({ compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-champagne via-amberglow to-azure shadow-glow">
        <div className="absolute inset-[1px] rounded-[14px] bg-obsidian/90" />
        <svg
          viewBox="0 0 64 64"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 42.5V20.5L24.5 34L32 23L39.5 34L50 20.5V42.5"
            stroke="url(#mallscape-gradient)"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 48H46"
            stroke="rgba(245,241,234,0.75)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="mallscape-gradient" x1="10" y1="14" x2="50" y2="50">
              <stop stopColor="#d6b98c" />
              <stop offset="0.5" stopColor="#f4b860" />
              <stop offset="1" stopColor="#93d4ff" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="min-w-0">
        <div className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/45">
          Premium Sales Deck
        </div>
        <div className={`${compact ? 'text-base' : 'text-lg'} font-semibold tracking-[0.18em] text-white`}>
          MallScape
        </div>
      </div>
    </div>
  );
}
