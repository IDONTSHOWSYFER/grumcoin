// script.js

// --- Fonctionnalité du Menu Burger ---
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.navbar-links');
    const navLinksLi = document.querySelectorAll('.navbar-links li');
    const closeBtn = document.querySelector('.navbar-links .close-menu a');

    // Fonction pour activer/désactiver le menu
    const toggleMenu = (e) => {
        e.stopPropagation(); // Empêche le clic de se propager
        navLinks.classList.toggle('active');

        // Animer les liens de navigation
        navLinksLi.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Animation de l'icône burger
        burger.classList.toggle('toggle');
    };

    // Ouvrir/fermer le menu en cliquant sur le burger
    burger.addEventListener('click', toggleMenu);

    // Fermer le menu en cliquant sur le bouton de fermeture
    closeBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Empêche le comportement par défaut du lien
        navLinks.classList.remove('active');

        // Réinitialiser les animations des liens
        navLinksLi.forEach((link) => {
            link.style.animation = '';
        });

        // Réinitialiser l'animation du burger
        burger.classList.remove('toggle');
    });

    // Fermer le menu en cliquant en dehors du menu burger
    document.addEventListener('click', (e) => {
        // Vérifie si le menu est ouvert et si le clic est en dehors du menu et du burger
        if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !burger.contains(e.target)) {
            navLinks.classList.remove('active');

            // Réinitialiser les animations des liens
            navLinksLi.forEach((link) => {
                link.style.animation = '';
            });

            // Réinitialiser l'animation du burger
            burger.classList.remove('toggle');
        }
    });

    // Fermer le menu en faisant défiler la page
    window.addEventListener('scroll', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');

            // Réinitialiser les animations des liens
            navLinksLi.forEach((link) => {
                link.style.animation = '';
            });

            // Réinitialiser l'animation du burger
            burger.classList.remove('toggle');
        }
    });
});

// --- Fonctionnalité du Carousel ---
document.addEventListener('DOMContentLoaded', function () {
    // Get all elements with the class 'carousel_slide' (these are the slides)
    const slides = document.querySelectorAll('.carousel_slide');
    
    // Get the left and right arrow buttons by their ID
    const leftArrow = document.getElementById('l');
    const rightArrow = document.getElementById('r');
    
    // Initialize the current index of the slide to 0 (first slide)
    let currentIndex = 0;

    // Function to display the slide at a given index
    function showSlide(index) {
        const totalSlides = slides.length;
        
        // Check if the index is greater than the number of slides, if so, reset to 0
        if (index >= totalSlides) {
            currentIndex = 0;
        } 
        // If the index is less than 0, set it to the last slide
        else if (index < 0) {
            currentIndex = totalSlides - 1;
        } 
        // Otherwise, update the current index to the passed value
        else {
            currentIndex = index;
        }
        
        // Calculate the offset for slide movement (each slide moves 100% width)
        const offset = -currentIndex * 100;
        
        // Apply the offset to each slide to create the carousel effect
        slides.forEach(slide => {
            slide.style.transform = `translateX(${offset}%)`;
        });
    }

    // Add click event listener to the left arrow to go to the previous slide
    leftArrow.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    // Add click event listener to the right arrow to go to the next slide
    rightArrow.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    // Initially show the first slide when the page loads
    showSlide(currentIndex);
});

// --- Fonctionnalité des Blockquotes ---
let currentQuoteIndex = 1;
const totalQuotes = 5;

// Fonction pour passer au blockquote suivant par index
function scrollToNext(nextIndex) {
    if (nextIndex < 1 || nextIndex > totalQuotes) {
        return;
    }

    // Sélectionner tous les blockquotes
    const allBlockquotes = document.querySelectorAll('.blockquote-item');

    // Supprimer la classe 'active' de tous les blockquotes
    allBlockquotes.forEach(blockquote => {
        blockquote.classList.remove('active');
    });

    // Sélectionner le blockquote suivant par ID
    const nextBlockquote = document.getElementById(`quote${nextIndex}`);

    // Ajouter la classe 'active' au blockquote suivant
    if (nextBlockquote) {
        nextBlockquote.classList.add('active');
        currentQuoteIndex = nextIndex; // Mettre à jour l'index actuel
    }
}

// --- Fonctionnalité Barre de Progression Holo ---
document.addEventListener('DOMContentLoaded', () => {
    // Get the loading bar element by its ID
    const loadingBar = document.getElementById('holo-loading-bar');
    
    // Get the percentage display element by its ID
    const percentageDisplay = document.getElementById('holo-percentage');

    // Function to calculate the number of days since the given start date
    function getDaysElapsed(startDate) {
        const now = new Date(); // Get the current date and time
        const start = new Date(startDate); // Convert the startDate string into a Date object
        const diffTime = now - start; // Calculate the time difference in milliseconds
        const daysElapsed = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
        return daysElapsed;
    }

    // Set the start date (you can change this date to your desired value)
    const startDate = '2024-09-06'; // Example start date: September 6, 2024

    // Calculate the number of days since the start date
    const daysElapsed = getDaysElapsed(startDate);

    // The loading bar should increase by 1% each day, starting from 0%
    const percentage = Math.max(0, Math.min(daysElapsed, 100)); // Ensure the percentage is between 0% and 100%

    // Update the width of the loading bar and display the percentage
    loadingBar.style.width = `${percentage}%`;
    percentageDisplay.textContent = `${percentage}%`;
});
