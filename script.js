// Wait until the DOM is fully loaded before running the script
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

// Initialize the current index for blockquote
let currentIndex = 1;

// Function to switch to the next blockquote by index
function scrollToNext(nextIndex) {
    // Get the currently active blockquote element
    const currentBlockquote = document.querySelector('.blockquote-item.active');
    
    // Get the next blockquote element by its ID
    const nextBlockquote = document.getElementById(`quote${nextIndex}`);
    
    // Remove the 'active' class from the current blockquote if it exists
    if (currentBlockquote) {
        currentBlockquote.classList.remove('active');
    }
    
    // Add the 'active' class to the next blockquote if it exists
    if (nextBlockquote) {
        nextBlockquote.classList.add('active');
        currentIndex = nextIndex; // Update the current index
    }
}

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the background audio element by its ID
    var audio = document.getElementById('background-audio');

    // Attempt to play the audio automatically
    audio.play().catch(function(error) {
        console.log('Autoplay blocked. Waiting for user interaction.');
        
        // If autoplay is blocked, add a click event listener to play the audio on user interaction
        document.body.addEventListener('click', function() {
            audio.play().catch(function(error) {
                console.log('Playback error:', error);
            });
        });
    });
});

// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', () => {
    // Get the loading bar element by its ID
    const loadingBar = document.getElementById('satanic-loading-bar');
    
    // Get the percentage display element by its ID
    const percentageDisplay = document.getElementById('satanic-percentage');

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
