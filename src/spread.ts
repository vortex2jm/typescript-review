const numeros = [1, 2, 3];
const maisNumeros = [...numeros, 4, 5, 6];

console.log(maisNumeros); // Saída: [1, 2, 3, 4, 5, 6]

//===========================//
const pessoa = { nome: 'João', idade: 25 };
const pessoaAtualizada = { ...pessoa, idade: 26, cidade: 'São Paulo' };

console.log(pessoaAtualizada);
// Saída: { nome: 'João', idade: 26, cidade: 'São Paulo' }

//===========================//
const original = { a: 1, b: 2 };
const copia = { ...original };

console.log(copia); // Saída: { a: 1, b: 2 }

//===========================//
const palavra = 'hello';
const letras = [...palavra];

console.log(letras); // Saída: ['h', 'e', 'l', 'l', 'o']
