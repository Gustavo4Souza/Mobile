    import promptSync from "prompt-sync";
    const prompt = promptSync();

    console.log("me diga os nomes das pessoas")

    const nome1 = prompt("nome: ");

    const  nome2 = prompt("nome: ");

    console.log("me diga a idade das pessoas")

    const  idade1 = Number(prompt("idade: "));

    const  idade2 = Number(prompt("idade: "));

    const media = (idade1 + idade2)/2;

    console.log(`a idade media de ${nome1} e ${nome2} é de ${media.toFixed(1)} anos`);