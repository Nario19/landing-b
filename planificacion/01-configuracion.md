# Fase 1. Configuración

[README del proyecto](../README.md) · **Primer hito · Landing pública**.

## Antes de empezar

La Fase 1 fue autorizada y se completó.

## Qué se hará

1. Revisar el entorno local y fijar versiones compatibles de Node y npm.
2. Inicializar Astro, TypeScript estricto, Tailwind e integración de React para futuras islas.
3. Crear la estructura mínima y el layout público según AGENTS.md. El layout privado se desarrollará con el módulo administrativo.
4. Configurar ESLint, Prettier y scripts de desarrollo, tipos y compilación. Conservar el lockfile.

## Cómo se verificará

Página mínima funcional en local. Verificar formato, lint, tipos y compilación de producción.

Aplicar los [controles de calidad y seguridad](../CALIDAD-Y-SEGURIDAD.md) pertinentes a la fase.

## Resultado

Configuración local con Node.js 24.16.0 y npm 11.13.0. La instalación generó package-lock.json y reportó cero vulnerabilidades en la auditoría de npm.

Pasaron formato, lint, tipos y compilación estática. La página mínima respondió HTTP 200 en el servidor de desarrollo y el CSS compilado incluyó las utilidades de Tailwind. La salida de producción se genera en dist/. La revisión visual de la landing corresponde a la Fase 2.
