---
name: implementar-formulario
description: Crea o modifica formularios de consultas, sugerencias, reclamaciones o postulaciones durante la fase autorizada.
---

# Implementar un formulario

1. Aplica los controles de formularios y adjuntos del [estándar del proyecto](../../CALIDAD-Y-SEGURIDAD.md). Confirma los campos, su obligatoriedad y los adjuntos permitidos según el tipo de solicitud. Para el Libro de Reclamaciones, verifica primero los requisitos oficiales vigentes.
2. Define el esquema en src/lib/validations/ y reutilízalo en el endpoint de Astro y en la validación del cliente. Usa React Hook Form si el formulario se implementa con React. Presenta errores junto al campo y conserva los datos editables ante errores recuperables.
3. Cuando la fase incluya integración, valida Turnstile y los datos en servidor antes de persistir en Supabase. Guarda adjuntos en Storage privado con los permisos correspondientes. Confirma la recepción solo cuando la solicitud quede registrada. Si se requiere constancia, vincúlala al registro.
4. Comprueba envío válido, datos inválidos, duplicados, spam, fallos de red o guardado, formatos prohibidos y acceso a adjuntos cuando correspondan. Prueba con datos de demostración.
