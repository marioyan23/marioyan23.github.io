// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  css: ['assets/scss/main.scss'],
  pages: true,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: true,
    baseURL: '/', // Заменить на /portfolio для dev,
    buildAssetsDir: 'assets',
  },
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',             // Главная
        '/figma',        // figma.yml
        '/designs',        // figma.yml
        '/media-designer'// media-designer.yml
      ]
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    // '@nuxt/image',
    // '@nuxt/ui'
  ]
})