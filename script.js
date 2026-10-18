document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. LÓGICA DEL FORMULARIO Y POPUP EMERGENTE
    // ==========================================
    const form = document.getElementById('myForm');
    const popup = document.getElementById('popup');
    const closeButton = document.getElementById('closeButton');

    // Solo se ejecuta si los elementos existen en la página actual
    if (form && popup && closeButton) {
        
        // Manejo del envío del formulario
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Evitar el envío normal que recarga la página
            
            // Aquí puedes hacer tu lógica de envío de datos (ej. fetch)
            
            popup.style.display = 'block'; // Mostrar el cuadro emergente
        });

        // Manejo del botón de cerrar
        closeButton.addEventListener('click', () => {
            popup.style.display = 'none'; // Ocultar el cuadro emergente
            window.location.href = 'index.html'; // Redirigir al inicio
        });
    }

    // ==========================================
    // 2. LÓGICA DE LAS CAJAS DE INFORMACIÓN (MODALES)
    // ==========================================
    
    // Diccionario de datos para hacer el código más limpio (evita usar muchos if/else)
    const infoTexts = {
        'News': 'Estamos en nuestros inicios... Espera lo inesperado',
        'Contact': 'Puedes contactarnos a través de nuestro formulario o enviándonos un correo electrónico: crafthub2024@gmail.com',
        'About Us': 'Somos una empresa comprometida con la creatividad y la calidad en cada producto que ofrecemos.'
    };

    // Declaramos las funciones en el objeto "window" para que funcionen 
    // si las estás llamando desde el HTML (ej. onclick="showBox('News')")
    window.showBox = (title) => {
        // Elementos para el enfoque de una sola caja dinámica
        const infoBox = document.getElementById('info-box');
        const boxTitle = document.getElementById('box-title');
        const boxContent = document.getElementById('box-content');

        if (infoBox && boxTitle && boxContent) {
            // Opción A: Tienes una sola caja y le cambias el contenido dinámicamente
            boxTitle.textContent = title;
            boxContent.textContent = infoTexts[title] || 'Información no disponible.';
            infoBox.style.display = 'block';
        } else {
            // Opción B: Tienes varias cajas ocultas por separado (info-box-news, etc.)
            const specificBox = document.getElementById(`info-box-${title.toLowerCase()}`);
            if (specificBox) {
                specificBox.style.display = 'block';
            } else {
                console.warn(`No se encontró la caja de información para: ${title}`);
            }
        }
    };

    window.closeBox = (title) => {
        const infoBox = document.getElementById('info-box');
        
        if (infoBox) {
            // Cierra la caja dinámica
            infoBox.style.display = 'none';
        } else if (title) {
            // Cierra la caja específica si usas múltiples cajas
            const specificBox = document.getElementById(`info-box-${title.toLowerCase()}`);
            if (specificBox) specificBox.style.display = 'none';
        }
    };

});