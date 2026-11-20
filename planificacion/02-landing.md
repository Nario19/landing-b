# Fase 2. Landing pública

[README del proyecto](../README.md) · **Primer hito · Landing pública**.

## Antes de empezar

Fase 1 verificada y autorización. Consultar la [ficha visual](../FICHA-VISUAL.md).

## Qué se hará

1. Preparar una composición propia con fotografía protagonista y adaptar el tema de Tailwind.
2. Construir navegación, hero, nosotros, servicios, rutas y tarifas, flota, comunicados, FAQ, contacto, información de atención y reclamos, Únete y footer.
3. Centralizar los datos públicos. Incluir origen, destino, vías, paraderos, horarios, frecuencia y tarifa. Marcar ejemplos y usar mapas solo con recorridos verificados.
4. Mostrar los canales oficiales confirmados para contacto y reclamos. Enlazar privacidad, términos y Libro de Reclamaciones cuando estén disponibles. Informar qué canales web quedan pendientes y evitar enlaces a flujos sin implementar.

La primera entrega es la landing informativa completa. Una vez aprobada, comienza la [Fase 3. Formularios públicos](03-formularios.md).

## Cómo se verificará

Revisar móvil y escritorio, teclado, foco, enlaces, contraste, texto alternativo y optimización de imágenes.

Aplicar los [controles de calidad y seguridad](../CALIDAD-Y-SEGURIDAD.md) pertinentes a la fase.

## Resultado

Landing implementada en Astro con Tailwind, Inter local e imágenes ilustrativas optimizadas a WebP. Las rutas, horarios, frecuencias y tarifas de demostración comparten una fuente de datos. Se indican los canales de atención pendientes de confirmación.

Pasaron formato, lint, tipos y compilación. Se comprobó en Chrome a 320, 390, 768 y 1440 px la carga de imágenes, los enlaces, la ausencia de desplazamiento horizontal y la navegación por teclado del menú y los desplegables. Se revisaron capturas a 390 y 1440 px. Pendientes para la publicación oficial: contenido institucional, datos operativos y canales de atención confirmados.

### Revisión de portada y pie

Se ajustó la portada con un encabezado centrado y fotografía amplia, y el pie con grupos de viaje, empresa y atención. Pasaron formato, lint, tipos y compilación. En Chrome se verificaron las cuatro anchuras de la fase y la navegación por teclado desde el pie. Se inspeccionaron capturas en móvil y escritorio.

### Refinamiento visual

Se reorganizó la landing con una portada centrada, accesos directos a rutas y tarifas, fotografía en franjas de distinto contraste y bloques de información y atención con más espacio. Se verificó formato, lint, tipos, compilación, enlaces y barra fija en Chrome entre 320 y 1440 px.

### Portada de una pantalla

Se ajustó la portada blanca para compartir la altura visible con la barra fija. Chrome confirmó que rutas comienza justo al terminar la primera pantalla a 320 × 568, 390 × 844, 768 × 400, 1366 × 768 y 1920 × 1080. El diseño conserva la altura necesaria si el contenido aumenta por ajustes de lectura.

### Páginas públicas independientes

Se separaron Nosotros, Servicios, Rutas y tarifas, Flota y Comunicados en cinco rutas Astro. Comparten la barra fija, el pie, la paleta monocromática y la animación de entrada. Se verificaron navegación, inicio de scroll, enlaces, escala de grises y movimiento reducido en Chrome a 390 y 1440 px. Pasaron formato, lint, tipos y build.

Se añadió la sección informativa de objetos perdidos, con imágenes ilustrativas y acceso desde el pie de página. Se verificaron los enlaces y las imágenes WebP en la compilación.

Se separaron Objetos perdidos, Consultas y contacto, Quejas y reclamos, Preguntas frecuentes y Únete. Se verificó en Chrome que los ocho enlaces principales abren desde arriba, sin desbordamiento horizontal y con el pie después de la primera pantalla, tanto en móvil como en escritorio.

Se centró el menú de escritorio y se agregó el botón Contacto a la derecha. Se incorporaron ejemplos identificados en Nosotros, Servicios, Comunicados y Quejas, además de campos de atención pendientes en Contacto. Verificado en Chrome a 320, 390, 1280 y 1440 px. Pasaron formato, lint, tipos y compilación.
