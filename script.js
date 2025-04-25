const textElement = document.querySelector('.profile-text');
const textContent = "Desarrollador fullstack especializado en aplicaciones web y móviles multiplataforma. Creo soluciones eficientes y centradas en el usuario, siempre actualizado con las últimas tendencias y tecnologías del sector. Experto en JavaScript, React, Node.js y arquitecturas cloud.";
let index = 0;

function typeWriterEffect() {
    if (index < textContent.length) {
        textElement.textContent += textContent.charAt(index);
        index++;
        
        const speed = Math.random() * 50 + 30; // Velocidad variable para un efecto más realista
        setTimeout(typeWriterEffect, speed);
    }
}

// Iniciar el efecto después de que la página se cargue completamente
window.addEventListener('load', () => {
    setTimeout(typeWriterEffect, 500);
});