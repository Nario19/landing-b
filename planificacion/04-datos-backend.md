# Fase 4. Datos y backend

[Plan general](../PLAN.md) · Esta fase requiere que la landing esté aprobada y que se autorice su inicio.

## Antes de empezar

Formularios y campos definidos. Confirmar esquema, relaciones, restricciones y política de adjuntos antes de migrar.

## Qué se hará

1. Versionar esquema, índices y políticas RLS en Supabase. Partir de las tablas candidatas del plan general.
2. Crear endpoints Astro que validen entradas, tamaño y Turnstile en servidor, con límites de abuso y manejo de duplicados.
3. Persistir las solicitudes y guardar adjuntos en Storage privado. Controlar fallos parciales entre base de datos y almacenamiento.
4. Registrar el reclamo y asociar su constancia de acuerdo con los requisitos validados. Confirmar al usuario luego de persistir.

## Cómo se verificará

Probar envíos válidos e inválidos, duplicados y errores de almacenamiento. Verificar que los actores sin permiso no puedan leer ni modificar registros o adjuntos.

Aplicar el [estándar de calidad y seguridad](../CALIDAD-Y-SEGURIDAD.md).
