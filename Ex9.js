var velocidade = prompt("Digite a velocidade do veiculo(km/h):");
var valor  = parsetFloat(valocidade);

if (isNaN(valor) || valor < 0) {
    alert("Digite uma velocidade válida!");
} else {
    var classificacao;
    if(valor <= 60) {
        classificacao = "Velocidade Normal";
    } else if (valor <= 80) {
        classificacao = "Atenção";
    } else {
        classificacao = "Multado";
    }
    alert("Classificação: " + classificacao);
}