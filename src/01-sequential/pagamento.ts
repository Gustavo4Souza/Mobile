import promptSync from "prompt-sync";
const prompt = promptSync();

const funcionario = String(prompt("Qual o nome do funcionario?: "));
const valorHora = Number(prompt("Valor Hora?: "));
const horasTrabalhadas = Number(prompt("Horas trabalhadas?: "));

const valorReceber = horasTrabalhadas * valorHora;

console.log(`NOME = ${funcionario}`);
console.log(`VALOR POR HORA = ${valorHora}`);
console.log(`HORAS TRABALHADAS = ${horasTrabalhadas}`);
console.log(`O pagamento para ${funcionario} deve ser = ${valorReceber}`);
