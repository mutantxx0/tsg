// script.js
let isPlaying = false; 
let clickCount = 0; 
const sound = document.getElementById("sound-effect");

// A single function to handle clicks AND touches
function handleInteraction() {
    // (Removed the code that hides #click-instruction)

    // If a GIF is already playing, ignore any further clicks/touches
    if (isPlaying) return;

    const gif = document.getElementById("gif-container");
    const counter = document.getElementById("click-count");
    const gifSrc = "animated.gif";
    const staticSrc = "static-image.png";

    // Increase click count (really “touch” or click) and update UI
    clickCount++;
    counter.innerText = clickCount;

    isPlaying = true;     // Prevent multiple activations
    gif.src = gifSrc;     // Switch to GIF
    sound.currentTime = 0; 
    sound.play().then(() => {
        // Pause and reset after 1.2 seconds (match your GIF duration)
        setTimeout(() => {
            gif.src = staticSrc;
            isPlaying = false;
            sound.pause();
        }, 1200);
    }).catch(err => {
        console.error("Audio failed to play:", err);
        // Revert if audio fails
        gif.src = staticSrc;
        isPlaying = false;
    });
}

// Attach both click and touchend to the document
document.documentElement.addEventListener("click", handleInteraction, false);
document.documentElement.addEventListener("touchend", handleInteraction, false);
