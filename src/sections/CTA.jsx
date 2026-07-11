import Container from '../components/Container'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import { Whatsapp, Phone } from '../components/Icons'
import { images, whatsapp, contact } from '../data/site'
import { src, srcSet } from '../utils/image'

export default function CTA() {
  return (
    <section
      aria-label="Agende sua aula experimental"
      className="relative flex min-h-[80vh] items-center overflow-hidden bg-sumi py-28"
    >
      <img
        src={src(images.silhouetteDusk, 1800)}
        srcSet={srcSet(images.silhouetteDusk)}
        sizes="100vw"
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, oklch(0.14 0.008 40 / 0.88) 0%, oklch(0.14 0.01 30 / 0.7) 50%, oklch(0.13 0.008 40 / 0.92) 100%)',
        }}
        aria-hidden
      />

      <Container className="relative z-10 text-center">
        <Reveal className="mx-auto max-w-3xl">
          <span className="font-display text-xl text-seal-bright" aria-hidden>
            一歩
          </span>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[1.05] text-paper">
            O caminho começa com um passo.
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-lead text-paper/75">
            A aula experimental é gratuita e sem compromisso. Traga apenas a vontade de começar —
            do resto, cuidamos nós.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              href={whatsapp()}
              target="_blank"
              rel="noopener"
              variant="seal"
              size="lg"
              icon={<Whatsapp className="text-[1.15em]" />}
            >
              Agende pelo WhatsApp
            </Button>
            <Button
              href={contact.phoneHref}
              variant="outlineLight"
              size="lg"
              icon={<Phone />}
            >
              {contact.phoneDisplay}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
