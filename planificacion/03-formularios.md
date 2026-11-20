# Fase 3. Formularios públicos

[Plan general](../PLAN.md) · Esta fase requiere que la landing esté aprobada y que se autorice su inicio.

## Antes de empezar

Primer hito de landing aprobado y autorización para comenzar los formularios. Validar con fuentes oficiales vigentes lo exigido para el Libro de Reclamaciones antes de definir sus campos.

## Qué se hará

1. Definir por separado consultas, sugerencias, quejas, reclamos y postulaciones, con campos y adjuntos por tipo.
2. Implementar esquemas Zod y formularios con etiquetas y errores accesibles. Usar React Hook Form en formularios React.
3. Prever estados de validación, espera y error. Permitir corregir datos ante fallos recuperables.
4. Documentar los contratos de envío y los casos de prueba para conectar con el servidor en la [fase de datos y backend](04-datos-backend.md).

## Cómo se verificará

Validar estados y campos con datos de prueba. Comunicar el estado de integración sin simular recepción.

Aplicar el [estándar de calidad y seguridad](../CALIDAD-Y-SEGURIDAD.md).
