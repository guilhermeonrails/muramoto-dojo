import { useEffect, useState } from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import { Whatsapp, ArrowRight } from '../components/Icons'
import { images, whatsapp } from '../data/site'
import { src, srcSet } from '../utils/image'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export default function Hero() {
  const reduced = usePrefersReducedMotion()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(t)
  }, [])

  // Entrada orquestrada — desativada sob prefers-reduced-motion.
  const rise = (delay) =>
    reduced
      ? undefined
      : {
          opacity: ready ? 1 : 0,
          transform: ready ? 'none' : 'translateY(26px)',
          transition: `opacity .9s ${delay}ms var(--ease-expo), transform .9s ${delay}ms var(--ease-expo)`,
        }

  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden bg-sumi">
      {/* Imagem de fundo */}
      <img
        src={src(images.heroBelt, 1800)}
        srcSet={srcSet(images.heroBelt)}
        sizes="100vw"
        alt="Mãos amarrando a faixa preta antes do treino, envoltas em vapor"
        fetchpriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center"
        style={
          reduced
            ? undefined
            : {
                transform: ready ? 'scale(1)' : 'scale(1.08)',
                transition: 'transform 1.8s var(--ease-expo)',
              }
        }
      />
      {/* Overlay escuro em camadas para legibilidade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, oklch(0.15 0.006 40 / 0.62) 0%, oklch(0.15 0.006 40 / 0.32) 34%, oklch(0.15 0.006 40 / 0.55) 72%, oklch(0.13 0.006 40 / 0.9) 100%)',
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 20% 100%, oklch(0.13 0.01 30 / 0.7) 0%, transparent 55%)',
        }}
        aria-hidden
      />

      {/* Rótulo vertical japonês */}
      <span
        className="pointer-events-none absolute right-[clamp(1rem,4vw,2.5rem)] top-1/2 hidden -translate-y-1/2 font-display text-sm tracking-[0.3em] text-paper/40 md:block"
        aria-hidden
        style={{ writingMode: 'vertical-rl' }}
      >
        空手道 · 士道館
      </span>

      <Container className="relative z-10 pb-[clamp(3.5rem,9vh,6rem)] pt-[calc(var(--nav-h)+2rem)]">
        <div className="max-w-3xl">
          <span
            className="kicker mb-6 flex w-fit items-center gap-3 bg-seal px-3 py-1.5 !text-white"
            style={rise(120)}
          >
            <span className="inline-block h-px w-8 bg-white" aria-hidden />
            Karatê Shidokan · Mogi das Cruzes
          </span>

          <h1 className="font-display text-display font-semibold text-paper">
            <span className="block" style={rise(240)}>
              Mais que um esporte.
            </span>
            <span className="block text-paper/85" style={rise(400)}>
              Uma filosofia de vida.
            </span>
          </h1>

          <p
            className="mt-8 max-w-xl text-lead text-white [text-shadow:0_1px_12px_oklch(0.15_0.006_40/0.55)]"
            style={rise(560)}
          >
            O Karatê Shidokan é uma arte marcial tradicional japonesa, com foco no desenvolvimento
            físico e mental. No Muramoto Dojo, você treina em pequenos grupos ou em aulas
            particulares, com instrutores dedicados a ensinar com paciência e rigor, seguindo a
            linhagem do Shidokan.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4" style={rise(720)}>
            <Button
              href={whatsapp()}
              target="_blank"
              rel="noopener"
              variant="seal"
              size="lg"
              icon={<Whatsapp className="text-[1.15em]" />}
            >
              Agende uma aula experimental
            </Button>
            <Button href="#sobre" variant="outlineLight" size="lg" icon={<ArrowRight />}>
              Conheça o Dojo
            </Button>
          </div>
        </div>
      </Container>

      {/* Indicador de scroll */}
      <a
        href="#sobre"
        aria-label="Rolar para conhecer o dojo"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-paper/55 transition-colors hover:text-paper md:flex"
        style={rise(900)}
      >
        <span className="text-[0.7rem] uppercase tracking-[0.24em]">Descer</span>
        <span className="relative flex h-10 w-[1px] justify-center overflow-hidden bg-paper/25">
          <span className="scroll-cue absolute top-0 h-4 w-full bg-paper" />
        </span>
      </a>
    </section>
  )
}
