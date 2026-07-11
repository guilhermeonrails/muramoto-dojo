# Design

Muramoto Dojo — sistema visual. Registro: **brand**. Plataforma: **web**.
Direção: **Luz e Sombra** — base clara e espaçada (Ma, 間), pontuada por momentos escuros e cinematográficos (hero, citação, chamada final). Arte-direção por seção; consistência de voz acima de consistência de tratamento.

## Theme

Minimalismo japonês aplicado a um dojo tradicional. Muito espaço negativo, linhas discretas, quase nenhuma sombra difusa, um único gesto de cor (vermelho-selo). Fotografia carrega a força; a tipografia carrega a tradição. Nada de ornamento "japonês" clichê (sakura, dourado, caligrafia decorativa vazia).

## Color (OKLCH)

Estratégia: **monocromático comprometido** — tinta/papel/grafite dominam; o vermelho escuro é o selo (hanko), usado com parcimônia.

| Token | OKLCH | Uso |
|---|---|---|
| `paper` | `oklch(0.985 0.002 80)` | fundo claro principal (off-white neutro, sem "creme") |
| `fog` | `oklch(0.955 0.003 70)` | superfície clara alternada |
| `mist` | `oklch(0.90 0.004 60)` | bordas, divisores 1px |
| `stone` | `oklch(0.46 0.006 45)` | texto secundário sobre claro (≥4.5:1) |
| `ink` | `oklch(0.21 0.008 45)` | texto principal, quase-preto quente |
| `graphite` | `oklch(0.26 0.008 40)` | superfície escura (cards/bands) |
| `sumi` | `oklch(0.15 0.006 40)` | fundo escuro mais profundo (hero, CTA) |
| `seal` | `oklch(0.47 0.15 27)` | **acento único** — vermelho escuro (朱), selo/linhas/hover |
| `seal-bright` | `oklch(0.56 0.17 28)` | acento sobre fundo escuro |
| `wood` | `oklch(0.62 0.055 60)` | calor discreto, só em detalhes/imagem |

Contraste verificado: `ink`/`paper` ~15:1; `stone`/`paper` ~6:1; texto branco sobre `sumi` ~17:1. Verificação final no navegador.

## Typography

Escolha anti-reflexo, autenticamente japonesa (fora da lista de fontes banidas da skill):

- **Display — Zen Old Mincho** (明朝, serifada pincelada). Títulos, hero, números de timeline. Pesos 400/600/700/900; hero em peso alto para transmitir força. `letter-spacing` ≥ -0.01em (mincho não precisa de tracking negativo agressivo). `text-wrap: balance` em h1–h3.
- **Corpo/UI — Zen Kaku Gothic New** (ゴシック humanista). Corpo, navegação, botões, labels. Excelente legibilidade. `text-wrap: pretty` em prosa longa.
- Eixo de contraste serif × sans (mesma origem de design → harmonia). Duas famílias, pareadas por contraste, não por semelhança.

Escala modular fluida (`clamp()`, razão ≥1.25):
- Display/H1: `clamp(2.75rem, 5.5vw, 5rem)` (teto ≤ 6rem)
- H2: `clamp(2rem, 4vw, 3.25rem)`
- H3: `clamp(1.3rem, 2.2vw, 1.7rem)`
- Corpo: `1.0625rem`–`1.125rem`, line-height 1.75 (medida ≤ 68ch)
- Label: `0.8125rem`, tracking +0.14em (usado com parcimônia, não como eyebrow em toda seção)

Texto claro sobre escuro: +0.05–0.1 no line-height.

## Layout

- Container central `max-w-[76rem]` com padding fluido `clamp(1.25rem, 5vw, 3rem)`.
- Espaçamento vertical variado para ritmo (nem toda seção com o mesmo respiro). Seções: `clamp(5rem, 12vh, 9rem)` de padding vertical.
- Grid só onde é 2D (galeria, modalidades, benefícios); flex/`flex-wrap` para o resto. Grids responsivos com `repeat(auto-fit, minmax(…, 1fr))` quando cabe.
- Composições assimétricas em Sobre/Sensei (texto + imagem 5/7). Alinhamento óptico deliberado.
- z-index semântico: dropdown < sticky(nav) < overlay < modal < toast.

## Components

Reutilizáveis: `Container`, `SectionTitle` (kicker opcional + título + traço-selo), `Button` (variants: solid/ink, outline, ghost, whatsapp), `Reveal` (scroll reveal acessível), `Divider`, `Badge`, `Seal` (selo hanko decorativo em SVG), `Card` só onde é a melhor afordância (modalidades, instrutores, depoimentos — nunca card aninhado). Ícones: set inline SVG próprio, coeso, traço 1.5.

## Motion

- Discreta e intencional. `ease-out-expo` `cubic-bezier(0.16, 1, 0.3, 1)`, durações 400–700ms. Sem bounce/elastic.
- Reveal on-scroll via IntersectionObserver, com stagger só dentro de listas. Conteúdo é visível por padrão; o reveal apenas realça (nunca esconde conteúdo atrás de classe).
- Hero: entrada orquestrada única (imagem → título → subtítulo → CTAs). Galeria: zoom sutil + legenda no hover. Navbar: transição de transparente→sólida no scroll.
- `@media (prefers-reduced-motion: reduce)`: crossfade/instantâneo, sem translate.

## Imagery

Fotografia real (Unsplash, URLs verificadas). Hero e bandas escuras em preto/dramático; retratos de instrutores em grayscale para coesão (cor sutil no hover). Alt descritivo em pt-BR como parte da voz. Nunca blocos de cor no lugar de foto.
