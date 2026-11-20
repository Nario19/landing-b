# Estándar de calidad y seguridad

Aplica a todo cambio de código. Ejecuta los controles pertinentes al alcance y al riesgo de la fase autorizada. Registra los resultados y los controles pendientes con su motivo.

## 1. Objetivo y normas de referencia

Construir software mantenible, seguro, accesible, eficiente, verificable y preparado para evolución incremental. Usar ISO/IEC 25010 como modelo de calidad de producto, convirtiendo sus características en criterios técnicos comprobables. La norma no prescribe una estructura específica de carpetas ni certifica por sí misma el código. Complementar con OWASP ASVS y OWASP Top 10, recomendaciones oficiales de Astro, TypeScript, React, Supabase y principios de ingeniería de software.

Características de calidad que deben considerarse: adecuación funcional, eficiencia de desempeño, compatibilidad, capacidad de interacción/usabilidad, fiabilidad, seguridad, mantenibilidad, flexibilidad y seguridad operacional (safety), según la edición aplicable de ISO/IEC 25010. No afirmar certificación ni cumplimiento normativo sin evaluación formal.

## 2. Stack autorizado

- Astro + TypeScript en modo estricto.
- Tailwind CSS para estilos; React únicamente para islas interactivas que lo justifiquen.
- Componentes UI accesibles y reutilizables; shadcn/ui cuando sea compatible con el componente React y aporte valor.
- Astro Server Endpoints para operaciones del servidor.
- Supabase PostgreSQL, Auth y Storage.
- Zod para validación de entradas; React Hook Form solo en formularios React.
- Cloudflare Turnstile para mitigación de abuso; Resend para correos transaccionales.
- Leaflet/OpenStreetMap solo cuando existan datos de rutas verificables.
- Vercel para despliegue, Git y GitHub para control de versiones.
No agregar paquetes, servicios o frameworks sin justificar su necesidad. Mantener el sistema de flota en otro dominio y repositorio.

## 3. Arquitectura y organización de carpetas

Organizar por responsabilidad y funcionalidad, evitando archivos gigantes y dependencias circulares. Estructura orientativa, ajustable a convenciones actuales de Astro:
```text
src/
├── components/
│   ├── ui/                 # Botones, inputs, modal, alertas, tablas
│   ├── layout/             # Header, footer, navegación
│   ├── landing/            # Secciones públicas
│   ├── forms/              # Campos y formularios reutilizables
│   └── admin/              # Componentes del panel privado
├── layouts/                # Layout público y administrativo
├── pages/                  # Rutas Astro y endpoints API
│   ├── admin/
│   └── api/
├── features/               # Lógica por dominio: reclamos, consultas, postulaciones
├── lib/
│   ├── server/             # Servicios exclusivamente del servidor
│   ├── supabase/           # Clientes y utilidades con límites claros
│   └── validations/        # Esquemas Zod compartidos
├── data/                   # Contenido público de ejemplo/configuración
├── styles/                 # Estilos globales y tokens
├── types/                  # Tipos compartidos
└── middleware.ts           # Controles transversales, cuando corresponda
supabase/
└── migrations/             # Esquema y políticas versionadas
public/                     # Recursos estáticos públicos sin secretos
tests/                     # Pruebas unitarias, integración y E2E
```

Reglas:
1. Cada archivo debe tener una responsabilidad clara. Extraer módulos cuando mezclen UI, validación, persistencia y autorización.
2. No duplicar lógica, componentes ni esquemas. Reutilizar por composición; evitar abstracciones prematuras.
3. Los componentes reciben datos mediante props tipadas. Evitar lógica de base de datos dentro de componentes de presentación.
4. Mantener los servicios privilegiados en módulos exclusivos del servidor; nunca importarlos en componentes cliente.
5. Usar nombres consistentes: PascalCase para componentes, camelCase para variables y funciones, nombres descriptivos para módulos y rutas.
6. Evitar rutas de importación frágiles; configurar alias cuando aporte claridad.
7. Centralizar tokens visuales, configuración pública y textos comunes; nunca centralizar secretos en código compartido.
8. Mantener dependencias dirigidas: UI → casos de uso/servicios → acceso a datos; evitar referencias circulares.

## 4. Reglas de código limpio y TypeScript

