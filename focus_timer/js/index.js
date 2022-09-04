import  Controls from "./controls.js"
import  Timer from "./timer.js"

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const secondsDisplay = document.querySelector('.seconds')
const minutesDisplay = document.querySelector('.minutes')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut;

const controls = Controls({
    buttonPlay,
    buttonPause
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeOut,
    resetControls: controls.reset,
    minutes
})

buttonPlay.addEventListener('click', function(){
    controls.play()
    timer.countdown()
})

buttonPause.addEventListener('click', function(){
    controls.pause()
    clearTimeout(timerTimeOut)
})

buttonStop.addEventListener('click', function(){
    controls.reset()
    timer.reset()
})