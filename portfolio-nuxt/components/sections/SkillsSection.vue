<template>
  <section id="skills" class="relative px-6 md:px-16 lg:px-20 py-24 bg-white">
    <div class="max-w-[1200px] mx-auto">
      <div class="section-label">SKILLS</div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="category in skills"
          :key="category.title"
          v-fade-in
          class="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300"
        >
          <div class="flex items-center gap-3 mb-6">
            <span class="text-2xl">{{ category.icon }}</span>
            <h3 class="text-lg font-semibold text-gray-900">
              {{ category.title }}
            </h3>
          </div>

          <div class="space-y-4">
            <div v-for="skill in category.skills" :key="skill.name">
              <div class="flex justify-between items-center mb-1.5">
                <span class="text-gray-600 text-sm">{{ skill.name }}</span>
                <span class="text-accent text-xs font-semibold">{{ skill.level }}%</span>
              </div>
              <div class="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  class="h-full rounded-full bg-accent transition-all duration-1000 ease-out"
                  :style="{ width: `${skill.level}%` }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'

const skills = portfolioData.skills
</script>
