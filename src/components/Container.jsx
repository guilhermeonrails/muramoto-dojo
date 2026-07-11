export default function Container({ className = '', children, as: Tag = 'div' }) {
  return (
    <Tag
      className={`mx-auto w-full max-w-container px-[clamp(1.25rem,5vw,3rem)] ${className}`}
    >
      {children}
    </Tag>
  )
}
