(() => {
  "use strict";

  // ═══════════════════════════════════════════════════════════
  //  I18N — Sistema de internacionalización ES / EN
  // ═══════════════════════════════════════════════════════════

  const i18n = {
    // --- Navegación ---
    "nav.home":       { es: "Inicio",         en: "Home" },
    "nav.profile":    { es: "Perfil",         en: "Profile" },
    "nav.services":   { es: "Servicios",      en: "Services" },
    "nav.projects":   { es: "Proyectos",      en: "Projects" },
    "nav.contact":    { es: "Contacto",       en: "Contact" },
    "nav.cv":         { es: "Ver CV",         en: "View CV" },

    // --- Hero ---
    "hero.available":   { es: "Disponible para nuevas oportunidades",  en: "Available for new opportunities" },
    "hero.title":       { es: "Datos, Cloud y Operaciones que impulsan.", en: "Data, Cloud, and Operations that drive." },
    "hero.lead":        { es: "Soy <strong>Reymer García</strong>, Data Analyst y profesional de infraestructura IT. Diseño soluciones automatizadas, convierto información en decisiones y mantengo operaciones tecnológicas confiables.", en: "I'm <strong>Reymer García</strong>, Data Analyst and IT infrastructure professional. I design automated solutions, turn information into decisions, and keep technology operations reliable." },
    "hero.explore":     { es: "Explorar proyectos",  en: "Explore projects" },
    "hero.letsTalk":    { es: "Hablemos",           en: "Let's talk" },
    "hero.connect":     { es: "Conecta conmigo",    en: "Connect with me" },
    "hero.cloudLabel":  { es: "Cloud & DevOps",     en: "Cloud & DevOps" },
    "hero.cloudSub":    { es: "Automatización + Escala", en: "Automation + Scale" },
    "hero.yearsText":   { es: "Años en soporte IT",  en: "Years in IT support" },

    // --- Trust bar ---
    "trust.title":      { es: "Áreas de especialización", en: "Areas of specialization" },

    // --- About ---
    "about.eyebrow":    { es: "01 — Perfil profesional",       en: "01 — Professional Profile" },
    "about.title":      { es: "Una mirada técnica <br><span class=\"muted-text\">con visión de negocio.</span>", en: "A technical look <br><span class=\"muted-text\">with business vision.</span>" },
    "about.lead":       { es: "La tecnología funciona mejor cuando es entendible, medible y sostenible.", en: "Technology works best when it's understandable, measurable, and sustainable." },
    "about.bio":        { es: "Soy dominicano, apasionado por la tecnología y los videojuegos. Durante más de 5 años he trabajado en Soporte Técnico IT, hardware, software, redes y entornos Linux/Windows. En los últimos 2 años he enfocado mi crecimiento en DevOps, tecnologias Cloud y análisis de datos.", en: "I'm Dominican, passionate about technology and video games. For over 5 years I've worked in IT Technical Support, hardware, software, networks, and Linux/Windows environments. In the last 2 years I've focused my growth on DevOps, cloud technologies, and data analysis." },
    "about.approach":   { es: "Mi enfoque combina resolución de problemas, automatización y métricas operativas para ayudar a los equipos a trabajar con más eficiencia y confianza.", en: "My approach combines problem-solving, automation, and operational metrics to help teams work with more efficiency and confidence." },
    "about.stats.it":   { es: "Años en IT",     en: "Years in IT" },
    "about.stats.devops": { es: "Años con DevOps", en: "Years with DevOps" },
    "about.stats.projects": { es: "Proyectos técnicos", en: "Technical projects" },
    "about.bring":      { es: "Lo que aporto",  en: "What I bring" },
    "about.bringText":  { es: "Curiosidad técnica, pensamiento analítico y una mentalidad de mejora continua para convertir retos operativos en resultados concretos.", en: "Technical curiosity, analytical thinking, and a continuous improvement mindset to turn operational challenges into concrete results." },

    // --- Pills (About) ---
    "pill.commitment":  { es: "Compromiso",    en: "Commitment" },
    "pill.proactivity": { es: "Proactividad",  en: "Proactivity" },
    "pill.organization": { es: "Organización", en: "Organization" },
    "pill.resolution":  { es: "Resolución",    en: "Problem-solving" },

    // --- Services ---
    "services.eyebrow": { es: "02 — ¿Cómo puedo ayudarte?",     en: "02 — How can I help you" },
    "services.title":   { es: "Servicios <br><span class=\"muted-text\">pensados para escalar.</span>", en: "Services <br><span class=\"muted-text\">designed to scale.</span>" },
    "service.devops":   { es: "DevOps & Automatización",  en: "DevOps & Automation" },
    "service.devopsDesc": { es: "Infraestructura como código, contenedores y pipelines para desplegar de forma repetible y segura.", en: "Infrastructure as code, containers, and pipelines to deploy in a repeatable and secure way." },
    "service.data":     { es: "Data Analytics",          en: "Data Analytics" },
    "service.dataDesc": { es: "Organizo datos y métricas en información útil para detectar oportunidades y tomar mejores decisiones.", en: "I organize data and metrics into useful information to detect opportunities and make better decisions." },
    "service.itOps":    { es: "IT Operations",           en: "IT Operations" },
    "service.itOpsDesc": { es: "Soporte técnico, sistemas y redes con foco en estabilidad, documentación y una buena experiencia de usuario.", en: "Technical support, systems, and networks focused on stability, documentation, and a good user experience." },
    "service.viewExp":  { es: "Ver experiencia",         en: "View experience" },
    "service.consult":  { es: "Consultar disponibilidad", en: "Check availability" },

    // --- Skills ---
    "skills.eyebrow":   { es: "03 — Stack técnico",              en: "03 — Technical Stack" },
    "skills.title":     { es: "Herramientas <br><span class=\"muted-text\">para resolver de principio a fin.</span>", en: "Tools <br><span class=\"muted-text\">to solve from start to finish.</span>" },
    "skill.cloud":      { es: "Cloud & DevOps",  en: "Cloud & DevOps" },
    "skill.data":       { es: "Data & Databases", en: "Data & Databases" },
    "skill.system":     { es: "System & Support", en: "System & Support" },

    // --- Projects ---
    "projects.eyebrow": { es: "04 — Proyectos seleccionados",     en: "04 — Selected Projects" },
    "projects.title":   { es: "Proyectos<br><span class=\"muted-text\">que puedes revisar y explorar.</span>", en: "Projects<br><span class=\"muted-text\">you can review and explore.</span>" },
    "projects.github":  { es: "Ver GitHub completo",  en: "View full GitHub" },
    "project.iac":      { es: "Infraestructura como código", en: "Infrastructure as code" },
    "project.iacDesc":  { es: "Arquitectura de página estática desplegada con Terraform sobre EC2, VPC y ELB.", en: "Static page architecture deployed with Terraform on EC2, VPC, and ELB." },
    "project.web":      { es: "Arquitectura web",     en: "Web architecture" },
    "project.webDesc":  { es: "Entorno reproducible con Vagrant, RabbitMQ, Nginx, Tomcat, Maven, Memcached y MySQL.", en: "Reproducible environment with Vagrant, RabbitMQ, Nginx, Tomcat, Maven, Memcached, and MySQL." },
    "project.jenkins":  { es: "Jenkins CI/CD",        en: "Jenkins CI/CD" },
    "project.jenkinsDesc": { es: "Implementación de Jenkins CI/CD en AWS para automatización del despliegue continuo de aplicaciones.", en: "Jenkins CI/CD implementation in AWS for continuous application deployment automation." },
    "project.docker":   { es: "Contenedores",         en: "Containers" },
    "project.dockerDesc": { es: "Práctica de construcción y gestión de imágenes y contenedores para distintos entornos y servicios.", en: "Practice building and managing images and containers for different environments and services." },
    "project.viewRepo": { es: "Ver repositorio",      en: "View repository" },

    // --- Certifications ---
    "certs.eyebrow":    { es: "05 — Formación",                  en: "05 — Training" },
    "certs.title":      { es: "Certificaciones<br><span class=\"muted-text\">que respaldan el aprendizaje.</span>", en: "Certifications<br><span class=\"muted-text\">that back the learning.</span>" },

    // --- Contact ---
    "contact.eyebrow":  { es: "06 — Contacto",              en: "06 — Contact" },
    "contact.title":    { es: "¿Deseas<br><span class=\"gradient-text\">contactarme?</span>", en: "Want to<br><span class=\"gradient-text\">contact me?</span>" },
    "contact.text":     { es: "Disponible a oportunidades en Data Analytics, DevOps, Cloud y operaciones IT.", en: "Available for opportunities in Data Analytics, DevOps, Cloud, and IT operations." },
    "contact.mail":     { es: "reymer.garcia94@gmail.com",  en: "reymer.garcia94@gmail.com" },
    "contact.linkedin": { es: "Conectar en LinkedIn",       en: "Connect on LinkedIn" },

    // --- Footer ---
    "footer.tagline":   { es: "Data · Cloud · Operations",  en: "Data · Cloud · Operations" },

    // --- Theme button (aria-labels) ---
    "theme.dark":       { es: "Cambiar a modo oscuro",  en: "Switch to dark mode" },
    "theme.light":      { es: "Cambiar a modo claro",    en: "Switch to light mode" },
    "theme.toggle":     { es: "Cambiar tema",           en: "Change theme" },

    // --- Language button ---
    "lang.es":          { es: "ES",  en: "EN" },
    "lang.label":       { es: "Cambiar idioma",  en: "Change language" },

    // --- 404 page ---
    "error.eyebrow":    { es: "Ruta no encontrada",          en: "Route not found" },
    "error.title":      { es: "Página no encontrada", en: "Page not found" },
    "error.text":       { es: "La ruta que buscas no existe o fue movida. Nada está roto en mi lado — regresa a lo que sí importa.", en: "The path you're looking for doesn't exist or was moved. Nothing is broken on my side — go back to what matters." },
    "error.home":       { es: "Inicio",  en: "Home" },
    "error.contact":    { es: "Contacto", en: "Contact" },
    "error.back":       { es: "Volver al inicio",  en: "Back to home" },
    "error.mailSubject": { es: "Contactarme",    en: "Contact me" },
    "error.floatingTitle": { es: "404",          en: "404" },
    "error.floatingSub":   { es: "Recurso no encontrado", en: "Resource not found" },
    "error.bottomText":    { es: "Vuelve",    en: "Back" },
    "error.bottomSub":     { es: "al inicio seguro", en: "to safety" },
    "error.frameLabel":    { es: "404 · no encontrado",  en: "404 · not found" },
    "error.routes":        { es: "Rutas disponibles",     en: "Available routes" },
    "error.routesHome":    { es: "INICIO",  en: "HOME" },
    "error.routesProfile": { es: "PERFIL",  en: "PROFILE" },
    "error.routesContact": { es: "CONTACTO", en: "CONTACT" },

    // --- Security overlay messages ---
    "security.blocked":       { es: "Acción bloqueada",              en: "Action blocked" },
    "security.restricted":    { es: "Acceso restringido",            en: "Access restricted" },
    "security.restrictedDesc": { es: "Esta página tiene protección contra la inspección y herramientas de desarrollo. Si necesitas acceso, contáctame.", en: "This page has protection against inspection and developer tools. If you need access, contact me." },
    "security.devtools":      { es: "Herramientas de desarrollo detectadas", en: "Developer tools detected" },
    "security.devtoolsDesc":  { es: "El acceso a las herramientas de desarrollo está deshabilitado en esta página.", en: "Access to developer tools is disabled on this page." },
  };

  // Índice de elementos por clave
  const i18nElements = [];

  function refreshI18nElements() {
    i18nElements.length = 0;
    const els = document.querySelectorAll("[data-i18n]");
    for (let i = 0; i < els.length; i++) {
      i18nElements[i] = els[i];
    }
  }

  // Aplicar traducción a un elemento
  function applyText(el, lang) {
    const key = el.getAttribute("data-i18n");
    const entry = i18n[key];
    if (!entry) return;

    const text = entry[lang];
    if (text === undefined) return;

    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.value = text;
    } else {
      el.innerHTML = text;
    }
  }

  // Traducir texto plano en nodos de texto (para overlays dinámicos, etc.)
  function translateTextNodes(root, lang) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    let node;
    const translated = new Set();
    while (node = walker.nextNode()) {
      if (node.parentNode === document || node.parentNode === document.body) continue;
      const text = node.textContent.trim();
      if (text.length < 3) continue;
      for (const key of Object.keys(i18n)) {
        const esVal = i18n[key].es;
        const enVal = i18n[key].en;
        if (esVal === text || enVal === text) {
          const parent = node.parentNode;
          if (translated.has(parent)) continue;
          translated.add(parent);
          const newText = document.createTextNode(i18n[key][lang]);
          parent.replaceChild(newText, node);
          break;
        }
      }
    }
  }

  // Traducir todos los elementos visibles
  function translatePage(lang) {
    refreshI18nElements();
    for (let i = 0; i < i18nElements.length; i++) {
      applyText(i18nElements[i], lang);
    }
    // Traducir nodos de texto dinámicos (overlays, etc.)
    translateTextNodes(document.body, lang);

    // Actualizar atributos del botón de idioma
    const langBtn = document.getElementById("lang-toggle");
    if (langBtn) {
      langBtn.setAttribute("aria-label", i18n["lang.label"][lang]);
      langBtn.setAttribute("title", i18n["lang.label"][lang]);
      langBtn.innerHTML = `<i class="bx bx-globe"></i> <span>${i18n["lang.es"][lang]}</span>`;
    }

    // Actualizar atributos del botón de tema
    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      themeBtn.setAttribute("aria-label", isLight ? i18n["theme.dark"][lang] : i18n["theme.light"][lang]);
    }

    // Actualizar meta tags
    document.documentElement.lang = lang === "es" ? "es" : "en";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content",
        lang === "es"
          ? "Portafolio de Reymer García: Data Analyst y especialista en DevOps, cloud, automatización y soporte IT."
          : "Reymer García portfolio: Data Analyst and DevOps, cloud, automation, and IT support specialist."
      );
    }

    const metaOGDesc = document.querySelector('meta[property="og:description"]');
    if (metaOGDesc) {
      metaOGDesc.setAttribute("content",
        lang === "es"
          ? "Convierto datos y operaciones tecnológicas en sistemas más claros, automatizados y confiables."
          : "I turn data and tech operations into clearer, automated, and reliable systems."
      );
    }
  }

  // Toggle de idioma
  function toggleLang() {
    const current = document.documentElement.getAttribute("data-lang") || "es";
    const next = current === "es" ? "en" : "es";
    document.documentElement.setAttribute("data-lang", next);
    localStorage.setItem("lang", next);
    translatePage(next);
  }

  // Inicializar: agregar botón de idioma al header
  function initLang() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    const nav = header.querySelector("nav");
    if (!nav) return;

    if (document.getElementById("lang-toggle")) return;

    const langBtn = document.createElement("button");
    langBtn.id = "lang-toggle";
    langBtn.className = "lang-switch";
    langBtn.setAttribute("aria-label", "Cambiar idioma");
    langBtn.setAttribute("title", "Cambiar idioma");

    langBtn.style.cssText = [
      "display:inline-flex",
      "align-items:center",
      "justify-content:center",
      "width:30px",
      "height:30px",
      "border:1px solid var(--line)",
      "border-radius:var(--radius-sm)",
      "background:var(--surface)",
      "color:var(--text-2)",
      "cursor:pointer",
      "transition:background .2s,color .2s,border-color .2s,transform .22s var(--ease-out)",
      "position:relative",
      "overflow:hidden",
      "font-size:11px",
      "font-weight:700",
      "letter-spacing:.08em",
      "margin-left:6px",
    ].join(";");

    langBtn.innerHTML = 'ES';

    // Insertar al final del nav (después del nav-menu)
    nav.appendChild(langBtn);

    langBtn.addEventListener("click", toggleLang);

    const stored = localStorage.getItem("lang");
    const browserLang = (navigator.language || navigator.userLanguage || "").slice(0, 2);
    const initialLang = stored || (browserLang === "en" ? "en" : "es");

    document.documentElement.setAttribute("data-lang", initialLang);
    translatePage(initialLang);
  }

  // Ejecutar al DOM listo
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLang);
  } else {
    initLang();
  }

  // Exportar para uso por otros scripts si necesario
  window.__i18n = { i18n, translatePage, toggleLang, initLang };
})();
