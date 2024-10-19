// script.js

document.addEventListener('DOMContentLoaded', () => {
    // --- Fonctionnalité du Menu Burger ---
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

    // --- Fonctionnalité du Carousel ---
    const slides = document.querySelectorAll('.carousel_slide');
    const leftArrow = document.getElementById('l');
    const rightArrow = document.getElementById('r');
    let currentIndex = 0;

    function showSlide(index) {
        const totalSlides = slides.length;

        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }

        const offset = -currentIndex * 100;

        slides.forEach(slide => {
            slide.style.transform = `translateX(${offset}%)`;
        });
    }

    leftArrow.addEventListener('click', (e) => {
        e.preventDefault();
        showSlide(currentIndex - 1);
    });

    rightArrow.addEventListener('click', (e) => {
        e.preventDefault();
        showSlide(currentIndex + 1);
    });

    showSlide(currentIndex);

    // --- Fonctionnalité des Blockquotes ---
    let currentQuoteIndex = 1;
    const totalQuotes = 5;

    // Fonction pour passer au blockquote suivant par index
    function scrollToNext(nextIndex) {
        if (nextIndex < 1 || nextIndex > totalQuotes) {
            return;
        }

        const allBlockquotes = document.querySelectorAll('.blockquote-item');
        allBlockquotes.forEach(blockquote => {
            blockquote.classList.remove('active');
        });

        const nextBlockquote = document.getElementById(`quote${nextIndex}`);
        if (nextBlockquote) {
            nextBlockquote.classList.add('active');
            currentQuoteIndex = nextIndex;
        }
    }

    // Attacher la fonction scrollToNext au contexte global (si vous souhaitez conserver les attributs onclick)
    window.scrollToNext = scrollToNext;

    // --- Attacher les écouteurs aux boutons de navigation des blockquotes ---
    const blockquoteButtons = document.querySelectorAll('.scroll-btn');
    blockquoteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Empêche le comportement par défaut du bouton
            e.stopPropagation(); // Empêche le clic de se propager

            const nextIndex = parseInt(button.getAttribute('data-next'));
            if (!isNaN(nextIndex)) {
                scrollToNext(nextIndex);
            }
        });
    });

    // --- Fonctionnalité Barre de Progression Holo ---
    const loadingBar = document.getElementById('holo-loading-bar');
    const percentageDisplay = document.getElementById('holo-percentage');

    function getDaysElapsed(startDate) {
        const now = new Date();
        const start = new Date(startDate);
        const diffTime = now - start;
        const daysElapsed = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        return daysElapsed;
    }

    const startDate = '2024-09-06'; // Date de début (peut être modifiée)
    const daysElapsed = getDaysElapsed(startDate);
    const percentage = Math.max(0, Math.min(daysElapsed, 100)); // Assure que le pourcentage est entre 0% et 100%

    loadingBar.style.width = `${percentage}%`;
    percentageDisplay.textContent = `${percentage}%`;
});
