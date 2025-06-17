// JavaScript simple para demostrar Deploy from a branch
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Sitio cargado - Deploy from a branch funcionando!');
    
    const btnDemo = document.getElementById('btn-demo');
    const mensaje = document.getElementById('mensaje');
    
    const mensajes = [
        '¡Funciona! 🎉',
        '¡Deploy from a branch activo! ✅',
        '¡Sin build process! ⚡',
        '¡Sitio estático puro! 🚀'
    ];
    
    let contador = 0;
    
    btnDemo.addEventListener('click', function() {
        mensaje.textContent = mensajes[contador % mensajes.length];
        mensaje.classList.add('mensaje-visible');
        contador++;
        
        // Efecto en el botón
        btnDemo.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btnDemo.style.transform = 'scale(1)';
        }, 150);
    });
});

// Mostrar tiempo de carga
window.addEventListener('load', function() {
    const tiempo = performance.now();
    console.log(`⚡ Cargado en ${tiempo.toFixed(2)}ms - ¡Deploy from a branch es rápido!`);
});