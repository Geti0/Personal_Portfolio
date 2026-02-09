<template>
  <section id="about" class="relative px-6 md:px-16 lg:px-40 py-20 flex flex-col justify-center">
    <UiSectionHeader subtitle="about" title="System Info" />

    <div class="max-w-[1200px] mx-auto w-full">
      <!-- Neofetch-style system info -->
      <div v-fade-in class="terminal-window max-w-[900px] mx-auto mb-12">
        <div class="terminal-header">
          <div class="terminal-dot terminal-dot-red" />
          <div class="terminal-dot terminal-dot-amber" />
          <div class="terminal-dot terminal-dot-green" />
          <span class="terminal-title">neofetch</span>
        </div>
        <div class="terminal-body">
          <div class="flex flex-col md:flex-row gap-8">
            <!-- ASCII-style label -->
            <div class="text-terminal-green text-xs leading-tight font-mono whitespace-pre hidden md:block">
   ____       _
  / ___| ___ | |_ _   _  __ _ _ __
 | |  _ / _ \| __| | | |/ _` | '__|
 | |_| |  __/| |_| |_| | (_| | |
  \____|\___| \__|\__,_|\__,_|_|</div>

            <!-- System info lines -->
            <div class="flex-1 space-y-2">
              <p class="text-text-secondary text-sm leading-relaxed mb-4">
                {{ data.description }}
              </p>
              <div class="border-t border-border-subtle my-4 pt-4">
                <div v-for="info in data.systemInfo" :key="info.label" class="flex gap-2 mb-1.5 font-mono text-sm">
                  <span
                    class="font-semibold min-w-[120px]"
                    :class="{
                      'text-terminal-cyan': info.color === 'cyan',
                      'text-terminal-green': info.color === 'green',
                      'text-terminal-amber': info.color === 'amber',
                    }"
                  >{{ info.label }}:</span>
                  <span class="text-text-secondary">{{ info.value }}</span>
                </div>
              </div>
              <!-- Color palette bar -->
              <div class="flex gap-1 mt-4">
                <div class="w-6 h-3 rounded-sm bg-terminal-red" />
                <div class="w-6 h-3 rounded-sm bg-terminal-green" />
                <div class="w-6 h-3 rounded-sm bg-terminal-amber" />
                <div class="w-6 h-3 rounded-sm bg-terminal-blue" />
                <div class="w-6 h-3 rounded-sm bg-terminal-purple" />
                <div class="w-6 h-3 rounded-sm bg-terminal-cyan" />
                <div class="w-6 h-3 rounded-sm bg-terminal-magenta" />
                <div class="w-6 h-3 rounded-sm bg-text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Certification cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <UiCardModern
          v-for="cert in data.certifications"
          :key="cert.title"
          show-header
          :header-title="cert.issuer"
        >
          <div class="font-mono text-sm">
            <p class="text-terminal-green mb-1">
              <span class="text-terminal-cyan">$</span> cat cert.txt
            </p>
            <p class="text-text-primary font-semibold mb-1">{{ cert.title }}</p>
            <p class="text-text-muted text-xs">{{ cert.issuer }}</p>
          </div>
        </UiCardModern>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'

const data = portfolioData.about
</script>
