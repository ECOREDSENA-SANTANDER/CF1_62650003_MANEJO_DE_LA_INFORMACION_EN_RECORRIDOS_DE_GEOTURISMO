<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 4
      h1 Geoturismo y patrimonio 
    
    .bloque-texto-g.color-acento-botones.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 El geoturismo y el patrimonio permiten comprender la relación entre el territorio, sus elementos naturales y culturales, y la actividad turística. Estos temas ayudan a reconocer que el valor de un destino no depende solo de sus servicios o de su capacidad de recepción, sino también de la interpretación adecuada del paisaje, de los procesos naturales y de las manifestaciones patrimoniales presentes en el lugar. En este sentido, el estudio del geoturismo y del patrimonio favorece una visión más amplia del territorio, orientada a la valoración, la conservación y el aprovechamiento turístico responsable (UNESCO, 2024).

    .cajon.color-acento-contenido.p-lg-5.p-4.mb-5(data-aos="fade-left")
      p.mb-0 Comprender estos conceptos permite identificar cómo la actividad turística puede contribuir a la educación, a la interpretación del entorno y a la construcción de experiencias más significativas para los visitantes. De esta manera, el análisis del geoturismo y del patrimonio fortalece propuestas turísticas más conscientes, sostenibles y conectadas con las características del territorio (UNESCO, 2024).

    .titul.mb-5(data-aos="fade-right")
      img.titul__icono-montania(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Patrimonio: concepto y tipos
      img.titul__icono-avion(:src="require('@/assets/curso/tema1/sub1.svg')" alt='')
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-7
        p.mb-4 El patrimonio hace referencia al conjunto de bienes, valores, saberes y manifestaciones que una sociedad reconoce como parte de su memoria, su identidad y su historia. En este sentido, el patrimonio no solo tiene un valor cultural, sino también social y simbólico, porque permite comprender la relación de las comunidades con su territorio y con los elementos que consideran significativos para su preservación y transmisión a futuras generaciones (Ministerio de las Culturas, las Artes y los Saberes, 2024).
        p.mb-0 En Colombia, el patrimonio puede entenderse desde diferentes tipos. El patrimonio cultural reúne los bienes materiales e inmateriales que evocan la memoria y la identidad ancestral. A su vez, el patrimonio cultural material comprende aquellos bienes perceptibles por los sentidos, como muebles e inmuebles, mientras que el patrimonio cultural inmaterial se relaciona con costumbres, saberes, tradiciones, rituales, lenguas, expresiones orales y prácticas culturales transmitidas en la vida cotidiana. Por su parte, el patrimonio arqueológico está conformado por bienes muebles o inmuebles originarios de culturas desaparecidas o pertenecientes a épocas pasadas, así como por restos humanos y orgánicos asociados a dichas culturas (Ministerio de las Culturas, las Artes y los Saberes, 2024).  
      .col-lg-5.d-none.d-lg-block
        .bg10.p-4
          img(src='@/assets/curso/tema4/2.png', alt='')

    .cajon.color-ace.p-lg-5.p-4.mb-5(data-aos="fade-right")
      p.mb-0 Comprender el patrimonio y sus tipos permite reconocer que la actividad turística no debe limitarse a mostrar lugares o elementos llamativos, sino que también debe contribuir a su valoración, respeto y conservación. De esta manera, el análisis del patrimonio fortalece la interpretación del territorio y favorece experiencias turísticas más conscientes y responsables (Ministerio de las Culturas, las Artes y los Saberes, 2024).

    .titul.mb-5(data-aos="fade-left")
      img.titul__icono-montania(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Tipos de patrimonio
      img.titul__icono-avion(:src="require('@/assets/curso/tema1/sub1.svg')" alt='')
    
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-lg-12
        .row.justify-content-center.align-items-stretch(data-aos="fade-right")
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-primario.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 1
              h5.mb-4.text-center.mx-3 Patrimonio cultural
              p.text-center.mx-3 Conjunto de bienes, valores y manifestaciones que una sociedad reconoce como parte de su memoria e identidad.
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-secundario.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 2
              h5.mb-4.text-center.mx-3 Patrimonio cultural material
              p.text-center.mx-3 Bienes perceptibles por los sentidos, como objetos, construcciones, monumentos y otros elementos muebles e inmuebles.
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-acento-contenido.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 3
              h5.mb-4.text-center.mx-3 Patrimonio cultural inmaterial
              p.text-center.mx-3 Saberes, costumbres, tradiciones, rituales, lenguas y expresiones transmitidas en la vida cotidiana de las comunidades.
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-acento-botones.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 3
              h5.mb-4.text-center.mx-3 Patrimonio arqueológico
              p.text-center.mx-3 Bienes y restos asociados a culturas desaparecidas o a épocas pasadas con valor histórico y cultural.

    .titul.mb-5(data-aos="fade-left")
      img.titul__icono-montania(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Geoparque: concepto y características
      img.titul__icono-avion(:src="require('@/assets/curso/tema1/sub1.svg')" alt='')
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.bloque1.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/3.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-5
            p.mb-0 Un geoparque es un territorio geográfico unificado que contiene lugares y paisajes de relevancia geológica internacional, gestionados bajo un enfoque integral de protección, educación y desarrollo sostenible. Esta visión permite comprender que el geoparque no se limita a reunir elementos geológicos de valor, sino que también articula el patrimonio natural y cultural del territorio para favorecer su interpretación, conservación y aprovechamiento responsable (UNESCO, 2024).
            br
            br
            p.mb-0 En este sentido, el geoparque se relaciona con una mirada amplia del territorio, en la que intervienen la geodiversidad, la biodiversidad, la dimensión cultural y los factores sociopolíticos. Estas dimensiones muestran que el valor de un geoparque no depende únicamente de sus características físicas, sino también de la manera en que se integra con la comunidad, con las dinámicas productivas y con las acciones de conservación, educación y turismo (UNESCO, 2024).

    .cajon.color-acento-contenido.p-lg-5.p-4.mb-5(data-aos="fade-left")
      p.mb-0 Comprender el concepto de geoparque permite reconocer que estos territorios fortalecen la identidad local, promueven nuevas oportunidades vinculadas al geoturismo y contribuyen a la protección del patrimonio geológico. De esta manera, el geoparque se constituye en un espacio que favorece la valoración del territorio y el desarrollo de experiencias turísticas más sostenibles y significativas (UNESCO, 2024).

    .titul.mb-5(data-aos="fade-right")
      img.titul__icono-montania(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Dimensiones del geoparque
      img.titul__icono-avion(:src="require('@/assets/curso/tema1/sub1.svg')" alt='')
    
    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg6.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema4/4.svg' alt='AvatarTop')
          h4.mb-4.text-center Dimensión geodiversidad
          p.mb-0.text-center Permite comprender los elementos físicos y geológicos que dan valor al territorio. Incluye geología, geomorfología, hidrología y otros elementos físicos del territorio.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg6.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema4/5.svg' alt='AvatarTop')
          h4.mb-4.text-center Dimensión biodiversidad
          p.mb-0.text-center Relaciona el geoparque con los ecosistemas y con la diversidad natural del lugar.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg6.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema4/6.svg' alt='AvatarTop')
          h4.mb-4.text-center Dimensión cultural
          p.mb-0.text-center Integra la relación entre el territorio, las prácticas culturales, la arquitectura, la agricultura y otras expresiones humanas.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg6.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema4/7.svg' alt='AvatarTop')
          h4.mb-4.text-center Dimensión sociopolítica
          p.mb-0.text-center Se relaciona con la conservación, la gestión del territorio, el turismo y la participación de distintos actores.

    .titul.mb-5(data-aos="fade-right")
      img.titul__icono-montania(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Geoturismo: concepto y relación con el territorio
      img.titul__icono-avion(:src="require('@/assets/curso/tema1/sub1.svg')" alt='')
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema4/8.png', alt='Texto que describa la imagen')
      .col-lg-7
        .bg3.p-4.p-lg-5
          p.mb-0 El geoturismo se relaciona con el aprovechamiento turístico de los elementos geológicos, del paisaje y de los procesos naturales presentes en un territorio. Su comprensión permite reconocer que la actividad turística no depende únicamente de los servicios o de la movilidad del visitante, sino también de la interpretación adecuada de las características físicas, naturales y culturales del lugar. En este sentido, el geoturismo favorece una mirada más amplia del territorio, en la que se articulan conocimiento, conservación, planificación e interpretación turística (UNESCO, 2024).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        LineaTiempoE.color-primario
          .row.justify-content-center.align-items-center(titulo="Paso 1" subtitulo="")
            .col-lg-2.col-md-3.col-6.mb-3
              img.img-t(data-aos="fade-right")(src='@/assets/curso/tema4/9.svg', alt='Texto que describa la imagen')
            .col-lg-10.col-md-9.mb-3
              h4.mb-4 Base del geoturismo
              p.mb-0 El geoturismo se apoya en elementos del territorio como el paisaje, las formaciones del terreno, las rocas, los sedimentos y los fósiles.
          .row.justify-content-center.align-items-center(titulo="Paso 2" subtitulo="")
            .col-lg-2.col-md-3.col-6.mb-3
              img.img-t(data-aos="fade-right")(src='@/assets/curso/tema4/10.svg', alt='Texto que describa la imagen')
            .col-lg-10.col-md-9.mb-3
              h4.mb-4 Procesos naturales
              p.mb-0 El territorio se forma y transforma por procesos como la actividad tectónica, los procesos ígneos, la meteorización, la erosión y el depósito.
          .row.justify-content-center.align-items-center(titulo="Paso 3" subtitulo="")
            .col-lg-2.col-md-3.col-6.mb-3
              img.img-t(data-aos="fade-right")(src='@/assets/curso/tema4/11.svg', alt='Texto que describa la imagen')
            .col-lg-10.col-md-9.mb-3
              h4.mb-4 Relación con la actividad turística
              p.mb-0 El geoturismo se articula con atractivos, actividades, excursiones, interpretación, alojamiento y gestión del destino.
          .row.justify-content-center.align-items-center(titulo="Paso 4" subtitulo="")
            .col-lg-2.col-md-3.col-6.mb-3
              img.img-t(data-aos="fade-right")(src='@/assets/curso/tema4/12.svg', alt='Texto que describa la imagen')
            .col-lg-10.col-md-9.mb-3
              h4.mb-4 Aplicación en el territorio
              p.mb-0 La interpretación adecuada de estos elementos favorece experiencias turísticas más educativas, responsables y sostenibles.

    .titul.mb-5(data-aos="fade-left")
      img.titul__icono-montania(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Planificación del geoturismo
      img.titul__icono-avion(:src="require('@/assets/curso/tema1/sub1.svg')" alt='')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .bg11.p-4.p-lg-5
          p.mb-0.mt-lg-2.mb-lg-3 La planificación del geoturismo permite organizar el aprovechamiento turístico del territorio a partir de sus valores geológicos, paisajísticos, culturales y comunitarios. Para ello, requiere procesos de participación, evaluación del potencial geoturístico, definición de objetivos, gestión de recursos, desarrollo de productos y seguimiento de las acciones, de manera que las actividades turísticas se orienten hacia la conservación, la sostenibilidad y la participación de la comunidad (UNESCO, 2024).
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema4/13.png', alt='Texto que describa la imagen')
      
    .titul.mb-5(data-aos="fade-right")
      img.titul__icono-montania(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Elementos de la planificación del geoturismo
      img.titul__icono-avion(:src="require('@/assets/curso/tema1/sub1.svg')" alt='')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        LineaTiempoE.color-primario
          .row.justify-content-center.align-items-center(titulo="Paso 1" subtitulo="")
            .col-lg-2.col-md-3.col-6.mb-3
              img.img-t(data-aos="fade-right")(src='@/assets/curso/tema4/14.svg', alt='Texto que describa la imagen')
            .col-lg-10.col-md-9.mb-3
              h4.mb-4 Participación de actores
              p.mb-0 Involucrar comunidad, expertos, organizaciones y demás partes interesadas del territorio.
          .row.justify-content-center.align-items-center(titulo="Paso 2" subtitulo="")
            .col-lg-2.col-md-3.col-6.mb-3
              img.img-t(data-aos="fade-right")(src='@/assets/curso/tema4/15.svg', alt='Texto que describa la imagen')
            .col-lg-10.col-md-9.mb-3
              h4.mb-4 Evaluación del potencial
              p.mb-0 Reconocer valores geológicos, paisajísticos, culturales y condiciones del territorio.
          .row.justify-content-center.align-items-center(titulo="Paso 3" subtitulo="")
            .col-lg-2.col-md-3.col-6.mb-3
              img.img-t(data-aos="fade-right")(src='@/assets/curso/tema4/16.svg', alt='Texto que describa la imagen')
            .col-lg-10.col-md-9.mb-3
              h4.mb-4 Plan de acción
              p.mb-0 Definir visión, objetivos, acciones, responsables, cronograma y presupuesto.
          .row.justify-content-center.align-items-center(titulo="Paso 4" subtitulo="")
            .col-lg-2.col-md-3.col-6.mb-3
              img.img-t(data-aos="fade-right")(src='@/assets/curso/tema4/17.svg', alt='Texto que describa la imagen')
            .col-lg-10.col-md-9.mb-3
              h4.mb-4 Gestión y seguimiento
              p.mb-0 Fortalecer recursos, visitantes, conservación, monitoreo y mejora continua.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/tema4/18.svg', alt='Texto que describa la imagen')
        .row.justify-content-center.g-0
          .col-lg-12
            .tarjeta.bg12.p-4.rounded-0.h-100
              .tarjeta.bg-white.p-4.p-lg-5.h-100
                TarjetaAudio.color-acento-botones.mb-4(
                texto="<em>Podcast:</em> ¿Qué es el geoturismo y por qué aporta valor a los atractivos turísticos de la región?"
                :audio="require('@/assets/actividad/audio/end-game-success.mp3')"
            ).mb-4
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.mb-0 #[em Podcast:] Para fortalecer la comprensión del geoturismo en el territorio, se sugiere escuchar el siguiente recurso de audio: ¿Qué es el geoturismo y por qué aporta valor a los atractivos turísticos de la región?



</template>

<script>
export default {
  name: 'Tema4',
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
