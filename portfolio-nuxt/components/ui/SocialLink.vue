<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="label"
    class="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full
           transition-all duration-300 hover:border-accent hover:bg-accent/5"
  >
    <img :src="useAsset(icon)" :alt="label" class="h-4 opacity-60 hover:opacity-100 transition-opacity">
  </a>
</template>

<script setup lang="ts">
defineProps<{
  href: string
  icon: string
  label: string
}>()
</script>
