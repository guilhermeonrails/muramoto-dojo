import { useCallback, useEffect, useRef, useState } from 'react'
import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import { Close, ArrowRight } from '../components/Icons'
import { galeria } from '../data/site'
import { src, srcSet } from '../utils/image'

const spanClass = {
  wide: 'col-span-2 sm:col-span-2',
  tall: 'row-span-2',
}

export default function Gallery() {
  const [index, setIndex] = useState(-1)
  const open = index >= 0
  const closeRef = useRef(null)
  const lastFocus = useRef(null)

  const show = (i) => {
    lastFocus.current = document.activeElement
    setIndex(i)
  }
  const close = useCallback(() => setIndex(-1), [])
  const next = useCallback(() => setIndex((i) => (i + 1) % galeria.length), [])
  const prev = useCallback(() => setIndex((i) => (i - 1 + galeria.length) % galeria.length), [])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      if (lastFocus.current instanceof HTMLElement) lastFocus.current.focus()
    }
  }, [open, close, next, prev])

  const active = open ? galeria[index] : null

  return (
    <Section id="galeria" tone="paper">
      <SectionTitle
        kicker="O dojo por dentro"
        title="Momentos no tatame."
        intro="Instantes de treino, concentração e superação. O material oficial substituirá estas imagens em breve."
      />

      <Reveal
        className="mt-12 grid auto-rows-[clamp(8rem,26vw,12.5rem)] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
        style={{ gridAutoFlow: 'dense' }}
      >
        {galeria.map((g, i) => (
          <button
            key={g.id + i}
            type="button"
            onClick={() => show(i)}
            aria-label={`Ampliar imagem: ${g.alt}`}
            className={`group relative overflow-hidden bg-ink/5 focus-visible:outline-offset-[-2px] ${
              spanClass[g.span] || ''
            }`}
          >
            <img
              src={src(g.id, 800)}
              srcSet={srcSet(g.id, [360, 560, 800, 1100])}
              sizes="(min-width: 640px) 24vw, 50vw"
              alt={g.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover saturate-[0.85] transition-[transform,filter] duration-[900ms] ease-out-expo group-hover:scale-[1.05] group-hover:saturate-100"
            />
            <span
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  'linear-gradient(180deg, transparent 45%, oklch(0.15 0.006 40 / 0.78) 100%)',
              }}
              aria-hidden
            />
            <span className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-2 text-left text-[0.8rem] leading-snug text-paper opacity-0 transition-[opacity,transform] duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100">
              {g.alt}
            </span>
          </button>
        ))}
      </Reveal>

      {/* Lightbox */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-modal flex flex-col bg-sumi/95 backdrop-blur-sm"
          onClick={close}
        >
          <div className="flex items-center justify-between px-5 py-4 text-paper/80">
            <span className="text-sm tabular-nums">
              {index + 1} / {galeria.length}
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Fechar"
              className="grid h-11 w-11 place-items-center rounded-full text-2xl text-paper transition-colors hover:bg-paper/10"
            >
              <Close />
            </button>
          </div>

          <div
            className="flex flex-1 items-center justify-center px-4 pb-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={prev}
              aria-label="Imagem anterior"
              className="mr-2 hidden h-12 w-12 shrink-0 rotate-180 place-items-center rounded-full text-paper transition-colors hover:bg-paper/10 sm:grid"
            >
              <ArrowRight />
            </button>
            <figure className="flex max-h-full flex-col items-center">
              <img
                src={src(active.id, 1600)}
                alt={active.alt}
                className="max-h-[76vh] w-auto max-w-full object-contain"
              />
              <figcaption className="mt-4 max-w-xl text-center text-sm text-paper/70">
                {active.alt}
              </figcaption>
            </figure>
            <button
              type="button"
              onClick={next}
              aria-label="Próxima imagem"
              className="ml-2 hidden h-12 w-12 shrink-0 place-items-center rounded-full text-paper transition-colors hover:bg-paper/10 sm:grid"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      )}
    </Section>
  )
}
