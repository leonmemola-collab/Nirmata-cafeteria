# Lista de Verificación para Nuevas Habilidades

Al crear una nueva habilidad, asegúrate de cumplir con los siguientes puntos para garantizar su efectividad:

## Estructura y Formato
- [ ] **Archivo SKILL.md:** Presente en la raíz de la carpeta de la habilidad.
- [ ] **Frontmatter YAML:** Contiene `name` (opcional) y `description`.
- [ ] **Descripción:** Escrita en tercera persona, clara y concisa.
- [ ] **Markdown:** Uso de encabezados, listas y bloques de código para mejorar la legibilidad.

## Contenido de las Instrucciones
- [ ] **Contexto:** Explica claramente cuándo el agente debe usar la habilidad.
- [ ] **Pasos:** Proporciona un flujo de trabajo lógico y fácil de seguir.
- [ ] **Herramientas:** Si la habilidad requiere herramientas o scripts, explica cómo usarlas.
- [ ] **Manejo de Errores:** Incluye instrucciones sobre qué hacer si algo falla.

## Recursos Adicionales
- [ ] **Scripts:** Si hay scripts, ¿están bien comentados y tienen un flag de ayuda?
- [ ] **Ejemplos:** ¿Hay archivos en `examples/` que muestren el resultado esperado?
- [ ] **Plantillas:** ¿Hay recursos en `resources/` que faciliten la tarea?

## Portabilidad
- [ ] **Rutas Relativas:** Asegúrate de no usar rutas absolutas que dependan de un entorno específico (siempre que sea posible).
