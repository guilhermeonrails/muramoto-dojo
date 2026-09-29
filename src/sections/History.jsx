import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import { historia } from '../data/site'

export default function History() {
  return (
    <Section id="historia" tone="fog">
      <div className="grid gap-x-16 gap-y-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionTitle
              jp="士道館"
              title="Linhagem tradicional: Sosui Yoshiji Soeno."
              intro="O Karatê Shidokan praticado no Muramoto Dojo possui uma das linhagens mais respeitadas e temidas do mundo das artes marciais. Nossa metodologia deriva diretamente dos ensinamentos de seu fundador, o Grão-Mestre Sosui Yoshiji Soeno (Faixa Preta 10º Dan)."
            />
            <Reveal className="mt-10 space-y-5 measure" delay={120}>
              {[
                ['Triatlo das Artes Marciais', 'Diferentemente do karatê tradicional, focado em competições de pontos ou em formas (katas), o Shidokan de Sosui Soeno ficou mundialmente conhecido por esse nome.'],
                ['Combate real', 'Ao treinar no Muramoto Dojo, você não está apenas praticando uma atividade física: está bebendo direto da fonte de um sistema de combate real.'],
                ['Budo japonês', 'Um estilo lapidado por uma das maiores lendas vivas do Budo japonês.'],
              ].map(([t, d]) => (
                <div key={t} className="flex gap-4">
                  <span className="mt-2 h-px w-6 shrink-0 bg-seal" aria-hidden />
                  <p className="text-[0.98rem] text-stone">
                    <strong className="font-medium text-ink">{t}.</strong> {d}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>

        {/* Linha do tempo */}
        <ol className="lg:col-span-6 lg:col-start-7">
          {historia.map((item, i) => {
            const last = i === historia.length - 1
            return (
              <Reveal as="li" key={item.year} delay={i * 60} className="grid grid-cols-[3.5rem_1fr] gap-5 sm:grid-cols-[5.5rem_1fr] sm:gap-8">
                <span
                  className={`pt-0.5 text-right font-display text-lg font-semibold sm:text-2xl ${
                    last ? 'text-seal' : 'text-ink'
                  }`}
                >
                  {item.year}
                </span>
                <div
                  className={`relative border-l pl-7 sm:pl-9 ${
                    last ? 'border-transparent pb-0' : 'border-mist pb-12'
                  }`}
                >
                  <span
                    className={`absolute -left-[6px] top-1 h-3 w-3 rounded-full ring-4 ring-fog ${
                      last ? 'bg-seal' : 'bg-ink'
                    }`}
                    aria-hidden
                  />
                  <h3 className="text-h3 font-medium text-ink">{item.title}</h3>
                  <p className="mt-3 text-[0.98rem] leading-relaxed text-stone">{item.text}</p>
                </div>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </Section>
  )
}
