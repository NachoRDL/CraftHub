function showBox(title) {
    var infoBox = document.getElementById('info-box');
    var boxTitle = document.getElementById('box-title');
    var boxContent = document.getElementById('box-content');
    
    if (title === 'News') {
        boxTitle.innerText = 'News';
        boxContent.innerText = 'Estamos en nuestros inicios... Espera lo inesperado';
    } else if (title === 'Contact') {
        boxTitle.innerText = 'Contact';
        boxContent.innerText = 'Puedes contactarnos a través de nuestro formulario o enviándonos un correo electrónico: crafthub2024@gmail.com';
    } else if (title === 'About Us') {
        boxTitle.innerText = 'About Us';
        boxContent.innerText = 'Somos una empresa comprometida con la creatividad y la calidad en cada producto que ofrecemos.';
    }
    infoBox.style.display = 'block';
}

function closeBox() {
    var infoBox = document.getElementById('info-box');
    infoBox.style.display = 'none';
}





