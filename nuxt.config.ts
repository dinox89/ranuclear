// https://nuxt.com/docs/api/configuration/nuxt-config
  import { defineNuxtConfig } from 'nuxt/config'

  export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },

    modules: ['@nuxt/ui', '@pinia/nuxt', '@vee-validate/nuxt'],

    // options du module @vee-validate/nuxt
    veeValidate: {
      // auto-import des composants (VeeForm, VeeField...) et composables (useForm, useField...)
      autoImports: true,
    },

    css: ['~/assets/css/index.css'],


    components: [
      {
        path: '~/components', pathPrefix: false
      }
    ]
  })
