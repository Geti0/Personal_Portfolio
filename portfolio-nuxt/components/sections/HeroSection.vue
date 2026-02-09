<template>
  <section
    id="profile"
    class="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20
           min-h-screen px-6 md:px-16 lg:px-40 pt-16 lg:pt-0"
  >
    <!-- Profile image with terminal frame -->
    <div v-fade-in class="flex justify-center items-center relative">
      <div class="terminal-window w-[260px] md:w-[320px] lg:w-[380px]">
        <div class="terminal-header">
          <div class="terminal-dot terminal-dot-red" />
          <div class="terminal-dot terminal-dot-amber" />
          <div class="terminal-dot terminal-dot-green" />
          <span class="terminal-title">profile.png</span>
        </div>
        <div class="p-2">
          <img
            ref="profileImgRef"
            :src="useAsset(data.profileImage)"
            :alt="`${data.name} profile picture`"
            class="w-full aspect-square object-cover rounded-sm"
          >
        </div>
      </div>
    </div>

    <!-- Text content -->
    <div v-fade-in="0.2" class="self-center text-center lg:text-left max-w-[600px]">
      <p class="text-sm text-terminal-cyan font-mono uppercase tracking-[3px] font-medium mb-3">
        <span class="text-terminal-green">$</span> whoami
      </p>
      <h1 class="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-text-primary leading-tight mb-3">
        {{ data.name }}
      </h1>
      <p class="text-xl md:text-2xl text-terminal-green font-mono font-medium mb-6 text-glow-green">
        {{ data.role }}
      </p>

      <!-- Terminal command typing -->
      <div class="terminal-window mb-8">
        <div class="terminal-header">
          <div class="terminal-dot terminal-dot-red" />
          <div class="terminal-dot terminal-dot-amber" />
          <div class="terminal-dot terminal-dot-green" />
          <span class="terminal-title">bash — 80x24</span>
        </div>
        <div class="terminal-body text-xs md:text-sm min-h-[120px]">
          <div v-for="(line, i) in lines" :key="i" class="mb-1">
            <span class="text-terminal-cyan">getuar@devops</span>
            <span class="text-text-muted">:</span>
            <span class="text-terminal-blue">~</span>
            <span class="text-text-muted">$ </span>
            <span class="text-terminal-green">{{ line.text }}</span>
            <span v-if="!line.isComplete" class="text-terminal-green animate-blink">|</span>
          </div>
          <div v-if="!isTyping && lines.length === 0" class="text-text-muted">
            <span class="text-terminal-cyan">getuar@devops</span>
            <span class="text-text-muted">:</span>
            <span class="text-terminal-blue">~</span>
            <span class="text-text-muted">$ </span>
            <span class="text-terminal-green animate-blink">|</span>
          </div>
        </div>
      </div>

      <div class="flex justify-center lg:justify-start gap-4">
        <UiBtnPrimary href="#contact">
          <span>ssh contact</span>
        </UiBtnPrimary>
      </div>

      <div class="flex justify-center lg:justify-start mt-6 gap-4">
        <UiSocialLink
          v-for="social in data.socials"
          :key="social.label"
          :href="social.url"
          :icon="social.icon"
          :label="social.label"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'
import { useParallax } from '~/composables/useParallax'
import { useTerminalTyping } from '~/composables/useTypingEffect'

const data = portfolioData.hero
const profileImgRef = ref<HTMLImageElement | null>(null)

const { lines, isTyping } = useTerminalTyping(data.terminalCommands, 30, 600, 800)

onMounted(() => {
  useParallax(profileImgRef)
})
</script>
