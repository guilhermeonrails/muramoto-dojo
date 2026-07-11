import { useInView } from '../hooks/useInView'

// Revela o conteúdo ao entrar na viewport. Conteúdo é visível por padrão sem JS
// (o .js no <html> é o que ativa o estado inicial oculto).
export default function Reveal({
  as: Tag = 'div',
  className = '',
  delay = 0,
  children,
  ...rest
}) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
