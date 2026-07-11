import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import { modalidades } from '../data/site'
import { src, srcSet } from '../utils/image'

export default function Modalities() {
  return (
    <Section id="modalidades" tone="paper">
      <SectionTitle
        kicker="No tatame"
        title="Uma turma para cada caminho."
        intro="Do primeiro contato da criança ao alto rendimento do atleta, cada modalidade tem seu próprio ritmo, foco e propósito."
      />

      <div className="mt-16 space-y-20 sm:space-y-24">
        {modalidades.map((m, i) => {
          const flip = i % 2 === 1
          return (
            <Reveal as="article" key={m.id} className="grid items-center gap-x-16 gap-y-8 lg:grid-cols-12">
              <figure
                className={`overflow-hidden lg:col-span-6 ${
                  flip ? 'lg:col-start-7' : 'lg:col-start-1'
                }`}
              >
                <img
                  src={src(m.image, 1100)}
                  srcSet={srcSet(m.image, [560, 840, 1120])}
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  alt={m.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[5/4] w-full object-cover transition-transform duration-[1200ms] ease-out-expo hover:scale-[1.02]"
                />
              </figure>

              <div
                className={`lg:col-span-5 lg:row-start-1 ${
                  flip ? 'lg:col-start-1' : 'lg:col-start-8'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="font-display text-4xl text-seal" aria-hidden>
                    {m.kanji}
                  </span>
                  <span className="rounded-full bg-ink/5 px-3 py-1 text-xs font-medium tracking-wide text-stone">
                    {m.age}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[clamp(1.6rem,3vw,2.25rem)] font-semibold text-ink">
                  {m.title}
                </h3>
                <p className="mt-4 measure text-[1.02rem] leading-relaxed text-stone">{m.desc}</p>
                <ul className="mt-6 space-y-2.5">
                  {m.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-[0.95rem] text-ink">
                      <span className="grid h-4 w-4 shrink-0 place-items-center text-seal" aria-hidden>
                        <svg viewBox="0 0 16 16" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 8.5l3.2 3.2L13 5" />
                        </svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
