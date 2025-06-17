document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('btn');
    const frase = document.getElementById('frase');
    
    const frases = [
        'Funciona bien',
        'Es muy fácil',
        'Sin complicaciones',
        'Deploy directo',
        'Sitio simple'
    ];
    
    let contador = 0;
    
    btn.addEventListener('click', function() {
        frase.textContent = frases[contador % frases.length];
        contador++;
    });
});