<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bloque-texto-g.color-acento-contenido.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 El turismo es una actividad de gran importancia social, cultural y económica, ya que favorece el encuentro entre personas, territorios y manifestaciones patrimoniales. Su desarrollo ha permitido dinamizar las economías locales, fortalecer la identidad regional y valorar los recursos naturales y culturales presentes en los destinos. En este contexto, comprender sus fundamentos, su evolución y los elementos que integran el sistema turístico resulta clave para interpretar de manera responsable la actividad turística en el territorio.
    
    .cajon.color-acento-contenido.p-lg-5.p-4.mb-5(data-aos="fade-left")
      p.mb-0 En esa misma línea, el guía de turismo cumple una función esencial como mediador entre el visitante y el entorno, debido a que orienta, informa, interpreta y promueve experiencias significativas de acuerdo con la normativa aplicable y las buenas prácticas del sector. Por ello, su formación requiere el reconocimiento del sistema turístico, del patrimonio y de los recursos que hacen posible una experiencia turística pertinente, segura y de calidad.
    
    p.mb-5(data-aos="fade-right") De manera particular, el geoturismo adquiere relevancia porque promueve la valoración de la geodiversidad, del paisaje y del patrimonio asociado al territorio, integrando componentes naturales, geológicos y culturales. A través de este enfoque, el aprendiz podrá reconocer la importancia de los geoparques, del patrimonio y de los recursos y atractivos turísticos como base para comprender la actividad del geoturismo en la región.
    
    .row.justify-content-center.align-items-center(data-aos="fade-left")         
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
