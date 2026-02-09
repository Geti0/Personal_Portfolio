<template>
  <section id="about" class="relative px-6 md:px-16 lg:px-20 py-24 bg-white">
    <div class="max-w-[1200px] mx-auto">
      <div class="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-24">
        <!-- Left side: label + CTA -->
        <div v-fade-in class="lg:w-1/3">
          <div class="section-label">WHAT I DO</div>
          <a
            href="#contact"
            class="btn-primary mt-8"
            @click.prevent="scrollTo('#contact')"
          >
            Let's Discuss
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <!-- Right side: description -->
        <div v-fade-in="0.2" class="lg:w-2/3">
          <p class="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-snug">
            {{ data.description }}<sup class="text-accent text-lg align-super">&reg;</sup>
          </p>
          <a
            href="#services"
            class="inline-flex items-center gap-2 text-gray-900 font-medium text-sm mt-8 no-underline hover:text-accent transition-colors"
            @click.prevent="scrollTo('#services')"
          >
            About us
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'

const data = portfolioData.about

function scrollTo(href: string) {
  const el = document.querySelector(href)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>
