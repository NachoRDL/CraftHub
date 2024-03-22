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


