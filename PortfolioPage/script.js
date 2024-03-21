// Triggers modal popup when user enters the secret code "1337".
var secretCode = "1337";
var currentKeyIndex = 0;
var modal = document.getElementById('easter-egg');

document.addEventListener('keydown', function (event) {
    if (event.key === secretCode[currentKeyIndex]) {
        currentKeyIndex++;
        if (currentKeyIndex === secretCode.length) {
            console.log("Easter egg triggered");
            modal.style.display = 'block';
        }
    } else {
        currentKeyIndex = 0;
    }
});


// Flashing text functionality.
var flashingText = document.getElementById('header');
var colors = ["red", "green"];
var currentColorIndex = 0;

function toggleColor() {
    flashingText.style.color = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

setInterval(toggleColor, 500);


// Closes modal and resets the index so the easter egg can be triggered again.
var closeButton = document.getElementById('close-easter-egg');

closeButton.addEventListener('click', function () {
    modal.style.display = 'none';
    currentKeyIndex = 0;
});


// Swaps the background when the logo is clicked.
var wallpaperTrigger = document.querySelector('.logo');
var homeElement = document.querySelector('.home')
var altBackgroundTriggered = false;

wallpaperTrigger.addEventListener('click', function (event) {
    if (!altBackgroundTriggered) {
        homeElement.style.background = "url('./Images/AlternativeBackground.jpg') no-repeat";
        homeElement.style.backgroundSize = "cover";
        altBackgroundTriggered = true;
    }
    else {
        homeElement.style.background = "url('./Images/PortfolioBackground.jpg') no-repeat";
        homeElement.style.backgroundSize = "cover";
        altBackgroundTriggered = false;
    }

    console.log("Easter egg triggered");
})


window.addEventListener('scroll', function () {
    console.log('Scroll event triggered');
    var header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});