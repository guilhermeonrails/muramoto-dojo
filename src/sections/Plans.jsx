import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import { Whatsapp } from '../components/Icons'
import { planos, contact, whatsapp } from '../data/site'

export default function Plans() {
  return (
    <Section id="planos" tone="paper">
      <SectionTitle
        kicker="Planos e investimentos"
        title="Escolha o seu ritmo."
        intro="Escolha a modalidade que melhor se adapta à sua rotina e aos seus objetivos. Todos os nossos planos contam com a metodologia exclusiva do Muramoto Dojo: turmas reduzidas, atenção aos detalhes e evolução constante."
      />

      <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-16">
        {planos.map((grupo, gi) => (
          <Reveal key={grupo.id} delay={gi * 90}>
            <h3 className="font-display text-h3 font-medium text-ink">{grupo.title}</h3>
            <p className="mt-2 measure text-[0.98rem] leading-relaxed text-stone">{grupo.intro}</p>

            <ul className="mt-8 border-t border-ink">
              {grupo.items.map((p) => (
                <li
                  key={p.name}
                  className="flex items-start justify-between gap-6 border-b border-mist py-6"
                >
                  <div>
                    <p className="font-display text-lg font-medium text-ink">{p.name}</p>
                    <p className="mt-0.5 text-sm font-medium tracking-wide text-seal">{p.freq}</p>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-stone">{p.desc}</p>
                  </div>
                  <p className="shrink-0 text-right">
                    <span className="font-display text-2xl font-semibold tabular-nums text-ink">
                      {p.price}
                    </span>
                    <span className="block text-sm text-stone">/ mês</span>
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14 flex flex-col items-start justify-between gap-6 bg-fog px-8 py-8 sm:flex-row sm:items-center sm:px-10">
        <div>
          <p className="font-display text-h3 font-medium text-ink">Pronto para o primeiro passo?</p>
          <p className="mt-1 text-[0.98rem] text-stone">
            Agende sua aula experimental gratuita pelo WhatsApp. {contact.hours}
          </p>
        </div>
        <Button
          href={whatsapp()}
          target="_blank"
          rel="noopener"
          variant="seal"
          size="lg"
          className="shrink-0"
          icon={<Whatsapp className="text-[1.15em]" />}
        >
          Agendar agora
        </Button>
      </Reveal>
    </Section>
  )
}
