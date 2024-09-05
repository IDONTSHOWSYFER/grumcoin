document.addEventListener('DOMContentLoaded', function () {
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

    leftArrow.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    rightArrow.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    // Show the first slide initially
    showSlide(currentIndex);
});

let currentIndex = 1;

function scrollToNext(nextIndex) {
    const currentBlockquote = document.querySelector('.blockquote-item.active');
    const nextBlockquote = document.getElementById(`quote${nextIndex}`);
    
    if (currentBlockquote) {
        currentBlockquote.classList.remove('active');
    }
    
    if (nextBlockquote) {
        nextBlockquote.classList.add('active');
        currentIndex = nextIndex;
    }
}

// Initialiser le premier blockquote comme actif
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('quote1').classList.add('active');
});