export default function Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeOut,
    resetControls,
    minutes
}){
    function reset(){
        updateTimeDisplay(minutes,0)
        clearTimeout(timerTimeOut)
    }
    
    function updateTimeDisplay(minutes, seconds){
        minutesDisplay.textContent = String(minutes).padStart(2,"0")
        secondsDisplay.textContent = String(seconds).padStart(2,"0")
    }
    function countdown(){
        timerTimeOut =setTimeout(function(){
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
    
            updateTimeDisplay(minutes,0)
            if(minutes <=0){
                resetControls()
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
    return {
        countdown,
        reset
    }
}
