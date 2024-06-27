function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;
    
    if (de > ate) {
        alert('Opa! Parece que o campo “Do número” tem um valor maior que o valor informado no campo “Até o número” reveja se inseriu os dados corretamente ;)');
        return;
    
    } else if (quantidade > (ate - de + 1)) {
        alert(`Não é possível sortear ${quantidade} números entre ${de} e ${ate} pois não há possibilidades o suficiente, reveja se inseriu as informações corretamente`);
        return;
    } else { for (let i = 0; i < quantidade; i++) {
            numero = sorteiaNumero(de, ate);
    
            while (sorteados.includes(numero)) {
                numero = sorteiaNumero(de, ate);
            }
            sorteados.push(numero);
        }
    
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
        alterarStatusBotao();
    }
    
}

function sorteiaNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();

}