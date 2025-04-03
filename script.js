const colors = {
    1: "#ff4d4d",   // Red
    2: "#ff9933",   // Orange
    3: "#ffcc00",   // Yellow
    4: "#33cc33",   // Green
    5: "#3399ff",   // Blue
    6: "#6600cc",   // Indigo
    7: "#cc33ff",   // Violet
    8: "#ff66b2",   // Pink
};

let currentNumber = "";
let startTime = 0;
let currentDigits = 3;

function generateNumber() {
    let number = "";
    for (let i = 0; i < currentDigits; i++) {
        const randomDigit = Math.floor(Math.random() * 8) + 1;
        number += randomDigit;
    }
    currentNumber = number;

    // Display the number with colored boxes
    const numberContainer = document.getElementById("number-container");
    numberContainer.innerHTML = "";
    for (let i = 0; i < number.length; i++) {
        const span = document.createElement("span");
        span.textContent = number[i];
        span.classList.add("number-box");
        span.style.backgroundColor = colors[number[i]];
        numberContainer.appendChild(span);
    }

    // Start the timer
    startTime = Date.now();
    document.getElementById("input-box").value = ""; // Clear input field
    document.getElementById("status-message").textContent = "";
}

function checkInput() {
    const input = document.getElementById("input-box").value;

    if (input === currentNumber) {
        const timeTaken = ((Date.now() - startTime) / 1000).toFixed(2);
        document.getElementById("time-taken").textContent = `You took ${timeTaken} seconds.`;
        setTimeout(nextRound, 1500);
    } else if (input.length === currentDigits) {
        document.getElementById("status-message").textContent = "Incorrect! Try again.";
        document.getElementById("input-box").value = "";
    }
}

function nextRound() {
    if (currentDigits < 8) {
        currentDigits++;
    }
    generateNumber();
}

document.getElementById("input-box").addEventListener("input", checkInput);

// Start the game
generateNumber();
