<template>
  <footer class="py-10 px-8 bg-dark-deeper/50 border-t border-border-subtle">
    <nav class="flex justify-center mb-6">
      <ul class="flex gap-6 list-none font-mono text-sm">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="text-text-muted hover:text-terminal-green transition-colors duration-300 no-underline"
            @click.prevent="scrollTo(link.href)"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </nav>
    <p class="text-center text-text-muted text-xs font-mono">
      <span class="text-terminal-green">$</span> echo "Copyright &copy; {{ year }} Getuar Kelmendi"
    </p>
  </footer>
</template>

<script setup lang="ts">
defineProps<{
  links: { label: string; href: string }[]
}>()

const year = new Date().getFullYear()

function scrollTo(href: string) {
  const el = document.querySelector(href)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>
