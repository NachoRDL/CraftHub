document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const popup = document.getElementById('popup');
    const closeButton = document.getElementById('closeButton');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío normal del formulario

        // Mostrar el cuadro emergente
        popup.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
        // Ocultar el cuadro emergente
        popup.style.display = 'none';

        // Redirigir a la página de inicio
        window.location.href = 'index.html'; // Cambia 'index.html' al nombre de tu página de inicio si es diferente
    });
});
