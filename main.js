const secondHand = document.querySelector('.second-hand'); // creates a variable and assigns it the value that is contained within the "second-hand" class
const minsHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() { //create a new function
    const now = new Date(); // create a variable and assign it the JS object Date

    const seconds = now.getSeconds(); // create a variable and pass it the value that is stored in the the Date objects getSeconds function
    const secondsDegrees = ((seconds / 60) * 360) + 90; // create variable and pass it the value of the function getSeconds. Apply maths to trnaslate to a round visual object
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // update the value of secondHand with the value that is applied in the secondsDegrees just above


    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`; 
}

setInterval(setDate, 1000);
setDate();
