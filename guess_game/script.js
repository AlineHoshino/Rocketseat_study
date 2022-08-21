const randomNumber = Math.round(Math.random() *10)
let attempts = 1
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

function handleTryClick(event){
    event.preventDefault()
    const inputNumber = document.querySelector("#inputNumber")
    if(Number(inputNumber.value) == randomNumber){
        toggleScreen()
        screen2.querySelector("h2").innerText = `voce acertou em ${attempts} tentativas`
    }
    inputNumber.value =''
    attempts++
 
}

function handleResetClick(){
    toggleScreen()
    attempts = 1
}

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}


btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)