let numero1: number = 100;
let numero2: number = 200;
let numero3: number = 300;

let numeros: number[] = [numero1, numero2, numero3];

numeros.sort((a, b) => b - a);
console.log(numeros);