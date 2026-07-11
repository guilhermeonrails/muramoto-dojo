const variants = {
  // Sólido escuro sobre fundo claro
  solid:
    'bg-ink text-paper hover:bg-seal',
  // Selo vermelho — usado para o CTA de WhatsApp
  seal: 'bg-seal text-paper hover:bg-seal-bright',
  // Contorno sobre claro
  outline:
    'border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper',
  // Contorno sobre escuro
  outlineLight:
    'border border-paper/30 text-paper hover:border-paper hover:bg-paper hover:text-ink',
  // Texto puro
  ghost: 'text-ink hover:text-seal',
}

export default function Button({
  as,
  href,
  variant = 'solid',
  size = 'md',
  icon,
  className = '',
  children,
  ...rest
}) {
  const Tag = as || (href ? 'a' : 'button')
  const sizes = {
    sm: 'px-4 py-2 text-[0.82rem]',
    md: 'px-6 py-3 text-[0.9rem]',
    lg: 'px-8 py-4 text-[0.95rem]',
  }

  return (
    <Tag
      href={href}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full font-medium tracking-wide transition-[background-color,border-color,color,transform] duration-500 ease-out-expo active:scale-[0.98] ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
      {icon && (
        <span className="transition-transform duration-500 ease-out-expo group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </Tag>
  )
}
