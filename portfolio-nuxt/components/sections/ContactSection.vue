<template>
  <section id="contact" class="flex flex-col items-center justify-center px-6 md:px-16 py-20">
    <UiSectionHeader subtitle="contact" title="Open Connection" />

    <div class="terminal-window max-w-[600px] w-full mx-auto mt-4">
      <div class="terminal-header">
        <div class="terminal-dot terminal-dot-red" />
        <div class="terminal-dot terminal-dot-amber" />
        <div class="terminal-dot terminal-dot-green" />
        <span class="terminal-title">contact@getuar -- ssh</span>
      </div>

      <div class="p-6 md:p-10">
        <!-- Success Message -->
        <div v-if="isSuccess" class="text-center py-8 font-mono">
          <div class="text-terminal-green text-4xl mb-4 text-glow-green">
            &#10003;
          </div>
          <p class="text-terminal-green text-sm mb-2">
            [SUCCESS] Message delivered
          </p>
          <p class="text-text-muted text-xs">
            Connection closed. Response ETA: &lt; 24h
          </p>
        </div>

        <!-- Form -->
        <form v-else class="flex flex-col w-full space-y-4" @submit.prevent="handleSubmit">
          <p class="text-terminal-green font-mono text-sm mb-4">
            <span class="text-terminal-cyan">$</span> Ready to bring your ideas to life? Let's connect.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 w-full">
            <div class="flex-1">
              <label class="text-text-muted text-xs font-mono mb-1 block">first_name:</label>
              <input
                v-model="form.firstName"
                type="text"
                name="first-name"
                required
                class="w-full input-field"
              >
            </div>
            <div class="flex-1">
              <label class="text-text-muted text-xs font-mono mb-1 block">last_name:</label>
              <input
                v-model="form.lastName"
                type="text"
                name="last-name"
                required
                class="w-full input-field"
              >
            </div>
          </div>

          <div>
            <label class="text-text-muted text-xs font-mono mb-1 block">email:</label>
            <input
              v-model="form.email"
              type="email"
              name="email"
              required
              class="w-full input-field"
            >
          </div>

          <div>
            <label class="text-text-muted text-xs font-mono mb-1 block">message:</label>
            <textarea
              v-model="form.message"
              name="subject"
              required
              class="w-full input-field h-[120px] resize-y"
            />
          </div>

          <!-- Error message -->
          <p v-if="errorMessage" class="text-terminal-red text-xs font-mono">
            [ERROR] {{ errorMessage }}
          </p>

          <div class="pt-2">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="bg-terminal-green/10 text-terminal-green border border-terminal-green/30
                     px-8 py-3 rounded font-mono text-sm cursor-pointer
                     transition-all duration-300 hover:bg-terminal-green/20 hover:border-terminal-green/50
                     hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span class="text-terminal-cyan">$</span> {{ isSubmitting ? 'sending...' : 'send --message' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useContactForm } from '~/composables/useContactForm'

const { form, isSubmitting, isSuccess, errorMessage, handleSubmit } = useContactForm()
</script>

<style scoped>
.input-field {
  @apply px-4 py-3 bg-dark-deeper/50 border border-border-subtle rounded
         text-sm font-mono text-text-primary transition-all duration-300
         focus:outline-none focus:border-terminal-green/50 focus:shadow-[0_0_0_2px_rgba(0,255,65,0.1)]
         focus:bg-dark-deeper/70;
}

.input-field::placeholder {
  @apply text-text-muted;
}
</style>
