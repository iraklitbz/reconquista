import { version } from './package.json'
export default defineNuxtConfig({
  runtimeConfig: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    public: {
      version
    }
  }
})
