// JavaScript to dynamically adjust background colors or overlay opacity based on user interaction or time
const background = document.querySelector('.background');

// Example: Changing background color on hover
background.addEventListener('mouseover', () => {
    background.style.backgroundColor = 'linear-gradient(to right, #ffcc00, #ff9933, #ffc000)';
});

background.addEventListener('mouseleave', () => {
    background.style.backgroundColor = 'linear-gradient(to right, #ff9933, #ffc000, #ffcc00)';
});


// JavaScript to dynamically adjust background colors or overlay opacity based on user interaction or time
const background = document.querySelector('.background');
                    
// Example: Changing background color on hover
background.addEventListener('mouseover', () => {
    background.style.backgroundColor = 'linear-gradient(to right, #ffcc00, #ff9933, #ffc000)';
});

background.addEventListener('mouseleave', () => {
    background.style.backgroundColor = 'linear-gradient(to right, #ff9933, #ffc000, #ffcc00)';
});

// Example: Fading in/out the overlay
let overlayOpacity = 0;
setInterval(() => {
    overlayOpacity += 0.01;
    background.style.opacity = overlayOpacity;

    if (overlayOpacity >= 1) {
        clearInterval(interval);
    }
}, 100);