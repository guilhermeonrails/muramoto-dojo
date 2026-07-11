import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import { images } from '../data/site'
import { src, srcSet } from '../utils/image'

const credenciais = ['7º Dan', 'Título Renshi', '30+ anos de prática', 'Formação em Okinawa']

export default function Sensei() {
  return (
    <Section id="sensei" tone="paper">
      <div className="grid items-center gap-x-16 gap-y-14 lg:grid-cols-12">
        {/* Imagem */}
        <Reveal className="lg:col-span-5">
          <figure className="relative">
            <div className="overflow-hidden">
              <img
                src={src(images.senseiStance, 1000)}
                srcSet={srcSet(images.senseiStance, [560, 840, 1120])}
                sizes="(min-width: 1024px) 38vw, 100vw"
                alt="Sensei Hiroshi Muramoto em posição de kata, concentrado"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <span
              className="absolute -right-4 -top-4 hidden h-16 w-16 place-items-center rounded-full bg-seal font-display text-2xl text-paper sm:grid"
              aria-hidden
            >
              道
            </span>
          </figure>
        </Reveal>

        {/* Texto */}
        <div className="lg:col-span-6 lg:col-start-7">
          <SectionTitle kicker="O Sensei" title="Sensei Hiroshi Muramoto" />
          <p className="mt-3 font-display text-lead text-seal">7º Dan · Renshi</p>

          <div className="mt-7 space-y-6 measure text-[1.05rem] leading-relaxed text-stone">
            <p>
              Praticante desde a infância, o Sensei Hiroshi dedicou mais de três décadas ao Karate
              Shidokan. Formou-se sob a orientação de mestres okinawanos e trouxe ao Brasil o rigor
              e a delicadeza da tradição em que foi criado.
            </p>
            <p>
              À frente do Muramoto Dojo, dedica-se a formar não apenas atletas, mas pessoas: acredita
              que a maior conquista de um mestre não é a própria faixa preta, e sim a de cada aluno
              que ajudou a chegar lá.
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

          <blockquote className="mt-10">
            <span className="block font-display text-5xl leading-[0.5] text-seal/40" aria-hidden>
              “
            </span>
            <p className="mt-3 font-display text-xl italic leading-snug text-ink">
              O cinturão preto não é o fim do caminho. É o dia em que você aprende a andar.
            </p>
          </blockquote>
        </div>
      </div>
    </Section>
  )
}
