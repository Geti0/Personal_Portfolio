<template>
  <footer class="bg-dark text-white">
    <!-- Main footer content -->
    <div class="px-6 md:px-16 lg:px-20 py-16">
      <div class="max-w-[1200px] mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <!-- Brand + Newsletter -->
          <div class="lg:col-span-1">
            <div class="flex items-center gap-1 mb-4">
              <span class="text-xl font-bold text-white">GETUAR</span>
              <span class="text-accent text-xl font-bold">*</span>
            </div>
            <p class="text-gray-400 text-sm leading-relaxed mb-6">
              Whether you're launching a new brand or refining an existing one, we're here to turn your ideas into reality.
            </p>
            <div class="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                class="flex-1 px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-full text-sm text-white
                       placeholder:text-gray-500 focus:outline-none focus:border-accent"
              >
              <button class="w-10 h-10 bg-accent rounded-full flex items-center justify-center shrink-0 hover:bg-accent-dark transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Pages -->
          <div>
            <h4 class="text-sm font-semibold mb-4">Pages</h4>
            <ul class="space-y-2 list-none">
              <li v-for="link in links" :key="link.href">
                <a
                  :href="link.href"
                  class="text-gray-400 text-sm hover:text-white transition-colors no-underline"
                  @click.prevent="scrollTo(link.href)"
                >{{ link.label }}</a>
              </li>
            </ul>
          </div>

          <!-- Inner Pages -->
          <div>
            <h4 class="text-sm font-semibold mb-4">Inner Pages</h4>
            <ul class="space-y-2 list-none">
              <li><a href="#work" class="text-gray-400 text-sm hover:text-white transition-colors no-underline" @click.prevent="scrollTo('#work')">Project single</a></li>
              <li><a href="#services" class="text-gray-400 text-sm hover:text-white transition-colors no-underline" @click.prevent="scrollTo('#services')">Service single</a></li>
              <li><a href="#articles" class="text-gray-400 text-sm hover:text-white transition-colors no-underline" @click.prevent="scrollTo('#articles')">Blog single</a></li>
              <li><a href="#contact" class="text-gray-400 text-sm hover:text-white transition-colors no-underline" @click.prevent="scrollTo('#contact')">Contact</a></li>
            </ul>
          </div>

          <!-- Utility -->
          <div>
            <h4 class="text-sm font-semibold mb-4">Utility Pages</h4>
            <ul class="space-y-2 list-none">
              <li><a href="#" class="text-gray-400 text-sm hover:text-white transition-colors no-underline">Style guide</a></li>
              <li><a href="#" class="text-gray-400 text-sm hover:text-white transition-colors no-underline">Licenses</a></li>
              <li><a href="#" class="text-gray-400 text-sm hover:text-white transition-colors no-underline">Changelog</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA bar -->
    <div class="px-6 md:px-16 lg:px-20 py-8 border-t border-gray-800">
      <div class="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
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

    <!-- Large watermark text -->
    <div class="overflow-hidden px-6 md:px-16 lg:px-20 pb-8">
      <div class="max-w-[1200px] mx-auto">
        <p class="text-[clamp(3rem,8vw,7rem)] font-extrabold text-gray-800/30 leading-none tracking-tight select-none">
          GETUAR
        </p>
      </div>
    </div>

    <!-- Copyright -->
    <div class="px-6 md:px-16 lg:px-20 py-4 border-t border-gray-800">
      <div class="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p class="text-gray-500 text-xs">&copy; Copyright {{ year }}</p>
        <div class="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/getuar-kelmendi/" target="_blank" rel="noopener noreferrer" class="text-gray-500 text-xs hover:text-white transition-colors no-underline">LinkedIn</a>
          <a href="https://github.com/Geti0" target="_blank" rel="noopener noreferrer" class="text-gray-500 text-xs hover:text-white transition-colors no-underline">GitHub</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{
  links: { label: string; href: string }[]
}>()

const year = new Date().getFullYear()

function scrollTo(href: string) {
  const el = document.querySelector(href)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>
