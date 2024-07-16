console.log("Hello, World!");

// You can add more JavaScript code here
document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    const paragraph = document.createElement('p');
    paragraph.textContent = 'This text was added by JavaScript!';
    app.appendChild(paragraph);
});