- Activar strict y no usar any salvo excepción documentada y justificada.
- Tipar props, respuestas, entradas y errores; usar unknown y validación al recibir datos externos.
- Mantener funciones pequeñas, expresivas y testeables. Aplicar separación de responsabilidades, DRY, KISS y YAGNI.
- No dejar código muerto, imports sin usar, console.log de datos personales, TODO críticos sin seguimiento ni valores sensibles hardcodeados.
- Usar ESLint y Prettier con reglas consistentes; ejecutar comprobación de tipos de Astro.
- No silenciar errores con capturas vacías ni mostrar trazas internas al usuario.
- Mantener comentarios para explicar decisiones complejas, no para repetir lo evidente.
- Gestionar dependencias con versiones controladas y lockfile versionado.

## 5. Componentes reutilizables y diseño

- Crear componentes base accesibles: Button, Input, Textarea, Select, FormField, Card, Modal, Alert, DataTable, StatusBadge, EmptyState, LoadingState.
- Reutilizar encabezado, pie de página, navegación y patrones de formulario.
- Aplicar Mobile First y diseño responsive; evitar estilos repetidos y valores mágicos.
- Preferir componentes .astro para contenido estático; usar React solo donde exista interacción real.
- Aplicar HTML semántico, etiquetas asociadas a controles, foco visible, navegación por teclado y mensajes de error accesibles.
- Respetar preferencias de movimiento reducido y optimizar imágenes y fuentes.
- No introducir bibliotecas de animación pesadas para efectos que CSS resuelve adecuadamente.

## 6. Seguridad obligatoria (defensa en profundidad)

Nunca confiar en el cliente. Todas las entradas, sesiones y permisos se verifican en el servidor.

### 6.1 Autenticación y autorización

- Supabase Auth para administradores. No permitir autoasignación de rol administrador.
- Validar sesión y rol en cada endpoint protegido y en las rutas privadas; ocultar botones no constituye autorización.
- Aplicar mínimo privilegio y políticas RLS a todas las tablas expuestas por Supabase.
- No usar la clave service_role en el navegador ni en código compartido. Si se requiere en el servidor, limitar su uso y protegerla como secreto.
- Revisar el flujo de cookies y sesión de acuerdo con la integración SSR vigente de Supabase; usar cookies Secure, HttpOnly y SameSite cuando corresponda.
- Proteger acciones que dependan de cookies contra CSRF y comprobar origen en solicitudes de modificación.

### 6.2 Formularios y API

- Validar y normalizar datos en el servidor mediante Zod: tipos, longitud, formatos, límites y campos permitidos.
- Utilizar consultas parametrizadas o SDK seguro; nunca construir SQL concatenando entradas.
- Aplicar límites de tamaño, rate limiting y verificación de Turnstile en el servidor.
- Proteger frente a XSS mediante renderizado escapado; evitar HTML sin sanitizar y dangerouslySetInnerHTML con datos de usuarios.
- Configurar CORS restrictivo cuando sea necesario; CORS no sustituye autenticación.
- Devolver errores genéricos al público y registrar detalles técnicos sin exponer datos sensibles.
- No simular confirmaciones: una solicitud se considera recibida solo después de persistirse correctamente.

### 6.3 Archivos adjuntos

- Guardar DNI, CV, evidencias y otros documentos en buckets privados.
- Validar tamaño, extensión, MIME y contenido real; restringir formatos permitidos.
- Generar nombres internos aleatorios, no confiar en el nombre enviado por el usuario.
- Entregar archivos mediante URLs firmadas de corta duración o endpoints autorizados.
- Considerar escaneo antimalware y cuarentena según el riesgo; nunca ejecutar archivos cargados.

### 6.4 Privacidad, secretos y trazabilidad

- Aplicar minimización de datos, consentimiento/aviso de privacidad, plazos de conservación y acceso restringido, considerando la Ley peruana N.° 29733 y normas aplicables.
- No registrar documentos de identidad, teléfonos, correos, tokens ni contenido sensible en logs innecesarios.
- Usar .env y variables seguras del hosting; mantener .env.example sin valores secretos y .env fuera de Git.
- Aplicar HTTPS, cabeceras de seguridad (incluida CSP adaptada al proyecto), actualizaciones de dependencias y revisión de vulnerabilidades.
- Registrar eventos administrativos relevantes sin almacenar secretos; definir auditoría y políticas de retención.
- Configurar respaldos y procedimiento de restauración según criticidad.

### 6.5 Libro de Reclamaciones

Distinguir el formulario general de consultas/sugerencias del Libro de Reclamaciones Virtual. Definir los campos, constancias, plazos y tratamiento exigidos por la normativa peruana antes de publicar. No declarar cumplimiento legal sin validación correspondiente.

## 7. Criterios de calidad alineados con ISO/IEC 25010

