import { version } from './package.json'
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  modules: [
      'nuxt-icons',
      '@nuxtjs/tailwindcss',
      '@nuxt/image',
      '@nuxtjs/apollo',
      '@nuxtjs/strapi'
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.GQL_HOST || '/graphql'
      }
    },
  },
  components: [
    '~/components',
    '~/components/Menu',
    '~/components/ArticleBody',
    '~/components/Gallery'
  ],
  tailwindcss: {
    exposeConfig: true,
    cssPath: '~/assets/scss/main.scss'
  },
  routeRules: {
    '/blog': { redirect: '/blog/1' }
  },
  runtimeConfig: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    public: {
      version,
      CMS_URL: process.env.CMS_URL
    }
  }
})
