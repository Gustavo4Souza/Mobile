import promptSync from "prompt-sync";
const prompt = promptSync();

const base = Number(prompt("Base do retangulo: "));
const altura = Number(prompt("Altura do retangulo: "));

const area = altura * base;
const perimetro = 2 * (base + altura);
const diagonal = (base ** 2 + altura ** 2) ** 0.5;

console.log(`AREA = ${area.toFixed(4)}`);
console.log(`PERIMETRO = ${perimetro.toFixed(4)}`);
console.log(`DIAGONAL = ${diagonal.toFixed(4)}`);
