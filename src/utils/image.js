// Helpers de imagem responsiva do Unsplash.
const BASE = 'https://images.unsplash.com/photo-'

export function src(id, w = 1200, { h, ar } = {}) {
  const crop = h ? `&h=${h}` : ''
  const ratio = ar ? `&ar=${ar}` : ''
  return `${BASE}${id}?auto=format&fit=crop&w=${w}${crop}${ratio}&q=80`
}

export function srcSet(id, widths = [640, 960, 1280, 1800, 2400], opts = {}) {
  return widths.map((w) => `${src(id, w, opts)} ${w}w`).join(', ')
}
