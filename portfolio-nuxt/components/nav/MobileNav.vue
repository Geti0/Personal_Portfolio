<template>
  <nav
    class="flex lg:hidden justify-between items-center sticky top-0 z-[1000]
           bg-dark-card/95 backdrop-blur-[20px] border-b border-border-subtle
           shadow-[0_2px_20px_rgba(0,0,0,0.3)] px-6 py-4"
  >
    <div class="flex items-center gap-2 cursor-pointer">
      <span class="text-terminal-green font-mono text-sm">~$</span>
      <span class="text-lg font-bold text-text-primary">getuar</span>
      <span class="text-terminal-green animate-blink font-mono">_</span>
    </div>
    <div class="relative inline-block">
      <button
        class="flex flex-col justify-between h-5 w-[26px] cursor-pointer bg-transparent border-none"
        aria-label="Toggle navigation menu"
        @click="toggleMenu"
      >
        <span
          class="w-full h-[2px] bg-terminal-green rounded transition-all duration-300 origin-center"
          :class="isOpen ? 'rotate-45 translate-y-[9px]' : ''"
        />
        <span
          class="w-full h-[2px] bg-terminal-green rounded transition-all duration-300"
          :class="isOpen ? 'opacity-0' : ''"
        />
        <span
          class="w-full h-[2px] bg-terminal-green rounded transition-all duration-300 origin-center"
          :class="isOpen ? '-rotate-45 -translate-y-[9px]' : ''"
        />
      </button>
      <div
        class="absolute top-[calc(100%+16px)] right-0 bg-dark-card/[0.98] backdrop-blur-[20px]
               rounded-lg border border-border-subtle w-[200px] overflow-hidden
               shadow-terminal transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
        :class="isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'"
      >
        <ul class="list-none p-0 m-0">
          <li v-for="(link, i) in links" :key="link.href">
            <a
              :href="link.href"
              class="block px-6 py-4 text-center text-sm font-mono text-text-secondary
                     no-underline transition-all duration-300 hover:text-terminal-green
                     hover:bg-terminal-green/5"
              :class="i < links.length - 1 ? 'border-b border-border-subtle' : ''"
              @click.prevent="navigateAndClose(link.href)"
            >{{ link.label }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  links: { label: string; href: string }[]
}>()

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function navigateAndClose(href: string) {
  isOpen.value = false
  const el = document.querySelector(href)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>
