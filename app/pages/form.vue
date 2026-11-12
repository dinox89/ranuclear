<template>
  <section class="mx-auto max-w-2xl px-6 py-16">
    <h1 class="text-3xl font-bold md:text-4xl">Nous contacter</h1>
    <p class="mt-3 text-lg text-muted">
      Une question ? Écrivez-nous.
    </p>

    <p v-if="auth.estConnecte">

  Connecté en tant que {{ auth.user.nom }} ({{ auth.user.email }})
</p>

<p v-else>
  Personne de connecté.
</p>


 <UButton
      v-if="!auth.estConnecte"
   
      @click="auth.connecter()"
    >
      Se connecter
    </UButton>
    <UButton
      v-else
      
      @click="auth.deconnecter()"
    >
      Se déconnecter
    </UButton>



    <ContactForm class="mt-10" />
  </section>
</template>

<script setup>

const auth = useUserStore()

useHead({ title: 'Nous contacter' })
</script>
