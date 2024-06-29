//similar to the previous version but instead, i used a counter to calculate elapsedTime
const stopWatch = document.getElementById("stopWatch");
let intervalId = null;
let isRunning = false;
let elapsedTime = 0;

function start(){
    if (!isRunning){
        isRunning = true;
        intervalId = setInterval(update,10);
    }
}
function update () {
    elapsedTime += 10;
    let hours = Math.floor(elapsedTime / (1000 * 3600));
    let mins = Math.floor(elapsedTime / (1000 * 60)) % 60;
    let secs = Math.floor(elapsedTime / (1000)) % 60;
    let millisecs = Math.floor(elapsedTime % 1000 / 10);
    hours = String(hours).padStart(2, "0");
    mins = String(mins).padStart(2, "0");
    secs = String(secs).padStart(2, "0");
    millisecs = String(millisecs).padStart(2, "0");
    stopWatch.textContent = `${hours}:${mins}:${secs}:${millisecs}`
}

function stop(){
    if (isRunning){
        isRunning = false;
        clearInterval(intervalId);
    }
}

function reset() {
    clearInterval(intervalId);
    elapsedTime = 0;
    isRunning = false;
    stopWatch.textContent = `00:00:00:00`;
}