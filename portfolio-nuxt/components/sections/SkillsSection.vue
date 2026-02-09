<template>
  <section id="skills" class="relative px-6 md:px-16 lg:px-40 py-20 flex flex-col justify-center">
    <UiSectionHeader subtitle="skills" title="Monitoring Dashboard" />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto w-full">
      <UiCardModern
        v-for="(category, ci) in skills"
        :key="category.title"
        show-header
        :header-title="`panel-${ci + 1}`"
      >
        <div>
          <div class="flex items-center gap-3 mb-6">
            <span class="text-2xl">{{ category.icon }}</span>
            <h3 class="text-lg font-semibold text-text-primary">
              {{ category.title }}
            </h3>
          </div>

          <div class="space-y-4">
            <div v-for="skill in category.skills" :key="skill.name">
              <div class="flex justify-between items-center mb-1.5">
                <span class="text-text-secondary text-sm font-mono">{{ skill.name }}</span>
                <span class="text-terminal-green text-xs font-mono">{{ skill.level }}%</span>
              </div>
              <div class="w-full h-1.5 bg-dark-deeper rounded-full overflow-hidden">
                <div
                  class="h-full rounded-full transition-all duration-1000 ease-out"
                  :class="barColor(ci)"
                  :style="{ width: `${skill.level}%` }"
                />
              </div>
            </div>
          </div>
        </div>
      </UiCardModern>
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'

const skills = portfolioData.skills

function barColor(index: number): string {
  const colors = [
    'bg-terminal-cyan shadow-[0_0_6px_rgba(0,212,255,0.4)]',
    'bg-terminal-green shadow-[0_0_6px_rgba(0,255,65,0.4)]',
    'bg-terminal-amber shadow-[0_0_6px_rgba(255,183,0,0.4)]',
  ]
  return colors[index % colors.length]
}
</script>
