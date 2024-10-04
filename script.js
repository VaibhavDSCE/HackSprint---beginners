/* style.css */
body {
    font-family: 'Courier New', Courier, monospace;
    background-color: #1a1a1a;
    color: #33FF66;
    text-align: center;
    padding: 50px;
}

.clock {
    font-size: 6rem;
    margin-bottom: 20px;
    border-radius: 30px;
    padding: 10px;
    border: 4px solid #33FF66;
    display: inline-block;
    text-shadow: 0 0 15px #33FF66, 0 0 25px #33FF66;
}

.date {
    font-size: 2rem;
    margin-bottom: 10px;
    text-shadow: 0 0 10px #33FF66, 0 0 15px #33FF66;
}

.quote {
    font-size: 1.5rem;
    margin-top: 10px;
    transition: opacity 1s ease-in-out;
    opacity: 0;
}

.settings {
    margin-top: 20px;
}

.stopwatch-title {
    margin-top: 30px;
    font-size: 2.5rem;
    color: #33FF66;
    text-shadow: 0 0 10px #33FF66, 0 0 15px #33FF66;
}

.timer-container {
    margin-top: 20px;
}

#stopwatchDisplay {
    font-size: 3rem;
    margin-bottom: 10px;
}

button {
    margin: 5px;
    padding: 10px;
    background-color: #33FF66;
    color: #1a1a1a;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
