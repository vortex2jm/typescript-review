//arrays======
let ar:number[] = [1,2,3,4]
let [a,b,c,d] = ar
console.log(a,b,c,d)

//objetos======
const obj = {
    cor1: "amarelo",
    cor2: "verde",
    cor3: "vermelho"
}

let {cor1, cor2, cor3} = obj


// array + spread======
let [nu1, nu2, ...nu3] = [1,2,3,4,5,6,7,8,9]
console.log(nu3)


// strings
let texto:string = "Curso de Typescript"
let [...t] = texto.split(" ")
console.log(t)


