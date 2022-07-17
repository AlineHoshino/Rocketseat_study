let students = [
    {
        nome:"Aline",
        nota1: 8,
        nota2: 9
    },
    {
        nome:"Lucas",
        nota1: 7,
        nota2: 5
    },
    {
        nome:"Tim Jom",
        nota1: 10,
        nota2: 9
    },
    {
        nome:"André",
        nota1: 9,
        nota2: 9.5
    }
]

function media(nota1, nota2) {
    let sum = nota1 + nota2
    let media = sum/2
    return media
}

function printMedia(student){
    let mediaAluno = `${media(student.nota1, student.nota2)}`
     let message =(`A média do aluno(a) ${student.nome} é : ${mediaAluno}\n`)
    if(mediaAluno >=7){
        message+= `Parabéns, ${student.nome}! Você foi aprovado(a) no concurso`
    }else{
        message+= `Não foi dessa vez, ${student.nome}! Tente novamente!`
    }
    return message
}

for (let student of students){
    let printMessage = `${printMedia(student)}`
    alert(printMessage)
}