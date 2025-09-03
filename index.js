// let secondElapsed=61;
let secondElapsed=0;
let interval=null;
const time=document.getElementById("time");





// function pasStart(value){
function padStart(value){
    return String(value).padStart(2,"0");
}
function setIime(){
    const minutes=Math.floor(secondElapsed/60);
    const seconds=secondElapsed%60;
    time.innerHTML=`${padStart(minutes)}:${padStart
        (seconds)}`;
}


function pasStart(value){
    return String(value).padStart(2,"0");
}
function timer(){
    secondElapsed++;
    setIime();
}

function startClock(){

    // if(interval)resetClock()
    if(interval)stopClock()
interval=setInterval(timer,1000)
// }



}
function stopClock(){
// xl
clearInterval(interval)
}
// fuccti
function resetClock(){
stopClock()
secondElapsed=0;
// setTimeout(() => {
    
// }, timeout);
setIime()
}