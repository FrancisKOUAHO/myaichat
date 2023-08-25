function applyStylesToIframe(iframe) {

    window.addEventListener('load', () => {
        let widthWindow = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (widthWindow >= 768) {
            iframe.style.border = 'none';
            iframe.style.opacity = '1';
            iframe.style.transform = 'scale(1)';
            iframe.style.height = 'min(740px, calc(100% - 104px))';
            iframe.style.position = 'fixed';
            iframe.style.pointerEvents = 'all';
            iframe.style.transformOrigin = 'right bottom';
            iframe.style.transition = 'transform 0.3s cubic-bezier(0, 1.2, 1, 1) 0s, opacity 0.2s ease-out 0s';
            iframe.style.right = '10px';
            iframe.style.bottom = '0';
            iframe.style.width = '400px';
            iframe.style.zIndex = '10000';
            iframe.style.borderRadius = '0.75rem';

        } else {
            iframe.style.border = 'none';
            iframe.style.opacity = '1';
            iframe.style.transform = 'scale(1)';
            iframe.style.height = '100vh';
            iframe.style.width = '100%';
            iframe.style.position = 'fixed';
            iframe.style.bottom = '0';
            iframe.style.right = '0';
            iframe.style.pointerEvents = 'all';
            iframe.style.transformOrigin = 'right bottom';
            iframe.style.transition = 'transform 0.3s cubic-bezier(0, 1.2, 1, 1) 0s, opacity 0.2s ease-out 0s';
            iframe.style.zIndex = '10000';
            iframe.style.borderRadius = '0.75rem';

        }
    });
}

function createIframe() {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://ai.myaichat.io';
    //iframe.src = 'http://localhost:3031';
    document.body.appendChild(iframe);
    applyStylesToIframe(iframe);
}

createIframe();