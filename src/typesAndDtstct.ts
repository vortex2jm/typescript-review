//  Types
const nome:string = "João"
const idade:number = 24
const estudante:boolean = true
const curso:any = "EngComp"


// Union Types
let vet:(string|number)[] = []
vet.push("oi")
vet.push(10)
console.log(vet)


// Arrays | Readonly arrays
let myArray:Array<number> = [1,2,3]
let mySecondArray:number[] = [1,2,3]
let myThirdArray: Array<number|string> = [4,5,6]
let myFourthArray: (number|string)[] = [4,5,6]

myArray.push(20)
myArray.unshift(30)
console.log(myArray)
myArray.pop()
myArray.shift()
console.log(myArray)

// Não pode ser modificado, porém há métodos como map, filter, etc..
let rArray:ReadonlyArray<number> = [10,20,30]


// Tuplas==============
// As posições no array devem ter o mesmo tipo especificado na tipagem
let myTuple:[string, number] = ["Alou", 33]
let mySecondTuple:readonly[number, boolean] = [11, true]


//Objetos==============
let dados = {
    nome: "Joao",
    idade: 24,
    curso: "EngComp",
    ola:()=>{console.log("oi")},
    info:(p:string)=>{console.log(p)}
}

//Enum=================
enum dias {
    domingo,
    segunda,
    terca
}
console.log(dias.segunda)
console.log(dias['segunda'])

enum cores{
    branco="#FFF",
    preto="000"
}
console.log(cores.branco)

const cor:cores = cores.preto
console.log(cor)


//Type Assertion===========
let nvalue:number;
let svalue:string;
let uvalue:unknown;

uvalue = 10
nvalue = <number>uvalue;
svalue = <string>uvalue;

console.log(typeof(nvalue))
console.log(nvalue)
console.log(typeof(svalue))
console.log(svalue)


//Typecast-================
svalue = "20"
nvalue = Number.parseInt(svalue)
console.log(nvalue)

nvalue = 45
svalue = nvalue.toString()
console.log(svalue)

