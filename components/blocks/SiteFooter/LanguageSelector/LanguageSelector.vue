<script setup lang="ts">
import { LocaleObject } from 'root/configUtils'

const nuxtI18n = useI18n()
const locale = nuxtI18n.locale
const locales = nuxtI18n.locales as globalThis.ComputedRef<LocaleObject[]>
</script>

<template>
  <!-- eslint-disable vuejs-accessibility/form-control-has-label -->
  <select v-model="locale" class="language-selector" role="listbox">
    <option
      v-for="currentLocale in locales"
      :key="currentLocale.code"
      :value="currentLocale.code"
      :selected="currentLocale.code === locale"
    >
      {{ currentLocale.name }}
    </option>
  </select>
</template>

<style lang="postcss" scoped>
.language-selector {
  @apply bg-white border border-current rounded;
  @apply flex items-center px-2 py-2 relative;
  @apply w-32;
}
.language-selector > option {
  @apply flex items-center py-2;
}
</style>
