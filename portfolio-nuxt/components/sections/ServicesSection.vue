<template>
  <section id="services" class="relative px-6 md:px-16 lg:px-20 py-24 bg-white">
    <div class="max-w-[1200px] mx-auto">
      <div class="section-label">SERVICES</div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
        <div
          v-for="service in services"
          :key="service.title"
          v-fade-in
          class="bg-white p-8 md:p-10 flex flex-col group hover:bg-gray-50 transition-colors duration-300"
        >
          <!-- Number + Title -->
          <div class="flex items-start gap-4 mb-4">
            <span class="text-sm font-semibold text-gray-400">{{ service.number }}</span>
            <h3 class="text-lg font-bold text-gray-900 tracking-wide">{{ service.title }}</h3>
          </div>

          <!-- Description -->
          <p class="text-gray-500 text-sm leading-relaxed mb-6 pl-8">
            {{ service.description }}
          </p>

          <!-- Read more link -->
          <a
            href="#"
            class="inline-flex items-center gap-2 text-sm font-medium text-gray-900 no-underline
                   pl-8 mt-auto hover:text-accent transition-colors"
            @click.prevent
          >
            Read more
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'

const services = portfolioData.services
</script>
