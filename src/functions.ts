// Declaração normal de funções 
function teste() :void {
    console.log("teste")
}
teste()

//=====================
function login(user:string, password:string) :void {
    console.log(`User: ${user}`)
    console.log(`Password: ${password}`)
}
login("joao", "coroepancada")

//=====================
function soma(v1:number, v2:number):number {
    return v1 + v2
}
let som:number = soma(10, 12)
console.log(som)

let somstring:string = soma(33, 45).toString()
console.log(somstring)


//Parametros padroes=========== 
function somapadrao(v1:number=0, v2:number=0):number {
    return v1 + v2
}
console.log(somapadrao())

//Parametro opcional
function newUser(user:string, pass:string, nome?:string):void {
    console.log(`User: ${user}`)
    console.log(`Password: ${pass}`)
    console.log(`Name: ${nome}`)
}

newUser("joao", "coroepancada")


//Arrow function (função anonima)==============
const ftest = (txt:string):void => {
    console.log(`Testando ${txt}`)
}
ftest("...")
