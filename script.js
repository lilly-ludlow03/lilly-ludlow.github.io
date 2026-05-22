function toggleList(btn) {
    const ul = btn.previousElementSibling;
    const hiddenItems = ul.querySelectorAll('.hidden-item');
    const isExpanded = btn.dataset.expanded === 'true';

    hiddenItems.forEach(item => {
        item.style.display = isExpanded ? 'none' : 'list-item';
    });

    btn.dataset.expanded = isExpanded ? 'false' : 'true';
    btn.textContent = isExpanded ? '...more' : 'show less';
}

const btn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 300);
});

btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.replaceState(null, '', window.location.pathname);
});