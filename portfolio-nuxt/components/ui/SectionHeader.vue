<template>
  <div v-fade-in class="text-center mb-16">
    <p class="text-sm text-terminal-green font-mono uppercase tracking-[3px] font-medium mb-2">
      <span class="text-terminal-cyan">~/</span>{{ subtitle }}
    </p>
    <h2 class="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-text-primary leading-tight">
      {{ title }}
    </h2>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  subtitle: string
  title: string
}>()
</script>
