<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="label"
    class="w-[50px] h-[50px] flex items-center justify-center bg-dark-card border border-border-subtle
           rounded transition-all duration-300
           hover:-translate-y-1.5 hover:scale-110 hover:shadow-glow
           hover:bg-terminal-green/10 hover:border-terminal-green/30"
  >
    <img :src="icon" :alt="label" class="h-5 brightness-0 invert opacity-70 hover:opacity-100 transition-opacity">
  </a>
</template>

<script setup lang="ts">
defineProps<{
  href: string
  icon: string
  label: string
}>()
</script>
