function showBox(title) {
    var infoBox;

    if (title === 'News') {
        infoBox = document.getElementById('info-box-news');
    } else if (title === 'Contact') {
        infoBox = document.getElementById('info-box-contact');
    } else if (title === 'About Us') {
        infoBox = document.getElementById('info-box-about');

    }

    // Muestra el cuadro de información
    infoBox.style.display = 'block';
}

function closeBox(title) {
    var infoBox = document.getElementById('info-box-' + title.toLowerCase());
    infoBox.style.display = 'none';
}


const form = document.getElementById('myForm');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('closeButton');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío normal del formulario

    // Aquí puedes hacer cualquier otra cosa que necesites con los datos del formulario

    // Mostrar el cuadro emergente
    popup.style.display = 'block';
});

closeButton.addEventListener('click', function() {
    // Ocultar el cuadro emergente
    popup.style.display = 'none';
});

// Redirigir a la página de inicio al hacer clic en el botón de cerrar
closeButton.addEventListener('click', function() {
    window.location.href = 'index.html'; // Cambia 'index.html' al nombre de tu página de inicio si es diferente
});






