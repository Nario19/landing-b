# PLAN.md

## Estado actual

Fases 1 y 2 completadas y verificadas en local. La landing informativa está lista para revisión. La Fase 3 comienza después de aprobar la landing y autorizar los formularios.

## Orden de entrega

- **Primer hito — Landing pública completa (fases 1 y 2).** Configurar la base y completar diseño, contenido, navegación, versión móvil y secciones informativas. Usar canales de contacto confirmados cuando estén disponibles.
- Después de aprobar la landing, comienzan los formularios. Luego se incorporan los datos y el backend, la autenticación, el panel, las notificaciones, las pruebas y el despliegue.

## Fases

Cada fase aplica los [controles de calidad y seguridad](CALIDAD-Y-SEGURIDAD.md) que correspondan a sus entregables.

| Fase | Entregables | Criterio de cierre |
| --- | --- | --- |
| 1. Configuración | Inicializar Astro, TypeScript estricto, Tailwind y React. Crear layouts, estructura mínima y scripts de desarrollo, compilación, comprobación de tipos, ESLint y Prettier. | Una página mínima se sirve en local. La compilación y los tipos pasan. |
| 2. Landing | Navbar, hero, nosotros, servicios, rutas y tarifas, flota informativa, comunicados, preguntas frecuentes, contacto, información de atención y reclamos, Únete y footer. | Navegación, enlaces, contenido, móvil y escritorio verificados. Ejemplos identificados. |

## Documentos por fase

Consulta el [README del proyecto](README.md).

- [Fase 1. Configuración](planificacion/01-configuracion.md)
- [Fase 2. Landing pública](planificacion/02-landing.md)

## Fases posteriores a la landing

- [Fase 3. Formularios públicos](planificacion/03-formularios.md)
- [Fase 4. Datos y backend](planificacion/04-datos-backend.md)
- [Fase 5. Autenticación administrativa](planificacion/05-autenticacion.md)
- [Fase 6. Dashboard privado](planificacion/06-dashboard.md)
- [Fase 7. Gestión de solicitudes](planificacion/07-gestion.md)
- [Fase 8. Notificaciones](planificacion/08-notificaciones.md)
- [Fase 9. Seguridad y pruebas](planificacion/09-seguridad-pruebas.md)
- [Fase 10. Despliegue](planificacion/10-despliegue.md)

## Detalle de la landing

- La landing presenta historia, misión, visión, valores y atención al pasajero. Para cada ruta, prever origen, destino, vías, paraderos, horarios, frecuencia y tarifa. Incorporar mapas solo cuando exista un recorrido validado.
- Hero y galería previstos con sedanes y station wagons. Los comunicados comienzan como contenido estático configurable. Paleta sugerida, pendiente de identidad definitiva: #0F172A, #2563EB, #FACC15, #FFFFFF y #F8FAFC.
- El pie incluye contacto, redes, política de privacidad, términos y Libro de Reclamaciones. Las postulaciones admiten conductores, propietarios y otros interesados.
- Confirmar marca, fotos autorizadas, datos de contacto, recorridos, horarios, tarifas, textos legales y dominio antes de la publicación oficial.


## Dirección visual de la Fase 2

Consulta la [ficha visual de ByDrive](FICHA-VISUAL.md) para las medidas verificadas y su adaptación propuesta.

La referencia es [ByDrive Reviews](https://bydrive.framer.website/reviews). Su estructura combina un encabezado breve, una historia destacada con una foto grande y una cuadrícula de historias secundarias. Adaptar esa jerarquía con una composición propia.

- Inicio con un titular breve, fotografía protagonista de autos colectivos y acceso directo a rutas y horarios.
- Rutas y tarifas con información fácil de escanear. Usar tarjetas para los recorridos y reservar el protagonismo fotográfico para inicio, flota y comunicados.
- Comunicados con un aviso destacado y una cuadrícula de avisos adicionales cuando haya contenido. En móvil, ordenar texto e imágenes en una columna de lectura natural.
- Definir tamaños de titulares, espaciado y tratamiento de imágenes como patrones reutilizables en Astro y Tailwind. Usar imágenes propias o autorizadas y conservar la paleta institucional como propuesta hasta definir la marca.
