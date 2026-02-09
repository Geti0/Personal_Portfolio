<template>
  <section
    id="profile"
    class="relative bg-dark min-h-screen flex flex-col px-6 md:px-16 lg:px-20 pt-24 pb-12"
  >
    <!-- Main content area -->
    <div v-fade-in class="flex-1 flex flex-col justify-center max-w-[1200px] mx-auto w-full">
      <!-- Large name -->
      <h1 class="text-[clamp(4rem,12vw,10rem)] font-extrabold text-white leading-[0.9] tracking-tighter mb-12">
        {{ data.firstName }}<span class="text-accent">*</span>
      </h1>

      <!-- Description row -->
      <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-20 max-w-[900px]">
        <div class="lg:max-w-[520px]">
          <p class="text-gray-400 text-lg md:text-xl leading-relaxed">
            Hi, I am {{ data.firstName }}<span class="text-accent">*</span> I am a
            <span class="text-white font-semibold">{{ data.role.toLowerCase() }}</span> and
            highly talented <span class="text-white font-semibold">infrastructure architect</span>
            with over a decade of experience in the field.
          </p>
        </div>

        <!-- CTA -->
        <div class="shrink-0">
          <a
            href="#contact"
            class="inline-flex items-center gap-3 bg-accent text-white font-medium text-sm
                   px-7 py-3.5 rounded-full transition-all duration-300
                   hover:bg-accent-dark hover:shadow-lg no-underline"
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

    <!-- Stats row (pinned to bottom) -->
    <div v-fade-in="0.3" class="max-w-[1200px] mx-auto w-full flex flex-wrap gap-10 md:gap-20 pt-10 mt-auto border-t border-gray-800">
      <div v-for="stat in data.stats" :key="stat.label">
        <p class="text-3xl md:text-5xl font-bold text-white leading-none">{{ stat.value }}</p>
        <p class="text-gray-500 text-xs mt-2 tracking-wider">{{ stat.label }}</p>
      </div>
    </div>

    <!-- Decorative asterisk -->
    <div class="absolute top-[30%] right-[10%] hidden lg:block pointer-events-none">
      <span class="text-accent text-[120px] font-bold leading-none opacity-40 select-none">*</span>
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
