"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = require("prompt-sync");
var prompt = (0, prompt_sync_1.default)();
var duracaoSegundo = Number(prompt("Digite a duracao em segundos "));
var horas = Math.floor(duracaoSegundo / 3600);
var minutos = Math.floor(duracaoSegundo % 3600) / 60;
var segundos = duracaoSegundo % 60;
console.log("horas:".concat(horas, " - segundos:").concat(segundos, " - minutos: ").concat(minutos));
