# Muramoto Dojo — Site Institucional

Site institucional da academia **Muramoto Dojo**, especializada em **Karate Shidokan**.
Foco em captação de novos alunos, com direção visual minimalista japonesa (*Luz e Sombra*).

Construído com **React + Vite + Tailwind CSS**.

---

## Pré-requisitos

- **Node.js** 18 ou superior (recomendado 20+)
- **npm** 9+ (vem com o Node)

Verifique o que está instalado:

```bash
node -v
npm -v
```

---

## Como subir o projeto

### 1. Instalar as dependências

Na raiz do projeto:

```bash
npm install
```

### 2. Rodar em modo de desenvolvimento

```bash
npm run dev
```

O terminal mostrará o endereço local — normalmente:

```
➜  Local:   http://localhost:5173/
```

Abra esse endereço no navegador. O servidor tem *hot-reload*: ao salvar um arquivo,
a página atualiza sozinha.

Para acessar de outro dispositivo na mesma rede (celular, tablet):

```bash
npm run dev -- --host
```

---

## Build de produção

Gerar os arquivos otimizados para publicação (pasta `dist/`):

```bash
npm run build
```

Pré-visualizar o build de produção localmente:

```bash
npm run preview
```

---

## Scripts disponíveis

| Comando           | O que faz                                             |
| ----------------- | ----------------------------------------------------- |
| `npm run dev`     | Sobe o servidor de desenvolvimento (hot-reload)       |
| `npm run build`   | Gera o build otimizado em `dist/`                     |
| `npm run preview` | Serve o build de produção localmente para conferência |

---

## Estrutura do projeto

```
src/
├── components/     # Componentes reutilizáveis (Button, Container, SectionTitle, Reveal, Logo, ícones…)
├── sections/       # Seções da página (Navbar, Hero, Sobre, Sensei, Modalidades, FAQ, Footer…)
├── hooks/          # Hooks (scroll reveal, seção ativa, navbar no scroll, reduced-motion)
├── data/           # site.js — todo o conteúdo (textos, imagens, horários, FAQ, contato)
├── utils/          # Helpers (URLs de imagem responsiva)
├── App.jsx         # Composição de todas as seções
├── main.jsx        # Ponto de entrada
└── index.css       # Tokens, estilos globais e Tailwind

index.html          # SEO, Open Graph, Schema.org, fontes
tailwind.config.js  # Paleta (OKLCH), tipografia e tokens do design
PRODUCT.md          # Estratégia de produto (skill Impeccable)
DESIGN.md           # Sistema visual (skill Impeccable)
```

---

## Personalização rápida

- **Textos, horários, FAQ, depoimentos:** [`src/data/site.js`](src/data/site.js)
- **Contato (WhatsApp, endereço, e-mail, redes):** objeto `contact` em [`src/data/site.js`](src/data/site.js)
- **Cores e tipografia:** [`tailwind.config.js`](tailwind.config.js)
- **SEO / metadados / mapa:** [`index.html`](index.html)

> As imagens são placeholders (Unsplash) e os dados de contato são fictícios.
> Substitua pelo material oficial do dojo antes de publicar.

---

## Publicação

O build (`dist/`) é estático e pode ser hospedado em qualquer serviço de sites estáticos
(Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.). Basta apontar o serviço para o
comando `npm run build` e a pasta de saída `dist`.
