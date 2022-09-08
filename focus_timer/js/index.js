import  Controls from "./controls.js"
import  Timer from "./timer.js"
import Sound from './sounds.js'
import {
    buttonPause,
    buttonPlay,
    buttonStop,
    secondsDisplay,
    minutesDisplay,
    buttonIncreaseTime,
    buttonDecreaseTime,
    btnCafe,
    inputCafe,
    btnFire,
    inputFire,
    btnRain,
    inputRain,
    btnTree,
    inputTree,
    sol,
    lua,
    body,
    allBtn,
    allInputs

} from "./elements.js"


const controls = Controls({
    buttonPlay,
    buttonPause,
    body,
    sol,
    lua,
    btnCafe,
    allBtn,
    allInputs
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
})

const sound = Sound()

buttonPlay.addEventListener('click', function(){
    controls.play()
    timer.countdown()
})

buttonPause.addEventListener('click', function(){
    controls.pause()
    timer.hold()
})

buttonStop.addEventListener('click', function(){
    controls.reset()
    timer.reset()
})

buttonIncreaseTime.addEventListener('click', function(){
    timer.increaseTime()
})


buttonDecreaseTime.addEventListener('click', function(){
    timer.decreaseTime()
})

btnCafe.addEventListener('click', function(){
    sound.soundCafe()
})

btnCafe.addEventListener('dblclick', function(){
    sound.buttonCafeteria.pause()
})


btnFire.addEventListener('click', function(){
    sound.soundFire()
})
btnFire.addEventListener('dblclick', function(){
    sound.buttonFire.pause()
})


btnTree.addEventListener('click', function(){
    sound.soundTree()
})

btnTree.addEventListener('dblclick', function(){
    sound.buttonForest.pause()
})
btnRain.addEventListener('click', function(){
    sound.soundRain()
})

btnRain.addEventListener('dblclick', function(){
    sound.buttonRain.pause()
})
inputCafe.addEventListener('change', function(){
    sound.volumeCafe()
})

inputFire.addEventListener('change', function(){
    sound.volumeFire()
})

inputTree.addEventListener('change', function(){
    sound.volumeTree()
})

inputRain.addEventListener('change', function(){
    sound.volumeRain()
})

sol.addEventListener('click', function(){
    controls.changeMode()
    controls.addLua()
})

lua.addEventListener('click', function(){
    controls.changeMode()
    controls.addSol()
})