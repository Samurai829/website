(() => {
  "use strict";

  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  const header = document.querySelector(".site-header");
  const progress = document.getElementById("progress-line");
  const year = document.getElementById("year");
  const sections = [...document.querySelectorAll("main section[id]")];
  const links = [...document.querySelectorAll(".nav-link")];

  if (year) year.textContent = new Date().getFullYear();

  // ---------- Mobile nav toggle ----------
  toggle?.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    const icon = toggle.querySelector("i");
    if (icon) icon.className = isOpen ? "bx bx-x" : "bx bx-menu";
  });

  links.forEach((link) =>
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle?.setAttribute("aria-expanded", "false");
      const icon = toggle?.querySelector("i");
      if (icon) icon.className = "bx bx-menu";
    })
  );

  // ---------- Scroll progress + active section ----------
  const updateScrollState = () => {
    const scrollTop = window.scrollY;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    if (progress)
      progress.style.transform = `scaleX(${
        scrollable > 0 ? scrollTop / scrollable : 0
      })`;
    header?.classList.toggle("scrolled", scrollTop > 12);
    let current = sections[0]?.id;
    for (const section of sections) {
      if (scrollTop >= section.offsetTop - 150) current = section.id;
    }
    for (const link of links) {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${current}`
      );
    }
  };
  window.addEventListener("scroll", updateScrollState, { passive: true });
  updateScrollState();

  // ---------- Forzar animaciones con IntersectionObserver ----------
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && !reduceMotion) {
    const revealObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = el.dataset.index != null
            ? 0.08 * parseInt(el.dataset.index, 10)
            : 0;
          setTimeout(() => {
            el.classList.add("is-visible");
            revealObserver.unobserve(el);
          }, delay * 1000);
        }
      }
    }, { threshold: 0.12 });

    for (const item of revealItems) revealObserver.observe(item);
  } else {
    for (const item of revealItems) item.classList.add("is-visible");
  }

  // ---------- Tarjetas flotantes: seguimiento sutil del mouse ----------
  const heroVisual = document.querySelector(".hero-visual");
  const floatingTop = document.querySelector(".floating-card-top");
  const floatingBottom = document.querySelector(".floating-card-bottom");
  if (heroVisual && floatingTop && floatingBottom && !reduceMotion) {
    heroVisual.addEventListener("mousemove", (e) => {
      const rect = heroVisual.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const offsetX = x * 8;
      const offsetY = y * 5;
      floatingTop.style.transform =
        `translate(${offsetX}px, ${offsetY}px) rotate(4deg)`;
      floatingBottom.style.transform =
        `translate(${-offsetX}px, ${-offsetY}px) rotate(-2deg)`;
    });
    heroVisual.addEventListener("mouseleave", () => {
      floatingTop.style.transform = "";
      floatingBottom.style.transform = "";
    });
  }

  // ========== MEDIDAS DE SEGURIDAD / HARDENING ==========

  // 1. Bloquear menú contextual (click derecho) en toda la página
  document.addEventListener(
    "contextmenu",
    (e) => {
      e.preventDefault();
      // feedback visual leve
      const flash =
        document.createElement("div");
      flash.style.cssText = [
        "position:fixed",
        "inset:0",
        "background:rgba(8,11,22,.85)",
        "z-index:9999",
        "display:flex",
        "align-items:center",
        "justify-content:center",
        "color:#a8f15a",
        "font-family:Space Grotesk,sans-serif",
        "font-size:20px",
        "letter-spacing:.1em",
        "cursor:default",
        "user-select:none",
      ].join(";");
      flash.textContent = window.__i18n?.i18n["security.blocked"]?.[document.documentElement.getAttribute("data-lang") || "es"] || "⛔ Acción bloqueada";
      document.body.appendChild(flash);
      setTimeout(() => flash.remove(), 350);
    },
    { passive: false }
  );

  // 2. Bloquear atajos de teclado habituales para DevTools / código fuente
  const blockedKeyCombos = [
    { ctrl: true, shift: true, key: "i" }, // Ctrl+Shift+I
    { ctrl: true, shift: true, key: "j" }, // Ctrl+Shift+J
    { shift: true, key: "i" }, // Shift+I (en algunos navegadores)
    { shift: true, key: "j" },
    { key: "F12" }, // F12
    { key: "F1" }, // F1 (en algunos navegadores)
    { ctrl: true, key: "u" }, // Ctrl+U → ver código fuente
    { meta: true, shift: true, key: "i" }, // Cmd+Shift+I en macOS
    { meta: true, shift: true, key: "j" },
    { meta: true, key: "u" }, // Cmd+U en macOS
  ];

  window.addEventListener("keydown", (e) => {
    const blocking = blockedKeyCombos.some(({ ctrl, shift, meta, key }) => {
      const ck = ctrl === undefined ? e.ctrlKey : ctrl === e.ctrlKey;
      const sk = shift === undefined ? e.shiftKey : shift === e.shiftKey;
      const mk = meta === undefined ? e.metaKey : meta === e.metaKey;
      if (key.length === 1) {
        return ck && sk && mk && e.key.toLowerCase() === key.toLowerCase();
      }
      // F-keys: comparar directamente con e.key
      return ck && sk && mk && e.key === key;
    });

    if (blocking) {
      e.preventDefault();
      e.stopPropagation();

      const overlay = document.createElement("div");
      overlay.style.cssText = [
        "position:fixed",
        "inset:0",
        "background:rgba(8,11,22,.92)",
        "z-index:9999",
        "display:flex",
        "align-items:center",
        "justify-content:center",
        "flex-direction:column",
        "cursor:default",
        "user-select:none",
      ].join(";");
      overlay.innerHTML = `
        <div style="background:var(--surface);border:1px solid rgba(168,241,90,.3);border-radius:16px;padding:28px 36px;text-align:center;max-width:380px;box-shadow:0 24px 80px rgba(0,0,0,.6);">
          <div style="font-size:38px;line-height:1;margin-bottom:10px;">🛡️</div>
          <div style="font-family:'Space Grotesk',sans-serif;font-weight:700;color:#a8f15a;font-size:16px;letter-spacing:.04em;margin-bottom:8px;">${window.__i18n?.i18n["security.restricted"]?.[document.documentElement.getAttribute("data-lang") || "es"] || "Acceso restringido"}</div>
          <div style="color:#9aa4ba;font-size:13px;line-height:1.6;">${window.__i18n?.i18n["security.restrictedDesc"]?.[document.documentElement.getAttribute("data-lang") || "es"] || "Esta página tiene protección contra la inspección y herramientas de desarrollo. Si necesitas acceso, contáctame."}</div>
          <div style="margin-top:14px;font-size:11px;color:#5f6a82;">${new Date().toISOString().slice(0,19).replace("T"," · ")}</div>
        </div>
      `;
      overlay.addEventListener("click", () => overlay.remove(), { once: true });
      document.body.appendChild(overlay);
      setTimeout(() => overlay.remove(), 2200);

      // Intentar quitar el foco del elemento activo actual para reducir la utilidad posterior de los pulsaciones
      if (document.activeElement && document.activeElement !== overlay) {
        try { document.activeElement.blur(); } catch (_) {}
      }
    }
  }, { passive: false });

  // 3. Detección periódica de DevTools (basada en diferencias entre
  //    outerWidth/outerHeight e innerWidth/innerHeight).
  let devtoolsOpen = false;
  const devtoolsCheck = () => {
    const threshold = 160; // px
    const wDiff = window.outerWidth - window.innerWidth;
    const hDiff = window.outerHeight - window.innerHeight;
    if ((wDiff > threshold || hDiff > threshold) && !devtoolsOpen) {
      devtoolsOpen = true;
      const warn = document.createElement("div");
      warn.style.cssText = "position:fixed;inset:0;background:#080b16;z-index:9999;display:none;";
      warn.id = "__devtools-warn";
      document.body.appendChild(warn);
      requestAnimationFrame(() => {
        warn.style.display = "flex";
        warn.style.alignItems = "center";
        warn.style.justifyContent = "center";
        warn.style.flexDirection = "column";
        warn.style.color = "#a8f15a";
        warn.style.fontFamily = "'Space Grotesk',sans-serif";
        warn.style.fontSize = "18px";
        warn.style.letterSpacing = ".05em";
        warn.style.padding = "30px";
        warn.style.textAlign = "center";
        warn.style.background = "rgba(8,11,22,.94)";
        warn.style.cursor = "default";
        warn.style.userSelect = "none";
        // deshabilitar interacción en el resto de la página
        document.body.style.pointerEvents = "none";
        warn.style.pointerEvents = "auto";
        warn.innerHTML = `
          <div>🛡️</div>
          <div style="font-weight:700;margin:10px 0 6px;">Herramientas de desarrollo detectadas</div>
          <div style="color:#9aa4ba;font-size:13px;line-height:1.6;max-width:360px;">
            El acceso a las herramientas de desarrollo está deshabilitado en esta página.
          </div>
        `;
      });
      warn.addEventListener(
        "click",
        () => {
          warn.remove();
          document.body.style.pointerEvents = "";
          devtoolsOpen = false;
        },
        { once: true }
      );
      setTimeout(() => {
        if (warn.parentNode) {
          warn.remove();
          document.body.style.pointerEvents = "";
          devtoolsOpen = false;
        }
      }, 4000);
    }
    if (!devtoolsOpen && wDiff < threshold && hDiff < threshold) {
      devtoolsOpen = false;
    }
  };

  // Lanzar comprobación cada 1.2 s (no ejecutar en bucle apretado)
  let devtoolsRAF = 0;
  const devtoolsLoop = () => {
    devtoolsCheck();
    devtoolsRAF = setTimeout(devtoolsLoop, 1200);
  };
  devtoolsLoop();

  // 4. Contramedida adicional: detectar si la ventana se redimensiona de forma
  //    excepcional (cerrar/abrir DevTools suele disparar eventos de resize).
  let lastW = window.innerWidth;
  let lastH = window.innerHeight;
  window.addEventListener("resize", () => {
    const nw = window.innerWidth;
    const nh = window.innerHeight;
    const dw = Math.abs(nw - lastW);
    const dh = Math.abs(nh - lastH);
    if (dw > 80 || dh > 80) {
      devtoolsCheck();
    }
    lastW = nw;
    lastH = nh;
  }, { passive: true });

  // 5. Evitar copiar texto desde la página como medida leve de protección.
  //    Sólo bloqueamos la escritura en el portapapeles; las selecciones siguen
  //    disponibles para lectura.
  document.addEventListener(
    "copy",
    (e) => {
      const t = e.target;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA")) return;
      e.preventDefault();
    },
    { passive: false }
  );

  // 6. Evitar arrastrar imágenes / enlaces como medida leve adicional.
  document.addEventListener(
    "dragstart",
    (e) => {
      if (e.target.matches("img,a")) e.preventDefault();
    },
    { passive: false }
  );

  // 7. Ofuscación minimalista del correo electrónico en la página (solo la
  //    versión mostrada en el DOM). Los enlaces mailto siguen siendo funcionales.
  (function emailObfuscation() {
    const email = "reymer.garcia94@gmail.com";
    const encoded = btoa(email)
      .split("")
      .reverse()
      .join("");
    for (const el of document.querySelectorAll("body *")) {
      if (
        el.childElementCount === 0 &&
        el.textContent.trim() === email
      ) {
        el.textContent = atob(
          encoded.split("").reverse().join("")
        );
      }
    }
  })();

  // 8. Evitar que esta página se cargue en un iframe de otro origen (si se
  //    intenta incrustar, redirigir al origen principal).
  try {
    if (window.self !== window.top) {
      window.top.location.href = window.location.href;
    }
  } catch (_) {
    // Acceso de origen cruzado denegado; no podemos hacer mucho aquí.
  }
})();
