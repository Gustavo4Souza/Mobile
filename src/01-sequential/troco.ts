import promptSync from "prompt-sync";
const prompt = promptSync();

const produto = Number(prompt("Qual o valor do produto?: "));
const quantidade = Number(prompt("Quantidade solicitada?: "));
const valorPagar = produto * quantidade;
console.log(`valor a pagar: ${valorPagar}`);
const valorRecebido = Number(prompt("Dinheiro Recebido: "));
const troco = valorRecebido - valorPagar;
console.log(`troco: ${troco}`);
