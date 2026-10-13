var nome = prompt("Digite seu nome:");
var idade = prompt("Digite sua idade:");
var id = parseInt(idade);

if(isNaN(id)) {
    alert("Digite um número válido!");
} else {
    if(id >= 18) {
        alert("É maior de idade");
    } else{
        alert("É menor de idade");
    }
}