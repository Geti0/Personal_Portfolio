export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('fade-in', {
    getSSRProps() {
      return {
        style: 'opacity:0;transform:translateY(20px)',
      }
    },
    mounted(el: HTMLElement, binding) {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'

      if (binding.value) {
        el.style.transitionDelay = `${binding.value}s`
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.style.opacity = '1'
              el.style.transform = 'translateY(0)'
              observer.unobserve(el)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
      )

      observer.observe(el)
    },
  })
})
