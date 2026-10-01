import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import { instrutores } from '../data/site'
import { src, srcSet } from '../utils/image'

export default function Instructors() {
  return (
    <Section id="instrutores" tone="fog">
      <SectionTitle
        kicker="Quem ensina"
        title="Mestres e sempais."
        intro="Uma equipe formada dentro do próprio dojo, unida pela mesma linhagem e pelo compromisso de ensinar com paciência e rigor."
      />

      <div className="mt-14 grid gap-10 sm:grid-cols-2 sm:gap-x-12 lg:max-w-4xl lg:gap-x-20">
        {instrutores.map((p, i) => (
          <Reveal as="article" key={p.name} delay={i * 90} className="group">
            <a
              href={p.href}
              aria-label={`Conheça a trajetória de ${p.name}`}
              className="relative block overflow-hidden"
            >
              <img
                src={src(p.image, 800)}
                srcSet={srcSet(p.image, [400, 600, 800])}
                sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 100vw"
                alt={p.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[3/4] w-full object-cover grayscale transition-[filter,transform] duration-[900ms] ease-out-expo group-hover:scale-[1.03] group-hover:grayscale-0"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 55%, oklch(0.15 0.006 40 / 0.72) 100%)',
                }}
                aria-hidden
              />
              <span className="absolute bottom-4 left-4 text-sm font-medium tracking-wide text-paper/90">
                {p.role}
              </span>
            </a>
            <div className="mt-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-h3 font-medium text-ink">{p.name}</h3>
              </div>
              <p className="mt-1 text-sm font-medium tracking-wide text-seal">{p.rank}</p>
              <p className="mt-3 flex items-center gap-3 text-[0.95rem] text-stone">
                <span className="h-px w-5 bg-mist" aria-hidden />
                {p.specialty}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
