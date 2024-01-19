// Declarando uma classe normal
class Computer{
    private id: number
    private name: string
    private ram: number
    private cpu: string
    protected ligado:boolean

    constructor(nome:string, ram:number, cpu:string){
        this.name = nome
        this.ram = ram
        this.cpu = cpu
        this.id = 0
        this.ligado = false
    }

    info():void{
        console.log(this.name)
        console.log(this.ram)
        console.log(this.cpu)
        console.log(this.ligado)
    }

    turnOn():void{
        this.ligado = true
        console.log("Ligando o PC")
    }
}

const pc1 = new Computer("Jojo", 16, "coreI5")
pc1.turnOn()
pc1.info()


// Herança=======================
// Classe abstrata
// Testando o marcador de acesso protected
// Utilizando getters e setters
abstract class Conta{
    private readonly id:number
    private numero:number
    protected titular:string

    constructor(num:number, tit:string){
        this.numero = num
        this.titular = tit
        this.id = 0
    }

    public getAccountNumber():number{
        return this.numero
    }

    public getAccountTitular(){
        return this.titular
    }

    public setNumber(num:number):void{
        this.numero = num
    }
}


interface Tributos{
    taxaCalculo:number
}

class ContaPf extends Conta implements Tributos{
    private cpf:string
    taxaCalculo:number
    constructor(num:number, tit:string, cpf:string){
        super(num, tit)
        this.cpf = cpf
        this.taxaCalculo=0
    }

    public getAccountCpf():string{
        return this.cpf
    }

    public setTit(tit:string):void{
        this.titular = tit
    }
}

class ContaPj extends Conta{
    private cnpj:string
    constructor(num:number, tit:string, cnpj:string){
        super(num, tit)
        this.cnpj = cnpj
    }

    public getAccountCnpj():string{
        return this.cnpj
    }
}

const acc1 = new ContaPf(1,"jao", "123401912832")
let accNumber = acc1.getAccountNumber()
console.log(accNumber)


// Interfaces===============================
interface curso {
    titulo:string
    desc:string
    maxAlunos?:number
    initCourse():void
}

// Interfaces são semelhantes a types
let c1:curso = {
    titulo: "Cs2",
    desc: "Coroepancada",
    maxAlunos:10,
    initCourse() {
        console.log("curso iniciado")
    },
}

let c2:curso = {
    titulo: "Cs2",
    desc: "Coroepancada",
    initCourse() {
        console.log("curso iniciado")
    },
}

console.log(c1)
console.log(c2)
c2.initCourse()

interface cursoProg extends curso {
    aulas:number
}

let c3:cursoProg = {
    titulo: "show",
    desc: "coroepancada",
    aulas: 10,
    initCourse() {
        console.log("curso iniciado")
    },    
}
console.log(c3)
