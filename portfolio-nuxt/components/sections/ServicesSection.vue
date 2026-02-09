<template>
  <section id="services" class="relative px-6 md:px-16 lg:px-40 py-20 flex flex-col justify-center">
    <UiSectionHeader subtitle="services" title="Pipeline Stages" />

    <!-- Pipeline connecting line (desktop) -->
    <div class="hidden lg:block max-w-[1200px] mx-auto w-full relative">
      <div class="absolute top-[50%] left-[10%] right-[10%] h-[1px] bg-border-subtle z-0">
        <div class="absolute top-0 left-0 h-full bg-terminal-green/30 pipeline-fill" />
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto w-full relative z-10">
      <UiCardModern
        v-for="(service, i) in services"
        :key="service.title"
        show-header
        :header-title="`stage-${i + 1}.yml`"
      >
        <div class="font-mono">
          <!-- Status indicator -->
          <div class="flex items-center gap-2 mb-4">
            <span
              class="w-2 h-2 rounded-full"
              :class="{
                'bg-terminal-green shadow-[0_0_6px_rgba(0,255,65,0.6)]': service.status === 'running',
                'bg-terminal-amber shadow-[0_0_6px_rgba(255,183,0,0.6)]': service.status === 'pending',
                'bg-terminal-cyan shadow-[0_0_6px_rgba(0,212,255,0.6)] animate-pulse-glow': service.status === 'deploying',
              }"
            />
            <span
              class="text-xs uppercase tracking-wider"
              :class="{
                'text-terminal-green': service.status === 'running',
                'text-terminal-amber': service.status === 'pending',
                'text-terminal-cyan': service.status === 'deploying',
              }"
            >{{ service.status }}</span>
          </div>

          <h3 class="text-lg font-semibold text-text-primary mb-3 font-sans">
            {{ service.title }}
          </h3>
          <p class="text-text-secondary leading-relaxed mb-6 text-sm font-sans">
            {{ service.description }}
          </p>
          <div class="flex flex-wrap gap-2 mt-4">
            <UiTagPill v-for="tech in service.stack" :key="tech" :variant="i % 2 === 0 ? 'cyan' : 'green'">
              {{ tech }}
            </UiTagPill>
          </div>
        </div>
      </UiCardModern>
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'

const services = portfolioData.services
</script>

<style scoped>
.pipeline-fill {
  animation: pipelineFill 3s ease-out forwards;
  width: 0;
}

@keyframes pipelineFill {
  to { width: 100%; }
}
</style>
