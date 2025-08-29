import promptSync from "prompt-sync";
const prompt = promptSync();

const qtd_num = Number(prompt("Quantos numeoros você vai digitar?: "));

let soma = 0;
let media = 0;

const numeros: number[] = [];

for (let i = 0; i < qtd_num; i++) {
  const n = Number(prompt("Digite o numero: "));
  numeros.push(n);
  soma += n;
}

media = soma / qtd_num;

console.log("numeros = " + numeros.join(" | "));
console.log(`media: ${media.toFixed(1)}`);
console.log(`soma: ${soma.toFixed(1)}`);
