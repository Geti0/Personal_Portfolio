<template>
  <div v-fade-in class="section-label">
    {{ subtitle }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  subtitle: string
  title?: string
}>()
</script>
