// Usando operador spread para rest param
function fsoma(...n:number[]):void{
    
    let result:number=0
    n.forEach((element)=>{
        result+=element
    })
    console.log(result)
}

fsoma(1,2,3,4,5)

