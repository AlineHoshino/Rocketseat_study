import  resetControls from "./controls.js"
import  { Timer } from "./timer.js"

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const secondsDisplay = document.querySelector('.seconds')
const minutesDisplay = document.querySelector('.minutes')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut;


const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeOut,
    resetControls,
})

buttonPlay.addEventListener('click', function(){
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    timer.countdown()
})

buttonPause.addEventListener('click', function(){
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    clearTimeout(timerTimeOut)
})

buttonStop.addEventListener('click', function(){
    resetControls()
    timer.resetTimer()
})