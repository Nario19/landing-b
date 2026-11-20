# Corporación San Carlos Tours

Portal de la empresa de transporte urbano de Huancayo, Junín. La web pública informará sobre la empresa, rutas, horarios, tarifas, flota y canales de atención. En una etapa posterior, los pasajeros podrán enviar consultas, quejas, reclamos, sugerencias y solicitudes de incorporación. El personal autorizado podrá atenderlas desde un panel privado. La operación de flota pertenece a un sistema independiente.

## Orden de desarrollo

1. [Configuración del proyecto](planificacion/01-configuracion.md).
2. [Landing pública completa](planificacion/02-landing.md).
3. Después de aprobar la landing, comienzan los [formularios de consultas, quejas y reclamos](planificacion/03-formularios.md). El [plan general](PLAN.md) enlaza cada fase posterior.

## Tecnología y estado

Astro, TypeScript estricto, Tailwind CSS y React para los componentes interactivos. La etapa de funciones conectadas prevé Supabase y Vercel para el despliegue. La configuración y la landing informativa están completas en local. Los recorridos, horarios y tarifas son ejemplos identificados. Los datos oficiales de la empresa se incorporarán al confirmarlos.

## Desarrollo local

Usa Node.js 24 y npm 11. La versión de Node probada está en .node-version.

```sh
npm ci
npm run dev
```

Para verificar cambios, ejecuta npm run format:check, npm run lint, npm run check y npm run build. La compilación estática se genera en dist/.

## Documentación

- [Plan general](PLAN.md)
- [Guía de desarrollo](AGENTS.md)
- [Decisiones del proyecto](MEMORY.md)
- [Estándar de calidad y seguridad](CALIDAD-Y-SEGURIDAD.md)
- [Ficha visual](FICHA-VISUAL.md)
