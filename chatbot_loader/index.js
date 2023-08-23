function applyStylesToIframe(iframe) {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth;

    if (screenWidth >= 768) {
        iframe.classList.add('desktop');
        iframe.classList.remove('mobile');
    } else {
        iframe.classList.add('mobile');
        iframe.classList.remove('desktop');
    }
}

function createIframe() {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://ai.myaichat.io';
    document.body.appendChild(iframe);
    applyStylesToIframe(iframe);
}

// Appeler la fonction pour créer l'iframe et appliquer les styles
createIframe();