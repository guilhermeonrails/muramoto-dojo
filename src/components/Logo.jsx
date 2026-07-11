// Marca: selo (hanko) + tipografia. tone controla a cor do texto sobre claro/escuro.
export default function Logo({ tone = 'light', className = '' }) {
  const textColor = tone === 'dark' ? 'text-paper' : 'text-ink'
  const subColor = tone === 'dark' ? 'text-paper/55' : 'text-stone'

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        className="grid h-9 w-9 shrink-0 place-items-center rounded-[7px] bg-seal text-paper"
        aria-hidden
      >
        <svg viewBox="0 0 32 32" className="h-5 w-5">
          <circle cx="16" cy="16" r="9" fill="none" stroke="currentColor" strokeWidth="2.4" />
          <path d="M16 8.5c4 2.4 4 12.6 0 15" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.55" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.28rem] font-semibold tracking-tight ${textColor}`}>
          Muramoto
        </span>
        <span className={`mt-[3px] text-[0.62rem] font-medium uppercase tracking-[0.32em] ${subColor}`}>
          Karate Shidokan
        </span>
      </span>
    </span>
  )
}
