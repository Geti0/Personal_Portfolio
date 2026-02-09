<template>
  <section id="experience" class="relative px-6 md:px-16 lg:px-40 py-20 flex flex-col justify-center">
    <UiSectionHeader subtitle="experience" title="Git Log" />

    <div v-fade-in class="terminal-window max-w-[800px] mx-auto w-full">
      <div class="terminal-header">
        <div class="terminal-dot terminal-dot-red" />
        <div class="terminal-dot terminal-dot-amber" />
        <div class="terminal-dot terminal-dot-green" />
        <span class="terminal-title">git log --oneline --graph</span>
      </div>
      <div class="terminal-body space-y-0">
        <div class="text-text-muted text-xs mb-4 font-mono">
          <span class="text-terminal-cyan">getuar@devops</span>:<span class="text-terminal-blue">~/career</span>$ git log --oneline --graph
        </div>

        <div
          v-for="(exp, i) in experience"
          :key="exp.hash"
          class="flex gap-4 py-4 group transition-colors duration-300 hover:bg-terminal-green/[0.02] -mx-6 px-6"
          :class="i < experience.length - 1 ? 'border-b border-border-subtle/50' : ''"
        >
          <!-- Git graph line -->
          <div class="flex flex-col items-center pt-1 shrink-0">
            <div class="w-3 h-3 rounded-full border-2 border-terminal-green bg-dark-card group-hover:bg-terminal-green/20 transition-colors" />
            <div v-if="i < experience.length - 1" class="w-[1px] flex-1 bg-border-subtle mt-1" />
          </div>

          <!-- Commit content -->
          <div class="flex-1 min-w-0">
            <div class="flex flex-wrap items-center gap-2 mb-2">
              <span class="text-terminal-amber font-mono text-xs">{{ exp.hash }}</span>
              <span class="text-text-muted font-mono text-xs">({{ exp.date }})</span>
            </div>
            <h3 class="text-base font-semibold text-text-primary mb-1">
              {{ exp.role }}
            </h3>
            <span class="text-terminal-cyan font-mono text-sm">
              @ {{ exp.company }}
            </span>
            <p class="text-text-muted text-xs mt-2 font-mono">
              {{ exp.tech }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'

const experience = portfolioData.experience
</script>
