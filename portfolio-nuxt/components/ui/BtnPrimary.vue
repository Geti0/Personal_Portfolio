<template>
  <button
    class="btn-primary"
    @click="handleClick"
  >
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
