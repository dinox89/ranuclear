<template>
  <header class="flex items-center justify-between h-24 px-6 border-b border-default">
    <NuxtLink to="/" class="flex items-center gap-3 text-2xl font-semibold">
      <img src="~/assets/images/logo.png" alt="RaNuclear" class="h-14 w-auto" />
      <span>RaNuclear</span>
    </NuxtLink>

    <nav class="flex items-center gap-6 text-lg">
      <NuxtLink v-for="lien in liens" :key="lien.label" :to="lien.to">{{ lien.label }}</NuxtLink>
    </nav>
  </header>
</template>

<script setup>
const liens = [
  { label: 'Moteur', to: '/moteur' },
  { label: 'A Propos', to: '/' },
  { label: 'Pourquoi Nous ?', to: '/#pourquoi' },
  { label: 'Nous Contacter', to: '/form' }
]
</script>
