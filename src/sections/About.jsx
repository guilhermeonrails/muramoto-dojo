import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import { images } from '../data/site'
import { src, srcSet } from '../utils/image'

const valores = [
  { kanji: '礼', label: 'Respeito' },
  { kanji: '忍', label: 'Perseverança' },
  { kanji: '誠', label: 'Sinceridade' },
  { kanji: '道', label: 'Caminho' },
]

export default function About() {
  return (
    <Section id="sobre" tone="paper">
      <div className="grid items-center gap-x-16 gap-y-14 lg:grid-cols-12">
        {/* Texto */}
        <div className="lg:col-span-6">
          <SectionTitle
            kicker="O Dojo"
            title="Um lugar para começar o caminho."
          />
          <div className="mt-8 space-y-6 measure text-[1.075rem] leading-relaxed text-stone">
            <p>
              O <strong className="font-medium text-ink">Muramoto Dojo</strong> nasceu do desejo
              de ensinar o Karate como ele foi concebido: uma prática de aperfeiçoamento do corpo
              e do caráter. Aqui, a faixa que se conquista importa menos do que a pessoa que se
              torna ao longo do caminho.
            </p>
            <p>
              Nossa missão é formar praticantes íntegros — disciplinados no tatame e serenos fora
              dele. Recebemos do iniciante absoluto ao atleta de competição com o mesmo cuidado: o
              respeito pela tradição okinawana e a atenção ao ritmo de cada aluno.
            </p>
          </div>

          {/* Valores */}
          <Reveal className="mt-12 grid grid-cols-2 gap-x-8 gap-y-7 sm:grid-cols-4">
            {valores.map((v) => (
              <div key={v.label} className="flex flex-col gap-2">
                <span className="font-display text-3xl text-seal" aria-hidden>
                  {v.kanji}
                </span>
                <span className="text-sm font-medium tracking-wide text-ink">{v.label}</span>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Imagem */}
        <Reveal className="lg:col-span-6 lg:col-start-7" delay={120}>
          <figure className="relative">
            <div className="relative overflow-hidden">
              <img
                src={src(images.meditation, 1200)}
                srcSet={srcSet(images.meditation, [640, 960, 1280, 1600])}
                sizes="(min-width: 1024px) 44vw, 100vw"
                alt="Alunos ajoelhados em mokuso, o instante de silêncio que abre cada treino"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            {/* Selo/caption deslocado */}
            <figcaption className="absolute -bottom-5 left-5 flex items-center gap-3 bg-ink px-5 py-3 text-paper sm:-left-6">
              <span className="font-display text-xl text-seal-bright" aria-hidden>
                黙想
              </span>
              <span className="text-sm leading-tight">
                Mokusō — o silêncio<br />antes do primeiro golpe
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </Section>
  )
}
