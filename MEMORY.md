# MEMORY.md

Registro de decisiones confirmadas. Añade la fecha, la decisión y su motivo cuando se conozca. Las propuestas pendientes pertenecen a PLAN.md.

## 2026-11-19

- El documento de contexto entregado por el usuario rige el alcance nuevo. El prototipo previo se retira del directorio de trabajo.
- El proyecto atiende a una empresa de autos colectivos urbanos de Huancayo que presta servicio compartido en rutas establecidas con vehículos tipo sedán o station wagon.
- La landing y el panel privado de atención forman una sola aplicación. El panel gestiona quejas, reclamos, consultas, sugerencias y postulaciones. La operación de transporte usa otro sistema y otro dominio.
- Stack confirmado: Astro, TypeScript, React, Tailwind CSS, shadcn/ui, Lucide React, Motion for React, Astro Server Endpoints, Supabase PostgreSQL/Auth/Storage, Zod, React Hook Form, Turnstile, Resend, Leaflet/OpenStreetMap, Vercel y Git/GitHub.
- El contenido público se prerenderiza. Los formularios y el panel usan ejecución de servidor donde corresponda. Las solicitudes se guardan en Supabase y los documentos adjuntos son privados.
- Se requiere un Libro de Reclamaciones Virtual sujeto a los requisitos peruanos vigentes, con constancia y registro.
- Se trabaja por fases pequeñas. Primero se preparan AGENTS.md, MEMORY.md, las habilidades y el plan. Cada avance a una nueva fase requiere autorización del usuario.


- Referencia visual elegida para la landing pública: [ByDrive Reviews](https://bydrive.framer.website/reviews). Adoptar su enfoque editorial y fotográfico con identidad propia para el transporte urbano de Huancayo.

- Se adopta [CALIDAD-Y-SEGURIDAD.md](CALIDAD-Y-SEGURIDAD.md) como estándar obligatorio de desarrollo y revisión. Usa ISO/IEC 25010, OWASP ASVS y OWASP Top 10 como referencias de ingeniería, con TypeScript estricto, accesibilidad objetivo WCAG 2.2 AA y controles verificables por fase.

- Se prioriza completar y revisar la landing pública antes de desarrollar formularios, base de datos, autenticación y panel administrativo.

- Refinamiento visual de la landing aprobado como dirección de trabajo. Usar una portada minimalista con titular centrado y fotografía amplia, y un pie oscuro con enlaces agrupados por necesidad del pasajero.

- Para el refinamiento visual, el usuario eligió la página de Apple como referencia de jerarquía, espaciado y protagonismo de la fotografía, con identidad propia de Huancayo.

- La primera vista debe ser blanca y ocupar la altura visible, incluida la barra superior. El titular, las acciones y el auto deben verse al abrir la landing.

- Nosotros, Servicios, Rutas y tarifas, Flota y Comunicados tienen páginas propias. El diseño público usa blanco, negro y grises por ahora, con una animación breve al entrar a cada página y respeto por la preferencia de movimiento reducido.

## 2026-11-20

- El usuario confirmó que el nombre de la empresa es **Corporación San Carlos Tours**.

- Cada opción de la barra superior abre una página propia desde arriba. Inicio contiene la portada y el pie. Los contenidos de atención, preguntas e incorporación tienen rutas propias.

- Las opciones del menú quedan centradas en escritorio y Contacto se presenta como botón a la derecha. En móvil, Contacto está en el menú. Se añadió contenido ficticio identificado para visualizar páginas con más información.
