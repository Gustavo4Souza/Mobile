import promptSync from "prompt-sync";
const prompt = promptSync();

const raio = Number(prompt("Digite o valor do raio do circulo: "));

const areaCirculo = 3.14 * raio ** 2;

console.log(`AREA = ${areaCirculo.toFixed(3)}`);
