import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import { images } from '../data/site'
import { src, srcSet } from '../utils/image'

const credenciais = ['Faixa Preta 3º Dan', 'Pentacampeã Paulista', 'Campeã Brasileira (Absoluto)']

export default function Sensei() {
  return (
    <Section id="sensei-natalia" tone="paper">
      <div className="grid items-start gap-x-16 gap-y-14 lg:grid-cols-12">
        {/* Imagem */}
        <Reveal className="lg:sticky lg:top-28 lg:col-span-5">
          <figure className="relative">
            <div className="overflow-hidden">
              <img
                src={src(images.sensei2, 1000)}
                srcSet={srcSet(images.sensei2, [560, 840, 1120])}
                sizes="(min-width: 1024px) 38vw, 100vw"
                alt="Sensei Natália Salaroli, instrutora do Muramoto Dojo"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <span
              className="absolute -right-4 -top-4 hidden h-16 w-16 place-items-center rounded-full bg-seal font-display text-2xl text-paper sm:grid"
              aria-hidden
            >
              道
            </span>
          </figure>
        </Reveal>

        {/* Texto */}
        <div className="lg:col-span-6 lg:col-start-7">
          <SectionTitle kicker="Corpo técnico · Conheça nossa instrutora" title="Sensei Natália Salaroli" />
          <p className="mt-3 font-display text-lead text-seal">Faixa Preta 3º Dan</p>

          <div className="mt-7 space-y-6 measure text-[1.05rem] leading-relaxed text-stone">
            <p>
              A trajetória da Sensei Natália Salaroli confunde-se com a própria história do Muramoto
              Dojo. Ela iniciou seus treinos em 1996, aos 13 anos de idade. Demonstrando uma evolução
              técnica fora do comum e um talento nato, quebrou barreiras precocemente dentro da arte
              marcial.
            </p>
            <p>
              Seu desempenho como prodígio foi tão marcante que, superando as tradicionais regras de
              interstício (tempo mínimo de espera entre graduações), ela foi promovida à faixa marrom
              em 1998, com apenas 15 anos de idade. O reconhecimento veio diretamente das mãos do
              lendário Shihan Moriyama — a autoridade máxima responsável por introduzir o Karatê
              Shidokan em território nacional.
            </p>
          </div>

          {/* Conquistas */}
          <h3 className="mt-10 font-display text-h3 font-medium text-ink">Conquistas e títulos nos tatames</h3>
          <p className="mt-3 measure text-[1.05rem] leading-relaxed text-stone">
            Como atleta de alto rendimento, Natália marcou época em competições oficiais de combate,
            acumulando títulos expressivos:
          </p>
          <ul className="mt-5 space-y-3 measure">
            <li className="flex gap-4 text-[1rem] text-stone">
              <span className="mt-3 h-px w-5 shrink-0 bg-seal" aria-hidden />
              <span>
                <strong className="font-medium text-ink">Pentacampeã Paulista de Karatê</strong>
              </span>
            </li>
            <li className="flex gap-4 text-[1rem] text-stone">
              <span className="mt-3 h-px w-5 shrink-0 bg-seal" aria-hidden />
              <span>
                <strong className="font-medium text-ink">Campeã Brasileira na categoria Absoluto</strong>{' '}
                — conquista máxima das artes marciais, disputada sem qualquer divisão por peso, idade
                ou faixa.
              </span>
            </li>
          </ul>

          {/* Além do tatame */}
          <h3 className="mt-10 font-display text-h3 font-medium text-ink">Além do tatame: formação e propósito</h3>
          <div className="mt-3 space-y-6 measure text-[1.05rem] leading-relaxed text-stone">
            <p>
            Aliando a disciplina marcial ao aprimoramento intelectual, Natália construiu uma sólida trajetória no meio jurídico. Atualmente, atua como advogada e possui experiência como professora universitária, tendo lecionado nas áreas de Segurança Pública, Direito do Consumidor e Tributário, Direito Administrativo, Civil e Constitucional, além de Direito Penal e Processual Penal. Essa trajetória reúne disciplina, conhecimento técnico e experiência acadêmica, consolidando sua atuação no campo jurídico.
            </p>
            <p>
              Toda essa experiência em didática, liderança e pedagogia é aplicada diretamente em suas
              aulas no Muramoto Dojo. Como instrutora e Faixa Preta 3º Dan, ela une a seriedade do
              treinamento técnico ao acolhimento humanizado, servindo de inspiração para crianças,
              jovens e adultos que buscam fortalecer o corpo, a mente e a autoconfiança.
            </p>
          </div>

          {/* Credenciais */}
          <Reveal className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3" delay={100}>
            {credenciais.map((c, i) => (
              <span key={c} className="flex items-center gap-5">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-seal" aria-hidden />}
                <span className="text-sm font-medium tracking-wide text-ink">{c}</span>
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
