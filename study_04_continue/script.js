let subject ='create'

function think(subject){
    subject='oi'
    return subject
}

console.log(think(subject))
console.log(subject)

// callback function

function sayMyName(name){
    console.log('antes do callback')
    name()
    console.log('depois do callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)

function Person(name){
    this.name = name
    this.walk = function(){
        return "andando"
    }
}
const mayk = new Person("Mayk")
const joao = new Person("Joao")
console.log(mayk)
console.log(joao)

let number = 345.33456
console.log(number.toFixed(2).replace(".",","))

let phrase = "Eu quero viver o Amor"
console.log(phrase.split(" ").join("_"))

console.log(phrase.includes("amor"))

// criar array construtor

let myArray = new Array("a","b","c")
console.log(myArray)

console.log(["a", {type:"array"}, function(){return "alo"}][2]())

let word = 'manipulação'
console.log(Array.from(word))

// Manipulando arrays

let techs =['html','css','javascript']
//final
techs.push('python')
//começo
techs.unshift('react')
//remover do final 
techs.pop()
//remover do começo
techs.shift()
// techs.slice(1,3)//corte da posição um ate o fim do array-css e js
techs.splice(1,2)

const person = {
    name:'Mayk',
    age: 25,
}

delete person.age

console.log(person)


function sayMyName(name =''){
    if(name ===''){
        throw new Error('nome é necessário')
    }
    console.log(name)
}

//try catch

try{
sayMyName('Mayk')
}catch(e){
    console.log(e)
}

for(let i=60; i>0; i--){
    if(i===50){
        break;
    }
    console.log(i)
}

for(let i=10;i>0; i--){
    if(i===5){
        continue;
    }
    console.log(i)
}

// for in 

let person = {
    name: 'Jon',
    age:30,
    weigth:88,
}

for(let property in person){
    console.log(person[property])
}
