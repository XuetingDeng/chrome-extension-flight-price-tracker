// content.js

console.log("Content script injected on:", window.location.href);

function showPopup() {
    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.bottom = '20px';
    popup.style.right = '20px';
    popup.style.padding = '20px';
    popup.style.backgroundColor = '#fff';
    popup.style.border = '1px solid #ccc';
    popup.style.borderRadius = '5px';
    popup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    popup.style.zIndex = '10000';
    popup.style.fontSize = '16px';
    popup.style.height = '200px';
    popup.style.display = 'flex';
    popup.style.alignItems = 'center';

    popup.innerText = 'Tracking Flight Prices Now!';
  
    const closeButton = document.createElement('button');
    closeButton.innerText = 'Close';
    closeButton.style.marginLeft = '10px';
    closeButton.onclick = () => popup.remove();
    
    popup.appendChild(closeButton);
    document.body.appendChild(popup);
}

showPopup();
  