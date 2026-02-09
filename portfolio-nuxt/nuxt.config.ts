export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    families: {
      'Poppins': [300, 400, 500, 600, 700, 800],
      'Fira Code': [400, 500, 600, 700],
    },
    display: 'swap',
  },

  css: ['~/assets/css/main.css'],

  app: {
    baseURL: '/Personal_Portfolio/',
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Getuar Kelmendi | DevOps Engineer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Getuar Kelmendi - DevOps Engineer specializing in Cloud Infrastructure, CI/CD Pipelines, Kubernetes, Docker, and Infrastructure as Code',
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      web3formsKey: process.env.NUXT_PUBLIC_WEB3FORMS_KEY || '9ca14614-12d6-4c02-a50b-a7022e2664a6',
    },
  },

  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
})
