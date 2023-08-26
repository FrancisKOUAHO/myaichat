window.addEventListener('load', function () {
    console.log('Chatbot loader loaded');
    const container = document.getElementById('widget-chat-container');

    const style = document.createElement('style');
    style.innerHTML = `
    .widget-chat-button {
      position: fixed;
      width: 50px;
      height: 50px;
      border-radius: 25px;
      background-color: black;
      cursor: pointer;
      z-index: 999999999;
      transition: all 0.2s ease-in-out 0s;
      right: 15px;
      bottom: 20px;
      transform: scale(1);
    }

    @media (max-width: 767px) {
      .ui-button {
        bottom: 10px;
      }
    }
  `;
    document.head.appendChild(style);

    const button = document.createElement('button');
    button.className = 'widget-chat-button';
    button.onclick = toggleChat;


    const img = document.createElement('img');
    img.src = 'https://i.goopics.net/ux8qzl.png';
    img.alt = 'Open Chat';
    img.width = 24;
    img.height = 24;
    img.style.marginLeft = 'auto';
    img.style.marginRight = 'auto';

    button.appendChild(img);

    container.appendChild(button);

    function toggleChat() {
        const iframe = document.querySelector('iframe');
        const button = document.querySelector('button');
        if (iframe.style.display === 'none') {
            iframe.style.display = 'block';
        } else {
            iframe.style.display = 'none';
        }

        console.log(iframe);
    }
});

function applyStylesToIframe(iframe) {
    window.addEventListener('load', () => {
        let widthWindow = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (widthWindow >= 768) {
            iframe.style.display = 'none';
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
            iframe.style.display = 'none';
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