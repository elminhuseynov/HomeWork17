let seconds = 0;
let interval; 


const timerElement = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const restartButton = document.getElementById('restartButton');


function updateTimer() {
    seconds++;
    timerElement.textContent = seconds;  
}


startButton.addEventListener('click', () => {
    if (!interval) {  
        interval = setInterval(updateTimer, 1000);
    }
});

pauseButton.addEventListener('click', () => {
    clearInterval(interval); 
    interval = 0;  
});

restartButton.addEventListener('click', () => {
    clearInterval(interval);  
    interval = 0;  //
    seconds = 0;  
    timerElement.textContent = seconds;
});
