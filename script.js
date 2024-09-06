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
document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('background-audio');

    // Attempt to play audio automatically
    audio.play().catch(function(error) {
        console.log('Autoplay blocked. Waiting for user interaction.');
        // If autoplay is blocked, listen for a user interaction to play the audio
        document.body.addEventListener('click', function() {
            audio.play().catch(function(error) {
                console.log('Playback error:', error);
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Get references to the loading bar and the percentage display elements
    const loadingBar = document.getElementById('satanic-loading-bar');
    const percentageDisplay = document.getElementById('satanic-percentage');

    // Function to calculate the number of days elapsed since a start date
    function getDaysElapsed(startDate) {
        const now = new Date(); // Current date and time
        const start = new Date(startDate); // Convert startDate string to Date object
        const diffTime = now - start; // Calculate the difference in milliseconds
        const daysElapsed = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
        return daysElapsed;
    }

    // Start date (replace with your desired start date)
    const startDate = '2024-09-06'; // Example: January 1, 2024

    // Calculate the number of days elapsed since the start date
    const daysElapsed = getDaysElapsed(startDate);

    // The loading bar should increase by 1% each day, starting from 0%
    const percentage = Math.max(0, Math.min(daysElapsed, 100)); // Ensure the percentage does not exceed 100% and is at least 0%

    // Update the loading bar width and percentage display
    loadingBar.style.width = `${percentage}%`;
    percentageDisplay.textContent = `${percentage}%`;
});