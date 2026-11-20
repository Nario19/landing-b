# Fase 5. Autenticación administrativa

[Plan general](../PLAN.md) · Esta fase requiere que la landing esté aprobada y que se autorice su inicio.

## Antes de empezar

Backend disponible en un entorno de prueba. Definir cuentas administrativas autorizadas y método de asignación de permisos.

## Qué se hará

1. Crear el inicio de sesión y el cierre de sesión con Supabase Auth.
2. Configurar sesión SSR, cookies y controles de origen o CSRF donde correspondan.
3. Proteger páginas, endpoints y recursos privados con sesión y permisos comprobados en servidor. Aplicar mínimo privilegio y prohibir autoasignar roles.

## Cómo se verificará

Verificar acceso con rol válido y denegación sin sesión, con sesión vencida o con permisos insuficientes. Comprobar RLS directamente.

Aplicar el [estándar de calidad y seguridad](../CALIDAD-Y-SEGURIDAD.md).
