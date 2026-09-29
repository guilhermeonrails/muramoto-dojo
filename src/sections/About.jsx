import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import { images, diferenciais } from '../data/site'
import { src, srcSet } from '../utils/image'

export default function About() {
  return (
    <Section id="sobre" tone="paper">
      <div className="grid items-center gap-x-16 gap-y-14 lg:grid-cols-12">
        {/* Texto */}
        <div className="lg:col-span-6">
          <SectionTitle
            kicker="Nosso diferencial"
            title="Atendimento exclusivo e humanizado."
          />
          <p className="mt-8 measure text-[1.075rem] leading-relaxed text-stone">
            Não somos uma academia de massa. Acreditamos que a verdadeira evolução técnica e
            pessoal acontece com atenção aos detalhes. Por isso, focamos em:
          </p>

          {/* Diferenciais */}
          <Reveal as="ul" className="mt-10 space-y-7 measure">
            {diferenciais.map((d) => (
              <li key={d.title} className="flex gap-4">
                <span className="mt-3 h-px w-6 shrink-0 bg-seal" aria-hidden />
                <div>
                  <h3 className="font-display text-lg font-medium text-ink">{d.title}</h3>
                  <p className="mt-1.5 text-[0.98rem] leading-relaxed text-stone">{d.text}</p>
                </div>
              </li>
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
