<template>
  <form class="flex flex-col gap-4" @submit.prevent="onSubmit">
    <input
      id="firstname"
      v-model="firstname"
      type="text"
      placeholder="Votre prénom"
      class="w-full rounded-md border border-gray-300 px-3 py-2"
    />

    <input
      id="email"
      v-model="email"
      type="email"
      placeholder="Votre email"
      class="w-full rounded-md border border-gray-300 px-3 py-2"
    />

    <button type="submit">Envoyer</button>

    <p v-if="meteo" class="text-sm text-muted">
      Météo Bordeaux : {{ meteo.current?.temperature_2m }} °C
    </p>
  </form>
</template>

<script setup>
const { $meteoApi } = useNuxtApp()

const firstname = ref('')
const email = ref('')

const { data: meteo } = await useAsyncData('meteo', () => $meteoApi.getMeteo())

// formulaire front seul : onSubmit empêche le rechargement natif de la page
function onSubmit() {}
</script>