| Característica | Criterio verificable del proyecto |
| --- | --- |
| Adecuación funcional | Cada formulario guarda registros válidos y reporta correctamente éxitos y errores; el panel permite gestionar únicamente los registros autorizados. |
| Eficiencia de desempeño | Páginas públicas ligeras; imágenes optimizadas, carga diferida y mínimo JavaScript cliente. Medir Core Web Vitals. |
| Compatibilidad | Comportamiento correcto en navegadores actuales y dispositivos móviles; integración consistente con Supabase y correo. |
| Capacidad de interacción | Navegación clara, formularios comprensibles, feedback y accesibilidad objetivo WCAG 2.2 AA. |
| Fiabilidad | Manejo de fallos de red, reintentos controlados, persistencia consistente y recuperación documentada. |
| Seguridad | Autorización por recurso, RLS, validación servidor, gestión de secretos, protección de archivos y pruebas de acceso indebido. |
| Mantenibilidad | Componentes reutilizables, módulos desacoplados, tipos estrictos, pruebas automatizadas y documentación. |
| Flexibilidad | Nuevos tipos de formularios o secciones incorporables sin reescribir toda la aplicación. |
| Seguridad operacional (safety) | Evitar información engañosa sobre rutas, horarios o condiciones del servicio; comunicar claramente datos referenciales. |


Estos criterios son objetivos internos de ingeniería, no una certificación ISO.

## 8. Pruebas y puertas de calidad

Antes de considerar terminada una fase:
1. Ejecutar formato, lint y comprobación de tipos (astro check o equivalente).
2. Ejecutar pruebas unitarias de validaciones y lógica de negocio.
3. Ejecutar pruebas de integración para endpoints, persistencia y permisos.
4. Probar rutas privadas sin sesión y con rol insuficiente: deben denegar acceso.
5. Probar RLS directamente: un usuario no autorizado no debe leer ni modificar registros ajenos.
6. Probar formularios con datos inválidos, archivos prohibidos, envíos duplicados, fallos de red y spam.
7. Verificar responsive, teclado, foco y mensajes accesibles.
8. Ejecutar build de producción y revisar errores y advertencias.
9. Revisar dependencias vulnerables y ausencia de secretos en Git.
10. Registrar resultados, limitaciones y pendientes de la fase.
Se recomienda Vitest para unitarias e integración y Playwright para flujos E2E. Agregar herramientas solo cuando la fase las necesite.

## 9. Flujo obligatorio de trabajo para Codex

1. Leer este archivo y el contexto general del proyecto antes de modificar código.
2. Inspeccionar el repositorio existente y respetar convenciones ya adoptadas.
3. Presentar un plan breve de la fase: archivos a crear/modificar, riesgos y pruebas.
4. Implementar solo la fase autorizada. No avanzar automáticamente a otras fases.
5. Priorizar la solución más simple que cumpla los requisitos y sea segura.
6. No inventar datos oficiales de empresa, rutas, tarifas o vehículos. Marcar claramente los datos de demostración.
7. No agregar autenticación, endpoints o tablas innecesarios.
8. Antes de finalizar, ejecutar las verificaciones disponibles e informar cuáles no pudieron ejecutarse.
9. Entregar resumen de cambios, archivos afectados, pruebas y pasos manuales pendientes.
10. Solicitar aprobación antes de continuar a la siguiente fase.

## 10. Definición de terminado (Definition of Done)

Una tarea está terminada cuando:
- Cumple los criterios funcionales acordados.
- No introduce duplicación innecesaria ni mezcla de responsabilidades.
- Utiliza componentes reutilizables cuando corresponde.
- Respeta TypeScript estricto y las convenciones del proyecto.
- Valida y autoriza toda operación sensible del lado del servidor.
- Incluye manejo de errores, estados de carga y feedback accesible.
- Cuenta con pruebas proporcionadas al riesgo del cambio.
- Compila sin errores y se documentan los resultados de verificación.
- No expone secretos ni datos personales.
- No incluye funcionalidades ajenas al alcance autorizado.

## 11. Alcance explícitamente excluido

No implementar en este repositorio: gestión operativa de flota, control de conductores, despacho, GPS, reservas de pasajes, cobros, seguimiento en tiempo real ni módulos del sistema interno alojado en otro dominio.
Regla final para Codex: si una petición contradice estas reglas, señalar la contradicción y proponer una alternativa segura y mantenible antes de implementarla. No afirmar que el proyecto cumple ISO/IEC 25010 o OWASP sin evidencias y evaluación formal.
