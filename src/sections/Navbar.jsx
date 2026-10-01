import { useEffect, useState } from 'react'
import Container from '../components/Container'
import Logo from '../components/Logo'
import Button from '../components/Button'
import { Whatsapp, Menu, Close } from '../components/Icons'
import { nav, whatsapp } from '../data/site'
import { useScrolled } from '../hooks/useScrolled'
import { useActiveSection } from '../hooks/useActiveSection'

const sectionIds = nav.map((n) => n.id)

export default function Navbar() {
  const scrolled = useScrolled(28)
  const active = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-nav border-b border-mist bg-paper transition-shadow duration-500 ease-out-expo ${
        scrolled ? 'shadow-[0_6px_24px_-16px_rgba(0,0,0,0.35)]' : ''
      }`}
    >
      <Container className="flex h-[var(--nav-h)] items-center justify-between">
        <a href="#top" aria-label="Muramoto Dojo — início" className="shrink-0">
          <Logo tone="light" />
        </a>

        {/* Navegação desktop */}
        <nav aria-label="Navegação principal" className="hidden items-center gap-5 whitespace-nowrap lg:flex xl:gap-8">
          {nav.map((item) => {
            const isActive = active === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'true' : undefined}
                className={`link-quiet text-[0.86rem] font-medium transition-colors duration-300 ${
                  isActive ? 'text-seal' : 'text-ink/70 hover:text-ink'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            href={whatsapp()}
            target="_blank"
            rel="noopener"
            variant="seal"
            size="sm"
            className="hidden sm:inline-flex"
            icon={<Whatsapp className="text-[1.05em]" />}
          >
            Aula experimental
          </Button>

          {/* Toggle mobile */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full text-2xl text-ink transition-colors hover:bg-ink/5 lg:hidden"
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </Container>

      {/* Overlay mobile */}
      <div
        className={`fixed inset-0 top-0 z-overlay flex flex-col bg-sumi text-paper transition-[opacity,visibility] duration-500 ease-out-expo lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <Container className="flex h-[var(--nav-h)] items-center justify-between">
          <Logo tone="dark" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
            className="grid h-10 w-10 place-items-center rounded-full text-2xl text-paper hover:bg-paper/10"
          >
            <Close />
          </button>
        </Container>

        <Container className="flex flex-1 flex-col justify-center gap-1 pb-16">
          {nav.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="border-b border-paper/10 py-4 font-display text-3xl font-medium text-paper/90 transition-[color,transform] duration-500 ease-out-expo hover:translate-x-2 hover:text-seal-bright"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? 'none' : 'translateY(12px)',
                transition: `opacity .5s ${i * 60 + 100}ms var(--ease-expo), transform .5s ${i * 60 + 100}ms var(--ease-expo), color .3s`,
              }}
            >
              <span className="mr-4 font-sans text-sm text-seal-bright">
                {String(i + 1).padStart(2, '0')}
              </span>
              {item.label}
            </a>
          ))}
          <Button
            href={whatsapp()}
            target="_blank"
            rel="noopener"
            variant="seal"
            size="lg"
            className="mt-10 self-start"
            icon={<Whatsapp className="text-[1.1em]" />}
          >
            Agende uma aula experimental
          </Button>
        </Container>
      </div>
    </header>
  )
}
