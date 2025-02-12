let isPlaying = false; // Track if GIF is currently playing
let clickCount = 0; // Initialize counter

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

    // Set an explicit timeout to reset the image
    setTimeout(() => {
        gif.src = staticSrc; // Reset to static image
        isPlaying = false; // Allow clicking again
    }, 1500); // Adjust this value to match GIF duration
});
