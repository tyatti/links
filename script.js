document.addEventListener('keydown', function(event) {
    const links = document.querySelectorAll('a');
    let currentIndex = document.activeElement.tabIndex - 1;

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % links.length;
        links[currentIndex].focus();
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + links.length) % links.length;
        links[currentIndex].focus();
    }
});
