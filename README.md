# RaNuclear

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
