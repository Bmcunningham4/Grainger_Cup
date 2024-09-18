function countdownToGraingerCup() {
    const graingerCupDate = new Date("December 27, 2024 19:00:00").getTime();
    const now = new Date().getTime();
    const timeRemaining = graingerCupDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Update each element with the corresponding value
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (timeRemaining < 0) {
        clearInterval(interval);
        document.getElementById("days").innerHTML = "0";
        document.getElementById("hours").innerHTML = "0";
        document.getElementById("minutes").innerHTML = "0";
        document.getElementById("seconds").innerHTML = "0";
        document.getElementById("timer").innerHTML = "Grainger Cup has started!";
    }
}

// Update countdown every second
const interval = setInterval(countdownToGraingerCup, 1000);
