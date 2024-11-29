document.querySelectorAll('.box-show').forEach(tc => {
    // Sélection des boutons et des lignes cachées
    const showMoreBtn = tc.querySelector('.show-more');
    const showLessBtn = tc.querySelector('.show-less');
    const hiddenItems = tc.querySelectorAll('tr.hidden');

    // Afficher les lignes cachées
    showMoreBtn.addEventListener('click', () => {
        hiddenItems.forEach(row => row.classList.remove('hidden')); // Affiche toutes les lignes
        showMoreBtn.classList.add('hidden'); // Cache le bouton "Show More"
        showLessBtn.classList.remove('hidden'); // Affiche le bouton "Show Less"
    });

    // Masquer les lignes affichées
    showLessBtn.addEventListener('click', () => {
        hiddenItems.forEach(row => row.classList.add('hidden')); // Masque les lignes
        showMoreBtn.classList.remove('hidden'); // Affiche le bouton "Show More"
        showLessBtn.classList.add('hidden'); // Cache le bouton "Show Less"
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const hiddenRowsData = [
        ["Weather App", "JS", "2022", "weatherapp.html"],
        ["Number Cruncher", "JS", "2022", "numbercruncher.html"],
        ["Vejimo", "JS", "2022", "vejimo.html"],
        ["Numérique Pour Tous", "JS", "2021", "numeriquepourtous.html"],
        ["SanctusRP", "LUA", "2021", "sanctusrp.html"],
        ["DEFT Card Game", "MEAN", "2021", "deftcardgame.html"],
        ["The Hangman", "Python", "2021", "thehangman.html"]
    ];
    
    const showMoreBtn = document.querySelector('.show-more');
    const showLessBtn = document.querySelector('.show-less');
    const hiddenRows = document.querySelectorAll('.hidden-row');
    
    showMoreBtn.addEventListener('click', () => {
        hiddenRows.forEach(row => {
            row.classList.add('show'); // Montre les lignes supplémentaires
        });
        showMoreBtn.classList.add('hidden');
        showLessBtn.classList.remove('hidden');
    });
    
    showLessBtn.addEventListener('click', () => {
        hiddenRows.forEach(row => {
            row.classList.remove('show'); // Cache les lignes supplémentaires
        });
        showMoreBtn.classList.remove('hidden');
        showLessBtn.classList.add('hidden');
    });
});