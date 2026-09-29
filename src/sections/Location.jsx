import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import { MapPin, Clock, Phone, Mail, Whatsapp } from '../components/Icons'
import { contact, whatsapp } from '../data/site'

const mapQuery = encodeURIComponent(contact.mapQuery)
const mapSrc = `https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed`

export default function Location() {
  return (
    <Section id="contato" tone="paper">
      <div className="grid gap-x-16 gap-y-12 lg:grid-cols-12">
        {/* Info */}
        <div className="lg:col-span-5">
          <SectionTitle kicker="Localização e contato" title="Venha nos visitar." />
          <p className="mt-6 measure text-[1.02rem] leading-relaxed text-stone">
            Estamos localizados no bairro César de Souza, em Mogi das Cruzes.
          </p>

          <Reveal className="mt-10 space-y-8" delay={80}>
            <div className="flex gap-4">
              <MapPin className="mt-0.5 text-xl text-seal" />
              <div>
                <p className="font-medium text-ink">{contact.addressLine1}</p>
                <p className="text-stone">{contact.addressLine2}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="mt-0.5 text-xl text-seal" />
              <div>
                <p className="text-stone">{contact.hours}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={contact.phoneHref}
                className="link-quiet inline-flex w-fit items-center gap-3 text-ink"
              >
                <Phone className="text-xl text-seal" />
                {contact.phoneDisplay}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="link-quiet inline-flex w-fit items-center gap-3 text-ink"
              >
                <Mail className="text-xl text-seal" />
                {contact.email}
              </a>
            </div>

            <Button
              href={whatsapp()}
              target="_blank"
              rel="noopener"
              variant="seal"
              size="lg"
              icon={<Whatsapp className="text-[1.15em]" />}
            >
              Fale conosco no WhatsApp
            </Button>
          </Reveal>
        </div>

        {/* Mapa */}
        <Reveal className="lg:col-span-6 lg:col-start-7" delay={120}>
          <div className="overflow-hidden bg-fog">
            <iframe
              title={`Mapa — ${contact.brand}, ${contact.addressLine1}`}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-[4/3] w-full grayscale-[0.25] lg:aspect-auto lg:h-full lg:min-h-[26rem]"
              style={{ border: 0 }}
            />
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
