# AGENTS.md

## Lectura inicial

- Lee y aplica [CALIDAD-Y-SEGURIDAD.md](CALIDAD-Y-SEGURIDAD.md) antes de planificar, implementar o revisar cambios de código. Sus comprobaciones aplicables forman parte del cierre de cada fase.

- [MEMORY.md](MEMORY.md) registra las decisiones confirmadas por el usuario. Actualízalo cuando se confirme una decisión importante, con fecha y motivo si se conoce.
- [PLAN.md](PLAN.md) contiene los entregables, el estado y los criterios de cierre por fase.
- Lee la habilidad local que corresponda antes de la tarea. Usa [cerrar-fase](skills/cerrar-fase/SKILL.md) para verificar y documentar una fase, y [implementar-formulario](skills/implementar-formulario/SKILL.md) para crear o modificar formularios.

## Alcance y tecnologías

Una aplicación para una empresa de autos colectivos urbanos de Huancayo, Junín. La landing pública informa y recibe solicitudes. El panel privado en /admin atiende exclusivamente las solicitudes recibidas.

- Astro y TypeScript en modo estricto. Prerenderiza el contenido público y usa ejecución de servidor en endpoints y páginas privadas.
- Tailwind CSS para estilos y React solo para islas que requieran interactividad. Usa shadcn/ui y Lucide React cuando aporten valor. Reserva Motion for React para animaciones que CSS no resuelva adecuadamente.
- Astro Server Endpoints, Supabase PostgreSQL, Supabase Auth y Supabase Storage.
- Zod para validaciones y React Hook Form solo en formularios React, Cloudflare Turnstile para antispam y Resend para correos.
- Leaflet y OpenStreetMap para mapas con datos de recorridos válidos.
- Vercel para hosting y Git con GitHub para versionamiento. Incorpora dependencias conforme se necesiten en la fase autorizada.

## Estructura y nombres

- Rutas públicas en español y en minúsculas. Usa kebab-case en segmentos compuestos. Rutas previstas: /, /rutas, /contacto, /reclamaciones y /unete.
- src/pages/admin/ aloja vistas privadas, con /admin/login para iniciar sesión. src/pages/api/ aloja endpoints.
- src/components/ agrupa ui/, layout/, landing/, forms/ y admin/. Usa PascalCase para componentes propios y conserva las convenciones de los componentes generados por shadcn/ui.
- Usa PublicLayout.astro y AdminLayout.astro en src/layouts/. Usa src/styles/ para estilos y src/data/ para contenido institucional configurable.
- Organiza la lógica de dominio en src/features/, los servicios privilegiados en src/lib/server/, la integración en src/lib/supabase/ y los esquemas compartidos en src/lib/validations/. Define middleware en src/middleware.ts cuando corresponda.
- Usa snake_case, sin tildes, en tablas y columnas. Guarda las migraciones en supabase/migrations/ y define los campos antes de crearlas.

## Límites y forma de trabajo

- Implementa únicamente la fase autorizada. Explica el plan antes de programar, verifica y documenta al cerrar, y espera autorización para iniciar la siguiente.
- Quedan fuera de alcance las reservas, el GPS, el despacho, los cobros, el seguimiento en tiempo real, la gestión operativa de vehículos y conductores, y el control de flota. El sistema de gestión de flota vive en otro dominio y repositorio. La galería pública de flota y las postulaciones sí forman parte del alcance.
- No modifiques sistemas externos, secretos, recursos productivos ni fases ajenas a la tarea. Mantén los cambios dentro del alcance autorizado.
- No presentes como reales rutas, tarifas, estadísticas ni datos empresariales sin confirmar. Identifica los ejemplos y usa contenido oficial para la publicación pública.
- Valida entradas en cliente y servidor. Comprueba sesión y autorización real del lado del servidor. Aplica RLS y conserva adjuntos en buckets privados. No expongas credenciales privadas de Supabase ni otros secretos en el cliente o el repositorio.
- Verifica los requisitos peruanos vigentes del Libro de Reclamaciones Virtual con fuentes oficiales antes de fijar el esquema, el flujo y la constancia.
- Usa diseño mobile-first, contraste legible, navegación accesible e imágenes optimizadas.
