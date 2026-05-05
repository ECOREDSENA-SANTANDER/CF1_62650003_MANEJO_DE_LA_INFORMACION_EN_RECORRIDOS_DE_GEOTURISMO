<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 5
      h1 Recursos y atractivos turísticos
    
    .bg9.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-lg-0.mb-0(data-aos="fade-right")
          img(src='@/assets/curso/tema5/1.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .p-4
            p.mb-4(data-aos="fade-left") Los recursos y atractivos turísticos permiten reconocer el valor de los elementos geológicos y paisajísticos dentro de la actividad turística. En Colombia, esta geodiversidad se manifiesta en sistemas montañosos, cuevas, yacimientos fosilíferos, volcanes y aguas termales, los cuales no solo ofrecen escenarios visuales, sino oportunidades reales para la interpretación, la educación y la conservación.
            p.mb-0(data-aos="fade-right") Desde esta perspectiva, el patrimonio geológico posee relevancia científica y didáctica. Su valor no depende únicamente de la apariencia visual, sino de su capacidad para comunicar procesos naturales y fortalecer la relación entre el conocimiento y el territorio. Esta visión permite identificar cómo los geositios pueden integrarse a la oferta turística de manera organizada, favoreciendo el diseño de propuestas más conscientes, responsables y sostenibles.

    .titul.mb-5(data-aos="fade-left")
      img.titul__icono-montania(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Valor de los recursos y atractivos turísticos
      img.titul__icono-avion(:src="require('@/assets/curso/tema1/sub1.svg')" alt='')
    
    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-right")
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg6.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema5/2.svg' alt='AvatarTop')
          h4.mb-4.text-center Recurso geoturístico
          p.mb-0.text-center Elemento del territorio con potencial para ser interpretado, valorado y aprovechado dentro de la actividad turística.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg6.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema5/3.svg' alt='AvatarTop')
          h4.mb-4.text-center Atractivo geoturístico
          p.mb-0.text-center Lugar o elemento que motiva la visita por su valor paisajístico, educativo, científico o cultural.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg6.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema5/4.svg' alt='AvatarTop')
          h4.mb-4.text-center Valor educativo y científico
          p.mb-0.text-center Permite conocer procesos naturales, características del territorio e historia geológica del lugar.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg6.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema5/5.svg' alt='AvatarTop')
          h4.mb-4.text-center Valor turístico y de conservación
          p.mb-0.text-center Favorece experiencias significativas y fortalece la protección y valoración responsable del territorio.

    .titul.mb-5(data-aos="fade-left")
      img.titul__icono-montania(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Geositios: concepto, características y funciones
      img.titul__icono-avion(:src="require('@/assets/curso/tema1/sub1.svg')" alt='')
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.bloque1.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/6.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-5
            p.mb-0 Los geositios son áreas o lugares específicos de interés científico basados en la geología o en la geomorfología, que pueden servir para fines como la investigación, la conservación, la educación, el turismo y el desarrollo sostenible. Su importancia radica en que permiten comprender mejor la historia de la Tierra y los procesos naturales que han dado forma al paisaje de un territorio. En este sentido, los geositios constituyen una base relevante para la interpretación del entorno y para el desarrollo de propuestas de geoturismo.
            br
            br
            p.mb-0 Entre sus características, los geositios presentan un valor especial para comprender la evolución geológica del territorio, ya sea por sus minerales, estructuras, formas del relieve, rasgos fisiográficos o procesos visibles en el paisaje. Además, pueden abarcar desde áreas muy pequeñas hasta extensiones de varios kilómetros cuadrados y ofrecer información valiosa sobre fenómenos como el vulcanismo, la erosión, la sedimentación, las aguas subterráneas, la paleontología o la estratigrafía. Por ello, los geositios no solo tienen valor científico, sino también potencial educativo y turístico.

    .cajon.color-acento-contenido.p-lg-5.p-4.mb-5(data-aos="fade-left")
      p.mb-0 Los geositios cumplen funciones importantes porque dan testimonio de cambios climáticos, procesos tectónicos y transformaciones ocurridas a lo largo de la historia de la Tierra. También permiten observar procesos geológicos recientes y actuales, por lo que se constituyen en espacios útiles para la investigación, la educación y la valoración del patrimonio geológico. Sin embargo, no todos los geositios pueden considerarse de inmediato recursos geoturísticos, ya que para ello requieren condiciones adecuadas de protección, conservación, preparación y manejo de visitantes. Esta visión permite reconocer que los geositios forman parte esencial del geopatrimonio y que su uso turístico exige planificación y responsabilidad.

    .titul.mb-5(data-aos="fade-right")
      img.titul__icono-montania(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Geositios: elementos clave
      img.titul__icono-avion(:src="require('@/assets/curso/tema1/sub1.svg')" alt='')
    
    .row.justify-content-center.align-items-center.mb-lg-5.mb-4
      .col-lg-12
        .row.justify-content-center.align-items-stretch(data-aos="fade-right")
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-primario.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 1
              h5.mb-4.text-center.mx-3 Concepto
              p.text-center.mx-3 Los geositios son lugares de interés geológico o geomorfológico con valor para la investigación, la educación, la conservación y el turismo.
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-secundario.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 2
              h5.mb-4.text-center.mx-3 Características
              p.text-center.mx-3 Presentan rasgos especiales del territorio, como minerales, estructuras, formas del relieve y procesos geológicos visibles.
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-acento-contenido.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 3
              h5.mb-4.text-center.mx-3 Funciones
              p.text-center.mx-3 Permiten comprender la historia de la Tierra, observar procesos naturales y fortalecer la valoración del patrimonio geológico.
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-acento-botones.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 3
              h5.mb-4.text-center.mx-3 Relación con el geoturismo
              p.text-center.mx-3 Pueden integrarse a propuestas turísticas cuando cuentan con condiciones adecuadas de protección, interpretación y manejo de visitantes.

    .titul.mb-5(data-aos="fade-left")
      img.titul__icono-montania(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Categorías y criterios de clasificación de geositios
      img.titul__icono-avion(:src="require('@/assets/curso/tema1/sub1.svg')" alt='')
    
    .bloque-texto-g.color-acento-botones.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/7.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 Los geositios pueden clasificarse de acuerdo con sus características geológicas, geomorfológicas, paisajísticas, culturales y funcionales. Esta clasificación permite reconocer que no todos tienen el mismo valor ni responden a un único propósito dentro del territorio, ya que algunos destacan por su importancia científica, otros por su potencial educativo, otros por su atractivo paisajístico y otros por su relación con elementos culturales o recreativos. En este sentido, categorizar los geositios facilita su interpretación, su valoración y su posible integración a propuestas de geoturismo. 
        br
        br
        p.mb-0 Entre las categorías de geositios se encuentran, por ejemplo, cavernas, grutas, sitios paleontológicos, mineralógicos, litológicos, paisajes, volcanes, sistemas geotérmicos, espacios hidrológicos, estructuras tectónicas y lugares vinculados a la minería o al patrimonio cultural. Estas categorías permiten identificar la diversidad de elementos del territorio que pueden ser objeto de interpretación y de uso turístico responsable. De igual manera, algunos geositios se destacan por sus rasgos científicos, mientras que otros sobresalen por su valor histórico, arqueológico, espiritual, educativo o artístico.

    .cajon.color-acento-contenido.p-lg-5.p-4.mb-5(data-aos="fade-left")
      p.mb-0 La clasificación de los geositios también requiere considerar criterios que orienten su selección y evaluación. Entre estos se encuentran la representatividad, la integridad, la singularidad, el conocimiento científico disponible, el potencial educativo, la accesibilidad, la seguridad, la conexión cultural y espiritual, el paisaje y el potencial interpretativo. Estos criterios permiten valorar si un geositio cuenta con condiciones adecuadas para fines científicos, educativos o geoturísticos, y facilitan una toma de decisiones más organizada para su conservación y aprovechamiento. 

    p.mb-5(data-aos="fade-right") Comprender las categorías y criterios de clasificación de geositios permite reconocer que su incorporación a la actividad turística no debe hacerse de manera improvisada. Por el contrario, requiere análisis, valoración y planificación, de modo que el uso turístico se desarrolle de forma responsable, segura y coherente con las características del territorio. 

    .titul.mb-5(data-aos="fade-left")
      img.titul__icono-montania(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Clasificación de los geositios
      img.titul__icono-avion(:src="require('@/assets/curso/tema1/sub1.svg')" alt='')
    
    .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-right")
      .col-lg-4.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4.mb-md-4
        .bg13.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema5/8.svg')
          h3.mb-4.text-center Categorías de geositios
          p.mb-4 Los geositios pueden agruparse según sus características físicas, geológicas, paisajísticas, culturales o funcionales.
          p.mb-0 • Cavernas y grutas, paleontológicos, mineralógicos, litológicos, paisaje, volcanes, geotérmicos, hidrología, tectónica, minería, cultural.
      .col-lg-4.col-md-6.ps-lg-0.pe-lg-0.ps-md-0.mb-lg-0.mb-4.mb-md-4
        .bg14.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema5/9.svg')
          h3.mb-4.text-center Rasgos de valor
          p.mb-4 Su importancia puede ser científica, educativa, histórica, cultural, espiritual o paisajística.
          p.mb-0 • Valor científico, valor histórico-arqueológico, valor espiritual, valor instructivo-educativo, valor artístico o cultural.
      .col-lg-4.col-md-6.ps-lg-0.ps-md-0.mb-lg-0.mb-4.mb-md-0
        .bg15.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema5/10.svg')
          h3.mb-4.text-center Criterios de clasificación
          p.mb-4 La selección y valoración de un geositio depende de criterios que permitan analizar su potencial y sus condiciones de uso.
          p.mb-0 • Representatividad, integridad, singularidad, conocimiento científico, potencial educativo, accesibilidad, seguridad, conexión cultural y espiritual, paisaje, potencial interpretativo.

    .titul.mb-5(data-aos="fade-left")
      img.titul__icono-montania(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Geointerpretación y geoeducación
      img.titul__icono-avion(:src="require('@/assets/curso/tema1/sub1.svg')" alt='')
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema5/10.png', alt='Texto que describa la imagen')
      .col-lg-8
        .bg8.p-4.p-lg-4
          p.mb-4 La geointerpretación cumple un papel fundamental en el desarrollo del geoturismo, porque permite comunicar el valor del patrimonio geológico de una manera comprensible para visitantes, estudiantes y comunidades. En este sentido, su propósito no consiste únicamente en transmitir datos o información técnica, sino en facilitar la comprensión del territorio mediante un lenguaje claro, accesible y adecuado para distintos públicos. Esta visión favorece una relación más cercana entre las personas y los elementos geológicos del entorno, al tiempo que fortalece su valoración y reconocimiento. 
          p.mb-0 Por su parte, la geoeducación contribuye al reconocimiento de la geodiversidad y del geopatrimonio en distintos contextos y niveles de formación. Su importancia radica en que ayuda a comprender la relevancia de los recursos del territorio, del paisaje y de los procesos naturales, así como las acciones necesarias para su protección y aprovechamiento responsable. De esta manera, la geoeducación no solo fortalece el conocimiento del entorno, sino que también promueve actitudes más conscientes frente al cuidado de los lugares de interés geoturístico.
      
    .cajon.color-ace.p-lg-5.p-4.mb-5(data-aos="fade-left")
      p.mb-0 Cuando el geoturismo se orienta desde una perspectiva sostenible, la geointerpretación y la geoeducación favorecen experiencias más significativas y mejor organizadas. Además, contribuyen a que las actividades turísticas se desarrollen de forma controlada, evitando prácticas que puedan afectar el geopatrimonio o generar sobreexplotación de los recursos del territorio. Por ello, estos procesos son esenciales para fortalecer una relación equilibrada entre turismo, conocimiento, conservación y comunidad. 

    .titul.mb-5(data-aos="fade-right")
      img.titul__icono-montania(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Aportes de la geointerpretación y la geoeducación
      img.titul__icono-avion(:src="require('@/assets/curso/tema1/sub1.svg')" alt='')
    
    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-left")
      .col-md-6.col-lg-4.mb-lg-0.mb-4
        .tarjeta-avatar
          img.img-a.img-t(src='@/assets/curso/tema5/11.svg' alt='')
          .tarjeta.bg16
            .p-4
              h4.mb-4.text-center Geointerpretación
              p.mb-0.text-center.mt-lg-3 Comunica el valor del patrimonio geológico con lenguaje claro, accesible y comprensible para distintos públicos.
      .col-md-6.col-lg-4.mb-lg-0.mb-4
        .tarjeta-avatar
          img.img-a.img-t(src='@/assets/curso/tema5/12.svg' alt='')
          .tarjeta.bg16
            .p-4
              h4.mb-4.text-center Geoeducación
              p.mb-0.text-center.mt-lg-3 Favorece el reconocimiento de la geodiversidad y del geopatrimonio en diferentes contextos y niveles de formación.
      .col-md-6.col-lg-4.mb-lg-0.mb-4
        .tarjeta-avatar
          img.img-a.img-t(src='@/assets/curso/tema5/13.svg' alt='')
          .tarjeta.bg16
            .p-4
              h4.mb-4.text-center Conservación y uso responsable
              p.mb-0.text-center.mt-lg-3 Promueve experiencias turísticas más conscientes, organizadas y orientadas a la protección del territorio.

    .titul.mb-5(data-aos="fade-right")
      img.titul__icono-montania(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Evaluación e inventario de geositios
      img.titul__icono-avion(:src="require('@/assets/curso/tema1/sub1.svg')" alt='')
    
    .bg9.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-lg-0.mb-0(data-aos="fade-right")
          img(src='@/assets/curso/tema5/14.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .p-4
            p.mb-4(data-aos="fade-left") La incorporación de los geositios a la actividad turística requiere un proceso previo de evaluación e inventario que permita reconocer sus valores, sus condiciones de acceso y su potencial de uso. Este proceso es importante porque no todos los geositios están preparados de inmediato para recibir visitantes; por ello, es necesario analizar sus características geológicas, su estado de conservación, su relevancia científica, educativa y cultural, así como las condiciones de seguridad e interpretación que ofrece el territorio. De esta manera, la evaluación permite tomar decisiones más responsables sobre su protección, su aprovechamiento y su integración a propuestas de geoturismo.
            p.mb-0(data-aos="fade-right") De acuerdo con las orientaciones de UNESCO, la evaluación de geositios comprende acciones como la investigación preliminar, la participación de actores del territorio, la identificación y selección de los geositios, su clasificación, la documentación de sus características, la gestión de visitantes y el monitoreo para su conservación. Este proceso también implica elaborar fichas informativas que reúnan datos relevantes sobre cada sitio, tales como su valor geológico, contexto histórico y cultural, accesibilidad, seguridad y potencial interpretativo. Estas fichas facilitan la organización de la información y apoyan la planificación de recorridos, actividades educativas y usos turísticos.

    .cajon.color-secundario.p-lg-5.p-4.mb-5(data-aos="fade-left")
      p.mb-0 Asimismo, la valoración de los geositios debe considerar distintos tipos de uso, entre ellos el científico, el educativo y el geoturístico o recreativo. Para ello, se tienen en cuenta criterios como la representatividad, la integridad, la singularidad, el conocimiento científico disponible, el potencial educativo, la accesibilidad, la seguridad, la conexión cultural y espiritual, el paisaje y el potencial interpretativo. Comprender estos criterios permite reconocer que la planificación geoturística no depende solo del atractivo visual del lugar, sino de un análisis más amplio que articula conocimiento, conservación y uso responsable del territorio. 

    .titul.mb-5(data-aos="fade-right")
      img.titul__icono-montania(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Proceso de evaluación e inventario de geositios
      img.titul__icono-avion(:src="require('@/assets/curso/tema1/sub1.svg')" alt='')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        LineaTiempoE.color-primario
          .row.justify-content-center.align-items-center(titulo="Paso 1" subtitulo="")
            .col-lg-2.col-md-3.col-6.mb-3
              img.img-t(data-aos="fade-right")(src='@/assets/curso/tema5/15.svg', alt='Texto que describa la imagen')
            .col-lg-10.col-md-9.mb-3
              h4.mb-4 Investigación preliminar
              p.mb-0 Revisar información existente, mapas, estudios y posibles actores vinculados al territorio.
          .row.justify-content-center.align-items-center(titulo="Paso 2" subtitulo="")
            .col-lg-2.col-md-3.col-6.mb-3
              img.img-t(data-aos="fade-right")(src='@/assets/curso/tema5/16.svg', alt='Texto que describa la imagen')
            .col-lg-10.col-md-9.mb-3
              h4.mb-4 Identificación y selección
              p.mb-0 Localizar geositios, documentar sus atributos y priorizar los más valiosos según criterios definidos.
          .row.justify-content-center.align-items-center(titulo="Paso 3" subtitulo="")
            .col-lg-2.col-md-3.col-6.mb-3
              img.img-t(data-aos="fade-right")(src='@/assets/curso/tema5/17.svg', alt='Texto que describa la imagen')
            .col-lg-10.col-md-9.mb-3
              h4.mb-4 Clasificación y documentación
              p.mb-0 Organizar los geositios por categorías y elaborar fichas informativas con datos geológicos, culturales, de acceso y seguridad.
          .row.justify-content-center.align-items-center(titulo="Paso 4" subtitulo="")
            .col-lg-2.col-md-3.col-6.mb-3
              img.img-t(data-aos="fade-right")(src='@/assets/curso/tema5/18.svg', alt='Texto que describa la imagen')
            .col-lg-10.col-md-9.mb-3
              h4.mb-4 Gestión y conservación
              p.mb-0 Definir estrategias de interpretación, manejo de visitantes, monitoreo y protección del sitio.

    .titul.mb-4(data-aos="fade-left")
      img.titul__icono-montania(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Criterios de uso de los geositios
      img.titul__icono-avion(:src="require('@/assets/curso/tema1/sub1.svg')" alt='')
    
    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-right")
      .col-md-6.col-lg-4.mb-lg-0.mb-4
        .tarjeta-avatar
          img.img-a.img-t(src='@/assets/curso/tema5/19.svg' alt='')
          .tarjeta.bg16.my-1
            .p-4
              h4.mb-4.text-center Uso científico
              p.mb-0.text-center.mt-lg-3 Representatividad, integridad, singularidad y conocimiento científico.
      .col-md-6.col-lg-4.mb-lg-0.mb-4
        .tarjeta-avatar
          img.img-a.img-t(src='@/assets/curso/tema5/20.svg' alt='')
          .tarjeta.bg16.my-1
            .p-4
              h4.mb-4.text-center Uso educativo
              p.mb-0.text-center.mt-lg-3 Potencial educativo, geodiversidad, accesibilidad, seguridad y conexión cultural.
      .col-md-6.col-lg-4.mb-lg-0.mb-4
        .tarjeta-avatar
          img.img-a.img-t(src='@/assets/curso/tema5/21.svg' alt='')
          .tarjeta.bg16.my-1
            .p-4
              h4.mb-4.text-center Uso geoturístico o recreativo
              p.mb-0.text-center.mt-lg-3  Paisaje, potencial interpretativo, accesibilidad y seguridad.

    .cajon.color-ace.p-lg-5.p-4.mb-0(data-aos="fade-left")
      p.mb-0 En conjunto, el análisis del geoturismo, del patrimonio y de los geositios permite comprender que el aprovechamiento turístico del territorio exige conocimiento, valoración, planificación y responsabilidad. Desde esta perspectiva, la identificación, evaluación e interpretación de los elementos geológicos y paisajísticos fortalece propuestas turísticas más conscientes, seguras y coherentes con la conservación del entorno. Así, este componente aporta bases para reconocer el territorio no solo como escenario de visita, sino como un espacio de aprendizaje, protección y desarrollo turístico sostenible.


</template>

<script>
export default {
  name: 'Tema5',
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
