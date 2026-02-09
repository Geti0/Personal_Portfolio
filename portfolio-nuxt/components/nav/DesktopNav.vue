<template>
  <nav
    class="hidden lg:flex justify-between items-center h-14 sticky top-0 z-[1000] px-8
           bg-dark-card/90 backdrop-blur-[20px] border-b border-border-subtle
           shadow-[0_2px_20px_rgba(0,0,0,0.3)] transition-all duration-300"
    :class="{ 'bg-dark-card/95 shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-border-glow': isScrolled }"
  >
    <div class="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity duration-300">
      <span class="text-terminal-green font-mono text-sm">~$</span>
      <span class="text-lg font-bold text-text-primary">getuar</span>
      <span class="text-terminal-green animate-blink font-mono">_</span>
    </div>
    <ul class="flex gap-1 list-none text-sm font-mono">
      <li v-for="link in links" :key="link.href" class="relative">
        <a
          :href="link.href"
          class="px-4 py-2 rounded text-text-secondary hover:text-terminal-green hover:bg-terminal-green/5
                 transition-all duration-300 no-underline block"
          @click.prevent="scrollTo(link.href)"
        >
          {{ link.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  links: { label: string; href: string }[]
}>()

const { isScrolled } = useStickyNav()

function scrollTo(href: string) {
  const el = document.querySelector(href)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>
