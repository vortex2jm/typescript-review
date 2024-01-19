//forEach=========
// Itera sobre cada elemento de um array e executa uma 
//função de callback para cada elemento.

let nums:number[] = [1,2,3,4,5]
nums.forEach((num) => {
    console.log(num)
})

//map=============
// Cria um novo array ao chamar uma função de callback 
// em cada elemento do array original. Retorna um array 
// com o mesmo comprimento, mas com cada elemento transformado conforme a função fornecida.

let squaredNumbers = nums.map((num) => {
    return num * num
})
console.log(squaredNumbers)


//filter=========
// Cria um novo array contendo apenas os elementos do array
// original para os quais a função de callback retorna true.
// Filtra os elementos com base em uma condição.

let evenNumbers = nums.filter((num) => {
    return num % 2 === 0
})
console.log(evenNumbers)

//reduce========
// Aplica uma função de callback a cada elemento do array, resultando
// em um único valor acumulado. É útil para reduzir um array a um único valor.

let sum = nums.reduce((acc, num) => {
    return acc + num
})
console.log(sum)
