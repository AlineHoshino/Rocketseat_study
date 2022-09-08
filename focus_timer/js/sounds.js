import { inputCafe, inputFire, inputRain, inputTree } from './elements.js'
export default function() {
    const buttonCafeteria = new Audio("./sounds/Cafeteria.wav")
    const buttonRain = new Audio("./sounds/Chuva.wav")
    const buttonForest = new Audio("./sounds/Floresta.wav")
    const buttonFire = new Audio("./sounds/Lareira.wav")

    function soundCafe(){
        buttonCafeteria.play()
    }

    function volumeCafe(){
        let inputCafeValue = inputCafe.value
        buttonCafeteria.volume = inputCafeValue
    }

    function soundFire(){
        buttonFire.play()
    }

    function volumeFire(){
        let inputFireValue = inputFire.value
        buttonFire.volume = inputFireValue
    }

    function soundTree(){
        buttonForest.play()
    }

    function volumeTree(){
        let inputTreeValue = inputTree.value
        buttonForest.volume = inputTreeValue
    }

    function soundRain(){
        buttonRain.play()
    }

    function volumeRain(){
        let inputRainValue = inputRain.value
        buttonRain.volume = inputRainValue
    }

    return {
        soundCafe,
        volumeCafe,
        soundFire,
        volumeFire,
        soundTree,
        volumeTree,
        soundRain,
        volumeRain,
        buttonCafeteria,
        buttonFire,
        buttonForest,
        buttonRain
    }
}