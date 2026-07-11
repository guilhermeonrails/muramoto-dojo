import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import { beneficios } from '../data/site'

export default function Benefits() {
  return (
    <Section id="beneficios" tone="graphite">
      <SectionTitle
        tone="dark"
        kicker="Além do tatame"
        title="O que o Karate deixa para a vida."
        intro="A técnica é só o começo. O que se conquista no treino atravessa a porta do dojo e permanece."
      />

      <Reveal className="mt-14 grid grid-cols-2 border-l border-t border-paper/12 lg:grid-cols-4">
        {beneficios.map((b) => (
          <div
            key={b.title}
            className="group border-b border-r border-paper/12 p-6 transition-colors duration-500 hover:bg-paper/[0.04] sm:p-8"
          >
            <span className="font-display text-4xl text-seal-bright transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5 sm:text-5xl" aria-hidden>
              {b.kanji}
            </span>
            <h3 className="mt-5 text-lg font-medium text-paper">{b.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-paper/60">{b.text}</p>
          </div>
        ))}
      </Reveal>
    </Section>
  )
}
