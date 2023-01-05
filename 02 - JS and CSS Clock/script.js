const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const now = new Date();
const seconds = now.getSeconds();
const mins = now.getMinutes();
const hour = now.getHours();

// Set the degrees values on initial page load
var secondsDegrees = ((360 / 60) * seconds) + 90;
var minsDegrees = ((360 / 60) * mins) + 90;
var hourDegrees = ((360 / 12) * hour) + 90;

function setDate() {

    // Calculate the degree shift
    secondsDegrees += 6; // 360 deg/ 60s => per sec 6 degree change for second hand
    minsDegrees += 0.1; // 360 deg/ 60s/ 60m => per sec 0.1 degree change for min hand
    hourDegrees += 0.0083; // 360 deg/ 60s/ 60m / 12h => per sec 0.0083 degree change for hour hand

    // Apply the styling
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    console.log(seconds, secondsDegrees, minsDegrees, hourDegrees);
}

// Call setDate function once every second
setInterval(setDate, 1000);
setDate();
