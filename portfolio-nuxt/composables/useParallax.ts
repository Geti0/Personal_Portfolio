export function useParallax(elementRef: Ref<HTMLElement | null>) {
  const handleScroll = () => {
    const el = elementRef.value
    if (!el) return
    const scrolled = window.scrollY
    if (scrolled < window.innerHeight) {
      el.style.transform = `scale(${1 + scrolled * 0.0001}) translateY(${scrolled * 0.1}px)`
    }
  }

  onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
}
