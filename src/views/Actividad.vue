<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Caracterización y planeación de las actividades del geoturismo aplicadas a los atractivos turísticos de la región.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la comprensión de los conceptos fundamentales relacionados con el turismo, el sistema turístico, el producto turístico, la guianza turística, el geoturismo, el patrimonio, los geoparques, los geositios y la valoración de los recursos y atractivos geoturísticos.',
      barajarPreguntas: true,
      titulo_aprobado: '¡FELICIDADES!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: 'El turismo puede entenderse principalmente como:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Una actividad agrícola.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Una práctica solo comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un fenómeno social, cultural y económico.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Una actividad exclusiva de descanso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: 'Una característica fundamental del turismo es que:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Implica residencia permanente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Siempre genera trabajo en el destino.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo se desarrolla en espacios rurales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Supone un desplazamiento temporal fuera del entorno habitual.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'De acuerdo con el texto, el turismo también se considera un fenómeno cultural porque:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Favorece el intercambio de costumbres, saberes e identidades.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Solo ocurre en museos.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Obliga a visitar lugares históricos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reemplaza las tradiciones locales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'Según Acerenza, el desarrollo histórico del turismo estuvo relacionado con factores como:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Únicamente la religión.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Minería, pesca y ganadería.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Paz, comunicaciones, transporte y tiempo libre.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Guerra, aislamiento y pobreza.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de los siguientes hechos se reconoce como base del turismo moderno?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'La creación de geoparques.', esCorrecta: false },
            {
              id: 'b',
              texto: 'La fundación de Atlantic City.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El surgimiento del turismo MICE.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La excursión organizada por Thomas Cook.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: 'El turismo de naturaleza tiene como motivación principal:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La compra de productos artesanales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La observación y apreciación de la naturaleza.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'La asistencia a congresos.', esCorrecta: false },
            {
              id: 'd',
              texto: 'La atención médica especializada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: 'El turismo de aventura se caracteriza por:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Actividades sin esfuerzo físico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Exclusivamente paseos urbanos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Riesgo controlado en contacto directo con la naturaleza.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Actividades religiosas en templos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: 'En el documento, el geoturismo se presenta como:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una actividad sostenible que promueve educación y conservación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Una actividad centrada solo en el entretenimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una tipología oficial del MinCIT.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un tipo de turismo exclusivamente médico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: 'La cadena de valor del turismo se refiere a:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los impuestos que pagan los turistas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La suma de atractivos naturales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El conjunto de actividades, servicios y actores que hacen posible la experiencia turística.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El número de visitantes en temporada alta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Quiénes son el centro de la cadena de valor turística?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Los operadores turísticos.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Los proveedores de tecnología.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Los turistas o visitantes.', esCorrecta: true },
            { id: 'd', texto: 'Los ministerios.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: 'Un impacto económico positivo del turismo es:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Generación de empleo directo e indirecto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Pérdida de identidad cultural.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Deterioro de ecosistemas.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Incremento del costo de vida.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: 'Un impacto sociocultural negativo del turismo puede ser:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Recuperación del patrimonio cultural.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Orgullo comunitario.', esCorrecta: false },
            { id: 'c', texto: 'Participación comunitaria.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Comercialización excesiva de la cultura local.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: 'El sistema turístico se comprende como:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un listado de agencias de viaje.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una ley exclusiva para hoteles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La relación entre demanda, oferta, producto y servicios.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un conjunto aislado de atractivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: 'El producto turístico surge de:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La venta de boletos solamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La promoción publicitaria del destino.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La construcción de carreteras.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La integración entre recursos del territorio y servicios prestados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'La Ley 2068 de 2020 promueve que el turismo sea entendido como:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una actividad sin regulación estatal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una práctica exclusiva del sector privado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una industria esencial para el desarrollo del país.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Una actividad secundaria sin función social.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'Según la Ley 2068 de 2020, el guía de turismo es la persona que:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Administra hoteles y restaurantes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se dedica únicamente al transporte de visitantes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo vende paquetes turísticos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Presta servicios de orientación, conducción, instrucción y asistencia.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: 'Una de las funciones del guía de turismo es:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reemplazar a las autoridades locales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Instruir al turista de forma veraz sobre los lugares visitados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cobrar impuestos del destino.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseñar únicamente campañas publicitarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'Según la NTC 9507 de 2021, el guía de turismo no debe conducir grupos de más de:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '10 personas.', esCorrecta: false },
            { id: 'b', texto: '12 personas.', esCorrecta: false },
            { id: 'c', texto: '15 personas.', esCorrecta: true },
            { id: 'd', texto: '20 personas.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: 'Los geositios son definidos en el texto como:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Espacios recreativos urbanos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Lugares de interés científico basados en la geología o geomorfología.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sitios destinados únicamente al comercio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Áreas exclusivas para minería.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: 'La geointerpretación busca principalmente:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reemplazar la geoeducación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Limitar el acceso de los visitantes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Comunicar el valor del patrimonio geológico de forma comprensible.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Usar lenguaje técnico complejo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
