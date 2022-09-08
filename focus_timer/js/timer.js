export default function Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls,

}){
    let timerTimeOut;
    let minutes = Number(minutesDisplay.textContent)
    function reset(){
        updateTimeDisplay(minutes,0)
        clearTimeout(timerTimeOut)
    }
    
    function updateTimeDisplay(newMinutes, seconds){
        newMinutes = newMinutes === undefined? minutes : newMinutes
        seconds = seconds === undefined? 0: seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2,"0")
        secondsDisplay.textContent = String(seconds).padStart(2,"0")
    }

    function increaseTime(){
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)
        updateTimeDisplay(minutes+5, seconds)
    }

    function decreaseTime(){
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)
        updateTimeDisplay(minutes-5, seconds)
    }

    function countdown(){
        timerTimeOut = setTimeout(function(){
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
    
            updateTimeDisplay(minutes,0)
            if(minutes <=0 && seconds <=0){
                resetControls()
                updateTimeDisplay()
                return
            }
            if(seconds <=0){
                seconds = 60
                --minutes
            }
            updateTimeDisplay(minutes, seconds-1)
            countdown()
    
        }, 1000)
    }

    function hold(){
        clearTimeout(timerTimeOut)
    }
    return {
        countdown,
        reset,
        hold,
        increaseTime,
        decreaseTime
    }
}
