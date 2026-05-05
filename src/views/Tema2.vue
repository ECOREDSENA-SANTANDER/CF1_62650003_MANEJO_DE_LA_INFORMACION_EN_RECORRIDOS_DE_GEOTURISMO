<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 2
      h1 Sistema turístico y normativa
    
    .bloque-texto-g.color-acento-botones.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 El sistema turístico es la forma en que se relacionan los elementos que hacen posible la actividad turística en un destino. No se compone únicamente del visitante o del lugar que se recorre, sino de la articulación entre la demanda turística, la oferta turística, el producto turístico y la estructura de servicios y atractivos que permiten vivir la experiencia. Desde esta perspectiva, el turismo funciona como una red organizada en la que intervienen recursos, servicios, infraestructura y actores del territorio (Boullón, 2006). 
    
    .cajon.color-acento-contenido.p-lg-5.p-4.mb-5(data-aos="fade-left")
      p.mb-0 En este sistema, la demanda turística está representada por las personas que viajan y buscan descansar, aprender, conocer lugares o vivir experiencias culturales y naturales. Por su parte, la oferta turística comprende los atractivos, servicios, actividades y facilidades que el destino pone a disposición para responder a esas necesidades. Cuando estos elementos se articulan de manera adecuada, se configura el producto turístico, entendido como la experiencia integral que recibe el visitante (Boullón, 2006). 

    p.mb-5(data-aos="fade-right") Comprender el sistema turístico permite reconocer que la actividad turística depende de la interacción entre múltiples componentes. Por esta razón, su análisis facilita entender que la calidad de la experiencia turística no depende de un solo servicio, sino de la coordinación entre transporte, alojamiento, alimentación, atractivos, comunidad local e infraestructura del destino (Boullón, 2006). 

    .titul.mb-5(data-aos="fade-left")
      img.titul__icono-montania(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Elementos del sistema turístico
      img.titul__icono-avion(:src="require('@/assets/curso/tema1/sub1.svg')" alt='')
    
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-lg-12
        .row.justify-content-center.align-items-stretch(data-aos="fade-right")
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-primario.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 1
              h5.mb-4.text-center Demanda turística
              p.text-center.mx-3 Personas que viajan y buscan experiencias de descanso, aprendizaje, recreación o conocimiento.
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-secundario.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 2
              h5.mb-4.text-center Oferta turística
              p.text-center.mx-3 Atractivos, servicios, actividades y facilidades que el destino ofrece al visitante.
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-acento-contenido.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 3
              h5.mb-4.text-center Producto turístico
              p.text-center.mx-3 Experiencia integral que resulta de la articulación entre recursos y servicios.
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-acento-botones.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 3
              h5.mb-4.text-center Estructura de servicios y atractivos
              p.text-center.mx-3 Infraestructura, recursos y apoyos que hacen posible la experiencia turística.

    .titul.mb-5(data-aos="fade-left")
      img.titul__icono-montania(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Producto turístico
      img.titul__icono-avion(:src="require('@/assets/curso/tema1/sub1.svg')" alt='')
    
    .bg1.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-lg-0.mb-0(data-aos="fade-right")
          img(src='@/assets/curso/tema2/2.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .p-4
            p.mb-4(data-aos="fade-left") El producto turístico corresponde a la integración de atractivos, servicios, recursos, infraestructura, facilidades y experiencias que se articulan en un destino para responder a las necesidades e intereses del visitante. En este sentido, no se limita a un servicio aislado, sino que reúne diversos componentes del territorio y de la oferta turística, de manera que la experiencia turística pueda desarrollarse de forma organizada y satisfactoria. Por ello, el producto turístico surge de la articulación entre los recursos del territorio, los atractivos, los servicios y las condiciones que hacen posible la experiencia del visitante (Boullón, 2006). 
            p.mb-0(data-aos="fade-right") Desde esta perspectiva, el producto turístico incluye tanto los atractivos naturales, culturales y sociales del destino como los servicios de alojamiento, alimentación, recreación, ocio, transporte e información que hacen posible la visita. De esta manera, su valor no depende únicamente del lugar, sino también de la manera en que se organiza la experiencia para el visitante y de la articulación entre los actores que participan en el destino (Boullón, 2006). 

    .titul.mb-5(data-aos="fade-left")
      img.titul__icono-montania(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Elementos del producto turístico
      img.titul__icono-avion(:src="require('@/assets/curso/tema1/sub1.svg')" alt='')
    
    .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-right")
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg6.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema2/3.svg' alt='AvatarTop')
          h4.mb-4.text-center Atractivos
          p.mb-0.text-center Recursos naturales, culturales y sociales que motivan la visita al destino.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg6.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema2/4.svg' alt='AvatarTop')
          h4.mb-4.text-center Servicios
          p.mb-0.text-center Alojamiento, alimentación, recreación, información, transporte y atención al visitante.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg6.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema2/5.svg' alt='AvatarTop')
          h4.mb-4.text-center Infraestructura y facilidades
          p.mb-0.text-center Vías de acceso, conectividad, señalización, servicios públicos y apoyos para la experiencia turística.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg6.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema2/6.svg' alt='AvatarTop')
          h4.mb-4.text-center Experiencia del visitante
          p.mb-0.text-center Resultado de la articulación entre recursos, servicios y organización del destino.


    .titul.mb-5(data-aos="fade-left")
      img.titul__icono-montania(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Ley General de Turismo
      img.titul__icono-avion(:src="require('@/assets/curso/tema1/sub1.svg')" alt='')
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.bloque1.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/7.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-5
            p.mb-0 La Ley General de Turismo en Colombia se estableció mediante la Ley 300 de 1996 y posteriormente fue modificada por disposiciones como la Ley 2068 de 2020. Este marco normativo orienta el desarrollo del turismo en el país y lo reconoce como una actividad importante para el desarrollo económico, social y cultural de los territorios, así como una función social que requiere especial protección por parte del Estado (Congreso de la República de Colombia, 1996, 2020).
            br
            br
            p.mb-0 En este sentido, la normativa turística promueve la conservación del patrimonio cultural, natural y social, la calidad de los servicios, la competitividad de los destinos, la protección al turista, la coordinación entre actores públicos y privados, la libertad de empresa, la competencia leal y la inclusión en el acceso a la actividad turística. De esta manera, la Ley General de Turismo orienta un turismo organizado, sostenible, competitivo e incluyente, que beneficie tanto a los visitantes como a las comunidades receptoras (Congreso de la República de Colombia, 1996, 2020).

    .titul.mb-5(data-aos="fade-left")
      img.titul__icono-montania(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Principales orientaciones de la Ley General de Turismo
      img.titul__icono-avion(:src="require('@/assets/curso/tema1/sub1.svg')" alt='')
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        SlyderF(columnas="col-md-6 col-xl-4")
          .tarjeta.tarjeta--slyder.b1.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema2/8.svg' alt='AvatarTop')
            h4.text-center.mb-3 Desarrollo territorial
            p.mb-0.text-center Promueve el desarrollo económico, social y cultural de los territorios y comunidades.
          .tarjeta.tarjeta--slyder.b1.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema2/8.svg' alt='AvatarTop')
            h4.text-center.mb-3 Conservación del patrimonio
            p.mb-0.text-center Incentiva la protección del patrimonio cultural, natural y social.
          .tarjeta.tarjeta--slyder.b1.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema2/8.svg' alt='AvatarTop')
            h4.text-center.mb-3 Calidad y competitividad
            p.mb-0.text-center Busca fortalecer la calidad de los servicios y la competitividad de los destinos.
          .tarjeta.tarjeta--slyder.b1.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema2/8.svg' alt='AvatarTop')
            h4.text-center.mb-3 Protección al turista
            p.mb-0.text-center Promueve servicios idóneos, seguros y acordes con los derechos del consumidor.
          .tarjeta.tarjeta--slyder.b1.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema2/8.svg' alt='AvatarTop')
            h4.text-center.mb-3 Coordinación institucional
            p.mb-0.text-center Fomenta la articulación entre Estado, sector privado y entidades territoriales.
          .tarjeta.tarjeta--slyder.b1.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema2/8.svg' alt='AvatarTop')
            h4.text-center.mb-3 Inclusión y accesibilidad
            p.mb-0.text-center Impulsa la eliminación de barreras para el disfrute de la actividad turística.

    p.mb-0(data-aos="fade-right") Comprender la Ley General de Turismo permite reconocer que la actividad turística no solo depende de los servicios y atractivos, sino también de un marco normativo que orienta su organización, regulación y desarrollo responsable.


</template>

<script>
export default {
  name: 'Tema2',
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
