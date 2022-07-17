// let option
// let items =[]

// while(option !=3){

//     option = Number(prompt(`
//     Olá usuario! Digite o numero da opçao desejada

//     1. Cadastarr um item na lista
//     2. Mostrar os itens cadastrados
//     3. Sair do programa
//     `))

//     if(option ==1){
//         let item = prompt("Digite o nome do item")
//         items.push(item)
//     }
//     else if ( option == 2){
//         if(items.length == 0){
//             alert("Não existem itens cadastrados")
//         }else{
//             alert(items)
//         }
//     }
//     else{
//         alert("Goodbye")
//     }
// }

const patients = [{ name: "Luiz", age: 20, weight: 100, height: 190 }, { name: "Ana", age: 30, weight: 60, height: 160}, { name: "Mary", age: 50, weight: 50, height: 170}];

function printPatientIMC(patient){
    return `Paciente ${patient.name} possui o IMC de ${(patient.weight/((patient.height/100)**2)).toFixed(2)}`
}

for(let patient of patients){
   let IMCmessage = printPatientIMC(patient)
   alert(IMCmessage)
}