<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 La caracterización y planeación de las actividades de geoturismo aplicadas a los atractivos turísticos de la región requiere una comprensión integral del turismo como fenómeno social, económico, cultural y ambiental. Reconocer su evolución, tipologías, características, cadena de valor e impactos permite analizar el territorio de manera organizada, identificando la relación entre los visitantes, la comunidad local, los servicios turísticos y los recursos naturales y culturales que conforman la experiencia turística.
    p.mb-5 Asimismo, el estudio del sistema turístico, el rol del guía de turismo y la interpretación del patrimonio geológico fortalecen la capacidad para planear recorridos con sentido educativo, inclusivo y sostenible. Comprender conceptos como geoturismo, patrimonio, geoparque, geositios, geoeducación, geointerpretación y evaluación permite valorar los atractivos geoturísticos no solo por su belleza paisajística, sino también por su importancia científica, cultural y formativa, promoviendo prácticas responsables que favorezcan la conservación del territorio y el desarrollo turístico regional.
    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual sobre la caracterización y planeación de actividades de geoturismo aplicadas a los atractivos turísticos de la región. Presenta cinco ejes temáticos: turismo, sistema turístico, guía de turismo, geoturismo y patrimonio, y recursos y atractivos geoturísticos. Cada eje incluye conceptos clave como evolución, tipos, impactos, demanda, oferta, normativa, perfil del guía, competencias, patrimonio, geoparque, geositios, geointerpretación, geoeducación y evaluación.")
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
