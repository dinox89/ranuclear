export default defineNuxtPlugin(() => {
  const URL = 'https://api.open-meteo.com/v1/forecast'


   const meteoApi = {
    getMeteo: async () =>
      await $fetch(URL, {

          // Coordonnée GPS Bordeaux  heure et tt
        params: {
          latitude: 44.8378,
          longitude: -0.5792,
          current: 'temperature_2m',
          timezone: 'auto' 
        }
      })
  }

  return { provide: { meteoApi } }
})
