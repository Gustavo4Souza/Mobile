import promptSync from "prompt-sync";
const prompt = promptSync();

const n = Number(prompt("Quantos numeros vc deseja?"));

const numeros: number[] = [];

for (let i = 0; i < n; i++) {
  const numero = Number(prompt("Digite o numero: "));
  numeros.push(numero);
}

console.log("NUMEROS NEGATIVOS: ");

numeros.forEach((num) => {
  if (num < 0) {
    console.log(num);
  }
});
