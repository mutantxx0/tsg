let isPlaying = false; // Track if GIF is currently playing
let clickCount = 0;    // Initialize counter
let sound = document.getElementById("sound-effect");

document.documentElement.addEventListener("click", function() {
    if (isPlaying) return; // Prevent multiple clicks while playing

    let gif = document.getElementById("gif-container");
    let counter = document.getElementById("click-count");
    let gifSrc = "animated.gif";       // Path to your GIF
    let staticSrc = "static-image.png"; // Path to your static image

    // Increase click count and update UI
    clickCount++;
    counter.innerText = clickCount;

    isPlaying = true;   // Prevent multiple activations
    gif.src = gifSrc;   // Switch to GIF
    sound.currentTime = 0; // Restart sound if it was already playing

    // Use the play() promise to ensure audio is actually playing before pausing later
    sound.play()
    .then(() => {
        // Once audio has started, wait the desired GIF duration
        setTimeout(() => {
            // Switch back to static image and allow another click
            gif.src = staticSrc;
            isPlaying = false;
            sound.pause();
        }, 1200); // Adjust this to match your GIF length
    })
    .catch(err => {
        // If playback fails or is blocked by policy, revert state
        console.error("Audio failed to play:", err);
        gif.src = staticSrc;
        isPlaying = false;
    });
});
