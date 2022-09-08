
export default function Controls({
    buttonPlay,
    buttonPause,
    body,
    sol,
    lua,
    allBtn,
    allInputs
}){
    function play(){
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
    }
    function pause(){
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
    }
    function reset(){
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
    }
    function changeMode(){
        body.classList.toggle("dark")
        allBtn.forEach(btn => {
            btn.classList.toggle("dark")
        });
        allInputs.forEach(input => input.classList.toggle("dark"))
    }
    function addLua(){
        sol.classList.add('hide')
        lua.classList.remove('hide')
    }
    function addSol(){
        lua.classList.add('hide')
        sol.classList.remove('hide')
    }
    return {
        reset,
        play,
        pause,
        changeMode,
        addLua,
        addSol
    }
}
