document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('appsearch');
    const appContainer = document.getElementById('apps-container');

    if (!searchInput || !appContainer) return;

    const cards = appContainer.getElementsByClassName('card');

    searchInput.addEventListener('input', (e) => {
        const filterValue = e.target.value.toLowerCase().trim();

        Array.from(cards).forEach((card) => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('.card-content').textContent.toLowerCase();

            card.style.display = (title.includes(filterValue) || description.includes(filterValue))
                ? ''
                : 'none';
        });
    });
});
