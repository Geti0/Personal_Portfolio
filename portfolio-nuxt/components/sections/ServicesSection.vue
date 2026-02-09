<template>
  <section id="services" class="relative px-6 md:px-16 lg:px-20 py-24 bg-white">
    <div class="max-w-[1200px] mx-auto">
      <div class="section-label">SERVICES</div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
        <div
          v-for="service in services"
          :key="service.title"
          v-fade-in
          class="bg-white p-8 md:p-10 flex flex-col group hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
          @click="openModal(service)"
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
          <span
            class="inline-flex items-center gap-2 text-sm font-medium text-gray-900
                   pl-8 mt-auto group-hover:text-accent transition-colors"
          >
            Read more
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </div>

    <!-- Modal overlay -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="activeService"
          class="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-8"
          @click.self="closeModal"
        >
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="closeModal" />

          <!-- Modal content -->
          <div
            class="relative bg-white rounded-2xl shadow-2xl w-full max-w-[640px] max-h-[85vh] overflow-y-auto z-10"
          >
            <!-- Header -->
            <div class="sticky top-0 bg-white border-b border-gray-100 px-8 py-5 flex items-start justify-between rounded-t-2xl">
              <div class="flex items-start gap-4">
                <span class="text-sm font-semibold text-accent mt-1">{{ activeService.number }}</span>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 tracking-wide">{{ activeService.title }}</h3>
                  <p class="text-gray-500 text-sm mt-1">{{ activeService.description }}</p>
                </div>
              </div>
              <button
                class="shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors ml-4"
                @click="closeModal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Body -->
            <div class="px-8 py-6">
              <!-- Stack tags -->
              <div class="flex flex-wrap gap-2 mb-6">
                <span
                  v-for="tech in activeService.stack"
                  :key="tech"
                  class="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
                >{{ tech }}</span>
              </div>

              <!-- Detail list -->
              <h4 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">What I use &amp; deliver</h4>
              <ul class="space-y-3">
                <li
                  v-for="(detail, i) in activeService.details"
                  :key="i"
                  class="flex gap-3 text-sm text-gray-600 leading-relaxed"
                >
                  <span class="shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                  {{ detail }}
                </li>
              </ul>
            </div>

            <!-- Footer -->
            <div class="px-8 py-5 border-t border-gray-100 flex justify-end">
              <a
                href="#contact"
                class="inline-flex items-center gap-2 bg-accent text-white font-medium text-sm
                       px-6 py-2.5 rounded-full transition-all duration-300
                       hover:bg-accent-dark no-underline"
                @click.prevent="goToContact"
              >
                Let's Discuss
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import type { ServiceData } from '~/types/portfolio'
import { portfolioData } from '~/data/portfolio'

const services = portfolioData.services
const activeService = ref<ServiceData | null>(null)

function openModal(service: ServiceData) {
  activeService.value = service
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  activeService.value = null
  document.body.style.overflow = ''
}

function goToContact() {
  closeModal()
  nextTick(() => {
    const el = document.querySelector('#contact')
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}
.modal-enter-active > div:last-child,
.modal-leave-active > div:last-child {
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from > div:last-child {
  transform: translateY(16px) scale(0.97);
  opacity: 0;
}
.modal-leave-to > div:last-child {
  transform: translateY(8px) scale(0.98);
  opacity: 0;
}
</style>
