// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  typescript: { strict: false },

  runtimeConfig: {
    public: {
      apiKey: 'bda2ec0f',
      apiBaseUrl: 'http://www.omdbapi.com',
      posterApiBaseUrl: 'http://img.omdbapi.com'
    }
  },
  app: {
    head: {
      title: 'Netflix',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ""
        },
        { rel: 'preconnect', href: "https://fonts.googleapis.com" }
      ]
    },
  },

  css: ['@/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/_variables.scss";'
        }
      },

    }
  }
})
