<template>
  <nav
    class="flex lg:hidden justify-between items-center sticky top-0 z-[1000]
           backdrop-blur-[20px] px-6 py-4 transition-all duration-500"
    :class="isScrolled
      ? 'bg-white/95 border-b border-gray-200 shadow-sm'
      : 'bg-dark/80'"
  >
    <!-- Logo -->
    <a href="#profile" class="flex items-center gap-1 no-underline" @click.prevent="navigateAndClose('#profile')">
      <span class="text-lg font-bold transition-colors duration-500" :class="isScrolled ? 'text-gray-900' : 'text-white'">GETUAR</span>
      <span class="text-accent text-lg font-bold">*</span>
    </a>

    <!-- Hamburger -->
    <div class="relative inline-block">
      <button
        class="flex flex-col justify-between h-5 w-[26px] cursor-pointer bg-transparent border-none"
        aria-label="Toggle navigation menu"
        @click="toggleMenu"
      >
        <span
          class="w-full h-[2px] rounded transition-all duration-300 origin-center"
          :class="[
            isOpen ? 'rotate-45 translate-y-[9px]' : '',
            isScrolled ? 'bg-gray-900' : 'bg-white'
          ]"
        />
        <span
          class="w-full h-[2px] rounded transition-all duration-300"
          :class="[
            isOpen ? 'opacity-0' : '',
            isScrolled ? 'bg-gray-900' : 'bg-white'
          ]"
        />
        <span
          class="w-full h-[2px] rounded transition-all duration-300 origin-center"
          :class="[
            isOpen ? '-rotate-45 -translate-y-[9px]' : '',
            isScrolled ? 'bg-gray-900' : 'bg-white'
          ]"
        />
      </button>

      <!-- Dropdown -->
      <div
        class="absolute top-[calc(100%+16px)] right-0 bg-white backdrop-blur-[20px]
               rounded-lg border border-gray-200 w-[220px] overflow-hidden
               shadow-lg transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
        :class="isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'"
      >
        <ul class="list-none p-0 m-0">
          <li v-for="(link, i) in links" :key="link.href">
            <a
              :href="link.href"
              class="block px-6 py-4 text-center text-sm font-medium text-gray-600
                     no-underline transition-all duration-300 hover:text-accent hover:bg-gray-50"
              :class="i < links.length - 1 ? 'border-b border-gray-100' : ''"
              @click.prevent="navigateAndClose(link.href)"
            >{{ link.label }}</a>
          </li>
          <li class="border-t border-gray-100">
            <a
              href="#contact"
              class="block px-6 py-4 text-center text-sm font-medium text-white bg-accent
                     no-underline transition-all duration-300 hover:bg-accent-dark"
              @click.prevent="navigateAndClose('#contact')"
            >Let's Discuss</a>
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

const { isScrolled } = useStickyNav()
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
