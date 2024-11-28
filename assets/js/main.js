document.querySelectorAll('.swiper-slide').forEach(slide => {
    const showMoreBtn = slide.querySelector('.show-more');
    const showLessBtn = slide.querySelector('.show-less');
    const hiddenItems = slide.querySelectorAll('.hidden');

    // Activer le bouton "plus"
    showMoreBtn.addEventListener('click', () => {
        hiddenItems.forEach(item => item.classList.remove('hidden'));
        showMoreBtn.classList.add('hidden');
        showLessBtn.classList.remove('hidden');
    });

    // Activer le bouton "moins"
    showLessBtn.addEventListener('click', () => {
        hiddenItems.forEach(item => item.classList.add('hidden'));
        showMoreBtn.classList.remove('hidden');
        showLessBtn.classList.add('hidden');
    });
});