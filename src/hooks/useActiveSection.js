import { useEffect, useState } from 'react'

// Destaca no menu a seção atualmente visível.
export function useActiveSection(ids = []) {
  const [active, setActive] = useState('')

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        // A seção mais visível vence.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [ids])

  return active
}
