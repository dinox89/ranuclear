# RaNuclear

Je conçois un moteur compact, sobre et pilotable par API : puissance continue, 94 % de rendement, 18 kg.

Site vitrine en Nuxt 4 + Nuxt UI + Tailwind 4 : pages moteur et contact, formulaire front seul, météo en SSR via Open-Meteo.

## Lancer en local

    npm install
    npm run dev

Le site répond sur http://localhost:3000.

## Pages

    /         accueil et tableau comparatif
    /moteur   fiche technique et parcours d'intégration
    /form     contact, session Pinia et météo de Bordeaux

## Structure

    app/components/navigation/   header et footer du site
    app/components/contact/      formulaire de contact
    app/layouts/default.vue      chrome commun
    app/pages/                   une page par route
    app/stores/                  session utilisateur (Pinia)
    app/plugins/                 météo (Open-Meteo)
    app/assets/                  css, images, icônes, médias

## Build

    npm run build
    node .output/server/index.mjs
