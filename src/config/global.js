export default {
  global: {
    Name:
      'Caracterización y planeación de las actividades del geoturismo aplicadas a los atractivos turísticos de la región',
    Description:
      'El componente formativo Caracterización del geoturismo y planeación del recorrido geoturístico en atractivos turísticos de la región orienta al aprendiz en el reconocimiento de los recursos y atractivos turísticos del territorio, así como en la comprensión del geoturismo, el sistema turístico, el patrimonio y los geoparques como base para el diseño de experiencias turísticas pertinentes al contexto regional. <br><br> De igual manera, fortalece capacidades para planear recorridos geoturísticos de acuerdo con el perfil del usuario, el objetivo del recorrido, las características del territorio y la normativa aplicable. Para ello, aborda la recopilación de información, la construcción del guion, la definición de rutas, recursos, protocolos de servicio, factores de riesgo y acciones de contingencia, con el propósito de proyectar experiencias turísticas seguras, organizadas y coherentes con las dinámicas del territorio.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Turismo: concepto y evolución',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Sistema turístico y normativa',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Guía de turismo: perfil, funciones y competencias',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Geoturismo y patrimonio ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Recursos y atractivos turísticos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Turismo',
      significado:
        'Conjunto de actividades realizadas por personas durante viajes fuera de su entorno habitual.',
    },
    {
      termino: 'Geoturismo',
      significado:
        'Modalidad turística orientada al conocimiento, valoración y conservación de la geología, los paisajes y el patrimonio geológico.',
    },
    {
      termino: 'Geodiversidad',
      significado:
        'Variedad de elementos geológicos presentes en un territorio, como rocas, minerales, suelos, relieves y aguas.',
    },
    {
      termino: 'Geopatrimonio',
      significado:
        'Conjunto de elementos geológicos que poseen valor científico, educativo, cultural o paisajístico y deben conservarse',
    },
    {
      termino: 'Sistema turístico',
      significado:
        'Conjunto de elementos interrelacionados que permiten el desarrollo del turismo.',
    },
    {
      termino: 'Geositio',
      significado:
        'Lugar específico con importancia geológica o geomorfológica que puede servir para investigación, educación, conservación y turismo.',
    },
    {
      termino: 'Sostenibilidad',
      significado: 'Uso responsable de recursos sin comprometer el futuro.',
    },
    {
      termino: 'Geoparque',
      significado:
        'Territorio con lugares de relevancia geológica internacional gestionados con enfoques de protección, educación y desarrollo sostenible',
    },
    {
      termino: 'Patrimonio',
      significado:
        'Conjunto de bienes y valores que una sociedad reconoce como parte de su memoria, identidad y herencia',
    },
    {
      termino: 'Servicios turísticos',
      significado:
        'Actividades y productos ofrecidos a las personas visitantes, como alojamiento, alimentación, guianza y experiencias culturales o naturales.',
    },
    {
      termino: 'Cadena de valor',
      significado:
        'Articulación de actores, servicios y procesos que hacen posible la experiencia turística.',
    },
    {
      termino: 'Biodiversidad',
      significado: 'Variedad de especies vivas en un ecosistema.',
    },
    {
      termino: 'Producto turístico',
      significado:
        'Experiencia integral que recibe el visitante mediante la combinación de recursos, atractivos y servicios.',
    },
    {
      termino: 'Competitividad turística',
      significado:
        'Capacidad de un destino para ofrecer productos y servicios de calidad de forma eficiente, innovadora y sostenible.',
    },
    {
      termino: 'Geoeducación',
      significado:
        'Estrategia formativa que ayuda a reconocer, valorar y conservar la geodiversidad y el geopatrimonio.',
    },
  ],
  referencias: [
    {
      referencia:
        'Acerenza, M. Á. (2001). Administración del turismo: Vol. 1. Conceptualización y organización. Editorial Trillas.',
      link: '',
    },
    {
      referencia:
        'Acerenza, M. Á. (2006). Conceptualización, origen y evolución del turismo. Editorial Trillas.',
      link: '',
    },
    {
      referencia:
        'Boullón, R. (2006). Planificación del espacio turístico. Editorial Trillas.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1996, 26 de julio). Ley 300 de 1996, por la cual se expide la Ley General de Turismo y se dictan otras disposiciones. Diario Oficial No. 42.845.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2008, 12 de marzo). Ley 1185 de 2008, por la cual se modifica y adiciona la Ley 397 de 1997 – Ley General de Cultura – y se dictan otras disposiciones. Diario Oficial.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2009, 21 de julio). Ley 1336 de 2009, por medio de la cual se adiciona y robustece la Ley 679 de 2001, de lucha contra la explotación, la pornografía y el turismo sexual con niños, niñas y adolescentes. Diario Oficial.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2016, 29 de julio). Ley 1801 de 2016, por la cual se expide el Código Nacional de Seguridad y Convivencia Ciudadana. Diario Oficial.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2020, 31 de diciembre). Ley 2068 de 2020, por la cual se modifica la Ley General de Turismo y se dictan otras disposiciones. Diario Oficial No. 51.544.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2021a, 29 de julio). Ley 2111 de 2021, por medio de la cual se sustituye el título XI “De los delitos contra los recursos naturales y el medio ambiente” de la Ley 599 de 2000. Diario Oficial.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2021b, 31 de julio). Ley 2153 de 2021, por medio de la cual se crea el sistema de información, registro y monitoreo que permita controlar, prevenir y evitar el tráfico ilegal de fauna y flora silvestre en el territorio nacional. Diario Oficial.',
      link: '',
    },
    {
      referencia:
        'Dowling, R., & Newsome, D. (2018). Handbook of geotourism. Edward Elgar Publishing.',
      link: '',
    },
    {
      referencia:
        'García-Sánchez, A., del Río-Rama, M. de la C., & Oliveira, C. (2020). El geoturismo como estrategia de desarrollo rural: Un análisis bibliométrico. Ager: Revista de Estudios sobre Despoblación y Desarrollo Rural, (29), 11-44. doi:10.4438/ager.2020.01',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación. (2021). NTC 6507:2021. Requisitos para la prestación del servicio de guionaje (guianza) turístico.',
      link: '',
    },
    {
      referencia:
        'Matute, J., & Asanza, G. (2006). Introducción al turismo. Editorial Ideas Propias.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2021). Política de Turismo Sostenible: Unidos por la Naturaleza.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2024). Producto turístico.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (s. f.). Turismo.',
      link: '',
    },
    {
      referencia:
        'Ministerio de las Culturas, las Artes y los Saberes. (2024). Cartilla de los bienes de interés cultural, su conservación y protección.',
      link: '',
    },
    {
      referencia: 'ONU Turismo. (2024). Glosario de términos de turismo.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2019, 26 de diciembre). Decreto 2358 de 2019, por el cual se modifica y adiciona el Decreto 1080 de 2015, Decreto Único Reglamentario del Sector Cultura, en lo relacionado con el patrimonio cultural material e inmaterial.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2021, 28 de octubre). Decreto 1379 de 2021, por medio del cual se sustituye la Sección 10 del Capítulo 4 del Título 4 de la Parte 2 del Libro 2 del Decreto 1074 de 2015, Decreto Único Reglamentario del Sector Comercio, Industria y Turismo, para reglamentar el guionaje turístico y su ejercicio.',
      link: '',
    },
    {
      referencia:
        'Ramírez, M. (2006). Introducción al estudio del turismo. Editorial Diana.',
      link: '',
    },
    {
      referencia:
        'UNESCO. (2024). Geoturismo para los Geoparques Mundiales de la UNESCO: herramientas para fomentar y gestionar el turismo. América Latina y el Caribe y los Estados Árabes.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Angélica Varón Quintero',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Angélica Varón Quintero',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Liliana Cristancho Cruz',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
