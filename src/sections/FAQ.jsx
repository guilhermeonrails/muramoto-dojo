import { useState } from 'react'
import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import { Plus } from '../components/Icons'
import { faq, whatsapp } from '../data/site'

export default function FAQ() {
  const [openId, setOpenId] = useState(0)

  return (
    <Section id="faq" tone="paper">
      <div className="grid gap-x-16 gap-y-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionTitle kicker="Dúvidas" title="Antes de começar." />
            <p className="mt-6 measure text-[0.98rem] text-stone">
              Ainda com dúvidas? Fale direto com a gente pelo{' '}
              <a
                href={whatsapp('Olá! Tenho uma dúvida sobre as aulas do Muramoto Dojo.')}
                target="_blank"
                rel="noopener"
                className="link-quiet font-medium text-seal"
              >
                WhatsApp
              </a>
              . Respondemos com prazer.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal as="ul" className="border-t border-mist">
            {faq.map((item, i) => {
              const isOpen = openId === i
              return (
                <li key={item.q} className="border-b border-mist">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span
                        className={`font-display text-lg font-medium transition-colors duration-300 sm:text-xl ${
                          isOpen ? 'text-seal' : 'text-ink'
                        }`}
                      >
                        {item.q}
                      </span>
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border text-lg transition-[transform,color,border-color] duration-500 ease-out-expo ${
                          isOpen
                            ? 'rotate-[135deg] border-seal text-seal'
                            : 'border-ink/20 text-ink'
                        }`}
                        aria-hidden
                      >
                        <Plus />
                      </span>
                    </button>
                  </h3>
                  <div
                    className="grid transition-[grid-template-rows] duration-500 ease-out-expo"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-prose pb-6 pr-12 text-[1rem] leading-relaxed text-stone">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
