<template>
  <section
    id="profile"
    class="relative bg-dark min-h-screen flex flex-col justify-between px-6 md:px-16 lg:px-20 pt-20 pb-12"
  >
    <!-- Large typography -->
    <div v-fade-in class="flex-1 flex flex-col justify-center">
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
        <!-- Big name -->
        <div class="flex-1">
          <h1 class="text-[clamp(3rem,10vw,8rem)] font-extrabold text-white leading-[0.95] tracking-tight">
            {{ data.firstName }}<span class="text-accent">*</span>
          </h1>
        </div>

        <!-- Description + CTA -->
        <div class="lg:max-w-[400px] lg:pb-4">
          <p class="text-gray-400 text-base leading-relaxed mb-6">
            {{ data.description }}
          </p>
          <a
            href="#contact"
            class="btn-primary"
            @click.prevent="scrollTo('#contact')"
          >
            Let's Discuss
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Stats row -->
    <div v-fade-in="0.3" class="flex flex-wrap gap-8 md:gap-16 mt-12 pt-8 border-t border-gray-800">
      <div v-for="stat in data.stats" :key="stat.label">
        <p class="text-3xl md:text-4xl font-bold text-white">{{ stat.value }}</p>
        <p class="text-gray-500 text-sm mt-1">{{ stat.label }}</p>
      </div>
    </div>

    <!-- Decorative green asterisk -->
    <div class="absolute top-1/4 right-[15%] hidden lg:block">
      <svg class="w-16 h-16 text-accent opacity-60" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2v8.5L5.5 5.5l1-1L12 10V2zm0 20v-8.5l6.5 5L17.5 19.5 12 14v8zm-10-10h8.5L5.5 5.5l1 1L12 12H2zm20 0h-8.5l5 6.5-1 1L12 12h10z"/>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'

const data = portfolioData.hero

function scrollTo(href: string) {
  const el = document.querySelector(href)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>
