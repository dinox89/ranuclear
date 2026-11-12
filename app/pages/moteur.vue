<template>
  <div class="mx-auto max-w-3xl px-6 py-16">
    <h1 class="text-4xl font-bold md:text-5xl">Découvrir le moteur</h1>
    <p class="mt-5 text-lg text-muted">
      RaNuclear conçoit un moteur compact, sobre et pilotable. Cette page résume
      ce qu'il apporte, ses caractéristiques et la façon de le mettre en route.
    </p>

    <section class="mt-14">
      <h2 class="text-2xl font-bold">Ce qu'il change</h2>
      <ul class="mt-4 list-disc space-y-2 pl-6 text-lg">
        <li>Il travaille à pleine charge sans coupure, au lieu de limiter la puissance à quelques secondes.</li>
        <li>Il consomme moins à puissance égale, donc la même batterie tient plus longtemps.</li>
        <li>Il se pilote par API, donc il s'intègre à vos outils au lieu d'imposer les siens.</li>
      </ul>
    </section>

    <section class="mt-14">
      <h2 class="text-2xl font-bold">Fiche technique</h2>

      <table class="mx-auto mt-6 w-full border-collapse text-left">
        <tbody>
          <tr>
            <th class="border border-neutral-300 p-3">Puissance continue</th>
            <td class="border border-neutral-300 p-3">240 kW</td>
          </tr>
          <tr>
            <th class="border border-neutral-300 p-3">Rendement</th>
            <td class="border border-neutral-300 p-3">94 %</td>
          </tr>
          <tr>
            <th class="border border-neutral-300 p-3">Poids</th>
            <td class="border border-neutral-300 p-3">18 kg</td>
          </tr>
          <tr>
            <th class="border border-neutral-300 p-3">Refroidissement</th>
            <td class="border border-neutral-300 p-3">liquide, circuit fermé</td>
          </tr>
          <tr>
            <th class="border border-neutral-300 p-3">Communication</th>
            <td class="border border-neutral-300 p-3">CAN, Modbus, HTTP</td>
          </tr>
          <tr>
            <th class="border border-neutral-300 p-3">Entretien</th>
            <td class="border border-neutral-300 p-3">1 révision par an</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mt-14">
      <h2 class="text-2xl font-bold">Comment ça marche</h2>
      <ol class="mt-4 list-decimal space-y-2 pl-6 text-lg">
        <li>Vous décrivez l'usage : charge attendue, encombrement, environnement.</li>
        <li>Nous validons la configuration sur banc et livrons le moteur paramétré.</li>
        <li>Vous le branchez, l'API expose l'état et les réglages en temps réel.</li>
      </ol>
    </section>

    <section class="mt-14">
      <h2 class="text-2xl font-bold">Passer à l'étape suivante</h2>
      <p class="mt-4 text-lg text-muted">
        Dites-nous ce que vous voulez motoriser, nous répondons avec un devis
        et un délai.
      </p>
      <UButton to="/form" size="xl" color="primary" class="mt-6 rounded-xl px-8 py-4 text-lg">
        Nous contacter
      </UButton>
    </section>
  </div>
</template>

<script setup>
useHead({ title: 'Découvrir le moteur' })
</script>
