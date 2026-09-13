# Portafolio Web — Reymer García Acevedo

> **Enlace público:** https://samurai829.github.io/website/

---

## Propósito del proyecto

 Este portafolio es un sitio web estático de una sola página (single-page) que funciona como vitrina profesional. No es solo una página con texto: es una muestra concreta del stack, del cuidado visual y de las prácticas de implementación del candidato.

 Para un equipo de reclutamiento, el sitio es útil como **primer filtro técnico**: permite ver en contexto qué habilidades declara el candidato, qué nivel de acabado le da a un proyecto personal, y qué decisiones técnicas toma cuando construye algo desde cero sin depender de CMS ni frameworks pesados.

---

## Qué muestra el proyecto

| Dimensión | Lo que evalúa |
|-----------|--------------|
| **Frontend vanilla** | Capacidad para construir una landing completa con HTML, CSS y JS sin depender de React, Vue o similares. |
| **CSS avanzado** | Uso de Custom Properties (design tokens), CSS Grid, Flexbox, `@keyframes`, animaciones con `transform`/`opacity` (GPU-friendly), sistema de temas claro oscuro/claro. |
| **JavaScript funcional** | Manejo del DOM, IntersectionObserver, scroll progress, navegación móvil, parallax ligero, detección de preferencias de movimiento (`prefers-reduced-motion`). |
| **SEO y métricas web** | Meta tags de Open Graph, canonical, theme-color, description; imagen de perfil optimizada; estructura semántica. |
| **Accesibilidad** | `aria-label`, `aria-expanded`, `focus-visible` estilizado, respeto a `prefers-reduced-motion`. |
| **CI/CD y despliegue** | GitHub Actions para despliegue automático a GitHub Pages, pipeline declarativo, deploy sin servidor. |
| **Presentación visual** | Acabado visual pulido, coherencia tipográfica, sistema de colores definido (paleta cyber-minimalista con acento verde-neón). |

---

## Tecnologías utilizadas

### Lenguajes

| Lenguaje | Rol en el proyecto |
|----------|---------------------|
| **HTML5** | Estructura semántica del sitio. Uso de `<header>`, `<nav>`, `<main>`, `<section>`, elementos con ARIA. |
| **CSS3** | Hoja de estilos completa. Design tokens con Custom Properties, Grid, Flexbox, animaciones puras, sistema de temas, media queries responsive. |
| **JavaScript (ES6+)** | Interactividad sin frameworks: navegación, scroll, IntersectionObserver, eventos, manipulación de DOM, detección de características del navegador. |

### Herramientas y servicios externos

| Herramienta | Uso |
|-------------|-----|
| **Boxicons (CDN)** | Iconografía para botones, nav, tarjetas y redes sociales. |
| **Google Fonts (CDN)** | Tipografías DM Sans, Space Grotesk, JetBrains Mono. |
| **GitHub Pages** | Alojamiento estático del sitio. |
| **GitHub Actions** | Pipeline de despliegue automático en push a `main`. |

### Assets incluidos

- **Foto de perfil** (`assets/perfil/perfil.jpg`) y **icono** (`assets/perfil/icon.png`).
- **15 iconos de tecnologías** en `assets/icon/` (Bash, PowerShell, Python, Go, Docker, Kubernetes, AWS, Terraform, Git, etc.).
- **Imágenes de proyectos** en `assets/img/` (AWS/Jenkins CI, containers, web app, data, etc.).
- **Certificaciones** en `assets/cert/` (NSE 1-4, AWS Certified, Scrum Certified, Cybersecurity).
- **CV en PDF** en `assets/cv/CV Reymer Garcia.pdf`, accesible desde el menú de navegación.

---

## Arquitectura y estructura del repositorio

```
website/
├── index.html              # Página principal — estructura y contenido
├── 404.html                # Página de error personalizada
├── README.md               # Este archivo
├── css/
│   └── styles.css          # Hoja de estilos (design system + componentes)
├── js/
│   └── main.js             # Lógica interactiva (sin dependencias externas)
├── .github/
│   └── workflows/
│       └── static.yml      # Pipeline de despliegue a GitHub Pages
└── assets/
    ├── perfil/             # Imagen de perfil e icono
    ├── img/                # Imágenes de proyectos y banners
    ├── cv/                 # CV descargable en PDF
    ├── icon/               # Iconos de tecnologías
    └── cert/               # Certificaciones visuales
```

**Características de la arquitectura:**

- **Sin build step**: el sitio se edita directamente y el despliegue sube los archivos tal cual. No hay bundler, minificador ni preprocesador.
- **Enlaces relativos**: los recursos se referencian con rutas relativas (`./css/styles.css`, `./assets/...`), lo que hace que el sitio sea portable dentro de su propio directorio.
- **Separación de responsabilidades**: contenido (HTML), presentación (CSS) y comportamiento (JS) están en archivos separados.
- **Despliegue automatizado**: cada push a `main` desencadena el pipeline de GitHub Actions que publica en GitHub Pages sin intervención manual.

---

## Detalle de funcionalidades implementadas

