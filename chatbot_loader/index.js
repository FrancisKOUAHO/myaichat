const iframe = document.createElement('iframe');
iframe.src = 'http://localhost:3000';
iframe.style.width = '352px';
iframe.style.maxWidth = '400px';
iframe.style.height = '506px';
iframe.style.maxHeight = '506px';
iframe.style.position = 'fixed';
iframe.style.bottom = '0';
iframe.style.right = '0';
iframe.style.border = 'none';
iframe.style.zIndex = '999'
document.body.appendChild(iframe);