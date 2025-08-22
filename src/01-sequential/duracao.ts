    import promptSync from 'prompt-sync';
    const prompt = promptSync();

    const duracaoSegundo = Number(prompt("Digite a duracao em segundos "));

    const horas = Math.floor(duracaoSegundo / 3600);
    const minutos = Math.floor(duracaoSegundo % 3600)/60;
    const segundos = duracaoSegundo % 60;

    console.log(`horas:${horas} - segundos:${segundos} - minutos: ${minutos}`)