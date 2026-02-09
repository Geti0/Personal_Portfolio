<template>
  <section id="experience" class="relative px-6 md:px-16 lg:px-20 py-24 bg-gray-50">
    <div class="max-w-[1200px] mx-auto">
      <div class="section-label">EXPERIENCE</div>

      <div class="max-w-[800px]">
        <div
          v-for="(exp, i) in experience"
          :key="exp.company"
          v-fade-in
          class="flex gap-6 py-8 group"
          :class="i < experience.length - 1 ? 'border-b border-gray-200' : ''"
        >
          <!-- Timeline dot -->
          <div class="flex flex-col items-center pt-2 shrink-0">
            <div class="w-3 h-3 rounded-full border-2 border-accent bg-white group-hover:bg-accent/20 transition-colors" />
            <div v-if="i < experience.length - 1" class="w-[1px] flex-1 bg-gray-200 mt-2" />
          </div>

          <!-- Content -->
          <div class="flex-1 min-w-0">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h3 class="text-lg font-semibold text-gray-900">
                {{ exp.role }}
              </h3>
              <span class="text-sm text-gray-400">{{ exp.date }}</span>
            </div>
            <p class="text-accent font-medium text-sm mb-2">
              @ {{ exp.company }}
            </p>
            <p class="text-gray-500 text-sm">
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
