// content.js

console.log("Content script injected on:", window.location.href);

function showPopup() {
    const popup = document.createElement('div');
    Object.assign(popup.style, {
        position: 'fixed',
        top: '80px',
        right: '20px',
        padding: '20px',
        backgroundColor: '#ffffff',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        zIndex: '10000',
        fontSize: '16px',
        height: '150px',
        width: '280px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
    });

    // popup window title
    const title = document.createElement('h3');
    title.innerText = 'Flight Price Tracker';
    title.style.margin = '0';
    title.style.fontSize = '18px';
    title.style.color = '#0073e6';


    // popup content
    const message = document.createElement('p');
    message.innerText = 'Tracking flight prices now!';
    message.style.margin = '10px 0 0 0';
    message.style.fontSize = '14px';
    message.style.color = '#555';
    message.style.textAlign = 'center';

    // close button
    const closeButton = document.createElement('button');
    closeButton.innerText = 'Close';
    Object.assign(closeButton.style, {
        backgroundColor: '#0073e6',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '8px 12px',
        fontSize: '14px',
        cursor: 'pointer',
        marginTop: '10px',
    });
    closeButton.onclick = () => popup.remove();

    popup.appendChild(title);
    popup.appendChild(message);
    popup.appendChild(closeButton);

    document.body.appendChild(popup);
}

showPopup();
  