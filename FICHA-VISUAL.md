<!--  -->

# Ficha visual de ByDrive Reviews

Fuente: [Reviews](https://bydrive.framer.website/reviews) y [Style Guide](https://bydrive.framer.website/style-guide). Se inspeccionó el HTML público y sus reglas CSS, incluidas las variantes responsive. Las medidas son las declaradas en el código de la referencia. Los estados interactivos y el resultado visual quedan pendientes de comprobar en navegador.

## Tipografía y ritmo responsive

| Elemento | Escritorio desde 1200 px | Tableta 810–1199 px | Móvil hasta 809 px |
| --- | --- | --- | --- |
| Título principal Inter, peso 800, interlineado 1,2 | 60 px | 56 px | 44 px |
| Título destacado Inter, peso 800, interlineado 1,4 | 36 px | 36 px | 32 px |
| Párrafo principal Inter, peso 400, interlineado 1,6 | 16 px | 15 px | 14 px |
| Título de la cuadrícula, peso 800 | 20 px | 18 px | 16 px |
| Márgenes interiores horizontales de secciones principales | 32 px | 32 px | 24 px |
| Alto del bloque fotográfico destacado | 600 px | 500 px | 400 px |
| Cuadrícula de reseñas | 3 columnas, 32 px entre tarjetas | 2 columnas, 24 px | 1 columna, 16 px |

El contenido de los bloques principales tiene un máximo de 1440 px. La sección de reseñas declara 74 px de espacio vertical en escritorio y 48 px en móvil.

## Color, bordes y componentes

- **Base:** blanco #FFFFFF y negro #000000. Se verificaron texto negro en el encabezado, navegación blanca, y pie y botón destacado negros con texto blanco.
- **Otros colores declarados:** gris #F2F2F2, línea #E0E0E0, gris oscuro #262626 y azul #1931E3. Su presencia como variables no implica que todos se apliquen en Reviews.
- **Destacado:** contenedor fotográfico con radio de 24 px y texto blanco. El botón declara radio de 10 px, relleno de 10 × 20 px y texto de 14 px en peso 700.
- **Tarjetas fotográficas:** radio de 12 px, contenido alineado abajo y degradado de transparente a negro al 70 % para facilitar la lectura.
- **Navegación:** variantes diferenciadas para escritorio, tableta y móvil. En escritorio declara relleno de 24 × 32 px y en las otras dos variantes 24 px.
- **Guía:** incluye muestras de títulos, párrafos, botones, etiquetas, pestañas y acordeón. El levantamiento se centró en los patrones que afectan la landing.

## Aplicación a la Fase 2

- Usar Inter como candidata, con títulos de peso alto y cuerpo de al menos 16 px para información de viaje. Ajustar la escala al español y a los nombres de destino largos.
- Mantener la paleta institucional propuesta en PLAN.md como punto de partida. Llevar colores, radios y espaciados reutilizables al tema de Tailwind al implementar.
- Crear una composición propia para el inicio y los comunicados, con fotografía autorizada de Huancayo y acceso visible a rutas y horarios. Priorizar el contraste y la lectura de tarifas y paraderos en tarjetas de información.
- Probar las composiciones de una, dos y tres columnas con contenido realista. Elegir los puntos de quiebre según el ancho que necesiten las tarjetas y la navegación.
