<template>
  <section id="work" class="relative px-6 md:px-16 lg:px-20 py-24 bg-white">
    <div class="max-w-[1200px] mx-auto">
      <div class="section-label">PROJECT</div>

      <!-- Project grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a
          v-for="(project, i) in projects"
          :key="project.title"
          v-fade-in
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="group no-underline block"
          :class="i === 0 ? 'md:col-span-2 lg:col-span-1' : ''"
        >
          <!-- Image -->
          <div class="relative overflow-hidden rounded-lg aspect-[4/3] bg-gray-100 mb-4">
            <img
              :src="useAsset(project.image)"
              :alt="project.alt"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            >
          </div>

          <!-- Info row -->
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
              <span class="text-xs text-gray-400 font-medium">{{ String(i + 1).padStart(3, '0') }}.</span>
              <span class="text-sm font-semibold text-gray-900 uppercase tracking-wide">{{ project.title }}</span>
            </div>
            <div class="flex items-center gap-4">
              <span class="text-xs text-gray-400 uppercase tracking-wider">{{ project.category }}</span>
              <span class="text-xs text-gray-400">{{ project.year }}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'

const projects = portfolioData.projects
</script>
