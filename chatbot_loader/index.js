document.addEventListener('DOMContentLoaded', function () {
    const container = document.createElement('div');
    container.className = 'widget-chat-container';
    document.body.appendChild(container);

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
            .widget-chat-button {
                bottom: 10px;
            }

            .widget-chat-iframe {
                width: 100%;
                right: 0;
            }
        }

        .widget-chat-iframe {
            border: none;
            opacity: 1;
            transform: scale(1);
            height: 100vh;
            width: 400px;
            position: fixed;
            pointer-events: all;
            transform-origin: right bottom;
            transition: transform 0.3s cubic-bezier(0, 1.2, 1, 1) 0s, opacity 0.2s ease-out 0s;
            right: 10px;
            bottom: 0;
            z-index: 9999;
            border-radius: 0.75rem;
        }
        
        #widget-chat-iframe-hidden {
            display: none;
        }
    `;
    document.head.appendChild(style);

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

    container.appendChild(button);

    const iframe = createIframe();
    iframe.id = 'widget-chat-iframe-hidden';
    iframe.classList.add('widget-chat-iframe');
    container.appendChild(iframe);
});

function createIframe() {
    const iframe = document.createElement('iframe');
    //iframe.src = 'https://ai.myaichat.io';
    iframe.src = 'http://localhost:3031';
    document.body.appendChild(iframe);
    return iframe;
}

function toggleChat() {
    const iframe = document.getElementById('widget-chat-iframe-hidden');
    iframe.style.display = (iframe.style.display === 'none') ? 'block' : 'none';
}