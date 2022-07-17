let num1 = Number(prompt("Digite o primeiro número"))
let num2 = Number(prompt('Digite o segundo número'))

let soma = num1 + num2
alert(`A soma dos dois números é ${soma}`)
let sub = num1 - num2
alert(`A subtração dos dois números é ${sub}`)
let mult = num1 * num2
alert(`A multiplicação dos dois números é ${mult}`)
let division = (num1 /num2).toFixed(2)
alert(` A divisão dos dois números é ${division}`)
let resto = num1 % num2
alert(`O resto da divisão dos dois números é ${resto}`)
if(soma % 2 === 0){
    alert(`A soma dos dois números é par:${soma}`)
}else{
    alert(`A soma dos dois números é ímpar:${soma}`)
}

if(num1 ==num2){
    alert(`os dois números inseridos são iguais`)
}else{
    alert(`os dois números inseridos são diferentes`)
}
