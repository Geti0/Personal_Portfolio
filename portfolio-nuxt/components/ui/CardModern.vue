<template>
  <div
    v-fade-in
    class="card-clean"
    :class="[padding]"
  >
    <div v-if="showHeader" class="px-4 py-3 border-b border-gray-100 bg-gray-50">
      <span v-if="headerTitle" class="text-xs text-gray-500 font-medium">{{ headerTitle }}</span>
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
