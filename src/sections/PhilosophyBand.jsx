import Container from '../components/Container'
import Reveal from '../components/Reveal'
import { images } from '../data/site'
import { src, srcSet } from '../utils/image'

export default function PhilosophyBand() {
  return (
    <section
      aria-label="Filosofia do Karatê"
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
          </blockquote>
        </Reveal>
      </Container>
    </section>
  )
}
