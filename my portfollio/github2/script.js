document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("appsearch");
    const appContainer = document.getElementById("apps-container"); // Removed the extra 's'
    
    if (searchInput && appContainer) {
        const cards = appContainer.getElementsByClassName("card");

        searchInput.addEventListener("input", (e) => {
            const filterValue = e.target.value.toLowerCase().trim();

            Array.from(cards).forEach((card) => {
                const title = card.querySelector("h3").textContent.toLowerCase();
                const description = card.querySelector(".card-content").textContent.toLowerCase();

                if (title.includes(filterValue) || description.includes(filterValue)) {
                    card.style.display = ""; 
                } else {
                    card.style.display = "none"; 
                }
            });
        });
    }
});