<template>
  <section id="articles" class="relative px-6 md:px-16 lg:px-20 py-24 bg-white">
    <div class="max-w-[1200px] mx-auto">
      <div class="section-label">LATEST ARTICLE</div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="article in articles"
          :key="article.title"
          v-fade-in
          class="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300 group"
        >
          <!-- Image placeholder -->
          <div class="aspect-[16/10] bg-gray-100 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-100" />
          </div>

          <!-- Content -->
          <div class="p-5">
            <!-- Date + read time -->
            <div class="flex items-center gap-3 text-xs text-gray-400 mb-3">
              <span>{{ article.date }}</span>
              <span>&mdash;</span>
              <span>{{ article.readTime }}</span>
            </div>

            <!-- Title -->
            <h3 class="text-base font-semibold text-gray-900 leading-snug mb-4 group-hover:text-accent transition-colors">
              {{ article.title }}
            </h3>

            <!-- Tags + Read All -->
            <div class="flex items-center justify-between pt-3 border-t border-gray-100">
              <div class="flex items-center gap-2">
                <span
                  v-for="tag in article.tags"
                  :key="tag"
                  class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
                >{{ tag }}</span>
              </div>
              <a
                href="#"
                class="text-xs font-medium text-gray-900 no-underline hover:text-accent transition-colors flex items-center gap-1"
                @click.prevent
              >
                Read All
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'

const articles = portfolioData.articles
</script>
