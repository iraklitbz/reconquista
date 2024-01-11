import { version } from './package.json'
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  modules: [
      'nuxt-icons',
      '@nuxtjs/tailwindcss',
      '@nuxt/image',
      'nuxt-graphql-client',
      '@nuxtjs/strapi'
  ],
  tailwindcss: {
    exposeConfig: true,
    cssPath: '~/assets/scss/main.scss'
  },
  runtimeConfig: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    public: {
      version
    }
  }
})
