// Funcionalidad simple para demostrar JavaScript vanilla
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Sitio simple cargado correctamente!');
    
    // Botón de saludo interactivo
    const btnSaludo = document.getElementById('btn-saludo');
    const mensaje = document.getElementById('mensaje');
    
    const saludos = [
        '¡Hola! 👋 Este sitio funciona sin React',
        '¡Genial! 🎉 Solo HTML, CSS y JS',
        '¡Perfecto! ✨ Deploy from branch funcionando',
        '¡Increíble! 🚀 Sin build process necesario',
        '¡Fantástico! 💫 Sitio estático puro'
    ];
    
    let contadorClicks = 0;
    
    btnSaludo.addEventListener('click', function() {
        const saludoAleatorio = saludos[contadorClicks % saludos.length];
        mensaje.textContent = saludoAleatorio;
        mensaje.classList.add('mensaje-visible');
        contadorClicks++;
        
        // Efecto visual en el botón
        btnSaludo.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btnSaludo.style.transform = 'scale(1)';
        }, 150);
    });
    
    // Smooth scroll para navegación
    const enlaces = document.querySelectorAll('nav a[href^="#"]');
    
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Animación de entrada para las cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar todas las cards
    const cards = document.querySelectorAll('.card, .comparison-item');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Mostrar información técnica en consola
    console.log('📊 Información técnica:');
    console.log('- Tipo: Sitio estático');
    console.log('- Tecnologías: HTML5, CSS3, JavaScript ES6+');
    console.log('- Deploy: Compatible con "Deploy from a branch"');
    console.log('- Build: No requiere proceso de construcción');
    console.log('- Frameworks: Ninguno (Vanilla JS)');
});

// Función para mostrar el tiempo de carga
window.addEventListener('load', function() {
    const tiempoCarga = performance.now();
    console.log(`⚡ Sitio cargado en ${tiempoCarga.toFixed(2)}ms`);
    
    // Mostrar notificación de carga
    const notificacion = document.createElement('div');
    notificacion.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 1rem;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
        z-index: 1001;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    notificacion.textContent = '✅ Sitio simple cargado correctamente';
    
    document.body.appendChild(notificacion);
    
    // Mostrar y ocultar notificación
    setTimeout(() => {
        notificacion.style.opacity = '1';
    }, 100);
    
    setTimeout(() => {
        notificacion.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notificacion);
        }, 300);
    }, 3000);
});