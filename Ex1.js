var numero = prompt("Digite um número:");
var num = parseInt(numero);

if(isNaN(num)) {
    alert("Digite um número válido!");
} else {
    if(num % 2 === 0) {
        alert("O número é PAR");
 } else{
        alert("O número é ÍMPAR");
    }
}