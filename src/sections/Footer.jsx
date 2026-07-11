import Container from '../components/Container'
import Logo from '../components/Logo'
import { Instagram, Facebook, Youtube } from '../components/Icons'
import { nav, contact } from '../data/site'

const socials = [
  { href: contact.instagram, label: 'Instagram', Icon: Instagram },
  { href: contact.facebook, label: 'Facebook', Icon: Facebook },
  { href: contact.youtube, label: 'YouTube', Icon: Youtube },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-sumi text-paper">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo tone="dark" />
            <p className="mt-6 max-w-sm text-[0.98rem] leading-relaxed text-paper/60">
              Karate Shidokan tradicional em São Paulo. Tradição, disciplina e respeito no tatame —
              para todas as idades.
            </p>
            <div className="mt-7 flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-paper/15 text-lg text-paper/80 transition-colors duration-300 hover:border-seal-bright hover:bg-seal hover:text-paper"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Rodapé" className="md:col-span-3 md:col-start-7">
            <h2 className="text-label uppercase text-paper/40">Navegar</h2>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="link-quiet text-[0.95rem] text-paper/75 transition-colors hover:text-paper"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h2 className="text-label uppercase text-paper/40">Contato</h2>
            <ul className="mt-5 space-y-3 text-[0.95rem] text-paper/75">
              <li>{contact.addressLine1}</li>
              <li>{contact.addressLine2}</li>
              <li>
                <a href={contact.phoneHref} className="link-quiet transition-colors hover:text-paper">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="link-quiet transition-colors hover:text-paper"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-paper/12 pt-8 text-sm text-paper/45 sm:flex-row sm:items-center">
          <p>
            © {year} {contact.brand}. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-2">
            <span className="font-display text-seal-bright" aria-hidden>
              押忍
            </span>
            Feito com respeito ao caminho.
          </p>
        </div>
      </Container>
    </footer>
  )
}
