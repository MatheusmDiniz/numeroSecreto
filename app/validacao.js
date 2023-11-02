function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;
    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div> Valor invalido</div>'
        return;
    }

    if(numeroMaiorMenor(numero)){
        elementoChute.innerHTML += `<div>Valor invalido: Tem q ser entre ${menorValor} e ${maiorValor}</div>`
        return;
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2> Você Acertou!</h2>
            <h3> O numero secreto era ${numeroSecreto}</h3>
        `
    }else if (numero > numeroSecreto){
            elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
            `
    }else{
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
            `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorMenor(numero) {
    return numero > maiorValor || numero < menorValor
}
