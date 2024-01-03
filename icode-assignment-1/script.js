document.addEventListener("DOMContentLoaded", function () {
    const loadMoreButton = document.getElementById("loadMore");
    const cardsContainer = document.querySelector(".cards");

    // Define the new cards to add when "more" is clicked
    const newCardsHTML = `
                <div class="card">
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
                <article>
                    <h3>Fresh Start</h3>
                    <br>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, eum asperiores iste architecto deserunt vel.</p>
                </article>
                <br>
                <a href="#">See project <i class="fas fa-arrow-right"></i></a>
            </div>

            <div class="card">
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
                <article>
                    <h3>Libera</h3>
                    <br>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, eum asperiores iste architecto deserunt vel.</p>
                </article>
                <br>
                <a href="#">See project <i class="fas fa-arrow-right"></i></a>
            </div>

            <div class="card">
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
                <article>
                    <h3>McDade's</h3>
                    <br>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, eum asperiores iste architecto deserunt vel.</p>
                </article>
                <br>
                <a href="#">See project <i class="fas fa-arrow-right"></i></a>
            </div>
            `;

    // Function to load more cards
    function loadMoreCards() {
        // Append the new cards to the cards container
        cardsContainer.innerHTML += newCardsHTML;
    }

    // Event listener for the "more" link
    loadMoreButton.addEventListener("click", function (e) {
        e.preventDefault();
        loadMoreCards();
    });
});