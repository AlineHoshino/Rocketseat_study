let student = prompt("Qual o seu nome")
let nota1 = prompt("Nota da primeira prova")
let nota2 = prompt("Nota segunda prova?")
let nota3 = prompt("Nota da terceira prova?")

let sum = Number(nota1) + Number(nota2) + Number(nota3)
let media = sum/3
let result = media > 6
media = media.toFixed(2)

if(result){
    alert(`Parabéns ${student}! Sua média geral foi: ${media}`)
}else{
    alert(`${student} estude para sua prova de recuperação , sua média foi ${media}`)
}