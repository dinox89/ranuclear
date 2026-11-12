<template>
  <section class="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-16 md:flex-row">

    <img
      src="~/assets/images/moteur.png"
      alt="Moteur RaNuclear"
      class="aspect-square w-80 shrink-0 rounded-3xl object-cover shadow-xl md:w-96"
    />

    <div class="flex-1">


    

      <h1 class="mt-3 text-4xl font-bold md:text-5xl">
        Le moteur qui redéfinit la performance :
      </h1>

      <p class="mt-5 max-w-2xl text-lg text-muted">
        RaNuclear développe une nouvelle génération de moteurs, pensée pour
        réunir puissance, fiabilité et sobriété dans un seul produit.
      </p>

  
      <p class="mt-4 max-w-2xl text-lg text-muted">
        Découvrez comment notre technologie s'intègre à vos projets les plus
        ambitieux, 
       du premier prototype à la mise en production.

      </p>

      <div class="mt-8 flex flex-wrap gap-4">
        <UButton to="/moteur" size="xl" color="primary" class="rounded-xl px-8 py-4 text-lg">
          Découvrir le moteur
        </UButton>

        <UButton
          to="/#pourquoi"
          size="xl"
          color="neutral"
          variant="soft"
          class="rounded-[20px] px-8 py-4 text-lg"
         >
          À propos de nous
        </UButton>
      </div>



    </div>

  </section>

  <section id="pourquoi" class="mx-auto max-w-6xl px-6 py-16 scroll-mt-24">
    <h2 class="text-center text-3xl font-bold md:text-4xl">
      Pourquoi RaNuclear ?
    </h2>

    <table class="mx-auto mt-10 w-full max-w-3xl border-collapse text-left">
      <thead>
        <tr>
          <th class="border border-neutral-300 p-3">Critère</th>
          <th class="border border-neutral-300 p-3">RaNuclear</th>
          <th class="border border-neutral-300 p-3">Moteur classique</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-neutral-300 p-3">Puissance</td>
          <td class="border border-neutral-300 p-3">240 kW en continu</td>
          <td class="border border-neutral-300 p-3">pic de 30 secondes</td>
        </tr>
        <tr>
          <td class="border border-neutral-300 p-3">Rendement</td>
          <td class="border border-neutral-300 p-3">94 %</td>
          <td class="border border-neutral-300 p-3">78 %</td>
        </tr>
        <tr>
          <td class="border border-neutral-300 p-3">Poids</td>
          <td class="border border-neutral-300 p-3">18 kg</td>
          <td class="border border-neutral-300 p-3">35 kg</td>
        </tr>
        <tr>
          <td class="border border-neutral-300 p-3">Entretien</td>
          <td class="border border-neutral-300 p-3">1 révision par an</td>
          <td class="border border-neutral-300 p-3">tous les 500 cycles</td>
        </tr>
        <tr>
          <td class="border border-neutral-300 p-3">Intégration</td>
          <td class="border border-neutral-300 p-3">API et capteurs standards</td>
          <td class="border border-neutral-300 p-3">boîtier propriétaire</td>
        </tr>
      </tbody>
    </table>
  </section>

</template>

<script setup>
useHead({
  title: 'RaNuclear, le moteur qui redéfinit la performance',
  meta: [
    {
      name: 'description',
      content: 'RaNuclear conçoit des moteurs compacts, sobres et pilotables par API : puissance continue, rendement de 94 %, 18 kg.'
    }
  ]
})
</script>

<style scoped>
</style>
