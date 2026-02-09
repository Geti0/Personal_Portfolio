<template>
  <button
    class="bg-terminal-green/10 text-terminal-green font-mono font-semibold text-sm px-8 py-4
           rounded border border-terminal-green/30 cursor-pointer inline-flex items-center gap-3
           relative overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
           shadow-glow-btn hover:-translate-y-[3px] hover:bg-terminal-green/20
           hover:border-terminal-green/50 hover:shadow-glow-strong"
    @click="handleClick"
  >
    <span class="text-terminal-cyan">$</span>
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  href?: string
}>()

function handleClick() {
  if (props.href) {
    const el = document.querySelector(props.href)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>
