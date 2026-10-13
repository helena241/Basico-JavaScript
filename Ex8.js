var salario = prompt("Digite seu salário:");
var valor = parseFloat(salario);

if (isNaN(valor) || valor < 0 ) {
    alert("Digite um valor válido!");
} else{
    var categoria;
    if (valor < 1500) {
        categoria = "Baixo";
    } else if (valor <= 3000) {
        categoria = "Médio";
    } else {
        categoria = "Alto";
    }
    alert("Categoria salarial:" + categoria);
}