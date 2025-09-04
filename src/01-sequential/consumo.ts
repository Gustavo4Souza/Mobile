import promptSync from "prompt-sync";
const prompt = promptSync();

const distancia = Number(prompt("Qual a distancia percorrida?: "));
const gastoConbustivel = Number(prompt("Conbustivel gasto?: "));

const consumoMedio = distancia / gastoConbustivel;

console.log(`Distancia Percorrida: ${distancia}`);
console.log(`Conbustivel Gasto: ${gastoConbustivel}`);
console.log(`Consumo Medio: ${consumoMedio.toFixed(3)}`);
