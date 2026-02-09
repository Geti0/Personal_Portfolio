<template>
  <section id="testimonials" class="relative px-6 md:px-16 lg:px-20 py-24 bg-gray-50">
    <div class="max-w-[1200px] mx-auto">
      <div class="section-label">TESTIMONIALS</div>

      <div v-if="testimonials.length > 0" class="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
        <!-- Photo -->
        <div v-fade-in class="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0 bg-gray-200">
          <img
            :src="useAsset(current.image)"
            :alt="current.name"
            class="w-full h-full object-cover"
          >
        </div>

        <!-- Quote -->
        <div v-fade-in="0.2" class="flex-1">
          <blockquote class="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 leading-snug mb-8">
            {{ current.quote }}
          </blockquote>

          <div class="flex items-center justify-between">
            <div>
              <p class="font-semibold text-gray-900">{{ current.name }}</p>
              <p class="text-sm text-gray-500">{{ current.role }}</p>
            </div>

            <!-- Navigation arrows -->
            <div class="flex items-center gap-3">
              <span class="text-sm text-gray-400">{{ String(activeIndex + 1).padStart(2, '0') }}/{{ String(testimonials.length).padStart(2, '0') }}</span>
              <button
                class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center
                       hover:border-gray-900 transition-colors disabled:opacity-30"
                :disabled="activeIndex === 0"
                @click="activeIndex--"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                class="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center
                       hover:bg-accent-dark transition-colors disabled:opacity-30"
                :disabled="activeIndex === testimonials.length - 1"
                @click="activeIndex++"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'

const testimonials = portfolioData.testimonials
const activeIndex = ref(0)

const current = computed(() => testimonials[activeIndex.value])
</script>
