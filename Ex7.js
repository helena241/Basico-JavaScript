var idade = prompt("Digite a idade:");
var idadeNum  = parseInt(idade);

if (isNaN(idadeNum) || idadeNum < 0) {
    alert("Digite uma idade válida!");
} else {
    var categoria;
    if(idadeNum < 12) {
        categoria = "Infantil";
    } else if (idadeNum <= 17) {
        categoria = "Adolecente";
    } else if ( idadeNum <= 59) {
        categoria = "Adulto";
    } else {
        categoria = "Idoso";
    }
    alert("Categoria:" + categoria); 
}