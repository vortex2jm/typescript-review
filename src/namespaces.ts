// O export tem função de permitir q o conteúdo de um nasmespace seja disponível fora dele
namespace Veiculos {

    export class Carro{
        nome:string
        constructor(nome:string){
            this.nome = nome
        }
    }

    export namespace Motores{
        export class Motor{
            pot:number
            constructor(pot:number){
                this.pot = pot
            }
        }
    }
}

const car = new Veiculos.Carro("Marea")
const motor = new Veiculos.Motores.Motor(1000)
