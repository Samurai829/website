document.addEventListener('mousemove', (e) => {
/* ============================================
   404.js — Interacciones dinámicas
   Requiere las clases del 404.css:
   .object_earth, .object_moon, .object_planet,
   .object_rocket, .object_ovni, .object_astronaut,
   .box_astronaut, .glowing_stars, .btn-go-home
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ---------------------------------------
       1. PARALLAX CON EL MOUSE
       Los objetos de fondo se mueven levemente
       según la posición del cursor, dando
       sensación de profundidad.
    ---------------------------------------- */
    const parallaxLayers = [
        { el: document.querySelector('.object_earth'),     depth: 0.02 },
        { el: document.querySelector('.object_moon'),       depth: 0.04 },
        { el: document.querySelector('.object_planet'),     depth: 0.015 },
        { el: document.querySelector('.box_astronaut'),     depth: 0.05 },
        { el: document.querySelector('.object_ovni'),       depth: 0.06 },
    ].filter(layer => layer.el); // descarta los que no existan en el DOM

    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX - window.innerWidth / 2);
        mouseY = (e.clientY - window.innerHeight / 2);
    });

    // Animación suave (lerp) para que el parallax no se sienta brusco
    function animateParallax() {
        targetX += (mouseX - targetX) * 0.06;
        targetY += (mouseY - targetY) * 0.06;

        parallaxLayers.forEach(({ el, depth }) => {
            el.style.setProperty('--parallax-x', `${targetX * depth}px`);
            el.style.setProperty('--parallax-y', `${targetY * depth}px`);
            el.style.marginLeft = `${targetX * depth}px`;
            el.style.marginTop = `${targetY * depth}px`;
        });

        requestAnimationFrame(animateParallax);
    }
    if (parallaxLayers.length) animateParallax();


    /* ---------------------------------------
       2. TIERRA: clic para girar rápido
    ---------------------------------------- */
    const earth = document.querySelector('.object_earth');
    if (earth) {
        earth.style.cursor = 'pointer';
        earth.addEventListener('click', () => {
            earth.classList.add('spin-earth-on-hover');
            setTimeout(() => earth.classList.remove('spin-earth-on-hover'), 2000);
        });
    }


    /* ---------------------------------------
       3. COHETE: clic para "lanzarlo" con boost
    ---------------------------------------- */
    const rocket = document.querySelector('.object_rocket');
    if (rocket) {
        rocket.style.cursor = 'pointer';
        rocket.addEventListener('click', () => {
            rocket.style.filter = 'drop-shadow(0 0 20px #ffcb39)';
            rocket.style.animationDuration = '3s';
            createParticleBurst(rocket, '#ffcb39');
            setTimeout(() => {
                rocket.style.animationDuration = '';
                rocket.style.filter = '';
            }, 3000);
        });
    }


    /* ---------------------------------------
       4. ASTRONAUTA ARRASTRABLE (drag)
    ---------------------------------------- */
    const astronautBox = document.querySelector('.box_astronaut');
    if (astronautBox) {
        let isDragging = false;
        let offsetX = 0, offsetY = 0;

        astronautBox.style.cursor = 'grab';

        astronautBox.addEventListener('mousedown', (e) => {
            isDragging = true;
            astronautBox.style.cursor = 'grabbing';
            astronautBox.style.animationPlayState = 'paused';
            offsetX = e.clientX - astronautBox.getBoundingClientRect().left;
            offsetY = e.clientY - astronautBox.getBoundingClientRect().top;
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            astronautBox.style.position = 'fixed';
            astronautBox.style.left = `${e.clientX - offsetX}px`;
            astronautBox.style.top = `${e.clientY - offsetY}px`;
            astronautBox.style.right = 'auto';
        });

        window.addEventListener('mouseup', () => {
            if (!isDragging) return;
            isDragging = false;
            astronautBox.style.cursor = 'grab';
            // Devuelve el astronauta a su animación tras soltar
            setTimeout(() => {
                astronautBox.style.animationPlayState = 'running';
            }, 300);
        });
    }


    /* ---------------------------------------
       5. ESTRELLAS DINÁMICAS
       Genera estrellas adicionales aleatorias
       y hace que "exploten" con un click.
    ---------------------------------------- */
    const starsContainer = document.querySelector('.glowing_stars');
    if (starsContainer) {
        const EXTRA_STARS = 25;
        for (let i = 0; i < EXTRA_STARS; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.top = `${Math.random() * 95}%`;
            star.style.left = `${Math.random() * 95}%`;
            star.style.animationDuration = `${1.5 + Math.random() * 2}s`;
            star.style.animationDelay = `${Math.random() * 6}s`;
            star.style.animationName = 'glow-star';
            star.style.animationIterationCount = 'infinite';
            star.style.animationDirection = 'alternate';
            star.style.animationTimingFunction = 'ease-in-out';
            starsContainer.appendChild(star);
        }

        // Delegación de eventos: clic en cualquier estrella la hace "explotar"
        starsContainer.addEventListener('click', (e) => {
            if (!e.target.classList.contains('star')) return;
            createParticleBurst(e.target, '#ffffff');
            e.target.style.transform = 'scale(0)';
            e.target.style.opacity = '0';
            setTimeout(() => {
                e.target.style.transform = '';
                e.target.style.opacity = '';
            }, 600);
        });
    }


    /* ---------------------------------------
       6. BOTÓN "VOLVER AL INICIO"
       Pequeño efecto de despegue antes de navegar
    ---------------------------------------- */
    const homeBtn = document.querySelector('.btn-go-home');
    if (homeBtn) {
        homeBtn.addEventListener('click', (e) => {
            if (homeBtn.dataset.leaving) return; // evita doble click
            e.preventDefault();
            homeBtn.dataset.leaving = 'true';
            homeBtn.style.transform = 'scale(0.9)';
            homeBtn.style.opacity = '0.6';
            const destination = homeBtn.getAttribute('href') || '/';
            setTimeout(() => { window.location.href = destination; }, 350);
        });
    }


    /* ---------------------------------------
       7. UTILIDAD: ráfaga de partículas
       Crea un pequeño estallido de puntos
       en la posición de un elemento.
    ---------------------------------------- */
    function createParticleBurst(targetEl, color = '#ffcb39') {
        const rect = targetEl.getBoundingClientRect();
        const originX = rect.left + rect.width / 2;
        const originY = rect.top + rect.height / 2;

        for (let i = 0; i < 10; i++) {
            const particle = document.createElement('div');
            const angle = (Math.PI * 2 * i) / 10;
            const distance = 30 + Math.random() * 30;

            particle.style.position = 'fixed';
            particle.style.left = `${originX}px`;
            particle.style.top = `${originY}px`;
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.borderRadius = '50%';
            particle.style.background = color;
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9999';
            particle.style.opacity = '1';
            particle.style.transition = 'transform 0.6s ease-out, opacity 0.6s ease-out';
            document.body.appendChild(particle);

            requestAnimationFrame(() => {
                particle.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
                particle.style.opacity = '0';
            });

            setTimeout(() => particle.remove(), 650);
        }
    }

});