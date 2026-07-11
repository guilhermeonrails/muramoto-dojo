import Reveal from './Reveal'

// Cabeçalho de seção. Kicker é opcional e usado com parcimônia (não em toda seção).
export default function SectionTitle({
  kicker,
  title,
  jp, // rótulo japonês discreto, alternativa ao kicker
  intro,
  align = 'left',
  tone = 'light', // light | dark
  className = '',
  max = 'measure',
}) {
  const alignCls = align === 'center' ? 'items-center text-center mx-auto' : 'items-start'
  const introColor = tone === 'dark' ? 'text-paper/70' : 'text-stone'
  const kickerColor = tone === 'dark' ? 'text-paper/50' : 'text-stone'
  const jpColor = tone === 'dark' ? 'text-seal-bright' : 'text-seal'

  return (
    <Reveal className={`flex flex-col ${alignCls} ${className}`}>
      {kicker && (
        <span className={`kicker mb-5 flex items-center gap-3 ${kickerColor}`}>
          <span className="inline-block h-px w-8 bg-seal" aria-hidden />
          {kicker}
        </span>
      )}
      {jp && !kicker && (
        <span className={`mb-3 font-display text-lg ${jpColor}`} aria-hidden>
          {jp}
        </span>
      )}
      <h2 className="text-h2 font-display font-semibold">{title}</h2>
      {intro && (
        <p className={`mt-6 text-lead ${introColor} ${max === 'measure' ? 'measure' : ''}`}>
          {intro}
        </p>
      )}
    </Reveal>
  )
}
