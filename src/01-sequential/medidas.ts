import promptSync from "prompt-sync";
const prompt = promptSync();

const A = Number(prompt("DIGITE A MEDIDA A: "));
const B = Number(prompt("DIGITE A MEDIDA B: "));
const C = Number(prompt("DIGITE A MEDIDA C: "));

const areaTriangulo = (A * B) / 2;
const areaTrapezio = ((A + B) * C) / 2;
const areaQuadrado = A * A;

console.log(`AREA DO QUADRADO: ${areaQuadrado.toFixed(4)}`);
console.log(`AREA DO TRIANGULO: ${areaTriangulo.toFixed(4)}`);
console.log(`AREA DO TRAPEZIO: ${areaTrapezio.toFixed(4)}`);
