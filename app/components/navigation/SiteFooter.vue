<template>
  <footer class="flex items-center justify-between h-14 px-6 border-t border-default text-sm text-muted">
    <p>{{ annee }} RaNuclear</p>
    <p>Tous droits réservés</p>
  </footer>
</template>

<script setup>
const annee = new Date().getFullYear()
</script>
