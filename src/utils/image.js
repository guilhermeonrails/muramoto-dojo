// Helpers de imagem. Aceita tanto um ID do Unsplash quanto um arquivo local
// importado (ex.: ../assets/sensei.jpg) — nesse caso a URL é usada como está.
const BASE = 'https://images.unsplash.com/photo-'

// IDs do Unsplash são só dígitos e hífens (ex.: "1545058197-64626c80b9b6").
// Qualquer valor com "/", "." ou ":" é uma URL/caminho local — usar direto.
const isRaw = (v) => typeof v === 'string' && /[/.:]/.test(v)

export function src(idOrUrl, w = 1200, { h, ar } = {}) {
  if (isRaw(idOrUrl)) return idOrUrl
  const crop = h ? `&h=${h}` : ''
  const ratio = ar ? `&ar=${ar}` : ''
  return `${BASE}${idOrUrl}?auto=format&fit=crop&w=${w}${crop}${ratio}&q=80`
}

export function srcSet(idOrUrl, widths = [640, 960, 1280, 1800, 2400], opts = {}) {
  // Imagens locais não têm variantes de largura — deixa o navegador usar o src.
  if (isRaw(idOrUrl)) return undefined
  return widths.map((w) => `${src(idOrUrl, w, opts)} ${w}w`).join(', ')
}
