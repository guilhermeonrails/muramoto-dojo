import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import { missao, visao, valores } from '../data/site'

export default function Mission() {
  return (
    <Section id="missao" tone="graphite">
      <SectionTitle tone="dark" kicker="Quem somos" title="Missão, visão e valores." />

      <Reveal className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <h3 className="text-label uppercase text-seal-bright">Nossa missão</h3>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-paper/75">{missao}</p>
        </div>
        <div>
          <h3 className="text-label uppercase text-seal-bright">Nossa visão</h3>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-paper/75">{visao}</p>
        </div>
      </Reveal>

      <h3 className="mt-16 text-label uppercase text-paper/50">Nossos valores</h3>
      <Reveal className="mt-6 grid grid-cols-2 border-l border-t border-paper/12 lg:grid-cols-4">
        {valores.map((v) => (
          <div
            key={v.title}
            className="group border-b border-r border-paper/12 p-6 transition-colors duration-500 hover:bg-paper/[0.04] sm:p-8"
          >
            <span className="font-display text-4xl text-seal-bright transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5 sm:text-5xl" aria-hidden>
              {v.kanji}
            </span>
            <h4 className="mt-5 text-lg font-medium text-paper">{v.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-paper/60">{v.text}</p>
          </div>
        ))}
      </Reveal>
    </Section>
  )
}
