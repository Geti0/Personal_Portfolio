<template>
  <div class="fixed inset-0 -z-10 overflow-hidden bg-dark">
    <!-- Grid pattern -->
    <div class="absolute inset-0 grid-pattern animate-grid-pulse" />

    <!-- Subtle glow orbs (green/cyan tones) -->
    <div
      v-for="orb in orbs"
      :key="orb.id"
      class="absolute rounded-full opacity-20 animate-float"
      :class="orb.size"
      :style="{ ...orb.position, background: orb.gradient, filter: 'blur(120px)', animationDelay: orb.delay }"
    />

    <!-- Scan line effect -->
    <div class="absolute inset-x-0 h-[1px] bg-terminal-green/5 animate-scan-line pointer-events-none" />
  </div>
</template>

<script setup lang="ts">
const orbs = [
  {
    id: 1,
    size: 'w-[500px] h-[500px]',
    position: { top: '-200px', left: '-150px' },
    gradient: 'radial-gradient(circle, rgba(0, 255, 65, 0.15) 0%, transparent 70%)',
    delay: '0s',
  },
  {
    id: 2,
    size: 'w-[400px] h-[400px]',
    position: { top: '40%', right: '-150px' },
    gradient: 'radial-gradient(circle, rgba(0, 212, 255, 0.12) 0%, transparent 70%)',
    delay: '8s',
  },
  {
    id: 3,
    size: 'w-[450px] h-[450px]',
    position: { bottom: '-200px', left: '40%' },
    gradient: 'radial-gradient(circle, rgba(75, 158, 255, 0.1) 0%, transparent 70%)',
    delay: '16s',
  },
]
</script>

<style scoped>
.grid-pattern {
  background-image:
    linear-gradient(rgba(0, 255, 65, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 65, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}

@media (max-width: 480px) {
  .animate-float {
    opacity: 0.1 !important;
    filter: blur(80px) !important;
  }
}
</style>
