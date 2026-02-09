<template>
  <div
    v-fade-in
    class="terminal-window transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
           hover:-translate-y-1 hover:shadow-glow hover:border-border-glow"
    :class="[padding]"
  >
    <!-- Terminal header dots -->
    <div v-if="showHeader" class="terminal-header">
      <div class="terminal-dot terminal-dot-red" />
      <div class="terminal-dot terminal-dot-amber" />
      <div class="terminal-dot terminal-dot-green" />
      <span v-if="headerTitle" class="terminal-title">{{ headerTitle }}</span>
    </div>
    <div :class="showHeader ? 'p-6' : ''">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  padding?: string
  showHeader?: boolean
  headerTitle?: string
}>(), {
  padding: '',
  showHeader: false,
  headerTitle: '',
})
</script>
