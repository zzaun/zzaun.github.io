// Función para el desplazamiento suave
function scrollToElement(element) {
    const startPosition = window.pageYOffset; // Posición actual
    const targetPosition = element.offsetTop; // Posición del destino
    const distance = targetPosition - startPosition; // Distancia total
    const duration = 1000; // Duración de la animación en milisegundos (ajustable)
    let startTime = null;
  
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOut(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
  
    // Función de easing (para hacer que el movimiento no sea lineal)
    function easeInOut(t, b, c, d) {
        const ts = (t /= d) * t;
        const tc = ts * t;
        return b + c * (tc + -3 * ts + 3 * t);
    }
  
    // Inicia la animación
    requestAnimationFrame(animation);
}
  
  // Añadir el evento de clic en los enlaces
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetID);
        scrollToElement(targetElement);
    });
});
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
      
        const targetID = this.getAttribute('href').substring(1); // Obtener el ID del destino
        const targetElement = document.getElementById(targetID);
      
        window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
        });
    });
});

