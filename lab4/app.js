let nextButton = document.querySelector(".next");
let previousButton = document.querySelector(".previous");
let slideButton = document.querySelector(".slide");
let stopButton = document.querySelector(".stop");

let img = document.querySelector("img");

let counter = 1;

nextButton.addEventListener('click', next);
previousButton.addEventListener('click', previous);
slideButton.addEventListener('click', slide);
stopButton.addEventListener('click', stop);

let intervalId = null;


function next() {
    counter++;
    if (counter > 3) counter = 1;
    img.src = `assets/${counter}.png`;
}

function previous() {
    counter--;
    if (counter < 1) counter = 3;
    img.src = `assets/${counter}.png`;
}


function slide() {
    if (!intervalId) {
        intervalId = setInterval(next, 1000);
    }
}

function stop() {
    clearInterval(intervalId);
}