<template>
  <section id="work" class="relative px-6 md:px-16 lg:px-40 py-20 flex flex-col justify-center">
    <UiSectionHeader subtitle="projects" title="Deployments" />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto w-full">
      <div
        v-for="project in projects"
        :key="project.title"
        v-fade-in
        class="terminal-window transition-all duration-300
               hover:-translate-y-1 hover:shadow-glow hover:border-border-glow"
      >
        <!-- Terminal header with status -->
        <div class="terminal-header">
          <div class="terminal-dot terminal-dot-red" />
          <div class="terminal-dot terminal-dot-amber" />
          <div class="terminal-dot terminal-dot-green" />
          <span class="terminal-title flex-1">container</span>
          <span
            class="text-xs font-mono uppercase tracking-wider"
            :class="{
              'text-terminal-green': project.status === 'deployed',
              'text-terminal-amber': project.status === 'building',
              'text-terminal-cyan': project.status === 'staging',
            }"
          >{{ project.status }}</span>
        </div>

        <!-- Image -->
        <div class="relative overflow-hidden aspect-[16/10] group">
          <img
            :src="useAsset(project.image)"
            :alt="project.alt"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          >
          <div
            class="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-400
                   group-hover:opacity-100 bg-dark/90"
          >
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="bg-terminal-green/10 text-terminal-green font-mono font-semibold text-sm px-6 py-3
                     rounded border border-terminal-green/30 no-underline
                     hover:bg-terminal-green/20 transition-all duration-300"
            >
              $ docker logs
            </a>
          </div>
        </div>

        <!-- Content -->
        <div class="p-5">
          <h3 class="text-base font-semibold text-text-primary mb-2">
            {{ project.title }}
          </h3>
          <p class="text-text-secondary text-sm leading-relaxed mb-4">
            {{ project.description }}
          </p>
          <div class="flex flex-wrap gap-2">
            <UiTagPill v-for="tag in project.tags" :key="tag" variant="cyan">
              {{ tag }}
            </UiTagPill>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'

const projects = portfolioData.projects
</script>
