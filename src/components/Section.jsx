import Container from './Container'

// Wrapper semântico de seção com ritmo vertical e tema claro/escuro.
export default function Section({
  id,
  tone = 'paper', // paper | fog | sumi | graphite
  className = '',
  containerClassName = '',
  bare = false,
  children,
  'aria-label': ariaLabel,
}) {
  const tones = {
    paper: 'bg-paper text-ink',
    fog: 'bg-fog text-ink',
    sumi: 'bg-sumi text-paper',
    graphite: 'bg-graphite text-paper',
  }

  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`relative py-section ${tones[tone]} ${className}`}
    >
      {bare ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  )
}
