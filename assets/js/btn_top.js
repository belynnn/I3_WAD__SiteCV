const backToTopButton = document.querySelector('.back-to-top');

document.querySelector('.back-to-top').classList.add('hidden');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Affiche le bouton après 300px de défilement
        backToTopButton.classList.remove('hidden');
    } else {
        backToTopButton.classList.add('hidden');
    }
});