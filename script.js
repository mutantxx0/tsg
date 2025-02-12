let isPlaying = false; // Track if GIF is currently playing
let clickCount = 0; // Initialize counter
let sound = document.getElementById("sound-effect");

document.documentElement.addEventListener("click", function() {
    if (isPlaying) return; // Prevent multiple clicks while playing

    let gif = document.getElementById("gif-container");
    let counter = document.getElementById("click-count");
    let gifSrc = "animated.gif";  // Path to GIF
    let staticSrc = "static-image.png";  // Path to static image

    // Increase click count and update UI
    clickCount++;
    counter.innerText = clickCount;

    isPlaying = true; // Prevent multiple activations
    gif.src = gifSrc; // Play GIF
    sound.currentTime = 0; // Restart sound if it was already playing
    sound.play();

    // Set an explicit timeout to reset the image
    setTimeout(() => {
        gif.src = staticSrc; // Reset to static image
        isPlaying = false;
        sound.pause(); // Allow clicking again
    }, 1200); // Adjust this value to match GIF duration
});
