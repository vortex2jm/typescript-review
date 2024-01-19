// Generics em funções
function testing<T>(param:T):T {
    return param 
}

console.log(testing<string>("alou"))
console.log(testing<number>(10))


function show<T,U>(param2:U, param?:T):U {
    return param2 
}
console.log(show<string, number>(20, "oia"))


//==========================================//
//Generics em classes
class C_teste<T> {
    public value:T
    constructor(value:T){
        this.value=value
    }
}

const cex = new C_teste<number>(10);
const cex2 = new C_teste<string>("10")

