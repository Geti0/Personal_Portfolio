<template>
  <span
    class="inline-block px-3 py-1.5 rounded text-xs font-mono font-medium
           transition-all duration-300 cursor-default hover:-translate-y-0.5"
    :class="colorClass"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'green' | 'cyan' | 'amber'
}>(), {
  variant: 'green',
})

const colorClass = computed(() => {
  const map = {
    green: 'bg-terminal-green/5 border border-terminal-green/20 text-terminal-green hover:bg-terminal-green/10 hover:border-terminal-green/40',
    cyan: 'bg-terminal-cyan/5 border border-terminal-cyan/20 text-terminal-cyan hover:bg-terminal-cyan/10 hover:border-terminal-cyan/40',
    amber: 'bg-terminal-amber/5 border border-terminal-amber/20 text-terminal-amber hover:bg-terminal-amber/10 hover:border-terminal-amber/40',
  }
  return map[props.variant]
})
</script>
