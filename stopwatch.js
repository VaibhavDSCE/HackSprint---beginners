// stopwatch.js

let stopwatchInterval = null;
let stopwatchTime = 0;  // Time in milliseconds
const stopwatchDisplay = document.getElementById('stopwatchDisplay');
const startButton = document.getElementById('startStopwatch');
const stopButton = document.getElementById('stopStopwatch');
const resetButton = document.getElementById('resetStopwatch');
const backToMainPageButton = document.getElementById('backToMainPage');

// Function to update the stopwatch display
function updateStopwatch() {
    stopwatchTime += 10;  // Increase time by 10 milliseconds each time

    const hours = String(Math.floor(stopwatchTime / 3600000)).padStart(2, '0');  // 1 hour = 3600000ms
    const minutes = String(Math.floor((stopwatchTime % 3600000) / 60000)).padStart(2, '0');  // 1 min = 60000ms
    const seconds = String(Math.floor((stopwatchTime % 60000) / 1000)).padStart(2, '0');  // 1 sec = 1000ms
    const milliseconds = String(stopwatchTime % 1000).padStart(3, '0');  // Remaining ms

    // Display the time in the format HH:MM:SS.mmm
    stopwatchDisplay.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

// Start the stopwatch
startButton.addEventListener('click', () => {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(updateStopwatch, 10);  // Update every 10ms for milliseconds
    }
});

// Stop the stopwatch
stopButton.addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
});

// Reset the stopwatch
resetButton.addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    stopwatchTime = 0;
    stopwatchDisplay.textContent = '00:00:00.000';
});

// Button to go back to the main page
backToMainPageButton.addEventListener('click', () => {
    window.location.href = 'index.html';  // Redirect back to the main page
});
