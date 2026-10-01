import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import { images } from '../data/site'
import { src, srcSet } from '../utils/image'

const credenciais = ['Karatê Shidokan · 4º Dan', 'Jiu-Jitsu · Faixa Preta 3º Grau', 'Campeão Brasileiro 1997']

export default function SenseiRicardo() {
  return (
    <Section id="sensei" tone="paper" className="border-b border-mist">
      <div className="grid items-start gap-x-16 gap-y-14 lg:grid-cols-12">
        {/* Imagem — espelhada em relação à seção da Sensei Natália */}
        <Reveal className="lg:sticky lg:top-28 lg:order-2 lg:col-span-5 lg:col-start-8">
          <figure className="relative">
            <div className="overflow-hidden">
              <img
                src={src(images.senseiStance, 1000)}
                srcSet={srcSet(images.senseiStance, [560, 840, 1120])}
                sizes="(min-width: 1024px) 38vw, 100vw"
                alt="Shihan Ricardo Muramoto, instrutor do Muramoto Dojo"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
            <span
              className="absolute -left-4 -top-4 hidden h-16 w-16 place-items-center rounded-full bg-seal font-display text-2xl text-paper sm:grid"
              aria-hidden
            >
              武
            </span>
          </figure>
        </Reveal>

        {/* Texto */}
        <div className="lg:order-1 lg:col-span-6 lg:col-start-1 lg:row-start-1">
          <SectionTitle kicker="Corpo técnico · Conheça nosso instrutor" title="Shihan Ricardo Muramoto" />
          <p className="mt-3 font-display text-lead text-seal">Faixa Preta 4º Dan</p>

          <div className="mt-7 space-y-6 measure text-[1.05rem] leading-relaxed text-stone">
            <p>
              A jornada do Shihan Ricardo Muramoto nas artes marciais começou cedo, em 1982, com
              apenas 7 anos de idade. São mais de quatro décadas de dedicação, em uma vida inteira
              moldada pela filosofia e pela disciplina do Karatê, que desenvolveram foco e caráter
              desde a infância.
            </p>
            <p>
              Ao longo desse caminho, consolidou seu nome como atleta de elite, professor respeitado
              e mestre. Em 2017, foi graduado Faixa Preta 4º Dan de Karatê Shidokan. Seu domínio
              técnico se estende também à arte suave: no Brazilian Jiu-Jitsu, é Faixa Preta 3º Grau.
            </p>
          </div>

          {/* Conquistas */}
          <h3 className="mt-10 font-display text-h3 font-medium text-ink">Conquistas e títulos nos tatames</h3>
          <p className="mt-3 measure text-[1.05rem] leading-relaxed text-stone">
            Como competidor, Ricardo destacou-se no cenário nacional, com conquistas de peso:
          </p>
          <ul className="mt-5 space-y-3 measure">
            <li className="flex gap-4 text-[1rem] text-stone">
              <span className="mt-3 h-px w-5 shrink-0 bg-seal" aria-hidden />
              <span>
                <strong className="font-medium text-ink">Campeão Brasileiro</strong> — título
                conquistado em 1997.
              </span>
            </li>
            <li className="flex gap-4 text-[1rem] text-stone">
              <span className="mt-3 h-px w-5 shrink-0 bg-seal" aria-hidden />
              <span>
                <strong className="font-medium text-ink">Bicampeão Paulista</strong>
              </span>
            </li>
          </ul>

          {/* Além do tatame */}
          <h3 className="mt-10 font-display text-h3 font-medium text-ink">Além do tatame: liderança e proteção</h3>
          <div className="mt-3 space-y-6 measure text-[1.05rem] leading-relaxed text-stone">
            <p>
              A mesma disciplina rigorosa dos tatames foi o alicerce de uma carreira militar exemplar.
              Hoje Capitão da Polícia Militar do Estado de São Paulo, formou-se na Academia de Polícia
              Militar do Barro Branco, é especialista em Ciências Penais e Mestre em Ciências
              Policiais de Segurança e Ordem Pública pelo Centro de Altos Estudos de Segurança (CAES).
              Na corporação, atuou na segurança institucional, na formação de novos policiais e no
              comando de Companhias da região, entre elas a do 17º BPM/M, em Mogi das Cruzes.
            </p>
            <p>
              No Muramoto Dojo, essa experiência prática se une à sabedoria milenar das artes
              marciais. Treinar sob a tutela do Shihan Ricardo Muramoto é aprender a autodefesa real,
              a disciplina mental e o verdadeiro espírito do guerreiro.
            </p>
          </div>

          {/* Credenciais */}
          <Reveal className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3" delay={100}>
            {credenciais.map((c, i) => (
              <span key={c} className="flex items-center gap-5">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-seal" aria-hidden />}
                <span className="text-sm font-medium tracking-wide text-ink">{c}</span>
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
