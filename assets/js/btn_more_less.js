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

document.querySelectorAll('.table-wrapper').forEach(wrapper => {
    const showMoreBtn = wrapper.querySelector('.show-more');
    const showLessBtn = wrapper.querySelector('.show-less');
    const hiddenRows = wrapper.querySelectorAll('tr.hidden');

    // Afficher les lignes cachées
    showMoreBtn.addEventListener('click', () => {
        hiddenRows.forEach(row => row.classList.remove('hidden'));
        showMoreBtn.classList.add('hidden');
        showLessBtn.classList.remove('hidden');
    });

    // Masquer les lignes
    showLessBtn.addEventListener('click', () => {
        hiddenRows.forEach(row => row.classList.add('hidden'));
        showMoreBtn.classList.remove('hidden');
        showLessBtn.classList.add('hidden');
    });
});
