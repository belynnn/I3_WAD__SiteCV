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
    // Sélectionne tous les conteneurs avec la classe 'show-box'
    const showBoxes = document.querySelectorAll('.show-box');

    showBoxes.forEach(showBox => {
        const showMoreBtn = showBox.querySelector('.show-more');
        const showLessBtn = showBox.querySelector('.show-less');
        const hiddenRows = showBox.querySelectorAll('.hidden-row');

        // Bouton "Voir plus"
        showMoreBtn.addEventListener('click', () => {
            hiddenRows.forEach(row => {
                row.classList.add('show'); // Montre les lignes supplémentaires
            });
            showBox.classList.add('expanded'); // Hauteur auto
            showMoreBtn.classList.add('hidden');
            showLessBtn.classList.remove('hidden');
        });

        // Bouton "Voir moins"
        showLessBtn.addEventListener('click', () => {
            hiddenRows.forEach(row => {
                row.classList.remove('show'); // Cache les lignes supplémentaires
            });
            showBox.classList.remove('expanded'); // Reviens à 150px
            showMoreBtn.classList.remove('hidden');
            showLessBtn.classList.add('hidden');
        });
    });
});