export type Utilisateur = {
  nom: string
  email?: string
}

const UTILISATEUR_EN_DUR: Utilisateur = {
  nom: 'MARCO',
  email: 'marco1223@gmail.com',
}

export const useUserStore = defineStore('user', () => {
  const user = ref<Utilisateur | null>(null)

  const estConnecte = computed(() => !!user.value)

  function connecter() {
    user.value = UTILISATEUR_EN_DUR
  }

  function deconnecter() {
    user.value = null
  }

  return { user, estConnecte, connecter, deconnecter }
})
