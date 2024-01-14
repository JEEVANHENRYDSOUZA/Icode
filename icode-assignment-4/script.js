const toggleBtn = document.querySelector('.toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function () {
    sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function () {
    sidebar.classList.remove('show-sidebar');
});

// function to represent the existing data
// Get DOM elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');
const dessertCards = document.querySelectorAll('.card');

// Function to perform search
function performSearch() {
    const query = searchInput.value.toLowerCase();

    // Hide all dessert cards
    dessertCards.forEach(card => card.style.display = 'none');

    // Show dessert cards with names matching the query
    dessertCards.forEach(card => {
        const cardTitle = card.querySelector('h3').textContent.toLowerCase();
        if (cardTitle.includes(query)) {
            card.style.display = 'block';
        }
    });

    // Show search results container
    searchResults.style.display = 'block';
}

// Event listeners
searchButton.addEventListener('click', performSearch);
searchInput.addEventListener('input', performSearch);

// Function to show the modal
function showModal(dessertName) {
    const modal = document.getElementById('myModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');

    // Set modal content based on the dessert name
    modalTitle.textContent = dessertName;
    modalContent.textContent = `This is information about ${dessertName}.`;
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}


const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.card');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Show the first slide initially
showSlide(currentIndex);



