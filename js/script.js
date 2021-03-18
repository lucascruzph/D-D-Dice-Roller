function roll(nomeDado){
    var txt20 = document.getElementById(nomeDado).value;
    var d20 = parseInt(txt20);
    var jogadas = new Array();

    for(var i = 0; i<d20;i++){
        var aux = getRandomIntInclusive(1,parseInt(nomeDado));
        jogadas.push(aux);
    }

    var total = somaResultados(jogadas);
    document.getElementById("jogados").innerHTML = `Individual: ${jogadas}`;
    document.getElementById("total").innerHTML = `Total: ${total}`;

}

function getRandomIntInclusive(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max - min + 1) + min);
}

function somaResultados(jogadas){
    var soma = 0;
    for(var i=0;i<jogadas.length;i++){
        soma = soma + jogadas[i];
    }
    return soma;
}