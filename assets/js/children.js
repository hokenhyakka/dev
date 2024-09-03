document.addEventListener('DOMContentLoaded', function() {
    const h1Content = document.querySelector('h1').textContent;
    const currentDirectory = document.querySelector('.currentDirectory');
    if (currentDirectory) {
        currentDirectory.textContent = h1Content;
    }
});