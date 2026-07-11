import Container from '../components/Container'
import Reveal from '../components/Reveal'
import { images } from '../data/site'
import { src, srcSet } from '../utils/image'

export default function PhilosophyBand() {
  return (
    <section
      aria-label="Filosofia do Karate"
      className="relative flex min-h-[68vh] items-center overflow-hidden bg-sumi py-24"
    >
      <img
        src={src(images.glowBelt, 1800)}
        srcSet={srcSet(images.glowBelt)}
        sizes="100vw"
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, oklch(0.13 0.006 40 / 0.94) 0%, oklch(0.14 0.008 35 / 0.7) 55%, oklch(0.14 0.01 30 / 0.55) 100%)',
        }}
        aria-hidden
      />

      <Container className="relative z-10">
        <Reveal className="max-w-3xl">
          <span className="font-display text-xl text-seal-bright" aria-hidden>
            空手に先手なし
          </span>
          <blockquote className="mt-6">
            <p className="font-display text-[clamp(1.9rem,4.2vw,3.4rem)] font-medium leading-[1.15] text-paper">
              “No Karatê, não existe primeiro ataque.”
            </p>
            <footer className="mt-8 flex items-center gap-4 text-paper/60">
              <span className="h-px w-10 bg-seal-bright" aria-hidden />
              <span className="text-sm tracking-wide">
                Um dos princípios fundadores do Karate-Dō
              </span>
            </footer>
          </blockquote>
          <p className="mt-10 max-w-xl text-[1.05rem] leading-relaxed text-paper/70">
            A força que se treina aqui não serve para atacar — serve para não precisar. Antes da
            técnica, ensina-se o domínio de si.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