### Navegación

- Menú de navegación fijo en el header con scroll suave a cada sección.
- Toggle de menú para dispositivos móviles, con estado `aria-expanded` gestionado dinámicamente.
- Marcado automático de la sección activa en el menú según la posición de scroll (IntersectionObserver).
- Barra de progreso de scroll en la parte inferior del viewport.

### Diseño responsivo

- Layout adaptable desde escritorio hasta móvil mediante media queries.
- Hero section que colapsa de dos columnas a una sola en pantallas pequeñas.
- Tarjetas y grids que se reorganizan en función del ancho de ventana.

### Animaciones

- Reveal animations al hacer scroll (IntersectionObserver con umbral 0.12).
- Efecto parallax ligero en tarjetas flotantes sobre el hero, que siguen el cursor del mouse.
- Animaciones de glow, shimmer y float en elementos visuales del hero.
- Respeto a `prefers-reduced-motion`: desactiva animaciones para usuarios que lo solicitan.

### Tema oscuro/claro

- Sistema de temas implementado mediante `data-theme` en el elemento root.
- CSS completo para ambos temas: colores, contrastes, sombras, glows.
- Toggle en el header para cambio manual de tema.

### Accesibilidad

- `aria-label` en elementos interactivos sin texto visible.
- `aria-expanded` gestionado en el toggle de menú.
- Estilo personalizado para `:focus-visible`.
- Respeto a `prefers-reduced-motion`.

### SEO y metadatos

- Meta tags de Open Graph para compartición en redes.
- `canonical` definido.
- `theme-color` para integración con navegadores móviles.
- `description` y `author` definidos.
- `robots` meta en la página 404 para evitar indexación de página de error.

---

## Consideraciones técnicas relevantes para reclutamiento

### Puntos fuertes observables

1. **Independencia técnica**: el candidato construye con tecnologías nativas sin depender de 추상ions de framework, lo que sugiere comprensión sólida del funcionamiento subyacente del DOM, CSS y JS.
2. **Atención al detalle visual**: el nivel de acabado del CSS (gradients, glows, keyframes complejos, sistema de temas) indica interés genuino por la calidad visual y la experiencia del usuario.
3. **Consideraciones de performance**: las animaciones usan `transform` y `opacity` (propiedades compuestas, optimizadas por la GPU), evitando layout thrashing. Se respeta `prefers-reduced-motion`.
4. **Accesibilidad intencional**: no es un añadido accidental — hay atributos ARIA, manejo de foco, y respeto a preferencias del sistema.
5. **CI/CD funcional**: el pipeline de GitHub Actions está configurado y funcional, lo que demuestra familiaridad con herramientas de despliegue moderno aunque sea un proyecto simple.

### Aspectos que podrían profundizarse en una entrevista

1. **Sin build/optimización**: el sitio no tiene etapa de minificación, bundling ni optimización de assets. En un contexto de proyecto mayor, el candidato debería discutir cómo abordaría eso (herramientas como Vite, esbuild, o al menos un paso de optimización manual).
2. **JavaScript sin estructura de aplicación**: el código está en un IIFE autoejecutable sin separación en módulos. Para un proyecto de esta escala es razonable; para algo más grande, convendría discutir modularización, manejo de estado oPatrones.
3. **Medidas de "protección" anti-inspección**: el archivo JS incluye bloqueo de DevTools, contexto menú y ofuscación de email. Estas medidas tienen efectividad limitada (el código fuente está expuesto y el email es visible en el mismo archivo), pero pueden ser útiles como tema de conversación sobre lo que el candidato entiende por seguridad en el frontend y sus límites reales.
4. **Sin PWA ni offline**: el sitio no incluye Service Worker ni manifest, lo que es aceptable para un portafolio, pero que podría discutirse si el puesto requiere conocimientos de Progressive Web Apps.

---

## Cómo usar este repositorio como parte de una evaluación

1. **Abrir el sitio público** y recorrer las secciones. Evaluar el nivel visual, la coherencia del diseño, la fluidez de la navegación.
2. **Inspeccionar el código fuente** (Ctrl+U o DevTools). Verificar la calidad del HTML semántico, la estructura del CSS, y la legibilidad del JS.
3. **Revisar `css/styles.css`** para evaluar profundidad de conocimiento de CSS avanzado: custom properties, grid, animaciones, sistema de temas.
4. **Revisar `js/main.js`** para evaluar manejo de DOM, eventos, IntersectionObserver, y consideraciones de accesibilidad.
5. **Verificar el pipeline** en `.github/workflows/static.yml` para confirmar funcionalidad de CI/CD básico.
6. **Descargar el CV** desde `assets/cv/CV Reymer Garcia.pdf` para contraste con lo que el sitio promociona.

---

## Estado del proyecto

- **Sitio público**: activo y accesible en `https://samurai829.github.io/website/`.
- **Repositorio**: mantenido en GitHub con historial de commits y pipeline de despliegue configurado.
- **Última actualización del sitio**: septiembre 2026, reflejando las secciones de perfil, servicios, proyectos y contacto.
