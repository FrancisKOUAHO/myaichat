// Gestion des styles responsives avec les media queries
const styleSheet = document.styleSheets[0];

if (styleSheet) {
    styleSheet.insertRule(`
    @media (max-width: 767px) {
      iframe {
        width: 100%;
        height: 100vh;
      }
    }
  `, styleSheet.cssRules.length);
}

// Création et configuration de l'iframe
const iframe = document.createElement('iframe');
iframe.src = 'http://localhost:3031';
iframe.style.width = '352px';
iframe.style.maxWidth = '400px';
iframe.style.height = '506px';
iframe.style.maxHeight = '506px';
iframe.style.position = 'fixed';
iframe.style.bottom = '0';
iframe.style.right = '0';
iframe.style.border = 'none';
iframe.style.zIndex = '999';
document.body.appendChild(iframe);