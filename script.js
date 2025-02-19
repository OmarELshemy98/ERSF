document.addEventListener('DOMContentLoaded', function () {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const sliderContainer = document.querySelector('.slider-container');
    const sliderPrev = document.querySelector('.slider-prev');
    const sliderNext = document.querySelector('.slider-next');
    const cardWidth = sliderWrapper.querySelector('div').offsetWidth; // Width of one card
    const containerWidth = sliderContainer.offsetWidth; // Width of the visible container
    let currentPosition = 0;

    // Calculate the maximum allowed position
    const maxPosition = -(sliderWrapper.scrollWidth - containerWidth);

    sliderNext.addEventListener('click', () => {
        // Prevent sliding beyond the last card
        if (currentPosition > maxPosition) {
            currentPosition -= cardWidth;
            // Ensure we don't overshoot the last card
            if (currentPosition < maxPosition) {
                currentPosition = maxPosition;
            }
            sliderWrapper.style.transform = `translateX(${currentPosition}px)`;
        }
    });

    sliderPrev.addEventListener('click', () => {
        // Prevent sliding before the first card
        if (currentPosition < 0) {
            currentPosition += cardWidth;
            // Ensure we don't go beyond the first card
            if (currentPosition > 0) {
                currentPosition = 0;
            }
            sliderWrapper.style.transform = `translateX(${currentPosition}px)`;
        }
    });
});

function showPopup() {                  
    document.getElementById('mediaPopup').style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('mediaPopup');
    if (popup) {
        popup.style.display = 'none';
    }
}

// Remove the duplicate event listener setup
document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.getElementById('closeBtn');
    if (closeBtn) {
        closeBtn.onclick = closePopup;
    }
});
// Add these functions after your existing popup functions
function showRulesPopup() {
    document.getElementById('rulesPopup').style.display = 'flex';
}

function closeRulesPopup() {
    document.getElementById('rulesPopup').style.display = 'none';
}

//newsPopup
function showNewsPopup() {
    document.getElementById('NewsPopup').style.display = 'flex';
}

function closeNewsPopup() {
    document.getElementById('NewsPopup').style.display = 'none';
}
