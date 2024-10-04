// script.js

const clockElement = document.getElementById('clock');
const dateElement = document.getElementById('date');
const quoteElement = document.getElementById('quote');
const toggleTimeFormat = document.getElementById('toggleTimeFormat');
const toggleDate = document.getElementById('toggleDate');
const goToStopwatchPageButton = document.getElementById('goToStopwatchPage');

let is12HourFormat = false;
let quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "You are never too old to set another goal or to dream a new dream.",
];

// Function to update the time
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');

    if (is12HourFormat) {
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;  // Convert to 12-hour format
        clockElement.textContent = `${hours}:${minutes}:${seconds} ${period}`;
    } else {
        clockElement.textContent = `${String(hours).padStart(2, '0')}:${minutes}:${seconds}`;
    }

    if (toggleDate.checked) {
        dateElement.style.display = 'block';
        dateElement.textContent = now.toDateString();
    } else {
        dateElement.style.display = 'none';
    }
}

// Function to update the quote
function updateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
    quoteElement.style.opacity = 1;
    setTimeout(() => quoteElement.style.opacity = 0, 9000);
}

// Event Listeners for Time Format Toggle and Date
toggleTimeFormat.addEventListener('change', () => {
    is12HourFormat = toggleTimeFormat.checked;
});
toggleDate.addEventListener('change', () => {
    dateElement.style.display = toggleDate.checked ? 'block' : 'none';
});

// Update the clock every second
setInterval(updateClock, 1000);

// Update the quote every 10 seconds
updateQuote();
setInterval(updateQuote, 10000);

// Button to navigate to the stopwatch page
goToStopwatchPageButton.addEventListener('click', () => {
    window.location.href = 'stopwatch.html';  // Redirect to the stopwatch page
});
