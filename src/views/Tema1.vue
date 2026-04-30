<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 1
      h1 Turismo: concepto y evolución
      
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.bloque1.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-5
            p.mb-0 El turismo es un fenómeno social, cultural y económico relacionado con el desplazamiento de personas hacia lugares distintos de su entorno habitual por motivos personales, profesionales o de negocios (ONU Turismo, s. f.). En Colombia, la Ley 2068 de 2020 lo define como el conjunto de actividades que realizan las personas durante sus viajes y estancias en lugares distintos a su entorno habitual por un período consecutivo inferior a un año, con fines, entre otros, de ocio, cultura, salud, eventos, convenciones o negocios (Congreso de la República de Colombia, 2020).
            br
            br
            p.mb-0 Comprender el turismo implica reconocer que no se limita al viaje, sino que también involucra actividades, servicios, relaciones con las comunidades receptoras y dinámicas económicas, sociales y culturales que inciden en el desarrollo de los destinos. Por ello, su estudio permite valorar su aporte al desarrollo local y a la gestión responsable del territorio (ONU Turismo, s. f.; Congreso de la República de Colombia, 2020).

    .titul.mb-5(data-aos="fade-left")
      img.titul__icono-montania(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Evolución del turismo
      img.titul__icono-avion(:src="require('@/assets/curso/tema1/sub1.svg')" alt='')

    .bg1.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-lg-0.mb-0(data-aos="fade-right")
          img(src='@/assets/curso/tema1/2.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .p-4
            img.mb-3.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/3.svg', alt='')
            p.mb-4(data-aos="fade-left") La evolución del turismo permite comprender que esta actividad no apareció de manera repentina, sino que se consolidó a lo largo del tiempo por la influencia de factores sociales, culturales, económicos y tecnológicos. En la antigüedad ya existían desplazamientos con fines religiosos, comerciales y recreativos; sin embargo, fue en épocas posteriores cuando comenzaron a organizarse mejor los viajes y a fortalecerse los servicios asociados a ellos (Acerenza, 2006).
            p.mb-0(data-aos="fade-right") Durante la Edad Media, los viajes disminuyeron por las dificultades de movilidad y la inseguridad de los caminos, aunque continuaron las peregrinaciones religiosas. Más adelante, con el renacimiento y el surgimiento del #[em Grand Tour], se fortaleció el viaje como experiencia formativa y cultural. Posteriormente, la Revolución Industrial impulsó el turismo gracias al desarrollo del ferrocarril, el crecimiento de la clase media y la disponibilidad de tiempo libre (Acerenza, 2006).

    .cajon.color-primario.p-lg-5.p-4.mb-5(data-aos="fade-left")
      p.mb-0 En los siglos XIX y XX, el turismo se expandió con mayor rapidez por el desarrollo de nuevos medios de transporte, la organización de excursiones, la consolidación del transporte aéreo y la diversificación de destinos. En la actualidad, el turismo se reconoce como una actividad estratégica para los territorios, debido a su capacidad para dinamizar la economía, promover el intercambio cultural y valorar el patrimonio natural y cultural (Acerenza, 2006).
    
    .titul.mb-5(data-aos="fade-left")
      img.titul__icono-montania(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Principales hitos históricos de la actividad turística
      img.titul__icono-avion(:src="require('@/assets/curso/tema1/sub1.svg')" alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        LineaTiempoE.color-primario
          .row.justify-content-center.align-items-center(titulo="Hito 1" subtitulo="")
            .col-lg-2.col-md-3.col-6.mb-3
              img.img-t(data-aos="fade-right")(src='@/assets/curso/tema1/4.svg', alt='Texto que describa la imagen')
            .col-lg-10.mb-3
              h4.mb-4 Antiguedad
              p.mb-0 Primeros desplazamientos con fines religiosos, comerciales y recreativos.
          .row.justify-content-center.align-items-center(titulo="Hito 2" subtitulo="")
            .col-lg-2.col-md-3.col-6.mb-3
              img.img-t(data-aos="fade-right")(src='@/assets/curso/tema1/5.svg', alt='Texto que describa la imagen')
            .col-lg-10.mb-3
              h4.mb-4 Edad media
              p.mb-0 Predominio de peregrinaciones y reducción de los viajes por la inseguridad en los caminos.
          .row.justify-content-center.align-items-center(titulo="Hito 3" subtitulo="")
            .col-lg-2.col-md-3.col-6.mb-3
              img.img-t(data-aos="fade-right")(src='@/assets/curso/tema1/6.svg', alt='Texto que describa la imagen')
            .col-lg-10.mb-3
              h4.mb-4 Renacimiento
              p.mb-0 Surgen viajes formativos y culturales como el #[em Grand Tour.]
          .row.justify-content-center.align-items-center(titulo="Hito 4" subtitulo="")
            .col-lg-2.col-md-3.col-6.mb-3
              img.img-t(data-aos="fade-right")(src='@/assets/curso/tema1/7.svg', alt='Texto que describa la imagen')
            .col-lg-10.mb-3
              h4.mb-4 Revolución industrial
              p.mb-0 El ferrocarril, el crecimiento económico y el tiempo libre impulsan el turismo moderno.
          .row.justify-content-center.align-items-center(titulo="Hito 5" subtitulo="")
            .col-lg-2.col-md-3.col-6.mb-3
              img.img-t(data-aos="fade-right")(src='@/assets/curso/tema1/8.svg', alt='Texto que describa la imagen')
            .col-lg-10.mb-3
              h4.mb-4 Siglos XX y XXI
              p.mb-0 El turismo se masifica por el transporte aéreo, la diversificación de destinos y la expansión de servicios.

    .cajon.color-secundario.p-lg-5.p-4.mb-5(data-aos="fade-left")
      p.mb-0 Reconocer los principales hitos de la evolución del turismo permite comprender que esta actividad ha cambiado de acuerdo con las necesidades de las personas, las condiciones de movilidad y las transformaciones de la sociedad. Desde los viajes con fines religiosos y comerciales hasta la consolidación del turismo moderno, su desarrollo ha estado relacionado con factores como el transporte, la seguridad, el tiempo libre y la organización de servicios. Esta trayectoria histórica explica por qué el turismo ocupa hoy un lugar importante en la economía, la cultura y la valoración de los territorios (Acerenza, 2006).
    
    .titul.mb-5(data-aos="fade-left")
      img.titul__icono-montania(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Tipos de turismo
      img.titul__icono-avion(:src="require('@/assets/curso/tema1/sub1.svg')" alt='')

    .bloque-texto-g.color-acento-contenido.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/9.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 Los tipos de turismo permiten clasificar las distintas formas en que se desarrolla esta actividad según la motivación del viaje, las características del territorio y las experiencias que buscan los visitantes. Esta clasificación permite reconocer que el turismo no responde a una sola práctica, sino que integra diversas modalidades relacionadas con la cultura, la naturaleza, la salud, los negocios, la recreación y el bienestar (Ministerio de Comercio, Industria y Turismo [MinCIT], 2024).
        br 
        br
        p.mb-0 En Colombia, el Ministerio de Comercio, Industria y Turismo reconoce, entre otras, las siguientes tipologías: turismo cultural, de naturaleza, rural, de aventura, de bienestar, médico, marino costero, MICE y turismo sector LBGTIQ+. Cada una responde a intereses particulares del visitante y exige condiciones específicas de organización, prestación del servicio e interpretación del territorio (MinCIT, 2024).
    
    p.mb-5 Comprender estas tipologías facilita interpretar mejor la oferta turística de un destino, identificar oportunidades para el desarrollo local y reconocer la diversidad de experiencias que pueden construirse a partir de los recursos naturales, culturales y sociales del territorio (MinCIT, 2024).

    .titul.mb-5(data-aos="fade-left")
      img.titul__icono-montania(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Principales tipos de turismo
      img.titul__icono-avion(:src="require('@/assets/curso/tema1/sub1.svg')" alt='')
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-3.d-none.d-lg-block
        img.img-t(src="@/assets/curso/tema1/10.png", alt="alt")
      .col-lg-9
        SlyderF(columnas="col-md-6 col-xl-4")
          .tarjeta.tarjeta--slyder.b2.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema1/11.svg' alt='AvatarTop')
            .bg2.p-1.mb-4
              h4.text-center.text-white.mb-0.ps-1.pe-1 Turismo Cultural
            p.mb-0.text-center Motivación centrada en aprender, descubrir, experimentar y consumir atractivos o productos culturales materiales e inmateriales del destino. 
          .tarjeta.tarjeta--slyder.b2.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema1/12.svg' alt='AvatarTop')
            .bg2.p-1.mb-4
              h4.text-center.text-white.mb-0.ps-1.pe-1 Turismo de Naturaleza
            p.mb-0.text-center Turismo basado en la naturaleza, cuya motivación principal es la observación y apreciación del entorno natural y de las culturas tradicionales. 
          .tarjeta.tarjeta--slyder.b2.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema1/13.svg' alt='AvatarTop')
            .bg2.p-1.mb-4
              h4.text-center.text-white.mb-0.ps-1.pe-1 Turismo Rural
            p.mb-0.text-center Subproducto del turismo de naturaleza orientado a la recreación, el descanso y la actividad en espacios rurales o campestres. 
          .tarjeta.tarjeta--slyder.b2.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema1/14.svg' alt='AvatarTop')
            .bg2.p-1.mb-4
              h4.text-center.text-white.mb-0.ps-1.pe-1 Turismo de Aventura
            p.mb-0.text-center Actividades lúdico-recreativas alrededor del aire, la tierra y el agua, con riesgo controlado y contacto directo con la naturaleza. 
          .tarjeta.tarjeta--slyder.b2.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema1/15.svg' alt='AvatarTop')
            .bg2.p-1.mb-4
              h4.text-center.text-white.mb-0.ps-1.pe-1 Turismo de Bienestar
            p.mb-0.text-center Tipología de viaje orientada al equilibrio mental, emocional, espiritual y físico del viajero, en conexión con la naturaleza, la cultura y la comunidad. 
          .tarjeta.tarjeta--slyder.b2.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema1/16.svg' alt='AvatarTop')
            .bg2.p-1.mb-4
              h4.text-center.text-white.mb-0.ps-1.pe-1 Turismo Médico
            p.mb-0.text-center Viajes motivados por tratamientos médicos de baja, media o alta complejidad, integrados a planes turísticos complementarios. 
          .tarjeta.tarjeta--slyder.b2.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema1/17.svg' alt='AvatarTop')
            .bg2.p-1.mb-4
              h4.text-center.text-white.mb-0.ps-1.pe-1 Turismo Marino Costero
            p.mb-0.text-center Actividades turísticas activas y pasivas en zonas de litoral continental, insular y espacios marinos, con servicios e infraestructura en tierra. 
          .tarjeta.tarjeta--slyder.b2.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema1/18.svg' alt='AvatarTop')
            .bg2.p-1.mb-4
              h4.text-center.text-white.mb-0.ps-1.pe-1 Turismo MICE
            p.mb-0.text-center Turismo de reuniones, incentivos, congresos y exhibiciones, con alto impacto socioeconómico en los destinos. 
          .tarjeta.tarjeta--slyder.b2.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema1/19.svg' alt='AvatarTop')
            .bg2.p-1.mb-4
              h4.text-center.text-white.mb-0.ps-1.pe-1 Turismo sector LBGTIQ+
            p.mb-0.text-center Segmento de viajeros que busca destinos con respeto por la diversidad, inclusión y seguridad. 
    
    p.mb-5 Reconocer los principales tipos de turismo facilita la comprensión de la diversidad de experiencias que pueden desarrollarse en un territorio y permite identificar cómo la oferta turística se organiza de acuerdo con las motivaciones, los recursos y las características de cada destino (MinCIT, 2024).

    .titul.mb-5(data-aos="fade-left")
      img.titul__icono-montania(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Características del turismo
      img.titul__icono-avion(:src="require('@/assets/curso/tema1/sub1.svg')" alt='')
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.bloque2.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/20.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-5
            p.mb-0 Las características del turismo permiten comprender que esta actividad no se limita al desplazamiento de personas, sino que también involucra motivaciones, servicios e interacción con los territorios. En este sentido, el turismo se reconoce como un fenómeno social, cultural y económico relacionado con el movimiento de personas hacia lugares distintos de su entorno habitual por motivos personales, profesionales o de negocios (ONU Turismo, 2024). 
            br
            br
            p.mb-0 En Colombia, la Ley 2068 de 2020 establece que el turismo comprende el conjunto de actividades que realizan las personas durante sus viajes y estancias en lugares diferentes a su entorno habitual por un período consecutivo inferior a un año, con fines, entre otros, de ocio, cultura, salud, eventos, convenciones o negocios (Congreso de la República de Colombia, 2020).

    .cajon.color-acento-botones.p-lg-5.p-4.mb-5(data-aos="fade-left")
      p.mb-0 Reconocer estas características facilita interpretar cómo se organiza la actividad turística y por qué requiere condiciones adecuadas para su desarrollo. También permite comprender que el turismo integra visitantes, destinos, atractivos, servicios y experiencias, y que su planificación debe responder a criterios de organización, calidad y sostenibilidad (Boullón, 2006; Ministerio de Comercio, Industria y Turismo, 2021).
    
    .row.justify-content-center.align-items-end.mb-4(data-aos="fade-left")
      .col-lg-12
        TabsA.color-acento-botones.mb-0
          .tarjeta.color-a.p-4(titulo="Desplazamiento fuera del entorno habitual")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 El turismo implica el movimiento de personas hacia lugares distintos de su entorno habitual.
          .tarjeta.color-a.p-4(titulo="Diversidad de motivaciones")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Los viajes turísticos pueden realizarse por fines como ocio, cultura, salud, eventos, convenciones o negocios.
          .tarjeta.color-a.p-4(titulo="Fenómeno social, cultural y económico")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 El turismo influye en la vida social, en la cultura y en la economía de los territorios.
          .tarjeta.color-a.p-4(titulo="Interacción con el territorio")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 La actividad turística genera relaciones entre visitantes, comunidad receptora, atractivos, patrimonio y servicios.
          .tarjeta.color-a.p-4(titulo="Articulación de elementos turísticos")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 El turismo requiere la integración de atractivos, servicios, infraestructura, información y experiencias.
          .tarjeta.color-a.p-4(titulo="Orientación hacia la calidad y la sostenibilidad")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Su desarrollo debe responder a criterios de organización, calidad y sostenibilidad.

    p.mb-5 Comprender las características del turismo permite reconocer que esta actividad requiere una adecuada articulación entre visitantes, territorio, servicios y recursos. Esta visión favorece el análisis de la oferta turística y ayuda a interpretar por qué el turismo debe gestionarse de manera organizada, responsable y sostenible (Boullón, 2006; Ministerio de Comercio, Industria y Turismo, 2021).

    .titul.mb-5(data-aos="fade-left")
      img.titul__icono-montania(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Cadena de valor del turismo
      img.titul__icono-avion(:src="require('@/assets/curso/tema1/sub1.svg')" alt='')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        img(src='@/assets/curso/tema1/21.png', alt='Texto que describa la imagen')
      .col-lg-8
        .bg3.p-4.p-lg-5
          p.mb-0.mb-lg-3.mt-lg-3 La cadena de valor del turismo comprende un conjunto de actividades primarias y de apoyo que resultan fundamentales para el funcionamiento estratégico del sector turístico. Entre las actividades primarias se encuentran la formulación de políticas, la planificación integrada, el desarrollo de productos turísticos, su presentación al mercado, la promoción, el #[em marketing], la distribución, la venta y la prestación de servicios en los destinos. A su vez, las actividades de apoyo incluyen el transporte, la infraestructura, el desarrollo del talento humano, la tecnología, los sistemas y otros bienes y servicios complementarios que inciden de manera significativa en el valor de la experiencia turística (ONU Turismo, s. f.).

    p.mb-5 Comprender la cadena de valor del turismo permite reconocer que esta actividad no depende de un solo actor, sino de la articulación entre procesos, servicios, recursos e instituciones que intervienen en la experiencia del visitante. Esta visión facilita identificar cómo se organiza la oferta turística y por qué la coordinación entre sus componentes influye en la competitividad, la calidad y la sostenibilidad de los destinos (ONU Turismo, s. f.).

    .titul.mb-5(data-aos="fade-left")
      img.titul__icono-montania(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Elementos de la cadena de valor del turismo
      img.titul__icono-avion(:src="require('@/assets/curso/tema1/sub1.svg')" alt='')
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .bg1.p-4.d-none.d-md-block
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              img(src='@/assets/curso/tema1/22.svg', alt='Texto que describa la imagen')
            .tarjeta.color-acento-contenido.p-4(x="6.8%" y="26.3%" numero="")
              .h5.mb-3 Formulación de políticas y planificación integrada
              p.mb-0 Orienta la organización y el desarrollo del sector turístico.
            .tarjeta.color-acento-contenido.p-4(x="6.8%" y="45.9%" numero="")
              .h5.mb-3 Desarrollo de productos y presentación al mercado
              p.mb-0 Permite diseñar y posicionar la oferta turística según las características del destino.
            .tarjeta.color-acento-contenido.p-4(x="6.8%" y="65.5%" numero="")
              .h5.mb-3 Promoción, #[em marketing], distribución y venta
              p.mb-0 Facilita que los productos y servicios turísticos lleguen al visitante.
            .tarjeta.color-acento-contenido.p-4(x="6.8%" y="85%" numero="")
              .h5.mb-3 Operaciones y servicios en los destinos
              p.mb-0 Corresponde a la ejecución de la experiencia turística en el territorio.
            .tarjeta.color-acento-contenido.p-4(x="68.6%" y="26.3%" numero="")
              .h5.mb-3 Transporte e infraestructura
              p.mb-0 Favorecen la conectividad, el acceso y el funcionamiento del destino.
            .tarjeta.color-acento-contenido.p-4(x="68.6%" y="45.9%" numero="")
              .h5.mb-3 Desarrollo de recursos humanos
              p.mb-0 Fortalece las capacidades del talento humano que participa en el sector.
            .tarjeta.color-acento-contenido.p-4(x="68.6%" y="65.5%" numero="")
              .h5.mb-3 Tecnología y sistemas
              p.mb-0 Apoya la gestión, la información, la comercialización y la operación turística.
            .tarjeta.color-acento-contenido.p-4(x="68.6%" y="85%" numero="")
              .h5.mb-3 Bienes y servicios complementarios
              p.mb-0 Aportan valor a la experiencia turística, aunque no hagan parte del núcleo principal del servicio.
    













</template>

<script>
export default {
  name: 'Tema1',
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
