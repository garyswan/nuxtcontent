// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  srcDir: "src/",
  content: {
    // documentDriven: true, // https://content.nuxtjs.org/guide/writing/document-driven
    markdown: {
      // anchorLinks: false,
    },
  },
  // Tailwind
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
