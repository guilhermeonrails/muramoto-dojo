import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import { Whatsapp } from '../components/Icons'
import { horarios, whatsapp } from '../data/site'

export default function Schedule() {
  return (
    <Section id="horarios" tone="paper">
      <div className="grid gap-x-16 gap-y-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <SectionTitle kicker="Quando treinar" title="Horários das turmas." />
        </div>
        <div className="lg:col-span-5">
          <p className="text-[1rem] leading-relaxed text-stone lg:text-right">
            Grade organizada por faixa etária e nível. A primeira aula é experimental e sem
            compromisso — escolha o melhor horário e venha conhecer.
          </p>
        </div>
      </div>

      <Reveal className="mt-12 overflow-x-auto">
        <table className="w-full min-w-[38rem] border-collapse text-left">
          <caption className="sr-only">Grade de horários por turma</caption>
          <thead>
            <tr className="border-b border-ink text-label uppercase text-stone">
              <th scope="col" className="py-4 pr-4 font-medium">Turma</th>
              <th scope="col" className="py-4 pr-4 font-medium">Dias</th>
              <th scope="col" className="py-4 pr-4 font-medium">Horário</th>
              <th scope="col" className="py-4 font-medium">Público</th>
            </tr>
          </thead>
          <tbody>
            {horarios.map((h) => (
              <tr
                key={h.turma}
                className="border-b border-mist transition-colors duration-300 hover:bg-fog"
              >
                <th scope="row" className="py-5 pr-4 font-display text-lg font-medium text-ink">
                  {h.turma}
                </th>
                <td className="py-5 pr-4 text-[0.95rem] text-stone">{h.dias}</td>
                <td className="py-5 pr-4 text-[0.95rem] tabular-nums text-ink">{h.horario}</td>
                <td className="py-5 text-[0.95rem] text-stone">{h.publico}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>

      <Reveal className="mt-14 flex flex-col items-start justify-between gap-6 bg-fog px-8 py-8 sm:flex-row sm:items-center sm:px-10">
        <div>
          <p className="font-display text-h3 font-medium text-ink">Pronto para o primeiro passo?</p>
          <p className="mt-1 text-[0.98rem] text-stone">
            Agende sua aula experimental gratuita pelo WhatsApp.
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
