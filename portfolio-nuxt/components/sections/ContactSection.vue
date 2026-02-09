<template>
  <section id="contact" class="px-6 md:px-16 lg:px-20 py-24 bg-gray-50">
    <div class="max-w-[600px] mx-auto">
      <div class="section-label">CONTACT</div>

      <!-- Success Message -->
      <div v-if="isSuccess" class="text-center py-12">
        <div class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p class="text-xl font-semibold text-gray-900 mb-2">Message sent!</p>
        <p class="text-gray-500 text-sm">I'll get back to you within 24 hours.</p>
      </div>

      <!-- Form -->
      <form v-else class="space-y-5" @submit.prevent="handleSubmit">
        <p class="text-gray-500 text-sm mb-6">
          Ready to bring your ideas to life? Let's connect.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="text-gray-700 text-sm font-medium mb-1.5 block">First Name</label>
            <input
              v-model="form.firstName"
              type="text"
              name="first-name"
              required
              placeholder="John"
              class="input-field"
            >
          </div>
          <div>
            <label class="text-gray-700 text-sm font-medium mb-1.5 block">Last Name</label>
            <input
              v-model="form.lastName"
              type="text"
              name="last-name"
              required
              placeholder="Doe"
              class="input-field"
            >
          </div>
        </div>

        <div>
          <label class="text-gray-700 text-sm font-medium mb-1.5 block">Email</label>
          <input
            v-model="form.email"
            type="email"
            name="email"
            required
            placeholder="john@example.com"
            class="input-field"
          >
        </div>

        <div>
          <label class="text-gray-700 text-sm font-medium mb-1.5 block">Message</label>
          <textarea
            v-model="form.message"
            name="subject"
            required
            placeholder="Tell me about your project..."
            class="input-field h-[140px] resize-y"
          />
        </div>

        <!-- Error -->
        <p v-if="errorMessage" class="text-red-500 text-sm">
          {{ errorMessage }}
        </p>

        <button
          type="submit"
          :disabled="isSubmitting"
          class="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useContactForm } from '~/composables/useContactForm'

const { form, isSubmitting, isSuccess, errorMessage, handleSubmit } = useContactForm()
</script>

<style scoped>
.input-field {
  @apply w-full px-4 py-3 bg-white border border-gray-200 rounded-lg
         text-sm text-gray-900 transition-all duration-300
         focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10;
}

.input-field::placeholder {
  @apply text-gray-400;
}
</style>
