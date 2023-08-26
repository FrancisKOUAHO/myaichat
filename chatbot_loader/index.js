document.addEventListener('DOMContentLoaded', function () {
    const container = document.createElement('div');
    container.id = 'my-chat-container'; // Change the ID here
    document.body.appendChild(container);

    const style = document.createElement('style');
    style.innerHTML = `
    .my-chat-container {
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
      .my-chat-container {
        bottom: 10px;
      }
    }
  `;
    document.head.appendChild(style);

    const button = createChatButton();
    container.appendChild(button);

    const iframe = createChatIframe();
    container.appendChild(iframe);
    applyStylesToIframe(iframe);
});

function createChatButton() {
    const button = document.createElement('button');
    button.className = 'widget-chat-button';
    button.addEventListener('click', toggleChat);

    const img = document.createElement('img');
    img.src = 'https://i.goopics.net/ux8qzl.png';
    img.alt = 'Open Chat';
    img.width = 24;
    img.height = 24;
    img.style.margin = 'auto';

    button.appendChild(img);
    return button;
}

function createChatIframe() {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://ai.myaichat.io';
    document.body.appendChild(iframe);
    return iframe;
}

function applyStylesToIframe(iframe) {
    function updateStyles() {
        const widthWindow = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        const isMobile = widthWindow < 768;

        iframe.style.display = 'none';
        iframe.style.border = 'none';
        iframe.style.opacity = '1';
        iframe.style.transform = 'scale(1)';
        iframe.style.height = isMobile ? '100vh' : 'min(740px, calc(100% - 104px))';
        iframe.style.width = isMobile ? '100%' : '400px';
        iframe.style.position = 'fixed';
        iframe.style.pointerEvents = 'all';
        iframe.style.transformOrigin = 'right bottom';
        iframe.style.transition = 'transform 0.3s cubic-bezier(0, 1.2, 1, 1) 0s, opacity 0.2s ease-out 0s';
        iframe.style.right = isMobile ? '0' : '10px';
        iframe.style.bottom = '0';
        iframe.style.zIndex = '9999';
        iframe.style.borderRadius = '0.75rem';
    }

    window.addEventListener('load', updateStyles);
    window.addEventListener('resize', updateStyles);
    updateStyles();
}

function toggleChat() {
    const iframe = document.querySelector('iframe');
    iframe.style.display = iframe.style.display === 'none' ? 'block' : 'none';
}
