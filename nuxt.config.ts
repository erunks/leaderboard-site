import { resolve } from 'path'
import { config } from 'dotenv-safe'

import { defineNuxtConfig } from 'nuxt/config'
import { supportedLocales, localeMessages } from './configUtils'

// Safely loads the .env file, making sure all the variables are defined
config()

export const nuxtAliases = {
  blocks: resolve(__dirname, './components/blocks'),
  composables: resolve(__dirname, './composables'),
  elements: resolve(__dirname, './components/elements'),
  layouts: resolve(__dirname, './layouts'),
  lib: resolve(__dirname, './lib'),
  pages: resolve(__dirname, './pages'),
  root: resolve(__dirname, './'),
}

export default defineNuxtConfig({
  alias: nuxtAliases,
  app: {
    // Global page headers: https://v3.nuxtjs.org/api/configuration/nuxt.config#head
    head: {
      link: [
        {
          href: '/favicon.ico',
          rel: 'icon',
          type: 'image/x-icon',
        },
      ],
      meta: [
        { charset: 'utf-8' },
        { content: 'width=device-width, initial-scale=1', name: 'viewport' },
        { content: '', hid: 'description', name: 'description' },
        { content: 'telephone=no', name: 'format-detection' },
      ],
      title: 'leaderboards.gg',
    },
  },
  devServerHandlers: [],

  // TODO: look into lazy loading i18n
  i18n: {
    config: {
      fallbackLocale: 'en',
      legacy: false,
      locale: 'en',
      messages: localeMessages,
    },
    defaultLocale: 'en',
    locales: supportedLocales,
  },

  ignore: ['**/*.test.ts', '**/node_modules', '.output', '.dist'],

  modules: [
    // https://tailwindcss.com
    [
      '@nuxtjs/tailwindcss',
      {
        configPath: 'tailwind.config.js',
        cssPath: './assets/css/tailwind.css',
      },
    ],
    'unplugin-icons/nuxt',
    '@nuxtjs/i18n',
  ],

  runtimeConfig: {
    public: {
      BACKEND_BASE_URL: process.env.BACKEND_BASE_URL,
    },
  },

  typescript: {
    // Disabled as using Volar take over mode is the reccomended way to do this
    shim: false,
    strict: true,
  },
})
