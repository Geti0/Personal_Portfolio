export function useStickyNav(threshold = 100) {
  const isScrolled = ref(false)

  const handleScroll = () => {
    isScrolled.value = window.scrollY > threshold
  }

  onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))

  return { isScrolled }
}
