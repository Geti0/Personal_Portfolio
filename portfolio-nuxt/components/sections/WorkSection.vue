<template>
  <section id="work" class="relative px-6 md:px-16 lg:px-20 py-24 bg-white">
    <div class="max-w-[1200px] mx-auto">
      <div class="section-label">PROJECT</div>

      <!-- Project grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(project, i) in projects"
          :key="project.title"
          v-fade-in
          class="group cursor-pointer"
          :class="i === 0 ? 'md:col-span-2 lg:col-span-1' : ''"
          @click="project.details ? openModal(project) : null"
        >
          <!-- Image -->
          <div class="relative overflow-hidden rounded-lg aspect-[4/3] bg-gray-100 mb-4">
            <img
              :src="useAsset(project.image)"
              :alt="project.alt"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            >
            <!-- Overlay hint if no modal -->
            <a
              v-if="!project.details"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="absolute inset-0"
              @click.stop
            />
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
        </div>
      </div>
    </div>

    <!-- Modal overlay -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="activeProject"
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
                <span class="text-sm font-semibold text-gray-400 mt-1">{{ String(projects.indexOf(activeProject) + 1).padStart(3, '0') }}.</span>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 tracking-wide">{{ activeProject.title }}</h3>
                  <p class="text-gray-500 text-sm mt-1">{{ activeProject.description }}</p>
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
              <!-- Tech tags -->
              <div class="flex flex-wrap gap-2 mb-6">
                <span
                  v-for="tag in activeProject.tags"
                  :key="tag"
                  class="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
                >{{ tag }}</span>
              </div>

              <!-- Detail list -->
              <h4 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Architecture &amp; Implementation</h4>
              <ul class="space-y-3">
                <li
                  v-for="(detail, i) in activeProject.details"
                  :key="i"
                  class="flex gap-3 text-sm text-gray-600 leading-relaxed"
                >
                  <span class="shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                  {{ detail }}
                </li>
              </ul>
            </div>

            <!-- Footer -->
            <div class="px-8 py-5 border-t border-gray-100 flex items-center justify-end gap-3">
              <a
                v-if="activeProject.liveUrl"
                :href="activeProject.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 border border-gray-200 text-gray-700 font-medium text-sm
                       px-5 py-2.5 rounded-full transition-all duration-300 hover:border-gray-400 no-underline"
              >
                View Live
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                :href="activeProject.link"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 bg-accent text-white font-medium text-sm
                       px-6 py-2.5 rounded-full transition-all duration-300
                       hover:bg-accent-dark no-underline"
              >
                GitHub
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
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
import type { ProjectData } from '~/types/portfolio'
import { portfolioData } from '~/data/portfolio'

const projects = portfolioData.projects
const activeProject = ref<ProjectData | null>(null)

function openModal(project: ProjectData) {
  activeProject.value = project
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  activeProject.value = null
  document.body.style.overflow = ''
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
