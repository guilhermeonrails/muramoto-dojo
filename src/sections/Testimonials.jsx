import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import { Quote } from '../components/Icons'
import { depoimentos } from '../data/site'

export default function Testimonials() {
  return (
    <Section id="depoimentos" tone="fog">
      <SectionTitle
        kicker="Quem treina conosco"
        title="O caminho contado por quem trilha."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {depoimentos.map((d, i) => (
          <Reveal
            as="figure"
            key={d.name}
            delay={i * 90}
            className="flex flex-col bg-paper p-8"
          >
            <Quote className="text-2xl text-seal" />
            <blockquote className="mt-5 flex-1 text-[1.02rem] leading-relaxed text-ink">
              {d.quote}
            </blockquote>
            <figcaption className="mt-7 border-t border-mist pt-5">
              <p className="font-display text-lg font-medium text-ink">{d.name}</p>
              <p className="mt-0.5 text-sm text-stone">{d.role}</p>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
