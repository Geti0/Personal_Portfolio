<template>
  <nav
    class="hidden lg:flex justify-between items-center h-16 sticky top-0 z-[1000] px-8 lg:px-16
           backdrop-blur-[20px] transition-all duration-300"
    :class="isScrolled ? 'bg-white/95 shadow-md border-b border-gray-100' : 'bg-transparent'"
  >
    <!-- Logo -->
    <a
      href="#profile"
      class="flex items-center gap-1 cursor-pointer no-underline"
      @click.prevent="scrollTo('#profile')"
    >
      <span class="text-xl font-bold" :class="isScrolled ? 'text-gray-900' : 'text-white'">GETUAR</span>
      <span class="text-accent text-xl font-bold">*</span>
    </a>

    <!-- Nav links -->
    <ul class="flex gap-1 list-none text-sm font-medium">
      <li v-for="link in links" :key="link.href">
        <a
          :href="link.href"
          class="px-4 py-2 rounded-full transition-all duration-300 no-underline block"
          :class="isScrolled
            ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            : 'text-gray-300 hover:text-white hover:bg-white/10'"
          @click.prevent="scrollTo(link.href)"
        >
          {{ link.label }}
        </a>
      </li>
    </ul>

    <!-- CTA button -->
    <a
      href="#contact"
      class="btn-primary"
      @click.prevent="scrollTo('#contact')"
    >
      Let's Discuss
    </a>
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
